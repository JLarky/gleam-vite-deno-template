// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

import toml from "npm:prettier-plugin-toml";

/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  plugins: [toml],
};

export default config;
