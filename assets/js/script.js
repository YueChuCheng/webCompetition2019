import $ from 'jquery';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../../node_modules/normalize.css/normalize.css";
import "../../node_modules/slick-carousel/slick/slick.js";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import '../css/style.css';
import '../js/firestore.js';
import firebase from '../js/firestore.js';

import ScrollMagic from "scrollmagic";


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

import learnus_icon from "../images/learnus/logo.png";
import learnus_title from "../images/learnus/typo.png";

import learnus_Rwave from "../images/learnus/rw.png";
import learnus_Bwave from "../images/learnus/bw.png";

import boat from "../images/learnus/ship.png";

import learn_bird from "../images/learnus/bird.png";

import animate_f1_sm from "../images/cellphone_pic/f1.png";
import animate_f2_sm from "../images/cellphone_pic/f2.png";
import animate_f3_sm from "../images/cellphone_pic/f3.png";
import animate_f4_sm from "../images/cellphone_pic/f4.png";
import animate_f5_sm from "../images/cellphone_pic/f5.png";
import animate_f6_sm from "../images/cellphone_pic/f6.png";
import animate_f7_sm from "../images/cellphone_pic/f7.png";
import animate_f8_sm from "../images/cellphone_pic/f8.png";
import animate_f9_sm from "../images/cellphone_pic/f9.png";
import animate_f10_sm from "../images/cellphone_pic/f10.png";


import intro_sec_1 from "../images/page2_intro/ssbg.jpg";
import intro_sec_2 from "../images/page2_intro/summer/msbg.jpg"
import intro_sec_3 from "../images/page2_intro/fall/asbg.jpg"
import intro_sec_4 from "../images/page2_intro/winter/wsbg.jpg"
import pic35 from "../images/page2_intro/35.png";
import pic68 from "../images/page2_intro/68.png";
import pic911 from "../images/page2_intro/911.png";
import pic122 from "../images/page2_intro/122.png";

import intro_bean from "../images/page2_intro/spring/bean.png";
import intro_peach from "../images/page2_intro/spring/peach.png";
import intro_red from "../images/page2_intro/spring/red.png";
import intro_soure from "../images/page2_intro/spring/soure.png";

import intro_mango from "../images/page2_intro/summer/mango.png";
import intro_lich from "../images/page2_intro/summer/lich.png";
import intro_ln from "../images/page2_intro/summer/ln.png";
import intro_dragon from "../images/page2_intro/summer/dragon.png";
import intro_rice from "../images/page2_intro/summer/rice.png";

import intro_jade from "../images/page2_intro/fall/jade.png";
import intro_tro from "../images/page2_intro/fall/tro.png";

import intro_tomato from "../images/page2_intro/winter/tomato.png";
import intro_onion from "../images/page2_intro/winter/onion.png";
import intro_juju from "../images/page2_intro/winter/juju.png";
import intro_wax from "../images/page2_intro/winter/wax.png";
import intro_radish from "../images/page2_intro/winter/radish.png";

import intro_pine from "../images/page2_intro/all_year/pine.png";
import intro_papa from "../images/page2_intro/all_year/papa.png";
import intro_gava from "../images/page2_intro/all_year/gava.png";
import intro_bana from "../images/page2_intro/all_year/bana.png";

import learn_us_title from "../images/team_pic/wlogo.png";
import member_1_pic from "../images/team_pic/b1.png";
import member_2_pic from "../images/team_pic/b2.png";
import member_3_pic from "../images/team_pic/b3.png";


import page2_learn_b1b from "../images/team_pic/b1b.png";
import page2_learn_b2b from "../images/team_pic/b2b.png";
import page2_learn_b3b from "../images/team_pic/b3b.png";

import story_main_peach from "../images/page2_story/part1/peach.png";
import story_main_pa from "../images/page2_story/part2/gfi.png";
import story_main_lbg from "../images/page2_story/part2/lbg.png";
import story_main_rbg from "../images/page2_story/part2/rbg.png";
import story_main_bbg from "../images/page2_story/part2/bbg.png";
import story_main3_footer from "../images/page2_story/part3/footer.png";
import story_main3_mountain from "../images/page2_story/part3/mbg.png";
import story_main3_title from "../images/page2_story/part3/welcome.png";
import story_main3_leaflb from "../images/page2_story/part3/bleaf.png";
import story_main3_leafdb from "../images/page2_story/part3/dleaf.png";
import story_main3_leafr from "../images/page2_story/part3/rleaf.png";

import buy_pic from "../images/page2_buy/part1/ybg.png";
import buy_icon from "../images/page2_buy/part1/ylc.png";
import buy_deco from "../images/page2_buy/part1/yc.png";
import buy_step_title_icon1 from "../images/page2_buy/part2/t1.png";
import buy_step_title_icon2 from "../images/page2_buy/part2/t2.png";
import buy_step_title_icon3 from "../images/page2_buy/part2/t3.png";
import buy_step_img1 from "../images/page2_buy/part2/price.png";
import buy_step_img2 from "../images/page2_buy/part2/fruits.png";
import buy_step_img3 from "../images/page2_buy/part2/gift.png";
import buy_page_img1 from "../images/page2_buy/part3/bbt.png";
import buy_page_img2 from "../images/page2_buy/part3/rbt.png";
import buy_page_deco_l from "../images/page2_buy/part3/dc_l.png";

import buy_fresh_pic from "../images/pages2_buy_fresh/abbg.png";

import pick_f_main_pick_pic1 from "../images/pages2_buy_fresh/f_1.png";
import pick_f_main_pick_pic2 from "../images/pages2_buy_fresh/f_2.png";
import pick_f_main_pick_pic3 from "../images/pages2_buy_fresh/f_3.png";
import pick_f_main_pick_pic4 from "../images/pages2_buy_fresh/f_4.png";
import pick_f_main_pick_pic5 from "../images/pages2_buy_fresh/f_5.png";
import pick_f_main_pick_pic6 from "../images/pages2_buy_fresh/f_6.png";
import pick_f_main_pick_pic7 from "../images/pages2_buy_fresh/f_7.png";
import pick_f_main_pick_pic8 from "../images/pages2_buy_fresh/f_8.png";
import pick_f_main_pick_pic9 from "../images/pages2_buy_fresh/f_9.png";
import pick_f_main_pick_pic10 from "../images/pages2_buy_fresh/f_10.png";
import pick_f_main_pick_pic11 from "../images/pages2_buy_fresh/f_11.png";
import pick_f_main_pick_pic12 from "../images/pages2_buy_fresh/f_12.png";
import pick_f_main_pick_pic13 from "../images/pages2_buy_fresh/f_13.png";
import pick_f_main_pick_pic14 from "../images/pages2_buy_fresh/f_14.png";
import pick_p_pic1 from "../images/pages2_buy_fresh/cgc.png";
import pick_p_pic2 from "../images/pages2_buy_fresh/rgc.png";
import pick_p_pic3 from "../images/pages2_buy_fresh/bgc.png";
import fresh_check from "../images/pages2_buy_fresh/wn.png";
import pick_f_main_pick_check from "../images/pages2_buy_fresh/yn.png";


