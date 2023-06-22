// export const Paragraph = () => {
// 	const para = document.createElement("p"); // create a <p> element
// 	para.textContent = "Yayayayaya"; // set the text content inside the <p> element
// 	document.getElementById("root").append(para); // append the <p> element to the <div id="root"> element
// }; //js logic equivalent to the following jsx: <p>Yayayayaya</p>, it is imperative programming instead of declarative programming
import ExpenseItem from "./components/ExpenseItem";

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
	return (
		<div>
			<h2>Let&apos;s get started!</h2>
			<ExpenseItem expense={expenses[0]}></ExpenseItem>
			<ExpenseItem expense={expenses[1]}></ExpenseItem>
			<ExpenseItem expense={expenses[2]}></ExpenseItem>
			<ExpenseItem expense={expenses[3]}></ExpenseItem>
		</div>
	);
} // react code is declarative programming, it is not imperative programming, it is not js code, it is jsx code, it is not html code, it is jsx code, it is not css code, it is jsx code. The nature of declartive programming lets react build user interfaces that are more predictable and easier to debug and that take less time to develop.

export default App;
