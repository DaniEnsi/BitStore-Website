---
title: Vue’s watch vs watchEffect, which should I use?
description: The core differences between the two so that you can use the best tool for the job in your day-to-day code
tags:
  - vue
  - nuxt
  - frontend
  - watch
  - watcheffect
createdAt: 2019-12-06T17:13:12.000Z
header: https://i.vgy.me/pxaVja.jpg
related:
- vue-dark-mode
- vue-use-composables
---


Today we are going to unwrap the core differences between the two so that you can use the best tool for the job in your day-to-day code.

## A quick refresher

A quick warning/refresher first… Whenever we want to `watch` a reactive value in Vue: ref, reactive, computed and trigger a side effect, we use `watch` to be able to react to the changes of the reactive property.

Keep in mind that a very common pitfall is to misuse `watch` as an alternative to computed. If you find yourself setting the value of another reactive property inside of your `watch` function, or you’re trying to think of a way to return something out of it, you’re probably better off using a computed property.

watchers in Vue.js are fantastic, and they have many use cases. They can especially come in handy when you need to trigger a side effect on external libraries such as Swift.js for example, when a property changes.

## Vue’s watchEffect

As we compare Vue watchers, I want to start with `watchEffect` because it is the most basic use of reactive dependency watching. But let’s not get ahead of ourselves with fancy terms.

First, to be able to use `watchEffect`, you have to import it from Vue. It is a function that accepts two parameters, the most important one being the first: a function. The second param is an object of options that are aimed at more advanced usage, including hooks, which are outside of the scope of this article.

```ts
import { watchEffect } from 'vue'

watchEffect(() => {
  // CODE HERE
})
```


All of the code that we place inside of the function (the first parameter) will trigger immediately as JavaScript reaches this line of code. This is very important, so keep it in mind!

Now the most important part about `watchEffect` is that any and all reactive values found inside of this function will become its “reactive dependencies.”

Consider the following example:

```ts
import { watchEffect, ref, computed } from 'vue'
import SomeSliderAPI from 'third-party-slider'

const props = defineProps({
  slidesPerGroup: { type: Number, default: 5 },
  touchEnabled: { type: Boolean, default: true },
  smoothScrolling: { type: Boolean, default: true }
})

watchEffect(() => {
  SomeSliderAPI.setOptions({
    slidesPerGroup: props.slidesPerGroup,
    touchEnabled: props.touchEnabled,
    smoothScrolling: props.smoothScrolling
  })
})
```

As I mentioned earlier, whenever this `watchEffect` call is reached, it will trigger the contents of the effect function that we just wrote. So that means that our `SomeSliderAPI`.setOptions method will be executed with the current value of our properties.

This API is just a demo, but as far as `watch`Effect and Vue understand it, three reactive values were “used” inside this function: slidesPerGroup, touchEnabled, and smoothScrolling. They are all part of the props reactive object.

The power of `watchEffect` lies in not having to manually declare the reactive values that we want to be watched. Imagine now that we need to add more and more props to our component to match the API of our external function. It can become cumbersome, so let’s refactor the code to simply use a spread operator.


```ts
import { watchEffect, ref, computed } from 'vue'
import SomeSliderAPI from 'third-party-slider'

const props = defineProps({
  slidesPerGroup: { type: Number, default: 5 },
  touchEnabled: { type: Boolean, default: true },
  smoothScrolling: { type: Boolean, default: true }
})

watchEffect(() => {
  SomeSliderAPI.setOptions({ ...props })
})
```


This code will work exactly as the first example, with one huge important benefit for us as developers. All the props in the component are now being “watched” and we don’t have to declare every single one again inside the `watchEffect` call for our trigger to know about them.

If you want to play with a simplified example using reactive instead of props, you can take a look here in the SFC playground.

## Vue’s watch

If you come from a Vue 2 background, `watch` behaves almost the same as what we already know as the Options API `watch`.

In the Options API, we write a `watch`(er) by declaring it inside of the `watch` property, as a function. The name of the function reflects the name of the reactive piece of data we wish to “track” for changes.

For example, in a component where we have the prop slidesPerGroup, we would write the `watch`er as follows.

```ts
{
  props: { slidesPerGroup: { type: Number, default: 5 }},
  watch: {
    slidesPerGroup (slides) {
      SomeSliderAPI.setOptions({ slidesPerGroup: slides })
    }
  }
}
```


In Vue 3, and when using the Composition API, the API for `watch` is a little different but more powerful and flexible.

If we simply were to switch our `watchEffect` call from the last example to use `watch` instead, we would have to take a few steps.

```ts
import { watch, ref, computed } from 'vue'
import SomeSliderAPI from 'third-party-slider'

const props = defineProps({
  slidesPerGroup: { type: Number, default: 5 },
  touchEnabled: { type: Boolean, default: true },
  smoothScrolling: { type: Boolean, default: true }
})

watch(props,
  () => {
    SomeSliderAPI.setOptions({ ...props })
})
```

The first thing to notice is that the function that we pass to `watch` is no longer the first param, but instead we have a source.

A source for a `watch` function can be one of the following, as stated in the documentation:

- A getter function that returns a value
- A ref
- A reactive object
- …or an array of the above.


This comes with a very clear disadvantage: we have to manually declare exactly what reactive values we want the function to “`watch`” to re-execute the effect function.

On the other hand, this comes with a very important advantage: we can manually control which reactive properties trigger this effect.

Imagine that you didn’t want the `smoothScrolling` property to trigger the `watch`er. You could simply remove it from the source param. However, since `props` is a reactive object (and as we saw in the list above, we need to use a `ref` or `reactive` object), we will need to add an additional step and extract the props we want to use into refs.

```ts [src/App.vue]
import { `watch`, ref, computed, toRefs } from 'vue'
import SomeSliderAPI from 'third-party-slider'

const props = defineProps({
  slidesPerGroup: { type: Number, default: 5 },
  touchEnabled: { type: Boolean, default: true },
  smoothScrolling: { type: Boolean, default: true }
})

const { slidesPerGroup, touchEnabled } = toRefs(props)

watch([
  slidesPerGroup, touchEnabled
],
() => {
  SomeSliderAPI.setOptions({ ...props })
})
```

You can test the above change in this SFC playground example.

Now, whenever the smoothScrolling property triggers the `watch` effect function, the `SomeSliderAPI.setOptions` method will not fire.

There’s a tiny caveat that I have not yet mentioned though, and it’s arguably one of the most important things to remember about the difference between `watch` and `watchEffect`.

`watch` is lazy by default. As opposed to `watch`Effect, `watch` will NOT execute the effect function as soon as the `watch` method declaration is reached!

In Vue 2 and in the Options API, we have the option to pass in a third param (an object with configuration options) and set the immediate: true property.

```ts
watch(
  [
    slidesPerGroup, touchEnabled
  ],
  () => {
    SomeSliderAPI.setOptions({ ...props })
  }, 
  { 
    immediate: true // Not lazy anymore
  }
)
```

## Wrapping up

Because the `watch` and `watchEffect` methods have strong similarities (and frankly in most use cases they can be used interchangeably without issue), they can often be confused with each other. The subtlety and power provided by the control of allowing Vue to figure out the dependencies automatically with `watchEffect` vs `watch` giving us manual control over them, is definitely a differentiator worth understanding. Hopefully you now feel more clear on which methods to turn to for your unique use cases.