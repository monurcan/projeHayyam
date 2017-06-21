$(function(){
	var e, r, df, tg = 0;
	$('html').on('click', function(e){
		if(!$(e.target).is('header .menu li') && !$(e.target).is('header .menu li *')){
			$('header .menu li.drop .drop').hide();
		}else{
			$('header .menu li.drop .drop').not($(e.target).children('.drop').toggle()).hide();
		}
	});
	$('header input').on('keydown', function(evt){
		if($(this).val().length > 27 && $(this).val().length*7 < '360'){
			$(this).stop().animate({width: $(this).val().length*7+'px'}, 200);
		}else if($(this).val().length*7 >= '360'){
			return;
		}else {
			$(this).stop().animate({width: '187px'}, 200);
		}
		e = $(this).val().trim();
		if((evt.keyCode == 32 || evt.keyCode == 13) && e.match(/#([a-zA-Z\ç\Ç\ö\Ö\ş\Ş\ı\İ\ğ\Ğ\ü\Ü\_]+)/g)){
			r = e.match(/#([a-zA-Z\ç\Ç\ö\Ö\ş\Ş\ı\İ\ğ\Ğ\ü\Ü\_]+)/g);
			$(this).val('['+r[0].replace('#','')+'] ' + e.replace(/#([a-zA-Z\ç\Ç\ö\Ö\ş\Ş\ı\İ\ğ\Ğ\ü\Ü\_]+)/g, ''));
			return false;
		}
	});

	$('table tr td:nth-child(5)').not(':eq(0)').each(function(){
		df = '<div>';
		for(i=0; i<$(this).text(); i++){
			df += '<span></span>';
		}
		df += '</div>';
		$(this).html(df);
	});
});