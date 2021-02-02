$(document).ready(function(){
	$("#edomlain").click(function(){           
	    $('#edomlain').html($('#edomlain').text() == 'Sembunyikan' ? 'Lainnya' : 'Sembunyikan');
	    $('#edomlain-box > .uil').toggleClass('rotate');
	    $('.dompet-box').toggleClass('expand');
	});

	$("#backLink").click(function(){           
	    window.history.back();
	});
});

$(window).scroll(function(){
	$('#detailProgramBar').toggleClass('shrink', $(this).scrollTop() > 56);
});

$(".nama-produk-toko").text(function(){
    return $(this).text().length > 30 ? $(this).text().substr(0, 30)+'...' : $(this).text();
});