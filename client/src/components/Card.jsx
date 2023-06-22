// shell component for card
import "./Card.css";

const Card = (props) => {
	const classes = "card " + props.className;
	return <div className={classes}>{props.children}</div>;
};

export default Card;
// wrapper component for card
