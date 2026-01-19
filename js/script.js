document.addEventListener('DOMContentLoaded', () => {

  axios.get('https://fakestoreapi.com/products')
    .then(response => {
      const products = response.data;

      const priceElements1 = document.querySelectorAll('.best-seller-second-heading');
      const priceElements2 = document.querySelectorAll('.new-arrivals-second-heading');
      // const images = document.querySelectorAll(".best-seller-img")

      const count1 = document.querySelectorAll('.best-seller-p');
      const count2 = document.querySelectorAll('.new-arrivals-p');

      for (let i = 0; i < priceElements1.length; i++) {
        const product = products[i % products.length];
        priceElements1[i].textContent = `$${product.price.toFixed(2)}`;
        count1[i].textContent = `Left In Stock: ${product.rating.count} pcs.`;

      }

      // let apiIndex = priceElements1.length;
      // for (let i = 0; i < priceElements2.length; i++) {
      //   const product = products[apiIndex % products.length];
      //   priceElements2[i].textContent = `$${product.price.toFixed(2)}`;
      //   count2[i].textContent = `Left In Stock: ${product.rating.count} pcs.`;
      //   apiIndex++;
      // }
    })
    .catch(error => {
      console.error('Error fetching products:', error);
    });

    axios.get("https://dummyjson.com/products/category/home-decoration")
      .then(res => {
        const products = res.data.products;
        const images = document.querySelectorAll(".new-arrivals-img");
        const first_heading = document.querySelectorAll(".new-arrivals-first-heading");
        const price = document.querySelectorAll(".new-arrivals-second-heading");
        const stock = document.querySelectorAll(".new-arrivals-p");

        images.forEach((img, index) => {
          if (products[index]) {
            img.src = products[index].thumbnail;
            first_heading[index].textContent = products[index].title;
            price[index].textContent = `$${products[index].price}`;
            stock[index].textContent = `Left In Stock: ${products[index].stock} pcs.`;
          }
        });
      })
      .catch(err => console.log(err));





  // Burger Menu

  const burger_btn = document.querySelector('.burger-menu button');
  const burger_close = document.getElementById('burger-close');
  const nav_bar = document.querySelector('.nav-bar');
  const burger_menu = document.querySelector('.burger-menu');

  if (burger_btn && burger_close && nav_bar && burger_menu) {  /////////
    burger_btn.addEventListener('click', () => {
      nav_bar.classList.add('active');
      burger_menu.classList.add('active');
    });

    burger_close.addEventListener('click', () => {
      nav_bar.classList.remove('active');
      burger_menu.classList.remove('active');
    });
  }



  // Email Validation

  let email_input = document.getElementById('email');

  function emailValidation() {
    let emailInputValue = email_input.value;
    let pErrorEmail = document.getElementById('error-email');
    let emailpattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailInputValue.match(emailpattern)) {
      pErrorEmail.innerText = '';
    } else {
      pErrorEmail.innerText = 'Your Email is Invalid';
      pErrorEmail.style.color = 'red';
    }

    if (emailInputValue === "") {
      pErrorEmail.innerText = "";
    }
  }

  if (email_input) {
    email_input.addEventListener('keyup', emailValidation);  //////////
  }



  // Registration Validation

  let register_form = document.getElementById("registration");
  let register_btn = document.getElementById("register-btn");

  if (register_form && register_btn) {
    register_btn.addEventListener("click", function (event) {
      event.preventDefault();

      let errors = {};

      let firstname = document.getElementById("first_name_id").value;
      let lastname = document.getElementById("last_name_id").value;

      let password1 = document.getElementById("password1_id").value;
      let password2 = document.getElementById("password2_id").value;

      let username = document.getElementById("username_id").value;
      let email = document.getElementById("email").value;

      if (firstname === "") {
        errors.firstname = "Name field can not be empty";
    }

    if (lastname === "") {
        errors.lastname = "Surname field can not be empty";
    }

    if (username === "") {
        errors.username = "Username field can not be empty";
    }

    if (password1 === "") {
        errors.password1 = "Password field can not be empty";
    } 
    else if (password1.length < 8) {
        errors.password1 = "Password must be at least 8 symbols";
    }

    if (password2 !== password1) {
        errors.password2 = "Your passwords do not match";
    }

    if (email === "") {
        errors.email = "Email field can not be empty";
    }

      // Gender
      let gender = false;
      document.querySelectorAll(".input-el").forEach((item) => {
        if (item.checked) {
            gender = true;
        }
      });

      if (!gender) {
        errors.gender = "Please select your gender";
      }

      // Checkbox
      let agree = document.getElementById("check").checked;
      if (!agree) {
        errors.agree = "You must agree our terms and conditions";
      }

      document.querySelectorAll(".error-text").forEach(el => el.textContent = "");

      for (let key in errors) {
        let pError = document.getElementById("error-" + key);
        if (pError) {
          pError.textContent = errors[key];
          pError.style.color = "red";
        }
      }

      if (Object.keys(errors).length === 0) {
        register_form.submit();
      }
    });
  }



  // Show / Hide Password

  let passw = document.getElementById('password1_id');
  let icon = document.getElementById('icon');

  if (passw && icon) {
    icon.addEventListener('click', function () {
      if (passw.type === 'password') {
        passw.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
      } else {
        passw.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
      }
    });
  }




    const scroll_to_top_btn = document.getElementById("scroll-to-top");

if (scroll_to_top_btn) {
    const media_1024px = window.matchMedia('(max-width: 1024px)');
    const media_768px = window.matchMedia('(max-width: 768px)');
    const media_480px = window.matchMedia('(max-width: 480px)');
    const media_320px = window.matchMedia('(max-width: 320px)');


    function handleScroll() {
        let show = false;

        if (media_320px.matches) {
            show = window.scrollY > 1000 && window.scrollY < 9100;
        } else if (media_480px.matches) {
            show = window.scrollY > 1000 && window.scrollY < 6500;
        } else if (media_768px.matches) {
            show = window.scrollY > 1000 && window.scrollY < 5750;
        } else if (media_1024px.matches) {
            show = window.scrollY > 1000 && window.scrollY < 4400;
        }


        scroll_to_top_btn.style.display = show ? "flex" : "none";
    }

    window.addEventListener("scroll", handleScroll);

    scroll_to_top_btn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

}

const f_name = document.getElementById("first_name_id");
const l_name = document.getElementById("last_name_id");
const u_name = document.getElementById("username_id");
const email1 = document.getElementById("email");
const passw1 = document.getElementById("password1_id");
const passw2 = document.getElementById("password2_id");

f_name.value = localStorage.getItem("first_name");
l_name.value = localStorage.getItem("last_name");
u_name.value = localStorage.getItem("username");
email1.value = localStorage.getItem("email");
passw1.value = localStorage.getItem("password1");
passw2.value = localStorage.getItem("password2");


register_btn.addEventListener("click", save_in_local_storage);

function save_in_local_storage() {
  localStorage.setItem('first_name', f_name.value)
  localStorage.setItem('last_name', l_name.value)
  localStorage.setItem('username', u_name.value)
  localStorage.setItem('email', email1.value)
  localStorage.setItem('password1', passw1.value)
  localStorage.setItem('password2', passw2.value)

    setTimeout(() => {
    localStorage.clear()
    }, 1000 * 10);
};


});
