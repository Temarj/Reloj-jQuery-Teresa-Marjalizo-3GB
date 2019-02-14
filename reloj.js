$(function(){

setInterval(function (){
	let reloj= new Date();
	let h= reloj.getHours()
	let min= reloj.getMinutes()
	let sec=reloj.getSeconds();

	if (h<10){
		h= "0"+h;
	}
	
	if (min<10){
		min= "0"+min;
	}

	if (sec<10){
		sec= "0"+sec;
	}
	let clock= h + ":" + min + ":" + sec;
	$ ("#clock").html(clock);	
}, 1000);

});