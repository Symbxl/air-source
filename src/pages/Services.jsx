import { useEffect } from 'react';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import { Box, Grid, Typography, Card, Stack, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import PhoneIcon from '@mui/icons-material/Phone';
import EastIcon from '@mui/icons-material/East';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import AirIcon from '@mui/icons-material/Air';
import SpaIcon from '@mui/icons-material/Spa';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import styled from 'styled-components';
import PageHero from '../components/PageHero';
import CallToAction from '../components/CallToAction';
import { services, business } from '../data/site';

const ICONS = {
  AcUnit: AcUnitIcon,
  LocalFireDepartment: LocalFireDepartmentIcon,
  EnergySavingsLeaf: EnergySavingsLeafIcon,
  Air: AirIcon,
  Spa: SpaIcon,
  Architecture: ArchitectureIcon,
};

const ServiceCard = styled(Card)`
  padding: 40px;
  height: 100%;
  border-radius: 28px !important;
  scroll-margin-top: 120px;
  .iconBubble {
    width: 56px; height: 56px;
    border-radius: 16px;
    background: var(--color-accent-soft);
    color: var(--color-accent);
    display: grid; place-items: center;
    margin-bottom: 24px;
  }
`;

export default function Services() {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="HVAC services, end to end."
        subtitle="Whether your AC just quit or you're planning a whole-home upgrade, our own technicians have the experience and equipment to do the job right — the first time."
      />
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <div className="container-page">
          <Grid container spacing={3}>
            {services.map((s) => {
              const Icon = ICONS[s.icon];
              return (
                <Grid item xs={12} md={6} key={s.slug}>
                  <ServiceCard id={s.slug}>
                    <Box className="iconBubble">
                      <Icon sx={{ fontSize: 28 }} />
                    </Box>
                    <Typography
                      className="heading-display"
                      sx={{ fontSize: 28, mb: 1.5, color: 'var(--color-ink)' }}
                    >
                      {s.title}
                    </Typography>
                    <Typography sx={{ color: 'var(--color-ink-muted)', mb: 3, lineHeight: 1.7, fontSize: 16 }}>
                      {s.blurb}
                    </Typography>
                    <List dense disablePadding sx={{ mb: 3 }}>
                      {s.details.map((d) => (
                        <ListItem key={d} disableGutters sx={{ py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <Box sx={{
                              width: 22, height: 22, borderRadius: '9999px',
                              background: 'var(--color-accent-soft)',
                              color: 'var(--color-accent-dark)',
                              display: 'grid', placeItems: 'center',
                            }}>
                              <CheckIcon sx={{ fontSize: 14 }} />
                            </Box>
                          </ListItemIcon>
                          <ListItemText primary={d} primaryTypographyProps={{ fontSize: 15, color: 'var(--color-ink)' }} />
                        </ListItem>
                      ))}
                    </List>
                    <Stack direction="row" spacing={1.5}>
                      <Button variant="contained" color="secondary" startIcon={<PhoneIcon />} href={business.phoneHref}>
                        Get a Quote
                      </Button>
                      <Button variant="outlined" component={RouterLink} to="/contact" endIcon={<EastIcon />}>
                        Schedule
                      </Button>
                    </Stack>
                  </ServiceCard>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </Box>
      <CallToAction
        title="Not sure what you need?"
        subtitle="A free, no-pressure in-home assessment from a real Wichita technician."
      />
    </>
  );
}
