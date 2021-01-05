//navBig效果
var section01 = document.querySelector('#section01')
var section03 = document.querySelector('#section03')
var section04 = document.querySelector('#section04')
var nav = document.querySelector('nav')
var list = nav.querySelectorAll('li')
var nav_a = nav.querySelectorAll('a')

function activeNav (){
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
        activeNav();
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
            activeNav();
        }else{
            $('#nav_phone').show();
            $('#navBig').hide();
        }
    }); 

    //天氣卡
    fetch('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-B5282D9D-8FDD-40E9-AD48-B1DF3270465D')
        .then(function(response) {
            return response.json();
        })
        .then(function(Weather) {
            console.log(Weather);
            var ChangHua = Weather.records.location[20].weatherElement  //彰化地區
            var PoP = ChangHua[0].time[0].parameter.parameterName    //降雨機率
            var MinT = ChangHua[2].time[0].parameter.parameterName   //最低溫度
            var MaxT = ChangHua[4].time[0].parameter.parameterName   //最高溫度

            var weatherImg
            if (PoP < 1) {
                weatherImg = 'https://i.pinimg.com/originals/fb/c1/f3/fbc1f34bc9c42bc68460798eb6e7b462.jpg'
            } else if (PoP < 50) {
                weatherImg = 'https://cms-assets.tutsplus.com/uploads/users/16/posts/30551/final_image/cloud850.png'
            } else{
                weatherImg = 'https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/512x512/shadow/cloud_rain.png'
            }

            $('#weatherCard').append(`
                <h5>彰化縣天氣</h5>
                <div class="WeatherPhoto photo_center" style="background-image: url(${weatherImg});"></div>
                <p>溫度:${MinT} ~ ${MaxT}度</p>`);

            console.log(PoP,MinT,MaxT);
            //調整天氣狀況圖片CSS部分
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
