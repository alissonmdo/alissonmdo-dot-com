import { SocialIcon } from "react-social-icons";
import * as S from "./styles";
export interface ISocialLinks {
  links: string[];
}
function SocialLinks({ links }: ISocialLinks) {
  return (
    <S.Container>
      {links.map((link) => (
        <SocialIcon url={link} fgColor="white" style={{ zoom: "0.8" }} />
      ))}
    </S.Container>
  );
}

export default SocialLinks;
