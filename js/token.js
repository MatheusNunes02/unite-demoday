(async function validate() {
  const session = localStorage.getItem("session");

  if (!session) return (window.location.href = "../../Login/login.html");
  const parsed = JSON.parse(session);

  const api = axios.create({
    baseURL: "http://localhost:3000",
  });
  console.log(parsed.token);
  const result = await api.post("/checkAuthorization", {
    email: parsed.email,
    token: parsed.token,
  });

  console.log(result.data);
  if (!result.data) {
    return (window.location.href = "../../Login/login.html");
  }
})();
