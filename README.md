![](/assets/svelte_cap.png)
# Svelte + Capacitor (w/ live reload) Template

This is a project template for [Svelte](https://svelte.dev) + [CapacitorJS](https://capacitorjs.com) apps with live reload, granting the ability to quickly build production ready applications for iOS and Android at near-native performance using JavaScript (Svelte). 
## Changelog

**v2.0.0** - The new version is here, this comes with some better defaults, vite as the build manager, built in routing library, TypeScript, and aliases. While this could be seen as an 'incremental' update I think this works as a v2.0.0 as it was a complete rewrite.
  - **Build Tool**: Changed the build tool to Vite from Rollup, this is the new and recommended way to develop Svelte applications, it's faster, cleaner, and easier to handle. 
  - **Routing**: Built in routing library, using Routify, I spent a considerable time debating on including one - I decided I would. This is mainly due to the amount of messages and emails(!) I received asking how to implement one, Routify is by far my favorite and so here it is. This is very easily removed and replaced with your preferred. 
  - **Typescript**: I personally do not use typescript as much as I should, but others do. I have included some TS configs for you. 
  - **@components, @store, and @utils**: If you have ever taken a look at sveltekit they have these nifty aliases throughout their code so you don't have to write '../../../components' or what have you. Now you can just do '@components/file' and Vite will readily load them from the components folder, this makes it easy to create changes as you don't need to change the file location on every move or copy. Please check out the [Vite Aliases](https://github.com/Subwaytime/vite-aliases) package for more questions.

## Setup

*Note that you will need to have [Node.js](https://nodejs.org) installed.*

### Get started

Install the dependencies...

```bash
git clone "https://github.com/drannex42/svelte-capacitor.git"
cd svelte-capacitor
npm install
```

### Run local dev server (no capacitor)

```bash
npm run dev:start
```

### Add your Capacitor platform

```bash
npx cap add android // (or ios)
```

### Run local dev server (with capacitor)

Please see section below (Develop on your device with livereload)


### Develop on your device with livereload (hot reload)

If you're only targeting Android, you only need to change the `server.url` section in `capacitor.config.json` to use `http://10.0.2.2:5001`, since [Android Studio already adds a `localhost` proxy](https://stackoverflow.com/questions/9808560/why-do-we-use-10-0-2-2-to-connect-to-local-web-server-instead-of-using-computer). Just remember to remove it when building your app for production.

If you're targeting iOS or both, you will need to append your workstation IP to the `server.url` section in `capacitor.config.json` instead. To discover your workstation IP, just run `ifconfig` or find it on the network settings.

Tip: Remember you will need the `http://` before the server IP.

Back in the root folder:

`npm run dev:android` or `npm run dev:ios`

This will run the capacitor/svelte project with a web view pointing to your workstation's IP. You should see the message `Welcome to Svelte!` if svelte loaded correctly.

Try to change something in `App.svelte`, and you should see the content reload on your device.

* You need to have an emulator/device connected to adb
* Your device has to be connected to the same wifi network as your workstation.


### Change Splash screen and app icon:

* Add icon.png and splash.png to resources dir
* Recomended size:
  - Icon - 512x512
  - Splash - 1920x1920
* Next, run the following to generate all images then copy them into the native projects:
```
cordova-res ios --skip-config --copy
cordova-res android --skip-config --copy
```


### To build a production application:

**Remember to remove the `server.url` in `capacitor.config.json`**

`npm run build:android` or `npm run build:ios`

## Quick Tips

### Developer Tools

You can use any Chromium-based browser and use their Developer Tools (for Android atleast, have not tested iOS) to debug and access console commands on your personal device, by going to chrome://inspect#devices., edge://inspect#devices., vivaldi://inspect#devices., brave://inspect#devices, &c.

The standard web inspector will also work for debugging and rewriting styling and html without using your IDE just like when building a normal website. This may have some issues with some forms of SVG-related svelte templating (I have had issues with using some chart libraries displaying in the web inspector), they will still show up on the device but not in the preview.

You may use the address bar in the developer tools to navigate to direct views in your application, even without any tappable links to do so. This allows you to create hidden routes for testing.

### Assets 

Place any assets, CSS, client JS, Images in the `assets` folder - not the public folder! On build and usage this will add everything to the public dist folder for copying to the device application. [See Vite.js on this settings](https://vitejs.dev/guide/assets.html#the-public-directory).

### Aliases

**@components, @store, and @utils**: If you have ever taken a look at sveltekit they have these nify aliases throughout their code so you don't have to write '../../../components' or what have you. Now you can just do '@components/file' and Vite will readily load them from the components folder, this makes it easy to create changes as you don't need to change the file location on every move or copy. Please check out the [Vite Aliases](https://github.com/Subwaytime/vite-aliases) package for more questions.
### Routing Libraries
Since this is a Svelte application you will be able to use any routing manager that you prefer. I prefer routify, but others such as the following will work as well (Routify is built into this project, but easily changed)
 - Routify - https://github.com/roxiness/routify
 - ItalyPaleAle/svelte-spa-router - https://github.com/ItalyPaleAle/svelte-spa-router
 - EmilTholin/svelte-routing - https://github.com/EmilTholin/svelte-routing
 - jorgegorka/svelte-router - https://github.com/jorgegorka/svelte-router

 ### Accessing Device APIs
 CapacitorJS is/was based on Cordova and has *complete* backwards compatibility with cordova plugins. To find plugins that allow you to access the device api's easier, attempt to find cordova or capacitor plugins. You will need to view their (capacitorjs) docs to learn how to properly accesss those.

 ### Why didn't the second version use Sveltekit? 

 This is ready for production (this template is being used in several production applications already!) and Sveltekit is not, I also believe this is much more easily extensible and doesn't lock you into the Sveltekit way of doing things (no opinionated API's) while adding in defaults for Capacitor.js for application development on Android and iOS. You likely don't need to learn a new paradigm, just use what you know with Javascript and Svelte to build cross platform applications at near native performance.

### Find a bug? Want to add a feature?

Submit a PR! I would love to have more people working on this, the advantages of a system such as this vs NativeScript or React Native are innumerable especially in regards for how quickly you can get started and instant developer options and this could be built out to something great!

### Are you using this project! Let us know!

I would love to keep a collection of all the projects using this!

-----

This template was created by [Drannex42 (Macleod Sawyer)](https://drannex42.com/) of [DNX Industries](https://dnxi.org) - [Source can be found here](https://github.com/drannex42/svelte-capacitor)
