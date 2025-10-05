$(document).ready(function(){
    // $('p').click(function(){     // single click hide
    //     $(this).hide();
    // });

    // $('p').dblclick(function(){   // double click hide
    //     $(this).hide();
    // });

    // $('p').mouseenter(function(){    // mouse enter hide
    //     $(this).hide();
    // });

    // $('p').mouseenter(function(){    // alert message
    //     alert("Hello there!");
    // });

    // $('p').mouseleave(function(){    // mouse leave hide
    //     $(this).hide();
    // });

    // $('p').hover(function(){        // mouse hover (enter/leave) show
    //     alert("Hello..........");
    // },function(){
    //     alert("Good Morning.......");
    // });

    // $('input').focus(function(){              // background change on focus
    //     $(this).css("background","#ccc");
    // });

    $('p').on({
        mouseenter: function(){
            $(this).css("background","red");
        },
        mouseleave: function(){
            $(this).css("background","green");
        },
        click: function(){
            $(this).css("background","yellow");
        }
    });
});

// $(document).ready(function(){
//     $('#hide').click(function(){   // hide
//         $('p').hide();
//     });
//     $('#show').click(function(){   // show
//         $('p').show();
//     });
// });

// $(document).ready(function(){
//     $('#hide').click(function(){   // hide fast
//         $('p').hide('fast');
//     });
//     $('#show').click(function(){   // show fast
//         $('p').show('fast');
//     });
// });

// $(document).ready(function(){
//     $('#hide').click(function(){   // hide slow
//         $('p').hide('slow');
//     });
//     $('#show').click(function(){   // show slow
//         $('p').show('slow');
//     });
// });

$(document).ready(function(){
    $('#hide').click(function(){   // hide with timer
        $('p').hide(5000);
    });
    $('#show').click(function(){   // show with timer
        $('p').show(3000);
    });
});

$(document).ready(function(){
    $('button').click(function(){   // hide/show with toggle
        $('p').toggle();
    });
});

// $(document).ready(function(){
//     $('button').click(function(){   // box hide/show with toggle
//         $('.box1,.box2,.box3').toggle();
//     });
// });

// $(document).ready(function(){
//     $('button').click(function(){   // box fadeIN
//         $('.box1').fadeIn(1000);
//         $('.box2').fadeIn(3000);
//         $('.box3').fadeIn(5000);
//     });
// });


// $(document).ready(function(){
//     $('button').click(function(){   // box fadeOut
//         $('.box1').fadeOut(1000);
//         $('.box2').fadeOut(3000);
//         $('.box3').fadeOut(5000);
//     });
// });

$(document).ready(function(){
    $('button').click(function(){   // box fadeTo with opacity
        $('.box1').fadeTo('slow', 0.3);
        $('.box2').fadeTo('slow', 0.1);
        $('.box3').fadeTo('slow', 0.6);
    });
});