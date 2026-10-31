/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                orange: {
                    50: '#fff7ed',
                    100: '#ffedd5',
                    200: '#fed7aa',
                    300: '#fdba74',
                    400: '#fb923c',
                    500: '#f97316',
                    600: '#ea580c',
                    700: '#c2410c',
                    800: '#9a3412',
                    900: '#7c2d12',
                    950: '#431407',
                },
                // Vendor app teal, sampled from the vendor app icon.
                // 'accent' is the brighter cyan-teal used inside the app UI.
                vendor: {
                    50: '#f0f9f8',
                    100: '#d9f0ee',
                    200: '#b3e1dd',
                    300: '#84cbc3',
                    400: '#5fb3a6',
                    500: '#4a9a96',
                    600: '#397a7e',
                    700: '#2e6266',
                    800: '#264f53',
                    900: '#1f4144',
                    accent: '#13bdcc',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
