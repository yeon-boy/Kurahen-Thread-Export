(function () {
	'use strict';

	var posts = document.querySelectorAll('.postContainer');
	var postsArray = [];
	for (var i = 0; i < posts.length; i++) {
		var img = posts[i].querySelector('.file img');
		var email = posts[i].querySelector('.useremail');
		var subject = posts[i].querySelector('.subject');
		var postMessage = posts[i].querySelector('.postMessage');

		var backlinks = postMessage.getElementsByClassName('backlink');
		if (backlinks.length > 0) {
			postMessage.removeChild(backlinks[0]);
		}

		var post = {
			id: parseInt(posts[i].querySelector('.quotePost').textContent),
			date: posts[i].querySelector('.dateTime').textContent,
			email: (email !== null ? email.href.substr(7) : null),
			subject: (subject !== null ? subject.textContent : null),
			imageUrl: (img !== null ? img.src.replace('/thumb/', '/') : null),
			content: postMessage.innerText
		};
		postsArray.push(post);
	}
	
	console.log(JSON.stringify(postsArray));
})();
