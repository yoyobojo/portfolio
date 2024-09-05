'use client';
import { useEffect, useState } from 'react';

const NAV_ITEMS = [
  { text: 'Resume', type: 'lnk' },
  { text: 'Skills', type: 'lnk' },
  { text: 'Works', type: 'lnk' },
  // { text: 'Contact', type: 'btn' }
];

export const Header = () => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const sections = document.querySelectorAll('.section_');
      const navLi = document.querySelectorAll('.top-menu li');
      let current = '';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute('id');
        }
      });

      navLi.forEach((li) => {
        if (current !== null) {
          li.classList.remove('active');
        }
        if (
          li.getElementsByTagName('a')[0].getAttribute('href') == `#${current}`
        ) {
          li.classList.add('active');
        }
      });
    });
  }, []);

  const onClick = (e) => {
    e.preventDefault();
    document.querySelector('body').classList.toggle('loaded');
    setToggle(!toggle);
  };

  return (
    <header className={toggle ? 'active' : ''}>
      <div className="head-top">
        <a href="#" className="menu-btn" onClick={(e) => onClick(e)}>
          <span />
        </a>
        <div className="top-menu" style={{ paddingRight: "1rem" }}>
          <ul>
            {NAV_ITEMS.map(({ text, type }, i) => (
              <li key={`nav-${i}`}>
                <a href={`#${text.toLowerCase()}`} className={type}>
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};
