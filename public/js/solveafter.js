$(function(){
	var th;
	$('table td:nth-child(1)').click(function(){
		th = $(this);
		$.get('/ajax', {'do': 'solveafterd', 'id': th.data('id')}, function(res){
			if(res == 'ok') th.parent('tr').hide();
		});
	});
});