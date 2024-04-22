import LoadingComponent from "../../app/layout/LoadingComponent";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import ProductList from "./ProductList";
import { useEffect } from "react";
import { fetchFilters, fetchProductsAsync, productSelectors } from "./catalogSlice";
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, Grid, Pagination, Paper, Radio, RadioGroup, TextField, Typography } from "@mui/material";

const sortOptions = [
    {value: 'name', label: 'Alphabetical'},
    {value: 'priceDesc', label: 'Price - High to low'},
    {value: 'price', label: 'Price - Low to High'},
]

export default function Catalog() {
    const products = useAppSelector(productSelectors.selectAll);
    const {productsLoaded, status, filtersLoaded, types} = useAppSelector(state => state.catalog);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!productsLoaded) dispatch(fetchProductsAsync());
    }, [productsLoaded, dispatch])

    useEffect(() => {
        if (!filtersLoaded) dispatch(fetchFilters());
    }, [dispatch, filtersLoaded])

    if (status.includes('pending')) return <LoadingComponent/>

    return (
        <Grid container spacing={4}>
            <Grid item xs={3}>
                <Paper sx={{mb: 2}}>
                    <TextField 
                        label='Search products'
                        variant='outlined'
                        fullWidth
                    />
                </Paper>
                <Paper sx={{mb: 2, p: 2}}>
                <FormControl>
                    <RadioGroup>
                        {sortOptions.map(({value, label}) => (
                            <FormControlLabel value={value} control={<Radio />} label={label} key={value} />
                        ))}
                    </RadioGroup>
                </FormControl>
                </Paper>
                <Paper sx={{mb: 2, p: 2}}>
                    <FormGroup>
                        {types.map(type => (
                            <FormControlLabel control={<Checkbox defaultChecked />} label={type} key={type} />
                        ))}
                    </FormGroup>
                </Paper>
            </Grid>
            <Grid item xs={9}>
                <ProductList products={products}/>
            </Grid>
            <Grid container>
                <Grid item xs={3} />
                <Grid item xs={9}>
                    <Box display='flex' justifyContent='space-between' alignItems='center' pl={5}>
                        <Typography>
                            Displaying 1-6 of 12 items
                        </Typography>
                        <Pagination 
                            color='primary'
                            size='large'
                            count={10}
                            page={2}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    )
}