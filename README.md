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

> [!IMPORTANT]
> Depending on the operating system you are using with the `publish` command, it will generate the corresponding platform version. Keep in mind that app signing is required in both Windows and MacOS, so you may have to do some manual configuration in order to execute them. This is order to prevent users from installing unsafe outside of their corresponding stores.

For MacOS, after downloading the `.zip` file from the GitHub `Releases` page, you will have to open up your terminal, navigate to the same path where the app was downloaded and run the following command:

```
xattr -c electron-counter.app
```

> [!CAUTION]
> Failing to do this step will result on an alert on your machine suggesting that the app is damaged and that you should delete it.