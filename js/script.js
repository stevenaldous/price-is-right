$(function(){
	//button vars
	var newGame = $('#new-game')
	var goBtn = $('#go-button');
	var prodTitle = $('#product-name');
	var showcase= $('#product-image');
	var reveal = $('#product-price');
	var roundCount = -1;

	//scoreCount
	var plyr1Score= $('#1-score');
	var plyr2Score= $('#2-score');
	var score1 = '';
	var score2 = '';


	//hide reveal box
	$('#reveal').hide();
	


//objects in an array to pull at random
	var data=[
			{photo: 'http://i.imgur.com/OqZ3iJY.jpg', desc:'Dyson DC65 Ball Multi Floor Vacuum' ,price: 399.99},
			{photo: 'http://i.imgur.com/tZ9Oaxy.jpg', desc:'Olympus PEN E-PL7 16MP Digital Camera' ,price: 599.99},
			{photo: 'http://i.imgur.com/xtNdd3d.jpg', desc:'AmazonBasics 8-Sheet High-Security Shredder' ,price: 69.99},
			{photo: 'http://i.imgur.com/FkiAIW0.jpg', desc:'Philips Norelco 6945XL Electric Razor' ,price: 39.99},
			{photo: 'http://i.imgur.com/s4bN9Oy.jpg', desc:'Bumble and Bumble The Surf Set Travel Size' ,price: 53.99},
			{photo: 'http://i.imgur.com/7Qxz01m.jpg', desc:'Brooks England B17 Special Saddle' ,price: 171},
			];		
	
	//array shuffle function
	function shuffle(o) {
    	for(var j, x, i =data.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    	return o;
	};
 //post product to page to showcase
		
	var postItAll = function(num){
		showcase.append('<img src="'+data[num].photo+'">');
		prodTitle.append('<p>'+data[num].desc+'</p>');
		reveal.append('<p>$'+data[num].price+'</p>');
	};

	//restrict letters from input
$('.form-control').keydown(function(event){
	    if ( jQuery.inArray(event.keyCode,[46,8,9,27,13,190]) !== -1 ||
            (event.keyCode >= 35 && event.keyCode <= 39)) {
                 return;
        } else {
            if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
                event.preventDefault(); 
               }   
        }
})


//game Start!
	$(newGame).on('click',function(e){
		e.preventDefault();
		shuffle(data);
		roundCount++;
		plyr1=0;
		plyr2=0;
		postItAll(roundCount);
		

	}); //end of play button


	
	//take and eval player inputs, assign pointo round winner
	$('#swap').on('click', '#go-button', function(e){
		e.preventDefault();
		if($('#plyr1Input').val()==='' || $('#plyr2Input').val() === ''){
			alert('need more than that!')
		} else {
		$('#swap').empty();
		$('#swap').append('<button id="next-button" class="btn btn-warning" type="button">Next!</button>');
		$('#reveal').show();
		roundCount++;
	//Next click action, remove prev product and place new one up.
		$('#swap').on('click','#next-button',function(e){
			e.preventDefault();
			$(prodTitle).empty();
			$(showcase).empty();
			$(reveal).empty();
			postItAll(roundCount);
			$(plyr1Price).val(undefined);
			$(plyr2Price).val(undefined);
			$('#swap').empty();
			$('#swap').append('<button id="go-button" class="btn btn-danger" type="button">GO!</button>');
			$('#reveal').hide();

			
			});
		};
	});
	





});//end of page






