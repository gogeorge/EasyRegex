var ignoredSymbols = "[\\*\\^\\$]";

function has(type, input) {
	if (!input) {
		if (type == "numbers" || type == "digits" || type == "num") return '(?=.*[0-9])';
		if (type == "letters" || type == "char") return '(?=.*[a-zA-Z])';
		
		if (type == "$numbers") return '(?=.*\\b' + type.substring(1) + '\\b.*)';
		if (type == "$letters") return '(?=.*\\b' + type.substring(1) + '\\b.*)';

		if (type.match(ignoredSymbols)) {
			for (i = 0; i < type.match(new RegExp('[\\*\\^\\$]', 'g')).length; i++) {
				var metaChar = type.match(new RegExp('[\\*\\^\\$]', 'g'))[i];
				var type = type.replace(metaChar, "\\" + metaChar);
			}
			return new RegExp(type, 'g')
		} else {
			return '(?=.*\\b' + type + '\\b.*)'
		}
	} else {
		return input.match(new RegExp(type, 'gi')).length
	}
}
function notString(string) {
	if (string.match(ignoredSymbols)) {
		for (i = 0; i < string.match(new RegExp('[\\*\\^\\$]', 'g')).length; i++) {
			var metaChar = string.match(new RegExp('[\\*\\^\\$]', 'g'))[i]
			var string = string.replace(metaChar, "\\" + metaChar)
		}
		return new RegExp('.*^(?!.*' + string + ').*$', 'g')
	} 
	return '(?=.*^(?!.*' + string + ').*$)'
}
function not(type) {
	if (type == "numbers" || type == "digits" || type == "num") return '(?=.*^([^0-9]*)$)';
	if (type == "letters" || type == "char") return '(?=.*^([^a-zA-Z]*)$)';
	if (type.match(ignoredSymbols)) {
		for (i = 0; i < type.match(new RegExp('[\\*\\^\\$]', 'g')).length; i++) {
			var metaChar = type.match(new RegExp('[\\*\\^\\$]', 'g'))[i];
			var type = type.replace(metaChar, "\\" + metaChar);
		}
		return new RegExp('.*^(?!.*' + type + ').*$', 'g')
	} else {
		return '(?=.*^(?!.*' + type + ').*$)'
	}
}
function beginsWith(type, input) {
	if (!input) {
		return '(?=\\b' + type + ')'
	} else {
		return input.match(new RegExp('\\b' + type, 'g')).length
	}
}
function endsWith(type, input) {
	if (!input) {
		return '(?=\\B' + type + ')'
	} else {
		return input.match(new RegExp('\\B' + type, 'g')).length
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
function atLeastOne(type, input) {
	if (!input) {
		return new RegExp('(?=' + type + '+)', 'g')
	} else {
		return input.match(new RegExp('(?=' + type + '+)', 'g')).length
	}
}
function showRegex(type) { 
	return eval(type)
}
