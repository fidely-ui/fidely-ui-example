import { defineConfig } from "@pandacss/dev";
import { fidelyPreset } from "@fidely-ui/panda-preset";
import neutral from "@fidely-ui/panda-preset/colors/neutral";
import orange from "@fidely-ui/panda-preset/colors/orange";

export default defineConfig({
  presets: [
    "@pandacss/preset-panda",
    fidelyPreset({
      accentColor: orange,
      grayColor: neutral,
      rounded: "sm"
    })
  ],
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  jsxFramework: "react",

  staticCss: {
    recipes: "*",
  },

  // Useful for theme customization
  theme: {
    extend: {
      recipes: {
        spinner: {
          base: {
            borderColor: "green.9",
            borderWidth: "4px"
          },
          variants: {
            size: {
              xl: { "--size": "sizes.20" },
            }
          }
        }
      }
    },
  },

  globalCss: {
    extend: {
      body: {
        // background: 'black'
      }
    },
  },

  importMap: "@fidely-ui/styled-system",
  // The output directory for your css system
  outdir: "styled-system",
});
