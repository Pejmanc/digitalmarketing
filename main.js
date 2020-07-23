// ------------ Smooth scrolling of all project-------------

const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
});
let rellax = new Rellax(".rellax");

// ------------ Type animation of home-text-------------
// ES6 Class
class TypeWriter {
  constructor(txtElement, words, wait = 1000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if (this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 300;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Init On DOM Load
// document.addEventListener("DOMContentLoaded", init);

// // Init App
// function init() {
//   const txtElement = document.querySelector(".txt-type");
//   const words = JSON.parse(txtElement.getAttribute("data-words"));
//   const wait = txtElement.getAttribute("data-wait");
//   // Init TypeWriter
//   new TypeWriter(txtElement, words, wait);
// }
// END------------End of Type animation of home-text-------------

// ------------Slide In Animation of About Section-------------

// let options = {
//   rootMargin: "20px",
//   threshold: 0.1,
// };

// let callback = (entries) => {
//   entries.forEach((entry) => {
//     if (entry.intersectionRatio > 0) {
//       entry.target.style.animation = `anim2 2s forwards ease-out`;
//     } else {
//       entry.target.style.animation = "none";
//     }
//   });
// };

// let targets = document.querySelectorAll(".anim");
// let observer = new IntersectionObserver(callback);

// targets.forEach((target) => {
//   observer.observe(target);
// });
// END------------End of Slide In Animation of About Section-------------

// ------Anim Left

let callbackleft = (entriesleft) => {
  entriesleft.forEach((entryleft) => {
    if (entryleft.intersectionRatio > 0) {
      entryleft.target.style.animation = `anim-left 2s ${entryleft.target.dataset.delay} forwards ease-out`;
    } else {
      entryleft.target.style.animation = "none";
    }
  });
};

let targetsleft = document.querySelectorAll(".anim-left");
let observerleft = new IntersectionObserver(callbackleft);

targetsleft.forEach((targetleft) => {
  observerleft.observe(targetleft);
});

//-----Anim-Mid
let callbackmid = (entriesmid) => {
  entriesmid.forEach((entrymid) => {
    if (entrymid.intersectionRatio > 0) {
      entrymid.target.style.animation = `anim-mid 2s ${entrymid.target.dataset.delay} forwards ease-out`;
    } else {
      entrymid.target.style.animation = "none";
    }
  });
};

let targetsmid = document.querySelectorAll(".anim-mid");
let observermid = new IntersectionObserver(callbackmid);

targetsmid.forEach((targetmid) => {
  observermid.observe(targetmid);
});

// ------Anim Right
let callbackright = (entriesright) => {
  entriesright.forEach((entryright) => {
    if (entryright.intersectionRatio > 0) {
      entryright.target.style.animation = `anim-right 2s ${entryright.target.dataset.delay} forwards ease-out`;
    } else {
      entryright.target.style.animation = "none";
    }
  });
};

let targetsright = document.querySelectorAll(".anim-right");
let observerright = new IntersectionObserver(callbackright);

targetsright.forEach((targetright) => {
  observerright.observe(targetright);
});

// ----------------------------

// let options = {
//   rootMargin: "20px",
//   threshold: 0.1,
// };

// let callback = (entries) => {
//   console.log(entries);
//   for (let index = 0; index < entries.length; index++) {
//     if (entries[index].intersectionRatio > 0) {
//       entries[index].target.style.animation = `anim${[
//         index,
//       ]} 2s forwards ease-out`;
//     } else {
//       entries[index].target.style.animation = "none";
//     }
//   }
// };

// let targets = document.querySelectorAll(".anim");
// let observer = new IntersectionObserver(callback);

// targets.forEach((target) => {
//   observer.observe(target);
// });
