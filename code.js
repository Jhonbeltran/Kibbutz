$(document).ready(main);
 
function main(){
	var contador = 1;
	$('#menu').click(function(){
		// $('nav').toggle(); 
 
		if(contador == 1){
			$('#navigation').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('#navigation').animate({
				left: '-100%'
			});
		}
 
	});
 
};