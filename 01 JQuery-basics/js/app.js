// $(document).ready(function(){
//     // $('h2').hide();       perform action with Tag

//     // $('.me').hide();      perform action with class

//     // $('#me').hide();      perform action with id
// }); 


$(document).ready(function () {
    // $('button').click(function(){     // perform action with Tag
    //     $('p').hide();
    // });

    // $('button').click(function(){        // perform action with class
    //     $('.lorem').hide();
    // });

    // $('button').click(function(){     // perform action with id
    //     $('#lorem').hide();
    // });

    // $('button').click(function(){     // perform action with * (all hide including button)
    //     $('*').hide();
    // });

    // $('button').click(function(){     // the button will be hidden
    //     $(this).hide();
    // });

    // $('button').click(function () {     // button will hide
    //     $(':button').hide();
    // });

    // $('button').click(function () {     // anchor tag will hide
    //     $('button').hide();
    // });

    // $('button').click(function(){     // perform action with id
    //     $('.name').hide();
    // });

    // $('button').click(function(){     // only first p will hide
    //     $('p:first').hide();
    // });

    // $('button').click(function(){     // only first child of all ul li will hide
    //     $('ul li:first-child').hide();
    // });

    // $('button').click(function () {     // only the selected child of all ul li will hide
    //     $('ul li:nth-child(2)').hide();
    // });

    // $('button').click(function () {     // anchor tag will hide
    //     $('a').hide();
    // });

    // $('button').click(function () {     // anchor tag will hide
    //     $('[href]').hide();
    // });

    // $('button').click(function () {     // only the targeted one will hide
    //     $('a[target="_blank"]').hide();
    // });

    $('p').click(function () {     // only the selected child of all ul li will hide
        $('ul li:nth-child(2)').hide();
    });
});
