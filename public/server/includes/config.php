<?php
set_time_limit(0);

header("Expires: Tue, 01 Jan 2000 00:00:00 GMT");
header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT");
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");
header('Clear-Site-Data: "cache", "cookies", "storage", "executionContexts"');

require(__DIR__.'/../classes/DotEnv.php');
$absolutePathToEnvFile = __DIR__ . '/../.env';
(new DotEnv($absolutePathToEnvFile))->load();

date_default_timezone_set(getenv('DEFAULT_TIMEZONE'));