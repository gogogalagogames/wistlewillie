var main = new Splide('#image-carousel', {
    // cover: true,
    // height: 1000000,
    // fixedHeight: 100000,
    // heightRatio: 0.5,

    // perPage    : 2,
    // breakpoints: {
    // 	640: {
    // 		perPage: 1,
    // 	},
    // },


    type: 'fade',
    rewind: true,
    pagination: false,
    arrows: false,
    heightRatio: 9 / 16,

    drag: false,
    pauseOnHover: true,
});
// var Autoplay = thumbnails.Components.Autoplay;

var youtubeThumbnails = new Splide('.splide', {
    video: {
        loop: true,
        disableOverlayUI: false,
        hideControls: false,
        volume: 1.0,
        video: {
            host: 'https://www.youtube-nocookie.com',
        },
        //   mute         : true,
        playerOptions: {
            youtube: {
                preload: true,
            },
        },
    },
});

var thumbnails = new Splide('#thumbnail-carousel', {
    type: 'loop',
    fixedWidth: 100,
    gap: 10,
    rewind: true,
    pagination: false,
    fixedHeight: 60,
    focus: 'center',
    isNavigation: true,
    breakpoints: {
        600: {
            fixedWidth: 60,
            fixedHeight: 44,
        },
    },
    autoplay: false,
    pauseOnHover: true,


    trimSpace: false,
    updateOnMove: true, //Yes!
    //wheel: true,
    // waitForTransition: true,
    // wheelSleep: 100,
});
document.addEventListener('DOMContentLoaded', function () {
    main.sync(thumbnails);
    main.mount(window.splide.Extensions);
    thumbnails.mount(window.splide.Extensions);
    // youtubeThumbnails.mount(window.splide.Extensions);
});

// Autoplay.play();
// console.log(thumbnails.Components.Autoplay);



// thumbnails.on( 'active', function(e){
//     console.log(e);
//     var Autoplay = thumbnails.Components.Autoplay;
//     if(e.index == 0)
//     {
//         Autoplay.pause();
//         console.log("pausing");
//     }
//     else{
//         Autoplay.play();
//         console.log("resuming");
//     }
// });
// thumbnails.on( 'move', function(hi, yo, sup){
//     // hi = 5; yo = 5; sup = 5;
//     // console.log(hi, yo, sup);
//     thumbnails.go(5); //I see why there's a maximum call stack size here. yep.
//     // thumbnails.scroll(5);
// });