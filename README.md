# select
Select is syntactic sugar to help maintain a functional approach to assigning to variables. It lets you avoid reassigning, so you can keep things const-y, if you're into that sort of thing. 🤷🏽‍♀️

## Usage

Lets say you have something like this.
```js
  let o = null;
  if (someCondition) {
    o = someConstructorMaybe();
  } else if (someOtherCondition) {
    o = somethingElse;
  }
```

Maybe you, like me, don't really like the look of that snippet, and would prefer it if you could assign directly to `o` with a single statement, and keep it as a `const`. You *could* do something like this instead:
```js
  const o = (() => {
    if (someCondition) {
      return someConstructorMaybe();
    } else if (someOtherCondition) {
      return somethingElse;
    } else {
      return null;
    }
  })();
```
Good old self-invocing function pattern. Well, if you're still not quite happy, you can use select. Like this:
```js
  const o = select(criteriaObject, (criteria) => {
    if (criteria.someCondition) {
      return someConstructorMaybe();
    } else if (criteria.someOtherCondition) {
      return somethingElse;
    } else {
      return null;
    }
  });
```

## Plans for world domination

In my future, EcmaScript will support this syntax:
```js
  const o = select (criteriaObject) {
    if (this.someCondition) {
      return someConstructorMaybe();
    } else if (this.someOtherCondition) {
      return somethingElse;
    } else {
      return null;
    }
  }
```

One can always dream...
