

// function filterSelection(filterTag) {
//     let ftag = filterTag;
//     let x = document.getElementsByClassName('filterSkills')
//     if (ftag == 'all') {
//         ftag = '';
//     }
//     for (i = 0; i < x.length; i++) {
//         removeFilterClass(x[i], 'show');
//         if (x[i].className.indexOf(ftag) > -1) {
//             addFilterClass(x[i], 'show');
//         }
//     }
// }

// function addFilterClass(element, name) { 
//     let arr1 = element.className.split(' ');
//     let arr2 = name.split(' ');
//     for (let i = 0; i < arr2.length; i++) {
//         if (arr1.indexOf(arr2[i]) == -1) {
//             element.className += " " + arr2[i];
//         }
//     }
// }

// function removeFilterClass(element, name) {
//     let arr1 = element.className.split(' ');
//     let arr2 = name.split(' ');
//     for (let i = 0; i < arr2.length; i++) {
//         while (arr1.indexOf(arr2[i]) > -1) {
//             arr1.splice(arr1.indexOf(arr2[i]), 1);
//         }
//     }
//     element.className = arr1.join(' ');
// }

// let btnContainer = document.getElementById('mySkillsBtn');

// let btns = btnContainer.getElementsByClassName('filterOption');

// for (let i = 0; i < btns.length; i++) {
//     btns[i].addEventListener('click', function() {
//         let current = document.getElementsByClassName('active');
//         current[0].className = current[0].className.replace(" active", "");
//         this.className += " active";
//     });
// }




window.onscroll = function() {
    stickyNav()
}

let navbar = document.getElementById('topNav');
let sticky = navbar.offsetTop;



function stickyNav() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
}


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-item").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))



// filterSelection('all');
