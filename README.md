# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @dylan_div/lotide`

**Require it:**

`const _ = require('@dylan_div/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Retrieve the first element from the array.
* `tail(array)`: Retrieve every element except the head (first element) of the array.
* `middle(array)`: Retrieve the middle element(s) of an array.
* `eqArrays(array1, array2)`: Compare two arrays, return boolean value.
* `eqObjects(object1, object2)`: Compare two objects, return boolean value.
* `findKey(object, callback)`: This function helps to retrieve a key on an object through a callback function that returns the value of the object property.
* `letterPositions(string)`: This function will return all the indices (zero-based positions) in the string where each character is found.
* `findKeyByValue(object, value)`: This function helps to search for a key on an object where its value matches a given value.
* `flatten(nestedArray)`: Given an array with other arrays inside, this function can flatten it into a single-level array.