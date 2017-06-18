export default ({ markup, helmet, css }) => {
  return `<!doctype html>
<html ${helmet.htmlAttributes.toString()}>
<head>
	${helmet.title.toString()}
	${helmet.meta.toString()}
	${helmet.link.toString()}
	<link href="https://fonts.googleapis.com/css?family=Anton|Fjalla+One|Caesar+Dressing" rel="stylesheet">
	<title>Khang Lu 🐶 - Front End Developer - React - JavaScript</title>
	<style type="text/css">
		#loader {
			z-index: 998;
			background-color: #c75757;
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
		#loader-logo {
			fill: #eee;
			height: 6em;
			position: fixed;
			top: calc(50vh - 4em);
			left: calc(50vw - 3em);
			z-index: 999;
		}
		body {
			margin: 0;
			-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
		}
	</style>
	${css}
</head>
<body ${helmet.bodyAttributes.toString()}>
	<div id="loader">
		<svg id="loader-logo" viewBox="0 0 506.83 506.45">
			<path d="M257.09,510C117.84,512,1.09,394.09,3.62,252.34,6.08,114.56,122.3.71,262.42,3.63c137,2.85,251,118.47,247.94,259C507.34,399.5,392.94,511.88,257.09,510ZM217.16,255.56c1.37-32.77,2.27-65.58,4.28-98.31,1.54-25,1.93-50.22,12.49-73.91,5-11.12-1.07-20.3-13.21-22.19-11.95-1.87-24-1.08-35.78,1.14-7.14,1.34-11.63,6.1-13.81,13-1.62,5.16-1.83,10.53-1.82,15.82,0,41.81-1.4,83.58-3,125.34-1.2,30.45-2.27,60.9-3.42,91.34-1.45,38.27-2.56,76.55-2.54,114.86,0,2.57.12,4.81,2.59,6.54,6.57,4.61,13.29,8.87,21.09,11.16,8.27,2.43,16.1,1.72,23.51-2.88,4.46-2.77,6.86-6.48,6.78-11.92-0.16-11,0-22,0-33,0-13.52,0-13.42,13.46-14.42,3-.23,4.53.81,5.83,3.37a119.42,119.42,0,0,0,14.76,22.53c9.33,11.2,20.75,19.17,35,22.65,18.83,4.59,37.25,4.06,55.17-4.13,16.32-7.47,31.66-16.42,44.51-29.12,6-5.92,11-12.6,12-21.35,0.38-3.28.5-6.44-3.24-8.63s-6.81-3.93-11.28-1.17c-9.84,6-18.76,13.25-27.72,20.45-9.53,7.66-20.11,13-32.34,14.72-14.64,2.1-23.66-3-29.25-16.63-2.1-5.12-3.07-10.53-4.19-15.91-0.78-3.75.35-5.89,3.87-7.39a64.33,64.33,0,0,0,8.71-4.87c23.08-14.44,38.36-33.73,38.87-62.3,0.79-44.25-40.8-78-84-68.13-6,1.38-11.05,4-15.06,9-6.65,8.33-13.48,16.52-19.43,25.39-0.59.87-.79,2.3-2.81,2.19C217.15,257.74,217.11,256.65,217.16,255.56Zm-1.88,126.69v45.51h0.48V382.25h-0.48Zm69-112.28c-0.69-4.55-.65-9.93-5.85-11.82-5-1.83-8.35,2.41-11.73,5.15-19.52,15.81-30.41,37.44-40.18,59.85-1.81,4.16-.65,6.7,2.64,9.35,12.45,10,31.44,6.81,41.74-7.47,10-13.86,13.49-29.81,14-47.49C284.8,275.59,284.74,272.75,284.32,270Z" transform="translate(-3.58 -3.57)"/>
		</svg>
	</div>
	<div id="root">
		<div>
			${markup}
		</div>
	</div>
	<script src="/static/client.js" async></script>
	<script type="text/javascript">
		// Remove loader when page finish
		window.onload = function() {
			document.getElementById('loader').remove()
		};
	</script>
</body>
</html>`;
};
