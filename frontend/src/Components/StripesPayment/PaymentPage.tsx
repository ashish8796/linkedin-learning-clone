import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import "./Payment.css";
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY||"");

const ProductDisplay = ({ handleClick }:any) => (
  <section>
    <div className="product">
      <img width="100px"
        src="https://linkden-learning.s3.ap-south-1.amazonaws.com/profile-pics/Logo.png"
        alt="The cover of Stubborn Attachments"
      />
      <div className="description">
        <h3>Subscription</h3>
        <h5>1200.00 INR</h5>
      </div>
    </div>
    <button type="button" id="checkout-button" role="link" onClick={handleClick}>
      Checkout
    </button>
  </section>
);

const Message = ({ message }:any) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function PaymentPage() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  const handleClick = async (event:any) => {
    const stripe:any = await stripePromise;

    const response = await fetch("http://localhost:5000/payment", {
      method: "POST",
    });

    const session = await response.json();

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  };

  return message ? (
    <Message message={message} />
  ) : (
    <ProductDisplay handleClick={handleClick} />
  );
}
