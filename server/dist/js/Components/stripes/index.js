"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPaymentDetails = exports.paymentWithCard = exports.checkStatus = void 0;
const stripe = require("stripe")(process.env.STRIPE_SECRET ||
    "sk_test_51J2X8bSGjIO6Ns88v8UYRI4p75X5f9hAChn7LsvEBEunkXg5eCehRHytZ6PiWpkcCoIP9a5xQbczexcTcjekx9LU00Z8TcyT1I");
const checkStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.route);
        res.status(200).json({ message: "success" });
    }
    catch (error) {
        console.log(error);
    }
});
exports.checkStatus = checkStatus;
const paymentWithCard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, _id } = req.body;
        console.log(email);
        console.log(req.body);
        const session = yield stripe.checkout.sessions.create({
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
            success_url: `http://localhost:3000/payment-page?success=true`,
            cancel_url: `http://localhost:3000/payment-page?canceled=true`,
        });
        // console.log(session);
        res.status(200).json({ id: session.id, client_secret: session });
    }
    catch (error) {
        console.log(error);
        res.end();
    }
});
exports.paymentWithCard = paymentWithCard;
const getPaymentDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getPaymentDetails = getPaymentDetails;
