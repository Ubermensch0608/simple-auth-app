import { withAuth } from "../HOC/withAuth";

const AuthPage = withAuth(() => {
  return <div>AuthPage</div>;
});

export default AuthPage;
