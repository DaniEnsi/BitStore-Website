---
title: Vue Dark Mode
description: In this article, we’ll be taking a look at how to add dark mode to a Vue application using the VueUse library.
tags:
  - vue
  - nuxt
  - frontend
createdAt: 2019-12-07T17:13:12.000Z
header: https://i.vgy.me/Kxexmk.jpg
related:
- vue-nuxt-stagemanagement
---

The inclusion of dark color modes/themes has become quite common in modern web applications. Not only do dark modes look attractive on screen, but creating a dark mode/theme for your application can help improve readability, reduce eye strain, and even improve user experience.

In this article, we’ll be taking a look at how to add dark mode to a Vue application using the VueUse library.

## The useDark Composable

<kbd>useDark</kbd> is a VueUse composable that provides a reactive dark mode that automatically persists inside session storage or local storage.
<kbd>useDark</kbd> first checks if there’s a value between session storage and local storage, and if there is none, it uses the system preference of the user.

Let’s go ahead and create an app that toggles between dark mode and light mode using <kbd>useDark</kbd>.

## Project Setup

To get started, let’s create a simple Vue project with Vite. Run the following command in your terminal:

``` [terminal]
// Using yarn
yarn create vite vue-darkmode-app
// Using npm
npm create vite@latest vue-darkmode-app
```

Select Vue as your preferred framework, and install project dependencies in the project directory.

## Install VueUse Library

Next, let’s make sure we have <kbd>@vueuse/core</kbd> installed in our project. 

We need this in order to use composables such as <kbd>useDark</kbd> and <kbd>useToggle</kbd> in our project.Run the following command in your project’s root directory, in the terminal:
  
``` [terminal]
// Using yarn
yarn add @vueuse/core
// Using npm
npm install @vueuse/core
```

## Implementing Dark Mode

Now that we’re done with setting up, let’s go ahead and implement dark mode into our app.

Open up your **App.vue** file, delete the default starter code and import <kbd>useDark</kbd>

As earlier mentioned, <kbd>useDark</kbd> returns a reactive variable that checks the user’s session and local storage before resorting to the user’s system preferences for its value.

```vue [src/App.vue]
<script setup>
import { useDark } from "@vueuse/core";
const isDark = useDark();
</script>

<template>
  <p>Dark theme: {{isDark}}</p>
</template>
```

Now lets go ahead and run the server to view what we have so far.

Whatever value is displayed on your screen at the moment is a result of your system preferences. The reason we’re seeing <kbd>“false”</kbd> in the screenshot above is because this system does not have a dark theme preference.

If you update your system preference to use a dark theme, the value of <kbd>isDark</kbd> would also update and <kbd>“true”</kbd> should display instead.

Now, let’s add a simple button that can toggle between light and dark mode. For this function, we’ll be using the VueUse composable <kbd>useToggle</kbd>, which takes in a boolean and switches its value.

Edit your **App.vue** file to look like this:

```vue [src/App.vue]
<script setup>
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <p>Dark theme: {{isDark}}</p>

  <button @click="toggleDark()">
    Toggle Color Mode
  </button>

</template>
```

In this code, our useToggle function takes in isDark and changes its value every time our “Toggle Color Mode” button is clicked.

## Styling the App

You may have noticed that adding <kbd>useDark</kbd> to our app and toggling between color modes didn’t change our application’s appearance. That is because <kbd>useDark</kbd> only handles the DOM attribute changes and does not affect the actual style, theme or CSS for you.

However, <kbd>useDark</kbd> makes it easy for us to update our styles depending on what color mode is selected by adding a “dark” class to our HTML element every time <kbd>isDark</kbd> is <kbd>true</kbd>.

Now let’s improve our app’s appearance by adding a different style for our dark mode.

Open up your **App.vue** file and edit the style:

```vue [src/App.vue]
<script setup>
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <p>Dark theme: {{isDark}}</p>

  <button @click="toggleDark()">
    Toggle Color Mode
  </button>
</template>

<style>
.dark {
  background: #16171d; // it's better to use a dark grey color instead of pure black
  color: #fff;
}
</style>
```

## Customizing useDark

Another great thing about <kbd>useDark</kbd> is that it is completely customizable. You can choose to specify the selector, attribute, and value of dark and light modes in your app using four different properties.

Update <kbd>useDark</kbd> to look like this:

```js [useDark]
const isDark = useDark({
  selector: "body", //element to add attribute to
  attribute: "theme", // attribute name
  valueDark: "custom-dark", // attribute value for dark mode
  valueLight: "custom-light", // attribute value for light mode
});
```

This means you’ll also need to update your styles to look like this:

```vue [src/App.vue]
<style>
[theme="custom-dark"] {
  background: #16171d;
  color: #fff;
}
</style>
```

Everything should still work the same as before.

If this configuration isn’t enough for you, and you need even more customization, you can hook the <kbd>onChanged</kbd> event directly to take full control over how you handle the updates.

Example:

```js [useDark]
const isDark = useDark({
  onChanged(dark) {
    // update the dom or store user's preferences in a DB by making an API call
  },
})
```
