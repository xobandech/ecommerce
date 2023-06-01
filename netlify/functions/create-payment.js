require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async (e) => {
  try {
    const { amount } = JSON.parse(e.body);
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "eur",
      payment_method_types: ["card"],
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ payment }),
    };
  } catch (error) {
    console.log({ error });
    return {
      status: 400,
      body: JSON.stringify({ error }),
    };
  }
};
