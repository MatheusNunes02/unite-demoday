(async function validate() {
  const session = localStorage.getItem("session");

  if (!session) return (window.location.href = "../../Login/login.html");
  const parsed = JSON.parse(session);

  const api = axios.create({
    baseURL: "http://localhost:3000",
  });

  const result = api.post(
    "",
    { email: parsed.email },
    { headers: { token: parsed.token } }
  );
})();
