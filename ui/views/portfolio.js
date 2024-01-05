"use client";
import { context } from "@/stores/global";
import FsLightbox from "fslightbox-react";
import Isotope from "isotope-layout";
import {
  Fragment,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const galleryImages = {
  1: [
    "images/works/work1.jpg",
    "images/works/work2.jpg",
    "images/works/work3.jpg",
    "images/works/work4.jpg",
  ],
  2: [
    "images/works/work5.jpg",
    "images/works/work2.jpg",
    "images/works/work3.jpg",
    "images/works/work4.jpg",
  ],
};

const Portfolio = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".portfolio-items", {
        itemSelector: ".box-item",
        // layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".box-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    // return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = useCallback(
    (key) => () => {
      setFilterKey(key);
    },
    []
  );

  const activeBtn = (value) => (value === filterKey ? "glitch-effect" : "");

  const [activeGallaryImage, setActiveGallaryImage] = useState(1);
  const [gallery, setGallery] = useState(false);

  const { modalToggle, setPortfolioModal } = useContext(context);

  return (
    <Fragment>
      <FsLightbox
        toggler={gallery}
        sources={galleryImages[activeGallaryImage]}
      />
      <div className="section works section_" id="works">
        <div className="content pt-4">
          <div className="title">
            <div className="title_inner">Recent Works</div>
          </div>
          <div className="filter-menu">
            <div className="filters">
              <div className="btn-group">
                <label
                  data-text="All"
                  className={`c-pointer ${activeBtn("*")}`}
                  onClick={handleFilterKeyChange("*")}
                >
                  <input
                    type="radio"
                    name="fl_radio"
                    defaultValue=".box-item"
                  />
                  All
                </label>
              </div>
              <div className="btn-group">
                <label
                  data-text="Links"
                  className={`c-pointer ${activeBtn("f-links")}`}
                  onClick={handleFilterKeyChange("f-links")}
                >
                  <input type="radio" name="fl_radio" defaultValue=".f-links" />
                  Links
                </label>
              </div>
              <div className="btn-group">
                <label
                  data-text="Content"
                  className={`c-pointer ${activeBtn("f-content")}`}
                  onClick={handleFilterKeyChange("f-content")}
                >
                  <input
                    type="radio"
                    name="fl_radio"
                    defaultValue=".f-content"
                  />
                  Content
                </label>
              </div>
            </div>
          </div>
          <div className="box-items portfolio-items">
            <div className="box-item f-links">
              <div className="image">
                <a
                  href="https://beshley.com/"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/works/work8.jpg" alt />
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
                <div className="category">Links</div>
                <a href="https://beshley.com/" className="name has-popup-link">
                  Lorem Ipsum
                </a>
              </div>
            </div>
            <div className="box-item f-content">
              <div className="image">
                <a
                  href="#popup-1"
                  className="has-popup-media"
                  onClick={(e) => {
                    e.preventDefault();
                    modalToggle(true);
                    setPortfolioModal(true);
                  }}
                >
                  <img src="images/works/work3.jpg" alt />
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
                <div className="category">Content</div>
                <a
                  href="#popup-1"
                  className="name has-popup-media"
                  onClick={(e) => {
                    e.preventDefault();
                    modalToggle(true);
                    setPortfolioModal(true);
                  }}
                >
                  Lorem Ipsum
                </a>
              </div>
            </div>
            <div className="box-item f-content">
              <div className="image">
                <a
                  href="#popup-2"
                  className="has-popup-media"
                  onClick={(e) => {
                    e.preventDefault();
                    modalToggle(true);
                    setPortfolioModal(true);
                  }}
                >
                  <img src="images/works/work3.jpg" alt />
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
                <div className="category">Content</div>
                <a
                  href="#popup-2"
                  className="name has-popup-media"
                  onClick={(e) => {
                    e.preventDefault();
                    modalToggle(true);
                    setPortfolioModal(true);
                  }}
                >
                  Lorem Ipsum
                </a>
              </div>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};

export default Portfolio;