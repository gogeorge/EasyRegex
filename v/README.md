# Versions

Download the script from here : https://github.com/gogeorge/EasyRegex/releases

## v.01 

First beta version of this library

## v.05

- Added a second parameter to the functions to check how many times ex: 'hello' has been found in a string by ```hasString('hello', '<name_of_the_variable_which_contains_the_string>')```

- Added ```endsWith()``` and ```beginsWith()```

## v.06 

- Fixed the problem where putting regex meta-characters in the parameters of the functions would cause an error. However I only fixed the ```hasString()``` function, the rest will be solved in v.07 since I don't have time now.

## v.07

- Depreciated ```hasString()``` and ```notString()```. To use them just use ```has()``` and ```not()```

## v.08

- Fixed all the bugs from 0.7 

- Now all functions will check if there are any meta character in the parameters and if there are, a backlash behind them will be added to prevent errors

## v1.0

- The library is not in beta anymore

## v2.0

- many functions from v1.0 have been turned to string methods
