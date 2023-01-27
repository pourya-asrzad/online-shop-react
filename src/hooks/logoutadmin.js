import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { INTERNAL_PATHS } from "../configs/routs.config";

export const useLogoutadmin = (error) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (error) {
      if (error.originalStatus == 401) {
        navigate(INTERNAL_PATHS.ADMIN_LOGIN);
      }
    }
  }, [error]);
};
