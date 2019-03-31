# Day 1 Recap of the Recap

The following provides resources/additional information on questions and topics that came up during class Wednesday.

## Media Queries - Using min, max, and both

It's generally good practice to code for "mobile first". When coding that way, you will generally be using `min-width` whereas starting with desktop first you will generally be using `max-width`. Starting with a mobile-first approach, your media queries might look like:

```css
/* This applies from 0px to 768px because of the following MQ */
body {
	background: red;
}

/* This applies from 768px to 1024px because of the following MQ */
@media screen and (min-width: 768px) {
	body {
		background: blue;
	}
}

/* This applies from 1024px onward */
@media screen and (min-width: 1024px) {
	body {
		background: green;
	}
}
```

### Resources

https://zellwk.com/blog/how-to-write-mobile-first-css/

http://www.the-haystack.com/2015/12/23/choosing-between-min-and-max-width/

https://www.w3schools.com/css/css3_mediaqueries_ex.asp

https://www.emailonacid.com/blog/article/email-development/emailology_media_queries_demystified_min-width_and_max-width/

https://responsivedesign.is/articles/why-you-dont-need-device-specific-breakpoints/

## Fun, Fun, Functions

### Callbacks

Callbacks are functions that are passed as arguments to other functions and are then called by those other functions. We see them whenever we create event handlers, for example:

```js
document.addEventListener('click', function(event) {
	console.log(event);
});
```

#### Resources

https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced

### Function declarations vs Function Expressions vs Named Function Expressions

Functions can be declared 3 different ways, though you will usually see them most often declared as function declarations or function expressions and not so much as Named Function Expressions. The full function definition is hoisted when the JS parser runs, so the function is available from any point in the application regardless if it is before or afterward in the code. On the other hande, function expressions are just like other variables in that the value of the variable is not hoisted, and subsequently the function is only available to code appearing after the function expression.

Function expressions however can be passed around as arguments, making them quite powerful (enabling things like `callbacks`).

Function declaration:

```js
function sum(x, y) {
	return x + y;
}

sum(1, 2);
```

Function Expression (function is anonymous):

```js
var sum = function(x, y) {
	return x + y;
};

sum(1, 2);
```

Named Function Exoression (function is given a name):

```js
var sum = function addThis(x, y) {
	return x + y;
};

sum(1, 2); // You still have to call it by the var name. Calling it by the function name is only available from within the function (e.g. you want to clear an interval).
```

#### Resources

https://medium.com/@raviroshan.talk/javascript-function-declaration-vs-expression-f5873b8c7b38

## Where to Place your `<script>` tags

### Resources

https://stackoverflow.com/questions/383045/is-put-scripts-at-the-bottom-correct
https://stackoverflow.com/questions/436411/where-should-i-put-script-tags-in-html-markup

## Github branches and pull requests

### Resources

https://help.github.com/categories/collaborating-with-issues-and-pull-requests/
https://help.github.com/articles/about-pull-request-reviews/

# Day 2 Recap of scope, this and context, setInterval, setTimeout

## scope, this and context

Every function invocation has both a scope and a context.

**Scope** refers to the visibility of variables. For example, all variables defined in the global scope are available to all parts of the applicatiion and variables defined in a function are only available in that function and its child functions. Variables declared in child functions are NOT visible to parent functions.

**Context** is the value of the `this` keyword, which is a reference to the object that “owns” the currently executing code. Context is most often determined by how a function is invoked.

`this` allows us to access properties and methods of an object (or an instance of an object created by invoking a function with the `new` keyword).

### Resources

- https://blog.kevinchisholm.com/javascript/difference-between-scope-and-context/
- http://ryanmorr.com/understanding-scope-and-context-in-javascript/

## setInterval and setTimeout

`setInterval` and `setTimeout` are methods of the `window`, provided to us by javascript. They allow us to manipulate time (i.e. the order in which events occur or repeating events for a set period of time).

`setTimeout` allows us to run a function after a given length of time. If we store it in a var, we can clear it before it run using `clearTimeout`.

`setInterval` repeats a given function at a given time-interval (every 1 second for example). We can clear it with `clearInterval`.

#### Caution

When the function for setTimeout or setInterval to run executes, it will be in the _context_ of the setTimeout/setInterval, which means `this` becomes the window.

### Resources

- https://www.w3schools.com/jsref/met_win_settimeout.asp
- https://www.w3schools.com/jsref/met_win_setinterval.asp
- https://www.w3schools.com/js/js_timing.asp
