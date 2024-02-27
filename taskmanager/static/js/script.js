document.addEventListener("DOMContentLoaded", function() {
    // sidenav initialization
    let sidenav = document.querySelectorAll(".sidenav");
    M.Sidenav.init(sidenav);

    // Datepicker initialization
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
        format: "dd mmmm, yyyy",
        i18n: {done: "Select"}
    });

    // Select Initialization
    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);
});


  // Initialize modal-trigger buttons
  let modal = document.querySelectorAll('.modal');
  M.Modal.init(modal, {});

  // Below courtesy of Chat GPT

  let modalTriggerButtons = document.querySelectorAll('.modal-trigger');
  modalTriggerButtons.forEach(function(btn) {
    btn.addEventListener('click', function(event) {
      event.preventDefault();
      let target = btn.getAttribute('href');
      let modalInstance = M.Modal.getInstance(document.querySelector(target));
      modalInstance.open();
    });

});