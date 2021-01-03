if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', start);
} else {
	start();
}

function start() {
	'use strict';

	setInterval(()=>{
		Array.from(document.querySelectorAll('[data-testid="tweetPhoto"]')).forEach((v) => {

			v.style.position = 'static'
			v.style.margin = '0'
			const img = v.querySelector('img')
			img.style.position = 'static'
			v.parentElement.style.position = 'static'
			v.parentElement.parentElement.firstElementChild.style.padding = '0'
		}, 1000)
	})
}
