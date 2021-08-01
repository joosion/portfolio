$(document).ready(function () {
    var b = ("body")
    $('.container').slick();
    $('#fullpage').fullpage({
        navigation: true,
        anchors: ['page01', 'page02', 'page03', 'page04'],
        menu: '.gnb',
        afterLoad: function (origin, destination, direction) {
            var loadedSection = this;

            if($(b).hasClass("fp-viewing-page01")){
                $(".gnb p").css({
                    "opacity":"0",
                    "transition":"0.5s"
                })
            }
            if($(b).hasClass("fp-viewing-page02")){
                console.log("false2")
                $(".gnb p").css({
                    "opacity":"0.5",
                    "transition":"0.5s"
                })
            }
            if($(b).hasClass("fp-viewing-page03")){
                $(".gnb p").css({
                    "opacity":"0.5",
                    "transition":"0.5s"
                })
            }
            if($(b).hasClass("fp-viewing-page04")){
                $(".gnb p").css({
                    "opacity":"0.5",
                    "transition":"0.5s"
                })
            }
        }
    });
    $('.gnb p').mouseover(function() {
        $(this).css({
            "opacity":"1",
            "transition":"0.5s"
        });
    })
    $('.gnb p').mouseout(function() {
        $(this).css({
            "opacity":"0.5",
            "transition":"0.5s"
        });
    })

})