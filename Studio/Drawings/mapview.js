var monoGilrs = [
	{
		"name":"Cindy",
    "pics": "<img class='monoGilrs' src='images/girl1.png'>",
    "color":"pink",
	},
	{
		"name":"Sarah",
    "pics": "<img class='monoGilrs' src='images/girl2.png'>",
		"genre":"Pop",
	},
	{
		"name":"合谷",
    "pics": "<img class='monoGilrs' src='images/girl3.png'>",
		"genre":"Pop",
	},
	{
		"name":"少府",
    "pics": "<img class='monoGilrs' src='images/girl4.png'>",
		"genre":"Synth Pop",
  },
  {
    "name":"内关",
    "pics": "<img class='monoGilrs' src='images/girl5.png'>",
    "genre":"Synth Pop",
  },
  {
    "name":"风池",
    "pics": "<img class='monoGilrs' src='images/girl11.png'>",
    "genre":"Synth Pop",
  },
  {
    "name":"灵台",
    "pics": "<img class='monoGilrs' src='images/girl12.png'>",
    "genre":"Synth Pop",
  },
  {
    "name":"肝俞",
    "pics": "<img class='monoGilrs' src='images/girl13.png'>",
    "genre":"Synth Pop",
  },
  {
    "name":"大椎",
    "pics": "<img class='monoGilrs' src='images/girl14.png'>",
    "genre":"Synth Pop",
  },

  {
    "name":"大椎",
    "pics": "<img class='monoGilrs' src='images/girl18.png'>",
    "genre":"Synth Pop",
  },
  {
    "name":"大椎",
    "pics": "<img class='monoGilrs' src='images/girl20.png'>",
    "genre":"Synth Pop",
  }
]


for(var i=0; i<monoGilrs.length; i++){
  var monoGilrsDiv = $('<div/>', {
      'class': 'monoGilrs'
    })
    .data('monoGilrs', monoGilrs[i])
    .html(monoGilrs[i].pics)
     $('#monoGilrs').append(monoGilrsDiv);

}







var coloredGirls = [
	{
    "name":"涌泉",
    "pics": "<img class='coloredGirls' src='images/girl7.png'>",
    "genre":"Synth Pop",
  },
  {
    "name":"大敦",
    "pics": "<img class='coloredGirls' src='images/girl9.png'>",
    "genre":"Synth Pop",
  },
  {
    "name":"百会",
    "pics": "<img class='coloredGirls' src='images/girl10.png'>",
    "genre":"Synth Pop",
  },
	{
    "name":"神门",
    "pics": "<img class='coloredGirls' src='images/girl6.png'>",
    "genre":"Synth Pop",
  },
	{
		"name":"太动",
		"pics": "<img class='coloredGirls' src='images/girl8.png'>",
		"genre":"Synth Pop",
	},
	{
		"name":"大椎",
		"pics": "<img class='coloredGirls' src='images/girl15.png'>",
		"genre":"Synth Pop",
	},
	{
		"name":"大椎",
		"pics": "<img class='coloredGirls' src='images/girl16.png'>",
		"genre":"Synth Pop",
	},
	{
		"name":"大椎",
		"pics": "<img class='coloredGirls' src='images/girl17.png'>",
		"genre":"Synth Pop",
	},
	{
		"name":"大椎",
		"pics": "<img class='coloredGirls' src='images/girl21.png'>",
		"genre":"Synth Pop",
	},
	{
		"name":"大椎",
		"pics": "<img class='coloredGirls' src='images/girl22.png'>",
		"genre":"Synth Pop",
	},
	{
		"name":"大椎",
		"pics": "<img class='coloredGirls' src='images/girl23.png'>",
		"genre":"Synth Pop",
	}
]

for(var i=0; i<coloredGirls.length; i++){
  var coloredGirlsDiv = $('<div/>', {
      'class': 'coloredGirls'
    })
    .data('coloredGirls', coloredGirls[i])
    .html(coloredGirls[i].pics)
     $('#coloredGirls').append(coloredGirlsDiv);

}







