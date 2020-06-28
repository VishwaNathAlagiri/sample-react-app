/*eslint-disable*/
import Settings from "../appConfiguration.json";
import customColor from "./customColorPalette.scss";
import defaultColor from "./defaultColorPalette.scss";

let primaryColor = "",
  secondaryColor = "",
  infoColor = "",
  errorColor = "",
  successColor = "",
  secondaryBlue = "",
  warningColor = "";

if (Settings.defaultConfigurations.enableCustomTheme) {
  primaryColor = customColor.primary;
  secondaryColor = customColor.secondary;
  secondaryBlue = customColor.secondaryBlue;
  errorColor = customColor.errors;
  infoColor = customColor.infos;
  successColor = customColor.successColor;
  warningColor = customColor.warningColor;
} else {
  primaryColor = defaultColor.primary;
  secondaryColor = defaultColor.secondary;
  secondaryBlue = defaultColor.secondaryBlue;
  errorColor = defaultColor.errors;
  infoColor = defaultColor.infos;
  successColor = defaultColor.successColor;
  warningColor = defaultColor.warningColor;
}

export {
  primaryColor,
  secondaryColor,
  secondaryBlue,
  infoColor,
  errorColor,
  successColor,
  warningColor,
};
