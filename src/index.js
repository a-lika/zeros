module.exports = function getZerosCount(number) {
  // your implementation
    var i=5, zero=0;	
	do {
 zero+=(number/i);
 zero = Math.floor(zero);
    i *= 5;

} while (i<number);
	
	return Math.floor(zero); 
}
