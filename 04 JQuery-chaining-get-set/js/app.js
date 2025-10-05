// $(document).ready(function(){    // JQuery Chaining method
//     $('button').click(function(){
//         $('.udoy')
//         .css("background","cyan")
//         .slideUp(1000)
//         .slideDown(2000)
//         .hide(3000);
//     });
// });

$(document).ready(function(){    // JQuery Get method
    $('#btn1').click(function(){
        alert("Text: "+$('#lorem').text());
    });
    $('#btn2').click(function(){
        alert("Text: "+$('#lorem').html());
    });
    $('#btn3').click(function(){
        alert("Text: "+$('#inp').val());
    });
    $('#btn4').click(function(){
        alert('Href: ' + $('#at').prop('href'));
    });
});


$(document).ready(function(){    // JQuery custom Set method
    $('#btnn1').click(function(){
        $('#lorem1').text("Hey........");
    });
    $('#btnn2').click(function(){
        $('#lorem2').html("<h1>Hello.....</h1>");
    });
    $('#btnn3').click(function(){
        $('#lorem3').val("Enter your full name");
    });
    $('#btn5').click(function(){
        $('#cat').attr("href","https://www.facebook.com");
    });
});

