import $ from 'jquery';
import '../css/style.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../../node_modules/normalize.css/normalize.css";
import "../../node_modules/slick-carousel/slick/slick.js";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import ScrollMagic from "scrollmagic";

import tree from "../images/tree.png";
import bgi from "../images/bg.png";
import bird from "../images/bird.png";
import g_pa from "../images/grandpa.png";

import f_pa from "../images/fruit/P.png";
import f_ct from "../images/fruit/CT.png";
import f_df from "../images/fruit/DF.png";
import f_g from "../images/fruit/G.png";
import f_javaA from "../images/fruit/javaA.png";
import f_juju from "../images/fruit/juju.png";
import f_L_CT from "../images/fruit/L-CT.png";
import f_litchi from "../images/fruit/litchi.png";
import f_peach from "../images/fruit/peach.png";
import f_longan from "../images/fruit/longan.png";

import nav_logo from "../images/nav_logo.png";
import title_logo from "../images/title_logo.png";

import rainbow from "../images/main_story/RB.png";
import city from "../images/main_story/city.png";
import s_peach from "../images/main_story/peach.png";
import intro_o from "../images/fruit_intro/orange.png";
import intro_rr from "../images/fruit_intro/dc.png";
import intro_y from "../images/fruit_intro/lemon.png";

import shop_rain1 from "../images/shop/bc.png";
import shop_rain2 from "../images/shop/rc.png";
import shop_dot1 from "../images/shop/bdc.png";
import shop_pic from "../images/shop/sf.png";

import fsp from "../images/fruit_intro/fs.png";
import spring from "../images/fruit_intro/spring.png";
import summer from "../images/fruit_intro/summer.png";
import fall from "../images/fruit_intro/fall.png";
import winter from "../images/fruit_intro/winter.png";




$(".title_logo").attr("src", title_logo);
$(".nav_logo").attr("src", nav_logo);

$(".main_pic").attr("src", bgi);
$("#tree").attr("src", tree);
$(".g-pa").attr("src", g_pa);
$(".bird").attr("src", bird);

$(".animate-f1").attr("src", f_pa);
$(".animate-f2").attr("src", f_peach);
$(".animate-f3").attr("src", f_ct);
$(".animate-f4").attr("src", f_litchi);
$(".animate-f5").attr("src", f_L_CT);
$(".animate-f6").attr("src", f_df);
$(".animate-f7").attr("src", f_javaA);
$(".animate-f8").attr("src", f_g);
$(".animate-f9").attr("src", f_longan);
$(".animate-f10").attr("src", f_juju);

$(".RB").attr("src", rainbow);
$(".city").attr("src", city);
$(".peach_ani").attr("src", s_peach);

$(".intro_o").attr("src", intro_o);
$(".intro_rr").attr("src", intro_rr);
$(".intro_y").attr("src", intro_y);

$(".shop_rain1").attr("src", shop_rain1);
$(".shop_rain2").attr("src", shop_rain2);
$(".shop_dot1").attr("src", shop_dot1);
$(".shop_dot2").attr("src", shop_dot1);
$(".shop_pic").attr("src", shop_pic);

$(".fs").attr("src", fsp);
$(".spring").attr("src", spring);
$(".summer").attr("src", summer);
$(".fall").attr("src", fall);
$(".winter").attr("src", winter);



let controller = new ScrollMagic.Controller();

let i = 0;

new ScrollMagic.Scene({
  triggerElement: '#story_Effect'
})
  .setClassToggle("#story_Effect", "showIn")
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: '#story_Effect'
})
  .setClassToggle(".story_rain", "rain_ani")
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: '.intro'
})
  .setClassToggle(".intro", "showIn")
  .addTo(controller);


  new ScrollMagic.Scene({
    triggerElement: '.shop_page'
  })
    .setClassToggle(".shop_page", "showIn")
    .addTo(controller);



$('.slick').slick({
  dots: true,             //顯示輪播圖片會顯示圓圈
  infinite: true,         //重覆輪播
  slidesToShow: 1,         //輪播顯示個數
  slidesToScroll: 1,      //輪播捲動個數
  autoplay: true,         //autoplay : 自動播放
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
});

