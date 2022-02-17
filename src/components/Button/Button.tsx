import * as S from "./styles";
export interface IButton {
  text: string;
  link: string;
}
function Button({ text, link }: IButton) {
  const goTo = () => {
    window.location.href = link;
  };
  return <S.Container onClick={() => goTo()}>{text}</S.Container>;
}

export default Button;
