import PropTypes from "prop-types";
import styles from "./Button.module.css";
function Button({ text }) {
    return <button className={styles.btn}>{text}</button>;
}

Button.propTypes = { // button에서 text가 string으로 오게 만듬
    text: PropTypes.string.isRequired,
}
export default Button;