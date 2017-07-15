var ignoredSymbols = "[\\*\\^\\$]"

function has(string, input) {
	if (!input) {
		if (string == "numbers" || string == "digits" || string == "num") return '(?=.*[0-9])'
		if (string == "letters" || string == "char") return '(?=.*[a-zA-Z])'
		
		if (string == "$numbers" || string == "$digits" || string == "$num" || string == "$letters" || string == "$char") {
			return '(?=.*\\b' + string.substring(1) + '\\b.*)'
		}

		if (string.match(ignoredSymbols)) {
			for (i = 0; i < string.match(new RegExp(ignoredSymbols, 'g')).length; i++) {
				var metaChar = string.match(new RegExp(ignoredSymbols, 'g'))[i]
				    string = string.replace(metaChar, "\\" + metaChar)
			}
			return new RegExp(string)
		} else {
			return '(?=.*\\b' + string + '\\b.*)'
		}
	} else {
		if (string.match(ignoredSymbols)) {
			for (i = 0; i < string.match(new RegExp(ignoredSymbols, 'g')).length; i++) {
				var metaChar = string.match(new RegExp(ignoredSymbols, 'g'))[i]
				    string = string.replace(metaChar, "\\" + metaChar)
			}
		}
		return input.match(new RegExp(string, 'gi')).length			
	}
}
function not(string) {
	if (string == "numbers" || string == "digits" || string == "num") return '(?=.*^([^0-9]*)$)'
	if (string == "letters" || string == "char") return '(?=.*^([^a-zA-Z]*)$)'

	if (string == "$numbers" || string == "$digits" || string == "$num" || string == "$letters" || string == "$char") {
		return '(?=.*^(?!.*' + string.substring(1) + ').*$)'
	}

	if (string.match(ignoredSymbols)) {
		for (i = 0; i < string.match(new RegExp(ignoredSymbols, 'g')).length; i++) {
			var metaChar = string.match(new RegExp(ignoredSymbols, 'g'))[i]
				string = string.replace(metaChar, "\\" + metaChar)
		}
	}
	return '(?=.*^(?!.*' + string + ').*$)'
}
function beginsWith(string, input) {
	if (!input) {
		if (string.match(ignoredSymbols)) {
			for (i = 0; i < string.match(new RegExp(ignoredSymbols, 'g')).length; i++) {
				var metaChar = string.match(new RegExp(ignoredSymbols, 'g'))[i]
					string = string.replace(metaChar, "\\" + metaChar)
			}
		}
		return '(?=\\b' + string + ')'
	} else {
		if (string.match(ignoredSymbols)) {
			for (i = 0; i < string.match(new RegExp(ignoredSymbols, 'g')).length; i++) {
				var metaChar = string.match(new RegExp(ignoredSymbols, 'g'))[i]
					string = string.replace(metaChar, "\\" + metaChar)
			}
		}
		return input.match(new RegExp('\\b' + string, 'g')).length
	}
}
function endsWith(string, input) {
	if (!input) {
		if (string.match(ignoredSymbols)) {
			for (i = 0; i < string.match(new RegExp(ignoredSymbols, 'g')).length; i++) {
				var metaChar = string.match(new RegExp(ignoredSymbols, 'g'))[i]
					string = string.replace(metaChar, "\\" + metaChar)
			}
		}
		return '(?=\\B' + string + ')'
	} else {
		if (string.match(ignoredSymbols)) {
			for (i = 0; i < string.match(new RegExp(ignoredSymbols, 'g')).length; i++) {
				var metaChar = string.match(new RegExp(ignoredSymbols, 'g'))[i]
					string = string.replace(metaChar, "\\" + metaChar)
			}
		}
		return input.match(new RegExp('\\B' + string, 'g')).length
	}
}
function wordSize(size, input) {
	if (!input) {
		return '(?=[a-zA-Z0-9]{' + size + '})'
	} else {
		return input.match(new RegExp('[a-z0-9]{' + size + '}', 'gi')).length	
	}
}
function or() {
	return '|'
}
// does not work with or() and + 
function atLeastOne(string) {
	if (string.match(ignoredSymbols)) {
		for (i = 0; i < string.match(new RegExp(ignoredSymbols, 'g')).length; i++) {
			var metaChar = string.match(new RegExp(ignoredSymbols, 'g'))[i]
				string = string.replace(metaChar, "\\" + metaChar)
		}
	}
	return new RegExp('(?=' + string + '+)', 'g')
}
function showRegex(string) { 
	return eval(string)
}
