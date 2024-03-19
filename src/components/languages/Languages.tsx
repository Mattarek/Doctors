import { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next";

import Menu from "@mui/material/Menu";
import TranslateIcon from "@mui/icons-material/Translate";
import { StyledButton, StyledMenuItem } from "./Languages.styled";

import { Lang } from "./Types";

export const Languages = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { t, i18n } = useTranslation();
  const languages: Lang[] = [
    { code: "PL", name: "Polski" },
    { code: "US", name: "English" },
    { code: "DE", name: "Germany" },
  ];

  console.log(open);
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
        {languages.map(({ code, name }) => (
          <StyledMenuItem
            key={code}
            onClick={() => {
              i18n.changeLanguage(code);
              setAnchorEl(null);
            }}
          >
            <ReactCountryFlag svg countryCode={code} />
            {name}
          </StyledMenuItem>
        ))}
      </Menu>
      <p>{t("welcome")}</p>
    </>
  );
};
