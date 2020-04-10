var songs = [
	{
		"name": "Save Your Tears",
		"artist":"The Weeknd",
		"genre":"R&B",
	},
	{
		"name":"Go to Town",
		"artist":"Doja Cat",
		"genre":"Pop",
	},
	{
		"name":"If the World Was Ending",
		"artist":"JP Saxe",
		"genre":"Pop",
	},
	{
		"name":"Supa Lonely",
		"artist":"Benee",
		"genre":"Pop",
	},
	{
		"name":"Somebody Else",
		"artist":"1975",
		"genre":"Synth Pop",
	}
]





songs.forEach(function(songs){
$("#song").append("<div class=name>"+ songs.name+ "</div>"+ "<div class=artist>"+songs.artist+"</div>")
})


$(".name").mouseover(function() {
                    $(".artist").css({"color": "white"});
});
