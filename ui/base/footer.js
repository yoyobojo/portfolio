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
        <a target="_blank" href={LINKS.calendly}>
          <span className="ion ion-calendar" />
        </a>

      </div>
      <div className="copy">
        © {new Date().getFullYear()} Suave Tech Solutions. All rights reserved.
      </div>
      <div className="clr" />
    </footer>
  );
};