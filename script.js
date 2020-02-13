
let current_value = 25;

function progress_bar_change() {

	if (current_value >= 100) { current_value = 100 }

	progress_bar.attr('style', "width: "+current_value+"%;")

	progress_bar.text(current_value+'%')

}

$(document).ready(function() {

  	console.log('скрипт загрузился')

  	progress_bar = $(".progress-bar") 

	$(".btn1").click(function() {

		current_value = current_value + 1

		progress_bar_change()
	 });

	$(".btn3").click(function() {

		current_value = current_value + 3

		progress_bar_change()
	 });

	$(".btn7").click(function() {

		current_value = current_value + 7

		progress_bar_change()
	 });

});