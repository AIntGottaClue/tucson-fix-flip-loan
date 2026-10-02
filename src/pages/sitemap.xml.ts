import type { APIRoute } from 'astro';
import { cities } from '../data/cities';

export const GET: APIRoute = ({ site }) => {
  const origin = (site?.toString() ?? 'https://tucsonfixandflip.loansapp.cfd/').replace(/\/$/, '');
  const paths = ['/', ...cities.map((c) => `/${c.slug}/`), '/fix-and-flip-vs-hard-money/', '/how-fix-and-flip-funding-works-in-arizona/', '/fix-and-flip-loan-costs/', '/privacy/', '/terms/'];
  const locs = paths.map((p) => origin + p).sort();
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">${locs.map((l) => `<url><loc>${l}</loc></url>`).join('')}</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
