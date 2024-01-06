'use client';
import Isotope from 'isotope-layout';
import { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import { Thumbnail } from '@/ui/components';

const Portfolio = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState('*');
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope('.portfolio-items', {
        itemSelector: '.box-item',
        // layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: '.box-item'
        },
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
        }
      });
    }, 1000);
    // return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === '*'
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

  const activeBtn = (value) => (value === filterKey ? 'glitch-effect' : '');

  return (
    <Fragment>
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
                  className={`c-pointer ${activeBtn('*')}`}
                  onClick={handleFilterKeyChange('*')}
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
                  className={`c-pointer ${activeBtn('f-links')}`}
                  onClick={handleFilterKeyChange('f-links')}
                >
                  <input type="radio" name="fl_radio" defaultValue=".f-links" />
                  Links
                </label>
              </div>
              <div className="btn-group">
                <label
                  data-text="Content"
                  className={`c-pointer ${activeBtn('f-content')}`}
                  onClick={handleFilterKeyChange('f-content')}
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
            <Thumbnail
              type="link"
              title="Lorem Ipsum"
              link="https://beshley.com/"
              category="Links"
              img="images/works/work8.jpg"
            />
            <Thumbnail
              type="modal"
              title="Lorem Ipsum"
              link="https://beshley.com/"
              category="Content"
              description="Lorem Ipsum blah blah"
              img="images/works/work3.jpg"
            />
            <Thumbnail
              type="modal"
              title="Lorem Ipsum"
              link="https://beshley.com/"
              category="Content"
              description="Lorem Ipsum blah blah"
              img="images/works/work3.jpg"
            />
          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};

export default Portfolio;
