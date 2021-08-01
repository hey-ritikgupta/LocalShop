import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia, Grid } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';


import useStyles from './styles';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  const classes = useStyles();

  const handleUpdateCartQty = (lineItemId, newQuantity) => onUpdateCartQty(lineItemId, newQuantity);

  const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

  return (
    <Card className="cart-item">
    <Grid container spacing={2} >
    <Grid item xs={3} sm={2}>
      <CardMedia image={item.media.source} alt={item.name} className={classes.media} />
      </Grid>
      <Grid item xs={12} sm={10}>
      <CardContent className={classes.cardContent}>
        <Typography variant="h4">{item.name}</Typography>
        <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
          <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
          <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
        </div>
        <Button  type="button"  onClick={() => handleRemoveFromCart(item.id)}> <DeleteIcon /></Button>
       
      </CardActions>
      </Grid></Grid>
    </Card>
  );
};

export default CartItem;
