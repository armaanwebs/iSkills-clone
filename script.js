var endDate = "29 February 2024 09:37:28 AM";

function countDown() {
  const end = new Date(endDate);
  const now = new Date();
  const diff = (end - now) / 1000;
  const days = Math.floor(diff / 3600 / 24);
  document.querySelector("#day h4").innerHTML = days;
  const hours = Math.floor(diff / 3600) % 24;
  if (hours < 10) {
    document.querySelector("#hrs h4").innerHTML = "0" + hours;
  } else {
    document.querySelector("#hrs h4").innerHTML = hours;
  }

  const mins = Math.floor(diff / 60) % 60;
  document.querySelector("#min h4").innerHTML = mins;
  const secs = Math.floor(diff) % 60;
  document.querySelector("#sec h4").innerHTML = secs;
}

setInterval(function () {
  countDown();
}, 1000);
function faqAccordian() {
  var faqs = document.querySelectorAll(".faq");

  faqs.forEach(function (elem) {
    elem.addEventListener("click", function () {
      elem.classList.toggle("active");
    });
  });
}
faqAccordian();
function welcomeAnimation() {
  gsap.from("#mt-nandla", {
    y: "200%",

    scrollTrigger: {
      scroller: "body",
      trigger: "#welcome",
      start: "top 50%",
      end: "top 40%",

      scrub: 1,
    },
  });
  gsap.from("#rocket-svg", {
    x: "-200%",
    y: "200%",

    scrollTrigger: {
      scroller: "body",
      trigger: "#welcome",
      delay: 5,
      start: "top 50%",
      end: "top 40%",

      scrub: 1,
    },
  });

  gsap.from("#states .box", {
    y: "200%",
    stagger: 0.2,
    scrollTrigger: {
      scroller: "body",
      trigger: "#welcome",
      start: "top 5%",
      end: "top 15%",
      scrub: 1,
    },
  });
}
welcomeAnimation();

gsap.to("#course-details-top-img img", {
  opacity: 1,
  scale: 1,
  scrollTrigger: {
    scroller: "body",
    trigger: "#course-details-top",
    start: "top 80%",
    end: "top 70%",

    scrub: 2,
  },
});

function trainerAnimation() {
  gsap.from("#main-trainer", {
    x: "-100%",
    scrollTrigger: {
      scroller: "body",
      trigger: "#trainers",
      start: "top 50%",
      end: "top 40%",
      scrub: 2,
    },
  });
  gsap.from("#support-members .elem", {
    x: "-100%",
    stagger: 0.08,

    scrollTrigger: {
      scroller: "body",
      trigger: "#trainers",
      start: "top 50%",
      end: "top 40%",

      scrub: 2,
    },
  });
}

trainerAnimation();

function addCourses() {
  gsap.from("#additional-courses #iCom", {
    x: "-100%",
    scrollTrigger: {
      scroller: "body",
      trigger: "#additional-courses",
      start: "top 80%",
      end: "top 75%",

      scrub: 2,
    },
  });

  gsap.from("#additional-courses #iVam", {
    x: "100%",
    scrollTrigger: {
      scroller: "body",
      trigger: "#additional-courses",
      start: "top 80%",
      end: "top 75%",

      scrub: 2,
    },
  });
}

addCourses();

function incubatorsAnimation() {
  gsap.from("#row #mut,#fsd", {
    y: "100%",
    stagger: 0.1,
    scrollTrigger: {
      scroller: "body",
      trigger: "#incubators",
      start: "top 40%",
      end: "top 35%",
      scrub: 2,
    },
  });

  gsap.from("#row #gjr", {
    x: "25%",
    scrollTrigger: {
      scroller: "body",
      trigger: "#incubators",
      start: "top -25%",
      end: "top -20%",

      scrub: 2,
    },
  });

  gsap.from("#row #isb", {
    x: "-25%",
    scrollTrigger: {
      scroller: "body",
      trigger: "#incubators",
      start: "top -25%",
      end: "top -20%",

      scrub: 2,
    },
  });
}

incubatorsAnimation();

var hamburger = document.querySelector(".hamburger");
var navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(function (val) {
  val.addEventListener("click", function () {
    hamburger.classList.remove(".active");
    navMenu.classList.remove(".active");
  });
});
