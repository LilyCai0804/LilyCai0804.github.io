$(document).ready(function() {


  var myVar = setInterval(myTimer0, 1000);

  function myTimer0() {
    $('h2').css({"font-family": "Ranchers"})
    $('h2').css({"color": "blue"})
    $('h2').css({"background-color": "none"})
    $('h2').css({"text-align": "center"})
    $('h2').css({"text-transform": "uppercase"})
    $('h2').css({"padding-top": "5px"})
    $('h2').css({"padding-bottom": "5px"})
    $('h2').css({"text-shadow": "0px 0px 10px lime" })
    $('h2').css({"letter-spacing": "7px" })
    $('h2').css({"animation": ".5s shake infinite alternate" })


    $("hr").remove();

    $('span.a-truncate-cut').css({"font-family": "serif"})
    $('span.a-truncate-cut').css({"font-weight": "bold"})
    $('span.a-truncate-cut').css({"font-size": "16px"})
    $('span.a-truncate-cut').css({"width": "150px"})


    $('span.a-size-base.a-color-price.kepler-widget-price').css({"font-family": "Ranchers"})


  $('span.nav-a-content').css({"font-size": "30px"})

  $('#nav-subnav.ufg').css({"background": "#44dd2f" })
  $('#nav-subnav.ufg').css({"height": "160px" })
  $('span.nav-a-content').css({"font-family": "Ranchers"})
  $('span.nav-a-content').css({"color": "red"})


  $('span.a-size-mini.kepler-widget-highlight.aok-inline-block').css({"background-color": "red" })
  $('span.a-size-mini.kepler-widget-highlight.aok-inline-block').css({"padding": "5px 10px 5px " })
  $('span.a-size-mini.kepler-widget-highlight.aok-inline-block').css({"transform": "rotate(-7.5deg)" })
  $('span.a-size-mini.kepler-widget-highlight.aok-inline-block').css({"left": "80px" })
  $('span.a-size-mini.kepler-widget-highlight.aok-inline-block').css({"top": "-15px" })

  $('span.a-size-mini').css({"font-family": "Ranchers" })
  $('span.a-size-mini').css({"color": "#00ffff" })
  $('span.a-size-mini').css({"text-shadow": "  0 0 2px black, 2px 2px 0px black" })
  $('span.a-size-mini').css({"position": "relative" })
  $('span.a-size-mini').css({"right": "50px" })


  $('.alm-storefront-container-desktop').css({"backgroundColor":"#87fa36"})

  $('.alm-storefront-outside-desktop').css({"backgroundImage":"url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585458204253&di=de029a1a62a09f55ad0cd45c559b6f2a&imgtype=0&src=http%3A%2F%2Fpic9.nipic.com%2F20100902%2F5606403_173941742031_2.jpg)"})

  $('.nav-template.nav-flyout-content').css({"background" : "#c2f641"})
  $('.nav-flyout').css({"padding" : "10px"})
  $('.nav-flyout').css({"background" : "#c2f641"})


  $('.generic-subnav-flyout-title').css({"font-family": "serif"})
  $('.generic-subnav-flyout-title').css({"font-size": "25px"})



}



$('#nav-subnav.ufg').append(" <b>amazon.com/wholefoods</b>.");



$("#tcg-left img").remove()
var img = document.createElement("img");
img.src = chrome.extension.getURL("images/left.png");

$("#tcg-left").append(img);
img.className = "biggest";
$(".biggest").wrap("<a href='https://www.amazon.com/fmc/m/20190070/ref=s9_acss_ot_cg_fakeref_1a1_w/ref=cg_fakeref_1a1_w/ref=cg_x_1a1_w/ref=cg_WF000002_1a1_w?almBrandId=VUZHIFdob2xlIEZvb2Rz&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=alm-storefront-desktop-tcg-1&pf_rd_r=FXPF4833VHS82GSDN2WW&pf_rd_t=0&pf_rd_p=0eaf0e6f-f5ab-4e32-8084-c872878eeb17&pf_rd_i=FMCDummyValue'>")
$(".biggest").css({"height" : "290px"})
$(".biggest").css({"width" : "900px"})
$(".biggest").css({"position" : "relative"})
$(".biggest").css({"top" : "-20px"})



$(".bxc-grid__image.bxc-grid__image--light img").remove()
var img = document.createElement("img");
img.src = chrome.extension.getURL("images/righttop.png");

$("#tcg-right-top").append(img);
img.className = "righttop";
$(".righttop").wrap("<a href='https://blog.aboutamazon.com/company-news/how-amazon-is-helping-customers-get-groceries'>")
$(".righttop").css({"position" : "relative"})
$(".righttop").css({"top" : "-20px"})
$(".righttop").css({"left" : "-5px"})
$(".righttop").css({"height" : "130px"})
$(".righttop").css({"width" : "400px"})




$(".bxc-grid__image.bxc-grid__image--light img").remove()
var img = document.createElement("img");
img.src = chrome.extension.getURL("images/rightbottom.png");

$("#tcg-right-bottom").append(img);
img.className = "rightbottom";
$(".rightbottom").wrap("<a href='https://www.amazon.com/fmc/findastore/ref=sn_gfs_co_fresh-grocery-subnav_Fas_1/ref=cg_WF000005_1a1_w?_encoding=UTF8&almBrandId=VUZHIFdob2xlIEZvb2Rz&pf_rd_p=fd28f490-369a-443a-8074-8b09110d9cbe&pf_rd_r=6XQ23E62D1428QEV30BK&pf_rd_s=wfm-subnav-desktop-content-7&pf_rd_t=SubnavFlyout&ref=wf_mwb_mm_fas&showStoreLocator=true&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=alm-storefront-desktop-tcg-3&pf_rd_r=FXPF4833VHS82GSDN2WW&pf_rd_t=0&pf_rd_p=174b28db-6213-4a93-8a1e-60fd22e6683c&pf_rd_i=FMCDummyValue'>")
$(".rightbottom").css({"position" : "relative"})
$(".rightbottom").css({"top" : "-20px"})
$(".rightbottom").css({"left" : "-5px"})
$(".rightbottom").css({"height" : "100px"})
$(".rightbottom").css({"width" : "460px"})








  var div = document.createElement("div");
  document.body.appendChild(div);
  div.textContent = 'Inventory and delivery may be temporarily unavailable due to increased demand. Confirm availability at checkout.';
  div.className = "fixedDiv";
  div.style.position="fixed";
  div.style.width = '200px';
  div.style.height = '260px';
  div.style.backgroundColor = 'red';
  div.style.right = '5px';
  div.style.bottom = '100px';
  div.style.fontSize = '25px';
  div.style.fontFamily = 'Ranchers';
  div.style.color = 'white';
  div.style.textShadow= '1px 1px black';
  div.style.lineHeight = '110%';
  div.style.zIndex = '2';
  div.style.padding='13px 10px '








$('body').css({"background-color" : "#c2f641"})



var myVar = setInterval(myTimer1, 1000);

function myTimer1() {
  document.getElementById('MeatSeafood').style.backgroundColor="yellow";
  document.getElementById('MeatSeafood').style.minHeight="200px";

}


var myVar = setInterval(myTimer2, 1000);

function myTimer2() {
  $('li.a-carousel-card').css({"margin-left": "3px"})
}


var myVar = setInterval(myTimer3, 1000);

function myTimer3() {
  $('li.a-carousel-card').css({"visibility": "visible"})
}


var myVar = setInterval(myTimer4, 1000);

function myTimer4() {
  $('ol.a-carousel').css({"width": "3500px"})
}



var myVar = setInterval(myTimer5, 1000);

function myTimer5() {
  document.getElementById('Beverages').style.backgroundColor="aqua";
}


var myVar = setInterval(myTimer6, 1000);

function myTimer6() {
  document.getElementById('09d7e1bb-fb94-49c4-9231-5f7140de9cda-p13n-alm-atf_AlmPNYATFWFM_16310211').style.backgroundColor="yellow";

}


var myVar = setInterval(myTimer7, 1000);

function myTimer7() {
  document.getElementById('99dff7be-2cee-4769-b517-30f4e95ffc24').style.backgroundColor="yellow";
}


var myVar = setInterval(myTimer8, 1000);

function myTimer8() {
  document.getElementById('6d2f812a-3a31-46fd-87d3-b47ae45158e4-p13n-alm-wfm-gateway-desktop_AlmRegionalTrendingItems').style.backgroundColor="aqua";
}


var myVar = setInterval(myTimer9, 1000);

function myTimer9() {
  document.getElementById('c79567c1-d1bc-4c01-a30c-8d908d9a827e').style.backgroundColor="yellow";

}


var myVar = setInterval(myTimer10, 1000);

function myTimer10() {
  document.getElementById('Produce').style.backgroundColor="#c2f641";
}


var myVar = setInterval(myTimer11, 1000);

function myTimer11() {
  document.getElementById('FrozenFood').style.backgroundColor="#c2f641";
}


var myVar = setInterval(myTimer12, 1000);

function myTimer12() {
  document.getElementById('DeliPreparedFoods').style.backgroundColor="yellow";

}


var myVar = setInterval(myTimer13, 1000);

function myTimer13() {
  document.getElementById('Household').style.backgroundColor="#c2f641";
}


var myVar = setInterval(myTimer14, 1000);

function myTimer14() {
  document.getElementById('e2767de8-ab83-4bf6-b4e7-88ba69bd7aed').style.backgroundColor="aqua";
}





})


$('p').css({"font-family": "serif"})
$('p').css({"font-size": "25px"})

$('body').css({"font-size": "20px"})
$('body').css({"font-family": "serif"})

$('table').css({"margin-bottome": "0px"})
$('p.tiny').css({"font-size": "30px"})
$('p.tiny').css({"color": "red"})
$('p.tiny').css({"font-family": "Ranchers"})
$('p.tiny').css({"line-height": "40px"})

$('span.a-size-large').css({"font-family": "Ranchers"})
$('span.a-size-large').css({"color": "red"})

$('span.a-size-base.a-color-base').css({"font-family": "Ranchers"})


$('.a-box').css({"background-color": "aqua"})
