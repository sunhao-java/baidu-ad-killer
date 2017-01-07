/**
 * Created by sunhao on 2017/1/5.
 */
$(document).ready(function () {
    var leftContent = $('#content_left');
    var ad1 = $('div > div > font.ec_tuiguang_ppouter > a.ec_tuiguang_pplink > span', leftContent);
    $.each(ad1, function () {
        if (isAD($(this))) {
            $(this).parent("a").parent("font").parent("div").parent("div").remove();
        }
    })

    var ad2 = $('div > a.ec_tuiguang_ppimlink > span');
    $.each(ad2, function () {
        if (isAD($(this))) {
            $(this).parent("a").parent("div").remove();
        }
    })
});

function isAD(ele) {
    var adSpan = $(ele);

    return adSpan.length > 0 && $.trim(adSpan.html()) == '广告';
}