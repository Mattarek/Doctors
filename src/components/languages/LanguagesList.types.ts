interface Lang {
  code: "en" | "pl" | "de";
  iconCode: "gb" | "pl" | "de";
  name: "English" | "Polski" | "Deutch";
}

export const languages: Lang[] = [
  { code: "pl", iconCode: "pl", name: "Polski" },
  { code: "en", iconCode: "gb", name: "English" },
  { code: "de", iconCode: "de", name: "Deutch" },
];
