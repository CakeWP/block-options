<?php

/**
 * Notice that displays deprecation notice for typography addon
 *
 * @package EditorsKit
 * @author  zafarKamal
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
	exit;
}

class Editorskit_Deprecated_Typography_Addon_Notice
{

	public static $key         = 'ek-deprecated-typography-addon-notice';
	public static $dismiss_key = 'dismiss-ek-typography-addon-notice';

	/**
	 * Constructor.
	 *
	 * @return void
	 */
	public function __construct()
	{
		add_action('init', array($this, 'register'), 7);
		add_action('admin_notices', array($this, 'render'));
		add_action('init', array($this, 'handle_dismiss'), 10);
	}

	/**
	 * Registers necessary options for the notice.
	 *
	 * @return void
	 */
	public function register()
	{
		register_setting(
			'editorskit',
			static::$key,
			array(
				'type'              => 'string',
				'description'       => 'Editorskit notice status for deprecated typography addon.',
				'sanitize_callback' => 'sanitize_text_field',
				'show_in_rest'      => true,
				'default'           => 'initial', // Can either be 'hidden', or 'initial'.
			)
		);
	}

	public function handle_dismiss()
	{
		// phpcs:ignore WordPress.Security.NonceVerification.Recommended
		if (isset($_GET[static::$dismiss_key])) {
			update_option(static::$key, 'hidden');
		}
	}

	/**
	 * Checks it the notice should be rendered.
	 *
	 * @return bool - True if should render the notice, otherwise false.
	 */
	public function should_render()
	{
		return 'hidden' !== get_option(static::$key);
	}

	/**
	 * Renders the admin notice.
	 *
	 * @return void
	 */
	public function render()
	{

		if (!$this->should_render()) {
			return;
		}

?>
		<div class="editorskit_activated_notice notice-error notice is-dismissible" style="box-shadow: 0 1px 1px 0 rgba(0,0,0,.1);">
			<p>
				<?php
				echo sprintf(
					esc_html__('%1$sEditorsKit Plugin%2$s typography has been deprecated. If you want to continue using %1$s%3$sClick here to install the Typography Addon%4$s%2$s.', 'editorskit-typography-addon'),
					'<strong>',
					'</strong>',
					'<a target="_blank" href="https://github.com/CakeWP/deprecated-editorskit-typography-addon/releases">',
					'</a>'
				);
				?>
			</p>
			<a style="text-decoration:none" class="notice-dismiss" href="?<?php echo static::$dismiss_key; ?>">
				<span class="screen-reader-text">
					<?php esc_html_x('Dismiss this notice.', 'Dismiss unsupported version notice screen reader.', 'block-slider'); ?>
				</span>
			</a>
		</div>
<?php
	}
}

new Editorskit_Deprecated_Typography_Addon_Notice();
