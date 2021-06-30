import React from 'react';
import CartItem from './CartItem';
import { connect, useDispatch } from 'react-redux';
import { clearCartAction, getTotalCartAction } from '../redux/actions';

const CartContainer = ({ cart = [], total, amount }) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getTotalCartAction(total, amount));
  }, [cart]);

  if (cart.length === 0) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className='cart'>
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <article>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      {/* cart footer */}
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button
          className='btn clear-btn'
          onClick={() => dispatch(clearCartAction())}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

const mapStateToProps = (store) => {
  const { cart, total, amount } = store;
  return { cart, total, amount };
};

export default connect(mapStateToProps)(CartContainer);
