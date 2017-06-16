export default ({ markup, helmet }) => {
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
</head>
<body ${helmet.bodyAttributes.toString()}>
	<div id="root">${markup}</div>
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
