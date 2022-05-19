import React from "react";
import { Grid } from '@material-ui/core';

import Product from "./Product/Product";

import useStyles from './styles';

const products = [
    { id: 1, name: 'Shoes', description: 'Running shoes.', price: '$5', image: 'https://m.media-amazon.com/images/I/81i057rz8gS._UX500_.jpg'},
    { id: 2, name: 'Macbook', description: 'Apple macbook.', price: '$10', image: 'https://pngimg.com/uploads/macbook/macbook_PNG65.png '},
    { id: 3, name: 'Macbook', description: 'Apple macbook.', price: '$10', image: 'https://pngimg.com/uploads/macbook/macbook_PNG65.png '},
    { id: 4, name: 'Macbook', description: 'Apple macbook.', price: '$10', image: 'https://pngimg.com/uploads/macbook/macbook_PNG65.png '},
]; 

const Products = () => {

    const classes = useStyles();

    return (
        <main className={classes.content}>  {/* Grid of type container */}
        <Grid container justify="center" spacing={4} className={classes.root}>
            {products.map((product) => ( //grid of type item
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product}/>
                </Grid>
            ))}
        </Grid>
    </main>
    );
};

export default Products;