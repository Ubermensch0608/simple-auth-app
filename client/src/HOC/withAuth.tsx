import { ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { getCookie } from "../utils";

export const checkIsUserVerified = () => {
  const user = getCookie("user");

  return axios.get(`${import.meta.env.VITE_SERVER_END_POINT}/auth/check`, {
    headers: {
      Authorization: JSON.stringify(user),
    },
  });
};

export const withAuth = (Component: () => ReactNode) => () => {
  const [isVerified, setIsVerified] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const { data: verification } = await checkIsUserVerified();

        setIsVerified(verification.verify);
      } catch (error: any) {
        console.error(error);
        setIsVerified(error.response.data.verify || false);
      }

      if (!isVerified) {
        navigate("/login");
      }
    })();
  }, [isVerified, navigate]);

  return <Component />;
};
