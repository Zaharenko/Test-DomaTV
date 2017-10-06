//Now Data
function now() {
	var data = new Date();
	document.getElementById('data') = data;
}

$(document).ready(function() {

	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form").trigger("reset");
		});
		return false;
		$('.thank-you').show();
	});
	
});
 


// Slick slider
$('.middle').slick({
        infinite: false,
        autoplay: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        nextArrow: '<span class="glyphicon hidden-md hidden-sm hidden-xs right" aria-hidden="true"></span>',
        prevArrow: '<span class="glyphicon hidden-md hidden-sm hidden-xs left" aria-hidden="true"></span>',
        responsive: [
          {
          breakpoint: 1024,
          //сообщает, при какой ширине экрана нужно включать настройки
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true
            }
          }
        ]
      });