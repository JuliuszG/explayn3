import DevelopmentImage from '../images/about/1.svg';
import VisualImage from '../images/about/2.svg';
import BrandingImage from '../images/about/3.svg';
import EcommerceImage from '../images/about/4.svg';
import EventsImage from '../images/about/5.svg';
import MarketingImage from '../images/about/6.svg';
import DevelopmentHover from '../images/about/hover/1.svg';
import VisualHover from '../images/about/hover/2.svg';
import BrandingHover from '../images/about/hover/3.svg';
import EcommerceHover from '../images/about/hover/4.svg';
import EventsHover from '../images/about/hover/5.svg';
import MarketingHover from '../images/about/hover/6.svg';

export const items = [
  {
    image: [
      {
        src: DevelopmentImage,
        alt: 'Development',
      },
      {
        src: DevelopmentHover,
        alt: 'Development',
      },
    ],
    name: 'Development',
    list: [
      'Websites',
      'Online stores',
      'iOS & Android Apps',
      'Dedicated systems',
    ],
    url: '/development',
  },
  {
    image: [
      {
        src: VisualImage,
        alt: 'Visual',
      },
      {
        src: VisualHover,
        alt: 'Visual',
      },
    ],
    name: 'Visual',
    list: ['Photography', 'Video', 'Animated cartoons', 'Animations/3D'],
    url: '/visual',
  },
  {
    image: [
      {
        src: BrandingImage,
        alt: 'Branding',
      },
      {
        src: BrandingHover,
        alt: 'Branding',
      },
    ],
    name: 'Branding',
    list: [
      'Visual identification',
      'Product branding',
      'Brand strategy',
      'UI/UX Design',
    ],
    url: '/branding',
  },
  {
    image: [
      {
        src: EcommerceImage,
        alt: 'eCommerce',
      },
      {
        src: EcommerceHover,
        alt: 'eCommerce',
      },
    ],
    name: 'eCommerce',
    list: [
      'Online sales strategies',
      'Conversion enhancements',
      'Sales optimization',
      'Reports and analytics',
    ],
    url: '/ecommerce',
  },
  {
    image: [
      {
        src: EventsImage,
        alt: 'Events',
      },
      {
        src: EventsHover,
        alt: 'Events',
      },
    ],
    name: 'Events',
    list: [
      'Streaming Platform',
      'Event Management',
      'Marketing & Communication',
      'Audient',
    ],
    url: '/events',
  },
  {
    image: [
      {
        src: MarketingImage,
        alt: 'Marketing',
      },
      {
        src: MarketingHover,
        alt: 'Marketing',
      },
    ],
    name: 'Marketing',
    list: [
      'Marketing strategies',
      ' Social media',
      'Content Marketing',
      'Marketing campaigns',
    ],
    url: '/marketing',
  },
];

export const imageVariant = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
  initial: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
};

export const imageColorVariant = {
  visible: {
    opacity: 1,
    scale: 1.5,
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
  initial: {
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
    },
  },
};
