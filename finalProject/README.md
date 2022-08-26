The test automation framework is comprised of the following tools & libraries:

NodeJS : JavaScript runtime environment.
WebDriver IO : Web browser automation library.
Mocha : Test framework.
Allure Reporting : For generating Test Reports.
Prettier : Opinionated code formatter.
Rimraf : A deep deletion module for node.
Git : Version control.
JavaScript : Programming language.
WebStorm : Integrated Development Environment.



1. run all tests: from rut dir > npm run wdio
2. run one file: from root > npx wdio --spec ./test/spec/FILE_NAME

3. generate report > npx allure generate .\allure-results\ --clean
4. open report > npx allure open
5. generate and open report: npx allure generate allure-results --clean -o allure-report


6. Set environment: docs/test.env
7. Choose credentials: docs/config



