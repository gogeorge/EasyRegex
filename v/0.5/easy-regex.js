function has(type) {
	var self = {};
	if (type == "numbers" || type == "digits" || type == "num") return '(?=.*[0-9])';
	if (type == "letters" || type == "char") return '(?=.*[a-zA-Z])';
	return self;
}
function hasString(string, input) {
	if (!input) {			
		return '(?=.*\\b' + string + '\\b.*)';
	}
	else {
		return input.match(new RegExp(string, 'gi')).length;
	}
}
function notString(string) {
	return '(?=.*^(?!.*' + string + ').*$)';
}
function not(type) {
	var self = {};
	if (type == "numbers" || type == "digits" || type == "num") return '(?=.*^([^0-9]*)$)';
	if (type == "letters" || type == "char") return '(?=.*^([^a-zA-Z]*)$)';
	return self;
}
function beginsWith(type, input) {
	if (!input) {
		return '(?=\\b' + type + ')';
	} else {
		return input.match(new RegExp('\\b' + type, 'g')).length;
	}
}
function endsWith(type, input) {
	if (!input) {
		return '(?=\\B' + type + ')';	
	} else {
		return input.match(new RegExp('\\B' + type, 'g')).length;
	}
}
function wordSize(size, input) {
	if (!input) {
		return '(?=[a-zA-Z0-9]{' + size + '})';
	} else {
		return input.match(new RegExp('[a-z0-9]{' + size + '}', 'gi')).length;
	}
}
function or() {
	return '|';
}
// does not work with or() and + 
function atLeastOne(type, input) {
	if (!input) {
		return new RegExp('(?=' + type + '+)', 'g');
	} else {
		return input.match(new RegExp('(?=' + type + '+)', 'g')).length;
	}
}
function showRegex(type) { 
	return eval(type);
}