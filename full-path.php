<html>
<title>UK Hosting : Full path</title>
<head><style type="text/css">
body, td, th {
	font-family: Verdana, Geneva, sans-serif;
	color: #000;
	text-align: center;
}
</style></head>
<body>

<p><img src="http://squirrelhosting.co.uk/uk-hosting.gif" alt="UK Hosting" width="266" height="119"></p>
<p>This file has now found your full path. This can be used when installing scripts. </p>
<p>
  <?php
$dir = dirname(__FILE__);
echo "<p>The full path to this file is:<br>
<b>" . $dir . "</b></p>";
echo "<p>So if you had a file called testing.php the full path (including the file name) would be:<br>
<b>" . $dir . "/testing.php" . "</b></p>";
?>
</p>
<p>This script was provided free by <a href="http://squirrelhosting.co.uk"><strong>Squirrel Web Hosting</strong></a></p>
</body>
</html>