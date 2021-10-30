<?php
/**
 * Api routes
 */

if ( ! defined( 'ABSPATH' ) ) {
	die( 'No direct access.' );
}

use Extendify\ExtendifySdk\ApiRouter;
use Extendify\ExtendifySdk\Controllers\AuthController;
use Extendify\ExtendifySdk\Controllers\MetaController;
use Extendify\ExtendifySdk\Controllers\PingController;
use Extendify\ExtendifySdk\Controllers\UserController;
use Extendify\ExtendifySdk\Controllers\PluginController;
use Extendify\ExtendifySdk\Controllers\TaxonomyController;
use Extendify\ExtendifySdk\Controllers\TemplateController;

\add_action(
	'rest_api_init',
	function () {
		ApiRouter::get( '/active-plugins', array( PluginController::class, 'active' ) );
		ApiRouter::get( '/plugins', array( PluginController::class, 'index' ) );
		ApiRouter::post( '/plugins', array( PluginController::class, 'install' ) );

		ApiRouter::get( '/taxonomies', array( TaxonomyController::class, 'index' ) );

		ApiRouter::post( '/templates', array( TemplateController::class, 'index' ) );
		ApiRouter::post( '/templates/(?P<template_id>[a-zA-Z0-9-]+)', array( TemplateController::class, 'ping' ) );
		ApiRouter::post( '/related', array( TemplateController::class, 'related' ) );

		ApiRouter::get( '/user', array( UserController::class, 'show' ) );
		ApiRouter::post( '/user', array( UserController::class, 'store' ) );
		ApiRouter::get( '/user-meta', array( UserController::class, 'meta' ) );
		ApiRouter::post( '/register-mailing-list', array( UserController::class, 'mailingList' ) );

		ApiRouter::post( '/register', array( AuthController::class, 'register' ) );
		ApiRouter::post( '/login', array( AuthController::class, 'login' ) );

		ApiRouter::get( '/meta-data', array( MetaController::class, 'getAll' ) );
		ApiRouter::post( '/simple-ping', array( PingController::class, 'ping' ) );
	}
);
