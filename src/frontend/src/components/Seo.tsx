import { useEffect } from 'react';
import { CONTACT_INFO, EXTERNAL_LINKS } from '../content/contactAndLinks';

export function Seo() {
  useEffect(() => {
    // Set document title
    document.title = 'Professional Opportunity for Career Counselors, Tutors & Work-From-Home Educators | BestInternationalEducation.com';

    // Set meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'Join BestInternationalEducation.com as a Career Counselor, Tutor, or Work-From-Home Educator. Get a verified professional profile, digital promotion support, and direct student inquiries. Only INR 9999 per year.'
    );

    // Set canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin);

    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'Professional Opportunity for Career Counselors & Tutors' },
      { property: 'og:description', content: 'Join our global network of education professionals. Get verified profile, promotion support, and student inquiries.' },
      { property: 'og:image', content: `${window.location.origin}/assets/generated/opportunity-hero-poster.dim_1600x900.png` },
      { property: 'og:url', content: window.location.origin },
      { property: 'og:type', content: 'website' }
    ];

    ogTags.forEach(({ property, content }) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

    // Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Professional Opportunity for Career Counselors & Tutors' },
      { name: 'twitter:description', content: 'Join our global network of education professionals.' },
      { name: 'twitter:image', content: `${window.location.origin}/assets/generated/opportunity-hero-poster.dim_1600x900.png` }
    ];

    twitterTags.forEach(({ name, content }) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

    // JSON-LD structured data
    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          name: 'BestInternationalEducation.com',
          url: EXTERNAL_LINKS.bestInternationalEducation,
          email: [CONTACT_INFO.emails.primary, CONTACT_INFO.emails.secondary],
          telephone: [CONTACT_INFO.phones.primary, CONTACT_INFO.phones.secondary],
          sameAs: [
            EXTERNAL_LINKS.portraitBusinessWoman,
            EXTERNAL_LINKS.tenBestInCity,
            EXTERNAL_LINKS.guideByLocal
          ]
        },
        {
          '@type': 'WebPage',
          name: 'Professional Opportunity for Career Counselors, Tutors & Work-From-Home Educators',
          description: 'Join BestInternationalEducation.com as a Career Counselor, Tutor, or Work-From-Home Educator. Get a verified professional profile, digital promotion support, and direct student inquiries.',
          url: window.location.origin,
          publisher: {
            '@type': 'Organization',
            name: 'BestInternationalEducation.com'
          }
        }
      ]
    };

    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLd);
  }, []);

  return null;
}
