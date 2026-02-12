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

export function buildMailtoLink(formData: FormData, recipientEmail: string): string {
  const subject = encodeURIComponent('Application for Professional Opportunity - Career Counselor/Tutor');
  
  const body = `
Full Name: ${formData.fullName}
Date of Birth: ${formData.dateOfBirth || 'N/A'}
City: ${formData.city}
Gender: ${formData.gender || 'N/A'}
Age: ${formData.age || 'N/A'}
University/Institution: ${formData.university || 'N/A'}
Email: ${formData.email}
WhatsApp: ${formData.whatsapp}
LinkedIn Profile: ${formData.linkedin || 'N/A'}
Education: ${formData.education || 'N/A'}

---
I am interested in joining the BestInternationalEducation.com platform as an education professional.
  `.trim();

  return `mailto:${recipientEmail}?subject=${subject}&body=${encodeURIComponent(body)}`;
}

export function buildWhatsAppLink(formData: FormData, phoneNumber: string): string {
  const cleanPhone = phoneNumber.replace(/[^\d+]/g, '');
  
  const message = `
*Application for Professional Opportunity*

*Full Name:* ${formData.fullName}
*Date of Birth:* ${formData.dateOfBirth || 'N/A'}
*City:* ${formData.city}
*Gender:* ${formData.gender || 'N/A'}
*Age:* ${formData.age || 'N/A'}
*University/Institution:* ${formData.university || 'N/A'}
*Email:* ${formData.email}
*WhatsApp:* ${formData.whatsapp}
*LinkedIn Profile:* ${formData.linkedin || 'N/A'}
*Education:* ${formData.education || 'N/A'}

I am interested in joining the BestInternationalEducation.com platform as an education professional.
  `.trim();

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}
