# Svelte + Capacitor (w/ live reload) Template

This is a project template for [Svelte](https://svelte.dev) + [CapacitorJS](https://capacitorjs.com) apps with live reload. 

*Note that you will need to have [Node.js](https://nodejs.org) installed.*

## Setup

### Get started

Install the dependencies...

```bash
cd svelte-capacitor
npm install
```

### Run local dev server (no capacitor)

```bash
npm run dev
```

### Add your Capacitor platform

```bash
npx cap add android // (or ios)
```

### Develop on your device with livereload (hot reload)

You will need to append your workstation IP to the `server.url` section in `capacitor.config.json`

Tip: Remember you will need the `http://` before the server ip. 

Back in the root folder:

`npm run dev:android` or `npm run dev:ios`

This will run the capacitor/svelte project with a web view pointing to your workstation's IP. You should see the message `Welcome to Svelte!` if svelte loaded correctly.

Try to change something in App.svelte, and you should see the content reload in your device.

* You need to have an emulator/device connected to adb 
* Your device has to be connected to the same wifi network as your workstation.

### To build a production application:

**Remember to remove the `server.url` in `capacitor.config.json`**

`npm run build:android` or `npm run build:ios`

## Quick Tips

### Developer Tools

You can use any Chromioum-based browser and use their Developer Tools (for Android atleast, have not tested iOS) to debug and access console commands on your personal device, by going to chrome://inspect#devices., edge://inspect#devices., vivaldi://inspect#devices., brave://inspect#devices, &c.

The standard web inspector will also work for debugging and rewriting styling and html without using your IDE just like when building a normal website. This may have some issues with some forms of SVG-related svelte templating (I have had issues with using some chart libraries displaying in the web inspector), they will still show up on the device but not in the preview.  

You may use the address bar in the developer tools to navigate to direct views in your application, even without any tappable links to do so. This allows you to create hidden routes for testing. 

### Routing Libraries
Since this is a Svelte applicaiton you will be able to use any routing manager that you prefer. I prefer routify, but others such as:
 - Routify - https://github.com/roxiness/routify
 - ItalyPaleAple/svelte-spa-router - https://github.com/ItalyPaleAle/svelte-spa-router
 - EmilTholin/svelte-routing - https://github.com/EmilTholin/svelte-routing
 - orgegorka/svelte-router - https://github.com/jorgegorka/svelte-router
 
 ### Accessing Device APIs 
 CapacitorJS is/was based on Cordova and has *complete* backwards compatibility with cordova plugins. To find plugins that allow you to access the device api's easier, attempt to find cordova or capacitor plugins. You will need to view their (capacitorjs) docs to learn how to properly accesss those. 

### Find a bug? Want to add a feature? 

Submit a PR! I would love to have more people working on this, the advantages of a system such as this vs NativeScript or React Native are innumerable especially in regards for how quickly you can get started and instant developer options and this could be built out to something great! 

### Are you using this project! Let us know! 

I would love to keep a collection of all the projects using this! 

-----

<small>Thank you to [@syonip](https://github.com/syonip/) for the inspiration for this project/</small>
