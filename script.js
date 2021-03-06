(function (){
	function random(list, number){
		$('#output').text('');

		if (!Number.isInteger(Number(number))){
			$('#output').text('Please input a whole number');
			return;
		}

		var result = [];		
		
		while(number > 0){
			var l = list.split(',');
			while(l.length > 0 && number > 0){
				var index = l.length*Math.random();
				result.push(l.splice(index, 1)[0]);
				number--;	
			}
		}
	
		
		for(var i = 0; i < result.length; i++){
			var div = $('<div/>');
			div.text(i+1 + ". " + result[i].trim());
			$("#output").append(div);
		}
	}

	$(document).ready(function() {
	    $(this).keydown(function(e) {
	        if(e.keyCode == 13) {
	        	e.preventDefault();
	        	random($('#names').val(), $('#number').val());
	        }
	    });
	});

	$('#submit').on("click", function(){
		random($('#names').val(), $('#number').val());
	});
})();