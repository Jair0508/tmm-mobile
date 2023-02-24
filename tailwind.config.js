/** @type {import('tailwindcss').Config} */

//import { hairlineWidth } from "nativewind"

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      //borderWidth: {
        //hairline: hairlineWidth(),
      //}
    },
  },
  plugins: [],
}
