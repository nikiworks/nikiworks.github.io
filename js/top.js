$(function() {

    var h = $(window).height();
    $('head').append('<style>.section-top::before { border-width: 0 0 ' + h + 'px 100vw;}</style>');

 
  //仕様考え中
  /*$(window).resize(function() {
 
    //ウインドウの高さを変数に格納
    var h = $(window).height();
 
    //ウインドウの高さをspan要素に出力
    $('head').append('<style>.section-top::before { border-width: 0 0 ' + h + 'px 100vw;}</style>');

  });
  */

});