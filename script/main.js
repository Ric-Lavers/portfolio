$(document).ready(function(){
  $('.my-button').click(function(e) {
    var str = $( this ).text();
    $( "#inner" ).text( str );
    console.log('working');

    // e.preventDefault();
    $(".focus").removeClass('focus');
    $(this).addClass('focus');

    $(".open-para").removeClass("open-para");
//a setTimeout has to be used as  delay() can only be used on animations
    setTimeout(function(){
       $('#' + str).addClass("open-para")
      //  $("#one").addClass("open-para");
     }, 100);

    //$('#one').attr('class', '')
  });
});

// $(document).ready(function(){
//   $('#btn-two').click(function(e) {
//     console.log('working');
//
//     // e.preventDefault();
//     $(".focus").removeClass('focus');
//     $(this).addClass('focus');
//
//     $(".open-para").removeClass("open-para");
// //a setTimeout has to be used as  delay() can only be used on animations
//     setTimeout(function(){
//        $("#two").addClass("open-para");
//      }, 100);
//
//     //$('#one').attr('class', '')
//   });
// });



// $(document).ready(function(){
//   $("#btn-one").click(function(e){
//     e.preventDefault();
//     $(this).addClass('focus');
//   });
// });
//
// $("#btn-one").click(function() {
//   $("open-para").toggle(100);
// });
