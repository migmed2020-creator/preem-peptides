//
// This script handles the age verification modal.  The modal is initially
// displayed when the page loads.  Once the user confirms they are
// of age by clicking the “Enter” button, the modal is dismissed and
// the underlying content becomes accessible.  Users who reload the
// page will be prompted again since no persistent cookies are stored.
//
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('ageModal');
  const enterBtn = document.getElementById('enterBtn');

  // Show the modal immediately on page load
  modal.style.display = 'flex';

  // Handle the click on the Enter button
  enterBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
});
