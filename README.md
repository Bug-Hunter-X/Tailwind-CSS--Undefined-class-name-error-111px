# Tailwind CSS Undefined Class Name Bug

This repository demonstrates a common bug encountered when working with Tailwind CSS: using undefined class names.  The bug occurs when a class name is referenced in your HTML or JSX that hasn't been included in your Tailwind configuration file (`tailwind.config.js`). This leads to the class not being applied, resulting in unexpected styling.

The `bug.js` file shows an example of incorrect Tailwind CSS class usage, while `bugSolution.js` provides the corrected version with proper class definition and configuration.

## How to Reproduce

1. Clone this repository.
2. Ensure you have Node.js and npm installed.
3. Run `npm install` to install dependencies (if any).
4. Open `bug.js` and observe the missing styles.
5. Compare with `bugSolution.js` to see the corrected implementation.

## Solution

The solution is to ensure all Tailwind CSS classes used in your code are correctly defined within your `tailwind.config.js` file. This typically involves:

*   **Correct spelling:** Double-check for typos in class names.
*   **Updating the config file:** Add any newly introduced classes to your config.
*   **Removing unused classes:** Purge unused classes to reduce bundle size (if needed).