var boy = [
{
	"name": "Jack",
	"color":"blue",
	"pics": "<img class='boy' src='images/boy.png'>",
},
]

for(var i=0; i<boy.length; i++){
  var boyDiv = $('<div/>', {
      'class': 'boy'
    })
    .data('boy', boy[i])
    .html(boy[i].pics)
     $('#boy').append(boyDiv);

}





var cakes = [
	{
		"name": "cake1",
    "color":"blue",
    "pics": "<img class='cakes' src='images/cake1.png'>",
	},
	{
		"name":"cake2",
    "pics": "<img class='cakes' src='images/cake2.png'>",
    "color":"pink",
	},
  {
		"name":"cake3",
    "pics": "<img class='cakes' src='images/cake3.png'>",
    "color":"pink",
	}
]

  for(var i=0; i<cakes.length; i++){
    var cakeDiv = $('<div/>', {
        'class': 'cakes'
      })
      .data('cakes', cakes[i])
      .html(cakes[i].pics)
       $('#cakes').append(cakeDiv);

  }







  var text = [
  	{
  		"name": "text1",
      "color":"blue",
      "pics": "<img class='text' src='images/text1.png'>",
  	},
  	{
  		"name":"text2",
      "pics": "<img class='text' src='images/text2.png'>",
      "color":"pink",
  	},
    {
  		"name":"text3",
      "pics": "<img class='text' src='images/text3.png'>",
      "color":"pink",
  	},
    {
      "name":"text4",
      "pics": "<img class='text' src='images/letter.png'>",
      "color":"pink",
    },
    {
      "name":"text5",
      "pics": "<img class='text' src='images/phone.png'>",
      "color":"pink",
    }
  ]

    for(var i=0; i<text.length; i++){
      var textDiv = $('<div/>', {
          'class': 'text'
        })
        .data('text', text[i])
        .html(text[i].pics)
         $('#text').append(textDiv);

    }






  var items = [
      	{
      		"name":"bow1",
          "pics": "<img class='items' src='images/bow1.png'>",
          "color":"pink",
      	},
        {
      		"name":"bow2",
          "pics": "<img class='items' src='images/bow2.png'>",
          "color":"pink",
      	},
        {
          "name":"shoes",
          "pics": "<img class='items' src='images/shoes.png'>",
          "color":"pink",
        },
        {
          "name":"toybear",
          "pics": "<img class='items' src='images/toybear.png'>",
          "color":"pink",
        },
        {
          "name":"cat",
          "pics": "<img class='items' src='images/cat.png'>",
          "color":"pink",
        },
        {
          "name":"carpet",
          "pics": "<img class='items' src='images/carpet.png'>",
          "color":"pink",
        },
        {
          "name":"deskchair",
          "pics": "<img class='items' src='images/deskchair.png'>",
          "color":"pink",
        },
        {
          "name":"closet",
          "pics": "<img class='items' src='images/closet.png'>",
          "color":"pink",
        },
        {
          "name":"window",
          "pics": "<img class='items' src='images/window.png'>",
          "color":"pink",
        },
        {
          "name":"lamp",
          "pics": "<img class='items' src='images/lamb.png'>",
          "color":"pink",
        }
            ]

        for(var i=0; i<items.length; i++){
          var itemDiv = $('<div/>', {
              'class': 'item'
            })
            .data('items', items[i])
            .html(items[i].pics)
             $('#items').append(itemDiv);
        }





var butterfly = [
				{
					"name": "butterfly1",
					"color":"blue",
					"pics": "<img class='items' src='images/butterfly1.png'>",
				},
			]

			for(var i=0; i<butterfly.length; i++){
				var butterflyDiv = $('<div/>', {
						'class': 'butterfly'
					})
					.data('butterfly', butterfly[i])
					.html(butterfly[i].pics)
					 $('#butterfly').append(butterflyDiv);
			}






  var cloud = [
          	{
          		"name": "cloud1",
              "color":"blue",
              "pics": "<img class='cloud' src='images/cloud1.png'>",
          	},
          	{
          		"name":"cloud2",
              "pics": "<img class='cloud' src='images/cloud2.png'>",
              "color":"pink",
          	}
          ]

            for(var i=0; i<cloud.length; i++){
              var cloudDiv = $('<div/>', {
                  'class': 'cloud'
                })
                .data('text', text[i])
                .html(cloud[i].pics)
                 $('#cloud').append(cloudDiv);

            }







