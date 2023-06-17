<!DOCTYPE html>
<html>
<head>
  <link rel="icon" type="image/png" href="/favicon.png">
  <link rel="stylesheet" type="text/css" href="styles.css">
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
  <h1>Willkommen in der Jedi-Enklave!</h1>
  <h2>Verzeichnisse</h2>
  <div id="directory-list">
	<ul>
	<?php
    function listDirectories($directory, $level = 0) {
      $directories = array_filter(glob($directory . '/*'), 'is_dir');
      foreach ($directories as $subdirectory) {
        $subdirectoryName = basename($subdirectory);
        echo "<li class=\"level-$level\">$indentation<a href=\"$subdirectory\">$subdirectoryName</a></li>";
        listDirectories($subdirectory, $level + 1);
      }
    }

    listDirectories(".");
    ?>
	</ul>
  <div id="footer"></div>
  <script src="script.js"></script>
</body>
</html>
