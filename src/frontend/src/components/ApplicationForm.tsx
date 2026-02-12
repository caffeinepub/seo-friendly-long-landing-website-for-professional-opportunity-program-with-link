import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { CONTACT_INFO } from '../content/contactAndLinks';
import { buildMailtoLink, buildWhatsAppLink } from '../utils/buildDraftLinks';
import { toast } from 'sonner';
import { Mail, MessageCircle, Phone } from 'lucide-react';

interface FormData {
  fullName: string;
  dateOfBirth: string;
  city: string;
  gender: string;
  age: string;
  university: string;
  email: string;
  whatsapp: string;
  linkedin: string;
  education: string;
}

export function ApplicationForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    dateOfBirth: '',
    city: '',
    gender: '',
    age: '',
    university: '',
    email: '',
    whatsapp: '',
    linkedin: '',
    education: ''
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = 'WhatsApp number is required';
    } else if (!/^\+?[\d\s-]+$/.test(formData.whatsapp)) {
      newErrors.whatsapp = 'Invalid phone number format';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmitEmail = () => {
    if (!validate()) {
      toast.error('Please fill in all required fields correctly');
      return;
    }

    const mailtoUrl = buildMailtoLink(formData, CONTACT_INFO.emails.primary);
    window.open(mailtoUrl, '_blank');
    toast.success('Email draft opened! Please review and send.');
  };

  const handleSubmitWhatsApp = () => {
    if (!validate()) {
      toast.error('Please fill in all required fields correctly');
      return;
    }

    const whatsappUrl = buildWhatsAppLink(formData, CONTACT_INFO.phones.primary);
    window.open(whatsappUrl, '_blank');
    toast.success('WhatsApp opened! Please review and send.');
  };

  return (
    <Card className="max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Application Form</CardTitle>
        <CardDescription>
          Fill in your details below to apply for this opportunity. You can submit via email or WhatsApp.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">
                Full Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className={errors.fullName ? 'border-destructive' : ''}
              />
              {errors.fullName && <p className="text-xs text-destructive">{errors.fullName}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="dateOfBirth">Date of Birth</Label>
              <Input
                id="dateOfBirth"
                name="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="city">
                City <span className="text-destructive">*</span>
              </Label>
              <Input
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter your city"
                className={errors.city ? 'border-destructive' : ''}
              />
              {errors.city && <p className="text-xs text-destructive">{errors.city}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="gender">Gender</Label>
              <Input
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                placeholder="Enter your gender"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                name="age"
                type="number"
                value={formData.age}
                onChange={handleChange}
                placeholder="Enter your age"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="university">University/Institution</Label>
              <Input
                id="university"
                name="university"
                value={formData.university}
                onChange={handleChange}
                placeholder="Enter your institution"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">
                Email <span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className={errors.email ? 'border-destructive' : ''}
              />
              {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="whatsapp">
                WhatsApp Number <span className="text-destructive">*</span>
              </Label>
              <Input
                id="whatsapp"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                placeholder="+91XXXXXXXXXX"
                className={errors.whatsapp ? 'border-destructive' : ''}
              />
              {errors.whatsapp && <p className="text-xs text-destructive">{errors.whatsapp}</p>}
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="linkedin">LinkedIn Profile</Label>
              <Input
                id="linkedin"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                placeholder="https://linkedin.com/in/yourprofile"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="education">Education</Label>
              <Input
                id="education"
                name="education"
                value={formData.education}
                onChange={handleChange}
                placeholder="Your highest qualification"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button type="button" onClick={handleSubmitEmail} className="flex-1" size="lg">
              <Mail className="mr-2 h-4 w-4" />
              Submit via Email
            </Button>
            <Button type="button" onClick={handleSubmitWhatsApp} variant="secondary" className="flex-1" size="lg">
              <MessageCircle className="mr-2 h-4 w-4" />
              Submit via WhatsApp
            </Button>
          </div>

          <div className="bg-muted/50 p-4 rounded-lg mt-6">
            <p className="text-sm text-muted-foreground text-center">
              <Phone className="inline h-4 w-4 mr-1" />
              You can also apply by calling us directly at{' '}
              <a href={`tel:${CONTACT_INFO.phones.primary}`} className="font-medium text-primary hover:underline">
                {CONTACT_INFO.phones.primary}
              </a>
              {' or '}
              <a href={`tel:${CONTACT_INFO.phones.secondary}`} className="font-medium text-primary hover:underline">
                {CONTACT_INFO.phones.secondary}
              </a>
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
