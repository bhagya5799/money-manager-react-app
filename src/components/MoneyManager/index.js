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
  },
  {
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png',
    moneyType: 'Your Income',
    Class: 'Income',
  },
  {
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png',
    moneyType: 'Your Expenses',
    Class: 'expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: '',
    moneyBankList: [],
    trasnactionList: [],
  }

  onSubmitButton = e => {
    e.preventDefault()
    const {title, amount, type, moneyBankList} = this.state
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
    console.log(moneyBankList)
  }

  onChangeTitle = e => {
    const {title} = this.state
    this.setState({title: e.target.value})
    console.log(title)
  }

  render() {
    const {title, amount, type, moneyBankList, trasnactionList} = this.state
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
          {moneyDetailsList.map(eachItem => (
            <MoneyDetails details={eachItem} />
          ))}
        </ul>
        <div className="transaction-history-details">
          <div className="transaction">
            <h3 className="add-transaction">Add Transaction</h3>
            <form onSubmit={this.onSubmitButton}>
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
                onChange={e => this.setState({amount: e.target.value})}
                type="text"
                id="amount"
                value={amount}
                placeholder="Amount"
              />
              <br />
              <label htmlFor="type">Type</label> <br />
              <select
                id="type"
                value={type}
                onChange={e => this.setState({type: e.target.value})}
              >
                <option>Income</option>
                <option>Expenses</option>
              </select>
              <br />
              <button type="submit">Add</button>
            </form>
          </div>
          <div className="history-container">
            <h2>History</h2>
            <div className="history-items">
              <span className="title">Title</span>
              <span className="title">Amount</span>
              <span className="title">Type</span>
              <span />
            </div>
            <ul className="transactionItems-container">
              {moneyBankList.map(eachItem => (
                <TransactionItem details={eachItem} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
