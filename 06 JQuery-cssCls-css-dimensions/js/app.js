// $(document).ready(function () {
//     $('button').click(function () {
//         // $('p').addClass("udoy xox");      // add custom css classes
//         // $('div').removeClass("dem1");      // remove custom css classes
//         $('div').toggleClass("dem1");      // remove custom css classes
//     });
// });

// $(document).ready(function () {
//     $('.btn').click(function () {      // add custom css
//         $('.pp').css("background","yellow");
//     })
// })

// $(document).ready(function () {
//     $('.btn').click(function () {      // add multiple custom css
//         $('.pp').css({
//             "background":"yellow",
//             "color":"#fff",
//             "font-size":"34px"
//         });
//     });
// });

$(document).ready(function () {
    $('.btn1').click(function () {      // add multiple custom css dimension
        // $('.dd').css({           // multiline
        //     "width":"500px",
        //     "height":"500px",
        //     "font-size":"34px",
        //     "background":"cyan"
        // });
        $('.dd').width(350).height(100);   // single line
    });
});