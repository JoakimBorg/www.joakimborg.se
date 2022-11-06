// Temporarily Removed Counter

// Counter Säljstatistik Konsulter
// var counterOne = document.getElementsByClassName('statistikCounterOne');

// var vpCounterOne = {
//   init: function(elem) {
//     this.elem = elem;
//     this.value = parseInt(this.elem.innerHTML);
//     this.currentValue = 0;
//     this.step = 0;
   
//     this.timer = setInterval(function() {
//       vpCounterOne.count();
//     }, 0);
//   },
//   count: function() {
//       this.step = (this.value - this.currentValue) * .004;
//       this.currentValue += this.step;
//       this.elem.innerHTML = Math.ceil(this.currentValue);
//     }
// }
// vpCounterOne.init(counterOne[0]);

// // Counter Säljstatistik Fiber
// var counterHTMLTwo = document.getElementsByClassName('statistikCounterTwo');

// var vpCounterTwo = {
//   init: function(elem) {
//     this.elem = elem;
//     this.value = parseInt(this.elem.innerHTML);
//     this.currentValue = 0;
//     this.step = 0;
   
//     this.timer = setInterval(function() {
//       vpCounterTwo.count();
//     }, 0);
//   },
//   count: function() {
//       this.step = (this.value - this.currentValue) * .006;
//       this.currentValue += this.step;
//       this.elem.innerHTML = Math.ceil(this.currentValue);
//     }
// }
// vpCounterTwo.init(counterHTMLTwo[0]);

// // Counter Säljstatistik Konserter
// var counterHTMLThree = document.getElementsByClassName('statistikCounterThree');

// var vpCounterThree = {
//   init: function(elem) {
//     this.elem = elem;
//     this.value = parseInt(this.elem.innerHTML);
//     this.currentValue = 0;
//     this.step = 0;
   
//     this.timer = setInterval(function() {
//       vpCounterThree.count();
//     }, 0);
//   },
//   count: function() {
//       this.step = (this.value - this.currentValue) * .005;
//       this.currentValue += this.step;
//       this.elem.innerHTML = Math.ceil(this.currentValue);
//     }
// }
// vpCounterThree.init(counterHTMLThree[0]);

// Scroll Trigger Konsulter
const animation_elementsOne = document.querySelectorAll('.boxOne');

const observerOne = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('statistikBoxOne');
        } else {
            entry.target.classList.remove('statistikBoxOne');
        }
    })
}, {
    threshold: 0.5
});

for (let i = 0; i < animation_elementsOne.length; i++) {
    const el = animation_elementsOne[i];

    observerOne.observe(el);
};

// Scroll Trigger Fiber
const animation_elementsTwo = document.querySelectorAll('.boxTwo');

const observerTwo = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('statistikBoxTwo');
        } else {
            entry.target.classList.remove('statistikBoxTwo');
        }
    })
}, {
    threshold: 0.5
});

for (let i = 0; i < animation_elementsTwo.length; i++) {
    const el = animation_elementsTwo[i];

    observerTwo.observe(el);
};

// Scroll Trigger Konserter
const animation_elementsThree = document.querySelectorAll('.boxThree');

const observerThree = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('statistikBoxThree');
        } else {
            entry.target.classList.remove('statistikBoxThree');
        }
    })
}, {
    threshold: 0.5
});

for (let i = 0; i < animation_elementsThree.length; i++) {
    const el = animation_elementsThree[i];

    observerThree.observe(el);
};