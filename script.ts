const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplay = document.getElementById('resume display') as HTMLDivElement;

form.addEventListener('submit', function (event: Event) {
    event.preventDefault();

   
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('Phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    
    const resumeTemplate = `
        <h2>Editable Resume</h2>
        <h3>Personal Informatin</h3>
        <p><strong>Name:<span contenteditable="true"> ${name}</sapn></p>
        <p><strong>Email:<span contenteditable="true"> ${email}</sapn></p>
        <p><strong>Phone:<span contenteditable="true"> ${phone}</sapn></p>
        <h3>Education</h3>
        <p contenteditable="true">${education}</p>
        <h3>Experience</h3>
        <p contenteditable="true">${experience}</p>
        <h3>Skills</h3>
        <p contenteditable="true">${skills}</p>
    `;

    
    resumeDisplay.innerHTML = resumeTemplate;
});
