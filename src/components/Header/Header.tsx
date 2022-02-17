import * as S from "./styles";
export interface IHeader {
  title: string;
  subTitle: string;
  pictureSrc: string;
  pictureAlt: string;
}
function Header({ title, subTitle, pictureSrc, pictureAlt }: IHeader) {
  return (
    <S.Container>
      <S.Image src={pictureSrc} alt={pictureAlt}></S.Image>
      <S.Title>{title}</S.Title>
      <S.SubTitle>{subTitle}</S.SubTitle>
    </S.Container>
  );
}

export default Header;
