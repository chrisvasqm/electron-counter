# Electron Counter

Sample project to get familiar with how to make Cross-Platform apps using Electron.

## Getting started

#### Dependencies

1. Node.js v20 (current LTS).

#### Run the app localy:

Install all dependencies

```
npm install
```

Start the app

```
npm start
```

#### Publish to GitHub

1. Make a copy of the `example.env` file and rename it as `.env`
2. Head over to your GitHub's `Settings` > `Developer settings` > `Personal access tokens` > `Tokens (classic)` page, and create one named `electron-counter`.
3. Copy the `token` for the `GITHUB_TOKEN` key inside your newly created `.env` file.
4. Run the following command on your terminal:

```
npm run publish
```

This should generate a drafted `Release` in the GitHub repository with a `.zip` file attached so users can download and install the app on their machines.
