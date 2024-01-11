'use client';
import { useGlobalContext } from '@/stores/global';
import PopContainer from './PopupContainer';
const ProjectPopup = () => {
  const { setPortfolioModal, portfolioModal } = useGlobalContext();
  console.log('port', portfolioModal);
  return (
    <PopContainer nullValue={setPortfolioModal}>
      <div className="content">
        {/* {portfolioModal.gallery.map((g, i) => (
        <div className="image" key={`portfolio-modal-${portfolioModal.title}-${i}`}>
        <img src={g} alt={portfolioModal.description} />
      </div>
        ))} */}
        <div className="image">
          <img
            src={portfolioModal.gallery[0]}
            alt={portfolioModal.description}
          />
        </div>
        <div className="desc">
          <div className="category">{portfolioModal.category}</div>
          <h4>{portfolioModal.title}</h4>
          <p>{portfolioModal.description}</p>
          <a
            href={portfolioModal.link}
            target="_blank"
            className="btn"
            data-text="View Project"
          >
            View Project
          </a>
        </div>
      </div>
    </PopContainer>
  );
};
export default ProjectPopup;
