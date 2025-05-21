import { Container, Typography, Stack, Link, Grid } from '@mui/material';
import { useProductStore } from '../src/store/product';
import { useEffect } from 'react';
import { ProductCard } from '../components/ProductCard';

export const HomePage = () => {
  const { fetchProducts, products } = useProductStore();
  useEffect(() => { fetchProducts(); }, [fetchProducts]);
  console.log("Products", products);

  return (
    <Container maxWidth="xl" sx={{ py: 8 }}>
      <Stack spacing={6} alignItems="center">
        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          sx={{
            background: "linear-gradient(to left, #7928CA, #FF0080)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Welcome to MyStore! 🛒
        </Typography>
        <Link href="/create" underline="none" color="primary">
          Want to create a new product? 😊
        </Link>

        <Grid container spacing={5} width="100%">
          {products.length > 0 ? (
            products.map((product) => (
              <Grid item key={product._id} xs={12} md={6} lg={4}>
                <ProductCard product={product} />
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <Typography
                variant="h6"
                align="center"
                sx={{
                  color: "text.primary",
                  maxWidth: "600px",
                }}
              >
                No products have been created yet🤔
                <br />
                <Link href="/create" underline="none" color="primary">
                  Want to create a new product?
                </Link>
              </Typography>
            </Grid>
          )}
        </Grid>
      </Stack>
    </Container>
  );
};