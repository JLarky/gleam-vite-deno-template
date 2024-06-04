import toml from "prettier-plugin-toml";

/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  plugins: [toml],
};

export default config;
