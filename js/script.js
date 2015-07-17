$(function(){

	//button vars
	var newGame = $('#new-game')
	var goBtn = $('#go-button');
	var prodTitle = $('#product-name');
	var showcase= $('#product-image');
	var reveal = $('#product-price');
	var roundCount = -1;

	//scoreCount
	var score1 = 0;
	var score2 = 0;

	//hide reveal box
	$('#reveal').hide();
	$('.score').hide();

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
	});

	//objects in an array to pull at random
	var data=[
		{photo: 'http://i.imgur.com/OqZ3iJY.jpg', desc:'Dyson DC65 Ball Multi Floor Vacuum' ,price: 399.99},
		{photo: 'http://i.imgur.com/tZ9Oaxy.jpg', desc:'Olympus PEN E-PL7 16MP Digital Camera' ,price: 599.99},
		{photo: 'http://i.imgur.com/xtNdd3d.jpg', desc:'AmazonBasics 8-Sheet High-Security Shredder' ,price: 69.99},
		{photo: 'http://i.imgur.com/FkiAIW0.jpg', desc:'Philips Norelco 6945XL Electric Razor' ,price: 39.99},
		{photo: 'http://i.imgur.com/s4bN9Oy.jpg', desc:'Bumble and Bumble The Surf Set Travel Size' ,price: 53.99},
		{photo: 'http://i.imgur.com/7Qxz01m.jpg', desc:'Brooks England B17 Special Saddle' ,price: 171.00},
		{photo: 'http://i.imgur.com/eAQcPdB.jpg', desc:'Breville BES860XL Espresso Machine with Grinder' ,price: 799.95 },
		{photo: 'http://i.imgur.com/kujFlVP.jpg', desc:'Ninja Mega Kitchen System' ,price: 219.95 },
		{photo: 'http://i.imgur.com/3dr2PgL.jpg', desc:'KitchenAid 11-Cup Food Processor', price: 249.95 },
		{photo: 'http://i.imgur.com/icshnPz.jpg', desc:'George Foreman GGR50B Indoor/Outdoor Grill' ,price:199.99 },
		{photo: 'http://i.imgur.com/bzjC6xN.jpg', desc:'Zojirushi NS-TSC10 5.5-Cup Micom Rice Cooker and Warmer' ,price:192.00},
		{photo: 'http://i.imgur.com/CHJSb4E.jpg', desc:'GinsuChikara 8-Piece Stainless Steel Knife Set' ,price:149.99},
		{photo: 'http://i.imgur.com/RCTRfwM.jpg', desc:'Gibson Elite Tequesta 16-Piece Square Dinnerware Set',price:79.99 },
		{photo: 'http://i.imgur.com/OgGDWQ8.jpg', desc:'Transition Scout 2Full Suspension Mountain Bike',price:3299},
		{photo: 'http://i.imgur.com/0r78Evj.jpg', desc:'Electric FW02 Nato Watch',price: 300.00},
		{photo: 'http://i.imgur.com/yLPp1we.jpg', desc:'Nixon The Time Teller Acetate Watch' ,price: 125.00},
		{photo: 'http://i.imgur.com/5aOXbLq.jpg', desc:'Chrome Barrage Backpack' ,price:199.95 },
		{photo: 'http://i.imgur.com/b4CFv2B.jpg', desc:'Red Wing 8138 6-Inch Moc Boots' ,price: 260.00},
		{photo: 'http://i.imgur.com/qwCVOaZ.jpg', desc:'Eames Lounge Chair', price: 3929.00 },
		{photo: 'http://i.imgur.com/NFamgaY.jpg', desc:'XCEL 4/3mm Infiniti X2 Hooded Wetsuit' ,price:359.95 },
		{photo: 'http://i.imgur.com/RPZnifN.jpg', desc:'Poler Napsack' ,price: 129.95},
		{photo: 'http://i.imgur.com/233RBiM.jpg', desc:'Skullcandy Air Raid Bluetooth Speakers' ,price: 149.95},
		{photo: 'http://i.imgur.com/3On70FL.jpg', desc:'Smith Forefront Bike Helmet' ,price: 219.95},
		{photo: 'http://i.imgur.com/TMaFGUH.jpg', desc:'GoPro Hero4 Black Camera' ,price: 499.95},
		{photo: 'http://i.imgur.com/fcG3ZFP.jpg', desc:'Fitbit Surge Fitness Superwatch' ,price: 249.95},
		{photo: 'http://i.imgur.com/BZEelA4.jpg', desc:'Samsung UN65JS8500 65-Inch 4K Ultra HD Smart LED TV' ,price: 3999},
		{photo: 'http://i.imgur.com/nOLOPTO.jpg', desc:'Sony 4K 3D Blu-ray Disc Player W/Dual Core Processor' ,price: 299.99},
		{photo: 'http://i.imgur.com/fWplZ1p.jpg', desc:'Bose CineMate 520 Home Theater System' ,price: 1499},
		{photo: 'http://i.imgur.com/AhVCJdP.jpg', desc:"Callaway Men's Strata Ultimate Complete Golf Set" ,price: 500.00},
		{photo: 'http://i.imgur.com/dCrk6Un.jpg', desc:'STIGA InstaPlay Table Tennis Table' ,price: 699.99},
		{photo: 'http://i.imgur.com/JsSRRS7.jpg', desc:'Precor 211 Energy Series Treadmill' ,price: 2199},
		{photo: 'http://i.imgur.com/2sCwTeI.jpg', desc:'Xbox One, 500GB Hard Drive' ,price: 399.00},
		{photo: 'http://i.imgur.com/U9CRMeS.jpg', desc:'Apple iPad Air 2 128GB/Wi-Fi' ,price: 699.00},
		{photo: 'http://i.imgur.com/p8WTLhe.jpg', desc:'Garmin Edge 1000 Color Touchscreen GPS' ,price: 599.99},
		{photo: 'http://i.imgur.com/TQPziEH.jpg', desc:'DeWalt 20-Volt Lithium-Ion Cordless BrushlessDrill' ,price: 219.00},
		{photo: 'http://i.imgur.com/80l69SX.jpg', desc:'Echo 18 in. 40.2 cc Gas Chainsaw' ,price: 299.00},
		{photo: 'http://i.imgur.com/2JCN9VD.jpg', desc:'Hampton Bay Fall River 7-Piece Patio Dining Set' ,price: 342.00},
		{photo: 'http://i.imgur.com/9gD59MS.jpg', desc:'Raleigh Record Ace Road Bike' ,price: 1900},
		{photo: 'http://i.imgur.com/dtOPODZ.jpg', desc:'BCA Tracker DTS Rescue Package 2015' ,price: 319.95},
		{photo: 'http://i.imgur.com/rY0RU0v.jpg', desc:'Sorel Joan of Arctic Wedge Mid Boots' ,price: 240.00}
	];		
	
	//array shuffle function
	function shuffle(o) {
    	for(var j, x, i =data.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    	return o;
	}

 //post product to page to showcase
	var postItAll = function(num){
		showcase.append('<img src="'+data[num].photo+'">');
		prodTitle.append('<p>'+data[num].desc+'</p>');
		reveal.append('<p>$'+data[num].price+'</p>');
	};
	//reset site for another play
	var play = function(){
		shuffle(data);
		$(prodTitle).empty();
		$(showcase).empty();
		$(reveal).empty();
		$('#reveal').hide();
		$('.score').show();
		roundCount = 0;
		score1=0;
		score1=0;
		$('#1-score').html(score1);
		$('#2-score').html(score2);
		postItAll(roundCount);
	};

	//determine who gets points
	var points = function(plyr1, plyr2,count){
		var prodPrice = (data[count].price);
		if (plyr1>prodPrice && plyr2>prodPrice){
			return;
		}else if(plyr1>prodPrice && plyr2<prodPrice){
			return score2++;
		} else if(plyr1<prodPrice && plyr2>prodPrice){
			return score1++;
		}else if(plyr1>plyr2){
			return score1++;
		}else if(plyr2>plyr1){
			return score2++;
		} else{
			return;
		}
	};

	//determine winner and post 
	var winner = function(score1,score2){
		if(score1 === 10){
				swal({   title: 'Player 1 is the winner!',   
				text: "Thank you for playing and don't forget to spay and neuter your pets!",   
				imageUrl: "http://i.imgur.com/f4FjyRR.jpg",
				imageSize: "200x200"});
		} else if (score2 === 10){
				swal({   title: 'Player 2 is the winner!',   
				text: "Thank you for playing and don't forget to spay and neuter your pets!",   
				imageUrl: "http://i.imgur.com/f4FjyRR.jpg",
				imageSize: "200x200"});
		} else{
			return;
		}	
	};

	//rflash through colors in reveal
	var flash = function(duration){
		$('#reveal').animate({backgroundColor:'#FFF900', color:'#45C74E', borderColor: '#F35900' },100);
		$('#reveal').animate({backgroundColor:'#F35900', color:'#FFF900', borderColor: '#45C74E'},100);
		$('#reveal').animate({backgroundColor:'#45C74E', color:'#F35900', borderColor: '#FFF900'},100);
	};

//game Start!
	$(newGame).on('click',function(e){
		e.preventDefault();
		play();
		
	}); 


	
// 	//take and eval player inputs, assign point to round winner
	$('#swap').on('click', '#go-button', function(e){
		e.preventDefault();
		var plyr1Input = $('#plyr1Input').val();
		var plyr2Input = $('#plyr2Input').val();
		if(plyr1Input ==='' || plyr2Input === ''){
				swal("Whoa there cowboy!","We need a price from both contestants!");
		} else {
		points(plyr1Input,plyr2Input,roundCount);
			$('#1-score').html(score1);
			$('#2-score').html(score2);
			$('#swap').empty();
			$('#swap').append('<button id="next-button" class="btn btn-warning" type="button">Next!</button>');
			$('#reveal').show();
			setInterval(flash,100);
			roundCount++;
		//Next click action, remove prev product and place new one up.
			$('#swap').on('click','#next-button',function(e){
				e.preventDefault();
				e.stopPropagation();
				winner(score1,score2);
				$(prodTitle).empty();
				$(showcase).empty();
				$(reveal).empty();
				postItAll(roundCount);
				$('#plyr1Input').val('').focus();
				$('#plyr2Input').val('');
				$('#swap').empty();
				$('#swap').append('<button id="go-button" class="btn btn-danger" type="button">GO!</button>');
				$('#reveal').hide();
				});
		}
	});//end of go! click event
});//end of page