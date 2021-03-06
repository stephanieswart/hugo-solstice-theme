/*
 *  solstice.js
 *  Various functionality for the solstice/quicksilver theme
 *
 *  Made by Christopher Guindon <chris.guindon@eclipse-foundation.org>
 *  Under EPL-v2 License
 */

/*
 *  main.js
 *  Various functionality for the solstice theme
 *
 *  Made by Christopher Guindon <chris.guindon@eclipse-foundation.org>
 *  Under EPL-v2 License
 */
(function($, document) {

  $(window).on("load", function() {
    if (window.location.hash && $(window.location.hash).hasClass("tab-pane")) {
      window.scrollTo(0, 0);
      setTimeout(function() {
        window.scrollTo(0, 0);
      }, 1);
    }
  });
  
  $(document).ready(function() {

    var href_hash = window.location.hash;
    // Add a class if right column is non-existant.
    if ($("#rightcolumn").length == 0) {
      $("#midcolumn").attr("class", "no-right-sidebar");
      if (href_hash) {
        window.location.hash = href_hash;
      }
    }
    // add a class if left column is non-existant.
    if ($('#main-sidebar').length == 0) {
      $("#midcolumn").attr("class", "no-left-nav");
      if (href_hash) {
        window.location.hash = href_hash;
      }
    }

    $('#showalltabs').click(function(){
      $('.tabs li').each(function(i,t){
        $(this).removeClass('active');
      });
      $('.tab-pane').each(function(i,t){
        $(this).addClass('active');
      });
    });

    href_hash && $('ul.nav a[href="' + href_hash + '"]').tab('show');
  });

  // This code will prevent unexpected menu close when
  // using some components (like accordion, forms, etc).
  $(document).on("click", ".yamm .dropdown-menu", function(e) {
    e.stopPropagation()
  });

  // scroll button.
  $(window).on("load resize scroll", function(){
    if ($(window).width() < 1270){
      $('.scrollup').hide();
      return false;
    }
    if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });

  // scroll back to the top of the page.
  $('.scrollup').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });

  $('.nav-tabs a').click(function (e) {
    $(this).tab('show');
    history.pushState({}, "", this.href);
    $('.alert:not(.stay-visible)').remove();
  });

  $("a[data-tab-destination]").on('click', function() {
    var tab = $(this).attr('data-tab-destination');
    $("#"+tab).click();
  });

  $('.solstice-collapse').click(function(){
    $(this).find('i').toggleClass('fa-chevron-down fa-chevron-up');
  });
  feather.replace();
})(jQuery, document);