$(document).ready(function(){



$(function() {
	$('#search-term').submit(function(event) { 
		event.preventDefault();
		var searchTerm = $('#query').val();
		getRequest(searchTerm);
		});
	});

$('#search').on('click', function() {
	$('#next-page').show();
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
	var nextPage = data.nextPageToken
	var prevPage = data.prevPageToken
	var query = 
		$('#next-page').on('click', function() {
			$('#listings').append('<a href="https://www.youtube.com/results?q=dogs&pageToken=' + nextPage + '"</a>');
		console.log(nextPage);
		console.log(prevPage);
	});

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

jQuery('a.listings').YouTubePopUp();

});

/*
var list = ""
		$.each(data.items, function(index, titles) {
			list += "<p>" + titles.snippet.title + "</p>";
			console.log(titles.snippet.title);
			console.log(titles.id.videoId);
			});
		$('#search-results').html(list);*/