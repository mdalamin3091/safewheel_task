/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FA541C",
        primary_text: "#919EAB",
        primary_bg: "#161C24",
        form_bg: "#212B36",
        white: "#fff",
      },
      container: {
        center: true,
        padding: "1rem",
      },
      fontSize: {
        sm: [
          "14px",
          {
            lineHeight: "26px",
            fontWeight: "400",
          },
        ],
        xl: [
          "36px",
          {
            lineHeight: "54px",
            fontWeight: "700",
          },
        ],
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
    },
    boxShadow: {
      "form-shadow": "-24px 24px 72px -8px rgba(0, 0, 0, 0.24)",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1290px",
    },
  },
};
