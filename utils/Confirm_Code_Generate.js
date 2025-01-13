// Generating a random 6-digit confirmation code
const generateConfirmationCode = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};
export default generateConfirmationCode;
