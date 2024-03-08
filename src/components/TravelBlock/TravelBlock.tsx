import React, { useState } from "react";
import styles from "./TravelBlock.module.scss";
import { IStyleProps } from "./travelBlock.interface";

export const TravelBlock: React.FC<IStyleProps> = ({ items, heigth, fz }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const BackgroundImageStyle = {
    backgroundImage: `url(${items.image})`,
  };
  return (
    <div
      className={styles.wrapper}
      style={{ gridArea: `block${items.id + 1} ` }}
    >
      <div
        className={styles.container}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ height: heigth }}
      >
        <div className={styles.table}>
          <div className={styles.background} style={BackgroundImageStyle}></div>
          <div className={styles.gradient}></div>
          <div className={styles.animation}>
            <div
              className={`${styles.hovered} ${
                isHovered ? styles.isHovered : ""
              }`}
            >
              <div className={styles.title} style={{ fontSize: fz }}>
                {items.title}
              </div>
              <div className={styles.date}>{items.date}</div>
              <div
                className={`${styles.opacityBtn} ${
                  isHovered ? styles.isOpacityBtn : ""
                }`}
              >
                <div className={styles.wrapperBtn}>
                  <div className={styles.button}>Узнать больше</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
