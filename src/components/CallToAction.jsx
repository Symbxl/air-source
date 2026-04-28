import { Box, Typography, Stack } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EastIcon from '@mui/icons-material/East';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';
import { business } from '../data/site';

const Banner = styled.section`
  position: relative;
  background: var(--color-surface-deep);
  color: #fff;
  overflow: hidden;
  padding-block: 96px;

  /* dot grid texture */
  background-image:
    radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0);
  background-size: 24px 24px;

  &::before {
    content: '';
    position: absolute;
    top: -160px; right: -140px;
    width: 520px; height: 520px;
    background: radial-gradient(circle, rgba(232,93,4,0.42), transparent 65%);
    filter: blur(70px);
    pointer-events: none;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: -200px; left: -160px;
    width: 520px; height: 520px;
    background: radial-gradient(circle, rgba(30,136,229,0.24), transparent 65%);
    filter: blur(80px);
    pointer-events: none;
  }
`;

const Inner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 24px;
`;

export default function CallToAction({
  title = 'Need service today? We answer 24/7.',
  subtitle = 'Talk to a real Wichita technician — not a call center.',
  eyebrow = 'Ready when you are',
}) {
  return (
    <Banner>
      <div className="container-page">
        <Inner>
          <span
            className="eyebrow-pill"
            style={{
              background: 'rgba(255,255,255,0.06)',
              borderColor: 'rgba(255,255,255,0.18)',
              color: 'rgba(255,255,255,0.8)',
            }}
          >
            {eyebrow}
          </span>
          <Typography
            variant="h2"
            className="heading-display"
            sx={{ fontSize: { xs: 32, sm: 40, md: 52 }, color: '#fff', maxWidth: 760 }}
          >
            {title}
          </Typography>
          <Typography sx={{
            fontSize: { xs: 16, md: 18 },
            color: 'rgba(255,255,255,0.78)',
            maxWidth: 580,
            lineHeight: 1.7,
          }}>
            {subtitle}
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: 2 }}>
            <a href={business.phoneHref} className="btn-primary">
              <PhoneIcon sx={{ fontSize: 16 }} />
              Call {business.phone}
            </a>
            <RouterLink to="/contact" className="btn-ghost-light">
              Schedule Online
              <EastIcon sx={{ fontSize: 16 }} />
            </RouterLink>
          </Stack>
        </Inner>
      </div>
    </Banner>
  );
}
