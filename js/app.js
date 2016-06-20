$(document).ready(function(){



$(function() {
	$('#search-term').submit(function(event) { 
		event.preventDefault();
		var searchTerm = $('#query').val();
		getRequest(searchTerm);
		});
	});

function getRequest (searchTerm) {
	var params = {
		part: 'snippet',
		key: 'AIzaSyA9EP9RSTFp1Waw9-9wGHtFlB2v2t8qJPY',
		maxResults: 20,
		q: searchTerm
	};
	url = 'https://www.googleapis.com/youtube/v3/search';

	$.getJSON(url, params, function(data) {
	
	console.log(data);
	console.log(data.items[0].snippet.title);
	
	$.each(data.items, function(index, listings) {
		var image = listings.snippet.thumbnails.medium.url
		var id = listings.id.videoId
		var title = listings.snippet.title
		var channel = listings.snippet.channelTitle
		$('#listings').append('<li><a href="https://www.youtube.com/watch?v=' + id + '" target="_blank"><h3>' + title + '</h3><img src="' + image + '" width="120" height="90"></a></li>');
		$('#listings').append('<li><a href="https://www.youtube.com/user/' + channel + '" target="_blank">' + channel + '</a></li>');
		$('#listings').css('list-style-type', 'none');
		console.log(channel);
		});
	});
}

});

/*
var list = ""
		$.each(data.items, function(index, titles) {
			list += "<p>" + titles.snippet.title + "</p>";
			console.log(titles.snippet.title);
			console.log(titles.id.videoId);
			});
		$('#search-results').html(list);*/