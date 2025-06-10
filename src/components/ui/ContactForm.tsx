'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircleIcon, ExclamationCircleIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  revenue: string;
  service: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const serviceOptions = [
  { value: 'lead-generation', label: 'Lead Generation Agents (+400% ROI)' },
  { value: 'customer-support', label: 'Customer Support IA (+300% ROI)' },
  { value: 'n8n-automation', label: 'N8N Automations (+250% ROI)' },
  { value: 'custom-solution', label: 'Solución Personalizada' },
];

const revenueOptions = [
  { value: '0-100k', label: '$0 - $100K USD/año' },
  { value: '100k-500k', label: '$100K - $500K USD/año' },
  { value: '500k-1m', label: '$500K - $1M USD/año' },
  { value: '1m+', label: '$1M+ USD/año' },
];

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    revenue: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Validation function
  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es requerido';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'La empresa es requerida';
    }

    if (!formData.revenue) {
      newErrors.revenue = 'Selecciona los ingresos anuales';
    }

    if (!formData.service) {
      newErrors.service = 'Selecciona un servicio';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would normally send the data to your backend
      console.log('Form submitted:', formData);
      
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          revenue: '',
          service: '',
          message: '',
        });
      }, 3000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Success message component
  const SuccessMessage = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-8"
    >
      <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
      <h3 className="text-2xl font-bold text-white mb-2">¡Mensaje Enviado!</h3>
      <p className="text-gray-300">
        Te contactaremos en las próximas 24 horas para tu consulta estratégica gratuita.
      </p>
    </motion.div>
  );

  return (
    <div className="max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <SuccessMessage />
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-dark-800/50 border ${
                    errors.name ? 'border-red-500' : 'border-gray-600'
                  } rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gold-500 transition-colors`}
                  placeholder="Tu nombre completo"
                />
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1 flex items-center gap-1"
                  >
                    <ExclamationCircleIcon className="w-4 h-4" />
                    {errors.name}
                  </motion.p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Corporativo *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-dark-800/50 border ${
                    errors.email ? 'border-red-500' : 'border-gray-600'
                  } rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gold-500 transition-colors`}
                  placeholder="tu@empresa.com"
                />
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1 flex items-center gap-1"
                  >
                    <ExclamationCircleIcon className="w-4 h-4" />
                    {errors.email}
                  </motion.p>
                )}
              </div>
            </div>

            {/* Company Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Teléfono/WhatsApp *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full bg-dark-800/50 border ${
                    errors.phone ? 'border-red-500' : 'border-gray-600'
                  } rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gold-500 transition-colors`}
                  placeholder="+52 55 1234 5678"
                />
                {errors.phone && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1 flex items-center gap-1"
                  >
                    <ExclamationCircleIcon className="w-4 h-4" />
                    {errors.phone}
                  </motion.p>
                )}
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Empresa *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={`w-full bg-dark-800/50 border ${
                    errors.company ? 'border-red-500' : 'border-gray-600'
                  } rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gold-500 transition-colors`}
                  placeholder="Nombre de tu empresa"
                />
                {errors.company && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1 flex items-center gap-1"
                  >
                    <ExclamationCircleIcon className="w-4 h-4" />
                    {errors.company}
                  </motion.p>
                )}
              </div>
            </div>

            {/* Business Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="revenue" className="block text-sm font-medium text-gray-300 mb-2">
                  Ingresos Anuales *
                </label>
                <select
                  id="revenue"
                  name="revenue"
                  value={formData.revenue}
                  onChange={handleChange}
                  className={`w-full bg-dark-800/50 border ${
                    errors.revenue ? 'border-red-500' : 'border-gray-600'
                  } rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors`}
                >
                  <option value="">Selecciona un rango</option>
                  {revenueOptions.map(option => (
                    <option key={option.value} value={option.value} className="bg-dark-800">
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.revenue && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1 flex items-center gap-1"
                  >
                    <ExclamationCircleIcon className="w-4 h-4" />
                    {errors.revenue}
                  </motion.p>
                )}
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                  Servicio de Interés *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`w-full bg-dark-800/50 border ${
                    errors.service ? 'border-red-500' : 'border-gray-600'
                  } rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors`}
                >
                  <option value="">Selecciona un servicio</option>
                  {serviceOptions.map(option => (
                    <option key={option.value} value={option.value} className="bg-dark-800">
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1 flex items-center gap-1"
                  >
                    <ExclamationCircleIcon className="w-4 h-4" />
                    {errors.service}
                  </motion.p>
                )}
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Cuéntanos tu Desafío (Opcional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-dark-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gold-500 transition-colors resize-none"
                placeholder="Describe brevemente el principal desafío que quieres resolver con IA..."
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full btn-primary py-4 text-lg font-semibold flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <PaperAirplaneIcon className="w-6 h-6" />
                  Obtener Consulta Estratégica GRATIS
                </>
              )}
            </motion.button>

            {/* Trust indicators */}
            <div className="text-center text-sm text-gray-400 space-y-1">
              <p>✅ Respuesta garantizada en 24 horas</p>
              <p>✅ Consulta estratégia 100% gratuita</p>
              <p>✅ Sin spam, solo valor real</p>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
} 