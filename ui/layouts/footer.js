import { LINKS } from "@/utils/constants";

export const Footer = () => {
  return (
    <footer>
      <div className="soc">
        <a target="_blank" href={LINKS.linkedin}>
          <span className="ion ion-social-linkedin" />
        </a>
        <a target="_blank" href={LINKS.github}>
          <span className="ion ion-social-github" />
        </a>
        <a target="_blank" href={LINKS.twitter}>
          <span className="ion ion-social-twitter" />
        </a>
        <a target="_blank" href={LINKS.instagram}>
          <span className="ion ion-social-instagram" />
        </a>
      </div>
      <div className="copy">
        © {new Date().getFullYear()} Suave Tech Solutions. All rights reserved.
      </div>
      <div className="clr" />
    </footer>
  );
};