/*
	* Author: George Valtas
	* released under the MIT License
	* v2.0
	* 2017
*/

var regexSymbols = '[\\*\\^\\$]'

String.prototype.has = function( string, length ) {
	var variable = ''
	/*
		the loop gets all the characters of the variable which the .has() method 
		is assigned to and forms a string which is stored in 'variable'
	*/
	for ( i = 0; i < this.length; i++ ) {
		variable += this[ i ]
	}
	if ( !length ) {
		var or = string.match(/\sor\s/g)
		var and = string.match(/\sand\s/g)

		if ( !or ) or = ''
		if ( !and ) and = ''

		var _and = string.match(/\s_and\s/g)
		var _or = string.match(/\s_or\s/g)

		if ( !_and ) _and = ''
		if ( !_or ) _or = ''

		if ( string.match(regexSymbols) ) {
			for ( i = 0; i < string.match(new RegExp(regexSymbols, 'g')).length; i++ ) {
				//replaces each meta-char with '\\' to prevent errors
				var currentSymbols = string.match(new RegExp(regexSymbols, 'g'))[i]
				var backlashedSymbols = "\\" + string.match(new RegExp(regexSymbols, 'g'))[i]

				string = string.replace(currentSymbols, backlashedSymbols)
			}
		}
		// if user has used the word 'or', replace it with with a pipe
		if ( or ) {
			for ( i = 0; i < or.length; i++ ) {
				string = string.replace(' or ', '|')
			}
		}

		if ( and ) {
			for ( i = 0; i < and.length; i++ ) {
				string = string.replace(' and ', '\\b.*)(?=.*\\b')
			}
		}

		if ( string.match(/_and|_or/) ) {
			for ( i = 0; i < _or.length + _and.length; i++ ) {
				string = string.replace(/_and/, 'and')
				string = string.replace(/_or/, 'or')
			}
		}
		/*
			if the string contains '?=' because 'var and' is true 
			then add the following regex together with the string 
		*/
		if ( string.includes('?=') ) {
			return variable.match('(?=.*\\b' + string + '\\b.*)')
		}
	}
	// this is needed when the occurrences() function is used
	else if ( length == 'length') {
		return variable.match(new RegExp('\\b' + string + '\\b', 'g')).length
	}

	return variable.match('.*\\b' + string + '\\b.*')
}

String.prototype.not = function( string ) {
	var variable = ''

	for ( i = 0; i < this.length; i++ ) {
		variable += this[ i ]
	}

	var or = string.match(/\sor\s/g)
	var and = string.match(/\sand\s/g)
	var nor = string.match(/\snor\s/g)

	if ( !or ) or = ''
	if ( !and ) and = ''
	if ( !nor ) nor = ''
	
	var _or = string.match(/\s_or\s/g)
	var _and = string.match(/\s_and\s/g)
	var _nor = string.match(/\s_nor\s/g)
	
	if ( !_or ) _or = ''
	if ( !_and ) _and = ''
	if ( !_nor ) _nor = ''

	if ( string.match(regexSymbols) ) {
		for ( i = 0; i < string.match(new RegExp(regexSymbols, 'g')).length; i++ ) {
			var currentSymbols = string.match(new RegExp(regexSymbols, 'g'))[i]
			var backlashedSymbols = "\\" + string.match(new RegExp(regexSymbols, 'g'))[i]

			string = string.replace(currentSymbols, backlashedSymbols)
		}
	}

	if ( or ) {
		for ( i = 0; i < or.length; i++ ) {
			string = string.replace(' or ', ').*$)|(.*^(?!.*')
		}
	}

	if ( and || nor ) {
		for ( i = 0; i < and.length + nor.length; i++ ) {
			string = string.replace(' and ', ').*$)(?=.*^(?!.*')
			string = string.replace(' nor ', ').*$)(?=.*^(?!.*')
		}
	}

	if ( string.match(/_and|_or|_nor/) ) {
		for ( i = 0; i < _or.length + _and.length; i++ ) {
			string = string.replace(/_and/, 'and')
			string = string.replace(/_or/, 'or')
			string = string.replace(/_nor/, 'nor')
		}
	}

	if ( string.includes('?=') ) {
		return variable.match('(?=.*^(?!.*' + string + ').*$)')
	}

	return variable.match(new RegExp('(.*^(?!.*' + string + ').*$)', 'gi'))
}

String.prototype.beginsWith = function( string, length, not ) {
	var variable = ''

	for ( i = 0; i < this.length; i++ ) {
		variable += this[ i ]
	}

	if ( !length && !not ) {
		var or = string.match(/\sor\s/g)
		var and = string.match(/\sand\s/g)

		if ( !or ) or = ''
		if ( !and ) and = ''

		var _and = string.match(/\s_and\s/g)
		var _or = string.match(/\s_or\s/g)

		if ( !_and ) _and = ''
		if ( !_or ) _or = ''

		if ( string.match(regexSymbols) ) {
			for ( i = 0; i < string.match(new RegExp(regexSymbols, 'g')).length; i++ ) {
				var currentSymbols = string.match(new RegExp(regexSymbols, 'g'))[i]
				var backlashedSymbols = "\\" + string.match(new RegExp(regexSymbols, 'g'))[i]

				string = string.replace(currentSymbols, backlashedSymbols)
			}
		}

		if ( or ) {
			for ( i = 0; i < or.length; i++ ) {
				string = string.replace(' or ', ')|(\\b')
			}
		}

		if ( and ) {
			for ( i = 0; i < and.length; i++ ) {
				string = string.replace(' and ', ')(?=.*\\b')
			}
		}

		if ( string.match(/_and|_or/) ) {
			for ( i = 0; i < _or.length + _and.length; i++ ) {
				string = string.replace(/_and/, 'and')
				string = string.replace(/_or/, 'or')
			}
		}

		if ( string.includes('?=') ) {
			return variable.match(new RegExp('(?=.*\\b' + string + ')', 'g'))
		}

		return variable.match('(\\b' + string + ')')
	}

	else if ( length == 'length' ) {
		return variable.match(new RegExp('\\b' + string, 'g')).length
	}

	else if ( not == 'not' ) {
		return variable.match('.*^(?!.*\\b' + string + ').*$')
	}
}

