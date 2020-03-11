# S.A.M.

<img src="https://raw.githubusercontent.com/mrWh1te/Sam/master/assets/top-secret.jpg" align="right" alt="Top-Secret" width="300">

### Social Automation Manager

Done
 - minimal Electron application POC
 - TypeScript support
 - Puppeteer running with Electron using separate Chrome instance
 - minimal index.html website with bot.ts to handle button click by scraping example.com
 - Botmation running (takes screenshots)

Working On
 - App GUI Architecture (Angular?)
 - NodeJS Architecture for Puppeteer code (ie Injectable service wraps the puppeteer page, and perhaps config options)
 - Database

### Notes

You can learn about the basic needs of an Electron application within the [Electron Quick Start Guide](https://electronjs.org/docs/tutorial/quick-start).

Source code is in `/src` directory. The directory has 3 main parts:
1) main.ts
    - the actual code to setup the electron app
2) site/
    - the GUI/website loaded into the Electron app's browser page
3) helpers/
    - electron specific code, base app level helpers

The goal is to use the NodeJS code within the `site/` directory like RPC. Adding Angular to this mix, will require modifications to Angular's compiler/bundler.

### Developmental Road

1) MVP/POC
    - minimal UI/UX (focus on features)
    - features functionality
        - enter credentials for social accounts
        - login to social accounts
        - scrape feeds, generate reports
            - include posts from friends list, viral stuff (standard deviation high), etc
        - auto-like feed posts from users list
        - customize auto-like with:
            - no negativity, SFW, etc
        - consolidating dashboard
            - section for requests ie friends, connections, followers, etc for ALL accounts
2) Determine App Architecture / UI / UX
3) Create v1 App

Goal: wholesome app to help people support each other while consuming less

Going to have Social Media Accounts, then for each: reports & automated-activity (both customizable)

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/mrWh1te/Sam
# Go into the repository
cd Sam
# Install dependencies
npm install
# Run the app
npm start
```

Note: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.
