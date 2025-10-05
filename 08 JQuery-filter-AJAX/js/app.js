// $(document).ready(function(){
//     $('div').first().css({          // first child
//         "background":"yellow",
//         "color":"red",
//     });
//     $('div').last().css({           // last child
//         "background":"yellow",
//         "color":"red",
//     });
// });

// $(document).ready(function(){
//     $('p').eq(1).css({          // with eq class (using index)
//         "background":"yellow",
//         "color":"red",
//     });
// });

// $(document).ready(function(){
//     $('p').filter(".intro").css({          // with filter class
//         "background":"yellow",
//         "color":"red",
//     });
// });

// $(document).ready(function(){
//     $('p').not(".intro").css({          // with not class
//         "background":"yellow",
//         "color":"red",
//     });
// });

$(document).ready(function () {
    $('button').click(function () {
        $('.ud').load("demo.html");
    });
});