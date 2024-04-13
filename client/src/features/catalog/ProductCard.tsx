import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Product } from "../../app/models/product";
import { Link } from "react-router-dom";

interface Props {
    product: Product;
}

export default function ProductCard({product} : Props) {
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
                    ${(product.price / 100).toFixed(2)}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant='contained' size="small">Add to cart</Button>
                <Button component={Link} to={`/catalog/${product.id}`} variant='contained' size="small">View</Button>
            </CardActions>
        </Card>
    )
}