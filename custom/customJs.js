// listen for clicks to active nav
$(document).on('click', '.nav-link.active', function() {
  hideTab($(this))
});


// listen for clicks everywhere
$(document).on('click', function(e) {
  // if clicked on nav, return
  if ($(e.target).closest(".nav-tabs,.tab-content").length) {return}

  // otherwise, off clicks should close nav
  hideTab($('.nav-link.active'))
});

function hideTab($activeNav) {
  // deselect nav item
  $activeNav.removeClass('active').attr('aria-selected', "false")

  // identify tab pane & deselect
  $($activeNav.attr("href")).removeClass('active');
}
