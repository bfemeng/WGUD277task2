function validateForm() {
  return new Promise((resolve, reject) => {
      const email = document.getElementById('email').value;
      const confirmEmail = document.getElementById('email_verification').value;
      
      if (email !== confirmEmail) {
          alert('Whoops! Email addresses do not match!');
      } else {
          resolve('Emails match');
      }
  });
}

