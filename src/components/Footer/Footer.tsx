import * as S from "./styles";
export interface IFooter {
  text: string;
}

function Footer({ text }: IFooter) {
  return <S.Container>{text}</S.Container>;
}

export default Footer;
