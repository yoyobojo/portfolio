import { LINKS } from "@/utils/constants";
import { calcTimeDifference } from "@/utils/helpers"

const About = () => {
  return (
    <div className="section about section_" id="about">
      <div className="content">
        <div className="title">
          <div className="title_inner">About Me</div>
        </div>
        <div className="image">
          <img src="images/profile-picture.jpg" alt="Angello Lazar Profile Picture" />
        </div>
        <div className="desc">
          <p>
            I am a New York University graduate where I studied Economics, Computer 
            Science, and Mathematics. After graduating from college, I began working 
            in the{" "}
            <a href={LINKS.ibmix} target="_blank" style={{ textDecoration: "underline" }}>iX Team at IBM</a>
            {" "}as a software engineer and consultant. After gaining
            business knowledge there and learning valuable corporate skills, I decided 
            to start{" "}
            <a href={LINKS.suavetech} target="_blank" style={{ textDecoration: "underline" }}>Suave Tech Solutions</a>
            , a tech consulting company focusing on blockchain and automation, where 
            I could more actively choose the work I'm involved in.
          </p>
          <p>
            If I am not working, working out, or watching/playing soccer, you can find 
            me in a park in Manhattan reading a book or out at a bar sipping a godfather.
          </p>
          <div className="info-list">
            <ul>
              <li>
                <strong>Name:</strong> Angello Lazar
              </li>
              <li>
                <strong>Age:</strong> {calcTimeDifference(new Date(), new Date("September 8, 1999"), 'years')} Years
              </li>
              <li>
                <strong>Job:</strong> Engineer
              </li>
              <li>
                <strong>Nationality:</strong> Romanian
              </li>
              <li>
                <strong>Residence: </strong> Atlanta / NYC
              </li>
            </ul>
          </div>
          <div className="bts">
            <a href="#" className="btn fill" data-text="Download CV">
              Download CV
            </a>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};

export default About;