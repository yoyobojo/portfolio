import { LINKS } from '@/utils/constants';
import { calcTimeDifference } from '@/utils/helpers';
import { OnePageLink } from '@/ui/components';

const ABOUT_ITEMS = [
  { label: 'Name', value: 'Angello Lazar' },
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
  { label: 'Residence', value: 'Atlanta / NYC' }
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
            I studied Economics, Computer Science, and Mathematics at New York
            University. Lucky for me, I landed a job with the{' '}
            <a
              href={LINKS.ibmix}
              target="_blank"
              style={{ textDecoration: 'underline' }}
            >
              iX Team at IBM
            </a>{' '}
            as a software engineer and consultant after graduation. After
            gaining business knowledge there and learning valuable corporate
            skills, I decided to start{' '}
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
            can find me in a park in Manhattan reading a book or out at a bar
            sipping a godfather.
          </p>
          <div className="flex items-center gap-3">
            <div className="bts">
              <a href="#" className="btn fill" data-text="Download Resume">
                Download Resume
              </a>
            </div>
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
