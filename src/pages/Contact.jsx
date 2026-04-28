import { useState } from 'react';
import {
  Box, Grid, Typography, Card, TextField, Button, Stack,
  MenuItem, Alert,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import styled from 'styled-components';
import PageHero from '../components/PageHero';
import { business, services } from '../data/site';

const InfoCard = styled(Card)`
  padding: 24px;
  display: flex;
  gap: 16px;
  align-items: flex-start;
  border-radius: 20px !important;
  .icon {
    width: 44px; height: 44px;
    border-radius: 12px;
    background: var(--color-accent-soft);
    color: var(--color-accent);
    display: grid; place-items: center;
    flex-shrink: 0;
  }
`;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', phone: '', email: '', service: '', message: '',
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's get you comfortable."
        subtitle="Call now for emergency service, or send a request and a real Wichita technician will follow up within an hour during business hours."
      />

      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <div className="container-page">
          <Grid container spacing={4}>
            <Grid item xs={12} md={5}>
              <Stack spacing={2}>
                <InfoCard>
                  <Box className="icon"><PhoneIcon /></Box>
                  <Box>
                    <Typography sx={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.16em',
                      textTransform: 'uppercase', color: 'var(--color-ink-muted)', mb: 0.5,
                    }}>
                      Call 24/7
                    </Typography>
                    <Box
                      component="a"
                      href={business.phoneHref}
                      sx={{
                        color: 'var(--color-accent)', fontWeight: 700,
                        fontSize: 22, textDecoration: 'none',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {business.phone}
                    </Box>
                  </Box>
                </InfoCard>

                <InfoCard>
                  <Box className="icon"><EmailIcon /></Box>
                  <Box>
                    <Typography sx={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.16em',
                      textTransform: 'uppercase', color: 'var(--color-ink-muted)', mb: 0.5,
                    }}>
                      Email
                    </Typography>
                    <Box
                      component="a"
                      href={`mailto:${business.email}`}
                      sx={{ color: 'var(--color-ink)', textDecoration: 'none', fontWeight: 600 }}
                    >
                      {business.email}
                    </Box>
                  </Box>
                </InfoCard>

                <InfoCard>
                  <Box className="icon"><PlaceIcon /></Box>
                  <Box>
                    <Typography sx={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.16em',
                      textTransform: 'uppercase', color: 'var(--color-ink-muted)', mb: 0.5,
                    }}>
                      Office
                    </Typography>
                    <Typography sx={{ color: 'var(--color-ink)', fontSize: 15, lineHeight: 1.6 }}>
                      {business.address.street}<br />
                      {business.address.city}, {business.address.state} {business.address.zip}
                    </Typography>
                  </Box>
                </InfoCard>

                <InfoCard>
                  <Box className="icon"><AccessTimeIcon /></Box>
                  <Box>
                    <Typography sx={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.16em',
                      textTransform: 'uppercase', color: 'var(--color-ink-muted)', mb: 0.5,
                    }}>
                      Hours
                    </Typography>
                    <Typography sx={{ color: 'var(--color-ink)', fontSize: 15 }}>
                      {business.hours}
                    </Typography>
                  </Box>
                </InfoCard>
              </Stack>
            </Grid>

            <Grid item xs={12} md={7}>
              <Card sx={{ p: { xs: 3, md: 5 }, borderRadius: '24px' }}>
                <Typography
                  className="heading-display"
                  sx={{ fontSize: 28, mb: 1, color: 'var(--color-ink)' }}
                >
                  Request Service
                </Typography>
                <Typography sx={{ color: 'var(--color-ink-muted)', mb: 4, fontSize: 15 }}>
                  Fill out the form and we'll get back to you within an hour.
                </Typography>

                {submitted ? (
                  <Alert severity="success" sx={{ borderRadius: 3 }}>
                    Thanks {form.name || 'for reaching out'}! We received your request and will call you shortly at {form.phone || 'the number you provided'}.
                  </Alert>
                ) : (
                  <Box component="form" onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField fullWidth required label="Full Name" name="name" value={form.name} onChange={handleChange} />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField fullWidth required label="Phone" name="phone" value={form.phone} onChange={handleChange} />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField fullWidth label="Email" name="email" type="email" value={form.email} onChange={handleChange} />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField select fullWidth label="Service Needed" name="service" value={form.service} onChange={handleChange}>
                          {services.map((s) => (
                            <MenuItem key={s.slug} value={s.title}>{s.title}</MenuItem>
                          ))}
                          <MenuItem value="Other">Other / Not Sure</MenuItem>
                        </TextField>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth multiline rows={4}
                          label="Tell us what's going on"
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          color="secondary"
                          size="large"
                          fullWidth
                          sx={{ py: 1.6, fontSize: 16 }}
                        >
                          Request Service
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                )}
              </Card>
            </Grid>
          </Grid>
        </div>
      </Box>

      <Box sx={{ pb: { xs: 10, md: 14 } }}>
        <div className="container-page">
          <Card sx={{ overflow: 'hidden', borderRadius: '24px' }}>
            <Box
              component="iframe"
              title="Air Source location"
              src={`https://www.google.com/maps?q=${encodeURIComponent(`${business.address.street}, ${business.address.city}, ${business.address.state} ${business.address.zip}`)}&output=embed`}
              sx={{ border: 0, width: '100%', height: 420, display: 'block' }}
              loading="lazy"
            />
          </Card>
        </div>
      </Box>
    </>
  );
}
