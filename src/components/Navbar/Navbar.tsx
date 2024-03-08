import { Link } from "react-scroll";
import styles from "./Navbar.module.scss";
import { NavbarData } from "./navbar.data";
import { IScroll } from "./navbar.interface";

export const Navbar: React.FC<IScroll> = ({ isScrolled }) => {
  return (
    <ul className={isScrolled ? styles.navbarScroll : styles.navbar}>
      {NavbarData.map((item, i) => (
        <li key={i}>
          <Link to={item.to} smooth={true} duration={500}>
            {item.title}
          </Link>
        </li>
      ))}
      {isScrolled && (
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Контакты
          </Link>
        </li>
      )}
    </ul>
  );
};
