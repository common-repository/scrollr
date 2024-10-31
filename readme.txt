=== Scrollr ===
Contributors: MaxPressy
Tags: navigation, back-to-top, onepage, page scrolling, scroll
Tested up to: 6.6
Stable tag: 1.0.6
Requires at least: 5.8
Requires PHP: 7.3.5
License: GPLv3
License URI: https://www.gnu.org/licenses/gpl-3.0.html

Scroll smoothly to a page's section or push it back to the top.

== Description ==
<a href="https://maxpressy.com/scrollr/?mtm_campaign=wpPluginPage&mtm_kwd=scrollr&mtm_placement=top" target="_blank">Scrollr</a> is a lightweight tool that helps you to link to a page's section and to smothly scroll to it. This way, it bypasses the browsers' "bumping-jumping" behaviour for the in-page linking.

= Scroll to page's section =
Currently there's no UI settings, scrolling works with the plugin's default settings. To make the linking to the targeting page's section, you just have to add a "scrollr" class. The idea is to keep things lightweight and simple. If there's many user requests in the future, we'll consider making the UI options like scrolling speed etc.

= Push to top =
Another available option is scrolling up to the page's top, i.e. usually labeled as "back to top".
For this option you can use the button block that comes with the plugin. It is available from the regular WordPress block inserter. Just search for "Scrollr" or "Push to top" from the block inserter.

= Conclusion =
Basically, <a href="https://maxpressy.com/scrollr/?mtm_campaign=wpPluginPage&mtm_kwd=scrollr&mtm_placement=bottom" target="_blank">Scrollr</a> may help you to create:
<ul>
    <li>One page navigation</li>
    <li>Documentation page</li>
    <li>Smooth Scrolling to important sections</li>
    <li>Back to top button</li>
</ul>



== Installation ==

= Automated Installation =
From your WordPress dashboard, navigate to the Plugins -> Add New, then search for the "Scrollr". Activate the plugin.

= Manual Alternative =
Alternatively, install Scrollr by uploading the files manually to your server. Download the plugin here from wordpress.org, upload the files to the plugin directiory of your WordPress installation. Go to the admin dashboard of your site, now. Navigate to the Plugins section and activate Scrollr plugin.

= Usage =
Make a section linking:
<ul>
	<li>Set the HTML anchor for the targeted section. This is done by selecting any block and from its Advanced tab entering the html anchor value.</li>
	<li>link to the targeted section by setting an internal link (with button, paragrph link, etc). This means that you create a link which starts with # sign and then just add the HTML anchor you've asigned to the targeted page's section in the previous step.</li>
	<li>While creating a link, add a class "scrollr". This is done from the block's Advanced tab.</li>
</ul>

Create a back to top button/link:
<ul>
	<li>Add a button or a paragraph (where you set a link)</li>
	<li>Set a link with just a # sign</li>
	<li>Add a class to this block "scrollr-top"</li>
</ul>

== Screenshots ==
1. Set section’s HTML anchor
2. Add “scrollr” class to a link
3. Scrolling example
4. "Push to top" block


== Changelog ==
= 1.0.6 - 2024-10-23 =
* Improved the marking of the current section in the sticky menu if created

= 1.0.5 - 2023-11-13 =
* Change the way the plugin version is retrieved and printed
* Add "Push to top" as a block
* Add languages folder with .pot file for the translation strings

= 1.0.4 - 2022-08-17 =
* Update: Set defer strategy for files enqueueing

= 1.0.3 - 2022-11-03 =
* Bumping the "Tested up to" to 6.1, missed on previous update

= 1.0.2 - 2022-11-03 =
* Comply with WordPress 6.1
* Small code cleaning, to comply with JSLint and PHP lint

= 1.0.1 - 2021-09-15 =
* Improvment: Better handling of multiple links inside the scrollr scope, e.g. more than one scrollr link inside the paragraph

= 1.0.0 - 2021-08-20 =
* Initial release

== Upgrade Notice ==

Make a full site backup before upgrading.
