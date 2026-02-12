import { CONTACT_INFO, EXTERNAL_LINKS, SOCIAL_LABELS } from '../content/contactAndLinks';
import { Mail, Phone } from 'lucide-react';
import { Separator } from './ui/separator';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(window.location.hostname || 'bestinternationaleducation');

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary">BestInternationalEducation</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Connecting education professionals with students across India and globally.
            </p>
          </div>

          {/* Partner Platforms */}
          <div>
            <h4 className="font-semibold mb-4">Partner Platforms</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={EXTERNAL_LINKS.bestInternationalEducation}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  BestInternationalEducation.com
                </a>
              </li>
              <li>
                <a
                  href={EXTERNAL_LINKS.portraitBusinessWoman}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Portrait-Business-Woman.com
                </a>
              </li>
              <li>
                <a
                  href={EXTERNAL_LINKS.tenBestInCity}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  10BestInCity.com
                </a>
              </li>
              <li>
                <a
                  href={EXTERNAL_LINKS.guideByLocal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  GuideByLocal.com
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <Phone size={16} className="mt-0.5 text-primary flex-shrink-0" />
                <div className="space-y-1">
                  <a
                    href={`tel:${CONTACT_INFO.phones.primary}`}
                    className="text-muted-foreground hover:text-primary transition-colors block"
                  >
                    {CONTACT_INFO.phones.primary}
                  </a>
                  <a
                    href={`tel:${CONTACT_INFO.phones.secondary}`}
                    className="text-muted-foreground hover:text-primary transition-colors block"
                  >
                    {CONTACT_INFO.phones.secondary}
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Mail size={16} className="mt-0.5 text-primary flex-shrink-0" />
                <div className="space-y-1">
                  <a
                    href={`mailto:${CONTACT_INFO.emails.primary}`}
                    className="text-muted-foreground hover:text-primary transition-colors block break-all"
                  >
                    {CONTACT_INFO.emails.primary}
                  </a>
                  <a
                    href={`mailto:${CONTACT_INFO.emails.secondary}`}
                    className="text-muted-foreground hover:text-primary transition-colors block break-all"
                  >
                    {CONTACT_INFO.emails.secondary}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Person */}
          <div>
            <h4 className="font-semibold mb-4">Contact Person</h4>
            <div className="text-sm space-y-1">
              <p className="font-medium">{CONTACT_INFO.contact.name}</p>
              <p className="text-muted-foreground">{CONTACT_INFO.contact.title}</p>
              <p className="text-muted-foreground">{CONTACT_INFO.contact.organization}</p>
              <div className="pt-2 space-y-1 text-xs text-muted-foreground">
                <p>{SOCIAL_LABELS.linktree} • {SOCIAL_LABELS.vcard}</p>
                <p>{SOCIAL_LABELS.linkedin} • {SOCIAL_LABELS.instagram} • {SOCIAL_LABELS.youtube}</p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Source Reference */}
        <div className="text-center text-xs text-muted-foreground mb-4">
          <p>
            Source:{' '}
            <a
              href={EXTERNAL_LINKS.blogspotSource}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors underline"
            >
              Asiatic International Corp Blog
            </a>
            {' • '}
            <a
              href={EXTERNAL_LINKS.guideByLocalPost}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors underline"
            >
              GuideByLocal Post
            </a>
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} BestInternationalEducation.com. All rights reserved.
          </p>
          <p className="mt-2">
            Built with <span className="text-red-500">♥</span> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors font-medium"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
