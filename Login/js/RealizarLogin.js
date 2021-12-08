async function Login() {
  const api = axios.create({
    baseURL: "http://localhost:3000",
  });

  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  const result = await api.post("/login", { email, password });

  if (result && result?.data) {
    const userData = result.data;

    localStorage.setItem("session", JSON.stringify(userData));

    window.location.href =
      "../Dashboard_Comerciante/dashboardComerciante.html";
  }

  console.log(result.data);
}
