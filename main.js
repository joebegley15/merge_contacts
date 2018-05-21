function mergeContacts(arr) {
	function hasOverLap(arrA,arrB) {
		var contains = false;
	    arrA.filter(function(n) {
    		if (arrB.indexOf(n) >= 0) {
    			contains = true;
    		}
		});
		return contains;
	}
	for (var i = arr.length -1; i >= 1 ; i--) {
		for (var x = i - 1; x >= 0; x--) {
			if (arr[i] != undefined && arr[x] != undefined) {
				if (hasOverLap(arr[x],arr[i])){
					arr[x] = arr[x].concat(arr[i]);
					arr[x] = arr[x].filter(function (item, pos) {return arr[x].indexOf(item) == pos});
					arr.splice(i,1);
				}
			}
		}
	}
	return arr;
}


console.log(mergeContacts([['tonyu@gmail.com','tonyu@yahoo.com'],['mike@yahoo.com','mike1@yahoo.com'],['mike@yahoo.com','mike1@yahoo.com'],['bob@gmail.com'],['mike1@yahoo.com','mike3@yahoo.com'],['tony@yahoo.com','tonyu@yahoo.com'],['stacy@gmail.com']]));