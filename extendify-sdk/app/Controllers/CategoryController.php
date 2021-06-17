<?php
/**
 * Controls Categories
 */

namespace Extendify\ExtendifySdk\Controllers;

use Extendify\ExtendifySdk\Http;

if (!defined('ABSPATH')) {
    die('No direct access.');
}

/**
 * The controller for dealing with categories
 */
class CategoryController
{

    /**
     * Return all categories
     *
     * @return WP_REST_Response|WP_Error
     */
    public static function index()
    {
        $response = Http::get('/airtable-categories', []);
        return new \WP_REST_Response($response);
    }
}
