import styles from "./styles/App.module.css";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import SocialLinks from "./components/SocialLinks/SocialLinks";
import Footer from "./components/Footer/Footer";
import { content } from "./config/content";

function App() {
  return (
    <div className={`${styles.container}`}>
      <Header
        title={content.header.title}
        subTitle={content.header.subTitle}
        pictureSrc={content.header.pictureSrc}
        pictureAlt={content.header.pictureAlt}
      />
      {content.buttons.map((link) => (
        <Button link={link.link} text={link.text} key={link.text} />
      ))}
      <SocialLinks links={content.socialLinks} />
      <Footer text={content.footerText} />
    </div>
  );
}

export default App;
