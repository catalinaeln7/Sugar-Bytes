import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { Product } from "../../app/models/product";

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
                <Typography gutterBottom color='secondary' variant="h5">
                    {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.type}
                </Typography>
                <Typography gutterBottom color='secondary' variant="h6">
                    ${(product.price / 100).toFixed(2)}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant='contained' size="small">Add to cart</Button>
                <Button variant='contained' size="small">View</Button>
            </CardActions>
        </Card>
    )
}