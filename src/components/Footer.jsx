import { Box, Grid, Typography, Stack, Link, Divider, IconButton } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FacebookIcon from '@mui/icons-material/Facebook';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { business, services } from '../data/site';
import styled from 'styled-components';

const FooterRoot = styled.footer`
  background: var(--color-surface-deep);
  color: rgba(255,255,255,0.72);
  position: relative;
  overflow: hidden;
  padding: 72px 0 28px;

  &::before {
    content: '';
    position: absolute;
    top: -160px; right: -120px;
    width: 480px; height: 480px;
    background: radial-gradient(circle, rgba(30,136,229,0.18), transparent 65%);
    filter: blur(70px);
    pointer-events: none;
  }

  h6 {
    font-family: var(--font-display);
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    font-size: 11px;
    margin-bottom: 18px;
    font-weight: 700;
  }
  a {
    color: rgba(255,255,255,0.72);
    text-decoration: none;
    transition: color .15s;
    font-size: 14px;
  }
  a:hover { color: var(--color-accent); }

  .logo-mark {
    position: relative;
    width: 44px; height: 44px;
    border-radius: 12px;
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.12);
    display: grid; place-items: center;
    color: #fff;
  }
  .logo-mark .flame {
    position: absolute;
    bottom: -4px; right: -4px;
    width: 22px; height: 22px;
    border-radius: 8px;
    background: var(--color-accent);
    color: #fff;
    display: grid; place-items: center;
    border: 2px solid var(--color-surface-deep);
  }
`;

export default function Footer() {
  return (
    <FooterRoot>
      <div className="container-page" style={{ position: 'relative' }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2 }}>
              <Box className="logo-mark">
                <AcUnitIcon sx={{ fontSize: 22 }} />
                <span className="flame"><LocalFireDepartmentIcon sx={{ fontSize: 13 }} /></span>
              </Box>
              <Box>
                <Typography sx={{
                  color: '#fff', fontWeight: 700, fontSize: 18,
                  letterSpacing: '-0.01em', lineHeight: 1,
                }}>
                  Air Source
                </Typography>
                <Typography sx={{
                  fontSize: 11, letterSpacing: '0.14em',
                  textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)',
                  mt: 0.5,
                }}>
                  Heating &amp; Cooling
                </Typography>
              </Box>
            </Stack>
            <Typography sx={{ color: 'rgba(255,255,255,0.6)', mb: 3, lineHeight: 1.7, fontSize: 14, maxWidth: 320 }}>
              Family-owned in Wichita since {business.founded}. Honest, expert HVAC service for
              homes and small businesses across south-central Kansas.
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton
                aria-label="Facebook"
                sx={{
                  color: 'rgba(255,255,255,0.7)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  width: 38, height: 38,
                  '&:hover': { color: 'var(--color-accent)', borderColor: 'var(--color-accent)' },
                }}
              >
                <FacebookIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography variant="h6">Company</Typography>
            <Stack spacing={1.25}>
              <Link component={RouterLink} to="/about">About Us</Link>
              <Link component={RouterLink} to="/services">Services</Link>
              <Link component={RouterLink} to="/reviews">Reviews</Link>
              <Link component={RouterLink} to="/contact">Contact</Link>
            </Stack>
          </Grid>

          <Grid item xs={6} md={3}>
            <Typography variant="h6">Services</Typography>
            <Stack spacing={1.25}>
              {services.slice(0, 6).map((s) => (
                <Link key={s.slug} component={RouterLink} to={`/services#${s.slug}`}>
                  {s.title}
                </Link>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h6">Get In Touch</Typography>
            <Stack spacing={1.5}>
              <Stack direction="row" spacing={1.2} alignItems="flex-start">
                <PhoneIcon fontSize="small" sx={{ color: 'var(--color-accent)', mt: '2px' }} />
                <Link href={business.phoneHref} sx={{ fontWeight: 600, color: '#fff !important' }}>
                  {business.phone}
                </Link>
              </Stack>
              <Stack direction="row" spacing={1.2} alignItems="flex-start">
                <EmailIcon fontSize="small" sx={{ color: 'var(--color-accent)', mt: '2px' }} />
                <Link href={`mailto:${business.email}`}>{business.email}</Link>
              </Stack>
              <Stack direction="row" spacing={1.2} alignItems="flex-start">
                <PlaceIcon fontSize="small" sx={{ color: 'var(--color-accent)', mt: '2px' }} />
                <Typography sx={{ color: 'rgba(255,255,255,0.72)', fontSize: 14, lineHeight: 1.7 }}>
                  {business.address.street}<br />
                  {business.address.city}, {business.address.state} {business.address.zip}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1.2} alignItems="flex-start">
                <AccessTimeIcon fontSize="small" sx={{ color: 'var(--color-accent)', mt: '2px' }} />
                <Typography sx={{ color: 'rgba(255,255,255,0.72)', fontSize: 14 }}>
                  {business.hours}
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 5, borderColor: 'rgba(255,255,255,0.1)' }} />
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={1}
        >
          <Typography sx={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </Typography>
          <Typography sx={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Licensed · Insured · EPA Certified
          </Typography>
        </Stack>
      </div>
    </FooterRoot>
  );
}
