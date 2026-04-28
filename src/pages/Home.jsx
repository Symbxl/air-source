import { Box, Grid, Typography, Button, Stack, Chip } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import PhoneIcon from '@mui/icons-material/Phone';
import EastIcon from '@mui/icons-material/East';
import CheckIcon from '@mui/icons-material/Check';
import AddIcon from '@mui/icons-material/Add';
import StarIcon from '@mui/icons-material/Star';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import AcUnitIcon from '@mui/icons-material/AcUnit';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import AirIcon from '@mui/icons-material/Air';
import SpaIcon from '@mui/icons-material/Spa';
import ArchitectureIcon from '@mui/icons-material/Architecture';

import { business, services, reviews, stats } from '../data/site';
import SectionHeader from '../components/SectionHeader';
import CallToAction from '../components/CallToAction';

const ICONS = {
  AcUnit: AcUnitIcon,
  LocalFireDepartment: LocalFireDepartmentIcon,
  EnergySavingsLeaf: EnergySavingsLeafIcon,
  Air: AirIcon,
  Spa: SpaIcon,
  Architecture: ArchitectureIcon,
};

// ---------- HERO ----------
const HeroSection = styled.section`
  position: relative;
  background: #fff;
  overflow: hidden;
  padding-top: 56px;
  padding-bottom: 80px;
  @media (min-width: 768px) { padding-top: 80px; padding-bottom: 120px; }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(60% 60% at 80% 10%, rgba(30,136,229,0.16), transparent 70%),
      radial-gradient(50% 50% at 5% 60%, rgba(14,165,233,0.10), transparent 75%),
      linear-gradient(to bottom, var(--color-surface-alt) 0%, transparent 60%);
    pointer-events: none;
  }
`;

const HeroGrid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  align-items: center;
  @media (min-width: 1024px) {
    grid-template-columns: 1.1fr 0.9fr;
    gap: 64px;
  }
`;

const HeroRatingPill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 7px 14px;
  border-radius: 9999px;
  background: #fff;
  border: 1px solid var(--color-border);
  box-shadow: 0 1px 2px rgba(10,22,40,0.04);
  font-size: 13px;
  font-weight: 600;
  color: var(--color-ink);
  letter-spacing: -0.005em;

  .stars {
    display: inline-flex;
    color: var(--color-accent);
  }
  .meta {
    color: var(--color-ink-muted);
    font-weight: 500;
  }
`;

const HeroTrustRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 18px;
  margin-top: 28px;
  font-size: 13px;
  color: var(--color-ink-muted);

  span {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-weight: 500;
  }
  span::before {
    content: '';
    width: 5px; height: 5px;
    border-radius: 9999px;
    background: var(--color-accent);
  }
  span:first-child::before { display: none; }
  span:first-child { padding-left: 0; }
`;

const HeroImageCard = styled(motion.div)`
  position: relative;
  border-radius: 28px;
  overflow: hidden;
  box-shadow: var(--shadow-lift);
  isolation: isolate;
  @media (min-width: 768px) { border-radius: 32px; }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
  }
  /* Portrait aspect on desktop, gentler on mobile */
  aspect-ratio: 4/3;
  @media (min-width: 1024px) { aspect-ratio: 4/5; }

  .overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(10,22,40,0.55) 0%, rgba(10,22,40,0.05) 50%, rgba(10,22,40,0));
    pointer-events: none;
  }
`;

const StatOverlay = styled(motion.div)`
  position: absolute;
  left: 20px;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: stretch;
  background: rgba(255,255,255,0.95);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 18px;
  box-shadow: 0 24px 50px -16px rgba(10,22,40,0.4);
  padding: 14px 16px;
  gap: 16px;

  .stat {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .stat .num {
    font-family: var(--font-display);
    font-size: 22px;
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1;
    color: var(--color-ink);
  }
  .stat .lbl {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--color-ink-muted);
  }
  .stat + .stat { border-left: 1px solid var(--color-border); padding-left: 16px; }
