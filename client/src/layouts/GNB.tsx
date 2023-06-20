import { Link, Outlet } from "react-router-dom";

const GNB = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/auth">인증되어야 갈 수 있는 페이지</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default GNB;
