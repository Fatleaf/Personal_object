var section01 = document.querySelector('#section01')
var section03 = document.querySelector('#section03')
var section04 = document.querySelector('#section04')
var nav = document.querySelector('nav')
var list = nav.querySelectorAll('li')
var nav_a = nav.querySelectorAll('a')

console.log(nav_a);



window.onscroll = function () {

    for (let index = 0; index < nav_a.length; index++) {
        const element = nav_a[index];
        nav_a[index].classList.remove('longer')
    }


    var scroll_now = document.documentElement.scrollTop
    // console.log(nav_a[2]);
    console.log(list[0]);

    if (scroll_now <= section02.offsetTop/2) {
        nav_a[0].classList.add('longer')
        // list[0].innerHTML = `你好`
    }
    else if (scroll_now <= (section03.offsetTop + section02.offsetTop)/2) {
        nav_a[1].classList.add('longer')
    }
    else if (scroll_now <= (section04.offsetTop + section03.offsetTop)/2) {
        nav_a[2].classList.add('longer')
        // nav_a[2].classList.add('hide')
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

    // console.log(section03.clientTop);
}

$(function(){
    checkName();
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

// var sec03_photo = $('#section03 .photo') ;//想辦法把data-aos效果用JS移除

// console.log();


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
