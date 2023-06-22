import Card from "./Card";
import "./ExpenseDisplay.css";
import ExpenseItem from "./ExpenseItem";
const ExpenseDisplay = (props) => {
	return (
		<Card className='expenses'>
			{props.expense.map((expense) => (
				<ExpenseItem key={expense.id} expense={expense} />
			))}
		</Card>
	);
};

export default ExpenseDisplay;
