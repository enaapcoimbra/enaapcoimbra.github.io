// Deslize do fundo da pagina para o inicio
$(document).ready(function(){
	$('#back-to-top').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 2000);
		return false;
	});
});

$(document).ready(function(){
	var carousel = parseInt(window.location.search.substring(2));
	$("#SlideshowOradoresP").carousel(parseInt(carousel));
	$("#SlideshowOradoresMobileP").carousel(parseInt(carousel));
	/*var carousel = window.location.search.substring(1);
	if(carousel[0] == "p")
	{
		$("#SlideshowOradoresP").carousel(parseInt(carousel[1]));
		$("#SlideshowOradoresMobileP").carousel(parseInt(carousel[1]));
	}
	else if(carousel[0] == "w")
	{
		$("#SlideshowOradoresW").carousel(parseInt(carousel[1]));
		$("#SlideshowOradoresMobileW").carousel(parseInt(carousel[1]));
	}*/
});

$(document).ready(function(){
	$(".indexOradorP")
	.css('cursor', 'pointer')
	.mouseenter(function(){
		$(this).find("p").animate(
		{
			opacity:1 
		}, 500, function(){});;
	})
	.mouseleave(function(){
		$(this).find("p").animate(
		{
			opacity:0 
		}, 500, function(){});;
	})
	.click(function(){
		var url = "Oradores?p" + $(this).attr('id');
		window.location.replace(url);
	});
	
	$(".indexOradorW")
	.css('cursor', 'pointer')
	.mouseenter(function(){
		$(this).find("w").animate(
		{
			opacity:1 
		}, 500, function(){});;
	})
	.mouseleave(function(){
		$(this).find("w").animate(
		{
			opacity:0 
		}, 500, function(){});;
	})
	.click(function(){
		var url = "Oradores?w" + $(this).attr('id');
		window.location.replace(url);
	});
});

//Mostra e esconde a imformaçao dos oradores
$(function(){	
	$(document).ready(function(){
		
		var texto1Aberto=0;
		$("#imagem1").click(function(){
			if(texto1Aberto===0){
				$("#imagem2").hide("slow");
				$("#texto1").show("slow");
				$("#imagem1").toggleClass("orador_full").animate(1000);
				$("#h1").html('<i class="fas fa-eye-slash fa-3x"></i>');
				texto1Aberto++;
				}else{
				$("#imagem2").show("slow");
				$("#texto1").hide("slow");
				$("#imagem1").removeClass("orador_full").animate(1000);
				$("#h1").html('<i class="fas fa-eye fa-3x"></i>');
				texto1Aberto--;
			}
		});
		
		var texto2Aberto=0;
		$("#imagem2").click(function(){
			if(texto2Aberto===0){
				$("#imagem1").hide("slow");
				$("#texto2").show("slow");
				$("#imagem2").toggleClass("orador_full").animate(1000);
				$("#h2").html('<i class="fas fa-eye-slash fa-3x"></i>');
				texto2Aberto++;
				}else{
				$("#imagem1").show("slow");
				$("#texto2").hide("slow");
				$("#imagem2").removeClass("orador_full").animate(1000);
				$("#h2").html('<i class="fas fa-eye fa-3x"></i>');
				texto2Aberto--;
			}
		});
	});
});

