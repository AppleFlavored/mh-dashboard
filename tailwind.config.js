/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#488bff',
                'surface': '#2b2b31',
                'darkgray': '#222226',
            }
        },
    },
    plugins: [],
}