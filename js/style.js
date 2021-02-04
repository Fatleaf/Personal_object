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
    activeNav();
    sec3Move();

    $('#section03 .movein').hide()


    $('#nav_phone').on('mouseenter', function(){
        $('#nav_phone ul').css('display', 'block');
    });
    $('#nav_phone').on('mouseleave', function(){
        $('#nav_phone ul').css('display', 'none');
    });

    //上方NAV背景顏色
    $(window).scroll(function () {
        var scrollVal = $(this).scrollTop();
        if (scrollVal > section02.offsetTop) {
            $('#logo').css('background-color', 'rgb(227, 225, 223)');
        }else{
            $('#logo').css('background-color', 'transparent');
        }
      });

    //一進入就判斷視窗寬度
    // if (document.body.clientWidth > 768) {
    // 
    // } else {
    //
    // }
    
  
    //即時監控視窗寬度顯示NAV
    // $(window).resize(function() {

    //     reWidth = $(window).width();
    //     if (reWidth > 768) {

    //     }else{

    //     }

    // });


    //從中央氣象局接資料，天氣卡
    fetch('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-B5282D9D-8FDD-40E9-AD48-B1DF3270465D')
        .then(function(response) {
            return response.json();
        })
        .then(function(Weather) {
            // console.log(Weather);
            var ChangHua = Weather.records.location[20].weatherElement  //彰化地區
            var PoP = ChangHua[0].time[0].parameter.parameterName    //降雨機率
            var MinT = ChangHua[2].time[0].parameter.parameterName   //最低溫度
            var MaxT = ChangHua[4].time[0].parameter.parameterName   //最高溫度

            var weatherImg
            if (PoP < 1) {
                weatherImg = 'images/05-Icon/sun.svg'
            } else if (PoP < 50) {
                weatherImg = 'images/05-Icon/cloud.svg'
            } else{
                weatherImg = 'images/05-Icon/rain.svg'
            }

            $('#weatherCard').append(`
                <h5>${Weather.records.location[20].locationName}天氣</h5>
                <div class="WeatherPhoto photo_center" style="background-image: url(${weatherImg});"></div>
                <p>溫度:${MinT} ~ ${MaxT}度</p>`);

            // console.log(PoP,MinT,MaxT);
            
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


//食材點下去出現文字

function sec3Move() {

    if (document.body.clientWidth > 991) {

        $('#section03 .photo').on('click', function() {

            const movein = this.querySelector('.movein')
    
            $(movein).show().toggleClass('inActive')
    
            // console.log(movein);
        })

    }

}
