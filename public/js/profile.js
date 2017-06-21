function hash(){
	if(window.location.hash == '#friends'){
		$('.fr ul li.sm').hide().parent().parent().parent('.fr').animate({height: $('.fr ul').height()+13}, 232);
		$('.slv').css({'width': '698px', 'float': 'right', 'margin-bottom': '22px'});
		$('table tr td:nth-child(3)').css('max-width', '210px');
	}
}

$(function(){
	$(window).on('hashchange',hash);

	var df = '';
	for(i=0; i<Math.round(($('.container > ul.deta li i').text().length+1)/16)/10; i++){
		df += '<span></span>';
	}
	$('.container > ul.deta li:nth-child(5)').html('<div>'+df+'</div>');
	$('.container > ul.deta li:nth-child(4)').html(df);
	$('.container > ul.deta li i').text(Math.round(($('.container > ul.deta li i').text().length+1)/16));

	$('.ab span').on('click', function(){
		$(this).hide().parent('.p').parent('.ab').animate({height: $(this).parent('.p').height()+13}, 233).css('margin-bottom', '20px');
		$('.slv').css({'width': '698px', 'float': 'right'});
		if($('.fr').height() < 160){
			$('div[style="clear:both"]:eq(0)').hide();
		}
		$('table tr td:nth-child(3)').css('max-width', '210px');
	});

	$('.he .button').click(function(){
		var th = $(this);
		th.html('Arkadaşsınız');
		$.get('/ajax', {'do': 'addfriend', 'id': th.data('id')});
	});
});

$(window).load(function(){
	hash();
});