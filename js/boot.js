/* global Fluid */

Fluid.boot = {};

Fluid.boot.registerEvents = function() {
  Fluid.events.billboard();
  Fluid.events.registerNavbarEvent();
  Fluid.events.registerParallaxEvent();
  Fluid.events.registerScrollDownArrowEvent();
  Fluid.events.registerScrollTopArrowEvent();
  Fluid.events.registerImageLoadedEvent();
};

Fluid.boot.refresh = function() {
  Fluid.plugins.fancyBox();
  Fluid.plugins.codeWidget();
  Fluid.events.refresh();
};

/* Sidebar */
var toggleSidebar = function(){
  $("#sidebar").toggleClass('sidebar-hide');
  $("#toggle-sidebar").toggleClass('sidebar-button-shift');
}
var hideSidebar = function(){
  $("#sidebar").addClass('sidebar-hide');
  $("#toggle-sidebar").addClass('sidebar-button-shift');
}
$("#toggle-sidebar").on("click",toggleSidebar);
$("header").on("click",hideSidebar);
$("#mainContent").on("click",hideSidebar);
$("#footerContent").on("click",hideSidebar);



document.addEventListener('DOMContentLoaded', function() {
  Fluid.boot.registerEvents();
});
