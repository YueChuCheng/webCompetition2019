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



$(".title_logo").attr("src", title_logo);
$(".nav_logo").attr("src", nav_logo);

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

new ScrollMagic.Scene({
  triggerElement: '.lernus_main'
})
  .setClassToggle(".lernus_main", "showIn")
  .reverse(false)
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: '.lernus_main'
})
  .setClassToggle("footer", "showIn")
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
    $(".hm_circle").css("transform", " rotate(90deg)");
    $(".hm_circle").css("border", " solid #fff 1px");
    $(".hm_dot").css("background-color", " #fff ");
    $(".nav_main").css("animation", "nav_hm 0.5s linear forwards");
    $(".nav_btn").css("opacity", "1");
  }
  else {
    $(".hm_circle").css("transform", " rotate(0deg)");
    $(".hm_circle").css("border", " solid #000 1px");
    $(".hm_dot").css("background-color", " #000 ");
    $(".nav_main").css("animation", "nav_hm_back 0.5s linear forwards");
    $(".nav_btn").css("opacity", "0");
  }

});

$(document).ready(function () {
  $(window).resize(function () {
    var wdth = $(window).width();

    if (wdth > 480) {
      $(".nav_btn ").css("opacity", "1");
    }
    if (wdth <= 480 && hm_click % 2 === 1) {
      $(".nav_btn ").css("opacity", "1");
      $(".hm_circle").css("transform", " rotate(90deg)");
      $(".hm_circle").css("border", " solid #fff 1px");
      $(".hm_dot").css("background-color", " #fff ");
      $(".nav_main").css("animation", "nav_hm 0.5s linear forwards");
      $(".nav_btn").css("opacity", "1");
    }
    if (wdth <= 480 && hm_click % 2 === 0) {
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
        $(".fruit_message_card_text").html("<p>peach</p>");
        break;
      case "bean":
        $(".fruit_message_card_text").html("<p>bean</p>");
        break;
      case "red":
        $(".fruit_message_card_text").html("<p>red</p>");
        break;
      case "soure":
        $(".fruit_message_card_text").html("<p>soure</p>");
        break;

      //夏天
      case "mango":
        $(".fruit_message_card_text").html("<p>mango</p>");
        break;
      case "lich":
        $(".fruit_message_card_text").html("<p>lich</p>");
        break;
      case "ln":
        $(".fruit_message_card_text").html("<p>ln</p>");
        break;
      case "dragon":
        $(".fruit_message_card_text").html("<p>dragon</p>");
        break;
      case "rice":
        $(".fruit_message_card_text").html("<p>rice</p>");
        break;
      //秋天
      case "jade":
        $(".fruit_message_card_text").html("<p>jade</p>");
        break;
      case "tro":
        $(".fruit_message_card_text").html("<p>tro</p>");
        break;
      //冬天
      case "tomato":
        $(".fruit_message_card_text").html("<p>tomato</p>");
        break;
      case "onion":
        $(".fruit_message_card_text").html("<p>onion/p>");
        break;
      case "juju":
        $(".fruit_message_card_text").html("<p>juju/p>");
        break;
      case "wax":
        $(".fruit_message_card_text").html("<p>wax/p>");
        break;
      case "radish":
        $(".fruit_message_card_text").html("<p>radish</p>");
        break;

      default:
        $(".fruit_message_card_text").html("<p>no</p>");
        break;


    }

    $(".fruit_message_card img ").attr("src", `../../assets/images/page2_intro/${p_id}/${id}.png`);
    $(".fruit_message").removeClass('no_show');







  });


  $(".allyear_btn p").click(function () {
    let id = $(this).attr("id");
    let p_id = $(this).parent().parent(".allyear").attr("id");

    //選擇顯示語句
    switch (id) {

      //春天
      case "pine":
        $(".fruit_message_card_text").html("<p>pine</p>");
        break;
      case "gava":
        $(".fruit_message_card_text").html("<p>gava</p>");
        break;
      case "papa":
        $(".fruit_message_card_text").html("<p>papa</p>");
        break;
      case "bana":
        $(".fruit_message_card_text").html("<p>bana</p>");
        break;


      default:
        $(".fruit_message_card_text").html("<p>no</p>");
        break;


    }


    $(".fruit_message_card img ").attr("src", `../../assets/images/page2_intro/${p_id}/${id}.png`);
    $(".fruit_message").removeClass('no_show');
  });



  $(".fruit_message_card_off ").click(function () {

    $(".fruit_message").addClass('no_show');
  });





  readOrder();


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

  $(`#price${price}`).click(function () {

    click_count++;
    if (click_count >= 2) {
      $(`#price${last_click_price}`).removeClass("freash_checkPriceOutline");
      $(`#price${price}`).addClass("freash_checkPriceOutline");
    }
    else {
      $(`#price${price}`).addClass("freash_checkPriceOutline");
    }
    last_click_price = price;

  });

}


//click fruit style
let click_fruit_cout = 0;

for (let fruit_count = 1; fruit_count < 15; fruit_count++) {
  let click_fruit_time = 1;
  $(`.pick_f_main_pick_pic${fruit_count}`).click(function () {


    if (click_fruit_cout < 3 && click_fruit_time % 2) {
      $(`.pick_f_main_pick_pic${fruit_count}`).addClass("freash_checkFruiteOutline");
      click_fruit_cout++;
      click_fruit_time++;
    }
    else if (!(click_fruit_time % 2)) {
      $(`.pick_f_main_pick_pic${fruit_count}`).removeClass("freash_checkFruiteOutline");
      click_fruit_cout--;
      click_fruit_time++;
    }

  });
}



// add data
$(".buy_fresh_submit").click(function () {
  set();
  //console.log();
  //firebase
  //.firestore().collection("user").add({
  //  first: "Ada",
  //  last: "Lovelace",
  //  born: 1812
  //})
  //  .then(function (docRef) {
  //    console.log("Document written with ID: ", docRef.id);
  //  })
  //  .catch(function (error) {
  //    console.error("Error adding document: ", error);
  //  });


});









// add data
 function set() {
  
  firebase
    .firestore()
    .collection("order")
    .add({
      fruits:$('.freash_checkFruiteOutline').attr('id'),
      price:$('.freash_checkPriceOutline').attr('id'),
      name: $("input[name='name']").val(),
      TEL: $("input[name='tel']").val(),
      Email: $("input[name='email']").val(),
      Address: $("input[name='address']").val(),
      Remarks: $("input[name='remarks']").val(),


    });
}

//read data
let docs = []; //data array
let count = 0; //data quantity

function readOrder() {
  $("#test_firestore p").empty();
  firebase
    .firestore().collection("order").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        docs[count] = doc;//read firestore's data in array
        count++; //data quantity
        console.log(`${doc.id} => ${doc.data().name}`);
  
      });
      for (let index = 0; index < count; index++) {
        $(".test_firestore").append(`<p>${docs[index].id}</p>`);
      }
  
    });
}

