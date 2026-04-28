import { Box, Grid, Typography, Button, Stack, Card, Rating, Avatar, Chip } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import PhoneIcon from '@mui/icons-material/Phone';
import EastIcon from '@mui/icons-material/East';
import CheckIcon from '@mui/icons-material/Check';

import AcUnitIcon from '@mui/icons-material/AcUnit';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import AirIcon from '@mui/icons-material/Air';
import SpaIcon from '@mui/icons-material/Spa';
import ArchitectureIcon from '@mui/icons-material/Architecture';

import { business, services, reviews, stats, promos } from '../data/site';
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
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    bottom: auto;
    height: 560px;
    background:
      radial-gradient(60% 50% at 50% 0%, rgba(30,136,229,0.08), transparent 70%),
      linear-gradient(to bottom, var(--color-surface-alt), transparent);
    pointer-events: none;
  }
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
    height: 360px;
    object-fit: cover;
    object-position: center;
    display: block;
  }
  @media (min-width: 640px) { img { height: 460px; } }
  @media (min-width: 1024px) { img { height: 560px; } }
  .overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(10,22,40,0.7) 0%, rgba(10,22,40,0.15) 45%, rgba(10,22,40,0) 70%);
    pointer-events: none;
  }
  .cta-row {
    position: absolute;
    inset-inline: 0;
    bottom: 28px;
    display: flex;
    justify-content: center;
    gap: 12px;
    flex-wrap: wrap;
    padding-inline: 20px;
  }
  @media (min-width: 768px) { .cta-row { bottom: 40px; } }
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

// ---------- PROMO CARD (coupon-style) ----------
const PromoCard = styled(motion.article)`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #fff;
  border: 1px solid var(--color-border);
  border-radius: 28px;
  overflow: hidden;
  transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lift);
    border-color: rgba(30,136,229,0.3);
  }

  .promo-header {
    position: relative;
    padding: 26px 28px 24px;
    background:
      radial-gradient(120% 100% at 100% 0%, rgba(30,136,229,0.10), transparent 60%),
      linear-gradient(180deg, var(--color-accent-soft), #f5fbff);
  }

  .promo-divider {
    height: 1px;
    background-image: linear-gradient(to right, var(--color-border-strong) 50%, transparent 50%);
    background-size: 10px 1px;
    background-repeat: repeat-x;
  }

  .promo-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: #fff;
    color: var(--color-accent-dark);
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    padding: 6px 11px;
    border-radius: 9999px;
    border: 1px solid rgba(30,136,229,0.25);
    box-shadow: 0 1px 2px rgba(10,22,40,0.05);
  }
  .promo-badge::before {
    content: '';
    width: 5px; height: 5px;
    border-radius: 9999px;
    background: var(--color-accent);
  }

  .promo-amount {
    font-family: var(--font-display);
    font-size: 64px;
    font-weight: 700;
    letter-spacing: -0.045em;
    line-height: 1;
    color: var(--color-accent);
    margin-top: 18px;
  }
  @media (min-width: 768px) {
    .promo-amount { font-size: 72px; }
  }

  .promo-qualifier {
    font-family: var(--font-display);
    font-size: 17px;
    font-weight: 600;
    letter-spacing: -0.005em;
    color: var(--color-ink);
    margin-top: 8px;
  }

  .promo-body {
    padding: 24px 28px 28px;
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .promo-body p {
    color: var(--color-ink-muted);
    line-height: 1.65;
    font-size: 15px;
    flex: 1;
    margin: 0 0 22px;
  }
`;

