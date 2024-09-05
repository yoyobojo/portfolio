import { LINKS } from '@/utils/constants';
import { calcTimeDifference } from '@/utils/helpers';
import { OnePageLink } from '@/ui/components';

const ABOUT_ITEMS = [
  {
    label: 'Age',
    value: `${calcTimeDifference(
      new Date(),
      new Date('September 8, 1999'),
      'years'
    )} Years`
  },
  { label: 'Job', value: 'Engineer' },
  { label: 'Nationality', value: 'Romanian' },
  { label: 'Residence', value: 'Planet Earth' }
];

const About = () => {
  return (
    <div className="section about section_" id="about">
      <div className="content">
        <div className="title">
          <div className="title_inner">About Me</div>
        </div>
        <div className="image">
          <img
            src="images/profile-picture.jpg"
            alt="Angello Lazar Profile Picture"
          />
        </div>
        <div className="desc">
          <div className="info-list">
            <ul>
              {ABOUT_ITEMS.map(({ label, value }, i) => (
                <li key={`about-info-${i}`}>
                  <strong>{label}:</strong> {value}
                </li>
              ))}
            </ul>
          </div>
          <p>
            GM! Glad you found me! They know me as ALo in the ether, but you can
            call me Angello.
          </p>
          <p>
            One thing about me is that I am passionately curious. I studied Economics, Computer Science, and Mathematics at New York
            University. Lucky for me, I went to work in corporate as a software engineer and consultant for a few years after graduating. With the business and tech knowledge I gained from there, I decided to start{' '}
            <a
              href={LINKS.suavetech}
              target="_blank"
              style={{ textDecoration: 'underline' }}
            >
              Suave Tech Solutions
            </a>
            , a tech consulting company focusing on blockchain, web development,
            and automation, where I could more actively choose the work I'm
            involved in.
          </p>
          <p>
            If I am not working, working out, or watching/playing soccer, you
            can find me in a park reading a book or out at a bar
            sipping a godfather.
          </p>
          <div className="flex items-center gap-3">
            {/* <div className="bts">
              <a
                href="/files/alazar-cv.pdf"
                target="_blank"
                className="btn fill"
                data-text="Download CV"
              >
                Download CV
              </a>
            </div> */}
            <div className="lnk">
              <OnePageLink href="#works">View Recent Works</OnePageLink>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};

export default About;
