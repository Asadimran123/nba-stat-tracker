module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', 'node_modules/flowbite-react/lib/esm/**/*.js'], // Add both content patterns
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'), // Include the Flowbite plugin
  ],
};
