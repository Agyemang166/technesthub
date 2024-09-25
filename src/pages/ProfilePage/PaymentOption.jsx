import React from 'react';
import { Box, Typography, Button, Card, CardContent, Radio, RadioGroup, FormControlLabel, FormControl, Grid } from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PaymentIcon from '@mui/icons-material/Payment';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const PaymentOption = () => {
  const [selectedPayment, setSelectedPayment] = React.useState('credit-card');

  const handlePaymentChange = (event) => {
    setSelectedPayment(event.target.value);
  };

  return (
    <Box sx={{ padding: 4, maxWidth: '600px', margin: '0 auto', boxShadow: 3, borderRadius: 2, backgroundColor: '#f9f9f9' }}>
      <Typography variant="h4" gutterBottom align="center" color="primary">
        Choose Your Payment Method
      </Typography>
      <Typography variant="body1" align="center" color="textSecondary" sx={{ marginBottom: 3 }}>
        We offer a variety of secure payment options to suit your needs.
      </Typography>

      <FormControl component="fieldset">
        <RadioGroup value={selectedPayment} onChange={handlePaymentChange}>
          {/* Credit/Debit Card Option */}
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} md={6}>
              <Card variant="outlined" sx={{ marginBottom: 2 }}>
                <CardContent>
                  <FormControlLabel
                    value="credit-card"
                    control={<Radio />}
                    label={
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <CreditCardIcon sx={{ color: 'primary.main', marginRight: 1 }} />
                        <Typography variant="h6">Credit/Debit Card</Typography>
                      </Box>
                    }
                  />
                  <Typography variant="body2" color="textSecondary">
                    Pay securely using your credit or debit card. We accept Visa, MasterCard, and American Express.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* PayPal Option */}
            <Grid item xs={12} md={6}>
              <Card variant="outlined" sx={{ marginBottom: 2 }}>
                <CardContent>
                  <FormControlLabel
                    value="paypal"
                    control={<Radio />}
                    label={
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <PaymentIcon sx={{ color: 'primary.main', marginRight: 1 }} />
                        <Typography variant="h6">PayPal</Typography>
                      </Box>
                    }
                  />
                  <Typography variant="body2" color="textSecondary">
                    Use your PayPal account for a fast and secure payment experience.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Bank Transfer Option */}
            <Grid item xs={12} md={6}>
              <Card variant="outlined" sx={{ marginBottom: 2 }}>
                <CardContent>
                  <FormControlLabel
                    value="bank-transfer"
                    control={<Radio />}
                    label={
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <AccountBalanceIcon sx={{ color: 'primary.main', marginRight: 1 }} />
                        <Typography variant="h6">Bank Transfer</Typography>
                      </Box>
                    }
                  />
                  <Typography variant="body2" color="textSecondary">
                    Transfer funds directly from your bank account. Please allow 3-5 business days for processing.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Cryptocurrency Option */}
            <Grid item xs={12} md={6}>
              <Card variant="outlined" sx={{ marginBottom: 2 }}>
                <CardContent>
                  <FormControlLabel
                    value="cryptocurrency"
                    control={<Radio />}
                    label={
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <AccountBalanceWalletIcon sx={{ color: 'primary.main', marginRight: 1 }} />
                        <Typography variant="h6">Cryptocurrency</Typography>
                      </Box>
                    }
                  />
                  <Typography variant="body2" color="textSecondary">
                    We accept Bitcoin and other cryptocurrencies. Enjoy fast and secure transactions with crypto.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </RadioGroup>
      </FormControl>

      <Box sx={{ textAlign: 'center', marginTop: 4 }}>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => alert(`Selected payment: ${selectedPayment}`)}
          sx={{ padding: '10px 20px', fontSize: '16px' }}
        >
          Confirm Payment
        </Button>
      </Box>
    </Box>
  );
};

export default PaymentOption;
