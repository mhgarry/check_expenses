// import "./ExpenseDisplay.css";
// import ExpenseItem from "./ExpenseItem";

// const ExpenseDisplay = (props, expense) => {
// 	return (
// 		<div className='expenses'>
// 			{props.expenses.map((expense) => (
// 				<ExpenseItem key={expense.id} expense={expense} />
// 			))}
// 		</div>
// 	);
// };

// export default ExpenseDisplay;
import "./ExpenseDisplay.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseDisplay = (props) => {
	return (
		<div className='expenses'>
			{props.expense.map((expense) => (
				<ExpenseItem key={expense.id} expense={expense} />
			))}
		</div>
		// <div className='expenses'>
		// 	{props.expense.map((expense) => {
		// 		return <ExpenseItem key={props.expense.expenses} expense={expenses} />;
		// 	})}
	);
};

export default ExpenseDisplay;
