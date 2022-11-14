import { sub } from 'date-fns';
//
import { role } from './role';
import { email } from './email';
import { video } from './video';
import { boolean } from './boolean';
import { company } from './company';
import { phoneNumber } from './phoneNumber';
import { firstName, lastName, fullName } from './name';
import { price, rating, age, percent } from './number';
import { areas, fullAddress, country, countries, fullService } from './address';
import {
  jobTitle,
  tourName,
  sentence,
  blogTitle,
  brandsName,
  courseTitle,
  description,
  jobCategories,
} from './text';

// ----------------------------------------------------------------------

const _mock = {
  slug: (index) => `case-study-0${index + 1}`,
  slugTwo: (index) => `service-0${index + 1}`,
  id: (index) => `e99f09a7-dd88-49d5-b1c8-1daf80c2d7b${index + 1}`,
  email: (index) => email[index],
  phoneNumber: (index) => phoneNumber[index],
  time: (index) => sub(new Date(), { days: index, hours: index }),
  boolean: (index) => boolean[index],
  role: (index) => role[index],
  company: (index) => company[index],
  address: {
    fullAddress: (index) => fullAddress[index],
    country: (index) => country[index],
    fullService: (index) => fullService[index],
    areas: (index) => areas[index],
  },
  name: {
    firstName: (index) => firstName[index],
    lastName: (index) => lastName[index],
    fullName: (index) => fullName[index],
  },
  text: {
    blogTitle: (index) => blogTitle[index],
    courseTitle: (index) => courseTitle[index],
    jobTitle: (index) => jobTitle[index],
    jobCategories: (index) => jobCategories[index],
    tourName: (index) => fullService[index],
    brandsName: (index) => brandsName[index],
    sentence: (index) => sentence[index],
    description: (index) => description[index],
  },
  number: {
    percent: (index) => percent[index],
    rating: (index) => rating[index],
    age: (index) => age[index],
    price: (index) => price[index],
  },

  image: {
    avatar: (index) =>
      `https://zone-assets-api.vercel.app/assets/images/avatars/avatar_${index + 1}.jpg`,
    company: (index) =>
      `http://localhost:7777/img/images/images_1.jpg`,
    marketing: (index) =>
      `https://zone-assets-api.vercel.app/assets/images/marketing/marketing_${index + 1}.jpg`,
    //
    travel: (index) =>
      `http://localhost:7777/img/areasOfWork/areas_of_work_${index + 1}.jpg`,
    travelLarge: (index) =>
      `https://zone-assets-api.vercel.app/assets/images/travel/travel_hero_${index + 1}.jpg`,
    //
    career: (index) =>
      `https://chistograd-pmk.ru/images/tild3464-6438-4162-b137-663637613363__9.jpg`,
    course: (index) =>
      `https://zone-assets-api.vercel.app/assets/images/e-learning/course_${index + 1}.jpg`,
    allServices: (index) =>
      `http://localhost:7777/img/all-services/all-services_${index + 1}.jpg`,
    industrialSteelStructures: (index) =>
      `http://localhost:7777/img/industrialSteelStructures/industrialSteelStructures_${index + 1}.jpg`,
  },
  video,
  countries,
  jobTitle,
  jobCategories,
  shareLinks: {
    facebook: `facebook/user-name`,
    instagram: `instagram/user-name`,
    linkedin: `linkedin/user-name`,
    twitter: `twitter/user-name`,
  },
};

export default _mock;