// Pull a leading deal value ("$79", "0%", "$50 Off") off the front of the title
function splitPromoTitle(title) {
  const m = title.match(/^(\$\d+(?:\s*Off)?|\d+%(?:\s*Off)?)\s+(.+)$/i);
  return m ? { amount: m[1], qualifier: m[2] } : { amount: null, qualifier: title };
}

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
        <div className="container-page" style={{ position: 'relative', paddingTop: 56, paddingBottom: 80 }}>
          <Stack alignItems="center" textAlign="center" spacing={3} sx={{ maxWidth: 880, mx: 'auto' }}>
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
              <span className="eyebrow-pill">
                Family-owned · Veteran-led · Wichita since {business.founded}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
            >
              <Typography
                variant="h1"
                className="heading-display"
                sx={{ fontSize: { xs: 40, sm: 56, md: 68 }, color: 'var(--color-ink)' }}
              >
                Heating, Cooling,{' '}
                <Box component="span" sx={{ color: 'var(--color-accent)' }}>Done Right</Box>
              </Typography>
            </motion.div>

            <Typography
              sx={{
                fontSize: { xs: 17, md: 19 },
                color: 'var(--color-ink-muted)',
                lineHeight: 1.7,
                maxWidth: 640,
              }}
            >
              HVAC service across Wichita and south-central Kansas. We keep homes cool in July,
              warm in January, and breathing clean air all year — no surprises, no upsells.
            </Typography>
          </Stack>

          {/* HERO IMAGE CARD */}
          <Box sx={{ position: 'relative', mt: { xs: 6, md: 8 }, maxWidth: 1140, mx: 'auto' }}>
            <HeroImageCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1800&q=85"
                alt="Air Source HVAC technician inspecting a central AC unit at a Wichita home"
              />
              <div className="overlay" aria-hidden />
              <div className="cta-row">
                <a href={business.phoneHref} className="btn-primary">
                  <PhoneIcon sx={{ fontSize: 16 }} />
                  Call {business.phone}
                </a>
                <RouterLink to="/contact" className="btn-ghost-light">
                  Schedule Service
                  <EastIcon sx={{ fontSize: 16 }} />
                </RouterLink>
              </div>
            </HeroImageCard>
          </Box>

          {/* PAYMENT METHODS STRIP */}
          <Box sx={{ mt: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1.5 }}>
            <Typography sx={{
              fontSize: 11, fontWeight: 700, letterSpacing: '0.18em',
              textTransform: 'uppercase', color: 'var(--color-ink-muted)',
            }}>
              We accept
            </Typography>
            <Box sx={{
              display: 'flex', flexWrap: 'wrap', justifyContent: 'center',
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

          <Typography sx={{
            mt: 5, mx: 'auto', maxWidth: 640, textAlign: 'center',
            fontSize: 15, color: 'var(--color-ink-muted)', lineHeight: 1.7,
          }}>
            From same-day AC repair to a full system upgrade, our technicians cover the entire
            Wichita region —{' '}
            <Box component="span" sx={{ color: 'var(--color-ink)', fontWeight: 500 }}>
              licensed, insured, and family-owned since {business.founded}.
            </Box>
          </Typography>
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

      {/* PROMOS */}
      <Box sx={{ py: { xs: 10, md: 14 } }}>
        <div className="container-page">
          <SectionHeader
            eyebrow="Current specials"
            title="Save on the comfort you need"
            subtitle="We rotate seasonal offers throughout the year. Mention them when you book to lock them in."
          />
          <Grid container spacing={3} sx={{ mt: { xs: 4, md: 6 } }}>
            {promos.map((p, i) => {
              const { amount, qualifier } = splitPromoTitle(p.title);
              return (
                <Grid size={{ xs: 12, md: 4 }} key={p.title}>
                  <PromoCard
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <div className="promo-header">
                      <span className="promo-badge">{p.badge}</span>
                      {amount ? (
                        <>
                          <div className="promo-amount">{amount}</div>
                          <div className="promo-qualifier">{qualifier}</div>
                        </>
                      ) : (
                        <div className="promo-qualifier" style={{ fontSize: 24, marginTop: 18 }}>
                          {qualifier}
                        </div>
                      )}
                    </div>
                    <div className="promo-divider" aria-hidden />
                    <div className="promo-body">
                      <p>{p.body}</p>
                      <a href={business.phoneHref} className="btn-primary" style={{ alignSelf: 'flex-start' }}>
                        <PhoneIcon sx={{ fontSize: 16 }} />
                        Claim Offer
                      </a>
                    </div>
                  </PromoCard>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </Box>

      {/* REVIEWS */}
      <Box sx={{ background: 'var(--color-surface-alt)', py: { xs: 10, md: 14 } }}>
        <div className="container-page">
          <SectionHeader
            eyebrow="Real reviews"
            title="What your Wichita neighbors are saying"
            subtitle={`A ${business.rating}-star average across ${business.reviewCount}+ Google reviews. These are a few of our favorites.`}
          />
          <Grid container spacing={3} sx={{ mt: { xs: 4, md: 6 } }}>
            {reviews.slice(0, 3).map((r) => (
              <Grid item xs={12} md={4} key={r.name}>
                <Card sx={{ p: 4, height: '100%', borderRadius: '20px' }}>
                  <Rating value={r.rating} readOnly sx={{ mb: 2, color: 'var(--color-accent)' }} />
                  <Typography sx={{
                    color: 'var(--color-ink)',
                    mb: 3,
                    lineHeight: 1.7,
                    fontSize: 16,
                  }}>
                    "{r.text}"
                  </Typography>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar sx={{
                      background: 'var(--color-brand)',
                      fontWeight: 700,
                      width: 40, height: 40,
                    }}>
                      {r.name[0]}
                    </Avatar>
                    <Box>
                      <Typography sx={{ fontWeight: 700, color: 'var(--color-ink)' }}>{r.name}</Typography>
                      <Typography sx={{ fontSize: 13, color: 'var(--color-ink-muted)' }}>
                        {r.service} · {r.date}
                      </Typography>
                    </Box>
                  </Stack>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: 'center', mt: 5 }}>
            <Button component={RouterLink} to="/reviews" variant="outlined" size="large" endIcon={<EastIcon />}>
              Read All Reviews
            </Button>
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
    </>
  );
}
