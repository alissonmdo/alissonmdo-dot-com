import { SocialIcon } from "react-social-icons";
import styles from "./SocialLinks.module.css";
export interface ISocialLinks {
  links: string[];
}
function SocialLinks({ links }: ISocialLinks) {
  return (
    <div className={styles.container}>
      {links.map((link) => (
        <SocialIcon className={styles.icon} url={link} fgColor="white" style={{zoom: "0.8"}} />
      ))}
    </div>
  );
}

export default SocialLinks;
