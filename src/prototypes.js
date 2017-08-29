String.prototype.hasLetters = function() {  
	var variable = ''

	for ( i = 0; i < this.length; i++ ) {
		variable += this[ i ]
	}

	return variable.match(/.*[a-zA-Z]/)
}

String.prototype.hasNumbers = function() {
	var variable = ''

	for ( i = 0; i < this.length; i++ ) {
		variable += this[ i ]
	}

	return variable.match(/.*[0-9]/)
}

String.prototype.hasCaps = function() {
	var variable = ''

	for ( i = 0; i < this.length; i++ ) {
		variable += this[ i ]
	}

	return variable.match(/.*[A-Z]/)
}

String.prototype.hasNoCaps = function() {
	var variable = ''

	for ( i = 0; i < this.length; i++ ) {
		variable += this[ i ]
	}

	return variable.match(/.*^([^A-Z]*)$/)
}

String.prototype.hasOnlyCaps = function() {
	var variable = ''

	for ( i = 0; i < this.length; i++ ) {
		variable += this[ i ]
	}
	
	return variable.match(/.*^([^a-z]*)$/)
}