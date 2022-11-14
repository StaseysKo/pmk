import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
// config
import { ALL_SERVICES_DIRECTORY } from '../../../config';

// ----------------------------------------------------------------------

const slugs = fs.readdirSync(join(ALL_SERVICES_DIRECTORY));

// ----------------------------------------------------------------------

export function getAllAllServices() {
  const allServices = slugs.map((slugTwo) => {
    const fileContents = fs.readFileSync(join(ALL_SERVICES_DIRECTORY, slugTwo), 'utf-8');

    const { data: frontmatter } = matter(fileContents);

    return {
      slugTwo: slugTwo.replace('.md', ''),
      frontmatter,
    };
  });
  return allServices;
}

// ----------------------------------------------------------------------

export function getServiceData(slugTwo) {
  const fileContents = fs.readFileSync(join(ALL_SERVICES_DIRECTORY, slugTwo + '.md'), 'utf-8');

  const { data: frontmatter, content } = matter(fileContents);

  return {
    frontmatter,
    slugTwo,
    content,
  };
}

// ----------------------------------------------------------------------

export function getAllServicesSlugs() {
  const paths = slugs.map((filename) => ({
    params: {
      slugTwo: filename.replace('.md', ''),
    },
  }));
  return paths;
}
