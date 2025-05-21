import {
  Container,
  Typography,
  Stack,
  Box,
  TextField,
  Button,
  useTheme,
  Snackbar,
  Alert
} from '@mui/material';
import { useState } from 'react';
import { useProductStore } from '/src/store/product.js'; // Adjust the import path as necessary

export const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    image: '',
  });

  const [toastState, setToastState] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const theme = useTheme();
  const { createProduct } = useProductStore();

  const toast = ({ description, status }) => {
    setToastState({
      open: true,
      message: description,
      severity: status,
    });
  };

  const handleCloseToast = (_, reason) => {
    if (reason === 'clickaway') return;
    setToastState((prev) => ({ ...prev, open: false }));
  };

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    if (success) {
      toast({
        description: message,
        status: 'success',
      });
      setNewProduct({ name: '', price: '', image: '' }); // Reset form
    } else {
      toast({
        description: message,
        status: 'error',
      });
    }
  };

  const pageBgColor = theme.palette.mode === 'dark' ? '#0a0d36' : '#ffffff';

  return (
    <Box
      sx={{
        bgcolor: pageBgColor,
        color: 'text.primary',
        minHeight: 'calc(100vh - 64px)',
        px: 2,
        py: 6,
        transition: 'background-color 0.3s ease',
      }}
    >
      <Container maxWidth="sm">
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{ color: 'text.primary', mb: 4 }}
        >
          Create New Product
        </Typography>

        <Box
          sx={{
            bgcolor:
              theme.palette.mode === 'dark'
                ? '#11153c'
                : theme.palette.grey[100],
            p: 3,
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Stack spacing={3}>
            <TextField
              fullWidth
              label="Product Name"
              name="name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
              InputLabelProps={{ sx: { color: 'text.primary' } }}
              sx={{ input: { color: 'text.primary' } }}
            />

            <TextField
              fullWidth
              label="Price"
              name="price"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
              InputLabelProps={{ sx: { color: 'text.primary' } }}
              sx={{ input: { color: 'text.primary' } }}
            />

            <TextField
              fullWidth
              label="Image URL"
              name="image"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
              InputLabelProps={{ sx: { color: 'text.primary' } }}
              sx={{ input: { color: 'text.primary' } }}
            />

            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleAddProduct}
            >
              Create Product
            </Button>
          </Stack>
        </Box>
      </Container>

      {/* Snackbar Toast */}
      <Snackbar
        open={toastState.open}
        autoHideDuration={3000}
        onClose={handleCloseToast}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert
          onClose={handleCloseToast}
          severity={toastState.severity}
          sx={{ width: '100%' }}
        >
          {toastState.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};
