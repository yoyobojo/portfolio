import { LINKS } from '@/utils/constants';
import { SocialLink } from '../components';

export const Footer = () => {
  return (
    <footer>
      <div className="soc">
        <SocialLink 
          link={LINKS.linkedin}
          icon="linkedin"
        />
        <SocialLink 
          link={LINKS.github}
          icon="github"
        />
        <SocialLink 
          link={LINKS.calendly}
          icon="calendar"
        />
      </div>
      <div className="copy">
        © {new Date().getFullYear()} Suave Tech Solutions. All rights reserved.
      </div>
      <div className="clr" />
    </footer>
  );
};
