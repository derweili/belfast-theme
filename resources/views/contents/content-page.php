<article id="post-<?php the_ID() ?>" <?php post_class('entry') ?>>

    <div class="entry__content cf">
        <?php the_title('<h1>', '</h2>'); ?>
        <?php the_content() ?>
    </div>

</article>
