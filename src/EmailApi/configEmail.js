/** @format */

import * as EmailJs from "emailjs-com";
export const sendEmail = async (props) => {
  const userId = process.env.REACT_APP_USER_ID;
  const templateID = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
  const { name, email, subject, message } = props;
  let templateParams = {
    from_name: "Navin Prakash",
    to_name: name,
    subject: subject,
    reply_to: email,
    message,
  };

  return EmailJs.send("service_7l2giwe", templateID, templateParams, userId);
};
export default EmailJs;
