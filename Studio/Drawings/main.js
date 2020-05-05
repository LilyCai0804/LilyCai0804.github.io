var drawings = [
	{
		"name": "Jack",
    "color":"blue",
    "pics": "<img class='boy' src='images/boy.png'>",
		"left":"20px",
		"width":"80px",

	},
	{
		"name":"Alice",
    "color":"pink",
		"pics": "<img class='Alice' src='images/girl1.png'>",
	},
	{
		"name":"Bertha",
		"color":"pink",
		"pics": "<img class='Bertha' src='images/girl2.png'>",
	},
	{
		"name":"Cindy",
		"color":"pink",
		"pics": "<img class='girl3' src='images/girl3.png'>",
	},
	{
		"name":"Dana",
    "pics": "<img class='girl4' src='images/girl4.png'>",
		"color":"pink",
  },
  {
    "name":"Elsa",
    "pics": "<img class='girl5' src='images/girl5.png'>",
		"color":"pink",
  },
  {
    "name":"Fionna",
    "pics": "<img class='girl6' src='images/girl6.png'>",
		"color":"pink",
  },
  {
    "name":"Grace",
    "pics": "<img class='girl7' src='images/girl7.png'>",
		"color":"pink",
  },
  {
    "name":"Hannah",
    "pics": "<img class='girl8' src='images/girl8.png'>",
		"color":"pink",
  },
  {
    "name":"Iris",
    "pics": "<img class='girl9' src='images/girl9.png'>",
		"color":"pink",
  },
  {
    "name":"Jessie",
    "pics": "<img class='girl10' src='images/girl10.png'>",
		"color":"pink",
  },
  {
    "name":"Katherine",
    "pics": "<img class='girl11' src='images/girl11.png'>",
		"color":"pink",
  },
  {
    "name":"Lisa",
    "pics": "<img class='girl12' src='images/girl12.png'>",
		"color":"pink",
  },
  {
    "name":"Miranda",
    "pics": "<img class='girl13' src='images/girl13.png'>",
		"color":"pink",
  },
  {
    "name":"Nancy",
    "pics": "<img class='girl14' src='images/girl14.png'>",
		"color":"pink",
  },
	{
		"name":"Olivia",
		"pics": "<img class='girl15' src='images/girl15.png'>",
		"color":"pink",
	},
	{
		"name":"Penny",
		"pics": "<img class='girl16' src='images/girl16.png'>",
		"color":"pink",
	},
	{
		"name":"Queen",
		"pics": "<img class='girl13' src='images/girl17.png'>",
		"color":"pink",
	},
	{
		"name":"Ruby",
		"pics": "<img class='girl13' src='images/girl18.png'>",
		"color":"pink",
	},
	{
		"name":"Selina",
		"pics": "<img class='girl13' src='images/girl19.png'>",
		"color":"pink",
	},
	{
		"name":"Tina",
		"pics": "<img class='girl13' src='images/girl20.png'>",
		"color":"pink",
	},
	{
		"name":"Usha",
		"pics": "<img class='girl13' src='images/girl21.png'>",
		"color":"pink",
	},
	{
		"name":"Vivian",
		"pics": "<img class='girl13' src='images/girl22.png'>",
		"color":"pink",
	},
	{
		"name": "cake1",
		"color":"red",
		"pics": "<img class='cake1' src='images/cake1.png'>",
	},
	{
		"name":"cake2",
		"pics": "<img class='cake2' src='images/cake2.png'>",
		"color":"red",
	},
	{
		"name":"cake3",
		"pics": "<img class='cake3' src='images/cake3.png'>",
		"color":"red",
	}
]


for(var i=0; i<drawings.length; i++){
  var imageDiv = $('<div/>', {
      'class': 'image',
			id:drawings[i].name
    })
    .data('drawings', drawings[i])
    .html(drawings[i].pics)
	  .css({'width':"50px","left":drawings[i].pics})
     $('#images').append(imageDiv)
		 


  var buttonDiv = $('<button/>', {
      'class': 'button'
    })
    .data('drawings', drawings[i])
    .html(drawings[i].name)
    .css({'background-color': drawings[i].color})
    .click(function(){
    $( '#' + $(this).data('drawings').name).toggle();
    })
  $('#buttons').append(buttonDiv)
}
