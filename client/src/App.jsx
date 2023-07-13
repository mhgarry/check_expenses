import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/ExpenseDisplay';

const DUMMY_EXPENSES = [
	{
		id: 'e1',
		title: 'New Guitar',
		amount: 760.32,
		date: new Date(2020, 7, 14),
	},
	{
		id: 'e2',
		title: 'Back to School Gear',
		amount: 150.34,
		date: new Date(2021, 2, 12)
	},
	{
		id: 'e3',
		title: 'Groceries',
		amount: 120.39,
		date: new Date(2021, 2, 28),
	},
	{
		id: 'e4',
		title: 'Plane Tickets',
		amount: 432.34,
		date: new Date(2021, 5, 12),
	},
];

const App = () => {
	const [expense, setExpenses] = useState(DUMMY_EXPENSES);

	const addExpenseHandler = (expense) => {
		setExpenses(
			(prevExpenses) => {
				return [expense, ...prevExpenses];
			});
	};

	// return React.createElement(
	//   'div',
	//   {},
	//   React.createElement('h2', {}, "Let's get started!"),
	//   React.createElement(Expenses, { items: expenses })
	// );

	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses items={expense} />
		</div>
	);
}

export default App;