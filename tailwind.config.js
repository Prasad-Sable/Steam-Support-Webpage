/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'bg-primary': '#0a0a0f',
                'bg-secondary': '#12121a',
                'bg-tertiary': '#1a1a25',
                'accent-blue': '#3b82f6',
                'accent-purple': '#8b5cf6',
                'accent-cyan': '#06b6d4',
                'text-primary': '#f1f5f9',
                'text-secondary': '#94a3b8',
            },
            fontFamily: {
                'sans': ['Outfit', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
