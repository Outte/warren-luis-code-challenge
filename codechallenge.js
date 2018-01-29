$(document).ready(function() {
	$(".box").mouseenter(function() {
		$(".box").removeClass('enlarge highlight');
		$("#"+this.id).addClass('enlarge highlight');
	});
});