import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import SocialLinks from "./components/SocialLinks/SocialLinks";
import Footer from "./components/Footer/Footer";
import { content } from "./config/content";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding-bottom: 15vh;
  background: linear-gradient(111.72deg, #0a9396 0%, #001219 100%);
`;
function App() {
  return (
    <Container>
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
    </Container>
  );
}

export default App;