import xx from "../images/learnus/xx.png";



import buy_onSeason_mainPic from "../images/page2_buy_onSeason/srbg.png";
import onSeason_pick_fruit1 from "../images/page2_buy_onSeason/emi.png";
import onSeason_pick_fruit2 from "../images/page2_buy_onSeason/cmi.png";
import onSeason_pick_fruit3 from "../images/page2_buy_onSeason/eri.png";
import onSeason_pick_fruit4 from "../images/page2_buy_onSeason/cri.png";
import onSeason_pick_fruit5 from "../images/page2_buy_onSeason/ebi.png";
import onSeason_pick_fruit6 from "../images/page2_buy_onSeason/cbi.png";
import wflogo from "../images/wflogo.png";
import navwl from "../images/navwl.png";



$(".fruit_message_card_off").attr("src", xx);

$(".title_logo").attr("src", title_logo);
$(".main_pic").attr("src", bgi);
$(".nav_logo").attr("src", nav_logo);
$(".nav_logo_footer").attr("src", wflogo);
$(".nav_logo_learn").attr("src", navwl);
$(".main_pic").attr("src", bgi);

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

$(".learnus_icon").attr("src", learnus_icon);
$(".learnus_title").attr("src", learnus_title);

$(".learnus_Rwave").attr("src", learnus_Rwave);
$(".learnus_Bwave").attr("src", learnus_Bwave);

$(".boat").attr("src", boat);
$(".learn_bird").attr("src", learn_bird);

$(".animate_f1_sm ").attr("src", animate_f1_sm);
$(".animate_f2_sm ").attr("src", animate_f2_sm);
$(".animate_f3_sm ").attr("src", animate_f3_sm);
$(".animate_f4_sm ").attr("src", animate_f4_sm);
$(".animate_f5_sm ").attr("src", animate_f5_sm);
$(".animate_f6_sm ").attr("src", animate_f6_sm);
$(".animate_f7_sm ").attr("src", animate_f7_sm);
$(".animate_f8_sm ").attr("src", animate_f8_sm);
$(".animate_f9_sm ").attr("src", animate_f9_sm);
$(".animate_f10_sm ").attr("src", animate_f10_sm);

$(".intro_sec_1 ").attr("src", intro_sec_1);
$(".intro_sec_2 ").attr("src", intro_sec_2);
$(".intro_sec_3 ").attr("src", intro_sec_3);
$(".intro_sec_4 ").attr("src", intro_sec_4);
$(".pic35 ").attr("src", pic35);
$(".pic68 ").attr("src", pic68);
$(".pic911 ").attr("src", pic911);
$(".pic122 ").attr("src", pic122);

$(".intro_peach ").attr("src", intro_peach);
$(".intro_bean ").attr("src", intro_bean);
$(".intro_red ").attr("src", intro_red);
$(".intro_soure ").attr("src", intro_soure);


$(".intro_mango ").attr("src", intro_mango);
$(".intro_lich ").attr("src", intro_lich);
$(".intro_ln ").attr("src", intro_ln);
$(".intro_dragon ").attr("src", intro_dragon);
$(".intro_rice ").attr("src", intro_rice);

$(".intro_jade ").attr("src", intro_jade);
$(".intro_tro ").attr("src", intro_tro);

$(".intro_tomato ").attr("src", intro_tomato);
$(".intro_onion ").attr("src", intro_onion);
$(".intro_juju ").attr("src", intro_juju);
$(".intro_wax ").attr("src", intro_wax);
$(".intro_radish ").attr("src", intro_radish);

$(".intro_pine ").attr("src", intro_pine);
$(".intro_papa ").attr("src", intro_papa);
$(".intro_gava ").attr("src", intro_gava);
$(".intro_bana ").attr("src", intro_bana);


$(".learn_us_title ").attr("src", learn_us_title);
$(".member_1_pic ").attr("src", member_1_pic);
$(".member_2_pic ").attr("src", member_2_pic);
$(".member_3_pic ").attr("src", member_3_pic);

$(".page2_learn_b1b ").attr("src", page2_learn_b1b);
$(".page2_learn_b2b ").attr("src", page2_learn_b2b);
$(".page2_learn_b3b ").attr("src", page2_learn_b3b);

$(".story_main_peach ").attr("src", story_main_peach);
$(".story_main_pa img  ").attr("src", story_main_pa);
$(".story_main_lbg").attr("src", story_main_lbg);
$(".story_main_rbg").attr("src", story_main_rbg);
$(".story_main_bbg").attr("src", story_main_bbg);
$(".story_main3_footer").attr("src", story_main3_footer);
$(".story_main3_mountain").attr("src", story_main3_mountain);
$(".story_main3_title").attr("src", story_main3_title);
$(".story_main3_leaflb").attr("src", story_main3_leaflb);
$(".story_main3_leafdb").attr("src", story_main3_leafdb);
$(".story_main3_leafr").attr("src", story_main3_leafr);

$(".buy_pic").attr("src", buy_pic);
$(".buy_icon").attr("src", buy_icon);
$(".buy_deco").attr("src", buy_deco);
$(".buy_step_title_icon1").attr("src", buy_step_title_icon1);
$(".buy_step_title_icon2").attr("src", buy_step_title_icon2);
$(".buy_step_title_icon3").attr("src", buy_step_title_icon3);
$(".buy_step_img1").attr("src", buy_step_img1);
$(".buy_step_img2").attr("src", buy_step_img2);
$(".buy_step_img3").attr("src", buy_step_img3);
$(".buy_page_img1").attr("src", buy_page_img1);
$(".buy_page_img2").attr("src", buy_page_img2);
$(".buy_page_deco_l").attr("src", buy_page_deco_l);
$(".buy_page_deco_r").attr("src", buy_page_deco_l);

$(".buy_fresh_pic").attr("src", buy_fresh_pic);
$(".pick_f_main_pick_pic1").attr("src", pick_f_main_pick_pic1);
$(".pick_f_main_pick_pic2").attr("src", pick_f_main_pick_pic2);
$(".pick_f_main_pick_pic3").attr("src", pick_f_main_pick_pic3);
$(".pick_f_main_pick_pic4").attr("src", pick_f_main_pick_pic4);
$(".pick_f_main_pick_pic5").attr("src", pick_f_main_pick_pic5);
$(".pick_f_main_pick_pic6").attr("src", pick_f_main_pick_pic6);
$(".pick_f_main_pick_pic7").attr("src", pick_f_main_pick_pic7);
$(".pick_f_main_pick_pic8").attr("src", pick_f_main_pick_pic8);
$(".pick_f_main_pick_pic9").attr("src", pick_f_main_pick_pic9);
$(".pick_f_main_pick_pic10").attr("src", pick_f_main_pick_pic10);
$(".pick_f_main_pick_pic11").attr("src", pick_f_main_pick_pic11);
$(".pick_f_main_pick_pic12").attr("src", pick_f_main_pick_pic12);
$(".pick_f_main_pick_pic13").attr("src", pick_f_main_pick_pic13);
$(".pick_f_main_pick_pic14").attr("src", pick_f_main_pick_pic14);
$(".pick_p_pic1").attr("src", pick_p_pic1);
$(".pick_p_pic2").attr("src", pick_p_pic2);
$(".pick_p_pic3").attr("src", pick_p_pic3);
$(".fresh_check").attr("src", fresh_check);
$(".pick_f_main_pick_check").attr("src", pick_f_main_pick_check);

