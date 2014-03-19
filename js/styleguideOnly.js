$(function(){
  initSyntaxHighlighter();
  setTimeout('hideSyntaxHighlighter()', 1000);
  initShowHideCode();
  initScrollToSection();
});

initSyntaxHighlighter = function() {
    SyntaxHighlighter.all();
}

hideSyntaxHighlighter = function() {
	$('.showcode').next().slideUp(100);
}

initShowHideCode = function() {
	$('.showcode a').click(function(e) {
		e.preventDefault();
		$(this).parent().next().slideToggle(200);
	});
}

initScrollToSection = function() {
	$('nav.styleguide a').click(function(e) {
		e.preventDefault();
		scrollToID = $(this).attr('href');
		if(scrollToID != ''){
			$("html, body").animate({ scrollTop: $(scrollToID).offset().top }, 500);
		}
	});
}