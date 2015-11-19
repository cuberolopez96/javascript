window.addEventListener("load",function(){
	var arr = ["a", 1, "b", 2];
	document.write("<h3>original: "+arr+"</h3>");
	arr = filterNumeric(arr);
	document.write("<h3>filtrado: "+arr+"</h3>");

	function filterNumeric(arr){
		array = [];
		for(i in arr){
			if(!isNaN(arr[i])){
				array.push(arr[i]);
			}
		}
		return array;
	}


});