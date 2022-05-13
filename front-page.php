<?php get_header() ?>
<main class="site__main">

<h2>Activités en TIM</h2>
<?php 
        wp_nav_menu(array("menu"=>"menu_accueil",
                            "container"=>"nav"));
?>
<h2>Les événements importants pour l'année</h2>
<?php 
        wp_nav_menu(array("menu"=>"evenement",
                            "container"=>"nav"));
?>

    
   <?php if (have_posts()): the_post(); ?>
        <h1><?php the_title() ?></h1>
        <?php the_content() ?>   
  
   <?php endif ?>
   
</main>
<?php get_footer() ?>