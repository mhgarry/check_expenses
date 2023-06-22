import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
const ExpenseItem = (props) => {
	return (
		<div className='expense-item'>
			<ExpenseDate expense={props.expense} />
			<div className='expense-item__description'>
				<h2>{props.expense.title}</h2>
				<div className='expense-item__price'>${props.expense.amount}</div>
			</div>
		</div>
	);
};
// to iso string built in js method to convert date to string
export default ExpenseItem;
