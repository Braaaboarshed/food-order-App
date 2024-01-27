import React, { useState, useEffect } from 'react';
import classes from './paymentPage.module.css';
import { getNewOrderForCurrentUser } from '../../services/orderService';
import Title from '../../components/Title/Title';
import OrderItemsList from '../../components/OrderItemsList/OrderItemsList';
import Map from '../../components/Map/Map';
import { useLoading } from '../../hooks/useLoading';
import { pay } from '../../services/orderService';
import { useCart } from '../../hooks/useCart';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
export default function PaymentPage() {
  const [order, setOrder] = useState();
  const { clearCart } = useCart();
  const navigate = useNavigate();
  useEffect(() => {
    getNewOrderForCurrentUser(order).then(data => setOrder(data));
  }, []);

  if (!order) return;

  async function pay(){
    try {
      clearCart();
      toast.success('Payment Saved Successfully', 'Success');
      navigate('/');
    } catch (error) {
      toast.error('Payment Save Failed', 'Error');
    }
  }

  return (
    <>
      <div className={classes.container}>
        <div className={classes.content}>
          <Title title="Order Form" fontSize="1.6rem" />
          <div className={classes.summary}>
            <div>
              <h3>Name:</h3>
              <span>{order.name}</span>
            </div>
            <div>
              <h3>Address:</h3>
              <span>{order.address}</span>
            </div>
          </div>
          <OrderItemsList order={order} />
        </div>

        <div className={classes.map}>
          <Title title="Your Location" fontSize="1.6rem" />
          <Map readonly={true} location={order.addressLatLng} />
        </div>

        <div className={classes.buttons_container}>
          <div className={classes.buttons}>
            <button className={classes.pay_button} onClick={pay}>Pay now</button>
          </div>
        </div>
      </div>
    </>
  );
}