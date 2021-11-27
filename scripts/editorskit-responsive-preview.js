/**
 * This script is responsible for maintaining editorskit live preview.
 */
class EditorskitLivePreview {
	constructor() {
		this.desktopButton = document.querySelector( '#wp-admin-bar-editorskit-responsive-desktop' );
		this.tabletButton = document.querySelector( '#wp-admin-bar-editorskit-responsive-tablet' );
		this.mobileButton = document.querySelector( '#wp-admin-bar-editorskit-responsive-mobile' );

		this.location = new URL( window.location.href );
		this.currentPreviewDevice = this.location.searchParams.get( 'editorskitpreviewdevice' ) ?? 'desktop';
		this.isSandbox = this.location.searchParams.get( 'editorskitsandbox' ) ?? false;

		this.frame = null;

		this.initialize();
	}

	initialize() {
		if ( this.isSandbox ) {
			return;
		}

		// Attaching event listeners.
		this.prepareIframe();

		if ( this.currentPreviewDevice !== 'desktop' ) {
			this.toggleResponsive( this.currentPreviewDevice );
		}

		this.desktopButton.addEventListener( 'click', ( event ) => this.toggleResponsive( 'desktop', event ) );
		this.tabletButton.addEventListener( 'click', ( event ) => this.toggleResponsive( 'tablet', event ) );
		this.mobileButton.addEventListener( 'click', ( event ) => this.toggleResponsive( 'mobile', event ) );
	}

	prepareIframe() {
		const frame = document.createElement( 'iframe' );
		const frameSrc = new URL( window.location.href );

		// Using sandbox.
		frameSrc.searchParams.set( 'editorskitsandbox', true );
		frameSrc.searchParams.delete( 'editorskitlivepreview' );

		frame.id = 'editorskit-frame';
		frame.src = frameSrc;
		frame.width = '100%';
		frame.style.height = '100vh';

		document.body.append( frame );

		this.frame = frame;
	}

	toggleAdminBarClass( device ) {
		const options = [
			{
				device: 'desktop',
				button: this.desktopButton,
			},
			{
				device: 'tablet',
				button: this.tabletButton,
			},
			{
				device: 'mobile',
				button: this.mobileButton,
			},
		];

		options.forEach( ( adminButton ) => {
			if ( adminButton.device === device ) {
				adminButton.button.className = 'editorskit-active-responsive';
			} else {
				adminButton.button.className = '';
			}
		} );
	}

	updateURLQuery( device ) {
		const newUrl = new URL( this.location.href );

		newUrl.searchParams.set( 'editorskitpreviewdevice', device );

		window.history.pushState( {}, null, newUrl );
	}

	toggleResponsive( device, event = null ) {
		if ( event ) {
			event.preventDefault();
		}

		this.toggleAdminBarClass( device );
		this.updateURLQuery( device );

		const responsiveClass = 'editorskit-responsive-'.concat( device );

		this.frame.className = responsiveClass;
	}
}

new EditorskitLivePreview();
