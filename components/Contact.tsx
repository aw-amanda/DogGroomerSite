'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-linear-to-t from-[rgb(13,51,2)] to-[rgb(153,194,153)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black text-shadow-[0_0_3px_rgb(0,0,0,0.5)]">Contact Us</h2>
          <div className="w-20 h-1 bg-[rgb(18,65,20)] mx-auto mt-4"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-black">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-[rgb(113,150,99)] rounded-md shadow-[0_0_3px_rgb(0,0,0,0.5)] focus:outline-none focus:ring-[rgb(26,84,28)] focus:border-[rgb(26,84,28)]"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-black">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-[rgb(113,150,99)] rounded-md shadow-[0_0_3px_rgb(0,0,0,0.5)] focus:outline-none focus:ring-[rgb(26,84,28)] focus:border-[rgb(26,84,28)]"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-black">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-[rgb(113,150,99)] rounded-md shadow-[0_0_3px_rgb(0,0,0,0.5)] focus:outline-none focus:ring-[rgb(26,84,28)] focus:border-[rgb(26,84,28)]"
              />
            </div>
            
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-[rgb(148,204,150)] hover:bg-[rgb(219,247,220)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[rgb(26,84,28)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
            
            {submitStatus === 'success' && (
              <div className="p-4 bg-green-100 text-green-700 rounded-md">
                Thank you! Your message has been sent successfully.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="p-4 bg-red-100 text-red-700 rounded-md">
                Something went wrong. Please try again later.
              </div>
            )}
          </form>
          
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold text-white text-shadow-[0_2px_4px_rgb(0,0,0,0.5)] mb-4">Visit Us</h3>
            <p className="text-white">123 Pet Street, Dogville, DV 12345</p>
            <p className="text-white mt-2">Phone: (123) 456-7890</p>
            <p className="text-white mt-2">Email: info@pawsandclaws.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}