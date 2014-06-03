var is_int_palindrome = function(n) {
    var 
    	mid = Math.floor(n/2),
    	left = Math.floor(n/Math.pow(10,mid)),
    	right,
    	arr = [];

    for (var  i = 1; i < n - mid; i++) {
    	arr[i-1] = n % (Math.pow(10,i));

    }
    	

}