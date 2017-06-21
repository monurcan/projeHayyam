$(function(){
	$('.s input[type=text]')[0].setSelectionRange($('.s input[type=text]').val().length, $('.s input[type=text]').val().length);
	
	var e, r, pg = '', gp = document.URL.match(/pg=([0-9]+)/);
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

	for(i=1;i<=$('ul.page').text(); i++){
		pg += '<li';
		if((gp != null && gp[1] == i) || (gp == null && i == 1)){
			pg += ' class="active"';
		}
		pg += '><a href="'+window.location.href.replace(/pg=\d+|\&pg=\d+/g, '')+'&pg='+i+'">'+i+'</a></li>';
	}

	$('ul.page').html(pg);

	$('tr:eq(0) td:eq(0) a:eq(0)').attr('href', window.location.href.replace(/pg=\d+|\&pg=\d+|sort=\w+|\&sort=\w+/g, '')+'&sort=id');
	$('tr:eq(0) td:eq(0) a:eq(1)').attr('href', window.location.href.replace(/pg=\d+|\&pg=\d+|sort=\w+|\&sort=\w+/g, '')+'&sort=idx');
	$('tr:eq(0) td:eq(3) a:eq(0)').attr('href', window.location.href.replace(/pg=\d+|\&pg=\d+|sort=\w+|\&sort=\w+/g, '')+'&sort=solved');
	$('tr:eq(0) td:eq(3) a:eq(1)').attr('href', window.location.href.replace(/pg=\d+|\&pg=\d+|sort=\w+|\&sort=\w+/g, '')+'&sort=solvedx');
	$('tr:eq(0) td:eq(4) a:eq(0)').attr('href', window.location.href.replace(/pg=\d+|\&pg=\d+|sort=\w+|\&sort=\w+/g, '')+'&sort=diff');
	$('tr:eq(0) td:eq(4) a:eq(1)').attr('href', window.location.href.replace(/pg=\d+|\&pg=\d+|sort=\w+|\&sort=\w+/g, '')+'&sort=diffx');
});