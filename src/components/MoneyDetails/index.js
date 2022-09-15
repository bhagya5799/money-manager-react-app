// Write your code here
import React from 'react'

import './index.css'

const MoneyDetails = props => {
  const {details} = props
  const {imgUrl, moneyType, Class, amount, alt} = details
  return (
    <li className={`money-details-container ${Class}`}>
      <div>
        <img className="image-money" src={imgUrl} alt={alt} />
      </div>
      <div className="your-balance">
        <p>{moneyType}</p>
        <p className="cash">0</p>
      </div>
    </li>
  )
}

export default MoneyDetails
