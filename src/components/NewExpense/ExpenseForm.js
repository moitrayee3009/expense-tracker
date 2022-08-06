import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
  const [newTitle, setNewTitle] = useState('')
  const [newAmount, setNewAmount] = useState('')
  const [newDate, setNewDate] = useState('')

  const titleChangeHandler = (e) => {
    setNewTitle(e.target.value)
    console.log(newTitle)
  }

  const amountChangeHandler = (e) => {
    setNewAmount(e.target.value)
  }

  const dateChangeHandler = (e) => {
    setNewDate(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()

    const expenseData = {
      title: newTitle,
      amount: newAmount,
      date: new Date(newDate)
    }
    props.onSaveExpenseData(expenseData)
    setNewTitle('')
    setNewAmount('')
    setNewDate('')
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            name='title'
            value={newTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label htmlFor='amount'>Amount</label>
          <input
            type='number'
            name='amount'
            value={newAmount}
            onChange={amountChangeHandler}
            min='0.01'
            step='0.01'
          />
        </div>
        <div className='new-expense__control'>
          <label htmlFor='date'>Date</label>
          <input
            type='date'
            name='date'
            value={newDate}
            onChange={dateChangeHandler}
            min='2019-01-01'
            max='2022-12-31'
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
