// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href');
        document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Basic interactivity for buttons
document.querySelector('.contact-btn').addEventListener('click', () => {
    alert('Contact Me button clicked! You can add a contact form or email link here.');
});

document.querySelector('.hire-btn').addEventListener('click', () => {
    alert('Hire Me button clicked! Redirect to a hiring form or email.');
});

document.querySelector('.cv-btn').addEventListener('click', () => {
    // Create a link element to trigger the download
    const link = document.createElement('a');
    link.href = 'resume.pdf'; // Replace with the actual path to your resume file
    link.download = 'Hannah_Resume.pdf'; // The name of the file when downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

document.querySelector('.info-icon').addEventListener('click', () => {
    alert('Info icon clicked! You can display more info here.');
});