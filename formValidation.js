function validateForm() {
    const email = document.getElementById('email').value;
    const confirmEmail = document.getElementById('email_verification').value;
    if (email !== confirmEmail) {
      alert('Whoops! Email addresses do not match!');
      return false; // prevent form submission
    }
    return true; // allow form submission
  }

