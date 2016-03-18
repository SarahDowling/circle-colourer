var $input = $('#colour-input');

$('form').on('change', function (e) {
  var $ball = $('.ball');


  $ball.css('background-color', $input.val());
});
