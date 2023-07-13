import Card from "../Card/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import React, { useState } from "react";

const ExpenseItem = (props) => {
	// useState(); // updates the state of a component to show different data on the screen. Must be called inside of component functions nor nested functions
	// useState() returns an array with exactly 2 elements
	// 1st element is the current state
	// 2nd element is a function that allows us to update the state
	// use state returns current value and a function to assign to a new value
	// each component has its own state

	const [title, setTitle] = useState(props.expense.title);

	const changeTitle = () => {
		setTitle('Updated!');
	};

	return (
		<Card className='expense-item'>
			<ExpenseDate expense={props.expense} />
			<div className='expense-item__description'>
				<h2>{title}</h2>
				<div className='expense-item__price'>${props.expense.amount}</div>
			</div>
			<button onClick={changeTitle}>Change Title</button>
		</Card>
	);
};

export default ExpenseItem;
