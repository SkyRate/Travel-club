import React from "react";
import { SocialValue } from "./connectionBlock.data";
import { Element } from "react-scroll";

import styles from "./ConnectionBlock.module.scss";
import Avatar from "../../assets/MalenaAvatar.jpg";

export const ConnectionBlock: React.FC = () => {
  return (
    <Element name="contact">
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.title}>Свяжитесь с нами:</div>
          <div className={styles.avatarSection}>
            <img src={Avatar} alt="" />
          </div>
          <div className={styles.name}>Малена</div>
          <div className={styles.description}>Менеджер Nation</div>
          <div className={styles.personalData}>
            <strong>Телефон</strong>: +1 123 456 78 90 <br></br>
            <strong>Почта</strong>: malenation@tours.com
          </div>
          <div className={styles.row}>
            {SocialValue.map((item, i) => (
              <div key={i} className={styles.sociallink}>
                <a href={item.link} target="_blank">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30px"
                    height="30px"
                    viewBox={item.viewBox}
                    enableBackground="new 0 0 48 48"
                  >
                    <desc>{item.desc}</desc>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d={item.path}
                    ></path>
                    <path d={item.additionalPath}></path>
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
};
