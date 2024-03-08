import React from "react";
import { TravelData } from "./travel.data";
import { Element } from "react-scroll";
import { TravelBlock } from "../TravelBlock/TravelBlock";

import styles from "./Travel.module.scss";

export const Travel: React.FC = () => {
  return (
    <div className={styles.globalWrapper}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.title}>
            путешествуй <br></br> с клубом nation
          </div>
          <div className={styles.description}>
            Испытайте новые впечатления от пешего похода, сплава на байдарках
            или поездки по холмам на велосипеде.
          </div>
        </div>
        <Element name="direction">
          <div className={styles.travelTitle}>путешествия в 2018 году:</div>
        </Element>
      </div>
      <div className={styles.grid}>
        {TravelData.map((item, i) => (
          <TravelBlock
            key={item.id}
            items={item}
            heigth={i === 2 || i === 3 ? "400px" : ""}
            fz={i === 2 || i === 3 ? "36px" : ""}
          />
        ))}
      </div>
    </div>
  );
};
