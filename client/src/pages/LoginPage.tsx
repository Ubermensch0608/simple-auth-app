import { setCookie } from "../utils";
import BaseApi from "../api/BaseApi";

const requestUserLogin = (loginForm: { [key: string]: FormDataEntryValue }) =>
  BaseApi.post("/auth/login", loginForm);

const LoginPage = () => {
  const submitUserLoginForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const loginForm = new FormData(e.target as HTMLFormElement);

    const login = await requestUserLogin(
      Object.fromEntries(loginForm.entries())
    );

    // setCookie("token", login.data.token);
    console.log(login, "로그인");

    setCookie("user", login.data.user, {
      httpOnly: true,
      secure: true,
      path: "/",
    });
  };

  return (
    <>
      <h1>Auth</h1>
      <h2>Cookie 인증 방식</h2>
      <form onSubmit={submitUserLoginForm}>
        <label htmlFor="lastName">
          성:
          <input id="lastName" name="lastName" type="text" />
        </label>
        <label htmlFor="firstName">
          이름
          <input id="firstName" name="firstName" type="text" />
        </label>
        <button type="submit">로그인</button>
      </form>
    </>
  );
};
export default LoginPage;
