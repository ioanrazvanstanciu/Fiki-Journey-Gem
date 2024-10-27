import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Dropdown from "./DropDown";
import LinkNav from "./LinkNav";
import {
  NavbarContainer,
  ZonaDeLogo,
  Logo,
  TitluAppText,
  ButtonDropdown,
  LinkContainerDesktop,
} from "/src/components/NavBar/NavBar.style";
import { List, X } from "react-bootstrap-icons";

export const routes = [
  { title: "Home", href: "Fiki-Journey-Gem/home" },
  { title: "All packages", href: "Fiki-Journey-Gem/all-packages" },
  { title: "Add new package", href: "Fiki-Journey-Gem/add-new-package" },
  {
    title: "Edit or delete a package",
    href: "Fiki-Journey-Gem/edit-or-delete",
  },
  { title: "Reserved packages", href: "Fiki-Journey-Gem/reserved-packages" },
  { title: "Add custom package", href: "Fiki-Journey-Gem/add-custom-package" },
];

function NavBar() {
  const [displayDropdown, setDisplayDropdown] = useState(false);

  const handleDisplayDropdown = () => {
    setDisplayDropdown(!displayDropdown);
  };
  const [isOpaque, setIsOpaque] = useState(false);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const handleScroll = () => {
    if (window.scrollY > 150) {
      setIsOpaque(true);
    } else {
      setIsOpaque(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <NavbarContainer $isOpaque={isOpaque}>
      <ZonaDeLogo
        to={`Fiki-Journey-Gem/home`}
        onClick={() => setActiveLink("Fiki-Journey-Gem/home")}
      >
        <Logo src="https://cdn-icons-png.flaticon.com/512/1981/1981081.png"></Logo>
        <TitluAppText>
          <div>Journey</div>
          <div>Gem</div>
        </TitluAppText>
      </ZonaDeLogo>
      <LinkContainerDesktop>
        {routes.map((el, index) => (
          <LinkNav
            key={name + index}
            title={el.title}
            href={el.href}
            subtitle="Subtitlu"
            isActive={activeLink === `/${el.href}`}
          />
        ))}
      </LinkContainerDesktop>
      <ButtonDropdown onClick={() => handleDisplayDropdown()}>
        {!displayDropdown ? <List size={40} /> : <X size={40} />}
      </ButtonDropdown>
      {displayDropdown && (
        <Dropdown
          $isOpaque={isOpaque}
          onFocus={() => handleDisplayDropdown()}
        />
      )}
    </NavbarContainer>
  );
}

export default NavBar;