$(".buy_onSeason_mainPic").attr("src", buy_onSeason_mainPic);
$(".onSeason_pick_fruit1").attr("src", onSeason_pick_fruit1);
$(".onSeason_pick_fruit2").attr("src", onSeason_pick_fruit2);
$(".onSeason_pick_fruit3").attr("src", onSeason_pick_fruit3);
$(".onSeason_pick_fruit4").attr("src", onSeason_pick_fruit4);
$(".onSeason_pick_fruit5").attr("src", onSeason_pick_fruit5);
$(".onSeason_pick_fruit6").attr("src", onSeason_pick_fruit6);

$(".learn_us_ex_card_cross").attr("src", xx);



let controller = new ScrollMagic.Controller();

let i = 0;

new ScrollMagic.Scene({
  triggerElement: '#story_Effect'
})
  .setClassToggle("#story_Effect", "showIn")
  .reverse(false)
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: '#story_Effect'
})
  .setClassToggle(".story_rain", "rain_ani")
  .reverse(false)
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: '.intro'
})
  .setClassToggle(".intro", "showIn")
  .reverse(false)
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: '.page2_story_main'
})
  .setClassToggle(".page2_story_main", "showIn")
  .reverse(false)
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: '.page2_story_main2'
})
  .setClassToggle(".page2_story_main2", "showIn")
  .reverse(false)
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: '.page2_story_main3'
})
  .setClassToggle(".page2_story_main3", "showIn")
  .reverse(false)
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: '.page2_story_main3'
})
  .setClassToggle(".story_main_rain", "story-rain")
  .reverse(false)
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: '.page2_story_main3'
})
  .setClassToggle(".story_main3_mountain", "story_main_bg")
  .reverse(false)
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: '.page2_story_main3'
})
  .setClassToggle(".story_main3_footer", "story_main_bg")
  .reverse(false)
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: '.page2_story_main3'
})
  .setClassToggle(".story_leaf", "story_main_leaf")
  .reverse(false)
  .addTo(controller);


new ScrollMagic.Scene({
  triggerElement: '.page2_story_main3'
})
  .setClassToggle(".story_main3_title", "story_main_showIn")
  .reverse(false)
  .addTo(controller);


new ScrollMagic.Scene({
  triggerElement: '.page2_story_main2'
})
  .setClassToggle(".story_main_bgani", "story_main_bg")
  .reverse(false)
  .addTo(controller);


new ScrollMagic.Scene({
  triggerElement: '.page2_story_main2'
})
  .setClassToggle(".story_main_pa", "story_main_showIn")
  .reverse(false)
  .addTo(controller);








new ScrollMagic.Scene({
  triggerElement: '.shop_page'
})
  .setClassToggle(".shop_page", "showIn")
  .reverse(false)
  .addTo(controller);


//page2_intro_start

new ScrollMagic.Scene({
  triggerElement: '.allyear'
})
  .setClassToggle(".progress_bar", "showIn")
  .addTo(controller);




new ScrollMagic.Scene({
  triggerElement: '#allyear'
})
  .setClassToggle(".intro_circle", "red")
  .addTo(controller);


new ScrollMagic.Scene({
  triggerElement: '#spring'
})
  .setClassToggle(".intro_circle", "pink")
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: '#summer'
})
  .setClassToggle(".intro_circle", "lightblue")
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: '#fall'
})
  .setClassToggle(".intro_circle", "orange")
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: '#winter'
})
  .setClassToggle(".intro_circle", "gray")
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: '.learn_us_main_sec2'
})
  .setClassToggle(".nav_btn", "black")
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: '.learn_us_main_sec2'
})
  .setClassToggle(".nav_logo_learn", "nav_logo_learn_none")
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: '.learn_us_main_sec2'

})
  .setClassToggle(".nav_logo", "nav_logo_block")
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: '.learn_us_main_sec2'

})
  .setClassToggle("#learn_us_circle", "hm_circle_black")
  .addTo(controller);
new ScrollMagic.Scene({
  triggerElement: '.learn_us_main_sec2'

})
  .setClassToggle("#learn_us_dot", "hm_dot_black")
  .addTo(controller);



//page2_intro_end



$('.slick').slick({
  dots: true,             //顯示輪播圖片會顯示圓圈
  infinite: true,         //重覆輪播
  slidesToShow: 1,         //輪播顯示個數
  slidesToScroll: 1,      //輪播捲動個數
  autoplay: true,         //autoplay : 自動播放
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
});

let hm_click = 0;
$(".hm_circle").click(function () {
  hm_click++;
  if (hm_click % 2 === 1) {
    $(".nav_main").css("transition-delay", "0s");
    $(".nav_sec ").css("display", "block");
    $(".hm_circle").css("transform", " rotate(90deg)");
    $(".hm_circle").css("border", " solid #fff 1px");
    $(".hm_dot").css("background-color", " #fff ");
    $(".nav_main").css("height", "100vh");
    $(".nav_main").css("animation", "nav_hm 0.5s linear forwards");
    $(".nav_btn").css("opacity", "1");
    $(".hm_circle_black").removeClass("hm_circle_black");
    $(".hm_dot_black").removeClass("hm_dot_black");
  }
  else {
    $(".nav_sec ").css("display", "none");
    $(".hm_circle").css("transform", " rotate(0deg)");
    $(".hm_circle").css("border", " solid #000 1px ");
    $(".hm_dot").css("background-color", " #000  ");
    $(".nav_main").css("transition-delay", "0.5s");
    $(".nav_main").css("height", "70px");

    $(".nav_main").css("animation", "nav_hm_back 0.5s linear forwards");
    $(".nav_btn").css("opacity", "0");
    if ($(".nav_logo").hasClass("nav_logo_block")) { //learn_us page hm_circle color detect
      $(".hm_circle").addClass("hm_circle_black");
      $(".hm_dot").addClass("hm_dot_black");
    }

  }

});





let order_select_btn = Boolean(true);
$(".order_select_fresh_btn").click(function () {
  if (order_select_btn === false) {

    $(".order_fresh_main").css("display", "grid");
    $(".order_onSeason_main").css("display", "none");
    order_select_btn = true;
  }
});

$(".order_select_onSeason_btn").click(function () {
  if (order_select_btn === true) {

    $(".order_fresh_main").css("display", "none");
    $(".order_onSeason_main").css("display", "grid");
    order_select_btn = false;
  }
});


