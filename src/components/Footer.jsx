import { Box, Grid, Typography, Stack, Link, Divider, IconButton } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FacebookIcon from '@mui/icons-material/Facebook';
import StarIcon from '@mui/icons-material/Star';
import VerifiedIcon from '@mui/icons-material/Verified';
import EastIcon from '@mui/icons-material/East';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { business, services } from '../data/site';
import styled from 'styled-components';

const FooterRoot = styled.footer`
  background: var(--color-surface-deep);
  color: rgba(255,255,255,0.72);
  position: relative;
  overflow: hidden;
  padding: 0 0 28px;

  /* dot grid texture */
  background-image:
    radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0);
  background-size: 22px 22px;

  /* top accent gradient strip — visually separates the footer from the dark CTA above */
  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg,
      var(--color-accent) 0%,
      var(--color-cool) 50%,
      var(--color-accent) 100%);
    opacity: 0.85;
  }

  /* soft glow */
  &::after {
    content: '';
    position: absolute;
    top: -180px; right: -140px;
    width: 520px; height: 520px;
    background: radial-gradient(circle, rgba(30,136,229,0.18), transparent 65%);
    filter: blur(80px);
    pointer-events: none;
  }

  h6 {
    font-family: var(--font-display);
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    font-size: 11px;
    margin: 0 0 20px;
    font-weight: 700;
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }
  h6::before {
    content: '';
    width: 14px; height: 1px;
    background: var(--color-accent);
  }

  a {
    color: rgba(255,255,255,0.7);
    text-decoration: none;
    transition: color .15s, transform .15s;
    font-size: 14.5px;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
  a:hover { color: var(--color-accent); }

  .footer-link {
    position: relative;
  }
  .footer-link::before {
    content: '';
    width: 0; height: 1px;
    background: var(--color-accent);
    transition: width .2s ease;
  }
  .footer-link:hover::before { width: 12px; margin-right: 4px; }

  .logo-mark {
    position: relative;
    width: 48px; height: 48px;
    border-radius: 14px;
    background: linear-gradient(135deg, rgba(30,136,229,0.22), rgba(255,255,255,0.06));
    border: 1px solid rgba(255,255,255,0.14);
    display: grid; place-items: center;
    color: #fff;
    flex-shrink: 0;
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

  .rating-chip {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 14px;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 9999px;
    color: #fff;
    font-size: 13px;
    font-weight: 600;
  }
  .rating-chip .stars {
    display: inline-flex;
    color: #F5B400;
    gap: 1px;
  }
  .rating-chip .count {
    color: rgba(255,255,255,0.55);
    font-weight: 500;
  }

  .social-btn {
    color: rgba(255,255,255,0.7) !important;
    border: 1px solid rgba(255,255,255,0.14) !important;
    width: 40px; height: 40px;
    border-radius: 12px !important;
    transition: all .15s ease !important;
  }
  .social-btn:hover {
    color: #fff !important;
    border-color: var(--color-accent) !important;
    background: rgba(30,136,229,0.12) !important;
    transform: translateY(-2px);
  }

  .contact-row {
    display: flex;
    align-items: flex-start;
    gap: 12px;
  }
  .contact-icon {
    width: 32px; height: 32px;
    border-radius: 10px;
    background: rgba(30,136,229,0.12);
    border: 1px solid rgba(30,136,229,0.22);
    display: grid; place-items: center;
    color: var(--color-accent);
    flex-shrink: 0;
  }
  .contact-row .label {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.45);
    margin-bottom: 2px;
  }
  .contact-row .value {
    font-size: 14.5px;
    color: rgba(255,255,255,0.85);
    line-height: 1.55;
  }
  .contact-row .value a { font-size: 14.5px; color: #fff; }

  .credential {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 14px;
    border-radius: 9999px;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.1);
    color: rgba(255,255,255,0.78);
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }
  .credential svg {
    color: var(--color-accent);
    font-size: 14px;
  }
`;

function GoogleG({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden xmlns="http://www.w3.org/2000/svg">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"/>
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 19 13 24 13c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2c-2 1.4-4.5 2.4-7.2 2.4-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"/>
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.1 5.6l6.2 5.2C40.8 35.5 44 30.2 44 24c0-1.2-.1-2.4-.4-3.5z"/>
    </svg>
  );
}

const CREDENTIALS = [
  'Licensed in Kansas',
  'EPA Certified',
  'NATE Certified',
  'BBB A+ Rated',
  'Trane Comfort Specialist',
];

