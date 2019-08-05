$(document).ready(function() {
    $('.swiper-wrapper').on('swiperight', function() {
        $(this).css('display', 'none');
        console.log($('.swiper-wrapper').css('transform'));
        let slideWrapperNum;
        if ($('.swiper-wrapper').css('transform') == 'matrix(1, 0, 0, 1, -375, 0)') {
            slideWrapperNum = 1;
        } else if ($('.swiper-wrapper').css('transform') == 'matrix(1, 0, 0, 1, -750, 0)') {
            slideWrapperNum = 2;
        } else if ($('.swiper-wrapper').css('transform') == 'matrix(1, 0, 0, 1, -1125, 0)') {
            slideWrapperNum = 3;
        } else if ($('.swiper-wrapper').css('transform') == 'matrix(1, 0, 0, 1, -1500, 0)') {
            slideWrapperNum = 4;
        }
        let slideArticleArr = document.getElementsByClassName('article-nav-point');
        for (let i = 0; i < slideArticleArr.length; i++) {
            slideArticleArr[i].style.background = 'transparent';
        }
        slideArticleArr[slideWrapperNum - 1].style.background = 'red';
    });
    $('.test').on('swiperight', function() {
        $(this).css('background-color', 'green');
    })

    $('.swiper-container').on('swipeleft', function() {
        console.log($('.swiper-wrapper').css('transform'));
        let slideWrapperNum;
        if ($('.swiper-wrapper').css('transform') == 'matrix(1, 0, 0, 1, 0, 0)') {
            slideWrapperNum = 2;
        } else if ($('.swiper-wrapper').css('transform') == 'matrix(1, 0, 0, 1, -375, 0)') {
            slideWrapperNum = 3;
        } else if ($('.swiper-wrapper').css('transform') == 'matrix(1, 0, 0, 1, -750, 0)') {
            slideWrapperNum = 4;
        } else if ($('.swiper-wrapper').css('transform') == 'matrix(1, 0, 0, 1, -1125, 0)') {
            slideWrapperNum = 5;
        }
        let slideArticleArr = document.getElementsByClassName('article-nav-point');
        for (let i = 0; i < slideArticleArr.length; i++) {
            slideArticleArr[i].style.background = 'transparent';
        }
        slideArticleArr[slideWrapperNum - 1].style.background = 'red';
    });
   
    const w = $(window).width();
    if (w < 768) {
        if (!$('.articles--section').hasClass('swiper-container')) {
            $('.articles--section').addClass('swiper-container');
        };
        if (!$('.ArticleItems').hasClass('swiper-slide')) {
            $('.ArticleItems').addClass('swiper-slide');
        }
        if (!$('.articles--section').children().hasClass('swiper-wrapper')) {
            $('.articles--section').children().wrapAll("<div class='swiper-wrapper'></div>");
        }
        if ($('.swiper-wrapper').css('transform') == 'translate3d(-375px, 0px, 0px)') {
            console.log('hi')
        }
    }
    if (w > 768) {
        $('.articles--section').removeClass('swiper-container');
        $('.ArticleItems').removeClass('swiper-slide');
        $('.swiper-wrapper').replaceWith(function () {
            return $('.ArticleItems', this);
        });
    }

    $(document).scroll(function() {
        if (window.scrollY > 50) {
            $(".Navigation").css({'background-color': 'rgba(128, 128, 128, 0.6)', 'box-shadow': '0px 1px 7px 0px rgba(0,0,0,0.63)'});
            $(".navbar-sign-in-button").addClass('change-to-button');
        } else {
            $(".Navigation").css({'background-color': '', 'box-shadow': ''});
            $(".navbar-sign-in-button").removeClass('change-to-button');

        }
    });
    $(".left-banner").click(function() {
        $(this).toggleClass('left-changed');
        if ($(".right-banner").hasClass('right-changed')) {
            $(".right-banner").removeClass('right-changed');
        }
        $(".introBtnLeft").toggleClass('active');
        if ($(".introBtnRight").hasClass('active')) {
            $(".introBtnRight").removeClass('active')
        };
    });
    
    $(".right-banner").click(function() {
        if ($(this).height() <= 500) {
            $(this).toggleClass('right-changed');
        };
        // $('.MainContext').toggleClass('marginTop');
        if ($(".left-banner").hasClass('left-changed')) {
            $(".left-banner").removeClass('left-changed');
        };
        $(".introBtnRight").toggleClass('active');
        if ($(".introBtnLeft").hasClass('active')) {
            $(".introBtnLeft").removeClass('active')
        };
    });
    $(".DrawerToggle").click(function() {
        $(".sideDrawer").addClass('sideDrawerOpen');
        $(".sideDrawer").removeClass('sideDrawerClose');
        $(".dark-layer").toggle();
        $('.close-btn div:first-child').css({'transform': '', 'transform': ''});
        $('.close-btn div:nth-child(2)').css('opacity', 0);
        $('.close-btn div:last-child').css({'transform': '', 'transform': ''});
    });
    $(".sideDrawer a").click(function() {
        $(".dark-layer").toggle();
        $(".sideDrawer").removeClass('sideDrawerOpen');
    })
    $(".dark-layer").click(function() {
        $(".sideDrawer").addClass('sideDrawerClose');
        $(".sideDrawer").removeClass('sideDrawerOpen');
        $(this).toggle();
    });
    $(".close-btn").click(function() {
        $('.close-btn div:first-child').css({'transform': 'rotate(0deg)', 'transform': 'translateY(-8px)'});
        $('.close-btn div:nth-child(2)').css('opacity', 1);
        $('.close-btn div:last-child').css({'transform': 'rotate(0deg)', 'transform': 'translateY(8px)'});
        $(".sideDrawer").addClass('sideDrawerClose');
        $(".sideDrawer").removeClass('sideDrawerOpen');
        $(".dark-layer").toggle();
    });
    // 
    $(".article-nav-point").click(function() {
        const id = Number($(this).attr("id"));
        const slideNode = document.getElementsByClassName('ArticleItems');
        const slideArray = Array.prototype.slice.call(slideNode);
        slideArray.map((el, index) => {
            if (index === id) {
                slideNode[index].style.display = 'flex';
            } else {
                slideNode[index].style.display = 'none';
            }
        });
        $(".article-nav-point").css('background-color', 'white');
        $(this).css('background-color', 'red');
    });
    window.addEventListener('resize', function(){
        const w = $(window).width();
        if (w > 768) {
            console.log('hello')
            $('.articles--section').removeClass('swiper-container');
            $('.ArticleItems').removeClass('swiper-slide');
            $('.swiper-wrapper').replaceWith(function () {
                return $('.ArticleItems', this);
            });
        
        } else if (w < 768) {
            if (!$('.articles--section').hasClass('swiper-container')) {
                $('.articles--section').addClass('swiper-container');
            };
            if (!$('.ArticleItems').hasClass('swiper-slide')) {
                $('.ArticleItems').addClass('swiper-slide');
            }
            if (!$('.articles--section').children().hasClass('swiper-wrapper')) {
                $('.articles--section').children().wrapAll("<div class='swiper-wrapper'></div>");
            }
    };
    
    });
    
    $(".view-more").click(function() {
        const jobMarkUp = `
            <div class="JobItems">
                <div class="item--cover">
                    <div class="item--tag">Business</div>
                </div>
                <button class="btn--third apply-job">Apply now</button>
                <div class="item--description">
                    <div class="row justify-content-between">
                        <div class="item item--description__cpn">
                            <i class="icon ion-ios-briefcase"></i>
                            <p>Solita</p>
                        </div>
                        <div class="item item--description__place">
                            <i class="icon ion-md-pin"></i>
                            <p>Gothenburg</p> 
                        </div>
                    </div>
                    <div class="row justify-content-between">
                        <div class="item item--description__position">
                            <i class="icon ion-ios-person"></i>
                            <p>Fulltime</p> 
                        </div>
                        <div class="item item--description__position">
                            <i class="icon ion-logo-usd"></i>
                            <p>Paid</p> 
                        </div>
                    </div>
                </div>
            </div>
        `
        console.log("hello view more");
        $(".JobBoard").append(jobMarkUp);
        $(this).css("display", "none");
    });
    // Apply now button desktop
    $(".apply-now-button-notLogin").click(function() {
        const scroll = $(window).scrollTop();
        $(".apply-modal").show();
        $('.apply-box-through-company').css({'display':'flex'});
        $('.apply-box').css({'display':'none'});
        $(".job-application-form-desktop").css({'top': '50%'});
        
        // $('body').css({'position': 'fixed', 'top': `-${scroll}px`});
        // $(".apply-modal, .close-apply-modal, .back").click(function() {
        //     console.log('hello')
        //     $(".apply-modal").css('display', 'none');
        //     $(".job-application-form").slideUp('fast');
        //     $('body').css({'position': ''}); 
        //     $('html').scrollTop(scroll);    
        // });
    });
    $(".apply-now-button-login").click(function() {
        const scroll = $(window).scrollTop();
        $(".apply-modal").show();
        $('.apply-box-through-company').css({'display':'none'});
        $('.apply-box').css({'display':'flex'});
        $(".job-application-form-desktop").css({'top': '50%'});
        
        // $('body').css({'position': 'fixed', 'top': `-${scroll}px`});
        // $(".apply-modal, .close-apply-modal, .back").click(function() {
        //     console.log('hello')
        //     $(".apply-modal").css('display', 'none');
        //     $(".job-application-form").slideUp('fast');
        //     $('body').css({'position': ''}); 
        //     $('html').scrollTop(scroll);    
        // });
    });
    // close register
    $(".close-tab").click(function(){
        $(".apply-modal").hide();
        $(".job-application-form-desktop").css({'top': '-1000px'});
    })
    // close congras card
    $(".close-tab").click(function(){
        $(".apply-modal").hide();
        $('.success-apply-box').css({'top': '-1000px'});
    })
    

    $(".JobBoard").on("click", ".apply-job", function() {
        const scroll = $(window).scrollTop();
        $(".apply-modal").show();
        setTimeout(() => {
            const applyForm = $(".job-application-form");
            applyForm.slideDown('medium');
        }, 100);
        $('body').css({'position': 'fixed', 'top': `-${scroll}px`});
        $(".apply-modal, .close-apply-modal, .back").click(function() {
            console.log('hello')
            $(".apply-modal").css('display', 'none');
            $(".job-application-form").slideUp('fast');
            $('body').css({'position': ''}); 
            $('html').scrollTop(scroll);    
        });
    });
    // view more desktop button
    var job_board_size = $("#JobBoard1 .job-post-card-holder").length;
    var a = 3;
        $("#JobBoard1 .job-post-card-holder:lt("+ a +")").show();
    $("#viewMore").click(function(){
        a = (a + 4 <= job_board_size) ? (a+4) : job_board_size;
        $("#JobBoard1 .job-post-card-holder:lt(" + a + ")").show();
    });


    $(".btn-signup").click(function() {
        console.log("hello signup");
        $(".SignUp").animate({'opacity': '1', 'z-index': '1'}, 100);
        $(".SignIn").animate({'opacity': '0', 'z-index': '-1'}, 100);
    });
    $(".btn-signin").click(function() {
        console.log("hello signin");
        $(".SignUp").animate({'opacity': '0', 'z-index': '-1'}, 100);
        $(".SignIn").animate({'opacity': '1', 'z-index': '1'}, 100);
    });
    // click register button to show hidden right banner
    $('.introBtnRight').click(function(){
        if (w >= 768) {
            $('.right-banner').css({'width': '85%', 'left':'15%'});
            $('.IntroductionItem').css({'display':'none'});
            $('.hidden-right-banner').css({'display':'block', 'background-color':'rgba(0, 114, 176, 0.5)', 'z-index': '5000' });
            
            $('.right-container-content').css({'background-color': 'rgba(0, 114, 176, 0.5)'});  
            if($('#step-nav2').hasClass('step-nav-point-choosen')|| $('#step-nav3').hasClass('step-nav-point-choosen')){

            }   
            else{
                $('#step-nav1').addClass('step-nav-point-choosen');
            }
            $('.dark-layer-desktop').css({'display':'block'});
        }
        if (w < 768) {
            $('.IntroductionItem').css({'display':'none'});
            $('.right-banner').addClass('right-changed');
            $('.hidden-right-banner').css({'display':'flex'});
            $('.left-banner').css({'height': '10rem'});  
            $('.right-banner').css({'height': 'unset', 'min-height': '71rem', 'width': '100%'});
            $('body').click(function() {
                $('.IntroductionItem').css({'display':''});
                $('.left-banner').css({'height': ''});  
                $('.right-banner').css({'height': '', 'min-height': '', 'width': '100%'});
                $('.hidden-right-banner').css({'display':'none'});
            });
            $('.right-banner').click(function(e) {
                e.stopPropagation();
                if ($(".right-banner").hasClass('right-changed')) {
                    return;
                }
            })
        } 
    });
    // click dark layer to get out
    $('.dark-layer-desktop').click(function(){
        $('.right-banner').css({'width': '50%', 'left':'50%'});
        $('.IntroductionItem').css({'display':'flex'});
        $('.hidden-right-banner').css({'display':'none', 'background-color':'' });
        $('.dark-layer-desktop').css({'display':''});
    });
    // // go to step 2
    // $('.company-create-account-button').click(function(){
    //     $('.company-registration-holder').css({'display':'none'});
    //     $('.public-first-job-holder').css({'display':'block'});
    //     $('#step-nav1').removeClass('step-nav-point-choosen');
    //     $('#step-nav2').addClass('step-nav-point-choosen');
    // });
    // click skip button to go to step 3
    $('.step2-skip').click(function(){
        $('#step-nav2').removeClass('step-nav-point-choosen');
        $('#step-nav3').addClass('step-nav-point-choosen');
        $('.public-first-job-holder').css({'display':'none'});
        $('.access-dashboard-holder').css({'display':'block'});
    });
    // scroll to show the hidden partners by click

     $('.partner-scroll-right').click(function() {
        
        $('.partner--box--group').animate({scrollLeft: "+=1100px"}, "slow");
    });
     $('.partner-scroll-left').click(function() {
        
        $('.partner--box--group').animate({scrollLeft: "-=1100px"}, "slow");
    });

    let slideNum = 0;
    let slideArr = document.getElementsByClassName('package');
    $('.right-indicator').click(function(event) {
        event.stopPropagation();
        slideNum += 1;
        if (slideNum >= slideArr.length) {
            slideNum = 0;
        } 
        for (let i = 0; i < slideArr.length; i++) {
            console.log('hello');
            $(slideArr[i]).fadeOut();
        }
        $(slideArr[slideNum]).fadeIn();
        console.log(slideNum);
    });
    $('.left-indicator').click(function(event) {
        event.stopPropagation();
        slideNum -= 1;
        if (slideNum < 0) {
            slideNum = slideArr.length - 1;
        } 
        for (let i = 0; i < slideArr.length; i++) {
            console.log('hello');
            $(slideArr[i]).fadeOut();
        }
        $(slideArr[slideNum]).fadeIn();
        console.log(slideArr[slideNum]);
    });
    let CopyURI = function() {
        let holderURI = document.createElement('input');
        let text = window.location.href;

        document.body.appendChild(holderURI);
        holderURI.value = text;
        holderURI.select();
        document.execCommand('copy');
        document.body.removeChild(holderURI);
    }
    $('.copy-uri').click(function() {
        CopyURI();
    });
    $('.copy-uri').click(function() {
        $('.copy-success').fadeIn();
        setTimeout(() => {
            $('.copy-success').fadeOut();
        }, 1500);
    })
    // Share button on desktop
    $('.job-fb-share').click(function(){
        var url = window.location.href;
            window.open('https://www.facebook.com/sharer/sharer.php?u=' + url,
                'facebook-share-dialog',
                'width=800,height=600'
            );
            return false;
    })
    $('.job-copy-link').click(function(){
        let holderURI = document.createElement('input');
        let text = window.location.href;

        document.body.appendChild(holderURI);
        holderURI.value = text;
        holderURI.select();
        document.execCommand('copy');
        document.body.removeChild(holderURI);
    })



    var swiper = new Swiper('.swiper-container');
    // Swiper configuration
    swiper.on('slideNextTransitionStart', function () {
        let slideIndex = swiper.activeIndex;
        let slideArticleArr = document.getElementsByClassName('article-nav-point');
        for (let i = 0; i < slideArticleArr.length; i++) {
            slideArticleArr[i].style.background = 'transparent';
        }
        slideArticleArr[slideIndex].style.background = 'red';
    });
    swiper.on('slidePrevTransitionStart', function () {
        let slideIndex = swiper.activeIndex;
        let slideArticleArr = document.getElementsByClassName('article-nav-point');
        for (let i = 0; i < slideArticleArr.length; i++) {
            slideArticleArr[i].style.background = 'transparent';
        }
        slideArticleArr[slideIndex].style.background = 'red';
    });
});