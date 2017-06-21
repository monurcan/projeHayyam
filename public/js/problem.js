$(function(){
	df = '<div>';
	for(i=0; i<$('.container > ul.deta li:nth-child(5)').text(); i++){
		df += '<span></span>';
	}
	df += '</div>';
	$('.container > ul.deta li:nth-child(5)').html(df);

	$('.container .button.sa').click(function(){
		$(this).hide().siblings('span').hide().siblings('.button').css('width', '100%');
		$.get('/ajax', {'do': 'solveaftera', 'id': $(this).data('id')}, function(res){
			if(res == 'ok') $('.container > h4 i').text('(Çözülecek)');
		});
	});

	$('.container .button.se').click(function(){
		$(".answer").show();
	});
	
	$('.answer button').click(function(){
		var th = $(this),
			ans = th.siblings('input').val().trim(),
			id = th.data('id');
		if(ans != ''){
			$.get('/ajax', {'do': 'answer', 'answer': ans, 'id': $(this).data('id')}, function(res){
				th.siblings('span').css('display', 'block').text(res);
				if(res == 'TEBRİKLER, DOĞRU CEVAP!'){
					$('.container .button.sa').hide().siblings('span').hide().siblings('.button').css('width', '100%');
					th.hide().siblings('span').css('margin-top', '62px').siblings('input').hide();
					$('.container > h4 i').text('(Çözüldü)');
				}
			});
		}
	});
});