<?php

/**
 * Fired during plugin activation.
 *
 * This class defines all code necessary to run during the plugin's activation.
 *
 * @since      1.0.0
 * @package    Reactpress
 * @subpackage Reactpress/includes
 * @author     Marco Laspe <marco@rockiger.com>
 */

namespace ReactPress\Includes;

class Activator {

	/**
	 * Short Description. (use period)
	 *
	 * Long Description.
	 *
	 * @since    1.0.0
	 */
	public static function activate() {
		//# check im reactpress directory exists if not create it
		wp_mkdir_p(REPR_APPS_PATH);

		//# check if repr_apps have the right format, otherwise update
		$repr_apps = is_array(get_option('repr_apps')) ?  get_option('repr_apps') : [];

		//# transform pageslug to pageslugs
		$repr_apps_with_pageslugs = array_map(function ($el) {
			if (array_key_exists('pageslug', $el)) {
				$new_el = $el;
				$pageslug = $el['pageslug'];
				$new_el['pageslugs'] = [$pageslug];
				unset($new_el['pageslug']);
				return $new_el;
			} else {
				return $el;
			}
		}, $repr_apps);

		//# add flag for app routing
		$repr_apps_with_app_routing = array_map(function ($el) {
			if (!array_key_exists('allowsRouting', $el)) {
				$new_el = $el;
				$new_el['allowsRouting'] = true;
				return $new_el;
			} else {
				return $el;
			}
		}, $repr_apps_with_pageslugs);
		update_option('repr_apps', $repr_apps_with_app_routing);

		//# update version
		update_option('repr_version', REPR_VERSION);
	}
}
