import React, {Component} from 'react'

import './index.css'

import {v4 as uuidv4} from 'uuid'

import MoneyDetails from '../MoneyDetails/index'

import TransactionItem from '../TransactionItem/index'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]
const moneyDetailsList = [
  {
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png',
    moneyType: 'Your Balance',
    Class: 'balance',
    amount: 0,
    alt: 'balance',
  },
  {
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png',
    moneyType: 'Your Income',
    Class: 'Income',
    amount: 0,
    alt: 'income',
  },
  {
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png',
    moneyType: 'Your Expenses',
    Class: 'expenses',
    amount: 0,
    alt: 'expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: 'Income',
    moneyBankList: [],
    income: 0,
    expense: 0,
    balance: 0,
  }

  addButtonClick = () => {
    const {type, amount, income, expense, balance} = this.state
    console.log(amount)
    if (type === 'Income') {
      this.setState({balance: amount + balance})
      console.log(balance)
    } else {
      console.log(amount)
    }
  }

  onSubmitForm = e => {
    e.preventDefault()
    const {
      title,
      amount,
      type,
      moneyBankList,
      income,
      expense,
      balance,
    } = this.state
    // console.log('clikcked')
    const newListItems = {
      title,
      amount,
      type,
      id: uuidv4(),
    }
    this.setState({
      moneyBankList: [...moneyBankList, newListItems],
      title: '',
      amount: '',
      type: '',
    })
    if (type === 'INCOME') {
      this.setState({
        income: Number(income) + Number(amount),
      })
    } else if (type === 'EXPENSES') {
      this.setState({
        expense: Number(expense) + Number(amount),
      })
    }
    // console.log(moneyBankList)
  }

  onChangeTitle = e => {
    const {title} = this.state
    this.setState({title: e.target.value})
    // console.log(title)
  }

  render() {
    const {
      title,
      amount,
      type,
      moneyBankList,
      income,
      balance,
      expense,
    } = this.state
    // console.log(title, amount, type)
    return (
      <div className="money-manager-container">
        <div className="profile-manager">
          <h3>Hi! Richard</h3>
          <p>
            Welcome Back to your
            <span> Money Manager</span>
          </p>
        </div>
        <ul className="money-details">
          {moneyDetailsList.map(eachItem => {
            const itemWithAmount = {
              ...eachItem,
              amount: {
                balance,
                expense,
                income,
              },
            }
            return <MoneyDetails details={itemWithAmount} />
          })}
        </ul>
        <div className="transaction-history-details">
          <div className="transaction">
            <h3 className="add-transaction">Add Transaction</h3>
            <form onSubmit={this.onSubmitForm}>
              <label htmlFor="title">Title</label> <br />
              <input
                onChange={this.onChangeTitle}
                type="text"
                id="title"
                value={title}
                placeholder="Title"
              />
              <br />
              <label htmlFor="amount">Amount</label> <br />
              <input
                onChange={e => {
                  this.setState({amount: e.target.value})
                }}
                type="text"
                id="amount"
                value={amount}
                placeholder="Amount"
              />
              <br />
              <label htmlFor="optionId">Type</label> <br />
              <select
                id="optionId"
                value={type}
                onChange={e => {
                  this.setState({type: e.target.value})
                }}
              >
                <option>Select</option>
                {transactionTypeOptions.map(t => (
                  <option value={t.displayText}>{t.displayText}</option>
                ))}
              </select>
              <br />
              <button type="submit" onClick={this.addButtonClick}>
                Add
              </button>
            </form>
          </div>
          <div className="history-container">
            <h2>History</h2>
            <div className="history-items">
              <p className="title">Title</p>
              <p className="title">Amount</p>
              <p className="title">Type</p>
              <p />
            </div>
            <ul className="transactionItems-container">
              {moneyBankList.map(eachItem => (
                <TransactionItem details={eachItem} key={eachItem.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
