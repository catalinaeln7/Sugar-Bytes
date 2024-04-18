import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Product } from "../../app/models/product";
import { Link } from "react-router-dom";
import { useState } from "react";
import agent from "../../app/api/agent";
import { LoadingButton } from "@mui/lab";
import { useStoreContext } from "../../context/StoreContext";
import { currencyFormat } from "../../app/util/util";

interface Props {
    product: Product;
}

export default function ProductCard({product} : Props) {
    const [loading, setLoading] = useState(false);
    const {setBasket} = useStoreContext();

    function handleAddItem(productId: number) {
        setLoading(true);
        agent.Basket.addItem(productId)
            .then(basket => setBasket(basket))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }

    return (
        <Card>
            <CardMedia
                sx={{ height: 140, backgroundSize: 'contain' }}
                image={product.pictureUrl}
                title={product.name}
            />
            <CardContent>
                <Typography
                    gutterBottom
                    color='primary'
                    variant="h5"
                    sx={{
                        fontWeight: 500, // Medium weight
                        fontSize: 24,
                        textAlign: 'center',
                    }}
                >
                    {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.type}
                </Typography>
                <Typography gutterBottom color='primary' variant="h6">
                    {currencyFormat(product.price)}
                </Typography>
            </CardContent>
            <CardActions>
                <LoadingButton 
                    loading={loading} 
                    onClick={() => handleAddItem(product.id)}
                    variant='contained' 
                    size="small">Add to cart</LoadingButton>
                <Button component={Link} to={`/catalog/${product.id}`} variant='contained' size="small">View</Button>
            </CardActions>
        </Card>
    )
}