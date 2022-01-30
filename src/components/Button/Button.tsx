import styles from "./Button.module.css";
export interface IButton {
  text: string;
  link: string;
}
function Button({ text, link }: IButton) {
  const goTo = () => {
    window.location.href = link;
  };
  return (
    <button className={styles.container} onClick={() => goTo()}>
      {text}
    </button>
  );
}

export default Button;
