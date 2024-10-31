<?php
/**
 * Plugin Name:         Scrollr
 * Description:         Scroll smoothly to a page's section.
 *
 * PHP version  7.3.5
 *
 * @category Scrolling
 * @package  Scrollr
 * @author   MaxPressy <webmaster@maxpressy.com>
 * @license  GPL v2 or later
 * @link     maxpressy.com
 *
 * Author:              MaxPressy
 * Author URI:          https://maxpressy.com
 * License:             GPL v2 or later
 * License URI:         https://www.gnu.org/licenses/gpl-2.0.html
 * Version:             1.0.6
 * Text Domain:         scrollr
 * Domain Path:         none, no strings to translate yet.
 * Requires at least:   5.8
 */

if (! defined('ABSPATH') ) {
    exit;
}

// Plugin data (getting plugin version, name, etc.)
if (! function_exists('get_plugin_data')) {
    include_once ABSPATH .'wp-admin/includes/plugin.php';
}
$plugin_data = get_plugin_data(__FILE__);
define('SCROLLR', ($plugin_data && $plugin_data['Name']) ? $plugin_data['Name'] : 'Scrollr');
define('SCROLLR_VERSION', ($plugin_data && $plugin_data['Version']) ? $plugin_data['Version'] : '1.0.0');

if (! function_exists('scrollr_scripts') ) {

    /**
     * Enqueue.
     *
     * @return null Calling enqueueing functions.
     */
     // phpcs:ignore
    function scrollr_scripts() 
    {
        wp_enqueue_script('scrollr', plugins_url('/library/js/min/main.js', __FILE__), array( 'jquery' ), SCROLLR_VERSION, array('strategy' => 'defer'));

        // for debugging
        //wp_enqueue_script( 'scrollr', plugins_url( '/library/js/src/main.js', __FILE__ ), array( 'jquery' ), SCROLLR_VERSION, array('strategy' => 'defer') );

        // add local vars for translation, accesed through the JS
        $local_var_array  = array(
            'back_to_top'  => esc_html__('Back to top', 'scrollr'),
        );

        wp_localize_script('scrollr', 'scrollr_localize', $local_var_array);

    }
    add_action('wp_footer', 'scrollr_scripts');

}


if (! function_exists('scrollr_textdomain') ) {

    /**
     * Load plugin's textdomain.
     * 
     * @return void Hooking a load_plugin_textdomain().
     */
    // phpcs:ignore
    function scrollr_textdomain()
    {
        load_plugin_textdomain('scrollr', false, basename(dirname(__FILE__)) . '/languages');
    }
    add_action('init', 'scrollr_textdomain');

}


if (! function_exists('scrollr_enqueue_block_variations') ) {


    /**
     * Enqueue for Block variations.
     *
     * @return void Enqueueing assets.
     */
    // phpcs:ignore
    function scrollr_enqueue_block_variations()
    {
        wp_enqueue_script(
            'scrollr-enqueue-block-variations',
            plugin_dir_url(__FILE__) .'library/js/min/variations.js',
            array( 'wp-blocks', 'wp-dom-ready', 'wp-edit-post' ),
            SCROLLR_VERSION,
            array('strategy' => 'defer')
        );
    }
    add_action('enqueue_block_editor_assets', 'scrollr_enqueue_block_variations');

}