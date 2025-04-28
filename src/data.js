import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

import greekSalad from './assets/specials/greekSalad.jpg';
import bruschetta from './assets/specials/bruschetta.jpg';
import lemonDessert from './assets/specials/lemonDessert.jpg';

import andrea from './assets/testimonials/andrea.jpg';
import jane from './assets/testimonials/jane.jpg';
import john from './assets/testimonials/john.jpg';
import mark from './assets/testimonials/mark.jpg';

export const links = [
  {
    id: 1,
    link: 'about',
  },
  {
    id: 2,
    link: 'menu',
  },
  {
    id: 3,
    link: 'testimonials',
  },
  {
    id: 4,
    link: 'contact',
  },
];

export const specials = [
  {
    id: 1,
    image: greekSalad,
    name: 'Greek Salad',
    price: '$ 12.99',
    description:
      'The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
  },
  {
    id: 2,
    image: bruschetta,
    name: 'Bruschetta',
    price: '$ 5.99',
    description:
      'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive.',
  },
  {
    id: 3,
    image: lemonDessert,
    name: 'Lemon Dessert',
    price: '$ 5.00',
    description:
      'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
  },
];

export const testimonials = [
  {
    id: 1,
    image: andrea,
    name: 'Andrea Smith',
  },
  {
    id: 2,
    image: jane,
    name: 'Jane Marks',
  },
  {
    id: 3,
    image: john,
    name: 'John Doe',
  },

  {
    id: 4,
    image: mark,
    name: 'Mark James',
  },
];

export const contacts = [
  {
    id: 1,
    link: 'mailto:littlemon@rock.com',
    title: 'littlemon@rock.com',
  },
  {
    id: 2,
    link: 'tel:+40741135272',
    title: '(074) 113-5272',
  },
  {
    id: 3,
    link: 'mailto:littlemon@bookings.com',
    title: 'littlemon@bookings.com',
  },
];

export const socials = [
  {
    id: 1,
    child: <FaFacebook size={30} />,
    link: 'https://facebook.com',
  },
  {
    id: 2,
    child: <FaInstagram size={30} />,
    link: 'https://instagram.com/',
  },
  {
    id: 4,
    child: <FaTwitter size={30} />,
    link: 'https://twitter.com/',
  },
];
