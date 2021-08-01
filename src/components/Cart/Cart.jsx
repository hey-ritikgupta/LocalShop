import React from 'react';
import { Container, Typography, Button, Grid, Card, CardActions, CardContent } from '@material-ui/core';
import { Link } from 'react-router-dom';

import CartItem from './CartItem/CartItem';
import useStyles from './styles';

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
  const classes = useStyles();

  const handleEmptyCart = () => onEmptyCart();

  const renderEmptyCart = () => (
    <Typography variant="subtitle1">You have no items in your shopping cart,
      <Link className={classes.link} to="/">start adding some</Link>!
    </Typography>
  );

  if (!cart.line_items) return 'Loading';

  const renderCart = () => (
    <>
  
  <Grid container fixed spacing={3} >
  <Grid item xs={12} sm={8}  >
        {cart.line_items.map((lineItem) => (
          <div key={lineItem.id} style={{marginBottom: "3%"}}>
          
            <CartItem item={lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
          </div>
        ))}
        </Grid>
      <Grid item xs={12} sm={4}>
        <Card className="cart-item">
          <CardContent>
              <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>    
          </CardContent>
          <CardActions>
          <div className={classes.buttonMargin}>
                <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty cart</Button>
                <Button className={classes.checkoutButton} component={Link} to="/checkout" size="large" type="button" variant="contained" color="primary">Checkout</Button>
              </div>
          </CardActions>
          
        </Card>
      </Grid>
     
      </Grid>
  
    </>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
      { !cart.line_items.length ? renderEmptyCart() : renderCart() }
    </Container>
  );
};

export default Cart;
