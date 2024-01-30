const skills = document.getElementById('skills');
const education = document.getElementById('education');
const experience = document.getElementById('experience');
const menuBtn = document.querySelector('.mobile-nav-btn');

skills.addEventListener('click', () => {
    document.querySelector('.skills-tab').classList.toggle('display-tab');
    document.querySelector('.education-tab').classList.remove('display-tab');
    document.querySelector('.experience-tab').classList.remove('display-tab');
});

education.addEventListener('click', () => {
    document.querySelector('.education-tab').classList.toggle('display-tab');
    document.querySelector('.skills-tab').classList.remove('display-tab');
    document.querySelector('.experience-tab').classList.remove('display-tab');
});
experience.addEventListener('click', () => {
    document.querySelector('.experience-tab').classList.toggle('display-tab');
    document.querySelector('.skills-tab').classList.remove('display-tab');
    document.querySelector('.education-tab').classList.remove('display-tab');
});

menuBtn.addEventListener('click', () => {
    document.querySelector('.mobile-nav').classList.toggle('active');
});