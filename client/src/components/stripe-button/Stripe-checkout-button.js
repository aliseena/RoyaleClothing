import StripeCheckout from 'react-stripe-checkout';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import axios from 'axios';

const MySwal = withReactContent(Swal);

// stripe checkout button
const StripeCheckOutButton = ({ price }) => {
  const priceForStipe = price * 100;
  const publishableKey =
    'pk_test_51KAs34JBPfp3exDPo5W86EzzbrJZ85uU129yCjmMRMXLogyoBDJlvcCubFrE8rTacTfnbmXhn6cdAf2bg0jmEWro00aIJZN3m6';

  const handleSuccessfulPayment = () => {
    MySwal.fire({
      icon: 'success',
      title: 'Payment was successful',
      timer: 5000,
    });
  };
  const handleFailedPayment = () => {
    MySwal.fire({
      icon: 'error',
      title: 'Payment failed :(',
      timer: 5000,
    });
  };

  const onToken = async token => {
    try {
      const response = await axios({
        url: '/payment',
        method: 'post',
        data: {
          amount: priceForStipe,
          token,
        },
      });
      if (response.status === 200) {
        handleSuccessfulPayment();
      }
    } catch (error) {
      handleFailedPayment();
      console.log('Error', error);
    }
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Royale Clothing"
      billingAddress
      shippingAddress
      image=""
      description={`Your total is $${price}`}
      amount={priceForStipe}
      panleLable=" Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckOutButton;