var suns = [
              {
                "name":"sun2",
                "pics": "<img class='sun' src='images/sun2.png'>",
                "color":"pink",
              },
              {
                "name":"sun3",
                "pics": "<img class='sun' src='images/sun3.png'>",
                "color":"pink",
              },
              {
                "name":"sun4",
                "pics": "<img class='sun' src='images/sun4.png'>",
                "color":"pink",
              },
              {
                "name":"sun5",
                "pics": "<img class='sun' src='images/sun5.png'>",
                "color":"pink",
              },
              {
                "name":"sun6",
                "pics": "<img class='sun' src='images/sun6.png'>",
                "color":"pink",
              }
            ]

              for(var i=0; i<suns.length; i++){
                var sunsDiv = $('<div/>', {
                    'class': 'suns'
                  })
                  .data('suns', suns[i])
                  .html(suns[i].pics)
                   $('#suns').append(sunsDiv);

              }



              var outside = [
                {
                  "name": "house1",
                  "color":"blue",
                  "pics": "<img class='outside' src='images/house1.png'>",
                },
                {
                  "name":"house2",
                  "pics": "<img class='outside' src='images/house2.png'>",
                  "color":"pink",
                },
                {
                  "name":"house3",
                  "pics": "<img class='outside' src='images/house3.png'>",
                  "color":"pink",
                },
                {
                  "name":"wing",
                  "pics": "<img class='outside' src='images/wing.png'>",
                  "color":"pink",
                }
              ]

                for(var i=0; i<outside.length; i++){
                  var outsideDiv = $('<div/>', {
                      'class': 'outside'
                    })
                    .data('outside', outside[i])
                    .html(outside[i].pics)
                     $('#outside').append(outsideDiv);

                }







                var trees = [
                  {
                    "name": "tree1",
                    "color":"blue",
                    "pics": "<img class='tree' src='images/tree1.png'>",
                  },
                  {
                    "name":"tree2",
                    "pics": "<img class='tree' src='images/tree2.png'>",
                    "color":"pink",
                  },
                  {
                    "name":"tree3",
                    "pics": "<img class='tree' src='images/tree3.png'>",
                    "color":"pink",
                  },
									{
	                  "name":"grass",
	                  "pics": "<img class='outside' src='images/grass.png'>",
	                  "color":"pink",
	                }
                ]

                  for(var i=0; i<trees.length; i++){
                    var treesDiv = $('<div/>', {
                        'class': 'trees'
                      })
                      .data('trees', trees[i])
                      .html(trees[i].pics)
                       $('#trees').append(treesDiv);

                  }








var flowers = [
  {
  "name":"flower1",
  "pics": "<img class='flower' src='images/flower1.png'>",
  "color":"pink",
  },
  {
  "name":"flower2",
  "pics": "<img class='flower' src='images/flower2.png'>",
  "color":"pink",
  },
  {
  "name":"flower3",
  "pics": "<img class='flower' src='images/flower3.png'>",
  "color":"pink",
  }

]

