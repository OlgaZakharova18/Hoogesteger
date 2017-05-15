jQuery(document).ready(function($) {
    $("#homepage, #companypage").fullpage({
        anchors:['1Page','2Page','3Page','4Page','5Page','6Page'],
        scrollOverflow:true,
        scrollBar:false,
        slidesNavigation:true,
        loopTop:true,
        loopBottom:true
    });




    function InnerHeight(){
        $('.section').css('min-height', $(window).height());
    }

    InnerHeight();
    $(document ).resize(InnerHeight);




    setTimeout(function(){ $('.dynamics-image-big').addClass('do-animation-main'); }, 1000);
    setTimeout(function(){ $('.dynamics-image-small').addClass('do-animation-main-small-down'); }, 1000);
    setTimeout(function(){ $('.dynamics-image-left').addClass('do-animation-main-text-left'); }, 1100);
    setTimeout(function(){ $('.dynamics-image-right').addClass('do-animation-main-text-right'); }, 1100);
});

    




    setTimeout(function(){
            $('.viewport-animate').viewportChecker({
                classToAdd: 'do-animation-main-dynamics',
                offset : '5%',
                repeat : true
            });

            $('.viewport-animate').viewportChecker({
                classToAdd: 'do-animation-main-dynamics-down',
                offset : '15%',
                repeat : true
            });
    }, 1000);

    $('#formAsk').validate({ 
        rules : { 
            remark : 'required', 
            name : 'required', 
            company : 'required', 
            city : 'required', 
            phone : 'required', 
            email : { 
                required : true,
                email : true 
            }
        }, 
        messages : { 
            remark : { required: "" },
            name : { required: "" },
            company : { required : ""},
            city : { required: "" },
            phone : { required: "" },
            email : { required: "" } 
        },

    errorPlacement: function(error, element) { error.insertBefore(element); },
    submitHandler : function(form){
        $(form).ajaxSubmit({ 
            beforeSend:function(){
            $('.buttonAsk').prop('disabled', true);
            },
            success : function(){
            $('.form-success').removeClass('closed');
            contactValidator.resetForm();    
                $('.buttonAsk').prop('disabled', false);
                setTimeout(function(){
                $('.form-success').addClass('closed'); }, 5000);} 
        });
        return false; } }); 

    $('.form-success-close').click(function(e) {
        $('.form-success').addClass('closed'); 
    });

new Swiper('.container-home', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30,
        speed: 400,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });

    new Swiper('.containter-staff', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        loop: true
    });