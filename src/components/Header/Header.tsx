import styles from "./Header.module.css";
export interface IHeader {
  title: string;
  subTitle: string;
  pictureSrc: string;
  pictureAlt: string;
}
function Header({ title, subTitle, pictureSrc, pictureAlt }: IHeader) {
  return (
    <header className={styles.container}>
      <img className={styles.image} src={pictureSrc} alt={pictureAlt}></img>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.subTitle}>{subTitle}</h2>
    </header>
  );
}

export default Header;
