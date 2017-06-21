$(function(){
	$('header').addClass('w');
	
	if(window.location.hash == '#e'){
		$('.s form').addClass('e');
	}else if(window.location.hash == '#eu'){
		$('.s form').addClass('e').siblings('span').text('Başka bir kullanıcı adı seçin.');
	}else if(window.location.hash == '#em'){
		$('.s form').addClass('e').siblings('span').text('E-posta adresi zaten kayıtlı.');
	}
});