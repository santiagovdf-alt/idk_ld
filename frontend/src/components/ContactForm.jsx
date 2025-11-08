import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { mockData } from '../mock';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    projectType: '',
    spaceSize: '',
    budget: '',
    timeline: '',
    details: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with mock data:', formData);
    // Mock submission - in real app this will send to backend
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        city: '',
        projectType: '',
        spaceSize: '',
        budget: '',
        timeline: '',
        details: ''
      });
    }, 3000);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-[#F5F5F5]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-12 text-center">
            <CheckCircle className="mx-auto mb-6 text-green-600" size={64} />
            <h3 className="text-3xl font-bold text-[#1F2B35] mb-4 font-montserrat">
              Thank You!
            </h3>
            <p className="text-lg text-[#2E404F] mb-2">
              We've received your request for a free 3D room design.
            </p>
            <p className="text-[#2E404F]">
              We'll review your project personally and get back to you within 2 hours.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-[#F5F5F5]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1F2B35] mb-4 font-montserrat">
            Request Your Free Room Design
          </h2>
          <p className="text-lg text-[#2E404F]">
            Tell us about your project and receive a personalized 3D concept
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-xl p-8 space-y-6">
          {/* Name & Email */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-[#1F2B35] font-semibold">Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Your full name"
                required
                className="border-[#CACACA] focus:border-[#2E404F] focus:ring-[#2E404F]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#1F2B35] font-semibold">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="your@email.com"
                required
                className="border-[#CACACA] focus:border-[#2E404F] focus:ring-[#2E404F]"
              />
            </div>
          </div>

          {/* Phone & City */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-[#1F2B35] font-semibold">Phone *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="+44 xxx xxx xxxx"
                required
                className="border-[#CACACA] focus:border-[#2E404F] focus:ring-[#2E404F]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="city" className="text-[#1F2B35] font-semibold">City *</Label>
              <Input
                id="city"
                value={formData.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
                placeholder="Your city"
                required
                className="border-[#CACACA] focus:border-[#2E404F] focus:ring-[#2E404F]"
              />
            </div>
          </div>

          {/* Project Type & Space Size */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="projectType" className="text-[#1F2B35] font-semibold">Project Type *</Label>
              <Select value={formData.projectType} onValueChange={(value) => handleInputChange('projectType', value)} required>
                <SelectTrigger className="border-[#CACACA] focus:border-[#2E404F] focus:ring-[#2E404F]">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  {mockData.projectTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="spaceSize" className="text-[#1F2B35] font-semibold">Space Size (m²) *</Label>
              <Input
                id="spaceSize"
                type="number"
                value={formData.spaceSize}
                onChange={(e) => handleInputChange('spaceSize', e.target.value)}
                placeholder="e.g., 50"
                required
                className="border-[#CACACA] focus:border-[#2E404F] focus:ring-[#2E404F]"
              />
            </div>
          </div>

          {/* Budget & Timeline */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="budget" className="text-[#1F2B35] font-semibold">Budget *</Label>
              <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)} required>
                <SelectTrigger className="border-[#CACACA] focus:border-[#2E404F] focus:ring-[#2E404F]">
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  {mockData.budgetRanges.map((budget) => (
                    <SelectItem key={budget.value} value={budget.value}>
                      {budget.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="timeline" className="text-[#1F2B35] font-semibold">Timeline *</Label>
              <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)} required>
                <SelectTrigger className="border-[#CACACA] focus:border-[#2E404F] focus:ring-[#2E404F]">
                  <SelectValue placeholder="Select timeline" />
                </SelectTrigger>
                <SelectContent>
                  {mockData.timelines.map((timeline) => (
                    <SelectItem key={timeline.value} value={timeline.value}>
                      {timeline.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Additional Details */}
          <div className="space-y-2">
            <Label htmlFor="details" className="text-[#1F2B35] font-semibold">Additional Details</Label>
            <Textarea
              id="details"
              value={formData.details}
              onChange={(e) => handleInputChange('details', e.target.value)}
              placeholder="Tell us more about your project, vision, and specific requirements..."
              rows={4}
              className="border-[#CACACA] focus:border-[#2E404F] focus:ring-[#2E404F]"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-[#2E404F] hover:bg-[#2E404F]/90 text-white font-semibold py-6 text-lg rounded-md transition-all hover:scale-105 hover:shadow-xl group"
          >
            Request Your Free 3D Room Design
            <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Button>

          {/* Privacy Notice */}
          <p className="text-sm text-[#2E404F] text-center">
            We'll review your project personally and get back to you within 2 hours.<br />
            By submitting, you agree to our Privacy Policy and consent to contact regarding your inquiry.
          </p>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
