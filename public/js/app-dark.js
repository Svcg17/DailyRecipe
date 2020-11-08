/*
Template Name: Veltrix - Responsive Bootstrap 4 Admin Dashboard
Author: Themesbrand
Version: 3.0.0
Website: https://themesbrand.com/
Contact: themesbrand@gmail.com
File: Main Js File
*/

(function($) {
  "use strict";

  function initMetisMenu() {
    //metis menu
    $("#side-menu").metisMenu();
  }

  function initLeftMenuCollapse() {
    $("#vertical-menu-btn").on("click", function(event) {
      event.preventDefault();
      $("body").toggleClass("sidebar-enable");
      if ($(window).width() >= 992) {
        $("body").toggleClass("vertical-collpsed");
      } else {
        $("body").removeClass("vertical-collpsed");
      }
    });
  }

  function initActiveMenu() {
    // === following js will activate the menu in left side bar based on url ====
    $("#sidebar-menu a").each(function() {
      var pageUrl = window.location.href.split(/[?#]/)[0];
      if (this.href == pageUrl) {
        $(this).addClass("active");
        $(this)
          .parent()
          .addClass("mm-active"); // add active to li of the current link
        $(this)
          .parent()
          .parent()
          .addClass("mm-show");
        $(this)
          .parent()
          .parent()
          .prev()
          .addClass("mm-active"); // add active class to an anchor
        $(this)
          .parent()
          .parent()
          .parent()
          .addClass("mm-active");
        $(this)
          .parent()
          .parent()
          .parent()
          .parent()
          .addClass("mm-show"); // add active to li of the current link
        $(this)
          .parent()
          .parent()
          .parent()
          .parent()
          .parent()
          .addClass("mm-active");
      }
    });
  }

  function initMenuItem() {
    $(".navbar-nav a").each(function() {
      var pageUrl = window.location.href.split(/[?#]/)[0];
      if (this.href == pageUrl) {
        $(this).addClass("active");
        $(this)
          .parent()
          .addClass("active");
        $(this)
          .parent()
          .parent()
          .addClass("active");
        $(this)
          .parent()
          .parent()
          .parent()
          .addClass("active");
        $(this)
          .parent()
          .parent()
          .parent()
          .parent()
          .addClass("active");
      }
    });
  }

  function initFullScreen() {
    $('[data-toggle="fullscreen"]').on("click", function(e) {
      e.preventDefault();
      $("body").toggleClass("fullscreen-enable");
      if (
        !document.fullscreenElement &&
        /* alternative standard method */ !document.mozFullScreenElement &&
        !document.webkitFullscreenElement
      ) {
        // current working methods
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen(
            Element.ALLOW_KEYBOARD_INPUT
          );
        }
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
      }
    });
    document.addEventListener("fullscreenchange", exitHandler);
    document.addEventListener("webkitfullscreenchange", exitHandler);
    document.addEventListener("mozfullscreenchange", exitHandler);
    function exitHandler() {
      if (
        !document.webkitIsFullScreen &&
        !document.mozFullScreen &&
        !document.msFullscreenElement
      ) {
        console.log("pressed");
        $("body").removeClass("fullscreen-enable");
      }
    }
  }

  function initRightSidebar() {
    // right side-bar toggle
    $(".right-bar-toggle").on("click", function(e) {
      $("body").toggleClass("right-bar-enabled");
    });

    $(document).on("click", "body", function(e) {
      if ($(e.target).closest(".right-bar-toggle, .right-bar").length > 0) {
        return;
      }

      $("body").removeClass("right-bar-enabled");
      return;
    });
  }

  function initDropdownMenu() {
    $(".dropdown-menu a.dropdown-toggle").on("click", function(e) {
      if (
        !$(this)
          .next()
          .hasClass("show")
      ) {
        $(this)
          .parents(".dropdown-menu")
          .first()
          .find(".show")
          .removeClass("show");
      }
      var $subMenu = $(this).next(".dropdown-menu");
      $subMenu.toggleClass("show");

      return false;
    });
  }

  function initComponents() {
    $(function() {
      $('[data-toggle="tooltip"]').tooltip();
    });

    $(function() {
      $('[data-toggle="popover"]').popover();
    });
  }

  function initPreloader() {
    $(window).on("load", function() {
      $("#status").fadeOut();
      $("#preloader")
        .delay(350)
        .fadeOut("slow");
    });
  }

  function initSettings() {
    sessionStorage.setItem("is_visited", "dark-mode-switch");
    $(".right-bar input:checkbox").prop("checked", false);
    $("#dark-mode-switch").prop("checked", true);

    $("#light-mode-switch, #dark-mode-switch, #rtl-mode-switch").on(
      "change",
      function(e) {
        sessionStorage.setItem("is_visited", e.target.id);
        $(".right-bar input:checkbox").prop("checked", false);
        $("#" + e.target.id).prop("checked", true);
        updateThemeSetting(e.target.id);
      }
    );
  }

  function updateThemeSetting() {
    let id = sessionStorage.getItem("is_visited");
    if (id == "light-mode-switch") {
      $("#dark-mode-switch").prop("checked", false);
      $("#rtl-mode-switch").prop("checked", false);
      $("#bootstrap-style").attr("href", "public/css/bootstrap.min.css");
      $("#app-style").attr("href", "public/css/app.min.css");
      sessionStorage.setItem("is_visited", "light-mode-switch");
    } else if (id == "dark-mode-switch") {
      $("#light-mode-switch").prop("checked", false);
      $("#rtl-mode-switch").prop("checked", false);
      $("#bootstrap-style").attr("href", "public/css/bootstrap-dark.min.css");
      $("#app-style").attr("href", "public/css/app-dark.min.css");
      sessionStorage.setItem("is_visited", "dark-mode-switch");
    } else if (id == "rtl-mode-switch") {
      $("#light-mode-switch").prop("checked", false);
      $("#dark-mode-switch").prop("checked", false);
      $("#bootstrap-style").attr("href", "public/css/bootstrap.min.css");
      $("#app-style").attr("href", "public/css/app-rtl.min.css");
      sessionStorage.setItem("is_visited", "rtl-mode-switch");
    }
  }

  function init() {
    initMetisMenu();
    initLeftMenuCollapse();
    initActiveMenu();
    initMenuItem();
    initFullScreen();
    initRightSidebar();
    initDropdownMenu();
    initComponents();
    initSettings();
    initPreloader();
    Waves.init();
  }

  init();
})(jQuery);
