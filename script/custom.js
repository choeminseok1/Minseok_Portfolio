$(function(){

     // 날짜
    let nowDate = new Date()
    let nowDate2 = nowDate.getDate()
    let nowDay = nowDate.toString().substring(0, 3)
    let nowDateEng = nowDate.toLocaleString("en-US", { month: "short" });
    let nowHours = nowDate.getHours()
    let nowMin = String(nowDate.getMinutes()).padStart(2, "0")
    let nowapm = nowHours < 12 ? 'am' : 'pm'
        $('.header_time_day').text(nowDay)
        $('.header_time_month').text(nowDateEng)
        $('.header_time_date').text(nowDate2)
        $('.header_time_hr').text(nowHours)
        $('.header_time_min').text(nowMin)
        $('.ampm').text(nowapm)
        
    // 날짜 인터벌
    setInterval(() => {
    let nowDate = new Date()
    let nowDate2 = nowDate.getDate()
    let nowDay = nowDate.toString().substring(0, 3)
    let nowDateEng = nowDate.toLocaleString("en-US", { month: "short" });
    let nowHours = nowDate.getHours()
    let nowMin = String(nowDate.getMinutes()).padStart(2, "0")
    let nowapm = nowHours < 12 ? 'am' : 'pm'
        $('.header_time_day').text(nowDay)
        $('.header_time_month').text(nowDateEng)
        $('.header_time_date').text(nowDate2)
        $('.header_time_hr').text(nowHours)
        $('.header_time_min').text(nowMin)
        $('.ampm').text(nowapm)
    }, 1000);

    let today = new Date();   
    let hours = ('0' + today.getHours()).slice(-2); 
    let minutes = ('0' + today.getMinutes()).slice(-2);
    let timeString = hours + ':' + minutes;
    console.log(timeString);
    $(".left_user_time").text(timeString);

    $(document).on('keydown','.right_input',function(){
        let name = $('.right_input').val()
        let box = `
                <div>제 이름은 ${name}입니다</div>
            `
        let box1 = `
                <div class='name_tag'>${name} 님 환영합니다! 
                저의 포트폴리오를 소개해 드리겠습니다!</div>
        `
        if($('.right_input').val() !== ''){
            if(window.event.keyCode === 13){
                $('.right_text1_mid').append(box)
                $('.right_input').val('')
                $('.right_text_bottom').append(box1)
                $('.right_input').val('')
                $('.right_input').attr('readonly','true')
        
                $('.right_text1_top').css('opacity','1')
                setTimeout(() => {
                    $('.right_text1_mid').css('opacity','1')
                },1000);
                setTimeout(() => {
                    $('.left_user_color').css('background-color','green')
                },1000);
                setTimeout(() => {
                    $('.left_user_text1').text('입력중..')
                },1000);
                setTimeout(() => {
                    $('.right_input').attr('placeholder','Minseok 님이 입력하고 있습니다.')
                },1000);
                setTimeout(() => {
                    $('.left_user_text1').text('')
                },3000);
                setTimeout(() => {
                    $('.right_input').attr('placeholder','이름을 입력해주세요.')
                },3000);
                setTimeout(() => {
                    $('.left_user_text1').text($('.name_tag').text())
                },3000);
                setTimeout(() => {
                    $('.left_user_color').css('background-color','dodgerblue')
                },3000);
                setTimeout(() => {
                    $('.right_text_bottom').css('opacity','1')
                },3000);
                setTimeout(() => {
                    $('.message').fadeOut()
                    $('.my_photo').css('display','block')
                    $('.my_picture').css('display','block')
                }, 6000);
                setTimeout(() => {
                    $('body').css('overflow','auto')
                }, 6000);
            }
        }
    })
    $(document).on('click','.my_photo_btn1',function(){
        $('.my_photo1').css('display','none')
    });
    $(document).on('click','.my_photo_btn2',function(){
        $('.my_photo2').css('display','none')
    });
    $(document).on('click','.my_photo_btn3',function(){
        $('.my_photo3').css('display','none')
    });

    $(document).on('click','.icon img' ,function(){
        $(this).addClass('on')
        setTimeout(() => {
            $(this).removeClass('on')
        }, 1000);
    })
    
    $(document).on('click','.hide_nav_btn',function(){
        $('.menu_bar').css('display','block')
    })
    $(document).on('click','.menu_bar_close',function(){
        $('.menu_bar').css('display','none')
    })

    $(window).scroll(function(){
        let windowTop = $(window).scrollTop()
        let aboutTop = $('.about_right').offset().top - 300
        let portfolioTop_samsung = $('.samsung_page').offset().top - 400
        let portfolioTop_hyundai = $('.hyundai_page').offset().top - 400
        let portfolioTop_drawing = $('.drawing_page').offset().top - 400
        let portfolioTop_apple = $('.apple_page').offset().top - 400

        if (windowTop >= aboutTop) {
            $('.about_right_icon').addClass('on')
        } else if (windowTop <= aboutTop) {
            $('.about_right_icon').removeClass('on')
        }

        if (windowTop >= portfolioTop_samsung && windowTop <=  portfolioTop_hyundai) {
            $('.samsung').addClass('on')
            $('.hyundai').removeClass('on')
            $('.drawing').removeClass('on')
            $('.apple').removeClass('on')
        }else if(windowTop >= portfolioTop_hyundai && windowTop <=  portfolioTop_drawing) {
            $('.samsung').removeClass('on')
            $('.hyundai').addClass('on')
            $('.drawing').removeClass('on')
            $('.apple').removeClass('on')
        }else if(windowTop >= portfolioTop_drawing && windowTop <=  portfolioTop_apple) {
            $('.samsung').removeClass('on')
            $('.hyundai').removeClass('on')
            $('.drawing').addClass('on')
            $('.apple').removeClass('on')
        }else if(windowTop >= portfolioTop_apple) {
            $('.samsung').removeClass('on')
            $('.hyundai').removeClass('on')
            $('.drawing').removeClass('on')
            $('.apple').addClass('on')
        }
    })

    $(document).on('click','.faq_q',function(){
        $(this).toggleClass('on')
        $(this).siblings('.faq_a').slideToggle()
    });

// email_part

    emailjs.init("Ti8fmsRtP4QZ4Cwfn");
    let flag = true

    $(document).on('click', '.email_btn', function () {

        let template = {
            to_name: $('.name').val(),
            from_name: $('.title').val(),
            message: $('.e-mail').val()
        }
        if ($('.e-mail').val() !== '') {
            if (flag === true) {
            flag = false
            emailjs.send('service_8ehbe36', 'template_fmrvc9v', template)
                .then((result) => {
                console.log(result.text);
                alert('메일을 성공적으로 전송했습니다.')
                $('.e-mail').val('')
                flag = true
            }, (error) => {
                console.log(error.text);
                alert('메일 전송실패')

                flag = true
            });
        } 
        }else {
            alert('값을 입력해주세요.')
        }
        $('.email_btn').addClass('on')
        setTimeout(() => {
            $(this).removeClass('on')
        }, 1000);
    })

// 메인 페이지 앵커
    $(document).on('click','.picture_text3',function(){
        let menu_zero = $('.contact').offset().top - 50
        $('html').animate({scrollTop : menu_zero })
    })

// 일반 메뉴바_파트
    $(document).on('click','.navi_link_about',function(){
        let menuA = $('.container_about ').offset().top - 50
        $('html').animate({scrollTop : menuA })
    })
    $(document).on('click','.navi_link_port',function(){
        let menuB = $('.container_portfolio').offset().top - 10
        $('html').animate({scrollTop : menuB })
    })
    $(document).on('click','.navi_link_faq',function(){
        let menuC = $('.faq').offset().top - 100
        $('html').animate({scrollTop : menuC })
    })
    $(document).on('click','.navi_link_contact',function(){
        let menuD = $('.contact').offset().top - 0
        $('html').animate({scrollTop : menuD })
    })

// 반응형 메뉴바_파트
    $(document).on('click','.menu_bar_about',function(){
        let menuA = $('.container_about ').offset().top - 50
        $('html').animate({scrollTop : menuA })
        $('.menu_bar').css('display','none')
    })
    $(document).on('click','.menu_bar_port',function(){
        let menuB = $('.container_portfolio').offset().top - 10
        $('html').animate({scrollTop : menuB })
        $('.menu_bar').css('display','none')
    })
    $(document).on('click','.menu_bar_fqa',function(){
        let menuC = $('.faq').offset().top - 100
        $('html').animate({scrollTop : menuC })
        $('.menu_bar').css('display','none')
    })
    $(document).on('click','.menu_bar_contact',function(){
        let menuD = $('.contact').offset().top - 0
        $('html').animate({scrollTop : menuD })
        $('.menu_bar').css('display','none')
    })

// 컨텍트 메뉴바 엥커
    $(document).on('click','.contact_anchor_about',function(){
        let menuA = $('.container_about ').offset().top - 50
        $('html').animate({scrollTop : menuA })
    })
    $(document).on('click','.contact_anchor_port',function(){
        let menuB = $('.container_portfolio').offset().top - 10
        $('html').animate({scrollTop : menuB })
    })
    $(document).on('click','.contact_anchor_faq',function(){
        let menuC = $('.faq').offset().top - 100
        $('html').animate({scrollTop : menuC })
    })
});