$(document).ready(function () {



  for (let index = 1; index <= 3; index++) {

    $(`.member_${index} .learn_us_ex_btn`).click(function () {
      $(`.member_${index} .learn_us_ex_card`).removeClass("learn_us_display_none");
      $(` .learn_us_ex_card_${index}`).removeClass("learn_us_display_none");

    });
    $(`.member_${index} .learn_us_ex_card .learn_us_ex_card_cross`).click(function () {
      $(`.member_${index} .learn_us_ex_card`).addClass("learn_us_display_none");

    });
    $(`.learn_us_ex_card_${index} .learn_us_ex_card_cross`).click(function () {
      $(`.learn_us_ex_card_${index}`).addClass("learn_us_display_none");

    });

  }



  $(window).resize(function () {

    var wdth = $(window).width();

    if (wdth > 480) {
      $(".nav_btn").css("opacity", "1");
      $(".nav_sec ").css("display", "block");
    }

    if (wdth <= 480 && hm_click % 2 === 1) {
      $(".nav_btn ").css("opacity", "1");
      $(".nav_sec ").css("display", "block");
      $(".hm_circle").css("transform", " rotate(90deg)");
      $(".hm_circle").css("border", " solid #fff 1px");
      $(".hm_dot").css("background-color", " #fff ");
      $(".nav_main").css("height", "100vh");
      $(".nav_main").css("animation", "nav_hm 0.5s linear forwards");
      $(".nav_btn").css("opacity", "1");
    }
    if (wdth <= 480 && hm_click % 2 === 0) {
      $(".nav_main").css("height", "70px");
      $(".nav_sec ").css("display", "none");
      $(".nav_btn").css("opacity", "0");
      $(".nav_main").css("animation", "none");
    }
  });

  //page_intro btn start
  for (let btn_x = 1; btn_x <= 5; btn_x++) {
    let btn_cout = $('.btn_' + btn_x).children().length;
    for (let btn_y = 1; btn_y <= btn_cout; btn_y++) {
      $(".btn_" + btn_x + " p:nth-child(" + btn_y + ")").hover(function () {
        $(".btn_" + btn_x + " p:nth-child(" + btn_y + ") img").css("opacity", "1");


      }, function () {
        $(".btn_" + btn_x + " p:nth-child(" + btn_y + ") img").css("opacity", "0");

      }
      );
    }


  }


  $(".nav_logo_learn ").click(function () {
    window.location.assign("/");
  });
  $(".nav_logo ").click(function () {
    window.location.assign("/");
  });

  $(".intro_text_btn p").click(function () {
    let id = $(this).attr("id");//顯示的id
    let p_id = $(this).parent().parent().parent(".intro_sec").attr("id");//顯示所在的的class

    //選擇顯示語句
    switch (id) {

      //春天
      case "peach":
        $(".fruit_message_address").html("<p>主要產地 那瑪夏區、桃源區<br>產期 4月至5月</p>");
        $(".fruit_message_subtitle").html("<p>春意盎然</p>");
        $(".fruit_message_title").html("<p>水蜜桃</p>");
        $(".fruit_message_card_text").html("<p>那瑪夏區的水蜜桃是國內唯一種植在熱帶山區的水蜜桃，品種大多為白鳳桃，果肉纖維少，香甜又多汁。雖然台灣氣候濕熱，無法培育如日本般碩大甜美的水蜜桃品種，但寶島的台農一號（春蜜）和台農二號（夏蜜），果實雖小，依舊甜美。夏日桃樹已經和果園成為一體，數抹胭紅，一半藏在葉片陰影處，另一半在陽光照耀下，肆意散發著紅熟氣息。</p>");
        break;
      case "bean":
        $(".fruit_message_address").html("<p>主要產地 那瑪夏區、桃源區<br>產期 4月至5月</p>");
        $(".fruit_message_subtitle").html("<p>春意盎然</p>");
        $(".fruit_message_title").html("<p>毛豆</p>");
        $(".fruit_message_card_text").html("<p>來到旗山和美濃區的外銷毛豆生產專區，農夫和加工業者的戰備狀態，為的是搶收豆莢離開植株後的「黃金四小時」，避免隨時間拉長而快速流失甜度、葉綠素消逝導致豆莢黃化，進而影響口感，高品質的鮮嫩口感，連一向嚴謹的日本商，都直誇「比本國生產的還新鮮」！</p>");
        break;
      case "red":
        $(".fruit_message_address").html("<p>主要產地 桃源區、那瑪夏區<br>產期 5月</p>");
        $(".fruit_message_subtitle").html("<p>春意盎然</p>");
        $(".fruit_message_title").html("<p>紅肉李</p>");
        $(".fruit_message_card_text").html("<p>高雄市紅肉李主要集中於桃源區，桃源區所栽種的紅肉李，果實碩大，果肉質脆、酸甜度適宜，醃漬後另有一番風味，是老少咸宜的水果。桃源、那瑪夏為八八風災重創區，社區重建的工作夥伴會親自上山確認紅肉李的熟度跟採摘情況，不厭其煩地跟果農溝通需求，依照果乾、蜜餞、醋、酒等不同的加工用途，在出貨時便依照熟度與等級進行分類，以確保最後成品的品質。</p>");
        break;
      case "soure":
        $(".fruit_message_address").html("<p>主要產地 桃源區、六龜區、那瑪夏區、甲仙區<br>產期 3月下旬至4月下旬</p>");
        $(".fruit_message_subtitle").html("<p>春意盎然</p>");
        $(".fruit_message_title").html("<p>梅子</p>");
        $(".fruit_message_card_text").html("<p>如果要醃漬脆梅，必須在清明之前，此時梅子翠綠，果實爽脆。清明過後，梅果漸漸軟黃，只能醃漬Q梅或紫蘇梅，直到五月梅果盡落，在連綿不斷的梅雨中收場。高屏溪流域的那瑪夏區、桃源區及六龜區，就是南台灣最著名的梅子產區。</p>");
        break;

      //夏天
      case "mango":
        $(".fruit_message_address").html("<p>主要產地 六龜區、杉林區、阿蓮區、田寮區、桃源區<br>產期 5月至8月</p>");
        $(".fruit_message_subtitle").html("<p>盛夏時光</p>");
        $(".fruit_message_title").html("<p>金煌芒果</p>");

        $(".fruit_message_card_text").html("<p>每一樣水果都記錄著土地的生命，不同地區土壤的特質、氣候條件，總是醞釀出不同風味口感的特殊水果。高雄六龜區最負盛名的，不外是金煌芒果。金煌芒果是高雄市六龜區果農黃金煌先生育成，果實大、核薄、纖維細，甜美多汁的滋味令消費者驚艷。果肉率高、果色金黃、色澤漂亮，是金煌芒果的優點。</p>");
        break;
      case "lich":
        $(".fruit_message_address").html("<p>主要產地 大樹區、旗山區、杉林區、內門區、燕巢區<br>產期 5月至6月</p>");
        $(".fruit_message_subtitle").html("<p>盛夏時光</p>");
        $(".fruit_message_title").html("<p>荔枝</p>");

        $(".fruit_message_card_text").html("<p>大樹區境內荔枝種植以黑葉及玉荷包分布最廣，特有的紅土、黃土夾帶砂質土質，本身即含有豐富礦物質，也形成良好的排水條件；到了冬季，坡度略高的氣溫和濕度，正好提供開花的必備條件，夏季又保有豔陽遍照的優勢，果實自然成熟快、甜度高。核小果肉細緻，果實約八分熟，果皮呈紅、黃綠相間即可採收，甜中帶酸的口感最好。</p>");
        break;
      case "ln":
        $(".fruit_message_address").html("<p>主要產地 內門區、杉林區、田寮區、甲仙區、旗山區<br>產期 7月至8月</p>");
        $(".fruit_message_subtitle").html("<p>盛夏時光</p>");
        $(".fruit_message_title").html("<p>龍眼</p>");

        $(".fruit_message_card_text").html("<p>龍眼為台灣夏季最具代表性的水果之一，除了鮮食外，花粉可成蜜源，還可烘焙製成龍眼乾。暖春，南國空氣仿如加了糖，黃白小花已開滿枝頭，招引來揮翅陣陣的蜜蜂們。盛夏，果實由青轉褐色，粗厚果皮轉為薄而平，輕捏果肉富有彈性。初秋，戶戶燻木香氣揚起，溫徐炭火烘焙著粒粒果實，細火慢焙足足六天，燻蒸成醇厚甘甜的龍眼乾果。</p>");
        break;
      case "dragon":
        $(".fruit_message_address").html("<p>主要產地  橋頭區、梓官區、六龜區、旗山區<br>產期 6月至11月</p>");
        $(".fruit_message_subtitle").html("<p>盛夏時光</p>");
        $(".fruit_message_title").html("<p>紅龍果</p>");

        $(".fruit_message_card_text").html("<p>帶刺的綠色三角莖，沿著水泥柱或棚架攀爬，如仙人掌的向陽姿態，在內門和旗山區的廣裘農地，結出一望無際的紅龍果園，剖開果實，漾著水分的紅肉，密布黑籽，清香高甜度的果味，最適合冰鎮後大口享用。因花只在夜間盛開，隔天即謝的特性，香氣濃厚，又有夜仙子之稱。</p>");
        break;
      case "rice":
        $(".fruit_message_address").html("<p>主要產地 美濃區、大寮區<br>產期 一期作－5月至6月；二期作－10月至11月</p>");
        $(".fruit_message_subtitle").html("<p>盛夏時光</p>");
        $(".fruit_message_title").html("<p>稻米</p>");

        $(".fruit_message_card_text").html("<p>談及高屏溪流域的稻米，中下游各有好米自居，一是中游美濃，另一為下游大寮。美濃有高雄米倉的美譽，此區主要稻米品種為台稉2號、高雄145號，外觀晶瑩剔透，米粒飽滿有光澤。大寮區域種植的好米品種以高雄145號和高雄147號為主，穀粒較大短圓、完整米型高、粒型整齊、米粒外觀晶瑩剔透、口感佳。</p>");
        break;
      //秋天
      case "jade":
        $(".fruit_message_address").html("<p>主要產地 桃源區、那瑪夏區<br>產期 9月至10月</p>");
        $(".fruit_message_subtitle").html("<p>秋蘭飄香</p>");
        $(".fruit_message_title").html("<p>愛玉</p>");

        $(".fruit_message_card_text").html("<p>用清澈溪水搓出來的愛玉才美味，每條河流搓出的愛玉風味都不相同，那是河水的滋味。種植愛玉的園區必須很「天然」，間接地讓愛玉成為另類的環境指標。 桃源區、那瑪夏區是荖濃溪的上游，溪水清澈乾淨，洗出來的愛玉子清香味美。</p>");
        break;
      case "tro":
        $(".fruit_message_address").html("<p>主要產地 甲仙區<br>產期 10月至翌年1月</p>");
        $(".fruit_message_subtitle").html("<p>秋蘭飄香</p>");
        $(".fruit_message_title").html("<p>芋頭</p>");

        $(".fruit_message_card_text").html("<p>日據時期，製造樟腦的客家人來到甲仙，帶來現在常見的檳榔心芋。當時他們將芋頭種在冷卻樟腦的水池旁，甲仙區近海拔250公尺的丘陵地形，還有楠梓仙溪帶來的溫差調節，讓芋頭生長得格外良好。</p>");
        break;
      //冬天
      case "tomato":
        $(".fruit_message_address").html("<p>主要產地  美濃區、杉林區<br>產期 11月中旬至翌年4月</p>");
        $(".fruit_message_subtitle").html("<p>臘梅怒放</p>");
        $(".fruit_message_title").html("<p>橙蜜香番茄</p>");

        $(".fruit_message_card_text").html("<p>入秋之後，氣候漸漸轉涼，就是種植橙蜜香小果番茄的好時機。美濃、杉林一帶秋冬時節少雨，日夜溫差大，白日有充足的日照，晚上又有涼爽的溫度，讓番茄得以累積甜分。在南台灣以有機方式種植橙蜜香小果番茄，首先要有耐心，得等氣溫來到適合種植的攝氏20度以下，這個溫度較不利銀葉粉蝨的生長，較能降低毒素病的發生率。</p>");
        break;
      case "onion":
        $(".fruit_message_address").html("<p>主要產地  林園區<br>產期 1月至2月</p>");
        $(".fruit_message_subtitle").html("<p>臘梅怒放</p>");
        $(".fruit_message_title").html("<p>洋蔥</p>");

        $(".fruit_message_card_text").html("<p>一至二月，植株下部葉片開始出現枯黃和倒伏現象，農人知道該挑個晴空無雲的好日子，來採收蔥球了！一顆顆連葉帶起的蔥球，經過葉片萎凋的等待，將球莖以葉片覆蓋、放在田土上曬日光浴，烤成迷人紅棕色的外表皮膜，可讓蔥球含水量低，耐貯運，最後才將葉和根部剪除方便包裝，連續三至四天的採收期，全程仰賴乾燥晴朗的陽光，碰不得一點雨。</p>");
        break;
      case "juju":
        $(".fruit_message_address").html("<p>主要產地 燕巢區、阿蓮區、六龜區、大社區、田寮區<br>產期 12月至翌年2月</p>");
        $(".fruit_message_subtitle").html("<p>臘梅怒放</p>");
        $(".fruit_message_title").html("<p>蜜棗</p>");

        $(".fruit_message_card_text").html("<p>高雄市為台灣蜜棗最大產區，栽植集中於大社、燕巢、阿蓮、田寮及岡山一帶。由於鄰近有名的惡地「月世界」，因此土壤高鹽、高鹼，富含鉀、鎂等礦物質和微量元素，使得種植在此地的水果，風味特別濃烈。蜜棗果粒適中，但肉質脆、甜、細緻，有台灣蘋果的美名。</p>");
        break;
      case "wax":
        $(".fruit_message_address").html("<p>主要產地 六龜區<br>產期  10月至翌年6月</p>");
        $(".fruit_message_subtitle").html("<p>臘梅怒放</p>");
        $(".fruit_message_title").html("<p>蓮霧</p>");

        $(".fruit_message_card_text").html("<p>高品質蓮霧最早出現於屏東臨海地區，因抑制生長、催促發芽開花技術之引用及有機肥料的運用，使得生長出結實、顏色暗紅、質地脆、甜度特別高的蓮霧，而且經濟價值又高，稱為「黑珍珠」。數年後，果農將蓮霧從夏果改成冬果，更生產出果實特大、果色深紅、水分多、清甜爽口的蓮霧，稱為「黑鑽石」，而這個名字也蘊涵著六龜農民的驕傲，極品蓮霧在六龜。</p>");
        break;
      case "radish":
        $(".fruit_message_address").html("<p>主要產地 美濃區 <br>產期  11月至12月</p>");
        $(".fruit_message_subtitle").html("<p>臘梅怒放</p>");
        $(".fruit_message_title").html("<p>白玉蘿蔔</p>");

        $(".fruit_message_card_text").html("<p>白玉蘿蔔是美濃的特有種，據說是早期由日本引進來的，以前只簡單稱作小蘿蔔，在兩期稻作之間，農家隨手種在田埂邊畸零地。由於季節跟土壤，讓美濃的蘿蔔長的個頭份外嬌小，皮薄細肉嫩脆，反倒與他地碩大粗壯的蘿蔔有了區隔。除了煮湯，燉，更可做各樣乾製醃漬品，諸如曬蘿蔔角，蘿蔔絲，加糖鹽醋醃製成的醃蘿蔔，或曬乾後塞進高粱酒瓶裡，甘中透點酸的蘿蔔乾。</p>");
        break;

      default:
        $(".fruit_message_card_text").html("<p>no</p>");
        break;


    }

    $(".fruit_message_sec1 img ").attr("src", `../../assets/images/page2_intro/${p_id}/${id}.png`);
    $(".fruit_message").removeClass('no_show');







  });


  $(".allyear_btn p").click(function () {
    let id = $(this).attr("id");
    let p_id = $(this).parent().parent(".allyear").attr("id");

    //選擇顯示語句
    switch (id) {

      //全年
      case "pine":
        $(".fruit_message_address").html("<p>主要產地 大樹區、鳥松區、內門區<br>產期 全年</p>");
        $(".fruit_message_subtitle").html("<p>四季繁華</p>");
        $(".fruit_message_title").html("<p>鳳梨</p>");

        $(".fruit_message_card_text").html("<p>全年可供果的鳳梨稱得上台灣的驕傲，高雄市的鳳梨研發出多元的低酸度、高品質、特殊風味及不同產期的鳳梨，目前以「金鑽鳳梨」為主力，果肉細緻、風味口感均屬上乘，每年4月至6月品質最佳。</p>");
        break;
      case "gava":
        $(".fruit_message_address").html("<p>主要產地 燕巢區、大社區、阿蓮區、內門區、岡山區<br>產期 全年</p>");
        $(".fruit_message_subtitle").html("<p>四季繁華</p>");
        $(".fruit_message_title").html("<p>芭樂</p>");

        $(".fruit_message_card_text").html("<p>產地以高雄市大社區、燕巢區等地最具代表性，全年均產。目前以燕巢的珍珠芭樂為主力品種，珍珠芭樂具有香味、果肉細緻、甜度上乘、脆度夠。有機會的話，不妨品嚐對比，會發現成長較快的夏季產物，比起冬春季所產，口感較為鬆軟且甜度較低，水分較多，冬春季因水分少、糖份易累積，滋味各有千秋。</p>");
        break;
      case "papa":
        $(".fruit_message_address").html("<p>主要產地  美濃區、旗山區、杉林區、六龜區<br>產期 全年</p>");
        $(".fruit_message_subtitle").html("<p>四季繁華</p>");
        $(".fruit_message_title").html("<p>木瓜</p>");

        $(".fruit_message_card_text").html("<p>木瓜為台灣相當大眾化的經濟水果，配合網室栽培可全年供果。果肉橙紅，甜度及營養價值高，健脾胃、助消化，向來是消費市場的寵兒。木瓜是高屏溪流域的特產，許多農會都有著自有品牌，比如旗山區農會的「紅晶果」、杉林區農會的「紅孩兒」、美濃區農會的「月光山」等。</p>");
        break;
      case "bana":
        $(".fruit_message_address").html("<p>主要產地 旗山區、美濃區、杉林區、內門區、大寮區<br>產期 全年</p>");
        $(".fruit_message_subtitle").html("<p>四季繁華</p>");
        $(".fruit_message_title").html("<p>香蕉</p>");

        $(".fruit_message_card_text").html("<p>台灣素有「香蕉王國」之稱，果皮成熟時呈黃色，果肉淡黃、細緻，最吸引消費者的是其獨特的濃郁香氣，且其營養豐富，具有飽腹感卻又只有半碗飯的熱量，「香甜的台灣香蕉」是日本市場的寵兒。旗山特別適合種植蕉類，自山上帶來的沖積土壤特別肥沃，讓香蕉產量特多，型體壯碩，其中又以溪洲河谷平原產的香蕉品質最佳。</p>");
        break;


      default:
        $(".fruit_message_card_text").html("<p>no</p>");
        break;


    }


    $(".fruit_message_sec1 img ").attr("src", `../../assets/images/page2_intro/${p_id}/${id}.png`);
    $(".fruit_message").removeClass('no_show');
  });



  $(".fruit_message_card_off ").click(function () {

    $(".fruit_message").addClass('no_show');
  });

  readOrder();//read order_fresh's data
  readOnSeasonOrder();



});



