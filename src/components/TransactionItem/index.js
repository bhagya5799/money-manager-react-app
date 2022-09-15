// Write your code here
import React from 'react'

import './index.css'

const TransactionItem = props => {
  const {details} = props
  const {title, amount, type, moneyBankList} = details
  return (
    <li className="items-container">
      <span className="ss">{title}</span>
      <span>{amount}</span>
      <span>{type}</span>
      <img src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png " />
    </li>
  )
}
export default TransactionItem
