```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

// Some code that uses Tailwind CSS classes
<div class="bg-gray-100 p-4">
  <h1 class="text-3xl font-bold">This is a heading</h1>
  <p class="text-lg">This is a paragraph.</p>
</div>
```