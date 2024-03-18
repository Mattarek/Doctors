import { useState } from "react";
import ReactCountryFlag from "react-country-flag";

import Menu from "@mui/material/Menu";
import MenuItem, { MenuItemProps } from "@mui/material/MenuItem";
import TranslateIcon from "@mui/icons-material/Translate";

import styled from "styled-components";

interface StyledMenuItemProps extends MenuItemProps {
  active?: string | null;
}

const StyledMenuItem = styled(MenuItem)<StyledMenuItemProps>`
  ${({ active }) =>
    active &&
    `
    border-right: 3px solid blue;
  `}
`;

type Lang = "PL" | "US" | "DE";

export const Languages = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [languageSelectorIsOpen, setLanguageSelectorIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("PL");

  const handleClick = (e) => {
    setLanguageSelectorIsOpen(true);
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setLanguageSelectorIsOpen(false);
  };

  const handleSelectLanguage = (lang: Lang) => {
    setSelectedLanguage(lang);
    setLanguageSelectorIsOpen(false);
  };

  return (
    <>
      <TranslateIcon color="info" onClick={handleClick} />
      <Menu
        anchorEl={anchorEl}
        open={languageSelectorIsOpen}
        onClose={handleClose}
      >
        <StyledMenuItem
          active={selectedLanguage === "PL" ? "active" : null}
          onClick={() => handleSelectLanguage("PL")}
        >
          <ReactCountryFlag svg countryCode="PL" />
          Polski
        </StyledMenuItem>
        <StyledMenuItem
          active={selectedLanguage === "US" ? "active" : null}
          onClick={() => handleSelectLanguage("US")}
        >
          <ReactCountryFlag svg countryCode="US" />
          English
        </StyledMenuItem>
        <StyledMenuItem
          active={selectedLanguage === "DE" ? "active" : null}
          onClick={() => handleSelectLanguage("DE")}
        >
          <ReactCountryFlag svg countryCode="DE" />
          Deutsch
        </StyledMenuItem>
      </Menu>
    </>
  );
};
