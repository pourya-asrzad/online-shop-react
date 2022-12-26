export const getAppTitle = () => {
  return process.env.REACT_APP_APLICATION_NAME;
};

export const getAppDescription = () => {
  return process.env.REACT_APP_WEBSITE_DESC;
};

export const convertNumberToPersian = (number) => {
  const persianNumber = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return number.toString().replace(/[0-9]/g, function (w) {
    return persianNumber[+w];
  });
};

export const getCopyrightMassege = () => {
  return process.env.REACT_APP_WEBSITE_COPYRIGHT;
};
