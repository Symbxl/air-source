import { Box, Typography, Stack } from '@mui/material';
import styled from 'styled-components';

const Wrap = styled.section`
  position: relative;
  background: #fff;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    inset: 0; bottom: auto;
    height: 460px;
    background:
      radial-gradient(60% 50% at 50% 0%, rgba(232,93,4,0.06), transparent 70%),
      linear-gradient(to bottom, var(--color-surface-alt), transparent);
    pointer-events: none;
  }
`;

export default function PageHero({ eyebrow, title, subtitle }) {
  return (
    <Wrap>
      <div className="container-page" style={{ position: 'relative' }}>
        <Box sx={{ pt: { xs: 7, md: 10 }, pb: { xs: 8, md: 10 } }}>
          <Stack
            alignItems="center"
            textAlign="center"
            spacing={3}
            sx={{ maxWidth: 880, mx: 'auto' }}
          >
            {eyebrow && (
              <span className="eyebrow-pill">{eyebrow}</span>
            )}

            <Typography
              variant="h1"
              className="heading-display"
              sx={{ fontSize: { xs: 36, sm: 48, md: 60 }, color: 'var(--color-ink)' }}
            >
              {title}
            </Typography>

            {subtitle && (
              <Typography sx={{
                fontSize: { xs: 16, md: 18 },
                color: 'var(--color-ink-muted)',
                lineHeight: 1.7,
                maxWidth: 640,
              }}>
                {subtitle}
              </Typography>
            )}
          </Stack>
        </Box>
      </div>
    </Wrap>
  );
}
