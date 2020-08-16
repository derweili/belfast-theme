import '../scss/app.scss'

const App = {
    /**
     * Cache elenents and bind events
     */
    boot: function() {
        // Cache elements for reusing
        App.html = jQuery("html");
        App.body = jQuery("body");
        App.toggleNavButton = jQuery(".navigation-toggle");
        App.burgerIcon = jQuery(".navigation-toggle .hamburger");
        App.nav = jQuery(".main-navigation");

        App.bindings();
    },

    /**
     * Bind events
     */
    bindings: function() {
        App.toggleNavButton.click(function(e) {
            e.preventDefault();
            App.toggleNav();
        });
    },

    /**
     * Toogle nav
     */
    toggleNav: function() {
        App.nav.toggleClass("is-visible");
        App.burgerIcon.toggleClass("is-active");
    },
};

jQuery(document).ready(function() {
    App.boot();
});

console.log('theme app js')