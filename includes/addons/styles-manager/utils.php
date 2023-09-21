<?php
/**
 * Utils.
 *
 * @package GutenberghubStylesManager
 */

/**
 * This function replaces the first occurrence of a search string within a subject string.
 *
 * @param string $search  The string to search for.
 * @param string $replace The string to replace the search string with.
 * @param string $subject The string in which to search and replace.
 *
 * @return string The subject string with the first occurrence of the search string replaced by the replace string.
 */
function gsm_str_replace_first( $search, $replace, $subject ) {
	// preg_quote is used to escape any regular expression meta-characters found within the search string.
	$search = '/' . preg_quote( $search, '/' ) . '/';

	// preg_replace is used to replace the first occurrence of the search string with the replace string within the subject string.
	return preg_replace( $search, $replace, $subject, 1 );
}