//計算page2 點點跑的位置

$(function () {
  $(window).scroll(function () {
    let scrollVal = $(this).scrollTop();
    let window_height = $(document).height()

    $(".intro_circle").css("top", "calc(" + (scrollVal) / window_height * (4122 / 3512) + " * 16.92vw + 0.54vw  )");

  });
});



function moveTo(name) {
  let offset = $(name).offset();
  let $body = $('html');
  $body.animate({
    scrollTop: offset.top
  }, 600);
}
$('.btn_intro_main').click(function (event) {
  moveTo("body");
});

$('.btn_spring').click(function (event) {
  moveTo('#spring');
});
$('.btn_summer').click(function (event) {
  moveTo('#summer');
});
$('.btn_fall').click(function (event) {
  moveTo('#fall');
});
$('.btn_winter').click(function (event) {
  moveTo('#winter');
});
$('.btn_allyear').click(function (event) {
  moveTo('#all_year');
});

$("#buy_fresh ").click(function () {
  window.location.assign("../buy_fresh.html");
});


$("#buy_onSeason ").click(function () {
  window.location.assign("../buy_onSeason.html");
});


//click price style
let click_count = 1;
let last_click_price = 0;

for (let price = 1000; price <= 3500; price += 500) {

  $(`#${price}`).click(function () {

    click_count++;
    if (click_count >= 2) {
      $(`#${last_click_price} .pick_f_main_circle`).css("background-color", "#f2f2f2");
      $(`#${last_click_price} .pick_f_main_circle`).css("border", "solid #000 1px");
      $(`#${last_click_price} .fresh_check`).css("opacity", "0");
      $(`#${last_click_price}`).removeClass("freash_checkPriceOutline");
      $(`#${price}`).addClass("freash_checkPriceOutline");
      $(`#${price} .fresh_check`).css("opacity", "1");
      $(`#${price} .pick_f_main_circle`).css("border", "none");
      $(`#${price} .pick_f_main_circle`).css("background-color", "#fdd000");
    }
    else {
      $(`#${price} .pick_f_main_circle`).css("background-color", "#fdd000");
      $(`#${price} .pick_f_main_circle`).css("border", "none");
      $(`#${price}`).addClass("freash_checkPriceOutline");
      $(`#${price} .fresh_check`).css("opacity", "1");
    }
    last_click_price = price;

  });

}


