import ExpenseDisplay from "./components/Expenses/ExpenseDisplay";
function App() {
	const expenses = [
		{
			id: "e1",
			title: "New Guitar",
			amount: 732,
			date: new Date(2022, 7, 14),
		},
		{
			id: "e2",
			title: "Plane Tickets to San Antonio",
			amount: 200,
			date: new Date(2021, 2, 12),
		},
		{
			id: "e3",
			title: "Car Insurance",
			amount: 294.67,
			date: new Date(2021, 2, 28),
		},
		{
			id: "e4",
			title: "New Desk (Wooden)",
			amount: 200,
			date: new Date(2018, 5, 12),
		},
	];
	// return React.createElement(
	// 	"div",
	// 	{},
	// 	React.createElement("h2", {}, "Let's get started!"),
	// 	React.createElement(ExpenseDisplay, { expense: expenses })
	// ); // This is the same as the JSX below
	return (
		<div>
			<h2>Let&apos;s get started!</h2>
			<ExpenseDisplay expense={expenses} />
		</div>
	);
}

export default App;