`;

// ---------- SERVICE CARD ----------
const ServiceCard = styled(motion(RouterLink))`
  display: flex;
  flex-direction: column;
  height: 100%;
  text-decoration: none;
  color: inherit;
  background: #fff;
  border: 1px solid var(--color-border);
  border-radius: 28px;
  overflow: hidden;
  transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lift);
    border-color: rgba(30,136,229,0.25);
  }
  .image-wrap {
    position: relative;
    height: 220px;
    overflow: hidden;
  }
  .image-wrap img {
    width: 100%; height: 100%;
    object-fit: cover;
    transition: transform .6s ease;
  }
  &:hover .image-wrap img { transform: scale(1.06); }
  .grad {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(10,22,40,0.65), rgba(10,22,40,0.08) 50%, rgba(10,22,40,0));
  }
  .icon-badge {
    position: absolute;
    top: 18px;
    left: 18px;
    width: 46px; height: 46px;
    border-radius: 14px;
    background: rgba(255,255,255,0.95);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    display: grid; place-items: center;
    color: var(--color-brand);
    box-shadow: 0 6px 16px -8px rgba(10,22,40,0.4);
  }
  .image-tag {
    position: absolute;
    left: 20px; bottom: 18px; right: 20px;
    color: rgba(255,255,255,0.92);
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    text-shadow: 0 1px 2px rgba(0,0,0,0.25);
  }
  .body {
    padding: 24px;
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .body h3 {
    font-family: var(--font-display);
    font-size: 21px;
    font-weight: 600;
    letter-spacing: -0.01em;
    margin: 0;
    color: var(--color-ink);
  }
  .body p {
    margin: 8px 0 0;
    font-size: 15px;
    line-height: 1.65;
    color: var(--color-ink-muted);
    flex: 1;
  }
  .explore {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    margin-top: 20px;
    font-size: 14px;
    font-weight: 600;
    color: var(--color-brand);
    transition: color .15s;
  }
  .explore svg { transition: transform .15s; }
  &:hover .explore { color: var(--color-accent); }
  &:hover .explore svg { transform: translateX(3px); }
`;

// ---------- FAQ ----------
const FaqItem = styled.details`
  background: #fff;
  border: 1px solid var(--color-border);
  border-radius: 20px;
  padding: 22px 26px;
  transition: border-color .2s ease, box-shadow .2s ease;

  & + & { margin-top: 12px; }

  &[open] {
    border-color: rgba(30,136,229,0.35);
    box-shadow: var(--shadow-card);
  }

  summary {
    list-style: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    font-family: var(--font-display);
    font-weight: 600;
    font-size: 17px;
    letter-spacing: -0.005em;
    color: var(--color-ink);
  }
  summary::-webkit-details-marker { display: none; }
  summary::marker { content: ''; }

  .faq-icon {
    width: 30px; height: 30px;
    border-radius: 9999px;
    background: var(--color-accent-soft);
    color: var(--color-accent);
    display: grid;
    place-items: center;
    flex-shrink: 0;
    transition: transform .25s ease, background .25s ease, color .25s ease;
  }
  &[open] .faq-icon {
    transform: rotate(135deg);
    background: var(--color-accent);
    color: #fff;
  }

  .faq-answer {
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px dashed var(--color-border-strong);
    font-size: 15px;
    line-height: 1.7;
    color: var(--color-ink-muted);
  }
`;

const FAQ_ITEMS = [
  {
    q: 'Do you really answer the phone 24/7?',
    a: "Yes. A real Wichita technician — not a call center — answers nights, weekends, and holidays. If your AC dies at 2am in July, call us and we'll talk through it.",
  },
  {
    q: 'How fast can a technician get to my house?',
    a: 'Most same-day calls placed before noon are scheduled the same afternoon. True emergencies (no heat in winter, no AC in extreme heat) are usually on-site within two hours.',
  },
  {
    q: 'Do you service every brand, or just what you sell?',
    a: 'Every brand. Our techs carry parts and training for Trane, Carrier, Lennox, Rheem, Goodman, Ruud, York, Bryant, Amana and more. If it heats or cools, we can fix it.',
  },
  {
    q: 'Do you offer financing on a new system?',
    a: '0% financing is available for qualified buyers, up to 60 months. We can check your options in the home — no obligation, no credit hit for the pre-qualification.',
  },
  {
    q: 'Are you licensed and insured in Kansas?',
    a: 'Fully licensed Kansas Mechanical Contractor, EPA-certified for refrigerants, NATE-certified technicians, and carrying full liability and workers-comp insurance on every job.',
  },
  {
    q: 'How often should I have my system serviced?',
    a: 'Twice a year is the sweet spot — AC tune-up in spring, furnace tune-up in fall. It catches small issues before they become emergencies and keeps your manufacturer warranty in good standing.',
  },
];

// Service area chip
const AreaChip = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border: 1px solid var(--color-border);
  background: #fff;
  border-radius: 9999px;
  padding: 10px 16px;
  font-size: 14px;
  font-weight: 600;
  color: var(--color-ink);
  box-shadow: 0 1px 2px rgba(10,22,40,0.04);
  transition: border-color .15s, color .15s, background .15s;
  &:hover { border-color: var(--color-accent); color: var(--color-accent); }
  &::before {
    content: '';
    width: 6px; height: 6px;
    border-radius: 9999px;
    background: var(--color-cool);
  }
`;

// Multicolor Google "G" logo used in the reviews section
function GoogleG({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden xmlns="http://www.w3.org/2000/svg">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"/>
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 19 13 24 13c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2c-2 1.4-4.5 2.4-7.2 2.4-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"/>
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.1 5.6l6.2 5.2C40.8 35.5 44 30.2 44 24c0-1.2-.1-2.4-.4-3.5z"/>
    </svg>
  );
}

// ---------- REVIEW CARD (Google-style) ----------
const ReviewCard = styled(motion.article)`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #fff;
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 24px 26px 22px;
  box-shadow: 0 1px 2px rgba(10,22,40,0.04);
  transition: transform .25s ease, box-shadow .25s ease;
  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-card);
  }

  .top-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 14px;
  }
  .stars {
    display: inline-flex;
    gap: 2px;
    color: #F5B400;
  }

  .quote {
    color: var(--color-ink);
    font-size: 15px;
    line-height: 1.6;
    margin: 0;
    flex: 1;
  }

  .read-more {
    display: inline-block;
    margin-top: 14px;
    font-size: 14px;
    font-weight: 600;
    color: #DC3545;
    text-decoration: none;
    &:hover { text-decoration: underline; }
  }

  .divider {
    height: 1px;
    background: var(--color-border);
    margin: 16px 0 14px;
  }

  .person {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .avatar {
    width: 38px;
    height: 38px;
    border-radius: 9999px;
    background: #DC3545;
    color: #fff;
    display: grid;
    place-items: center;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.02em;
    flex-shrink: 0;
  }
  .name {
    font-size: 15px;
    font-weight: 700;
    color: var(--color-ink);
    line-height: 1.2;
  }
  .date {
    font-size: 13px;
    color: var(--color-ink-muted);
    margin-top: 2px;
  }
`;

// "Google Reviews ★★★★★ 5.0" pill above the section title
const GoogleReviewsPill = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 18px;
  background: #fff;
  border: 1px solid var(--color-border);
  border-radius: 9999px;
  box-shadow: 0 1px 2px rgba(10,22,40,0.05);
  font-size: 14px;
  font-weight: 600;
  color: var(--color-ink);

  .stars { display: inline-flex; gap: 1px; color: #F5B400; }
  .score { font-weight: 700; color: var(--color-ink); }
`;

function getInitials(name) {
  // "Jennifer M." -> "JM", "Tom & Linda S." -> "TS"
  const parts = name.replace(/&/g, ' ').split(/\s+/).filter(Boolean);
  if (parts.length === 0) return '';
  const first = parts[0][0] || '';
  const last = parts[parts.length - 1][0] || '';
  return (first + last).toUpperCase();
}

// Recognition badge stub (text-based since we have no real logos)
const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 44px;
  padding: 0 16px;
  border-radius: 12px;
  border: 1px solid var(--color-border);
  background: #fff;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-ink-muted);
  box-shadow: 0 1px 2px rgba(10,22,40,0.04);
`;

// Stock images for service cards (one per slug)
const SERVICE_IMAGES = {
  'air-conditioning': 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=1400&q=80',
  'heating': 'https://images.unsplash.com/photo-1558002038-1055907df827?w=1400&q=80',
  'geothermal': 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=1400&q=80',
  'mini-splits': 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1400&q=80',
  'indoor-air-quality': 'https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=1400&q=80',
  'ductwork': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80',
};

const SERVICE_TAGS = {
  'air-conditioning': 'Same-day cooling repair',
  'heating': 'Warm, efficient, safe heat',
  'geothermal': 'Cut energy bills year-round',
  'mini-splits': 'Zone-by-zone comfort',
  'indoor-air-quality': 'Breathe cleaner, sleep better',
  'ductwork': 'Sealed, balanced, efficient',
};

export default function Home() {
  return (
    <>
      {/* HERO */}
      <HeroSection>
        <div className="container-page" style={{ position: 'relative' }}>
          <HeroGrid>
            {/* LEFT: text + CTAs */}
            <Box>
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
                <HeroRatingPill>
                  <span className="stars">
                    {[0,1,2,3,4].map((i) => <StarIcon key={i} sx={{ fontSize: 15 }} />)}
                  </span>
                  {business.rating}
                  <span className="meta">· {business.reviewCount}+ Wichita reviews</span>
                </HeroRatingPill>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
              >
                <Typography
                  variant="h1"
                  className="heading-display"
                  sx={{
                    fontSize: { xs: 40, sm: 52, md: 60, lg: 66 },
                    color: 'var(--color-ink)',
                    mt: 3,
                  }}
                >
                  Heating, Cooling,{' '}
                  <Box component="span" sx={{ color: 'var(--color-accent)' }}>Done Right</Box>
                </Typography>
              </motion.div>

              <Typography
                sx={{
                  mt: 3,
                  fontSize: { xs: 17, md: 19 },
                  color: 'var(--color-ink-muted)',
                  lineHeight: 1.7,
                  maxWidth: 560,
                }}
              >
                HVAC service across Wichita and south-central Kansas. We keep homes cool in July,
                warm in January, and breathing clean air all year — no surprises, no upsells.
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: 4 }}>
                <a href={business.phoneHref} className="btn-primary">
                  <PhoneIcon sx={{ fontSize: 16 }} />
                  Call {business.phone}
                </a>
                <RouterLink to="/contact" className="btn-secondary">
                  Schedule Service
                  <ArrowForwardIcon sx={{ fontSize: 16 }} />
                </RouterLink>
              </Stack>

              <HeroTrustRow>
                <span>24/7 emergency</span>
                <span>Licensed &amp; insured</span>
                <span>Veteran-owned · Since {business.founded}</span>
              </HeroTrustRow>
            </Box>

            {/* RIGHT: image card with floating stat overlay */}
            <Box sx={{ position: 'relative' }}>
              <HeroImageCard
                initial={{ opacity: 0, scale: 0.96, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <img
                  src="/hero.png"
                  alt="Air Source — Wichita HVAC service"
                />
                <div className="overlay" aria-hidden />

                <StatOverlay
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                >
                  <div className="stat">
                    <span className="num">25+</span>
                    <span className="lbl">Years in Wichita</span>
                  </div>
                  <div className="stat">
                    <span className="num">1,000+</span>
                    <span className="lbl">Homes served</span>
                  </div>
                  <div className="stat">
                    <span className="num">24/7</span>
                    <span className="lbl">Emergency</span>
                  </div>
                </StatOverlay>
              </HeroImageCard>
            </Box>
          </HeroGrid>

          {/* PAYMENT METHODS STRIP */}
          <Box sx={{
            mt: { xs: 6, md: 8 },
            pt: { xs: 4, md: 5 },
            borderTop: '1px solid var(--color-border)',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'flex-start', sm: 'center' },
            justifyContent: 'space-between',
            gap: 2.5,
          }}>
            <Typography sx={{
              fontSize: 11, fontWeight: 700, letterSpacing: '0.2em',
              textTransform: 'uppercase', color: 'var(--color-ink-muted)',
              flexShrink: 0,
            }}>
              We accept
            </Typography>
            <Box sx={{
              display: 'flex', flexWrap: 'wrap',
              columnGap: 1, rowGap: 1,
            }}>
              {['Visa', 'Mastercard', 'Amex', 'Discover', 'Check', 'Cash'].map((m) => (
                <Box key={m} sx={{
                  height: 32, px: 1.25, display: 'inline-flex', alignItems: 'center',
                  border: '1px solid var(--color-border)', borderRadius: 1,
                  background: '#fff', fontSize: 11, fontWeight: 700,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: 'var(--color-ink)',
                  boxShadow: '0 1px 2px rgba(10,22,40,0.04)',
                }}>{m}</Box>
              ))}
            </Box>
          </Box>
        </div>
      </HeroSection>

      {/* RECOGNITION STRIP */}
      <Box sx={{ borderBlock: '1px solid var(--color-border)', py: 5 }}>
        <div className="container-page">
          <Typography sx={{
            textAlign: 'center', fontSize: 11, fontWeight: 700,
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: 'var(--color-ink-muted)',
          }}>
            Recognized & Reviewed By
          </Typography>
          <Box sx={{
            mt: 3,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            columnGap: 3,
            rowGap: 1.5,
          }}>
            <Badge>Google · {business.rating}★</Badge>
            <Badge>BBB · A+</Badge>
            <Badge>EPA Certified</Badge>
            <Badge>NATE Certified</Badge>
            <Badge>Trane Comfort Specialist</Badge>
            <Badge>Angi Approved</Badge>
          </Box>
        </div>
      </Box>

      {/* SERVICES */}
      <Box id="services" sx={{ py: { xs: 10, md: 14 } }}>
        <div className="container-page">
          <SectionHeader
            eyebrow="What we do"
            title="HVAC services that keep you comfortable."
            subtitle="Every job is scoped, quoted, and performed by our own technicians — no subcontractors, no surprises."
          />

          <Grid container spacing={3} sx={{ mt: { xs: 4, md: 6 } }}>
            {services.map((s, i) => {
              const Icon = ICONS[s.icon];
              return (
                <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={s.slug}>
                  <ServiceCard
                    to={`/services#${s.slug}`}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <div className="image-wrap">
                      <img src={SERVICE_IMAGES[s.slug]} alt={s.title} />
                      <div className="grad" aria-hidden />
                      <div className="icon-badge">
                        <Icon sx={{ fontSize: 22 }} />
                      </div>
                      <div className="image-tag">{SERVICE_TAGS[s.slug]}</div>
                    </div>
                    <div className="body">
                      <h3>{s.title}</h3>
                      <p>{s.blurb}</p>
                      <span className="explore">
                        Explore service <EastIcon sx={{ fontSize: 14 }} />
                      </span>
                    </div>
                  </ServiceCard>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </Box>

      {/* STATS */}
      <Box sx={{ py: { xs: 8, md: 10 } }}>
        <div className="container-page">
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' },
            gap: { xs: 4, md: 6 },
            borderBlock: '1px solid var(--color-border)',
            py: 5,
          }}>
            {stats.map((s) => (
              <Box key={s.label} sx={{ textAlign: 'center' }}>
                <Typography
                  className="heading-display"
                  sx={{ fontSize: { xs: 32, md: 44 }, color: 'var(--color-ink)' }}
                >
                  {s.value}
                </Typography>
                <Typography sx={{
                  mt: 1, fontSize: 11, fontWeight: 700,
                  letterSpacing: '0.16em', textTransform: 'uppercase',
                  color: 'var(--color-ink-muted)',
                }}>
                  {s.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </div>
      </Box>

      {/* WHY US — split image + bullets */}
      <Box sx={{ background: 'var(--color-surface-alt)', py: { xs: 10, md: 14 } }}>
        <div className="container-page">
          <Grid container spacing={{ xs: 2, md: 8 }}>
            <Grid item xs={12} md={6}>
              <Box sx={{
                position: 'relative',
                borderRadius: '28px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lift)',
                height: { xs: 380, sm: 480, md: 560 },
                background: "url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=85') center/cover",
              }}>
                <Box sx={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(10,22,40,0.85), rgba(10,22,40,0.05) 55%)',
                }} />
                <Box sx={{ position: 'absolute', left: 24, right: 24, bottom: 24, color: '#fff' }}>
                  <Chip
                    label="Same-Day Service Available"
                    sx={{
                      background: 'var(--color-accent)', color: '#fff',
                      fontWeight: 700, mb: 1.5, borderRadius: '9999px',
                      letterSpacing: '0.02em',
                    }}
                  />
                  <Typography
                    className="heading-display"
                    sx={{ fontSize: { xs: 22, md: 28 }, color: '#fff', lineHeight: 1.2 }}
                  >
                    Call before noon — be cool by dinner.
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <SectionHeader
                eyebrow="Why Air Source"
                title="A Wichita family taking care of Wichita families."
                subtitle={`Air Source was founded in ${business.founded} by Rob and Alanna Felkins on a simple promise: treat every home like our own. Twenty-five years later, that promise is still the only thing we sell.`}
                align="left"
              />
              <Stack spacing={1.5} sx={{ mb: 4 }}>
                {[
                  'EPA-certified, factory-trained technicians',
                  'Up-front pricing — no surprises, ever',
                  'Same-day repairs on every brand',
                  'Free in-home estimates on new systems',
                  '0% financing options for qualified buyers',
                ].map((line) => (
                  <Stack key={line} direction="row" spacing={1.5} alignItems="flex-start">
                    <Box sx={{
                      width: 22, height: 22, borderRadius: '9999px',
                      background: 'var(--color-accent-soft)',
                      color: 'var(--color-accent-dark)',
                      display: 'grid', placeItems: 'center', flexShrink: 0,
                      mt: '2px',
                    }}>
                      <CheckIcon sx={{ fontSize: 14 }} />
                    </Box>
                    <Typography sx={{ fontSize: 16, color: 'var(--color-ink)', lineHeight: 1.5 }}>
                      {line}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
              <Stack direction="row" spacing={1.5}>
                <Button variant="contained" color="secondary" component={RouterLink} to="/about">
                  More About Us
                </Button>
                <Button variant="outlined" component={RouterLink} to="/services" endIcon={<EastIcon />}>
                  All Services
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </div>
      </Box>

      {/* REVIEWS */}
      <Box sx={{ background: 'var(--color-surface-alt)', py: { xs: 10, md: 14 } }}>
        <div className="container-page">
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            mb: { xs: 6, md: 8 },
            gap: 2.5,
          }}>
            <GoogleReviewsPill>
              <GoogleG size={18} />
              <span>Google Reviews</span>
              <span className="stars">
                {[0,1,2,3,4].map(i => <StarIcon key={i} sx={{ fontSize: 16 }} />)}
              </span>
              <span className="score">{business.rating.toFixed(1)}</span>
            </GoogleReviewsPill>
            <Typography
              variant="h2"
              className="heading-display"
              sx={{ fontSize: { xs: 32, sm: 38, md: 46 }, color: 'var(--color-ink)', m: 0 }}
            >
              What Our Clients Say
            </Typography>
            <Typography sx={{
              fontSize: { xs: 16, md: 18 },
              color: 'var(--color-ink-muted)',
              lineHeight: 1.7,
              maxWidth: 620,
              m: 0,
            }}>
              Don't just take our word for it — hear from the homeowners we've helped
              keep comfortable across south-central Kansas.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {reviews.slice(0, 3).map((r, i) => (
              <Grid item xs={12} md={4} key={r.name}>
                <ReviewCard
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <div className="top-row">
                    <span className="stars" aria-label={`${r.rating} out of 5 stars`}>
                      {Array.from({ length: r.rating }).map((_, k) => (
                        <StarIcon key={k} sx={{ fontSize: 18 }} />
                      ))}
                    </span>
                    <GoogleG size={22} />
                  </div>
                  <p className="quote">&ldquo;{r.text}&rdquo;</p>
                  <RouterLink to="/reviews" className="read-more">…Read more</RouterLink>
                  <div className="divider" aria-hidden />
                  <div className="person">
                    <div className="avatar">{getInitials(r.name)}</div>
                    <div>
                      <div className="name">{r.name}</div>
                      <div className="date">{r.date}</div>
                    </div>
                  </div>
                </ReviewCard>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: 'center', mt: 5 }}>
            <Box
              component={RouterLink}
              to="/reviews"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                fontSize: 15,
                fontWeight: 600,
                color: 'var(--color-ink)',
                textDecoration: 'none',
                '&:hover': { color: 'var(--color-accent)' },
              }}
            >
              <GoogleG size={18} />
              View all reviews on Google
              <ArrowForwardIcon sx={{ fontSize: 16 }} />
            </Box>
          </Box>
        </div>
      </Box>

      {/* SERVICE AREA */}
      <Box sx={{ py: { xs: 10, md: 14 } }}>
        <div className="container-page">
          <SectionHeader
            eyebrow="Service area"
            title="Proudly serving south-central Kansas"
            subtitle="Don't see your town? Give us a call — we likely cover it."
          />
          <Box sx={{
            mt: { xs: 2, md: 4 },
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 1.5,
          }}>
            {business.serviceArea.map((city) => (
              <AreaChip key={city}>{city}</AreaChip>
            ))}
          </Box>
        </div>
      </Box>

      <CallToAction />

      {/* FAQ */}
      <Box sx={{ py: { xs: 10, md: 14 } }}>
        <div className="container-page">
          <SectionHeader
            eyebrow="Questions?"
            title="Answers, before you book."
            subtitle="The things Wichita homeowners ask most. Don't see yours? Call — we'll talk it through, no pressure."
          />
          <Box sx={{ maxWidth: 820, mx: 'auto', mt: { xs: 4, md: 6 } }}>
            {FAQ_ITEMS.map((item) => (
              <FaqItem key={item.q}>
                <summary>
                  <span>{item.q}</span>
                  <span className="faq-icon" aria-hidden>
                    <AddIcon sx={{ fontSize: 18 }} />
                  </span>
                </summary>
                <div className="faq-answer">{item.a}</div>
              </FaqItem>
            ))}
          </Box>
        </div>
      </Box>
    </>
  );
}
