import Card from "../Card/Card";
import "./ExpenseDisplay.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";

const ExpenseDisplay = (props) => {
	return (
		<div>
			<Card className='expenses'>
				<ExpenseFilter />
				{props.expense.map((expense) => (
					<ExpenseItem key={expense.id} expense={expense} />
				))}
			</Card>
		</div>
	);
};

export default ExpenseDisplay;
