- `npm run test:playwright` - NPM loads the Playwright code - Node.js
- `vitest` - Vitest code runs - Node.js
- `vitest.config.ts` - Vitest imports this file and runs it - Node.js
- `JSDOM` - Vitest loads JSDOM, which creates global `window` and `document` - Node.js
- `test/vitest/counter.spec.ts` - Vitest runs the test code - Node.js
- `src/script.ts` - The test code imports this, so it runs - Node.js
- `test/vitest/counter.spec.ts` - The test code uses the global `window` and `document` - Node.js
