/*
 *  All regular jQuery here
 */
wp.domReady( function() {


    /**
     * Push to top - buttons block
     */
    wp.blocks.registerBlockVariation( 'core/buttons', {
        name: 'scrollr-push-to-top',
        title: 'Scrollr - to top',
        description: 'Push (back) the page up to the top',
        icon: 'arrow-up',
        category: 'widgets',
        isDefault: false,
        attributes: {
            className: 'scrollr-top',
        },
        innerBlocks: [
            [
                'core/button',
                {text: '↑', className: 'float reduce-opacity'}
            ]
        ]
    } );


}); // end jQuerys
