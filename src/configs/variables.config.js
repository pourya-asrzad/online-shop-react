export const API_BASE_URL =
  process.env.REACT_APP_BASE_API || "http://localhost:3001/";
export const username =
  localStorage.getItem("userinfo") &&
  JSON.parse(localStorage.getItem("userinfo")).username;
