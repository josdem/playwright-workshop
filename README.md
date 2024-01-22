## Playwright Workshop

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Playwright](https://img.shields.io/badge/playwright-reports-brightgreen.svg)](https://josdem.github.io/playwright-workshop/)

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

#### To see deployed reports

- You can deploy generated reports using a SSK key: [playwright-report](https://josdem.io/playwright-report/)
- For more information go [here](https://josdem.io/techtalk/ux/playwright_reports_deployment/)

If you want to generate [Allure Reports](https://webdriver.io/docs/allure-reporter/)

- Install allure command line: `npm install -g allure-commandline --save-dev`
- Execute this command: `allure generate && allure serve -h localhost`
