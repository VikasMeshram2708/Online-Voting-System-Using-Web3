const LoginForm = document.querySelector("#loginForm");

LoginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(LoginForm);
  const username = formData.get("username");
  const password = formData.get("password");

  const Logindata = {
    username,
    password,
  };

  console.log(Logindata);
  form.reset();

  const response = await fetch("http://localhost:5000/login", {
    method: "POST",
    body: JSON.stringify(Logindata),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const insertUser = response.json();

  if (response.status == 422 || !insertUser) {
    window.alert("Invalid Credentials!");
  } else {
    window.alert("User LoggedIn Successfully!");

    hideShivSenaBtn.style.display = "";

    hideBjpBtn.style.display = "";

    hideBspBtn.style.display = "";

    hideCongressBtn.style.display = "";

    hideAapBtn.style.display = "";

    // for shivsena
    hideShivSenaBtn.addEventListener("click", (event) => {
      alert("You Have Votted for SHIV SENA!");
      location.reload();
    });

    // for bjp
    hideBjpBtn.addEventListener("click", (event) => {
      alert("You Have Votted for BJP!");
      location.reload();
    });

    // for bsp
    hideBspBtn.addEventListener("click", (event) => {
      alert("You Have Votted for BSP!");
      location.reload();
    });

    // for congress
    hideCongressBtn.addEventListener("click", (event) => {
      alert("You Have Votted for CONGRESS!");
      location.reload();
    });

    // for aap
    hideAapBtn.addEventListener("click", (event) => {
      alert("You Have Votted for Aam Aadmi Party!");
      location.reload();
    });
  }
});
