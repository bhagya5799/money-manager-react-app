// Write your code here
import React from 'react'

import './index.css'

const MoneyDetails = props => {
  const {details} = props
  const {imgUrl, moneyType, Class} = details
  return (
    <li className={`money-details-container ${Class}`}>
      <div>
        <img className="image-money" src={imgUrl} />
      </div>
      <div className="your-balance">
        <p>{moneyType}</p>
        <span className="cash">RS 0</span>
      </div>
    </li>
  )
}

export default MoneyDetails
