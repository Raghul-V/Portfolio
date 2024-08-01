// dark-mode / light-mode
if (localStorage.getItem('theme') === 'light') {
    document.documentElement.classList.remove('dark')
}

function toggleTheme() {
    if (localStorage.getItem('theme') === 'light') {
        localStorage.setItem('theme', 'dark')
    } else {
        localStorage.setItem('theme', 'light')
    }

    document.documentElement.classList.toggle('dark')
}



let prevScrollY = window.scrollY
const nav = document.querySelector('nav')

// hide nav on scroll
window.addEventListener('scroll', function() {
    const currentScrollY = window.scrollY

    if (prevScrollY > currentScrollY) {
        // user has scrolled up
        document.querySelector('nav').classList.remove('hide')
    } else {
        // user has scrolled down
        document.querySelector('nav').classList.add('hide')
    }

    prevScrollY = currentScrollY
})



// adding extra styles to project in the center of screen
const projectsContainer = document.querySelector('.projectsContainer')
const projectDivs = projectsContainer.querySelectorAll('.projectContainer')

projectsContainer.addEventListener('scroll', () => {
    projectDivs.forEach(project => {
        const projectRect = project.getBoundingClientRect()
        const projectCenterX = projectRect.left + projectRect.width / 2

        if (projectCenterX > window.innerWidth/2 - 180 && projectCenterX < window.innerWidth/2 + 180) {
            project.classList.add('projectContainer_center')
        } else {
            project.classList.remove('projectContainer_center')
        }
    })
})



const contactForm = document.querySelector('form#contact')

// send email on  contact form submit
contactForm.addEventListener('submit', e => {
    e.preventDefault()

    let fullName = contactForm.querySelector('input[name="fullName"]').value.trim()
    let company = contactForm.querySelector('input[name="company"]').value.trim()
    let phoneNo = contactForm.querySelector('input[name="phoneNo"]').value.trim()
    let body = contactForm.querySelector('textarea[name="body"]').value.trim()

    let subject = `From Raghul's Portfolio Contact Form: ${fullName} from ${company}`
    let content = ""

    if (fullName) {
        content += `Full Name: ${fullName}\n`
    }
    if (company) {
        content += `Company Name: ${company}\n`
    }
    if (phoneNo) {
        content += `Phone Number: ${phoneNo}\n`
    }
    if (body) {
        content += `\nMessage:\n${body}\n\n`
    }

    window.open(`mailto:raghul11072004@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(content)}`)
})



// need to include gsap animations when items are loaded

// document.querySelectorAll("p").forEach(element => {
//     gsap.fromTo(element, {
//         opacity: 0,
//         y: 100,
//     }, {
//         opacity: 1,
//         y: 0,
//         duration: 1,
//         ease: "power1.inOut",
//     })
// })



