// checking off by clicking
$("ul").on("click", "li", function(){
	// if($(this).css("color") === "rgb(128, 128, 128)"){
	// 	$(this).css({
	// 		color: "black",
	// 		textDecoration: "none"
	// 	});
	// } else {
	// 	$(this).css({
	// 	color: "gray",
	// 	textDecoration: "line-through"
	// });
	// }
	$(this).toggleClass("completed");
});

// click on x to delete
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(450, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		// grabbing todo text
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li>")
	}
});

$(".fa-plus-square").click(function(){
	$("input[type='text']").fadeToggle(450);
});