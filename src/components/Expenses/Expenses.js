import React, { useState } from 'react'
import Card from '../UI/Card'
import './Expense.css'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2022')

  const filterYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilterdYear={filterYearHandler}
        />
        {props.data.map((expense, i) => (
          <ExpenseItem
            key={i}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        ))}
      </Card>
    </div>
  )
}

export default Expenses
