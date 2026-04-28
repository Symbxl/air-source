import { Box, Grid, Typography, Stack, Card } from '@mui/material';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import HandshakeIcon from '@mui/icons-material/Handshake';
import VerifiedIcon from '@mui/icons-material/Verified';
import FavoriteIcon from '@mui/icons-material/Favorite';
import styled from 'styled-components';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import CallToAction from '../components/CallToAction';
import { business } from '../data/site';

const ValueCard = styled(Card)`
  padding: 32px;
  height: 100%;
  border-radius: 24px !important;
  .icon {
    width: 52px; height: 52px;
    border-radius: 14px;
    background: var(--color-accent-soft);
    color: var(--color-accent);
    display: grid; place-items: center;
    margin-bottom: 20px;
  }
`;

const TimelineItem = styled.div`
  display: grid;
  grid-template-columns: 96px 1fr;
  gap: 28px;
  padding: 28px 0;
  border-bottom: 1px solid var(--color-border);
  &:last-child { border-bottom: 0; }
  .year {
    font-family: var(--font-display);
    font-weight: 700;
    font-size: 28px;
    letter-spacing: -0.01em;
    color: var(--color-accent);
  }
`;

const values = [
  {
    icon: <FavoriteIcon />,
    title: 'Family First',
    body: 'We treat every customer the way we treat our own family — with patience, honesty and respect.',
  },
  {
    icon: <HandshakeIcon />,
    title: 'Honest Pricing',
    body: 'Up-front quotes, no surprises, and no high-pressure upsells. Ever.',
  },
  {
    icon: <VerifiedIcon />,
    title: 'Done Right',
    body: 'Factory-trained, EPA-certified technicians who do it right the first time.',
  },
  {
    icon: <MilitaryTechIcon />,
    title: 'Veteran-Led',
    body: 'Founded by a veteran on military values: integrity, discipline, and service before self.',
  },
];

const timeline = [
  { year: '2000', title: 'Air Source is born', body: 'Rob and Alanna Felkins start the company out of a single truck with a promise to do HVAC differently.' },
  { year: '2008', title: 'Expanding the team', body: 'Growing demand brings on a small crew of factory-trained technicians serving greater Wichita.' },
  { year: '2015', title: 'Light-commercial division', body: 'Adding small business and light-commercial accounts to complement our residential roots.' },
  { year: '2020', title: '20 years strong', body: 'Two decades, thousands of homes kept comfortable, and still family-owned.' },
  { year: '2026', title: 'Today', body: "Wichita's top-rated HVAC contractor with 4.9 stars and a workmanship guarantee on every job." },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Twenty-five years. One promise."
        subtitle={`Air Source is family-owned and veteran-led — and we've kept Wichita comfortable since ${business.founded} by treating every home like our own.`}
      />

      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <div className="container-page">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{
                borderRadius: '28px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lift)',
                aspectRatio: '4/3',
                background: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1400&q=85') center/cover",
              }} />
            </Grid>
            <Grid item xs={12} md={6}>
              <SectionHeader
                eyebrow="Our story"
                title="A veteran, his wife, and a different way to do HVAC."
                align="left"
              />
              <Typography sx={{ fontSize: 17, color: 'var(--color-ink-muted)', lineHeight: 1.8, mb: 2.5 }}>
                When Rob Felkins came home from the service, he saw a Wichita full of homeowners
                getting bad advice, oversold systems and inflated repair bills. He believed his
                neighbors deserved better — so in {business.founded} he and his wife Alanna started Air Source
                with a single truck and one rule:{' '}
                <Box component="span" sx={{ color: 'var(--color-ink)', fontWeight: 600 }}>
                  do right by the customer, every time.
                </Box>
              </Typography>
              <Typography sx={{ fontSize: 17, color: 'var(--color-ink-muted)', lineHeight: 1.8 }}>
                Twenty-five years later we're still family-owned, still locally operated, and still
                running on that same rule. Every technician we hire is trained, certified, and
                background-checked — but more importantly, they're the kind of people we'd send
                to our own grandmother's house.
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Box>

      <Box sx={{ background: 'var(--color-surface-alt)', py: { xs: 10, md: 14 } }}>
        <div className="container-page">
          <SectionHeader eyebrow="What we stand for" title="Values that guide every job" />
          <Grid container spacing={3} sx={{ mt: { xs: 4, md: 6 } }}>
            {values.map((v) => (
              <Grid item xs={12} sm={6} md={3} key={v.title}>
                <ValueCard>
                  <Box className="icon">{v.icon}</Box>
                  <Typography
                    className="heading-display"
                    sx={{ fontSize: 20, mb: 1, color: 'var(--color-ink)' }}
                  >
                    {v.title}
                  </Typography>
                  <Typography sx={{ color: 'var(--color-ink-muted)', fontSize: 15, lineHeight: 1.7 }}>
                    {v.body}
                  </Typography>
                </ValueCard>
              </Grid>
            ))}
          </Grid>
        </div>
      </Box>

      <Box sx={{ py: { xs: 10, md: 14 } }}>
        <div className="container-page" style={{ maxWidth: 880 }}>
          <SectionHeader eyebrow="Our journey" title="A quarter-century of comfort" />
          <Box sx={{ mt: { xs: 2, md: 4 } }}>
            {timeline.map((t) => (
              <TimelineItem key={t.year}>
                <Typography className="year">{t.year}</Typography>
                <Box>
                  <Typography
                    className="heading-display"
                    sx={{ fontSize: 20, mb: 0.5, color: 'var(--color-ink)' }}
                  >
                    {t.title}
                  </Typography>
                  <Typography sx={{ color: 'var(--color-ink-muted)', lineHeight: 1.7, fontSize: 15 }}>
                    {t.body}
                  </Typography>
                </Box>
              </TimelineItem>
            ))}
          </Box>
        </div>
      </Box>

      <CallToAction />
    </>
  );
}
