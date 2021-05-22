$(function () {
    $('.slick01').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '100px',
        focusOnSelect: true,
        dots: true,
    });

    //ハンバーガーメニュー
    $('.drawer').drawer();

    // ページ上部スクロール
    var pagetop = $('#page_top');
    // ボタン非表示
    pagetop.hide();

    // 100px スクロールしたらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body, html').animate({ scrollTop: 0 }, 500);
        return false;
    });
    // ページ上部スクロール
});