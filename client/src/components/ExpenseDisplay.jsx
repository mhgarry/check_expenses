import "./ExpenseDisplay.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseDisplay = (props) => {
	return (
		<div className='expenses'>
			{props.expense.map((expense) => (
				<ExpenseItem key={expense.id} expense={expense} />
			))}
		</div>
	);
};

export default ExpenseDisplay;