//click fruit style
let click_fruit_cout = 0;

for (let fruit_count = 1; fruit_count < 15; fruit_count++) {
  let click_fruit_bool = new Boolean(true);
  $(`.pic_card${fruit_count}`).click(function () {


    if (click_fruit_cout < 3 && click_fruit_bool) {
      $(`.pick_f_main_pick_pic${fruit_count}`).addClass("freash_checkFruiteOutline");
      $(`.pick_f_main_pick_pic_card .pick_check${fruit_count}`).css("display", "block");

      click_fruit_cout++;
      click_fruit_bool = false;

    }
    else if (!(click_fruit_bool)) {
      $(`.pick_f_main_pick_pic${fruit_count}`).removeClass("freash_checkFruiteOutline");
      $(`.pick_f_main_pick_pic_card .pick_check${fruit_count}`).css("display", "none");
      click_fruit_cout--;

      click_fruit_bool = true;

    }

  });
}


//click package style

let clickPackage_count = 1;
let lastPackage_click_price = 0;

for (let price = 1; price <= 3; price++) {

  $(`.pick_p_pic${price}`).click(function () {

    clickPackage_count++;
    if (clickPackage_count >= 2) {
      $(`.pick_p_pic${lastPackage_click_price}`).removeClass("freash_checkPackageOutline");
      $(`.pick_p_pic${price}`).addClass("freash_checkPackageOutline");
    }
    else {
      $(`.pick_p_pic${price}`).addClass("freash_checkPackageOutline");
    }
    lastPackage_click_price = price;

  });

}



