---
title: Nuxt 3 State Management in Vue
description: Nuxt 3 is coming with a new state management system. Let's take a look at how it works.
tags:
  - vue
  - nuxt
  - frontend
createdAt: 2020-05-04T21:37:39.798Z
---

If you’re a Nuxt developer, or plan to become one with Nuxt 3, you might be wondering what to use for state management.

- Do I use Nuxt 3’s own statement management solution: `useState`?
- Should I use Nuxt 3 with Pinia?
- Can I use Pinia and `useState` together?
- Which is better, Pinia vs. `useState`?
- Here’s the short answer:

> **Pinia is what you get if you keep adding more and more features to `useState`.
> More complex apps will benefit from the extra features in Pinia, but `useState` is better 
> for small and simple apps.**

<br>

## 1. Cross-Request State Pollution

In a typical Vue app, we store state as a singleton.

Whether you use Vuex, Pinia, or just a reactive object, you want to share the same state and the same object across all of your components. Otherwise, what’s the point?

```ts
// We create just one object that's shared across the
// entire application
const state = reactive({
  userName: '',
  colorTheme: '',
});
```

This works perfectly for client-side apps and SPAs.

But when we move that state management system to the server, we run into issues with cross-request state pollution. It sounds a bit scary, but it’s not that complicated.

When using server-side rendering (SSR), each new request is executed inside of the same application. And because we only have one singleton state object, every request will share the same state. This is bad. It creates the potential for leaked data, security vulnerabilities, and hard-to-pin-down bugs.

The solution to this is pretty simple but difficult to execute correctly: create a new state object for each new request! And instead of needing to figure out how to do this ourselves, we can use useState and get around that issue.

> Next, we’ll take a look at staying hydrated.

<br>

## 2. State Hydration
When using server-side rendering with Nuxt, our app is first executed on the server to generate the initial HTML. There’s a good chance we might want to use a ref or two during that initialization of our components:

```vue [src/App.vue]
<script setup>
const count = ref(getStoredCount());
</script>

<template>
  <div>{{ count }}</div>
</template>
```

Once the app is booted up on the client, we’ll have to re-run all of this initialization code. None of these variables are set, so we have to execute the code to figure out what they should be.

*But we just did those calculations!*

This is where hydration comes in. We take the state we’ve already computed on the server and send it along with the app’s HTML, CSS, and other assets. Then, instead of re-calculating everything, we can pick up where we left off!

Unfortunately, though, ref doesn’t do this for us. Luckily — you probably guessed it — Nuxt’s useState has hydration built-in. So useState will automatically perform this optimization without us even thinking about it.

With useState, we also get some benefits around sharing our state across the application.

<br>

## 3. Easier state sharing
As your app grows, you’ll find that some state needs to be accessed in almost every component.

Things like:
> - A user’s unique id or accountId
> - A list of features or permissions the current user can access
> - Color themes, whether dark mode is turned on or not

Instead of passing props around endlessly, we turn to global state management libraries like Vuex or Pinia… or even `useState`.

Each piece of state is accessed by a unique key but is available anywhere in our app:

```ts
// No matter where we are, this state will be the same
const features = useState('activeFeatures');
```

This is something that ref can’t do!

Why is Pinia better than useState?
Now that we’ve seen why useState was created in the first place, let’s see why you should (usually) use Pinia instead for state management in Nuxt. To understand this, we need to know how Pinia is different from useState, and what features it offers us.

Like I mentioned earlier, you can sum it up this way: 

<blog-notification type="info"> Pinia is what you get if you took useState and kept adding more and more practical features.
</blog-notification>

Pinia offers a better developer experience (DX) than Nuxt’s useState by providing more features that you’ll likely need as your application grows in size and complexity. In other words, if you don’t use Pinia, there’s a good chance you’ll find yourself re-inventing it and building your own state management library. So why not save yourself the trouble from the start?

There are four main DX improvements that Pinia gives us over useState:

> - A very slick DevTools integration
> - Stores to organize our state
> - Actions and Getters for easier updating and retrieving of state

<br>

## 1. Devtools integration
With Pinia, we get first-class Vue Devtools support, making developing and debugging issues so much easier.

First, we get a timeline of state changes, so we can see how our state updates over time. I can’t tell you how many bugs I’ve tracked down this way. One time a toggle wasn’t working for me. Every time I clicked it, nothing would happen. But when I looked at the state changes, I could see it was toggled twice every time I clicked it. So then I knew to look for two events being emitted and was able to fix the issue quickly.

Second, we can see the current state of all our stores. We can see all the stores at once, or we can also see the stores alongside any component that is using it.

Third, we get time-travel debugging. This lets us go back in history and replay the state changes in our application. To be honest, I’ve never used this feature much myself, but I also tend to forget that it exists at all!

<br>

## 2. Stores for organization
As applications get larger and more complex, so does the size and complexity of the state. Accessing a flat state with basic keys no longer makes much sense.

With useState we can start to address this by saving whole objects:

```ts
// Group related state into objects
const userState = useState('user', () => ({
  id: 3,
  name: 'Michael',
  profile: '...',
}));
```

Pinia takes this concept and goes further with the idea of stores.

A store in Pinia is a reactive object along with actions and getters (we’ll get to those next). But stores in Pinia can also use other stores. This lets us compose our state as we would compose our Vue components:


```ts
import { defineStore } from 'pinia'
import { useThemeStore } from './theme'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      name: 'User'
      theme: useThemeStore(),
    };
  },
})
```

Here we can use our theme store inside of our user store. This gives us a lot of powerful options for organizing our code. Something that useState doesn’t offer unless you build it yourself.

<br>

## 3. Actions and Getters
State is never static, and it’s nice to be able to define specific ways that our state can change through methods.

### Pinia Actions

Pinia gives us actions which are a great way to achieve this:

```ts
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    return { name: 'User' };
  },
  actions: {
    updateName(name) {
      if (name !== '') {
        this.name = name;
      }
    },
  },
})
```

We can call the action like this:


```ts
const store = useUserStore();
store.updateName('Michael'); 
```

They’re also co-located with the state, meaning that these actions are beside the state that they modify. This makes it much easier to understand the code when reading it and refactoring it.

Hunting through multiple files to track down where state is modified takes way too much time and creates the opportunity for many bugs.

### Pinia Getters

Pinia also lets us define getters, which are convenient functions for dealing with our state. You can think of them as computed properties for your Pinia stores.

When it comes to state, less is more. We want to save the smallest amount possible and then calculate everything else we need from that tiny piece. This simplifies our state a lot, but re-calculating stuff all the time can become tedious.

This is where our getters come in handy:


```ts
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      firstName: 'First',
      lastName: 'Last',
    };
  },
  getters: {
    // Get the full name whenever we need it
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  },
})
```

If we want to grab the fullName, we can use the getter:

```ts
const store = useUserStore();
console.log(store.fullName);
```

Instead of storing fullName as a separate piece of state, we can calculate it from firstName and lastName. If we stored fullName, we’d always have to update it whenever firstName or lastName are updated, which is no small task. This way, we avoid many bugs because the firstName getter will always be synced and up-to-date with our state.

And like our actions, these getters are always co-located with our state. This makes it easier to update them and understand how they work.

Without actions and getters, we’re left redefining our logic over and over again. You’d likely write your own system of actions and getters on top of useState. So why not skip ahead and start with that pattern, which comes with Pinia?