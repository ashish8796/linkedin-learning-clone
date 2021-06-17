import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import "./Payment.css";
import styled from "styled-components";
import { Redirect, useHistory, useLocation } from "react-router-dom";
// import {location} from
import { useDispatch, useSelector } from "react-redux";
import { registerUser, subscribeUser } from "../../store/user/action";
import { getData, setData } from "../../store/temp/state";
import { State } from "../../store/tsTypes";
import axios from "axios";
import { SUBSCRIBE_USER } from "../../store/user/actionTypes";
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.REACT_APP_STRIPE_PUBLIC_KEY ||
    "pk_test_51J2X8bSGjIO6Ns88xrooTIVI2IY4dc0CgVBUONJkjyGKyqTvqGsRIvhPmERXYS5BG3pw0vVfbZJETehaCAFVoxpi00aGOIFL0A"
);

const Product = styled.div`
  width: 100%;
  margin: auto;
  display: grid;
  grid-template-rows: auto 70px;
  place-content: center;
  img {
    margin: auto;
    width: 100px;
  }
`;

const Section = styled.section`
  width: 100%;
  margin: auto;
  margin-top: 100px;
  display: grid;
  grid-template-rows: auto 70px;
  place-content: center;
  text-align: center;
  button {
    padding: 10px;
    background-color: #036799;
    color: white;
    font-weight: 900;
    height: 70px;
  }
`;
const ProductDisplay = ({ handleClick }: any) => (
  <Section>
    <Product className="product">
      <img
        src="https://linkden-learning.s3.ap-south-1.amazonaws.com/profile-pics/Logo.png"
        alt="The cover of Stubborn Attachments"
      />
      <div className="description">
        <h3>Subscription</h3>
        <span>500.00 INR</span>
      </div>
    </Product>
    <button
      type="button"
      id="checkout-button"
      role="link"
      onClick={handleClick}
    >
      Checkout
    </button>
  </Section>
);

const Message = ({ message }: any) => (
  <Section>
    <p>{message}</p>
  </Section>
);

export default function PaymentPage(props: any) {
  const [message, setMessage] = useState("");
  const { userDetails } = useSelector((state: State) => state.user);
  //    console.log(preUser);
  const dispatch: any = useDispatch();
  const history = useHistory();

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
      const payload = {
        subscribe: true,
      };

      let userId = getData("data");
      console.log(userId.userId);
      dispatch(subscribeUser(userId.userId, payload));
      history.push("/");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
      const payload = {
        subscribe: false,
      };

      let userId = getData("data");
      console.log(userId.userId);
      dispatch(subscribeUser(userId.userId, payload));
      history.push("/signup");
      //   dispatch(subscribeUser(data.user._id,payload))
    }
  }, []);

  const handleClick = async (event: any) => {
    const stripe: any = await stripePromise;

    const response = await fetch("http://localhost:5000/payment", {
      method: "POST",
    });

    const session = await response.json();

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    // <Redirect to="/" />
    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      <Redirect to="/page-not-found" />;
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  };
  // var data={}
  if (message) {
    return <Message message={message} />;
  } else {
    // setData("/data",location.state)
    return <ProductDisplay handleClick={handleClick} />;
  }
  //   return message ? (
  //   ) : (
  //   );
}
