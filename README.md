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
|```has(type)```  | Parameters that can be used to check if a digit is in a string: 'numbers' or 'digits' or 'num'. <br />For example: ```has('numbers')``` or ```has('digits')```  <br />Parameters used to check if a character is in a string: 'letters' or 'char'. <br /> For example: ```has('letters')``` or ```has('char')```|
| ```hasString(string)```  | The parameter ```string``` is used to as an input to insert a string. <br />For example: <br /> <br />```var c = "Hasta la vista";```<br /><br />```//the following functions will match the "Hasta la vista"```<br /><br />```hasString('Hasta')```<br />```hasString('Hasta la')```<br /><br />```//the following functions will NOT match the "Hasta la vista"``` <br /><br />```hasString('sta')``` <br />```hasString('a vist')``` |
|```not(type)```| Parameters that can be used to check if a digit is **not** in a string: 'numbers', 'digits' or 'num'. <br />For example: ```not('numbers')``` or ```not('digits')```  <br />Parameter used to check if a character is **not** in a string: 'letters', 'char'. <br /> For example: ```not('letters')``` or ```not('char')``` <br /> If ```var d = '123';``` then ```not('letters')``` will be true since there are no letters in that string |
|```notString(string)``` | Opposite of ```hasString()```. It will check if a string does **not** contain the value of the ```string``` parameter. For example: <br /> ```var e = 'one two three';``` <br /> ```if (e.match(notString('four'))) {```<br /> ```//code...``` <br /> ```}``` <br /> ```notString('four')``` will be true since ```var e``` does not contain the word 'four'. <br /> Also a phrase can be used: notString('four five') will also be true. |

