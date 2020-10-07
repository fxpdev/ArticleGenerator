<?php
	// make sure the proxy can be accessed from anywhere
	header("Access-Control-Allow-Origin: *");

	$url = $_GET['url'];

	$https_prefix = "https://";
	$https_length = strlen($https_prefix);

	// allows only https requests to be made
	if (filter_var($url, FILTER_VALIDATE_URL) && substr($url, 0, $https_length) === $https_prefix) {
		$contents = file_get_contents($url);
		echo $contents;
	} else {
		echo "malformed url entered, bad request";
	}