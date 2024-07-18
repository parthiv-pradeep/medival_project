$(document).ready(function() {

    var owl = $("#owl-demo1");

    owl.owlCarousel({
         loop:false,
         margin:10,
         nav:true,
         autoplay:false,
         dots:false,
         items: 3, //10 items above 1000px browser width
          responsiveClass:true,
        responsive:{
        0:{
        items:1,
        nav:false,
        },
       600:{
       items:2,
    nav:false,
},
1000:{
    items:4,
    nav:false,
    loop:false,
}
}
})

           });

                