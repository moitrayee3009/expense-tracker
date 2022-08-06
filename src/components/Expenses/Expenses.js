import React, { useState } from 'react'
import Card from '../UI/Card'
import './Expense.css'
// import ExpenseItem from './ExpenseItem/ExpenseItem'
import ExpensesFilter from './ExpenseFilter/ExpensesFilter'
import ExpensesList from './ExpenseList/ExpensesList'
import ExpensesChart from './ExpensesChart'

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2021')

  const filterYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  const filteredEXpensesByYear = props.data.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilterdYear={filterYearHandler}
        />
        <ExpensesChart expenses={filteredEXpensesByYear} />
        <ExpensesList data={filteredEXpensesByYear} />
      </Card>
    </div>
  )
}

export default Expenses
