import React, { useState } from 'react'
import './ExpenseItem.css'
import './ExpenseDate'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title)

  const clickHandler = () => {
    setTitle('updated!!')
  }
  return (
    <Card className='expense-item'>
      {/* <div>{props.date.toISOString().split('T')[0]}</div> */}
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>SEK {props.amount}</div>
      </div>
      <button onClick={clickHandler}> new Title</button>
    </Card>
  )
}

export default ExpenseItem
