document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("pets-modal-btn").addEventListener("click", function() {
      document.getElementById("modal").classList.add("open")
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("modal-close-btn").addEventListener("click", function() {
      document.getElementById("modal").classList.remove("open")
    });
  });