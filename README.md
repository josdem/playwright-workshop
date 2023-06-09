## Playwright Workshop

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![tested with Playwright](https://img.shields.io/badge/playwright-dashboard-brightgreen.svg)](https://playwright.dev/)

This is a getting started project with [Playwright](https://playwright.dev/)

#### Requirements

- [NodeJS](https://nodejs.org/en/) version `v18.16.0`

**Note:** I recommed to use [NVM](https://github.com/nvm-sh/nvm) to manage NodeJS versions

#### To build the project

```bash
npm install
```

#### To format the project

```bash
npx prettier --write .
```

#### To run the project

```bash
npx playwright test
```

#### To see integrated reports

```bash
npx playwright show-report
```

#### To [Allure](https://github.com/allure-framework/allure2) reports

```bash
npx playwright test --reporter=line,allure-playwright
allure generate ./allure-results --clean
allure open ./allure-report
```
