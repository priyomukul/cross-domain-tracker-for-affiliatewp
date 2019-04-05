<?php
/**
 *
 * Plugin Name: AffiliateWP - Track External visits.
 * Plugin URI:
 * Description: Allows you to track external visits.
 * Author: BSF
 * Author URI: https://www.brainstormforce.com
 * Version: 1.0.0
 * Text Domain: affiliatewp-external-visits
 * Domain Path: languages
 *
 * @package Affiliate_WP_Visits_Tracking
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Set constants.
 */
define( 'AFILIATE_WP_EXTERNAL_VISITS_FILE', __FILE__ );
define( 'AFILIATE_WP_EXTERNAL_VISITS_TEXT_DOMAIN', 'affiliatewp-track-external-visits' );

/**
 * Loader
 */
require_once 'includes/class-affiliate-wp-track-external-visits.php';
