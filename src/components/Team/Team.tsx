import React from "react";
import { TeamBlockData } from "./team.data";
import { Element } from "react-scroll";

import styles from "./Team.module.scss";
export const Team: React.FC = () => {
  return (
    <Element name="team">
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.title}>Команда Nation</div>

          <div className={styles.description}>
            На фотографиях ниже — люди, которые создали семью NATION. Они
            ответят на все вопросы и помогут с организацией тура. Все гиды в
            нашей команде – профессиональные путешественники с многолетним
            опытом.
          </div>
          <div className={styles.grid}>
            {TeamBlockData.map((item, i) => (
              <div key={i}>
                <div className={styles.image}>
                  <img src={item.image} alt="" />
                </div>
                <div className={styles.name}>{item.name}</div>
                <div className={styles.social}>
                  <a href={item.linkF} target="_blank">
                    {item.socialF}
                  </a>
                  <a href={item.linkT} target="_blank">
                    {item.socialT}
                  </a>
                  <a href={item.linkI} target="_blank">
                    {item.socialI}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
};
