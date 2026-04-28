import { Box, Typography } from '@mui/material';

export default function SectionHeader({ eyebrow, title, subtitle, align = 'center', dark = false }) {
  const isCenter = align === 'center';
  return (
    <Box
      sx={{
        textAlign: align,
        maxWidth: isCenter ? 760 : 'unset',
        mx: isCenter ? 'auto' : 0,
        mb: { xs: 6, md: 8 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: isCenter ? 'center' : 'flex-start',
        gap: 2.5,
      }}
    >
      {eyebrow && (
        <span
          className="eyebrow-pill"
          style={dark ? {
            background: 'rgba(255,255,255,0.06)',
            borderColor: 'rgba(255,255,255,0.18)',
            color: 'rgba(255,255,255,0.8)',
          } : undefined}
        >
          {eyebrow}
        </span>
      )}
      <Typography
        variant="h2"
        className="heading-display"
        sx={{
          fontSize: { xs: 32, sm: 38, md: 46 },
          color: dark ? '#fff' : 'var(--color-ink)',
          m: 0,
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          sx={{
            fontSize: { xs: 16, md: 18 },
            color: dark ? 'rgba(255,255,255,0.78)' : 'var(--color-ink-muted)',
            lineHeight: 1.7,
            maxWidth: 720,
            m: 0,
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}
