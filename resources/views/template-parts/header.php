<a class="screen-reader-text" href="#main-navigation"><?php _e('Zum Inhalt', 'TEXTDOMAIN') ?></a>
<a class="screen-reader-text" href="#main-navigation"><?php _e('Zum Hauptmenü', 'TEXTDOMAIN') ?></a>

<header class="header" role="banner">

    <div class="header__container container">

        <?php the_custom_logo() ?>
        
        <div class="navigation-toggle">
            <button class="hamburger hamburger--elastic" type="button"
              aria-label="Menu" aria-controls="navigation" aria-expanded="true/false">
                <span class="hamburger-box">
                <span class="hamburger-inner"></span>
                </span>
            </button>
            <!-- Menu -->
        </div>

        <?php
            wp_nav_menu(array(
                'theme_location'    => 'main',
                'container'         => 'nav',
                'container_class'   => 'main-navigation',
                'container_id'      => 'main-navigation',
                'menu_class'        => '',
                'menu_id'           => '',
                'before'            => '',
                'fallback_cb'       => '',
            ));
        ?>
    </div>

</header>