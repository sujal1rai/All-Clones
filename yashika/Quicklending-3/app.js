const faqs= document.querySelectorAll(".faq");
    faqs.forEach(faq =>{
        faq.querySelector('.arrow').addEventListener('click', () => { 
            faq.querySelector('.ans').classList.toggle('d-none');
        });
});

let reviews = document.querySelectorAll(".review-card");
let image = document.getElementById("review-img");
let imgs = ["pg6.png", "pg6-2.png", "pg6.png"];
let show = 0;

document.querySelector(".right-arrow").onclick = function() {
  reviews[show].classList.add("d-none");
  show++;
  if (show >= reviews.length){
    show = 0;
  } 
  reviews[show].classList.remove("d-none");
  image.src = imgs[show];
};

document.querySelector(".left-arrow").onclick = function() {
  reviews[show].classList.add("d-none");
  show--;
  if (show < 0){
    show = reviews.length - 1;
  }
  reviews[show].classList.remove("d-none");
  image.src = imgs[show];
};

