window.addEventListener("load",function(){
	var  obj = {
  		 className:'open menu'
	};
	addClass(obj, 'new');// obj.className='open menu new'

	addClass(obj, 'open');  // no changes (class already exists)

	addClass(obj, 'me'); // obj.className='open menu new me'


	function addClass(obj,clase){
		obj.className = obj.className.split(" ");
		var añadir = true;
		for(i in obj){
			if(clase == obj[i]){
				añadir = false;
			}
		}
		if(añadir==true){
			obj.className.push(clase);
		}
			obj.className = obj.className.join(" ");

			document.write("<h3>"+obj.className+"</h3>")

	}
});