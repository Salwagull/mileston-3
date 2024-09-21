var form = document.getElementById('resume-form');
var resumeDisplay = document.getElementById('resume display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('Phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resumeTemplate = "\n        <h2>Editable Resume</h2>\n        <h3>Personal Informatin</h3>\n        <p><strong>Name:<span contenteditable=\"true\"> ".concat(name, "</sapn></p>\n        <p><strong>Email:<span contenteditable=\"true\"> ").concat(email, "</sapn></p>\n        <p><strong>Phone:<span contenteditable=\"true\"> ").concat(phone, "</sapn></p>\n        <h3>Education</h3>\n        <p contenteditable=\"true\">").concat(education, "</p>\n        <h3>Experience</h3>\n        <p contenteditable=\"true\">").concat(experience, "</p>\n        <h3>Skills</h3>\n        <p contenteditable=\"true\">").concat(skills, "</p>\n    ");
    resumeDisplay.innerHTML = resumeTemplate;
});
