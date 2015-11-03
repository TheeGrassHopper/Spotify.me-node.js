// API Docs at: 
// https://developer.spotify.com/technologies/web-api/search/

// Album:
// 'http://ws.spotify.com/search/1/album.json?q=';

// Artist:
// 'http://ws.spotify.com/search/1/artist.json?q=';

// Track:
// 'http://ws.spotify.com/search/1/track.json?q=';
// on Document ready
$(document).ready(function() {
	// When form is summited and an event listener 
	// capture the form being submitted
	$("#spotify-form").submit(function(event) {
		//  Prevent form from reloading page
		event.preventDefault();
		//  Get the value from the search field
		var q = $("#q").val();
		var type = $("#type").val();
		// clear the previous search results if they exist
		$("#results").html('');

		if (type === "artist") {
			searchByArtist(q);
			} else {
				searchByTrack(q);
			}
	});
		
		function searchByTrack(q){

		 	$.ajax({
		 		type: "get",
		 		url: "https://api.spotify.com/v1/search?q=" + q + "&type=track",
		 		dataType: "json",
		 	// put search value into AJAX request params
		 		// on success
		 		success: function(data, textStatus, jqXHR){
		 			// Append data from response to HTML
		 			var tracks = data.tracks.items;


		 			for (var i=0; i < tracks.length; i++) {
		 				// Output each result
		 				// console.log(tracks[i]);
		 				var track = tracks[i];
		 				var trackName = track.name;
		 				var html = $("<li>" + trackName + "</li>");
		 			$("#results").prepend(html);
		 			// test by an alert
		 			// alert("success!!");
		 			// console.log(data);
		 			}
		 		},	
			 			// on error
			 		error: function(jqXHR, textStatus, error) {
		       			// Alert the user
		       			// alert(id);
		     			console.log(error);
		     		},

		     		complete: function() {
		        	alert("Done Loading!");
		      		}
		 	});	
		}

	 	// make AJAX request
	 	function searchByArtist(q) {
		 	$.ajax({
		 		type: "get",
		 		url: "https://api.spotify.com/v1/search?q=" + q + "&type=artist",
		 		dataType: "json",
		 	// put search value into AJAX request params
		 		// on success
		 		success: function(data, textStatus, jqXHR){
		 			// Append data from response to HTML
		 			var artists = data.artists.items;


		 			for (var i=0; i < artists.length; i++) {
		 				// Output each result
		 				// console.log(artists[i]);
		 				var artist = artists[i];
		 				var artistName = artist.name;
		 				var html = $("<li>" + artistName + "</li>");
		 			$("#results").prepend(html);
		 			// test by an alert
		 			// alert("success!!");
		 			// console.log(data);
		 			}
		 		},	
		 			// on error
		 		error: function(jqXHR, textStatus, error) {
	       			// Alert the user
	       			// alert(id);
	     			console.log(error);
	     		},
	     		complete: function() {
	        	alert("Done Loading!");
	      		}
		 	});	
		}	
	
});