import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HRYJjAZlGwEXRrs418IFCilPFEMHlrZwgf3Oomdo2ONATovN7NTOmODb1ev5vZa5Wi06ts4D7UVwQs590TD1v1j00MJX9RMxd';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Crwn LTD'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={ `Your total is $${price}` }
            amount={ priceForStripe }
            panelLabel='Pay Now'
            token={ onToken }
            stripeKey={ publishableKey }
        />
    );
};

export default StripeCheckoutButton;