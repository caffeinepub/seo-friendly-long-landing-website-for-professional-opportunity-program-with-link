import { StickyHeader } from '../components/StickyHeader';
import { Footer } from '../components/Footer';
import { ApplicationForm } from '../components/ApplicationForm';
import { LANDING_COPY } from '../content/landingCopy';
import { EXTERNAL_LINKS } from '../content/contactAndLinks';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import {
  GraduationCap,
  Globe,
  Users,
  TrendingUp,
  CheckCircle2,
  Briefcase,
  Home,
  Award,
  Target,
  Sparkles
} from 'lucide-react';

export function LandingPage() {
  const scrollToApply = () => {
    const element = document.getElementById('apply');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen">
      <StickyHeader />

      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="text-sm">
                <Sparkles className="mr-1 h-3 w-3" />
                Now Accepting Applications
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {LANDING_COPY.hero.title}
              </h1>
              <p className="text-xl text-muted-foreground">
                {LANDING_COPY.hero.subtitle}
              </p>
              <p className="text-lg">
                {LANDING_COPY.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" onClick={scrollToApply} className="text-lg px-8">
                  Apply Now
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href={EXTERNAL_LINKS.bestInternationalEducation} target="_blank" rel="noopener noreferrer">
                    Visit Platform
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/assets/generated/opportunity-hero-poster.dim_1600x900.png"
                alt="Professional opportunity for career counselors and tutors"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="about" className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
        {/* Decorative warm texture background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img
            src="/assets/generated/warm-texture-1.dim_1600x900.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">{LANDING_COPY.overview.title}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {LANDING_COPY.overview.description}
            </p>
          </div>

          {/* Who We Seek */}
          <div className="mt-16 max-w-5xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
              {LANDING_COPY.whoWeSeek.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {LANDING_COPY.whoWeSeek.roles.map((role, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                  <CardContent className="p-6 flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="font-medium">{role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Platform */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-4 mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold">{LANDING_COPY.aboutPlatform.title}</h2>
                  <p className="text-lg text-muted-foreground">{LANDING_COPY.aboutPlatform.description}</p>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {LANDING_COPY.aboutPlatform.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-accent/30">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-lg">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src="/assets/generated/education-icons-tile.dim_1200x1200.png"
                  alt="Education platform features including graduation cap, globe, communication, and checklist icons"
                  className="rounded-lg shadow-lg w-full max-w-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full overflow-hidden">
        <img
          src="/assets/generated/section-divider-1.dim_1600x400.png"
          alt=""
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Scope of Opportunity */}
      <section id="opportunity" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {LANDING_COPY.scopeOfOpportunity.title}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {LANDING_COPY.scopeOfOpportunity.sections.map((section, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    {index === 0 && <Award className="h-6 w-6 text-primary" />}
                    {index === 1 && <TrendingUp className="h-6 w-6 text-primary" />}
                    {index === 2 && <Users className="h-6 w-6 text-primary" />}
                  </div>
                  <CardTitle className="text-xl">{section.title}</CardTitle>
                  <CardDescription>{section.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    {section.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start space-x-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {section.note && (
                    <p className="text-sm text-muted-foreground italic mt-4 pt-4 border-t">
                      {section.note}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Promotional Posters */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-16">
            <img
              src="/assets/generated/promo-poster-1.dim_1080x1080.png"
              alt="Career counselors, tutors, and work-from-home educators"
              className="rounded-lg shadow-lg w-full"
            />
            <img
              src="/assets/generated/promo-poster-2.dim_1080x1080.png"
              alt="Verified profile, promotion support, and student inquiries"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* Ideal Candidate */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <Target className="h-10 w-10 text-primary mr-4" />
              <h2 className="text-3xl md:text-4xl font-bold">{LANDING_COPY.idealCandidate.title}</h2>
            </div>
            <p className="text-lg text-center text-muted-foreground mb-8">
              {LANDING_COPY.idealCandidate.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {LANDING_COPY.idealCandidate.criteria.map((criterion, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-card border">
                  <GraduationCap className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p>{criterion}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Work From Home Women */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <Home className="h-10 w-10 text-primary mr-4" />
                  <h2 className="text-3xl md:text-4xl font-bold">
                    {LANDING_COPY.workFromHome.title}
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground mb-8">
                  {LANDING_COPY.workFromHome.description}
                </p>
                <div className="grid grid-cols-1 gap-4 mb-6">
                  {LANDING_COPY.workFromHome.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-background border-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <p>{benefit}</p>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground italic">{LANDING_COPY.workFromHome.note}</p>
              </div>
              <div className="flex justify-center">
                <img
                  src="/assets/generated/work-from-home-illustration.dim_1400x900.png"
                  alt="Illustration of a person working from home at a desk with laptop"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              {LANDING_COPY.benefits.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {LANDING_COPY.benefits.list.map((benefit, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <p className="font-medium">{benefit}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <Globe className="h-10 w-10 text-primary mr-4" />
              <h2 className="text-3xl md:text-4xl font-bold">{LANDING_COPY.vision.title}</h2>
            </div>
            <p className="text-lg text-center text-muted-foreground mb-8">
              {LANDING_COPY.vision.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {LANDING_COPY.vision.goals.map((goal, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-background border">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p>{goal}</p>
                </div>
              ))}
            </div>
            <p className="text-lg text-center leading-relaxed">{LANDING_COPY.vision.closing}</p>
          </div>
        </div>
      </section>

      {/* Fees */}
      <section id="fees" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-2 border-primary/20 shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl md:text-4xl">{LANDING_COPY.fees.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <div className="py-8">
                  <p className="text-5xl md:text-6xl font-bold text-primary">
                    {LANDING_COPY.fees.amount}
                  </p>
                </div>
                <p className="text-xl text-muted-foreground">{LANDING_COPY.fees.description}</p>
                <img
                  src="/assets/generated/apply-banner.dim_1600x600.png"
                  alt="Apply today - INR 9999 per year"
                  className="rounded-lg shadow-lg w-full mt-6"
                />
                <Button size="lg" onClick={scrollToApply} className="text-lg px-12">
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">{LANDING_COPY.apply.title}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {LANDING_COPY.apply.description}
            </p>
          </div>
          <ApplicationForm />
        </div>
      </section>

      {/* FAQ */}
      <section id="contact" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Who can apply for this opportunity?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We welcome career counselors, tutors, study abroad advisors, academic tutors, language trainers,
                  certified education consultants, and educated women seeking work-from-home opportunities. All
                  applicants should have relevant qualifications and experience in education or counseling.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  What is included in the annual fee?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  The annual fee of INR 9,999 includes a dedicated professional profile page, digital promotion
                  support across multiple platforms, student inquiry facilitation, and access to our structured
                  education network.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  How will I receive student inquiries?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Students will be able to contact you directly through your professional profile page via the
                  integrated inquiry form, WhatsApp, and your official email address. You will receive inquiries
                  from students in your city seeking your specific services.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  What platforms will promote my profile?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Your profile will be promoted across BestInternationalEducation.com, Portrait-Business-Woman.com,
                  10BestInCity.com, and GuideByLocal.com, giving you maximum visibility across our education-focused
                  network.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Can I work from home?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes! This opportunity is designed to support flexible, work-from-home arrangements. You can manage
                  your services and student interactions remotely while building your professional presence online.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
