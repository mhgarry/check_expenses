import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = () => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     title: '',
    //     amount: '',
    //     date: '',
    // }); // piece of state instead of 3 seperate pieces of state

    // const titleChangeHandler = (event) => {
    //     setTitle(event.target.value);
    //     // setUserInput({
    //     //     ...userInput,
    //     //     title: event.target.value,

    //     // });
    //     // setUserInput((prevState) => {
    //     //     return { ...prevState, title: event.target.value };
    //     // }); // use when state depends of previous state (recommended)
    // };

    // const amountChangeHandler = (event) => {
    //     setAmount(event.target.value);
    //     // setUserInput((prevState) => {
    //     //     return { ...prevState, amount: event.target.value };
    //     // })
    // };

    // const dateChangeHandler = (event) => {
    //     setDate(event.target.value);
    //     // setUserInput((prevState) => {
    //     //     return { ...prevState, date: event.target.value };
    //     // })
    // };

    const inputChangeHandler = (inputName, value) => {
        if (inputName === 'title') {
            setTitle(value);
        } else if (inputName === 'amount') {
            setAmount(value);
        } else if (inputName === 'date') {
            setDate(value);
        }
    };

    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input onChange={(event) => inputChangeHandler('title', event.target.value)} type='text' />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input onChange={(event) => inputChangeHandler('amount', event.target.value)} type='number' min='0.01' step='0.01' />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input onChange={(event) => inputChangeHandler('date', event.target.value)} type='date' min='2019-01-01' max='2024-12-31' />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;