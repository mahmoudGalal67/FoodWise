// Nav Active

const links = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links a");

const url = window.location.href.split("/")[4] || "";
const path = url.slice(0, url.indexOf("."));

Array.from(navLinks).forEach((link) => {
  if (link.innerText.toLowerCase() === path) {
    link.parentNode.querySelector(".active").classList.remove("active");
    link.classList.add("active");
  }
});

// Send Email

const form = document.getElementById("form") || "";

if (form !== "") {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
  });
}

const sendEmail = () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const telephone = document.getElementById("telephone").value;
  const eventType = document.getElementById("eventType").value;
  const guests = document.getElementById("guests").value;
  const error = document.getElementById("error");

  if (!email || !name || !telephone || !eventType || !guests) {
    error.style.display = "block";
  } else {
    const info = { name, email, telephone, eventType, guests };
    emailjs.send("service_vk30p2f", "template_st2l0fn", info).then(() => {
      name.value = "";
      email.value = "";
      telephone.value = "";
      eventType.value = "";
      guests.value = "";
      error.style.display = "none";
      window.location.reload();
      alert("Your inquiry has been sent succefully");
    });
  }
};
