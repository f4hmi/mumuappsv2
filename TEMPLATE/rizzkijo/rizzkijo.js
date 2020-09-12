$(document).ready(function(){
	$("#edomlain").click(function(){           
	    $('#edomlain').html($('#edomlain').text() == 'Sembunyikan' ? 'Lainnya' : 'Sembunyikan');
	    $('#edomlain-box > .uil').toggleClass('rotate');
	    $('.dompet-box').toggleClass('expand');
	});

	$("#backLink").click(function(){           
	    window.history.back();
	});
})
