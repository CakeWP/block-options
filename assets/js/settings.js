"use strict";

var blockoptsSettingsModule = {
	init: function() {
		var self 	= this;
        jQuery( '.blockopts-module-settings-container' ).hide();

		self.bindEvents();
    },

	bindEvents: function() {
		var self 	= this;
		var $wpcontent = jQuery( '#wpcontent' );

		$wpcontent.on( 'click', '.blockopts-toggle-settings, .blockopts-module-settings-cancel', self.openModal );
		$wpcontent.on( 'click', '.blockopts-close-modal, .blockopts-modal-background', self.closeModal );
		$wpcontent.on( 'keyup', self.closeModal );
		$wpcontent.on( 'click', '.blockopts-toggle-activation', self.moduleToggle );
		$wpcontent.on( 'click', '.blockopts-module-settings-save', self.saveSettings );
		// $wpcontent.on( 'click', '.blockopts-license-button', self.licenseHandler );
		$wpcontent.on( 'click', '.opts-remove-class-btn', self.removeCustomClass );
		$wpcontent.on( 'click', '.blockopts-delete-cache', self.clearWidgetCache );
		$wpcontent.on( 'click', '.blockopts-license_deactivate', self.deactivationHandler );

	},

	openModal: function( e ) {
		e.preventDefault();

		var $container = jQuery(this).parents( '.blockopts-module-card' ).find( '.blockopts-module-settings-container' ),
			$modalBg = jQuery( '.blockopts-modal-background' );

		$modalBg.show();
		$container
			.show();

		jQuery( 'body' ).addClass( 'blockopts-modal-open' );
	},

	closeModal: function( e ) {
		if ( 'undefined' !== typeof e ) {
			e.preventDefault();

			// For keyup events, only process esc
			if ( 'keyup' === e.type && 27 !== e.which ) {
				return;
			}
		}

		jQuery( '.blockopts-modal-background' ).hide();
		jQuery( '.blockopts-module-settings-container' ).hide();
		jQuery( 'body' ).removeClass( 'blockopts-modal-open' );
	},

	moduleToggle: function( e ) {
		e.preventDefault();
		e.stopPropagation();

		var $button = jQuery(this),
			$card = $button.parents( '.blockopts-module-card' ),
			$buttons = $card.find( '.blockopts-toggle-activation' ),
			module = $card.attr( 'data-module-id' );

		$buttons.prop( 'disabled', true );

		if ( $button.html() == blockopts.translation.activate ) {
			var method = 'activate';
		} else {
			var method = 'deactivate';
		}

		blockoptsSettingsModule.ajaxRequest( module, method, {}, blockoptsSettingsModule.moduleCallback );
	},

	moduleCallback: function( results ) {
		var module = results.module;
		var method = results.method;

		var $card = jQuery( '#blockopts-module-card-' + module ),
			$buttons = $card.find( '.blockopts-toggle-activation' );

		if ( results.errors.length > 0 ) {
			$buttons
				.html( blockopts.translations.error )
				.addClass( 'button-secondary' )
				.removeClass( 'button-primary' );

			setTimeout( function() {
				blockoptsSettingsModule.isModuleActive( module );
			}, 1000 );

			return;
		}

		if ( 'activate' === method ) {
			$buttons
				.html( blockopts.translation.deactivate )
				.addClass( 'button-secondary' )
				.removeClass( 'button-primary' )
				.prop( 'disabled', false );

			$card
				.addClass( 'blockopts-module-type-enabled' )
				.removeClass( 'blockopts-module-type-disabled' );

			var newToggleSettingsLabel = blockopts.translation.show_settings;
		} else {
			$buttons
				.html( blockopts.translation.activate )
				.addClass( 'button-primary' )
				.removeClass( 'button-secondary' )
				.prop( 'disabled', false );

			$card
				.addClass( 'blockopts-module-type-disabled' )
				.removeClass( 'blockopts-module-type-enabled' );

			var newToggleSettingsLabel = blockopts.translation.show_description;
		}

		// if( !$card.hasClass('blockopts-module-card-no-settings') ){
			$card.find( '.blockopts-toggle-settings' ).html( newToggleSettingsLabel );
		// }
	},

	saveSettings: function( e ) {
		e.preventDefault();

		var $button = jQuery(this);

		if ( $button.hasClass( 'blockopts-module-settings-save' ) ) {
			var module = $button.parents( '.blockopts-module-card' ).attr( 'data-module-id' );
		} else {
			var module = '';
		}

		$button.prop( 'disabled', true );

		var data = {
			'--blockopts-form-serialized-data': jQuery( '#blockopts-module-settings-form' ).serialize()
		};

		blockoptsSettingsModule.ajaxRequest( module, 'save', data, blockoptsSettingsModule.savingCallback );
	},

	savingCallback: function( results ) {
		if ( '' === results.module ) {
			jQuery( '#blockopts-save' ).prop( 'disabled', false );
		} else {
			jQuery( '#blockopts-module-card-' + results.module + ' button.blockopts-module-settings-save' ).prop( 'disabled', false );
		}

		var $container = jQuery( '.blockopts-module-cards-container' );
		var view = 'grid';

		// console.log( results );
		blockoptsSettingsModule.clearMessages();
		if ( results.errors.length > 0 || ! results.closeModal ) {
			blockoptsSettingsModule.showMessages( results.messages, results.module, 'open' );
			$container.find( '.blockopts-module-settings-content-container:visible' ).animate( {'scrollTop': 0}, 'fast' );

		} else {
			blockoptsSettingsModule.showMessages( results.messages, results.module, 'closed' );
			$container.find( '.blockopts-module-settings-content-container:visible' ).scrollTop( 0 );
			blockoptsSettingsModule.closeModal();
		}
	},

	clearMessages: function() {
		jQuery( '#blockopts-settings-messages-container, .blockopts-module-messages-container' ).empty();
	},

	showMessages: function( messages, module, containerStatus ) {
		jQuery.each( messages, function( index, message ) {
			blockoptsSettingsModule.showMessage( message, module, containerStatus );
		} );
	},

	showMessage: function( message, module, containerStatus ) {
		var view = 'grid';

		if ( 'closed' !== containerStatus && 'open' !== containerStatus ) {
			containerStatus = 'closed';
		}

		if ( 'string' !== typeof module ) {
			module = '';
		}

		if ( 'closed' === containerStatus || '' === module ) {
			var container = jQuery( '#blockopts-settings-messages-container' );

			setTimeout( function() {
				container.removeClass( 'visible' );
				setTimeout( function() {
					container.find( 'div' ).remove();
				}, 500 );
			}, 4000 );
		} else {
			var container = jQuery( '#blockopts-module-card-' + module + ' .blockopts-module-messages-container' );
		}

		container.append( '<div class="updated fade"><p><strong>' + message + '</strong></p></div>' ).addClass( 'visible' );
	},


	ajaxRequest: function( module, method, data, callback ) {
		var postData = {
			'action': blockopts.ajax_action,
			'nonce':  blockopts.ajax_nonce,
			'module': module,
			'method': method,
			'data':   data,
		};

		jQuery.post( ajaxurl, postData )
			.always(function( a, status, b ) {
				blockoptsSettingsModule.processAjaxResponse( a, status, b, module, method, data, callback );
			});
	},

	processAjaxResponse: function( a, status, b, module, method, data, callback ) {
		var results = {
			'module':        module,
			'method':        method,
			'data':          data,
			'status':        status,
			'license_status': null,
			'jqxhr':         null,
			'success':       false,
			'response':      null,
			'button':      	 null,
			'errors':        [],
			'messages':      [],
			'functionCalls': [],
			'redirect':      false,
			'closeModal':    true
		};
		// console.log( a );

		a = jQuery.parseJSON( a  );

		if ( 'blockOPTS_Response' === a.source && 'undefined' !== a.response ) {
			// Successful response with a valid format.
			results.jqxhr = b;
			results.success = a.success;
			results.response = a.response;
			results.errors = a.errors;
			results.messages = a.messages;
			results.functionCalls = a.functionCalls;
			results.redirect = a.redirect;
			results.closeModal = a.closeModal;
			results.button = a.button;

			if( typeof results.license_status != 'undefined' ){
				results.license_status = a.license_status;
			}
		}

		if ( 'function' === typeof callback ) {
			callback( results );
		} else if ( 'function' === typeof console.log ) {
			console.log( 'ERROR: Unable to handle settings AJAX request due to an invalid callback:', callback, {'data': postData, 'results': results} );
		}

	},

	removeCustomClass: function(e){
		jQuery(this).parent('li').fadeOut('fast',function(){
			jQuery(this).remove();
		});
		e.preventDefault();
		e.stopPropagation();
	},

	clearWidgetCache: function( e ){
		var $button = jQuery(this);
		$button.prop( 'disabled', true );

		blockoptsSettingsModule.ajaxRequest( 'clear_cache', 'clear_cache', '', blockoptsSettingsModule.clearWidgetCacheCallback );
		return false;
	},
	clearWidgetCacheCallback: function( results ){
		if( typeof results.response != 'undefined' ){
			jQuery( '.blockopts-delete-cache' ).after( '<span class="dashicons dashicons-yes blockopts-cache-dashicons"></span>' );
			jQuery( '.blockopts-cache-dashicons' ).delay(2000).fadeOut(400);
			jQuery( '.blockopts-delete-cache' ).prop( 'disabled', false );
		}
	},

	deactivationHandler: function(e){
		e.preventDefault();

		var fld;
		var $button = jQuery(this);
		$button.prop( 'disabled', true );

		fld = jQuery( '#' + $button.attr('data-target') );
		if( fld.val() != '' ){
			var data = {
				'license-data': fld.val(),
				'license-action': 'deactivate',
				'shortname' : $button.attr('data-shortname'),
				'button': $button.attr('id')
			};

			blockoptsSettingsModule.ajaxRequest( 'license_key', 'deactivate_license', data, blockoptsSettingsModule.licenseDeactivationCallback );
		}else{
			fld.css({ 'border' : '1px solid red' });
			$button.prop( 'disabled', false );
		}
	},

	licenseDeactivationCallback: function( results ){
		// console.log( results ); blockopts-license-extended-response
		if( typeof results.response != 'undefined' && typeof results.messages != 'undefined' && typeof results.button != 'undefined' ){
			var $button = jQuery( '#' + results.button );

			jQuery( '#' + $button.attr('data-target') ).before( '<span>' + results.messages[0] + '</span>' );
			if( results.success == 'deactivated' ){
				$button.parent('td').parent('tr').fadeOut();
				jQuery( '#' + $button.attr('data-target') ).val('');
			}
		}else{
			// jQuery('.blockopts-license-key').css({ 'border' : '1px solid red' });
			// jQuery('.blockopts-license-status').fadeIn();
		}

		$button.prop( 'disabled', false );

	}
}

jQuery(document).ready(function() {
	blockoptsSettingsModule.init();
});