// buy_fresh add data
$(".buy_fresh_submit").click(function () {
  set();
});

// buy_fresh add data start
let order_fresh_last = 0;//order_fresh's count
firebase
  .firestore().collection("order_fresh").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {

      order_fresh_last = 0;
      if (order_fresh_last < parseInt(doc.id.substring(5))) {
        order_fresh_last = 0;
        order_fresh_last = parseInt(doc.id.substring(5));
      }
    })
  });

function set() {
  firebase
    .firestore().collection("order_fresh").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        //console.log(doc);
       
        if (order_fresh_last < parseInt(doc.id.substring(5))) {
          order_fresh_last = 0;
          order_fresh_last = parseInt(doc.id.substring(5));
        }

      })
    });
  document.getElementById("buyfresh_remarks").defaultValue = "none";//set buyfresh_remarks default value

  if (click_count != 1 && click_fruit_cout === 3 && clickPackage_count != 1 && $("input[name='name']").val() && $("input[name='tel']").val() && $("input[name='email']").val() && $("input[name='address']").val()) {

    firebase
      .firestore()
      .collection("order_fresh").doc(`Order${order_fresh_last + 1}`)
      .set({

        Fruit1: $('.freash_checkFruiteOutline')[0].id,
        Fruit2: $('.freash_checkFruiteOutline')[1].id,
        Fruit3: $('.freash_checkFruiteOutline')[2].id,
        Price: $('.freash_checkPriceOutline').attr('id'),
        Package: $('.freash_checkPackageOutline').attr('id'),
        Name: $("input[name='name']").val(),
        TEL: $("input[name='tel']").val(),
        Email: $("input[name='email']").val(),
        Address: $("input[name='address']").val(),
        Remarks: $("input[name='remarks']").val(),
      });

    alert(`感謝您的購買，您的購買項目為：
水果種類：${$('.freash_checkFruiteOutline')[0].id}、${$('.freash_checkFruiteOutline')[1].id}、${$('.freash_checkFruiteOutline')[2].id}
價錢：${$('.freash_checkPriceOutline').attr('id')}
包裝：${$('.freash_checkPackageOutline').attr('id')}
*請重新整理切勿重複發單
`
);
   


  }
  else {
    alert("有東西漏填喔");
  }
}
// buy_fresh add data end


// buy_onSeason add data
$(".buy_onSeason_submit").click(function () {
  buy_onSeason_setData();
});



// buy_onSeason add data start

let order_onSeason_last = 0;//order_fresh's count
firebase
  .firestore().collection("order_onSeason").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {

      if (order_onSeason_last < parseInt(doc.id.substring(5))) {
        order_onSeason_last = 0;
        order_onSeason_last = parseInt(doc.id.substring(5));
      }
    })
  });



function buy_onSeason_setData() {

  firebase
    .firestore().collection("order_onSeason").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        //console.log(doc);
        order_onSeason_last = 0;
        if (order_onSeason_last < parseInt(doc.id.substring(5))) {
          order_onSeason_last = 0;
          order_onSeason_last = parseInt(doc.id.substring(5));
        }

      })
    });
  document.getElementById("buyOnSeason_remarks").defaultValue = "none";//set buyfresh_remarks default value
  count_buy_onSeason_pick();
  if (has_buy_count[0] && $('.freash_checkPackageOutline').attr('id') && $("input[name='onSeason_name']").val() && $("input[name='onSeason_tel']").val() && $("input[name='onSeason_email']").val() && $("input[name='onSeason_address']").val()) {
    firebase
      .firestore()
      .collection("order_onSeason").doc(`Order${order_onSeason_last + 1}`)
      .set({
        buy_list_count: has_buy_count,//quntity to buy
        buy_list_totalPrice: totalprice,//price
        buy_list_name: has_buy_name,// to be bought item's name
        package: $('.freash_checkPackageOutline').attr('id'),
        name: $("input[name='onSeason_name']").val(),
        TEL: $("input[name='onSeason_tel']").val(),
        Email: $("input[name='onSeason_email']").val(),
        Address: $("input[name='onSeason_address']").val(),
        Remarks: $("input[name='onSeason_remarks']").val(),


      });

    alert("感謝您的購買，您的購買項目為：\n" +
      has_buy_name +
      "\n總金額為：" + totalprice +
      "\n包裝：" + $('.freash_checkPackageOutline').attr('id')
      +"\n*請重新整理切勿重複發單"
      );



  }
  else {
    alert("您有東西漏填");
  }
}
// buy_onSeason add data end


//count buy_onSeason_pick_main start
let totalprice = 0;
let onSeason_price = [699, 559, 829, 579, 959, 629];
let has_buy_count = [];//amount fruits which is bought
let has_buy_name = [];//name which fruits is none zero 
let has_buy_price = [];//fruit's price 
function count_buy_onSeason_pick() {
  has_buy_count.length = 0//empty array avoid repeat value
  has_buy_name.length = 0//empty array avoid repeat value
  has_buy_price.length = 0//empty array avoid repeat value
  for (let index = 0; index < 6; index++) {

    if (onSeason_quantity_count[index] > 0) {
      has_buy_count.push(Number($(`#quantity_count_${index + 1} p`).text()));
      has_buy_name.push($(`.onSeason_pick_fruit${index + 1}`).attr('id'));
      has_buy_price.push(onSeason_price[index]);
      totalprice += onSeason_price[index] * Number($(`#quantity_count_${index + 1} p`).text());
    }

  }
  console.log(has_buy_count);
}





