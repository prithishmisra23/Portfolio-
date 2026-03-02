/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#0c0c0c',
                surface: '#111111',
                primary: '#f5f5f5',
                secondary: '#bdbdbd',
                accent: '#4f7cff',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                space: ['Space Grotesk', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
