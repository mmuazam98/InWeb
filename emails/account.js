const sgMail = require("@sendgrid/mail");
const api_key = process.env.SENDGRID_APIKEY;

sgMail.setApiKey(api_key);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "m.muazam.99@gmail.com",
    subject: "Thanks for joining in!",
    text: `Hello ${name}, Welcome to TaskManager.`,
    html: "<strong>lorem ipsum</strong>",
  });
};
const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "m.muazam.99@gmail.com",
    subject: "Cancellation Email!",
    html: `Hi ${name},
    <br>
    First of all, we appreciate you being part of the [company name] community.
    <br>
    We’d like to learn the reason behind your cancellation so we can better serve our customers (and hopefully you!) in the future.
    <br>
    We hope to see you back sometime soon <br>
    Thanks`,
  });
};
module.exports = { sendWelcomeEmail, sendCancellationEmail };
