const nodemailer = require("nodemailer");

const generateOrderEmail = ({ order, total }) => {
  return `
    <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;">
      <h2 style="color: #2c3e50; text-align: center;">Your Recent Order for ${total}</h2>
      <p style="font-size: 16px; line-height: 1.5; text-align: center;">Please start walking over, we will have your order ready in the next 20 mins.</p>
      <ul style="list-style: none; padding: 0;">
        ${order
          .map(
            (item) => `
            <li style="display: flex; align-items: center; margin-bottom: 15px;">
              <img src="${item.thumbnail}" alt="${item.name}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 5px; margin-right: 15px;"/>
              <span style="font-size: 14px;">${item.size} ${item.name} - ${item.price}</span>
            </li>`
          )
          .join("")}
      </ul>
      <p style="font-size: 16px; line-height: 1.5; text-align: center;">Your total is <strong style="color: #e74c3c;">$${total}</strong> due at pickup</p>
    </div>
  `;
};

// https://ethereal.email/create
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: 587,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

exports.handler = async (event) => {
  const body = JSON.parse(event.body);

  if (body.mapleSyrup) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Error" }),
    }
  }

  const requiredFields = ["email", "name", "order"];

  for (const field of requiredFields) {
    if (!body[field]) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: `You are missing the ${field} field`,
        }),
      };
    }
  }

  await transporter.sendMail({
    from: "gatsby@example.com",
    to: `${body.name} <${body.email}>`,
    subject: "Your recent order from Slick's Slices!",
    html: generateOrderEmail(body),
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Order placed" }),
  };
};
