import React from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/ExpenseDisplay';

const App = () => {
	const expenses = [
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

	const addExpenseHandler = expense => {
		console.log('In App.js');
		console.log(expense);
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
			<Expenses items={expenses} />
		</div>
	);
}

export default App;