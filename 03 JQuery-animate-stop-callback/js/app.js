// $(document).ready(function () {     // div animation
//     $('button').click(function () {
//         $('div').animate({ left: '200px' });
//     });
// });

// $(document).ready(function () {     // div animation with multiple classes
//     $('button').click(function () {
//         $('div').animate({ 
//             left: '200px',
//             height: '500px',
//             width: '500px',
//         });
//     });
// });

// $(document).ready(function () {     // div animation with multiple (plus with previous values) classes
//     $('button').click(function () {
//         $('div').animate({ 
//             left: '200px',
//             height: '+=50px', // also -=50px
//             width: '+=50px', // also -=50px
//         });
//     });
// });

// $(document).ready(function () {     // div animation toggle with multiple (plus with previous values) classes
//     $('button').click(function () {
//         $('div').animate({ 
//             left: '200px',
//             height: 'toggle', // also -=50px
//             width: '+=50px', // also -=50px
//         });
//     });
// });

// $(document).ready(function () {     // div animation with custom variable
//     $('button').click(function () {
//         var udoy = $('div');
//         udoy.animate({
//             height: '400px',
//             opacity: '0.4',
//         },'slow');
//         udoy.animate({
//             width: '400px',
//             opacity: '0.8',
//         },'slow');
//         udoy.animate({
//             height: '100px',
//             opacity: '0.3',
//         },'slow');
//         udoy.animate({
//             width: '100px',
//             opacity: '1',
//         },'slow');
//     });
// });

// $(document).ready(function () {     // div animation
//     $('button').click(function () {
//         var udoy = $('div');

//         udoy.animate({
//             left: '300px',
//             fontSize: '50px',
//             width: '400px',
//             height: '400px',
//         },'slow');
//     });
// });

$(document).ready(function(){
    $('.udoy').click(function(){
        $('.lorem').slideDown(5000);
    });
    $('button').click(function(){
        $('.lorem').stop();
    });
});

// $(document).ready(function(){        // with callback param (first hide then msg)
//     $('.btnn').click(function(){
//         $('.gg').hide('slow', function(){
//             alert("Hey stop....");
//         });
//     });
// });

$(document).ready(function(){     // without callback param (first msg then hide)
    $('.btnn').click(function(){
        $('.gg').hide();
        alert("BOOYAH");
    });
});



