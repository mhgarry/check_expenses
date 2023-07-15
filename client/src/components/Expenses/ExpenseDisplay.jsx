import { useState } from 'react';

import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import './ExpenseDisplay.css';

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2020');

	const filterChangeHandler = selectedYear => {
		setFilteredYear(selectedYear);
	};

	const filteredExpenses = props.items.filter(
		expense => {
			return (
				expense.date.getFullYear().toString() === filteredYear
			);
		}
	);

	return (
		<li>
			<Card className='expenses'>
				<ExpenseFilter
					selected={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>
				<ExpensesChart expense={filteredExpenses} />
				<ExpensesList items={filteredExpenses} />
			</Card>
		</li>
	);
};

export default Expenses;