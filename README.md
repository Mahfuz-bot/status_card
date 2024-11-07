# Task for Frontend Developer

Part 1: Check the screenshot URL (https://prnt.sc/fURogFuEfvMk). You need to develop the design of the given screenshot.
Case 1: The view must be a single page with horizontal scrollbar.
Case 2: The cards must be scrollable according to their parent cards.
Part 2: Check the screenshot again (https://prnt.sc/367D677et8oT.
Case 1: You need to pick the attachment and call a modal with JavaScript.
Case 2: Upload multiple attachments and show a list view with the original files also the extension name of the files.
Part 3: You need to make an Api to upload the files in databases. And count the attachments like this (https://prnt.sc/RRB15GGbb7lT).
Requirements: Complete the task using ReactJs. You can use Laravel/PHP or NodeJS for storing data.

Submission:
The deadline is 24 hours. If you need more time, let me know.
Please upload the resources on GitHub and provide us with the link.
Kindly share the live link for the task, too.
If you have any questions, call 01973132603.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-  [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-  [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

-  Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
   languageOptions: {
      // other options...
      parserOptions: {
         project: ["./tsconfig.node.json", "./tsconfig.app.json"],
         tsconfigRootDir: import.meta.dirname,
      },
   },
})
```

-  Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
-  Optionally add `...tseslint.configs.stylisticTypeChecked`
-  Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react"

export default tseslint.config({
   // Set the react version
   settings: { react: { version: "18.3" } },
   plugins: {
      // Add the react plugin
      react,
   },
   rules: {
      // other rules...
      // Enable its recommended rules
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
   },
})
```
