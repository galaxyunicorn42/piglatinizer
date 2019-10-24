$( "document" ).ready(function() {

$('#button').click(function() {
    console.log('click');
  var value = $('#my-input').val();
  $('#my-message').text(value);
  
});
});