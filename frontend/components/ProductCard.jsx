import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, Snackbar, Alert, Modal, Box, Button, TextField, Stack } from '@mui/material';
import { useProductStore } from '../src/store/product';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 320,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

export const ProductCard = ({ product, onEdit }) => {
  if (!product) return null;

  const { deleteProduct, updateProduct } = useProductStore();

  const [toastState, setToastState] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setUpdatedProduct(product);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const [updatedProduct, setUpdatedProduct] = useState(product);

  const handleUpdateProduct = async (id, updatedProductObj) => {
    const { success, message } = await updateProduct(id, updatedProductObj);
    setToastState({
      open: true,
      message,
      severity: success ? 'success' : 'error',
    });
    handleClose();
  };

  const handleCloseToast = (_, reason) => {
    if (reason === 'clickaway') return;
    setToastState(prev => ({ ...prev, open: false }));
  };

  const handleDeleteProduct = async (id) => {
    const { success, message } = await deleteProduct(id);
    setToastState({
      open: true,
      message,
      severity: success ? 'success' : 'error',
    });
    handleClose();
  };

  return (
    <>
      <Card
        sx={{
          width: 200,
          height: 370,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          transition: "transform 0.2s, box-shadow 0.2s",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: 6,
          },
          "&:hover .card-content": {
            opacity: 0.5,
            pointerEvents: "none",
            transition: "opacity 0.3s",
          },
        }}
      >
        <CardMedia
          component="img"
          image={product.image}
          alt={product.name}
          sx={{
            width: "100%",
            height: 220,
            objectFit: "cover",
          }}
        />
        <CardContent
          className="card-content"
          sx={{
            minHeight: 20,
            maxHeight: 60,
            padding: "4px 10px",
            transition: "opacity 0.3s",
          }}
        >
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ fontSize: 15 }}
          >
            {product.name}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", fontSize: 13 }}
          >
            {product.price}$
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton
            aria-label="edit"
            onClick={handleOpen}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            aria-label="delete"
            onClick={() => handleDeleteProduct(product._id)}
          >
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Update Product
          </Typography>
          <Stack spacing={2} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Product Name"
              name="name"
              value={updatedProduct.name}
              onChange={(e) =>
                setUpdatedProduct({ ...updatedProduct, name: e.target.value })
              }
              sx={{ input: { color: "text.primary" } }}
            />
            <TextField
              fullWidth
              label="Price"
              name="price"
              value={updatedProduct.price}
              onChange={(e) =>
                setUpdatedProduct({ ...updatedProduct, price: e.target.value })
              }
              sx={{ input: { color: "text.primary" } }}
            />
            <TextField
              fullWidth
              label="Image URL"
              name="image"
              value={updatedProduct.image}
              onChange={(e) =>
                setUpdatedProduct({ ...updatedProduct, image: e.target.value })
              }
              sx={{ input: { color: "text.primary" } }}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 1 }}
              onClick={() => handleUpdateProduct(product._id, updatedProduct)}
            >
              Update Product
            </Button>
            <Button
              color="error"
              fullWidth
              onClick={() => handleDeleteProduct(product._id)}
            >
              Delete
            </Button>
            <Button
              onClick={handleClose}
              fullWidth
            >
              Cancel
            </Button>
          </Stack>
        </Box>
      </Modal>

      <Snackbar
        open={toastState.open}
        autoHideDuration={3000}
        onClose={handleCloseToast}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseToast}
          severity={toastState.severity}
          sx={{ width: "100%" }}
        >
          {toastState.message}
        </Alert>
      </Snackbar>
    </>
  );
};