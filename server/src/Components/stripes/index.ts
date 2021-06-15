import { Request, Response } from "express";

const stripe = require("stripe")(
  process.env.STRIPE_SECRET ||
    "sk_test_51J2X8bSGjIO6Ns88v8UYRI4p75X5f9hAChn7LsvEBEunkXg5eCehRHytZ6PiWpkcCoIP9a5xQbczexcTcjekx9LU00Z8TcyT1I"
);

export const checkStatus = async (req: Request, res: Response) => {
  try {
    console.log(req.route);
    res.status(200).json({ message: "success" });
  } catch (error) {
    console.log(error);
  }
};

export const paymentWithCard = async (req: Request, res: Response) => {
  try {
    const { email, _id } = req.body;
    console.log(email);
    console.log(req.body);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      customer_email: email,
      client_reference_id: _id,
      line_items: [
        {
          //   name: "subscription",
          //   description: "for new new to subscription",
          price_data: {
            currency: "inr",
            product_data: {
              name: "Subscription",
              //   images: [
              //     "https://linkden-learning.s3.ap-south-1.amazonaws.com/profile-pics/Logo.png",
              //   ],
            },
            unit_amount: 500 * 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",

      success_url: `http://localhost:5000/check-status?success=true`,

      cancel_url: `http://localhost:5000/check-status?canceled=true`,
    });

    res.status(200).json({ id: session.id, client_secret: session });
  } catch (error) {
    console.log(error);
    res.end();
  }
};

export const getPaymentDetails = async (req: Request, res: Response) => {
  try {
    console.log(req);
  } catch (error) {
    console.log(error);
  }
};
