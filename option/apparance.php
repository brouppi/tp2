<?php

add_action('customize_register', function(WP_Customize_Manager $manager){
    $manager->add_section('section_modifier_background_body', ["title"=>"Couleur du background"]);

    /* Première propriété (header) */ 
    $manager->add_setting('couleur_background_header', ["default"=>"#0e4d41", 
                                                      "sanitize_callback" => "sanitize_hex_color"]);

    /* Deuxième propriété (footer) */ 
    $manager->add_setting('couleur_background_footer', ["default"=>"#0e4d41", 
                                                      "sanitize_callback" => "sanitize_hex_color"]);

    /*$manager->add_control('couleur_background_body', ["section" =>"section_modifier_background_body", 
                                                      "setting" => "couleur_background_body", 
                                                      "label" => "Couleur background du body"]);*/

    /* Première propriété (header) */

    $manager->add_control(new WP_Customize_Color_Control($manager, "couleur_background_header", [ "section" =>"section_modifier_background_body", 
                                                                                                         "label" => "Couleur du header"]));

    /* Deuxième propriété (footer) */

    $manager->add_control(new WP_Customize_Color_Control($manager, "couleur_background_footer", [ "section" =>"section_modifier_background_body", 
                                                                                                         "label" => "Couleur du footer"]));
});

?>