for(var i=0; i<flowers.length; i++){
  var flowersDiv = $('<div/>', {
  'class': 'flowers'
   })
   .data('flowers', flowers[i])
   .html(flowers[i].pics)
    $('#flowers').append(flowersDiv);

  }





	var singleflowers = [
	  {
	  "name":"flower10",
	  "pics": "<img class='flower' src='images/flower10.png'>",
	  "color":"pink",
	  },
	  {
	  "name":"flower13",
	  "pics": "<img class='flower' src='images/flower13.png'>",
	  "color":"pink",
	  },
	]

	for(var i=0; i<singleflowers.length; i++){
	  var singleflowersDiv = $('<div/>', {
	  'class': 'singleflowers'
	   })
	   .data('singleflowers', singleflowers[i])
	   .html(singleflowers[i].pics)
	    $('#singleflowers').append(singleflowersDiv);

	  }







	var plottedflowers = [
		{
	  "name":"flower4",
	  "pics": "<img class='flower' src='images/flower4.png'>",
	  "color":"pink",
	  },
		{
	   "name": "flower6",
	   "color":"blue",
	   "pics": "<img class='flower' src='images/flower6.png'>",
	  },
	  {
	   "name": "flower7",
	   "color":"blue",
	   "pics": "<img class='flower' src='images/flower7.png'>",
	  },
	  {
	   "name": "flower8",
	   "color":"blue",
	   "pics": "<img class='flower' src='images/flower8.png'>",
	  },
	  {
	   "name": "flower9",
	   "color":"blue",
	   "pics": "<img class='flower' src='images/flower9.png'>",
	  },
		{
	   "name": "flower11",
	   "color":"blue",
	   "pics": "<img class='flower' src='images/flower11.png'>",
  	},
	  {
	   "name": "flower12",
	   "color":"blue",
	   "pics": "<img class='flower' src='images/flower12.png'>",
  	},

	]

	for(var i=0; i<plottedflowers.length; i++){
	  var plottedflowersDiv = $('<div/>', {
	  'class': 'plottedflowers'
	   })
	   .data('plottedflowers', plottedflowers[i])
	   .html(plottedflowers[i].pics)
	    $('#plottedflowers').append(plottedflowersDiv);

	  }








	//Make the DIV element draggagle:
	dragElement(document.getElementById("monoGilrs"));

	dragElement(document.getElementById("coloredGirls"));

	dragElement(document.getElementById("boy"));

	dragElement(document.getElementById("cakes"));

	dragElement(document.getElementById("text"));

	dragElement(document.getElementById("items"));

	dragElement(document.getElementById("cloud"));

	dragElement(document.getElementById("suns"));

	dragElement(document.getElementById("outside"));

	dragElement(document.getElementById("trees"));

	dragElement(document.getElementById("flowers"));

	dragElement(document.getElementById("plottedflowers"));

	dragElement(document.getElementById("singleflowers"));

	dragElement(document.getElementById("butterfly"));



	function dragElement(elmnt) {
	  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	  if (document.getElementById(elmnt.id)) {
	    /* if present, the header is where you move the DIV from:*/
	    document.getElementById(elmnt.id).onmousedown = dragMouseDown;
	  } else {
	    /* otherwise, move the DIV from anywhere inside the DIV:*/
	    elmnt.onmousedown = dragMouseDown;
	  }

	  function dragMouseDown(e) {
	    e = e || window.event;
	    e.preventDefault();
	    // get the mouse cursor position at startup:
	    pos3 = e.clientX;
	    pos4 = e.clientY;
	    document.onmouseup = closeDragElement;
	    // call a function whenever the cursor moves:
	    document.onmousemove = elementDrag;
	  }

	  function elementDrag(e) {
	    e = e || window.event;
	    e.preventDefault();
	    // calculate the new cursor position:
	    pos1 = pos3 - e.clientX;
	    pos2 = pos4 - e.clientY;
	    pos3 = e.clientX;
	    pos4 = e.clientY;
	    // set the element's new position:
	    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
	    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
	  }

	  function closeDragElement() {
	    /* stop moving when mouse button is released:*/
	    document.onmouseup = null;
	    document.onmousemove = null;
	  }
	}




	function randomHero() {
	  var heroPics = ['images/sky.jpg', 'images/snow.jpg', 'images/grass.jpeg','images/sand.jpg'];

	  $('body').css({
	    'background': 'url(' + heroPics[Math.floor(Math.random() * heroPics.length)] + ') no-repeat',
	    'background-attachment': 'scroll',
	    'background-size': '1750px'

	  });
	}

	randomHero();

	$('button').on('click', randomHero);
