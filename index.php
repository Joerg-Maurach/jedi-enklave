<!DOCTYPE html>
<html>
<head>
  <link rel="icon" type="image/png" href="/favicon.png">
  <link rel="stylesheet" type="text/css" href="styles.css">
  <link rel="stylesheet" type="text/css" href="menu.css">
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
  <div id="sidebar">
    <?php include 'menu.php'; ?>
  </div>
  <h1>Willkommen in der Jedi-Enklave!</h1>
  <h2>Verzeichnisse</h2>
  <div id="directory-list">
	<?php
	function listDirectories($directory, $level = 0) {
	  $directories = array_filter(glob($directory . '/*'), 'is_dir');
	  foreach ($directories as $subdirectory) {
		$subdirectoryName = basename($subdirectory);
		if ($level == 0 && $subdirectoryName == "box-breathing") {
		  continue;
		}
		echo "<li class=\"level-$level\"><a href=\"$subdirectory\">$subdirectoryName</a></li>";
		listDirectories($subdirectory, $level + 1);
	  }
	}
	echo "<ul>";
	listDirectories(".");
	echo "</ul>";
	?>
  </div>
  <div id="footer"></div>
  <script src="script.js"></script>
</body>
</html>
