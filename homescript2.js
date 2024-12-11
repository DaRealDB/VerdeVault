document.addEventListener('DOMContentLoaded', () => {
  // Display the popup when the page loads
  const popup = document.getElementById('language-popup');
  popup.style.display = 'flex';

  // Select the invest button, user-profile, and buttons container
  const investBtn = document.querySelector('.inv-btn');
  const lessonBtn = document.querySelector('.lesson-btn');

  const userProfile = document.querySelector('.user-profile');
  const userProfile3 = document.querySelector('.user-profile3');

  const buttonsContainer = document.querySelector('.buttons-containerr');
  const buttonsContainer3 = document.querySelector('.buttons-containerr3');

  // Initially set user profile height to 0 and hide it
  userProfile.style.height = '0';
  userProfile.style.overflow = 'hidden';
  userProfile.style.transition = 'height 0.5s ease, padding 0.5s ease'; // Smooth transition for height and padding

  // Initially set buttons container position and hide it
  buttonsContainer.style.transition = 'top 0.5s ease'; // Smooth transition for position
  buttonsContainer.style.top = '100px'; // Keep initial position

  buttonsContainer3.style.transition = 'top 0.3s ease'; // Smooth transition for position
  buttonsContainer3.style.top = '100px'; // Keep initial position
  buttonsContainer3.style.transition = 'opacity 0.3s ease'; // Smooth transition for position
  lessonBtn.style.transition = 'marginBottom 5s ease';

  // When the invest button is clicked, toggle the height of user-profile
  investBtn.addEventListener('click', () => {
    // If user-profile is expanded, collapse it and move buttons container
    if (userProfile.style.height === '240px') {
      userProfile.style.height = '0'; // Collapse user profile
      userProfile.style.padding = '0'; // Hide content smoothly
      buttonsContainer.style.top = '-350px'; // Reset position of buttons container
    } else {
      userProfile.style.height = '240px'; // Expand user profile
      userProfile.style.padding = '20px'; // Reveal content
      setTimeout(() => {
        buttonsContainer.style.top = '100px'; // Move buttons container after user-profile is expanded
      }, 200); // Wait for the height transition to finish before changing buttons position
    }
  });






  lessonBtn.addEventListener('click', () => {
    // If user-profile is expanded, collapse it and move buttons container
    if (userProfile3.style.height === '370px') {
      userProfile3.style.height = '0'; // Collapse user profile
      buttonsContainer3.style.opacity = '0'; // Reset position of buttons container
      lessonBtn.style.marginBottom = '0px';

    } else {
      userProfile3.style.height = '370px'; // Expand user profile
      setTimeout(() => {
        buttonsContainer3.style.top = '100px'; // Move buttons container after user-profile is expanded
        buttonsContainer3.style.opacity = '1'; // Reset position of buttons container
        lessonBtn.style.marginBottom = '350px';

      }, 50); // Wait for the height transition to finish before changing buttons position
    }
  });






  // Search button interaction (you can ignore this if not needed)
  document.querySelector('.search-button').addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Search button clicked, but no action taken.');
  });

});

// Language Selection Function (Optional)
function setLanguage(language) {
  const popup = document.getElementById('language-popup');
  const welcomeMessage = document.getElementById('welcome-message');

  // Hide the popup
  popup.style.display = 'none';

  // Update the content based on the selected language
  // Uncomment and customize if needed
  // if (language === 'english') {
  //   welcomeMessage.textContent = 'Welcome to the Home Page!';
  // } else if (language === 'filipino') {
  //   welcomeMessage.textContent = 'Maligayang Pagdating sa Pahina ng Bahay!';
  // }
}