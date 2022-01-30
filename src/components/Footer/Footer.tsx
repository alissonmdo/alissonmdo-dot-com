import styles from "./Footer.module.css";
export interface IFooter {
  text: string;
}

function Footer({ text }: IFooter) {
  return <footer className={styles.container}>{text}</footer>;
}

export default Footer;
