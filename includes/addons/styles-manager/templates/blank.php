<?php

/**
 * Template Name: Blank
 *
 * @package GutenberghubStylesManager
 */

?>

<?php wp_head(); ?>

<div style="max-width:50%; margin: auto; display: grid; align-items:center; height:100vh;">
	<?php
	the_content()
	?>
</div>

<?php wp_footer(); ?>
