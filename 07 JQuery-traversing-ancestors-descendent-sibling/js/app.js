$(document).ready(function () {           //ancestor

    // $('span').parent().css({
    //     "color":"cyan",
    //     "border":"2px solid green"
    // })

    // $('span').parents("div").css({
    //     "color":"cyan",
    //     "border":"2px solid green"
    // })

    // $('span').parentsUntil("div").css({
    //     "color":"cyan",
    //     "border":"2px solid green"
    // })
})

// $(document).ready(function(){           // descendent
//     // $('.udoy').children().css({
//     //     "color":"red",
//     //     "border":"2px solid red"
//     // })
//     $('.udoy').find("span").css({
//         "color":"red",
//         "border":"2px solid red"
//     })
// })

$(document).ready(function () {           // siblings

    // $('h2').siblings().css({       // same on span, p, h3
    //     "color":"red",
    //     "border":"2px solid red"
    // })

    // $('h2').siblings("span").css({       // same on span, p, h3
    //     "color":"red",
    //     "border":"2px solid red"
    // })

    // $('h2').next().css({       // next to h2
    //     "color":"red",
    //     "border":"2px solid red"
    // })

    // $('h2').nextAll().css({       // next all to h2
    //     "color":"red",
    //     "border":"2px solid red"
    // })

    // $('h2').nextUntil("h4").css({       // next all to h2 until h4
    //     "color":"red",
    //     "border":"2px solid red"
    // })

    $('h2').prev().css({       // previous of h2
        "color": "red",
        "border": "2px solid red"
    })

    // rest same as nextAll, nextUntil
})