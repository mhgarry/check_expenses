import Card from "../Card/Card";
import "./ExpenseDisplay.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";

const ExpenseDisplay = (props) => {
	const filterChangeHandler = selectedYear => {
		console.log('ExpenseDisplay.js');
		console.log(selectedYear);
	}
	return (
		<div>
			<Card className='expenses'>
				<ExpenseFilter onChangeFilter={filterChangeHandler} />
				{props.expense.map((expense) => (
					<ExpenseItem key={expense.id} expense={expense} />
				))}
			</Card>
		</div >
	);
};

export default ExpenseDisplay;
