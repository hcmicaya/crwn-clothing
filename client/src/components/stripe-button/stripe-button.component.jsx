import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		'pk_test_51KKq6vD2nVS2xwPIq2wRElKxy9HFzZfZEC8aS9uMRga8MWQOHlNBOpXX2fy7gfTwmCjSOcUedx46kc3PCifVk4hu00TDhm13kD';

	const onToken = (token) => {
		axios({
			url: 'payment',
			method: 'post',
			data: {
				amount: priceForStripe,
				token
			}
		})
			.then((response) => {
				alert('Payment successful');
			})
			.catch((error) => {
				console.log('Payment error: ', JSON.parse(error));
				alert('There was an issue with your pament. Please make sure you use the provided credit card.');
			});
	};

	return (
		<StripeCheckout
			label="Pay Now"
			name="CRWN Clothing Ltd."
			billingAddress
			shippingAddress
			image="https://images.unsplash.com/photo-1473644846653-440b9f02c892?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
