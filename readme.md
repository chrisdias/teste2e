
This repo contains a basic Node.js TypeScript project that can be used to exercise the "Testing" GitHub Coppilot E2E Golden Scenario. 

The main entry point is `src/index.ts`. This file imports functions from `conversions.ts`, `geometry.ts`, etc. and then calls each with sample data, printing the results to the console.

Each module is a collection of sample functions, all generated using Copilot. `Scaffold out 10 conversion functions` or `Scaffold out 10 functions that manipulate strings`. These functions could be right or wrong, I never actually validated every one, they are intended simply to give you something to create, run, and debug unit tests. Feel free to craft your own module (using Copilot of course) and call them from `index.ts`. 

This repo is set up to use the [`jest`](https://jestjs.io/) test framework. The "upgrade" to [`vitest`](https://vitest.dev/) is left as an exercise within the sceanrio. 

See `package.json` for scripts to build, run, and test the project.

To make it easier to create issues, update `issueTemplate.md` to include the version information for VS Code and the Chat extensions you are using. Then simply copy/paste into new issues.