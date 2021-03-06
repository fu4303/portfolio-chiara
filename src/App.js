import React from "react";
import "./App.scss";
import logo from "./userimage.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import {
  faBehance,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons/";
import resume from "./images/ChiaraDiaz_Resume.pdf";
import darkMode from "./hooks/theme";
import Moon from "./images/moon.png";
import Sun from "./images/sun.png";

const App = () => {
  const { theme, toggleTheme } = darkMode();
  return (
    <div className={`App ${theme}`}>
      <div onClick={toggleTheme} className="button-toggle">
        {theme === "light" ? (
          <img src={Moon} alt="" className="mode" />
        ) : (
          <img src={Sun} alt="" className="mode" />
        )}
      </div>
      <div className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <section className="left-container">
          <div className="about-me">
            <div className="main-description">
              <p className="hello">Hello, I'm Chiara.</p>
            </div>
          </div>
          <div className="description">
            Frontend Developer | Illustrator | Creative Copywriter
          </div>
          <div className="second-description">
            <p className="text-second-description">
              I'm a front-end developer from Buenos Aires, Argentina, based in
              Poland. I enjoy learning new things every day, not only related to
              software development. Also, I have a little background in graphic
              design and UX/UI design knowledge. In my free time, I'm a digital
              illustrator. Some of the things I like the most are Astrology,
              tarot and tattoos.
            </p>
            <p className="text-second-description">
              <a
                href="https://tarotimpulso.com"
                target="_blank"
                className="link-tarot-impulso"
              >
                Tarot Impulso
              </a>{" "}
              is a personal project where I combine illustration and web
              development.
            </p>
            <p className="skills">
              <b>SKILLS</b> ??????????????? HTML5, CSS3 (SASS/LESS), Bootstrap, Javascript,
              TypeScript, React js, JQuery, Node js, Express js, React Native,
              Git, Docker, Redux, NextJs, VueJs, Adobe Illustrator, Adobe
              Photoshop & Procreate.
            </p>
          </div>
        </section>
      </div>
      <div className="links">
        <a
          className="app-link"
          href="https://www.linkedin.com/in/chiara-diaz"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          className="app-link"
          href="https://github.com/chiaradiaz1991"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          className="app-link"
          href="https://www.behance.net/chiaradiaz"
          target="_blank"
        >
          <FontAwesomeIcon icon={faBehance} />
        </a>
        <div className="app-link">
          <a className="app-link" href={resume} download>
            <FontAwesomeIcon icon={faFileDownload} />
          </a>
        </div>
      </div>
      <div className="contact">
        <p className="contact-text">
          Let's keep in touch! <a className="mail" href="mailto:chiara.diaz1991@gmail.com">chiara.diaz1991@gmail.com</a>
        </p>
      </div>
      <div className="footer">
        Website created and developed with ???? by Chiara Diaz.
      </div>
    </div>
  );
};

export default App;