String.prototype.endsWith = function( string, length, not ) {
	var variable = ''

	for ( i = 0; i < this.length; i++ ) {
		variable += this[ i ]
	}

	if ( !length && !not ) {
		var or = string.match(/\sor\s/g)
		var and = string.match(/\sand\s/g)

		if ( !or ) or = ''
		if ( !and ) and = ''

		var _and = string.match(/\s_and\s/g)
		var _or = string.match(/\s_or\s/g)

		if ( !_and ) _and = ''
		if ( !_or ) _or = ''

		if ( string.match(regexSymbols) ) {
			for ( i = 0; i < string.match(new RegExp(regexSymbols, 'g')).length; i++ ) {
				var currentSymbols = string.match(new RegExp(regexSymbols, 'g'))[i]
				var backlashedSymbols = "\\" + string.match(new RegExp(regexSymbols, 'g'))[i]

				string = string.replace(currentSymbols, backlashedSymbols)
			}
		}

		if ( or ) {
			for ( i = 0; i < or.length; i++ ) {
				string = string.replace(' or ', ')|(\\B')
			}
		}

		if ( and ) {
			for ( i = 0; i < and.length; i++ ) {
				string = string.replace(' and ', ')(?=.*\\B')
			}
		}

		if ( string.match(/_and|_or/) ) {
			for ( i = 0; i < _or.length + _and.length; i++ ) {
				string = string.replace(/_and/, 'and')
				string = string.replace(/_or/, 'or')
			}
		}

		if ( string.includes('?=') ) {
			return variable.match('(?=.*\\B' + string + ')')
		}

		return variable.match('(\\B' + string + ')')
	}

	else if ( length == 'length' ) {
		return variable.match(new RegExp('\\B' + string, 'g')).length
	}

	else if ( not == 'not' ) {
		return variable.match('.*^(?!.*\\B' + string + ').*$')
	}
}

String.prototype.wordSize = function( string, length, not ) {
	var variable = ''

	for ( i = 0; i < this.length; i++ ) {
		variable += this[ i ]
	}

	if ( !length && !not && string.not('from nor to') ) {
		var or = string.match(/\sor\s/g)

		if ( !or ) or = ''

		if ( or ) {
			for ( i = 0; i < or.length; i++ ) {
				string = string.replace(' or ', '})(\\b)|(\\b)(\\w{')
			}

			return variable.match('(\\b)(\\w{' + string + '})(\\b)')
		}

		return variable.match('\\w{' + string + '}')
	}
	else if ( !length && !not && string.has('from and to') ) {
		var formerDigit = string.substring(string.indexOf('from') + 5, string.indexOf('to') - 1)
		var latterDigit = string.substring(string.indexOf('to') + 3)

		return variable.match('\\w{' + formerDigit + ',' + latterDigit + '}')
	}

	else if ( length == 'length' ) {
		return variable.match(new RegExp('(\\b)(\\w{' + string + '})(\\b)', 'g')).length
	} 

	else if ( not == 'not' ) {
		return variable.match(new RegExp('(.*^(?!.*\\w{' + string + '}).*$)', 'g'))
	} 
}

String.prototype.hasLetters = function() {  
	var variable = ''

	for ( i = 0; i < this.length; i++ ) {
		variable += this[ i ]
	}

	return variable.match('.*[a-zA-Z]')
}

String.prototype.hasNumbers = function() {
	var variable = ''

	for ( i = 0; i < this.length; i++ ) {
		variable += this[ i ]
	}

	return variable.match('.*[0-9]')
}

String.prototype.hasCaps = function() {
	var variable = ''

	for ( i = 0; i < this.length; i++ ) {
		variable += this[ i ]
	}

	return variable.match('.*[A-Z]')
}

String.prototype.hasNoCaps = function() {
	var variable = ''

	for ( i = 0; i < this.length; i++ ) {
		variable += this[ i ]
	}

	return variable.match('.*^([^A-Z]*)$') 
}

String.prototype.hasOnlyCaps = function() {
	var variable = ''

	for ( i = 0; i < this.length; i++ ) {
		variable += this[ i ]
	}
	
	return variable.match('.*^([^a-z]*)$')
}

function occurrences( fn ) {
	fn = fn.substring(0, fn.lastIndexOf(')'))
	fn = fn + ", 'length')"
	return eval( fn )
}

function not( fn ) {
	fn = fn.substring(0, fn.lastIndexOf(')'))
	fn = fn + ", 'null', 'not')"
	return eval( fn )
}