//count buy_onSeason_pick_main end

//read order_fresh data
let docs = []; //data array
let count = 0; //data quantity
let order_fresh_list = [];//data list array
function readOrder() {
  $(".order_fresh_main p").empty();
  firebase
    .firestore().collection("order_fresh").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        docs[count] = doc;//read firestore's data in array
        order_fresh_list[count] = parseInt(docs[count].id.substring(5));
        count++; //data quantity
      });
      for (let index = 0; index < count; index++) {

        $(".order_fresh_main").append(`
        <div id="order_card${order_fresh_list[index]}" class="order_card">
        <div class="order_sec1">
        <div class="order_card_name">訂購人姓名：${docs[index].data().Name}</div>
        <div class="order_card_tel">訂購人電話：${docs[index].data().TEL}</div>
        <div class="order_card_email">訂購人e-mail：${docs[index].data().Email}</div>
        <div class="order_card_address">訂購人住址：${docs[index].data().Address}</div>
        </div>
        
        <div class="order_sec2">
        <div class="order_card_fruit">所選水果：${docs[index].data().Fruit1}、${docs[index].data().Fruit2}、${docs[index].data().Fruit3}</div>
        <div class="order_card_package">所選包裝：${docs[index].data().Package}</div>
        <div class="order_card_price">總金額：${docs[index].data().Price}</div>
        <div class="order_card_remarks">備註：${docs[index].data().Remarks}</div>
        <input  type="button" value="完成訂單" class="order_card_delete" onclick="deltxt(${ order_fresh_list[index]})">
        </div>
        
    </div>
        
        `);
      }

    });
}



//read order_onSeason data
let onSeason_docs = []; //data array
let onSeason_count = 0; //data quantity
let order_onSeason_list = [];//data list array
function readOnSeasonOrder() {

  firebase
    .firestore().collection("order_onSeason").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        onSeason_docs[onSeason_count] = doc;//read firestore's data in array
        order_onSeason_list[onSeason_count] = parseInt(onSeason_docs[onSeason_count].id.substring(5));
        onSeason_count++; //data quantity
      });
      for (let index = 0; index < onSeason_count; index++) {

        $(".order_onSeason_main").append(`
        <div id="order_onSeason_card${order_onSeason_list[index]}" class="order_card">
        <div class="order_sec1">
        <div class="order_card_onSeason_name">訂購人姓名：${onSeason_docs[index].data().name}</div>
        <div class="order_card_onSeason_tel">訂購人電話：${onSeason_docs[index].data().TEL}</div>
        <div class="order_card_onSeason_email">訂購人e-mail：${onSeason_docs[index].data().Email}</div>
        <div class="order_card_onSeason_address">訂購人住址：${onSeason_docs[index].data().Address}</div>
        </div>
        
        <div class="order_sec2">
        <div class="order_card_onSeason_fruit">所選水果：${onSeason_docs[index].data().buy_list_name}</div>
        <div class="order_card_onSeason_count">水果數量：${onSeason_docs[index].data().buy_list_count}</div>
        <div class="order_card_onSeason_package">所選包裝：${onSeason_docs[index].data().package}</div>
        <div class="order_card_onSeason_price">總金額：${onSeason_docs[index].data().buy_list_totalPrice}</div>
        <div class="order_card_onSeason_remarks">備註：${onSeason_docs[index].data().Remarks}</div>
        <input  type="button" value="完成訂單" class="order_card_delete" onclick="deltxt_onSeason(${ order_onSeason_list[index]})">
        </div>
       
        
       
    </div>
        
        `);
      }

    });
}






//onSeason pick couter start
let onSeason_quantity_count = [];

//init onSeason_quantity_count 
for (let index = 0; index < 6; index++) {
  onSeason_quantity_count[index] = 0;
  $(`#quantity_count_${index + 1}`).html(`<p>${onSeason_quantity_count[index]}</p>`);
}

//onSeason_quantity_count add
for (let index = 0; index < 6; index++) {
  $(`#quantity_add_${index + 1}`).click(function () {
    onSeason_quantity_count[index]++;
    $(`#quantity_count_${index + 1}`).html(`<p>${onSeason_quantity_count[index]}</p>`);
  });
}

//onSeason_quantity_count minus

for (let index = 0; index < 6; index++) {
  $(`#quantity_minus_${index + 1}`).click(function () {

    if (onSeason_quantity_count[index] > 0) { //can't less then -1
      onSeason_quantity_count[index]--;
    }

    $(`#quantity_count_${index + 1}`).html(`<p>${onSeason_quantity_count[index]}</p>`);
  });
}

//onSeason pick couter end


window.deltxt = function (id) {
  $("#order_card" + id).remove();

  firebase
    .firestore().collection("order_fresh").doc("Order" + id).delete().then(function () {

      console.log("Document successfully deleted!");
    }).catch(function (error) {
      console.error("Error removing document: ", error);
    });




}


window.deltxt_onSeason = function (id) {
  $("#order_onSeason_card" + id).remove();

  firebase
    .firestore().collection("order_onSeason").doc("Order" + id).delete().then(function () {

      console.log("Document successfully deleted!");
    }).catch(function (error) {
      console.error("Error removing document: ", error);
    });




}




//const textEmail = $(".login_email").text();
//const password = $(".login_password").text();





$(".login_submit").click(function () { //login func
  const textEmail = $('#login_email').val();//get the email value
  const password = $('#login_password').val();//get the password value

  firebase.auth().signInWithEmailAndPassword(textEmail, password).catch(function (error) {
    alert("帳號或密碼輸入錯誤");//login failed
  });


  firebase.auth().onAuthStateChanged(firebaseUser => {//login success
    if (firebaseUser) {

      window.location.assign("./order.html");//load to order page

    }
    else {

      console.log("not logged in!");
    }
  })

});



window.init_login = function () { //detect if login when load to order.html page

  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      $(".official_sec").addClass("display_none");
      $(".order_sec").removeClass("display_none");

      console.log(" logged in!");

    }
    else {
      window.location.assign("./login.html");//load to login page if hasn't login
    }
  })


}


window.init_login_css = function () { //detect if login when load to order.html page

  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      $(".official_sec").addClass("display_none");
      $(".order_sec").removeClass("display_none");

      console.log(" logged in!");

    }
    else {
      $(".official_sec").removeClass("display_none");
      $(".order_sec").addClass("display_none");//load to login page if hasn't login
    }
  })


}




$(".signout").click(function () { //sign out
  $(".official_sec").css("display ", "grid");
  $(".order_sec").css("display ", "none");
  firebase.auth().signOut().then(function () {
    window.location.assign("./login.html");
  }).catch(function (error) {
    // An error happened.
  });

});



window.login_init = function () {
  alert("帳號：official_account@gmail.com \n密碼：2019/8/16");
}

