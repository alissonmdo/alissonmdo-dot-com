import { IButton } from "../components/Button/Button";
import { IHeader } from "../components/Header/Header";

type ContentType = {
  header: IHeader;
  buttons: IButton[];
  socialLinks: string[];
  footerText: string;
};
export const content: ContentType = {
  header: {
    title: "Alisson Oliveira",
    subTitle: "@alissonmdo",
    pictureSrc: "assets/profile_pic.jpg",
    pictureAlt: "Alisson Oliveira",
  },
  buttons: [
    { link: "https://www.alisson.dev", text: "Developer Portfolio" },
    { link: "https://www.alissonoliveira.com", text: "Personal Website" },
  ],
  socialLinks: [
    "https://github.com/alissonmdo",
    "https://www.linkedin.com/in/alissonmdo",
    "https://twitter.com/alissonmdo",
    "https://twitch.tv/alissonmdo",
  ],
  footerText: "Made with love in Brazil.",
};
