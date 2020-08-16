<?php
/**
 * Single view template
 *
 * Werbeagenten\Aurora
 * @version 1.0.0
 */


/**
 * Header
 */
get_template_part('resources/views/header', get_post_type());


/**
 * Content
 */
?>
<div class="content">

    <div class="container">

        <?php if( has_post_thumbnail() ):?>
            <?php get_template_part('resources/views/template-parts/page-head'); ?>
        <?php endif; ?>

        <main class="main">

            <?php
            the_post();
            get_template_part('resources/views/contents/content', get_post_type());
            ?>

        </main>

    </div>

</div>

<?php
/**
 * Footer
 */
get_template_part('resources/views/footer', get_post_type());
