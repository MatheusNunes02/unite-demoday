$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
    });
});

// $(document).ready(function () {
//     $('#sidebar ul > li').on('click', function () {
//         $('#sidebar ul > li.active').toggleClass('active');
//         $(this).toggleClass('active');
//     });
// });

$(document).ready(function(){
    $('ul li').click(function(){
      $('li').removeClass("active");
      $(this).addClass("active");
    });
  });