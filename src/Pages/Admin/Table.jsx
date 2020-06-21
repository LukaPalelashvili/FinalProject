import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const createData = (id, title, descr, image, size, price) => {
    return { id, title, descr, image, size, price };
};

const rows = [];

export default function ProductsTable({ prods }) {
    const classes = useStyles();
    const [tableProds, setTableProds] = useState(null);

    useEffect(() => {
        if (!prods) return;

        setTableProds(prods);

        for (let pr of prods) {
            rows.push(
                createData(
                    pr.id,
                    pr.title,
                    pr.descr,
                    pr.image,
                    pr.size,
                    pr.price
                )
            );
        }
    }, [prods]);

    const deleteProduct = (id) => {
        fetch(`http://localhost:3100/deleteProduct?id=${id}`, {
            method: 'DELETE',
        }).then(() => setTableProds(tableProds));
    };

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Image</TableCell>
                        <TableCell>Size</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell component="th" scope="row">
                                {row.title}
                            </TableCell>
                            <TableCell>{row.descr}</TableCell>
                            <TableCell>{row.image}</TableCell>
                            <TableCell>{row.size}</TableCell>
                            <TableCell>{row.price}</TableCell>
                            <TableCell style={{cursor: 'pointer', color: 'red'}} onClick={() => deleteProduct(row.id)}>
                                Delete
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
