import { useEffect, useState } from "react";
import { CSSTransition } from "../../CSSTransitionGroup";
import styles from "./Header.module.scss";
import { Navbar } from "../Navbar/Navbar";
import Logo from "../Logo/Logo";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition >= 700);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.logo}>
              <Logo isScrolled={isScrolled} />
            </div>
            <Navbar isScrolled={isScrolled} />
          </div>
          <div
            className={`${styles.burgerMenu} ${
              isMenuOpen ? styles.activeMenu : ""
            }`}
            onClick={toggleMenu}
          >
            <span></span>
          </div>
        </div>
        <CSSTransition
          in={isMenuOpen}
          timeout={400}
          unmountOnExit
          classNames={{
            enter: styles.enter,
            enterActive: styles.enterActive,
            exit: styles.exit,
            exitActive: styles.exitActive,
          }}
        >
          <div className={styles.mobileMenu}>
            <Logo isScrolled={!isScrolled} />
            <Navbar isScrolled={!isScrolled} />
            <div className={styles.contact}>+1234 556 782 / Малена</div>
          </div>
        </CSSTransition>
      </div>
      {!isMenuOpen && (
        <CSSTransition
          in={isScrolled}
          timeout={400}
          unmountOnExit
          classNames={{
            enter: styles.enter,
            enterActive: styles.enterActive,
            exit: styles.exit,
            exitActive: styles.exitActive,
          }}
        >
          <div className={styles.wrapperScroll}>
            <div className={styles.rowScroll}>
              <Logo isScrolled={isScrolled} />
              <Navbar isScrolled={isScrolled} />
              <div className={styles.contact}>+1234 556 782 / Малена</div>
            </div>
          </div>
        </CSSTransition>
      )}
    </>
  );
};
