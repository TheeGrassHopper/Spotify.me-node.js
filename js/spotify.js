// API Docs at: 
// https://developer.spotify.com/technologies/web-api/search/

// Album:
// 'http://ws.spotify.com/search/1/album.json?q=';
//var html = $("<li>" + data[searchParam]["items"][i]["name"] + "</li>”);
//$('#results').append(html);
// Artist:
// 'http://ws.spotify.com/search/1/artist.json?q=';

// Track:
// 'http://ws.spotify.com/search/1/track.json?q=';
$(document).ready(function(){
    $("#spotify-form").submit(function(event){
        event.preventDefault();

        function renderTrack (q){
            $("#results").prepend("<li>album:" + q.album.name + "</li><li>artist:" + q.artists[0].name + "</li>" + "</li><li>track:" + q.name + "</li>");
        } 
	    function getSpotifyData(spotifyDataType) {
		    $.ajax({
		        type: "get",
		        url: "http://api.spotify.com/v1/search",
		     // put search value into AJAX request params
		         data: {
		             q: $("#q").val(),
		             type: "track"
		        },
		        dataType: "json",
		        success: function(data, textStatus, jqXHR){
		 			// Append data from response to HTML
		 			var tracks = data.tracks.items;
		 			for (var i=0; i < tracks.length; i++){
		 				// Output each result
		 				// console.log(tracks[i]);}
		 				var track = tracks[i];
		 				renderTrack(track);
		 			// 	// var html = $("<li>" + tracksName + "</li>");	
			 		// 	// $("#results").prepend(html);
			 		// 	// test by an alert
			 		// 	alert("success!!");
			 		// 	console.log(data);
			 		}	
			 		console.log(data);
			 	},
		        error: function() {
		            alert("There was a problem loading the data!");
		        },
		        complete: function() {
		            // alert("Done Loading!");
		        }
	        });  
	    }    
	    getSpotifyData("album");      
	});	

});	





