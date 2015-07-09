$(function(){
	//button vars
	var playBtn = $('#play-button');
	var plyr1Btn = $('#plyr1-btn');
	var plyr2Btn = $('#plyr2-btn');
	var nextBtn = $('#next-button');
	var prodTitle = $('#product-name');
	var showcase= $('#product-image');
	var reveal = $('#product-price');
	var roundCount = -1;

	//hide next button and reveal box
	$('#reveal').hide();
	$(nextBtn).hide();

	//scorecount
	plyr1= '';
	plyr2='';
//start Game
	$(playBtn).on('click',function(e){
		e.preventDefault();
		roundCount++;
		plyr1=0;
		plyr2=0;



		//objects in an array to pull at random
		var data=[
			{photo: 'images/prd-images/edited/dysonvacuum.jpg', desc:'Dyson DC65 Ball Multi Floor Vacuum' ,price: 399.99},
			{photo: 'images/prd-images/edited/olympuscam.jpg', desc:'Olympus PEN E-PL7 16MP Digital Camera' ,price: 599.99},
			{photo: 'images/prd-images/edited/shredder.jpg', desc:'AmazonBasics 8-Sheet High-Security Shredder' ,price: 69.99},
			{photo: 'images/prd-images/edited/shaver.jpg', desc:'Philips Norelco 6945XL Electric Razor' ,price: 39.99},
			{photo: 'images/prd-images/edited/bumblekit.jpg', desc:'Bumble and Bumble The Surf Set Travel Size' ,price: 53.99},
			{photo: 'images/prd-images/edited/brookssaddle.jpg', desc:'Brooks England B17 Special Saddle' ,price: 171},
			];
		
		//grab from data at random
	
			//postimage to showcase
			var images = data[roundCount].photo;
			// images(function(images){
				showcase.append('<img src="'+images+'">');

			//post title to produc-name
			var toPost = data[roundCount].desc;
			// var toPost(function(toPost){
				prodTitle.append('<p>'+toPost+'</p>');
			// });
			//post price to reveal
			var truPrice = data[roundCount].price;
			// var truPrice(function(truPrice){
				reveal.append('<p>$'+truPrice+'</p>');
			// });
			
			// $('#reveal').show();
	}); //end of play button

	//take and eval player inputs, assign pointo round winner


	//Next click action, remove prev product and place new one up.



	//determine winner and prompt for rematch







});//end of page