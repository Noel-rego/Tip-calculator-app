# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript (DOM manipulation, event listeners)

### What I learned

This project was a big step into JavaScript for me, going from static HTML/CSS into an interactive app. A few things that clicked along the way:

**Event delegation with `e.target` and `dataset`**

Instead of writing a separate click handler for every tip button, I looped through all of them with `querySelectorAll` + `forEach` and used one shared handler. Each button's percentage is stored in a `data-tip` attribute and read via `e.target.dataset.tip`:

```js
tips.forEach((tip) => {
    tip.addEventListener("click", (e) => {
        tipperc = e.target.dataset.tip;
    });
});
```

**String vs. number gotchas**

Input values (and `dataset` values) come through as strings. `*` and `/` auto-convert strings to numbers, but `+` concatenates instead of adding — a subtle bug that cost me some debugging time until I made a habit of converting values with `Number()` as soon as I read them from the DOM.

**`"input"` vs `"change"` events**

`"change"` only fires once an input loses focus, while `"input"` fires on every keystroke. Swapping to `"input"` on the number-of-people field made the validation/error state feel live instead of delayed.

```css
.input-error:focus {
    outline: 0.3px solid hsl(10, 100%, 50%);
}
```

**Rounding money values**

Used `.toFixed(2)` to keep displayed tip and total amounts to two decimal places instead of long floating-point results.

### Continued development

- Add active/selected styling to the tip buttons so it's clear which one is currently chosen (using `classList.add`/`remove` rather than inline styles)
- Handle the "custom tip" and "preset tip button" inputs so they don't conflict with each other
- Revisit form validation so the number-of-people field resets its error state as soon as a valid value is entered, not just on manual reset
- Clean up variable naming and reduce reliance on module-level `let` variables shared across functions

### Useful resources

- [MDN Web Docs - dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset) - Helped me understand how `data-*` attributes map onto the `.dataset` object in JS.
- [MDN Web Docs - EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) - Reference for event types like `input`, `change`, and `click`.

### AI Collaboration

- **Tool used:** Claude
- **How I used it:** Mainly for debugging JavaScript — tracing through scope issues, understanding why certain values were `undefined`, and understanding concepts like `e.target`, `dataset`, and event types (`input` vs `change`) through guided questions rather than being given finished code.
- **What worked well:** Being asked "what do you think will happen" before getting an answer helped me actually understand *why* bugs were happening (like the `+` vs `*` string conversion issue) instead of just copy-pasting a fix.

## Author

- Frontend Mentor - [@Noel rego](https://www.frontendmentor.io/home)