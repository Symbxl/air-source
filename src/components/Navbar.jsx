import { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText,
  Typography, Collapse,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import styled from 'styled-components';
import { business, services } from '../data/site';

const UtilityBar = styled.div`
  background: var(--color-brand-dark);
  color: #fff;
  font-size: 13px;
  .inner {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding-block: 8px;
  }
  .left {
    display: flex; align-items: center; gap: 8px;
    color: rgba(255,255,255,0.8);
  }
  .left .dot {
    width: 6px; height: 6px;
    border-radius: 9999px;
    background: var(--color-accent);
    display: inline-block;
  }
  .right {
    display: flex; align-items: center; gap: 16px;
    color: rgba(255,255,255,0.7);
  }
  .right .lic { display: none; }
  .right a { color: #fff; font-weight: 600; text-decoration: none; }
  .right a:hover { color: var(--color-accent); }
  @media (min-width: 640px) {
    .inner { flex-direction: row; align-items: center; justify-content: space-between; }
    .right .lic { display: inline; }
  }
`;

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 40;
  background: rgba(255,255,255,0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(227,232,240,0.7);
  .inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
    padding-block: 14px;
  }
`;

const Logo = styled(RouterLink)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: inherit;
  flex-shrink: 0;
  .iconWrap {
    position: relative;
    width: 42px; height: 42px;
    border-radius: 12px;
    background: linear-gradient(135deg, var(--color-brand) 0%, #1e3a66 100%);
    display: grid; place-items: center;
    color: #fff;
  }
  .iconWrap .flame {
    position: absolute;
    bottom: -4px; right: -4px;
    width: 22px; height: 22px;
    border-radius: 8px;
    background: var(--color-accent);
    color: #fff;
    display: grid; place-items: center;
    border: 2px solid #fff;
  }
  .name {
    font-family: var(--font-display);
    font-weight: 700;
    font-size: 17px;
    letter-spacing: -0.01em;
    line-height: 1;
    color: var(--color-ink);
  }
  .sub {
    font-size: 11px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--color-ink-muted);
    margin-top: 3px;
  }
`;

const NavList = styled.nav`
  display: none;
  align-items: center;
  gap: 32px;
  font-size: 14px;
  color: var(--color-ink-muted);
  @media (min-width: 1024px) { display: flex; }

  a, button {
    background: none; border: none; padding: 0; cursor: pointer;
    font: inherit; color: inherit;
    text-decoration: none;
    transition: color .15s;
  }
  a:hover, button:hover { color: var(--color-ink); }
  a.active { color: var(--color-ink); font-weight: 600; }

  .has-menu { position: relative; }
  .menu-btn { display: inline-flex; align-items: center; gap: 4px; }

  .menu-btn .chev { transition: transform .2s; }
  .has-menu:hover .menu-btn .chev,
  .has-menu:focus-within .menu-btn .chev { transform: rotate(180deg); }

  .menu-panel {
    position: absolute;
    left: 50%;
    top: 100%;
    transform: translateX(-50%);
    width: 280px;
    padding-top: 12px;
    opacity: 0;
    visibility: hidden;
    transition: opacity .15s;
    z-index: 50;
  }
  .has-menu:hover .menu-panel,
  .has-menu:focus-within .menu-panel { opacity: 1; visibility: visible; }

  .menu-card {
    background: #fff;
    border: 1px solid var(--color-border);
    border-radius: 1.25rem;
    box-shadow: var(--shadow-lift);
    padding: 8px;
  }
  .menu-card a {
    display: block;
    padding: 10px 12px;
    border-radius: 12px;
  }
  .menu-card a:hover { background: var(--color-surface-alt); }
  .menu-card a .label { display: block; font-weight: 600; color: var(--color-ink); font-size: 14px; }
  .menu-card a .desc { display: block; font-size: 13px; color: var(--color-ink-muted); margin-top: 2px; }
`;

const RightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;

  .nav-cta {
    display: none;
    padding: 0.625rem 1.125rem;
    font-size: 0.9rem;
  }
  @media (min-width: 768px) { .nav-cta { display: inline-flex; } }

  .menu-toggle {
    display: inline-grid;
    place-items: center;
    width: 42px; height: 42px;
    border-radius: 9999px;
    border: 1px solid var(--color-border);
    color: var(--color-ink);
    background: #fff;
    cursor: pointer;
    transition: background .15s, border-color .15s;
  }
  .menu-toggle:hover { background: var(--color-surface-alt); }
  @media (min-width: 1024px) { .menu-toggle { display: none; } }
`;

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services', children: services.map((s) => ({ to: `/services#${s.slug}`, label: s.title, desc: s.blurb })) },
  { to: '/reviews', label: 'Reviews' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <>
      <UtilityBar>
        <div className="container-page inner">
          <p className="left">
            <span aria-hidden className="dot" />
            ★ {business.rating} · 24/7 Emergency · Family-Owned Since {business.founded}
          </p>
          <div className="right">
            <span className="lic">KS Mechanical Contractor · Licensed & Insured</span>
            <a href={business.phoneHref}>{business.phone}</a>
          </div>
        </div>
      </UtilityBar>

      <Header>
        <div className="container-page inner">
          <Logo to="/">
            <div className="iconWrap">
              <AcUnitIcon sx={{ fontSize: 20 }} />
              <span className="flame"><LocalFireDepartmentIcon sx={{ fontSize: 13 }} /></span>
            </div>
            <Box>
              <Typography className="name">Air Source</Typography>
              <Typography className="sub">Heating &amp; Cooling</Typography>
            </Box>
          </Logo>

          <NavList>
            {navLinks.map((l) => (
              l.children ? (
                <div key={l.to} className="has-menu">
                  <button type="button" className="menu-btn">
                    {l.label}
                    <KeyboardArrowDownIcon className="chev" sx={{ fontSize: 16 }} />
                  </button>
                  <div className="menu-panel">
                    <div className="menu-card">
                      {l.children.map((c) => (
                        <RouterLink key={c.to} to={c.to}>
                          <span className="label">{c.label}</span>
                          <span className="desc">{c.desc}</span>
                        </RouterLink>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <RouterLink
                  key={l.to}
                  to={l.to}
                  className={pathname === l.to ? 'active' : ''}
                >
                  {l.label}
                </RouterLink>
              )
            ))}
          </NavList>

          <RightSide>
            <a href={business.phoneHref} className="btn-primary nav-cta">
              <PhoneIcon sx={{ fontSize: 16 }} />
              Call Now
            </a>
            <button
              type="button"
              className="menu-toggle"
              aria-label="Open navigation menu"
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </button>
          </RightSide>
        </div>
      </Header>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 300, pt: 2 }}>
          <List>
            {navLinks.map((l) => (
              l.children ? (
                <Box key={l.to}>
                  <ListItem disablePadding>
                    <ListItemButton onClick={() => setServicesOpen((v) => !v)}>
                      <ListItemText
                        primary={l.label}
                        primaryTypographyProps={{ fontWeight: 600, color: 'text.primary' }}
                      />
                      <KeyboardArrowDownIcon
                        sx={{ transform: servicesOpen ? 'rotate(180deg)' : 'none', transition: 'transform .2s' }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <Collapse in={servicesOpen} unmountOnExit>
                    <List disablePadding>
                      {l.children.map((c) => (
                        <ListItem key={c.to} disablePadding>
                          <ListItemButton
                            component={RouterLink}
                            to={c.to}
                            sx={{ pl: 4 }}
                            onClick={() => setOpen(false)}
                          >
                            <ListItemText
                              primary={c.label}
                              primaryTypographyProps={{ fontSize: 14, color: 'text.secondary' }}
                            />
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                </Box>
              ) : (
                <ListItem key={l.to} disablePadding>
                  <ListItemButton component={RouterLink} to={l.to} onClick={() => setOpen(false)}>
                    <ListItemText
                      primary={l.label}
                      primaryTypographyProps={{
                        fontWeight: pathname === l.to ? 700 : 500,
                        color: pathname === l.to ? 'primary.main' : 'text.primary',
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              )
            ))}
          </List>
          <Box sx={{ p: 2 }}>
            <a href={business.phoneHref} className="btn-primary" style={{ width: '100%' }}>
              <PhoneIcon sx={{ fontSize: 18 }} />
              {business.phone}
            </a>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
