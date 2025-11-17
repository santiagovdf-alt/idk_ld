import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { Checkbox } from './ui/checkbox';
import { Send } from 'lucide-react';
import { mockData } from '../mock';
import { toast } from 'sonner';
import { supabase } from '../supabaseClient';

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    serviceTypes: [],
    projectType: '',
    spaceSize: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleServiceToggle = (service) => {
    setFormData(prev => ({
      ...prev,
      serviceTypes: prev.serviceTypes.includes(service)
        ? prev.serviceTypes.filter(s => s !== service)
        : [...prev.serviceTypes, service]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Format services_interested field with safe default
      const servicesInterested = formData.serviceTypes.length > 0
        ? formData.serviceTypes.join(', ')
        : 'Not specified';

      // Convert space_size to integer with safe default
      const spaceSizeNum = formData.spaceSize
        ? parseInt(formData.spaceSize.replace(/\D/g, '')) || 0
        : 0;

      // Format for Supabase - use safe defaults for optional fields
      const submitData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || 'Not provided',
        city: formData.city || 'Not provided',
        project_type: formData.projectType || 'Not specified',
        services_interested: servicesInterested,
        space_size: spaceSizeNum,
        budget: formData.budget || 'Not specified',
        timeline: formData.timeline || 'Not specified',
        message: formData.message || ''
      };

      const { data, error } = await supabase
        .from('leads')
        .insert([submitData])
        .select();

      if (error) {
        throw error;
      }

      // Track conversion in Google Analytics
      if (window.gtag_report_conversion_consultation) {
        window.gtag_report_conversion_consultation();
      }

      toast.success("Request Submitted!", {
        description: "We'll contact you within 24 hours to discuss your project.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        city: '',
        serviceTypes: [],
        projectType: '',
        spaceSize: '',
        budget: '',
        timeline: '',
        message: ''
      });
    } catch (error) {
      console.error('Lead submission error:', error);
      toast.error("Submission Failed", {
        description: "Please try again or contact us directly via WhatsApp.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#D3D6D9]/20" id="contact-form">
      <div className="max-w-4xl mx-auto px-6">
        <Card className="border-0 shadow-2xl bg-white">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-bold text-[#1F2B35] mb-2">
              Start Your Project Today
            </CardTitle>
            <CardDescription className="text-lg text-[#2E404F]">
              Tell us about your vision — we'll reply within 24 hours with a personalized proposal and next steps.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1 */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-[#1F2B35] font-medium">Full Name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className="border-[#D3D6D9] focus:border-[#2E404F]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#1F2B35] font-medium">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className="border-[#D3D6D9] focus:border-[#2E404F]"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-[#1F2B35] font-medium">Phone Number (optional)</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    className="border-[#D3D6D9] focus:border-[#2E404F]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city" className="text-[#1F2B35] font-medium">City / Location (optional)</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => handleChange('city', e.target.value)}
                    className="border-[#D3D6D9] focus:border-[#2E404F]"
                  />
                </div>
              </div>

              {/* Service Types - Checkboxes */}
              <div className="space-y-3">
                <Label className="text-[#1F2B35] font-medium">Interested In (optional)</Label>
                <div className="space-y-3">
                  {mockData.formFields.serviceTypes.map((service) => (
                    <div key={service} className="flex items-center space-x-2">
                      <Checkbox
                        id={service}
                        checked={formData.serviceTypes.includes(service)}
                        onCheckedChange={() => handleServiceToggle(service)}
                      />
                      <Label
                        htmlFor={service}
                        className="text-sm font-normal text-[#1F2B35] cursor-pointer"
                      >
                        {service}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="projectType" className="text-[#1F2B35] font-medium">Project Type (optional)</Label>
                  <Select value={formData.projectType} onValueChange={(value) => handleChange('projectType', value)}>
                    <SelectTrigger className="border-[#D3D6D9] focus:border-[#2E404F]">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      {mockData.formFields.projectTypes.map((type) => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="spaceSize" className="text-[#1F2B35] font-medium">Space Size (optional)</Label>
                  <Select value={formData.spaceSize} onValueChange={(value) => handleChange('spaceSize', value)}>
                    <SelectTrigger className="border-[#D3D6D9] focus:border-[#2E404F]">
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      {mockData.formFields.spaceSizes.map((size) => (
                        <SelectItem key={size} value={size}>{size}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Row 4 */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="budget" className="text-[#1F2B35] font-medium">Budget (optional)</Label>
                  <Select value={formData.budget} onValueChange={(value) => handleChange('budget', value)}>
                    <SelectTrigger className="border-[#D3D6D9] focus:border-[#2E404F]">
                      <SelectValue placeholder="Select budget" />
                    </SelectTrigger>
                    <SelectContent>
                      {mockData.formFields.budgetRanges.map((range) => (
                        <SelectItem key={range} value={range}>{range}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timeline" className="text-[#1F2B35] font-medium">Timeline (optional)</Label>
                  <Select value={formData.timeline} onValueChange={(value) => handleChange('timeline', value)}>
                    <SelectTrigger className="border-[#D3D6D9] focus:border-[#2E404F]">
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      {mockData.formFields.timelines.map((time) => (
                        <SelectItem key={time} value={time}>{time}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-[#1F2B35] font-medium">Message (optional)</Label>
                <Textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  placeholder="Tell us more about your project..."
                  className="border-[#D3D6D9] focus:border-[#2E404F] resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#2E404F] to-[#1F2B35] hover:from-[#1F2B35] hover:to-[#2E404F] text-white font-semibold py-6 text-lg rounded-lg transition-all duration-300 hover:shadow-xl"
              >
                {loading ? 'Submitting...' : 'Request a Consultation'}
                <Send className="ml-2 h-5 w-5" />
              </Button>
              
              <div className="text-center space-y-2 mt-4">
                <p className="text-sm text-[#2E404F]">
                  We'll get back to you within 24 hours.
                </p>
                <p className="text-xs text-[#2E404F]/70">
                  Your data is 100% secure and only used to prepare your proposal.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LeadForm;
