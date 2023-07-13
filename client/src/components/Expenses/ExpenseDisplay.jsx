import { useState } from "react";
import Card from "../Card/Card";
import "./ExpenseDisplay.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";

const ExpenseDisplay = (props) => {
	const [filteredYear, setFilteredYear] = useState('2020');

	const filterChangeHandler = selectedYear => {
		setFilteredYear(selectedYear);
	};

	return (
		<div>
			<Card className='expenses'>
				<ExpenseFilter onChangeFilter={filterChangeHandler} selected={filteredYear} />
				{props.expense.map((expense) => (
					<ExpenseItem key={expense.id} expense={expense} />
				))}
			</Card>
		</div >
	);
};

export default ExpenseDisplay;
