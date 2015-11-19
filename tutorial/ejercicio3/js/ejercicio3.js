window.addEventListener("load",function aplicar(){
	var result = document.getElementById("resultado");
	var arr = [ "test", 2, 1.5, false ];
	
	result.innerHTML+= find(arr,"test");
	function find(arr,value){
		for(i in arr){
			if(value == arr[i]){
				return "<h3>"+value.indexof(arr)+"</h3>";
			}else{
				return "<h3>-1</h3>";
			}
		}
	}

});