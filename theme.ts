import { buildLegacyTheme } from "sanity";

const props = {
  "--cs-white": "#FFF",
  "--cs-black": "#1A1A1A",
  "--cs-brand": "#F7AB0A",
  "--cs-red": "#DB4437",
  "--cs-yellow": "#F4B400",
  "--cs-green": "#0F9D58",
};

export const myTheme = buildLegacyTheme({
  // Base theme colors
  "--black": props["--cs-black"],
  "--white": props["--cs-white"],

  "--gray": "#666",
  "--gray-base": "#666",

  "--component-bg": props["--cs-black"],
  "--component-text-color": props["--cs-white"],

  // Brand
  "--brand-primary": props["--cs-brand"],

  // Default button
  "--default-button-color": "#666",
  "--default-button-primary-color": props["--cs-brand"],
  "--default-button-success-color": props["--cs-green"],
  "--default-button-warning-color": props["--cs-yellow"],
  "--default-button-danger-color": props["--cs-red"],

  // State
  "--state-info-color": props["--cs-brand"],
  "--state-success-color": props["--cs-green"],
  "--state-warning-color": props["--cs-yellow"],
  "--state-danger-color": props["--cs-red"],

  // Navbar
  "--main-navigation-color": props["--cs-black"],
  "--main-navigation-color--inverted": props["--cs-white"],

  "--focus-color": props["--cs-brand"],
});
