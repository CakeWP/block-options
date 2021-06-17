<?php
/**
 * Controls Http requests
 */

namespace Extendify\ExtendifySdk\Controllers;

use Extendify\ExtendifySdk\Http;

if (!defined('ABSPATH')) {
    die('No direct access.');
}

/**
 * The controller for dealing with categories
 */
class TemplateController
{

    /**
     * Return info about a template
     *
     * @param \WP_REST_Request $request - The request.
     * @return WP_REST_Response|WP_Error
     */
    public static function index($request)
    {
        $response = Http::post('/airtable-data', $request->get_params());
        return new \WP_REST_Response($response);
    }

    /**
     * Return info about a template
     *
     * @param \WP_REST_Request $request - The request.
     * @return WP_REST_Response|WP_Error
     */
    public static function single($request)
    {
        $response = Http::post('/airtable-data', $request->get_params());
        return new \WP_REST_Response($response);
    }
}
