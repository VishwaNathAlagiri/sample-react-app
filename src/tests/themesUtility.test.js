import Settings from "../_config/appConfiguration.json";

jest.mock("../_config/appConfiguration.json", () => ({
  serverSettings: {
    baseUrl: "https://localhost:3000/",
  },
  defaultConfigurations: {
    enableCustomTheme: true,
  },
  localizationAndLanguageSettings: {
    localizationKey: "en",
  },
}));

test("renders learn react link", () => {
  expect(Settings.defaultConfigurations.enableCustomTheme).toBe(true);
});
