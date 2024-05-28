document.getElementById("footballForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const formData = new FormData(event.target);
  
    fetch("send-email.php", {
      method: "POST",
      body: formData
    })
    .then(response => {
      if (response.ok) {
        // Wyczyść formularz po pomyślnym wysłaniu
        document.getElementById("footballForm").reset();
      }
    });
  });