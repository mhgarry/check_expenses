import Card from "../Card/Card";
import "./ExpenseDate.css";
const ExpenseDate = (props) => {
	const month = props.expense.date.toLocaleString("en-US", { month: "long" });
	const day = props.expense.date.toLocaleString("en-US", { day: "2-digit" });
	const year = props.expense.date.getFullYear();

	return (
		<Card className='expense-date'>
			<div className='expense-date__month'>{month}</div>
			<div className='expense-date__year'>{year}</div>
			<div className='expense-date__day'>{day}</div>
		</Card>
	);
};

export default ExpenseDate;
