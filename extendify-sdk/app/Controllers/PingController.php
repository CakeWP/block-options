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
 * The controller for sending little bits of info
 */
class PingController
{
    /**
     * Send data about a specific topic
     *
     * @param \WP_REST_Request $request - The request.
     * @return WP_REST_Response|WP_Error
     */
    public static function ping($request)
    {
        $response = Http::post('/ping', $request->get_params());
        return new \WP_REST_Response($response);
    }
}
