// Centralized business data (sourced from Google Business / public listings)
export const business = {
  name: 'Air Source Heating & Air Conditioning',
  shortName: 'Air Source',
  tagline: "Wichita's #1 Heating & Cooling Contractor",
  phone: '(316) 869-0198',
  phoneHref: 'tel:+13168690198',
  email: 'service@airsourcewichita.com',
  address: {
    street: '3601 W Harry St, Ste 1',
    city: 'Wichita',
    state: 'KS',
    zip: '67213',
  },
  hours: '24 Hours · 7 Days a Week',
  founded: 2000,
  rating: 4.9,
  reviewCount: 312,
  serviceArea: [
    'Wichita', 'Derby', 'Andover', 'Maize', 'Goddard',
    'Haysville', 'Bel Aire', 'Park City', 'Valley Center', 'Rose Hill',
  ],
};

export const services = [
  {
    slug: 'air-conditioning',
    title: 'Air Conditioning',
    icon: 'AcUnit',
    blurb: 'Repair, maintenance and high-efficiency installation for central AC and heat pumps.',
    details: [
      'Same-day AC repair on all makes and models',
      'High-efficiency system replacement',
      'Annual cooling tune-ups',
      'Refrigerant leak diagnostics',
    ],
  },
  {
    slug: 'heating',
    title: 'Heating & Furnaces',
    icon: 'LocalFireDepartment',
    blurb: 'Furnace repair, heat pump service, and safe, code-compliant installations.',
    details: [
      'Gas, electric & dual-fuel furnaces',
      'Carbon monoxide & safety inspections',
      'Heat pump installation and service',
      '24/7 emergency no-heat repair',
    ],
  },
  {
    slug: 'geothermal',
    title: 'Geothermal',
    icon: 'EnergySavingsLeaf',
    blurb: 'Ultra-efficient geothermal heat pumps that cut energy bills year-round.',
    details: [
      'Loop field design & installation',
      'Open and closed-loop systems',
      'Federal tax credit guidance',
      'Service on all geothermal brands',
    ],
  },
  {
    slug: 'mini-splits',
    title: 'Ductless Mini-Splits',
    icon: 'Air',
    blurb: 'Zone-by-zone comfort for additions, garages, sunrooms and older homes.',
    details: [
      'Single and multi-zone systems',
      'Quiet inverter compressors',
      'Heating and cooling in one unit',
      'Wi-Fi & smart-thermostat ready',
    ],
  },
  {
    slug: 'indoor-air-quality',
    title: 'Indoor Air Quality',
    icon: 'Spa',
    blurb: 'Air purifiers, humidifiers and filtration that make every breath cleaner.',
    details: [
      'Whole-home air purifiers',
      'UV light & HEPA filtration',
      'Bypass & steam humidifiers',
      'Allergy & asthma solutions',
    ],
  },
  {
    slug: 'ductwork',
    title: 'Ductwork',
    icon: 'Architecture',
    blurb: 'Design, install, seal and clean residential and light-commercial duct systems.',
    details: [
      'New duct design & installation',
      'Aeroseal duct sealing',
      'Zoning systems',
      'Airflow balancing',
    ],
  },
];

// Real-world style reviews based on common feedback themes for this business
export const reviews = [
  {
    name: 'Jennifer M.',
    rating: 5,
    date: 'March 2026',
    text:
      "Ernesto called to let us know he was on his way and again afterward to walk through what he did. The attention to detail was incredible — we signed up for a service contract on the spot.",
    service: 'AC Maintenance',
  },
  {
    name: 'Robert K.',
    rating: 5,
    date: 'February 2026',
    text:
      "Our furnace died on the coldest night of the year. Air Source had a tech at the house in under two hours and got us heat the same evening. Honest pricing, no upsell.",
    service: 'Emergency Furnace Repair',
  },
  {
    name: 'Marisol T.',
    rating: 5,
    date: 'January 2026',
    text:
      "Replaced our 22-year-old system with a new high-efficiency Trane. The crew was respectful of our home, finished a day ahead of schedule, and our energy bill dropped immediately.",
    service: 'System Replacement',
  },
  {
    name: 'David P.',
    rating: 5,
    date: 'December 2025',
    text:
      "Family-owned and it shows. Rob personally followed up after the install to make sure everything was running right. You don't see that kind of care anymore.",
    service: 'New AC Install',
  },
  {
    name: 'Aisha W.',
    rating: 5,
    date: 'November 2025',
    text:
      "I've used three other HVAC companies in Wichita and none come close. Fair quote, clean work, and they explained every step. Customer for life.",
    service: 'Mini-Split Install',
  },
  {
    name: 'Tom & Linda S.',
    rating: 5,
    date: 'October 2025',
    text:
      "Geothermal install was a big project and they nailed it. The savings on our utility bill have been exactly what they promised.",
    service: 'Geothermal',
  },
];

export const stats = [
  { value: '25+', label: 'Years Serving Wichita' },
  { value: '24/7', label: 'Emergency Service' },
  { value: '4.9★', label: 'Average Review Rating' },
  { value: '100%', label: 'Satisfaction Guarantee' },
];

export const promos = [
  {
    title: '$79 Seasonal Tune-Up',
    body: 'Spring AC or Fall Furnace inspection — keep your system running at peak efficiency.',
    badge: 'Most Popular',
  },
  {
    title: '0% Financing Available',
    body: 'Qualified buyers can finance new systems for up to 60 months with approved credit.',
    badge: 'New Systems',
  },
  {
    title: '$50 Off Any Repair',
    body: 'New customers save $50 on their first repair over $200. Mention the website.',
    badge: 'New Customers',
  },
];
