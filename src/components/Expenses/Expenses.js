import React from 'react'
import Card from '../UI/Card'
import './Expense.css'
import ExpenseItem from './ExpenseItem'

function Expenses(props) {
  return (
    <Card className='expenses'>
      {props.data.map((expense, i) => (
        <ExpenseItem
          key={i}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </Card>
  )
}

export default Expenses
