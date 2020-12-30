//navBig效果
var section01 = document.querySelector('#section01')
var section03 = document.querySelector('#section03')
var section04 = document.querySelector('#section04')
var nav = document.querySelector('nav')
var list = nav.querySelectorAll('li')
var nav_a = nav.querySelectorAll('a')


window.onscroll = function () {

    for (let index = 0; index < nav_a.length; index++) {
        const element = nav_a[index];
        nav_a[index].classList.remove('longer')
    }

    var scroll_now = document.documentElement.scrollTop

    if (scroll_now <= section02.offsetTop/2) {
        nav_a[0].classList.add('longer')
    }
    else if (scroll_now <= (section03.offsetTop + section02.offsetTop)/2) {
        nav_a[1].classList.add('longer')
    }
    else if (scroll_now <= (section04.offsetTop + section03.offsetTop)/2) {
        nav_a[2].classList.add('longer')
    }
    else if (scroll_now <= (section05.offsetTop + section04.offsetTop)/2) {
        nav_a[3].classList.add('longer')
    }
    else if (scroll_now <= (section06.offsetTop + section05.offsetTop)/2) {
        nav_a[4].classList.add('longer')
    }
    else {
        nav_a[5].classList.add('longer')
    }
}

$(function(){
    checkName();

    $('#nav_phone ul').hide();

    $('#nav_phone').on('mouseenter', function(){
        $('#nav_phone ul').css('display', 'block');
    });
    $('#nav_phone').on('mouseleave', function(){
        $('#nav_phone ul').css('display', 'none');
    });

    //一進入就判斷視窗寬度
    if (document.body.clientWidth > 768) {
        $('#navBig').show();
        $('#nav_phone').hide();
    } else {
        $('#nav_phone').show();
        $('#navBig').hide();
        $('#section03 .photo').attr('data-aos', 'fade-up');
        $('#section03 .photo').attr('data-aos-anchor-placement', 'top-bottom');
    }
    
  
    //即時監控視窗寬度顯示NAV
    $(window).resize(function() {

        reWidth = $(window).width();
        if (reWidth > 768) {
            $('#nav_phone').hide();
            $('#navBig').show();
        }else{
            $('#nav_phone').show();
            $('#navBig').hide();
        }
    });

});

//判斷input暱稱
function checkName(){
    $('#guess_name').on('blur' ,function(){
        if (this.value.length == '') {
            $('#nametip').text('請輸入至少一個字');
        }else{
            $('#nametip').text('');
        }
        });
};


// for (let index = 0; index < list.length; index++) {
//     const element = list[index];
//     list[index].classList.remove('hidden')
// }

// for (let index = 0; index < list.length; index++) {
//     const lists = list[index];
//     lists.onclick = function () {
//         list[index].classList.add('hidden')
//     }
// }
