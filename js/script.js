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
	var plyr1= '';
	var plyr2='';



//objects in an array to pull at random
	var data=[
			{photo: 'http://i.imgur.com/OqZ3iJY.jpg', desc:'Dyson DC65 Ball Multi Floor Vacuum' ,price: 399.99},
			{photo: 'http://i.imgur.com/tZ9Oaxy.jpg', desc:'Olympus PEN E-PL7 16MP Digital Camera' ,price: 599.99},
			{photo: 'http://i.imgur.com/xtNdd3d.jpg', desc:'AmazonBasics 8-Sheet High-Security Shredder' ,price: 69.99},
			{photo: 'http://i.imgur.com/FkiAIW0.jpg', desc:'Philips Norelco 6945XL Electric Razor' ,price: 39.99},
			{photo: 'http://i.imgur.com/s4bN9Oy.jpg', desc:'Bumble and Bumble The Surf Set Travel Size' ,price: 53.99},
			{photo: 'http://i.imgur.com/7Qxz01m.jpg', desc:'Brooks England B17 Special Saddle' ,price: 171},
			];

	//array of random nums to check for duplicats		
	indexPulled = [];



	//grab from data at random
	var randomNum=Math.floor((Math.random()*data.length)+1);
	//check if random num has been generated
	//returns boolean
	var isUniqueIndex=function(num,array){
		for(i=0;i=array.length;i++){
			if(array[i] === num){
				return true;
			}else {
				return false;
			};
		};
	};

	// //postimage to showcase
	// var i=randomNum;

	// var images = data[i].photo;
	// var postImage = function(images){
	// 	showcase.append('<img src="'+images+'">')
	// };
	// //post title to product-name
	// var toPost = data[i].desc;
	// var postTitle = function(toPost){
	// 	prodTitle.append('<p>'+toPost+'</p>');
	// };
	// //post price to reveal
	// var truPrice = data[i].price;
	// var postPrice = function(truPrice){
	// 	reveal.append('<p>$'+truPrice+'</p>');
	// };

//game Start!
	$(playBtn).on('click',function(e){
		e.preventDefault();
		roundCount++;
		plyr1=0;
		plyr2=0;
		$('#reveal').hide();
		$(nextBtn).hide();	
	}); //end of play button

	//take and eval player inputs, assign pointo round winner
	$(plyr1Btn).on('click',function(){
		alert('Muhahahaha, its aliiiiiiiive!')
	});

	$(plyr2Btn).on('click',function(){
		alert('Muhahahaha, its aliiiiiiiive!')
	
	})


	//Next click action, remove prev product and place new one up.



	//determine winner and prompt for rematch

});//end of page

