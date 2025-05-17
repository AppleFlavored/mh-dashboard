/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'dark': '#222226',
                'darker': '#1f1f23',
                'light': '#2e2e33',
                'primary': '#488bff',
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [],
    }
}
