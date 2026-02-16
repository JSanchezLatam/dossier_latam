import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta de colores del brandguide Latam Digital
        'latam-blue': {
          DEFAULT: '#003B5C', // Pantone 7670C - Azul primario
          50: '#E6F0F5',
          100: '#CCE1EB',
          200: '#99C3D7',
          300: '#66A5C3',
          400: '#3387AF',
          500: '#00699B',
          600: '#003B5C', // Principal
          700: '#002D45',
          800: '#001F2E',
          900: '#001017',
        },
        'latam-orange': {
          DEFAULT: '#FF8200', // Pantone 1595C - Naranja secundario
          50: '#FFF4E6',
          100: '#FFE9CC',
          200: '#FFD399',
          300: '#FFBD66',
          400: '#FFA733',
          500: '#FF8200', // Principal
          600: '#CC6800',
          700: '#994E00',
          800: '#663400',
          900: '#331A00',
        },
        'latam-gray': {
          DEFAULT: '#2D2D2D', // Gris oscuro para textos
          50: '#F7F7F7',
          100: '#E3E3E3',
          200: '#C7C7C7',
          300: '#ABABAB',
          400: '#8F8F8F',
          500: '#737373',
          600: '#575757',
          700: '#3B3B3B',
          800: '#2D2D2D', // Principal para textos
          900: '#1F1F1F',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
