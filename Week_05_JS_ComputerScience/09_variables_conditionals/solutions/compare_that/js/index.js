jQuery(document).ready(function(){

  jQuery('#submit').click(clickedUponMe);

});


  function clickedUponMe(e) {
    e.preventDefault();
    var comparison;
    var a = Number(jQuery('#a').val());
    var b = Number(jQuery('#b').val());

    if (a < b) {
      comparison = '<';
    } else if (a > b) {
      comparison = '>';
    } else if (a === b) {
      comparison = '==';
    } else{
      comparison = 'N/A';
    }

    jQuery('#comparison').text(comparison);
  }

