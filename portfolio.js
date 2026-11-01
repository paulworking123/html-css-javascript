// ດຶງທຸກ Element ທີ່ຕ້ອງມີ Animation ຕອນ Scroll
const revealElements = document.querySelectorAll(".reveal");

// ເປີດໃຊ້ Style ເລີ່ມຕົ້ນແບບເຊື່ອງ ໃນ portfolio.css
document.body.classList.add("js-ready");

// ຕິດຕາມ Element ແລະ ສະແດງແຕ່ລະອັນເມື່ອເຂົ້າມາໃນໜ້າຈໍ
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        // ຢຸດຕິດຕາມ ເພື່ອໃຫ້ Animation ຫຼິ້ນພຽງຄັ້ງດຽວ
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

// ເລີ່ມຕິດຕາມແຕ່ລະ Element
revealElements.forEach((element) => {
  revealObserver.observe(element);
});
