/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/*.html", "./node_modules/tw-elements/js/**/*.js","./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        dana: ['"dana Regular"', "sans-serif"],
        "dana-hair": ['"dana hair"', "sans-serif"],
        "dana-thin": ['"dana thin"', "sans-serif"],
        "dana-ultralight": ['"dana Ultralight"', "sans-serif"],
        "dana-light": ['"dana light"', "sans-serif"],
        "dana-medium": ['"dana Medium"', "sans-serif"],
        "dana-demibold": ['"dana DemiBold"', "sans-serif"],
        "dana-extrabold": ['"dana ExtraBold"', "sans-serif"],
        "dana-black": ['"dana Black"', "sans-serif"],
        "dana-extrablack": ['"dana ExtraBlack"', "sans-serif"],
        "dana-heavy": ['"dana Heavy"', "sans-serif"],
        "dana-fat": ['"dana Fat"', "sans-serif"],
        "morabba-ultralight": ['"Morabba Ultralight"', "sans-serif"],
        "morabba-light": ['"Morabba light"', "sans-serif"],
        "morabba-medium": ['"Morabba medium"', "sans-serif"],
        "morabba-semibold": ['"Morabba semibold"', "sans-serif"],
        "morabba-extrabold": ['"Morabba trabold"', "sans-serif"],
        "morabba-black": ['"Morabba black"', "sans-serif"],
        "morabba-heavy": ['"Morabba Heavy"', "sans-serif"],
        "morabba-bold": ['"Morabba bold"', "sans-serif"],
        "morabba-regular": ['"Morabba regular"', "sans-serif"],
        "iransans-thin": ["IRANSansX thin"],
        "iransans-ultralight": ["IRANSansX UltraLight"],
        "iransans-light": ["IRANSansX light"],
        "iransans-medium": ["IRANSansX medium"],
        "iransans-demibold": ["IRANSansX demibold"],
        "iransans-extrabold": ["IRANSansX extrabold"],
        "iransans-black": ["IRANSansX black"],
        "iransans-bold": ["IRANSansX bold"],
        "iransans-regular": ["IRANSansX regular"],
      },
      boxShadow: {
        head: "box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
      },
      backgroundImage: {
        plane: "./pictures/t1otin0h.bmp",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "&>*");
      addVariant("child-hover", "&>*:hover");
    },
    require('flowbite/plugin')
  ],

};
