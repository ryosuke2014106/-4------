$(function(){
    $(".description").hide();
    $("#desc-web").show();
    $("#web").addClass("selected");

    $(".service").click(function(){
        $(".description").hide();
        $(".service").removeClass("selected");
        $(this).addClass("selected");

        if(this.id ==="web"){
            $("#desc-web").show();
        } else if(this.id === "seo"){
            $("#desc-seo").show();
        } else if (this.id === "app") {
            $("#desc-app").show();
        }
    });
});

$(function () {
    let isOpen = false;
        $("#js_hamburger_menu").on("click", function () {
        if (isOpen) {
        $(".nav-menu").slideUp(300);
        $(this).removeClass("is-open");
        } else {
        $(".nav-menu").slideDown(300);
        $(this).addClass("is-open"); 
        }
        isOpen = !isOpen;
  });

    $(".nav-menu a").on("click", function () {
        $(".nav-menu").slideUp(300);
        $("#js_hamburger_menu").removeClass("is-open"); 
        isOpen = false;
  });
});




const citydate = {
    "北海道":["札幌市", "函館市", "小樽市", "旭川市", "室蘭市", "釧路市", "帯広市", "北見市", "夕張市", "岩見沢市", "網走市", "留萌市", "苫小牧市", "稚内市", "美唄市", "芦別市", "江別市", "赤平市", "紋別市", "士別市", "名寄市", "三笠市", "根室市", "千歳市", "滝川市", "砂川市", "歌志内市", "深川市", "富良野市", "登別市", "恵庭市", "伊達市", "北広島市", "石狩市", "北斗市"],
    "青森県":["青森市", "弘前市", "八戸市", "黒石市", "五所川原市", "十和田市", "三沢市", "むつ市", "つがる市", "平川市"],
    "岩手県":["盛岡市", "宮古市", "大船渡市", "花巻市", "北上市", "久慈市", "遠野市", "一関市", "陸前高田市", "釜石市", "二戸市", "八幡平市", "奥州市", "滝沢市"]
};

$("#prefectures").on("change",function(){
    const selectedpref = $(this).val();
    const $city_name = $("#city_name");
    $city_name.empty();
    $city_name.append('<option value="">---</option>');

if (selectedpref && citydate[selectedpref]) {
      citydate[selectedpref].forEach(function (city_name) {
        $city_name.append(`<option value="${city_name}">${city_name}</option>`);
      });
    }
}); 