var points = [
	{
		"name": "承泣",
		"English":"Chengqi",
		"genre":"R&B",
	},
	{
		"name":"太阳",
    "English":"Taiyang",
		"genre":"Pop",
	},
	{
		"name":"劳宫",
    "English":"Laogong",
		"genre":"Pop",
	},
	{
		"name":"合谷",
    "English":"Hegu",
		"genre":"Pop",
	},
	{
		"name":"少府",
    "English":"Shaofu",
		"genre":"Synth Pop",
  },
  {
    "name":"内关",
    "English":"Neiguan",
    "genre":"Synth Pop",
  },
  {
    "name":"神门",
    "English":"Shenmen",
    "genre":"Synth Pop",
  },
  {
    "name":"涌泉",
    "English":"Yongquan",
    "genre":"Synth Pop",
  },
  {
    "name":"太动",
    "English":"Taidong",
    "genre":"Synth Pop",
  },
  {
    "name":"大敦",
    "English":"dadun",
    "genre":"Synth Pop",
  },
  {
    "name":"百会",
    "English":"Baihui",
    "genre":"Synth Pop",
  },
  {
    "name":"风池",
    "English":"Fengchi",
    "genre":"Synth Pop",
  },
  {
    "name":"灵台",
    "English":"Lingtai",
    "genre":"Synth Pop",
  },
  {
    "name":"肝俞",
    "English":"Ganyu",
    "genre":"Synth Pop",
  },
  {
    "name":"大椎",
    "English":"Dazhui",
    "genre":"Synth Pop",
  }
]






points.forEach(function(points){
$("#song").append("<div class=name>"+ points.name+ "</div>"+ "<div class=English>"+points.English+"</div>")
})


$(".name").mouseover(function() {
                    $(".English").css({"color": "red"});
});
