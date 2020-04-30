const secret = process.env.SITE_PW;
const verifyPw = (pw) => {
  if (pw === secret) return true;
  return false;
};

export default verifyPw;
