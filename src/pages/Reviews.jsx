import { Box, Grid, Typography, Card, Rating, Avatar, Stack, LinearProgress } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import styled from 'styled-components';
import PageHero from '../components/PageHero';
import CallToAction from '../components/CallToAction';
import { reviews, business } from '../data/site';

const ReviewCard = styled(Card)`
  padding: 32px;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 24px !important;
  .quote {
    position: absolute; top: 18px; right: 18px;
    color: var(--color-accent-soft);
    font-size: 60px;
  }
`;

const RatingBar = ({ stars, percent }) => (
  <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 1.25 }}>
    <Typography sx={{ minWidth: 64, fontSize: 13, fontWeight: 600, color: 'var(--color-ink)' }}>
      {stars} stars
    </Typography>
    <LinearProgress
      variant="determinate"
      value={percent}
      sx={{
        flexGrow: 1, height: 8, borderRadius: 9999,
        backgroundColor: 'var(--color-border)',
        '& .MuiLinearProgress-bar': { background: 'var(--color-accent)' },
      }}
    />
    <Typography sx={{ minWidth: 40, fontSize: 13, color: 'var(--color-ink-muted)' }}>{percent}%</Typography>
  </Stack>
);

export default function Reviews() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="What our customers say"
        subtitle="We've built our business on referrals. Here's what your Wichita neighbors think of us."
      />

      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <div className="container-page">
          <Card sx={{ p: { xs: 4, md: 6 }, mb: 6, borderRadius: '24px' }}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
                <Typography
                  className="heading-display"
                  sx={{ fontSize: 96, color: 'var(--color-accent)', lineHeight: 1 }}
                >
                  {business.rating}
                </Typography>
                <Rating value={business.rating} precision={0.1} readOnly size="large" sx={{ color: 'var(--color-accent)', mt: 1 }} />
                <Typography sx={{ color: 'var(--color-ink-muted)', mt: 1.5, fontSize: 14 }}>
                  Based on {business.reviewCount}+ reviews
                </Typography>
              </Grid>
              <Grid item xs={12} md={8}>
                <RatingBar stars={5} percent={94} />
                <RatingBar stars={4} percent={4} />
                <RatingBar stars={3} percent={1} />
                <RatingBar stars={2} percent={0} />
                <RatingBar stars={1} percent={1} />
              </Grid>
            </Grid>
          </Card>

          <Grid container spacing={3}>
            {reviews.map((r) => (
              <Grid item xs={12} md={6} key={r.name}>
                <ReviewCard>
                  <FormatQuoteIcon className="quote" />
                  <Rating value={r.rating} readOnly size="small" sx={{ mb: 2, color: 'var(--color-accent)' }} />
                  <Typography sx={{ fontSize: 16, lineHeight: 1.8, mb: 3, color: 'var(--color-ink)' }}>
                    "{r.text}"
                  </Typography>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar sx={{ background: 'var(--color-brand)', fontWeight: 700 }}>
                      {r.name[0]}
                    </Avatar>
                    <Box>
                      <Typography sx={{ fontWeight: 700, color: 'var(--color-ink)' }}>{r.name}</Typography>
                      <Typography sx={{ fontSize: 13, color: 'var(--color-ink-muted)' }}>
                        {r.service} · {r.date}
                      </Typography>
                    </Box>
                  </Stack>
                </ReviewCard>
              </Grid>
            ))}
          </Grid>
        </div>
      </Box>

      <CallToAction
        title="Ready to join the family?"
        subtitle="Most repairs are scheduled within 24 hours."
      />
    </>
  );
}