export default function Footer() {
  return (
    <FooterRoot>
      <div className="container-page" style={{ position: 'relative', paddingTop: 80 }}>
        <Grid container spacing={{ xs: 5, md: 10 }}>
          {/* BRAND BLOCK */}
          <Grid item xs={12} md={4}>
            <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2.5 }}>
              <Box className="logo-mark">
                <AcUnitIcon sx={{ fontSize: 24 }} />
                <span className="flame"><LocalFireDepartmentIcon sx={{ fontSize: 13 }} /></span>
              </Box>
              <Box>
                <Typography sx={{
                  color: '#fff', fontWeight: 700, fontSize: 19,
                  letterSpacing: '-0.01em', lineHeight: 1,
                }}>
                  Air Source
                </Typography>
                <Typography sx={{
                  fontSize: 11, letterSpacing: '0.16em',
                  textTransform: 'uppercase', color: 'rgba(255,255,255,0.48)',
                  mt: 0.7,
                }}>
                  Heating &amp; Cooling
                </Typography>
              </Box>
            </Stack>
            <Typography sx={{
              color: 'rgba(255,255,255,0.65)',
              mb: 3,
              lineHeight: 1.7,
              fontSize: 14.5,
              maxWidth: 360,
            }}>
              Family-owned in Wichita since {business.founded}. Honest, expert HVAC service for
              homes and small businesses across south-central Kansas.
            </Typography>

            <Box className="rating-chip" sx={{ mb: 3 }}>
              <GoogleG size={16} />
              <span className="stars">
                {[0,1,2,3,4].map(i => <StarIcon key={i} sx={{ fontSize: 14 }} />)}
              </span>
              <span>{business.rating.toFixed(1)}</span>
              <span className="count">· {business.reviewCount}+ reviews</span>
            </Box>

            <Stack direction="row" spacing={1.25}>
              <IconButton aria-label="Facebook" className="social-btn" href="#">
                <FacebookIcon fontSize="small" />
              </IconButton>
              <IconButton aria-label="Google Business" className="social-btn" href="#">
                <GoogleG size={16} />
              </IconButton>
              <IconButton
                aria-label="Call"
                className="social-btn"
                href={business.phoneHref}
              >
                <PhoneIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Grid>

          {/* COMPANY LINKS */}
          <Grid item xs={6} md={2}>
            <Typography variant="h6">Company</Typography>
            <Stack spacing={2.5}>
              <Link component={RouterLink} to="/about" className="footer-link">About Us</Link>
              <Link component={RouterLink} to="/services" className="footer-link">Services</Link>
              <Link component={RouterLink} to="/reviews" className="footer-link">Reviews</Link>
              <Link component={RouterLink} to="/contact" className="footer-link">Contact</Link>
            </Stack>
          </Grid>

          {/* SERVICES LINKS */}
          <Grid item xs={6} md={3}>
            <Typography variant="h6">Services</Typography>
            <Stack spacing={2.5}>
              {services.slice(0, 6).map((s) => (
                <Link
                  key={s.slug}
                  component={RouterLink}
                  to={`/services#${s.slug}`}
                  className="footer-link"
                >
                  {s.title}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* CONTACT */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6">Get In Touch</Typography>
            <Stack spacing={3}>
              <Box className="contact-row">
                <Box className="contact-icon">
                  <PhoneIcon sx={{ fontSize: 16 }} />
                </Box>
                <Box>
                  <Typography className="label">24/7 Service Line</Typography>
                  <Link href={business.phoneHref} sx={{ fontWeight: 700 }}>
                    {business.phone}
                  </Link>
                </Box>
              </Box>

              <Box className="contact-row">
                <Box className="contact-icon">
                  <EmailIcon sx={{ fontSize: 16 }} />
                </Box>
                <Box>
                  <Typography className="label">Email</Typography>
                  <Link href={`mailto:${business.email}`}>{business.email}</Link>
                </Box>
              </Box>

              <Box className="contact-row">
                <Box className="contact-icon">
                  <PlaceIcon sx={{ fontSize: 16 }} />
                </Box>
                <Box>
                  <Typography className="label">Visit</Typography>
                  <Typography className="value">
                    {business.address.street}<br />
                    {business.address.city}, {business.address.state} {business.address.zip}
                  </Typography>
                </Box>
              </Box>

              <Box className="contact-row">
                <Box className="contact-icon">
                  <AccessTimeIcon sx={{ fontSize: 16 }} />
                </Box>
                <Box>
                  <Typography className="label">Hours</Typography>
                  <Typography className="value">{business.hours}</Typography>
                </Box>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        {/* CREDENTIALS / TRUST STRIP */}
        <Box sx={{
          mt: { xs: 6, md: 8 },
          pt: 4,
          borderTop: '1px solid rgba(255,255,255,0.08)',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 1.25,
        }}>
          {CREDENTIALS.map((c) => (
            <span key={c} className="credential">
              <VerifiedIcon />
              {c}
            </span>
          ))}
        </Box>

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.08)' }} />

        {/* BOTTOM LEGAL ROW */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography sx={{ fontSize: 12.5, color: 'rgba(255,255,255,0.42)' }}>
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </Typography>
          <Typography sx={{
            fontSize: 11, color: 'rgba(255,255,255,0.42)',
            letterSpacing: '0.14em', textTransform: 'uppercase',
          }}>
            Built with care in Wichita, KS
          </Typography>
        </Stack>
      </div>
    </FooterRoot>
  );
}
