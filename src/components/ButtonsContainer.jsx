import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({onButtonClick}) => {

  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((icon) => (
        <button className={styles.button} onClick={() => onButtonClick(icon)}>{icon}</button>
        ))}
    </div>
  )

}

export default ButtonsContainer;