import React, {useContext, useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ProductsTable from './Table';
import { CartContext } from '../../Context/CartContext';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Admin() {
    const { products, setProducts } = useContext(CartContext);
    const [liveProducts, setLiveProducts] = useState(null);

    useEffect(() => {
        if (!products) return;
        setLiveProducts(products);
    }, [products]);

    const classes = useStyles();

    const [size, setSize] = React.useState('');
    const [title, setTitle] = React.useState('');
    const [descr, setDescr] = React.useState('');
    const [image, setImage] = React.useState('');
    const [price, setPrice] = React.useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(
            `http://localhost:3100/addProduct?size=${size}&title=${title}&descr=${descr}&image=${image}&price=${price}`,
            {
                method: 'POST',
            }
        ).then(() => setProducts(liveProducts));
    };

    return (
        <React.Fragment>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        Add new product
                    </Typography>
                    <form className={classes.form} onSubmit={handleSubmit}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            variant="outlined"
                            name="title"
                            label="Title"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            variant="outlined"
                            name="image"
                            label="Image URL"
                            type="text"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            variant="outlined"
                            name="price"
                            label="Price"
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(Number(e.target.value))}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            multiline
                            rowsMax={4}
                            variant="outlined"
                            name="desc"
                            label="Description"
                            type="text"
                            value={descr}
                            onChange={(e) => setDescr(e.target.value)}
                        />
                        <InputLabel id="demo-simple-select-label">
                            Size
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={size}
                            autoWidth={true}
                            onChange={(e) => setSize(e.target.value)}
                        >
                            <MenuItem value="s">S</MenuItem>
                            <MenuItem value="m">M</MenuItem>
                            <MenuItem value="l">L</MenuItem>
                            <MenuItem value="xl">XL</MenuItem>
                            <MenuItem value="xxl">XXL</MenuItem>
                        </Select>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Add Product
                        </Button>
                    </form>
                </div>
            </Container>
            <ProductsTable prods={liveProducts} />
        </React.Fragment>
    );
}
