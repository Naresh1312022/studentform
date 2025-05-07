// Flip the card
function flipCard() {
    document.getElementById('studentCard').classList.toggle('flipped');
  }
  
  // Form submission
  document.getElementById('studentForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = document.getElementById('nameInput').value;
    const id = document.getElementById('idInput').value;
    const email = document.getElementById('emailInput').value;
    const major = document.getElementById('majorInput').value;
    const year = document.getElementById('yearInput').value;
    const photo = document.getElementById('photoInput').value || 'https://via.placeholder.com/150';
  
    document.getElementById('name').textContent = name;
    document.getElementById('studentId').textContent = id;
    document.getElementById('email').textContent = email;
    document.getElementById('major').textContent = major;
    document.getElementById('year').textContent = year;
    document.getElementById('profileImg').src = photo;
  
    // Generate QR
    new QRious({
      element: document.getElementById('qr'),
      value: `ID: ${id}\nEmail: ${email}`,
      size: 150,
      background: 'white',
      foreground: '#4a90e2'
    });
  });
  