// export const Paragraph = () => {
// 	const para = document.createElement("p"); // create a <p> element
// 	para.textContent = "Yayayayaya"; // set the text content inside the <p> element
// 	document.getElementById("root").append(para); // append the <p> element to the <div id="root"> element
// }; //js logic equivalent to the following jsx: <p>Yayayayaya</p>, it is imperative programming instead of declarative programming
import ExpenseItem from "./components/ExpenseItem";

function App() {
	return (
		<div>
			<h1>Hello World!</h1>
			<ExpenseItem />
		</div>
	);
} // react code is declarative programming, it is not imperative programming, it is not js code, it is jsx code, it is not html code, it is jsx code, it is not css code, it is jsx code. The nature of declartive programming lets react build user interfaces that are more predictable and easier to debug and that take less time to develop.

export default App;
