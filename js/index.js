$(function() {
  $('.service_tab').on('click', function() {
    $('.service_tab').removeClass('active_tab');
    $(this).addClass('active_tab');
    
    $('.service_text').removeClass('active_text');
    
    var index = $('.service_tab').index(this);
    $('.service_text').eq(index).addClass('active_text');
  });
});


var products = {
  a:[
    '札幌市',
    '函館市',
    '小樽市',
    '旭川市',
    '室蘭市',
    '釧路市',
    '帯広市',
    '北見市',
    '夕張市',
    '岩見沢市',
    '網走市',
    '留萌市',
    '苫小牧市',
    '稚内市',
    '美唄市',
    '芦別市',
    '江別市',
    '赤平市',
    '紋別市',
    '士別市',
    '名寄市',
    '三笠市',
    '根室市',
    '千歳市',
    '滝川市',
    '砂川市',
    '歌志内市',
    '深川市',
    '富良野市',
    '登別市',
    '恵庭市',
    '伊達市',
    '北広島市',
    '石狩市',
    '北斗市'
  ],

  b:[
    '青森市',
    '弘前市',
    '八戸市',
    '黒石市',
    '五所川原市',
    '十和田市',
    '三沢市',
    'むつ市',
    'つがる市',
    '平川市'
  ],

  c:[
    '盛岡市',
    '宮古市',
    '大船渡市',
    '花巻市',
    '北上市',
    '久慈市',
    '遠野市',
    '一関市',
    '陸前高田市',
    '釜石市',
    '二戸市',
    '八幡平市',
    '奥州市',
    '滝沢市'
  ],
};

var noValue = $('#area_child').html();

$('#area_parent').on('change', function(){
  var cat = $(this).val();
  if(cat){
    var item = products[cat];
    $('#area_child').html('');
    var option;
    for(var i = 0; i < item.length; i++){
      option = '<option value="' + item[i] + '">' + item[i] + '</option>';
      $('#area_child').append(option);
    }
  }else{
    $('#area_child').html(noValue);
  }
});

$(function () {
  $('#js-hamburger-menu, .navigation__link').on('click', function () {
    $('.navigation').slideToggle(500)
    $('.hamburger-menu').toggleClass('hamburger-menu--open')
  });
});