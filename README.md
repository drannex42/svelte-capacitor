# Svelte + Capacitor (w/ live reload) Template

This is a project template for [Svelte](https://svelte.dev) + [CapacitorJS](capacitorjs.com) apps with live reload. 

*Note that you will need to have [Node.js](https://nodejs.org) installed.*


## Get started

Install the dependencies...

```bash
cd svelte-capacitor
npm install
```

## Run local dev server (no capacitor)

```bash
npm run dev
```

## Add your Capacitor platform

```bash
npx cap platform add android // (or ios)
```

## Develop on your device with livereload (hot reload)

You will need to append your workstation IP to the `server.url` section in `capacitor.config.json`

Tip: Remember you will need the `http://` before the server ip. 

Back in the root folder:
```bash
npm run dev:android
```
or
```bash
npm run dev:ios
```

This will run the capacitor/svelte project with a web view pointing to your workstation's IP.

You should see the message `Welcome to Svelte!` if svelte loaded correctly.

Try to change something in App.svelte, and you should see the content reload in your device.

* You need to have an emulator/device connected to adb 
* Your device has to be connected to the same wifi network as your workstation.

## To build a prod version:

**Remember to remove the `server.url` in `capacitor.config.json`**

```bash
npm run build:android
```
or
```bash
npm run build:ios
```

--

<small>This project was inspired by [@syonip](https://github.com/syonip/svelte-cordova-template)</small>
