import $ from 'jquery';
import '../css/style.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../../node_modules/normalize.css/normalize.css";
import tree from"../images/tree.png";
import bgi from"../images/bg.png";

import cloud from "../images/cloud.png";


$(".main_pic").attr("src", bgi);

$(".cloud").attr("src", cloud);
$("#tree").attr("src", tree);