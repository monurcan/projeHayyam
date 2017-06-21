$(function(){
	$('.s input[type=text]')[0].setSelectionRange($('.s input[type=text]').val().length, $('.s input[type=text]').val().length);
	
	$('header').addClass('w');

	$(window).on('scroll', function(){
		if($(window).scrollTop() > 370){
			$('header').removeClass('w');
		}else {
			$('header').addClass('w');
		}
	});

	var e, r, pg = '<li class="active">1</li>';
	$('.s input[type=text]').on('keydown', function(evt){
		e = $(this).val().trim();
		if(evt.keyCode == 32 && e.match(/#([a-zA-Z\ç\Ç\ö\Ö\ş\Ş\ı\İ\ğ\Ğ\ü\Ü\_]+)/g)){
			r = e.match(/#([a-zA-Z\ç\Ç\ö\Ö\ş\Ş\ı\İ\ğ\Ğ\ü\Ü\_]+)/g);
			$(this).val('['+r[0].replace('#','')+'] ' + e.replace(/#([a-zA-Z\ç\Ç\ö\Ö\ş\Ş\ı\İ\ğ\Ğ\ü\Ü\_]+)/g, ''));
			return false;
		}
	});

	$('.s input[type=submit]').click(function(){
		r = $('.s input[type=text]').val().match(/#([a-zA-Z\ç\Ç\ö\Ö\ş\Ş\ı\İ\ğ\Ğ\ü\Ü\_]+)/g);
		$('.s input[type=text]').val('['+r[0].replace('#','')+'] ' + $('.s input[type=text]').val().replace(/#([a-zA-Z\ç\Ç\ö\Ö\ş\Ş\ı\İ\ğ\Ğ\ü\Ü\_]+)/g, ''));
	});

	for(i=2;i<=$('ul.page').text(); i++){
		pg += '<li><a href="/search?src=+&pg='+i+'">'+i+'</a></li>';
	}

	$('ul.page').html(pg);
});