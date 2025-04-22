import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { ContactFormData } from '../../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // Send to Supabase (once you've connected your Supabase instance)
      const { error } = await supabase.from('contacts').insert([formData]);

      if (error) throw new Error(error.message);

      setSubmitStatus({
        type: 'success',
        message: 'Your message has been sent successfully! I\'ll get back to you soon.'
      });

      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-dark-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-800 dark:text-white mb-4" data-aos="fade-up">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-secondary-500 mx-auto mb-6" data-aos="fade-up" data-aos-delay="100"></div>
          <p className="text-dark-600 dark:text-gray-300 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Let's connect! Feel free to reach out for opportunities, collaborations, or just to say hello.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div data-aos="fade-right">
            <h3 className="text-2xl font-heading font-semibold text-dark-700 dark:text-gray-200 mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <Mail className="w-5 h-5 text-primary-800 dark:text-secondary-500" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-dark-700 dark:text-gray-200 mb-1">Email</h4>
                  <a 
                    href="mailto:shibu.raj.singh@gmail.com" 
                    className="text-dark-600 dark:text-gray-300 hover:text-primary-800 dark:hover:text-secondary-400 transition-colors duration-300"
                  >
                    shibu.raj.singh@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <MapPin className="w-5 h-5 text-primary-800 dark:text-secondary-500" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-dark-700 dark:text-gray-200 mb-1">Location</h4>
                  <p className="text-dark-600 dark:text-gray-300">
                    India
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-2xl font-heading font-semibold text-dark-700 dark:text-gray-200 mb-6">
                Connect With Me
              </h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/shibu-raj-singh-77899b12a" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#0077B5] flex items-center justify-center text-white transition-transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.3c-1 0-1.7-.8-1.7-1.7s.8-1.7 1.7-1.7 1.7.8 1.7 1.7-.7 1.7-1.7 1.7zm13.5 12.3h-3v-5.6c0-3.4-4-3.1-4 0v5.6h-3v-11h3v1.7c1.4-2.6 7-2.8 7 2.5v6.8z" />
                  </svg>
                </a>
                <a 
                  href="https://github.com/shiburajsingh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#333] flex items-center justify-center text-white transition-transform hover:scale-110"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.6 0-12 5.4-12 12 0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2 0-.4-.5-1.6.2-3.2 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.8-1.6 8.2-6.1 8.2-11.4 0-6.6-5.4-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div data-aos="fade-left">
            <div className="bg-white dark:bg-dark-700 shadow-soft dark:shadow-none rounded-xl p-8">
              <h3 className="text-2xl font-heading font-semibold text-dark-700 dark:text-gray-200 mb-6">
                Send Me a Message
              </h3>
              
              {submitStatus.type && (
                <div className={`mb-6 p-4 rounded-lg ${
                  submitStatus.type === 'success' 
                    ? 'bg-success-100 text-success-700'
                    : 'bg-error-100 text-error-700'
                }`}>
                  {submitStatus.message}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label 
                    htmlFor="name" 
                    className="block text-dark-700 dark:text-gray-200 mb-2 font-medium"
                  >
                    Name
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-dark-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-dark-600 text-dark-800 dark:text-white"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="mb-6">
                  <label 
                    htmlFor="email" 
                    className="block text-dark-700 dark:text-gray-200 mb-2 font-medium"
                  >
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-dark-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-dark-600 text-dark-800 dark:text-white"
                    placeholder="Your email"
                  />
                </div>
                
                <div className="mb-6">
                  <label 
                    htmlFor="message" 
                    className="block text-dark-700 dark:text-gray-200 mb-2 font-medium"
                  >
                    Message
                  </label>
                  <textarea 
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-dark-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-dark-600 text-dark-800 dark:text-white resize-none"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-primary-800 hover:bg-primary-700 text-white rounded-lg shadow-md transition-all duration-300 flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} /> Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;