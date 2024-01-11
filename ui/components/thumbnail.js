import { useGlobalContext } from '@/stores/global';

export const Thumbnail = (props) => {
  const {
    type,
    category,
    img,
    title,
    description,
    link
  } = props;
  const { modalToggle, setPortfolioModal } = useGlobalContext();

  switch (type) {
    case 'modal': {
      return (
        <div className="box-item f-content">
          <div className="image">
            <a
              href="#popup-1"
              className="has-popup-media"
              onClick={(e) => {
                e.preventDefault();
                modalToggle(true);
                setPortfolioModal(props);
              }}
            >
              <img src={img} alt />
              <span className="info">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="ion ion-ios-plus-empty" />
                  </span>
                </span>
              </span>
            </a>
          </div>
          <div className="desc">
            <div className="category">{category}</div>
            <a
              href="#popup-1"
              className="name has-popup-media"
              onClick={(e) => {
                e.preventDefault();
                modalToggle(true);
                setPortfolioModal(props);
              }}
            >
              {title}
            </a>
          </div>
        </div>
      );
    }
    default: {
      return (
        <div className="box-item f-links">
          <div className="image">
            <a href={link} className="has-popup-link" target="_blank">
              <img src={img} alt />
              <span className="info">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="ion ion-link" />
                  </span>
                </span>
              </span>
            </a>
          </div>
          <div className="desc">
            <div className="category">{category}</div>
            <a href={link} className="name has-popup-link">
              {title}
            </a>
          </div>
        </div>
      );
    }
  }
};
