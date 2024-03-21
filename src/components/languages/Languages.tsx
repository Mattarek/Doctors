import { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next";

import Menu from "@mui/material/Menu";
import TranslateIcon from "@mui/icons-material/Translate";
import { StyledButton, StyledMenuItem } from "./Languages.styled";
import { languages } from "./LanguagesList";

export const Languages = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { t, i18n } = useTranslation();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <StyledButton onClick={handleClick}>
        <TranslateIcon color="info" />
      </StyledButton>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {languages.map(({ code, iconCode, name }) => (
          <StyledMenuItem
            key={iconCode}
            onClick={() => {
              i18n.changeLanguage(code);
              setAnchorEl(null);
            }}
          >
            <ReactCountryFlag svg countryCode={iconCode} />
            {name}
          </StyledMenuItem>
        ))}
      </Menu>

      <p>{t("welcome")}</p>
    </>
  );
};
