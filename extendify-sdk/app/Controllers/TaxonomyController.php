<?php
/**
 * Controls Taxonomies
 */

namespace Extendify\ExtendifySdk\Controllers;

use Extendify\ExtendifySdk\Http;

if (!defined('ABSPATH')) {
    die('No direct access.');
}

/**
 * The controller for dealing with taxonomies
 */
class TaxonomyController
{
    /**
     * Return all taxonomies
     *
     * @return WP_REST_Response|WP_Error
     */
    public static function index()
    {
        $response = Http::get('/airtable-taxonomies-simple', []);
        return new \WP_REST_Response($response);
    }
}
