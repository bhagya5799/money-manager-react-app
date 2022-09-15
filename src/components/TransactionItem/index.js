// Write your code here
import React from 'react'

const TransactionItem = props => {
  const details = props
  const {title, amount, type, moneyBankList} = details

  return (
    <div>
      <p>{title}</p>
      <p>{amount}</p>
      <p>{type}</p>
      <button>
        <img src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png" />
      </button>
    </div>
  )
}
export default TransactionItem
