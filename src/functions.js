function occurrences( method ) {
	// remove closing bracket to add 'length param'
	method = method.substring(0, method.lastIndexOf(')'))
	method = method + ", 'length')"
	return eval( method )
}

function not( method ) {
	method = method.substring(0, method.lastIndexOf(')'))
	/* 
		second paremeter should be anything but 'length'. 
		If it is 'length' it will trigger the occurences() function
	*/
	method = method + ", 'null', 'not')"
	return eval( method )
}