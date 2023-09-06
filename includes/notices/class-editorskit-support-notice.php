<?php
/**
 * Editorskit Support Notice
 *
 * @package Editorskit
 */

/**
 * Adds an Editorskit Support notice in the dashboard.
 */
class Editorskit_Support_Notice {

	/**
	 * Constructor.
	 *
	 * @return void
	 */
	public function __construct() {
		add_action( 'admin_notices', array( $this, 'display' ) );
		add_action( 'wp_ajax_dismiss_editorskit_support_notice', array( $this, 'dismiss_notice' ) );
	}

	/**
	 * Dismisses the Support Notice.
	 *
	 * @return void
	 */
	public function dismiss_notice() {
		update_option( 'editorskit_support_notice_dismissed', 1 );
		wp_die();
	}

	/**
	 * Displays the support notice.
	 *
	 * @return void
	 */
	public function display() {
		$current_screen = get_current_screen();
		$is_dismissed   = get_option( 'editorskit_support_notice_dismissed' );

		if ( $is_dismissed || 'post' === $current_screen->base ) {
			return;
		}

		?>
			<div class="notice editorskit-support-notice is-dismissible" style="display: flex; align-items: center; gap: 10px;">
				<p>
					<strong><?php esc_html_e( 'Loving Editorskit?', 'block-options' ); ?></strong>
					<?php esc_html_e( 'Show your support by leaving a review and small donation.', 'block-options' ); ?>
				</p>
				<a href="https://wordpress.org/support/plugin/block-options/reviews/#new-post" target="__blank" class="button" style="display: flex; align-items: center;">
					<?php esc_html_e( 'Leave a Review', 'block-options' ); ?>
				</a>
				<a class="button button-primary" href="https://www.buymeacoffee.com/munirkamal" target="__blank"><?php esc_html_e( 'Buy me a Coffee :)', 'block-options' ); ?></a>
				<script>
					jQuery(document).ready(function($) {

						$('body').on('click', '.editorskit-support-notice .notice-dismiss', function() {
							$.post(ajaxurl, {
								action: 'dismiss_editorskit_support_notice'
							});
						});
					});
				</script>
			</div>
		<?php
	}
};

new Editorskit_Support_Notice();
