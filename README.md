# EasyRegex

<!-- add a gif -->

Go to this [link](https://github.com/gogeorge/EasyRegex/blob/master/README-v1.md) for the documentation of v1.1 and below

EasyRegex is a javascript library that is consisted of several string prototype methods that return regular expressions. The methods are easy to remember and have appropriate names for example:

```javascript
var string = '4657'

if (string.hasNumbers()) {
  // string contains numbers
}
```

will return its regular expression:

```javascript
/.*[0-9]/
```

## Download


Download the easy-regex.js file and use it like this on your html file:

```html
<script src='easy-regex.js'></script>
```

There aren't any CDN links at the moment


## Examples


What makes this library more useful is that you can combine the methods to make a more complicated regular expression:

Check if a string contains certain types of meals and check if some are not there at all:

```javascript
var meals = 'sandwich, burger with sauce, hamburger, meatballs';

if (meals.has('sandwich and burger with sauce') && meals.not('salad')) {
  // string contains the substrings 'sandwich' and 'burger with sauce' but not the substring/word 'salad'
}
```

Without the EasyRegex library the same code would look like this:

```javascript
var meals = 'sandwich, burger with sauce, hamburger, meatballs';

if (meals.includes('sandwich') && meals.includes('burger with sauce') && meals.match(/.*^(?!.*salad).*$/)) {
  // string contains the substrings 'sandwich' and 'burger with sauce' but not the substring/word 'salad'
}
```

Which is way more complicated.

<!-- link to logic operator title -->

Notice how in the has() method, 'and' is used as a logic operator to prevent this from happening (which takes more time to type):
```javascript
string.has('a word') && string.has('another word')
```

## List of methods
<!-- 
  content of the table:
  - has()
  - not()
  - beginsWith()
  - endsWith()
  - wordSize()
-->

| Methods  | Usage |
| ------------- | ------------- |
|```has(string)```| The parameter ```string``` is used to as an input to insert a string. <br />For example: <br /> <br />```var string = "Hasta la vista";```<br /><br />```// the following functions will match the "Hasta la vista"```<br /><br />```string.has('Hasta')```<br />```string.has('Hasta la')```<br /><br />```// the following functions will NOT match the "Hasta la vista"``` <br /><br />```string.has('sta')``` <br />```string.has('a vist')```|
|```not(string)```| Opposite of ```has()```. It will check if a string does **not** contain the value of the ```string``` parameter. For example: <br /> ```var string = 'one two three';``` <br /> ```if (string.not('four'))) {```<br /> ```// code...``` <br /> ```}``` <br /><br /> ```not('four')``` will be true since ```var string``` does not contain the word 'four' |
|```beginsWith(string)```| The parameter can be used to check if a word begins with something specific. For example <br /> ```beginsWith('ca')``` will search for any words in the string that begin with 'ca' like car and carpet. |
|```endsWith(string)```| The parameter can be used to check if a word ends with something specific. |
|```wordSize(string)```| The parameter can be used to check if there are any words that have more than 'x number of' characters. For example <br /> ```wordSize('3')``` will check if there are words or digits that have 3 characters or integers like 'carpet' has 5 and '966 000' has 6. On top of that, a string can be checked if it has a range of characters for example ```wordSize('from 3 to 8') will check if there are words or digits that have 3 to 8 characters. |
 <!-- check if the wordSize explanation is valid -->


## List of non-parameterized methods

| Methods  | Usage |
| ------------- | ------------- |
|```hasLetters()```| returns ```/.*[a-zA-Z]/```|
```hasNumbers()```| returns ```/.*[0-9]/```|
```hasCaps()```| returns ```/.*[A-Z]/```|
```hasNoCaps()```| returns ```/.*^([^A-Z]*)$/```|
```hasOnlyCaps()```| returns ```/.*^([^a-z]*)$/```|

## Using the occurrences() function

**Warning: The occurrences() function uses eval()**

```javascript
var menu = "lemon juice, apple juice, mango juice, cherry juice. normal burger, cheeseburger";

console.log("menu has " + occurrences("menu.has('juice')") + " juices and " + occurrences("menu.has('burgers')")+ " burgers");

//output => menu has 4 juices and 2 burgers
```

This is useful when you need to use regular expressions to find how many times a phrase, word or digit has been used in a string.

Here is another example: 

```javascript
var errorFile = "400 bad request, 401 unauthorized, 402 payment required, 403 forbidden, 404 not found, 308 permanent redirect, 200 OK, 201 created";

console.log(occurrences("menu.beginsWith('4')") + ' CLIENT errors have been found in this file');

//output => 5 CLIENT errors have been found in this file
```
This will search for anything that begins with 4 (so any client errors since they all have a 4 at the start). Notice how other errors like 308 or any success like 200 and 201 are not in the output since they do not begin with a 4.

The occurrences() function can also be used like this:

```javascript
var errorFile = "syntax error, reference error, unexpected token error, normal error";

if (occurrences("errorFile.has('error')") > 3) {
  // more than 3 errors found
}
```

## Using the not() function

**Warning: The not() function uses eval()**

Put any method, with an exception of all non-parameterized methods as well as has() and not, inside the not() function to check if the regular expression does **not** match for example:

```javascript
var string = 'python, java, ruby'

if (not("string.endsWith('script')")) {
  // there are no languages that end with 'script' (such as javascript, applescript, typescript etc)
}
```

## Using the logic operators

For all methods, with an exception of non-parameterized methods, the logic operators: AND and OR can be used like this:

```javascript
var string;

// instead of doing this:
string.has('something') && string.has('something else')

// it is possible to do this:
string.has('something and something else')

// same goes for the OR operator:
string.has('this') || string.has('that')

// can be changed to:
string.has('this or that')
```
Also, for the not() method, 'nor' can be used instead of 'and':

```javascript
string.not('this-word and that-phrase')

// will return the same regular expression as this:
string.not('this-word nor that-phrase')
```

## Using 'followedBy' and 'notFollowedBy'

```javascript
var string = 'nonexistant';

if (string.has('non followedBy existant or chalant')) {
  // this will be true, because there is the word 'nonexistant'
}

if (string.has('non notFollowedBy chalant')) {
  /*
    The variable 'string', does not have the word 'nonchalant' 
    so the condition will be true
  */
}
```

You can do the same for strings that have a blankspace but instead of writting ```followedBy``` write ```_ followedBy``` like this:
```javascript
var string = 'many apples';

if (string.has('many _ followedBy apples or oranges') {
  /* 
    this will be true. However it is pretty useless 
    when you can do the same thing like this:
   
    has('many apples or many oranges')
}
```

## Using the keywords as normal words

To use the logic operators as words add an underscore ( _ ) before the operators:

```javascript
var string = 'lemons and oranges and apples'

if (string.has('lemons _and oranges')) {
  /* 
    this will be interpreted as 'lemons and oranges' and the 
    regular expression will check if it matches which it does
  */
}
// while this:
if (string.has('lemons and oranges')) {
  /* 
     will search if the variable 'string' contains 
     the word 'lemons' and the word 'oranges'
  */
}
```

Same goes for ```followedBy``` and ```notFollowedBy```, just add an underscore.
  
## Releases

Check the releases here: 
https://github.com/gogeorge/EasyRegex/releases

or on this branch:
https://github.com/gogeorge/EasyRegex/tree/versions/v

## License

The EasyRegex library is under the MIT License
