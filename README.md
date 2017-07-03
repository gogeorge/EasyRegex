# EasyRegex

![](https://media.giphy.com/media/xUA7aRtxDdkbhiV53W/giphy.gif)


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

Without the EasyRegex library the same code would look like this:

```javascript
var a = "example@gmail.com lorem ipsum etc example@yahoo.com";

if (a.match('.*\b@gmail\b.*') || (a.match('.*\b@yahoo\b.*') && a.match('.*^(?!.*.gr).*$'))) {
  console.log("string contains either '@gmail' or '@yahoo' and not '.gr'");
} else {
  console.log('did not match');
}
```
Which is way more complicated

- To check if a string doesn't have digits or characters

```javascript
var b = "!@#$";

if (b.match(not('numbers') + not('letters'))) {
  console.log('string does not contain any digits or characters');
}
```

## Types of functions
<!-- 
  content of the table:
  - has()
  - not()
  - hasString() 
  - notString()
  - or()
  - atLeastOne()
  - showRegex()
-->
| Functions  | Usage |
| ------------- | ------------- |
|```has(type)```  | Parameters that can be used to check if a digit is in a string: 'numbers' or 'digits' or 'num'. <br />For example: ```has('numbers')``` or ```has('digits')```  <br />Parameters used to check if a character is in a string: 'letters' or 'char'. <br /> For example: ```has('letters')``` or ```has('char')``` |
| ```hasString(string)```  | The parameter ```string``` is used to as an input to insert a string. <br />For example: <br /> <br />```var c = "Hasta la vista";```<br /><br />```//the following functions will match the "Hasta la vista"```<br /><br />```hasString('Hasta')```<br />```hasString('Hasta la')```<br /><br />```//the following functions will NOT match the "Hasta la vista"``` <br /><br />```hasString('sta')``` <br />```hasString('a vist')``` |
|```not(type)```| Parameters that can be used to check if a digit is **not** in a string: 'numbers', 'digits' or 'num'. <br />For example: ```not('numbers')``` or ```not('digits')```  <br />Parameter used to check if a character is **not** in a string: 'letters', 'char'. <br /> For example: ```not('letters')``` or ```not('char')``` <br /> If ```var d = '123';``` then ```not('letters')``` will be true since there are no letters in that string |
|```notString(string)``` | Opposite of ```hasString()```. It will check if a string does **not** contain the value of the ```string``` parameter. For example: <br /> ```var e = 'one two three';``` <br /> ```if (e.match(notString('four'))) {```<br /> ```//code...``` <br /> ```}``` <br /><br /> ```notString('four')``` will be true since ```var e``` does not contain the word 'four'. <br /> Also a phrase can be used: ```notString('four five')``` will also be true. |
|```or()```| This has no parameter. All it does is act as an OR operator. For example:<br /> ```has('numbers') + or() + has('letters')```<br /> Which means even if there are no numbers in a string, if there are letters this combination will still be true. |
|```atLeastOne(type)```| This is the equivalent of ```n+``` quantifier. So if there is more than occurrence of the value of the ```type``` parameter then the function will be true. For example: <br /> ```var f = 'car bus car car';``` <br /> ```atLeastOne('car')``` will be true since there are three occurrences of 'car'. |
|```beginsWith(type)```| The parameter can be used to check if a word begins with something specific. For example <br /> ```beginsWith('ca')``` will search for any words in the string that begin with 'ca' like car and carpet. |
|```endsWith(type)```| The parameter can be used to check if a word ends with something specific. |
|```wordSize(size)```| The parameter can be used to check if there are any words that have more than ```size``` characters. For example <br /> ```wordSize('3')``` will check if there are words or digits that have 3 characters or integers like 'carpet' has 5 and '966 000' has 6.| 
|```showRegex(type)``` | The value of the parameter (consisted of functions from the easy-regex.js script) will be turned into regular expressions. For example: <br /> ```showRegex("has('numbers') + not('letters') + or() + notString('hello world')")``` <br /> Will return:<br /> ```(?=.*[0-9])(?=.*^([^a-zA-Z]*)$)\|(?=.*^(?!.*hello world).*$)``` |

## Using the second parameter of the function

```javascript
var menu = "lemon juice, apple juice, mango juice, cherry juice. normal burger, cheeseburger";

console.log("menu has " + hasString('juice', menu) + " juices and " + hasString('burger', menu) + " burgers");

//output => menu has 4 juices and 2 burgers
```

This is useful when you need to use regular expressions to find how many times a phrase, word or digit has been used in a string.

Here is another example: 

```javascript
var errorFile = "400 bad request, 401 unauthorized, 402 payment required, 403 forbidden, 404 not found, 308 permanent redirect, 200 OK, 201 created";

console.log(beginsWith('4', errorFile) + ' CLIENT errors have been found in this file');

//output => 5 CLIENT errors have been found in this file
```
This will search for anything that begins with 4 (so any client errors since they all have a 4 at the start). Notice how other errors like 308 or any success like 200 and 201 are not in the output since they do not begin with a 4.

## Additional Information

- For a AND operator to add two or more functions use ```+``` like this ```has('numbers') + not('letters')```. In other words, there isn't anything like ```and()``` just like there is for the OR operator ```or()```.

## Warnings

- For now ```atLeastOne()``` cannot be combined with ```or()``` or ```+```.

## License

The EasyRegex JavaScript library is under the MIT License
