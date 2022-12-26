import { SocialIcon } from "react-social-icons";

export function SocialLinks({ links }: { links: any[] }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "end",
        width: "100%",
        padding: "10px 20%"
      }}
    >
      {links.map((link) => (
        <SocialIcon key={link.href} url={link.href} bgColor="#fff" />
      ))}
    </div>
  );
}
