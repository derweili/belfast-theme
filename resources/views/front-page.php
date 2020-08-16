<?php

/**
 * Header
 *
 * Werbeagenten\Aurora
 * @version 1.0.0
 */


/**
 * <head>
 */
get_template_part('resources/views/template-parts/head', get_post_type());


/**
 * Header
 */
get_template_part('resources/views/template-parts/header', get_post_type());


/**
 * Content
 */
?>
<div class="content">

    <div class="container">

        <main class="main">

            <?php
            while (have_posts()) :
                the_post();
                ?>
                    <article id="post-<?php the_ID() ?>" <?php post_class('entry') ?>>

                        <div class="entry__content cf">
                            <?php the_content() ?>
                        </div>

                    </article>

                <?php
            endwhile;
            ?>

        </main>


    </div>

</div>

<?php
/**
 * Footer
 */
get_template_part('resources/views/footer', get_post_type());
