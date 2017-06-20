# EasyRegex

EasyRegex is a javascript library that is consisted of several functions that return regular expressions. The functions are easy to remember and have appropriate names for example:

```javascript
has('numbers')
```

will return its regular expression:

```javascript
'[0-9]' 
```
Actually it will return: ```(?=.*[0-9])``` but both of them have the same purpose: to *find a digit in a string*.


## Download


Download the easy-regex.js file and use it like this on your html file:

```html
<script src='easy-regex.js'></script>
```

There aren't any CDN links at the moment


## Examples


What makes this library more useful is that you can combine the functions to make a more complicated regular expressions:

- To check if a string contains emails that have @gmail OR @yahoo but NOT .gr

```javascript
var a = "example@gmail.com lorem ipsum etc example@yahoo.com";

if (a.match(hasString('@gmail') + or() + hasString('@yahoo') + notString('.gr'))) {
  console.log("string contains either '@gmail' or '@yahoo' and not '.gr'");
} else {
  console.log('did not match');
}
```

- To check if a string doesn't have digits or characters

```javascript
var b = "!@#$";

if (b.match(not('numbers') + not('letters'))) {
  console.log('string does not contain any digits or characters');
}
```

## Types of functions

| Functions  | Usage |
| ------------- | ------------- |
|```has(type)```  | Parameters tha can be  used to find a digit in a string: 'numbers', 'digits' or 'num'.  
For example: ```has('numbers')``` or ```has('digits')```  
Parameter used to find a character in a string: 'letters', 'char'.  
For example: ```has('letters')``` or ```has('char')```|
| ```hasString(string)```  | The parameter ```string``` is used to as an input to insert a string.For example:  
```javascript
var c = "Hasta la vista";

//the following will match the "Hasta la vista"
hasString('Hasta')
hasString('Hasta la')

//the following will *not* match the "Hasta la vista"
hasString('sta')
hasString('a vist')
```|

