import React from 'react';
import Grid from '@material-ui/core/Grid';
import Banner from '../Home/Banner';
import Product from './Product/Product';
import useStyles from './styles';
import { Typography } from '@material-ui/core';

const Products = ({ products, onAddToCart, }) => {
  const classes = useStyles();

  if (!products.length) return <p>Loading...</p>;

  return (
    <>
    
    <main style={{width:'100%'}} >
      <div className={classes.toolbar} />
      <Banner/>
      <div className={classes.toolbar} />
      <Typography variant="h2" gutterBottom style={{textAlign:"center"}}>Products</Typography>
      <Grid className={classes.content} container justify="center" spacing={4}>
      
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
    </>
  );
};

export default Products;

