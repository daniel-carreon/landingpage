'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { EnvelopeIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/outline';
import { ContactForm } from '@/components/ui/ContactForm';

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-24 bg-dark-950 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Automatiza tu Negocio en{' '}
            <span className="text-gold-gradient">7 Días</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Completa el formulario y obtén una consulta estratégica gratuita para transformar 
            tu empresa con inteligencia artificial. Sin compromiso, solo resultados.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Contact Form - Main area */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass p-8 rounded-2xl"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Solicita tu Consulta Estratégica
                </h3>
                <p className="text-gray-400">
                  Completa los datos y te contactaremos en menos de 24 horas
                </p>
              </div>
              
              <ContactForm />
            </motion.div>
          </div>

          {/* Contact Information - Sidebar */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass p-6 rounded-2xl"
            >
              <h3 className="text-xl font-bold text-white mb-6">
                Contacto Directo
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gold-gradient rounded-lg flex items-center justify-center">
                    <EnvelopeIcon className="w-5 h-5 text-dark-950" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white">contacto@aiagency.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gold-gradient rounded-lg flex items-center justify-center">
                    <PhoneIcon className="w-5 h-5 text-dark-950" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">WhatsApp</p>
                    <p className="text-white">+52 55 1234 5678</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gold-gradient rounded-lg flex items-center justify-center">
                    <ClockIcon className="w-5 h-5 text-dark-950" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Horario</p>
                    <p className="text-white">Lun-Vie 9:00-18:00 (GMT-6)</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="glass p-6 rounded-2xl"
            >
              <h4 className="text-lg font-semibold text-white mb-4">
                Garantías
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gold-500 rounded-full" />
                  <span className="text-gray-300">Respuesta en 24hrs garantizada</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gold-500 rounded-full" />
                  <span className="text-gray-300">Consulta 100% gratuita</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gold-500 rounded-full" />
                  <span className="text-gray-300">Sin compromiso de compra</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gold-500 rounded-full" />
                  <span className="text-gray-300">ROI garantizado o reembolso</span>
                </div>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="glass p-6 rounded-2xl text-center"
            >
              <div className="space-y-4">
                <div>
                  <div className="text-3xl font-bold text-gold-500">500+</div>
                  <div className="text-gray-400 text-sm">Empresas transformadas</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gold-500">$50M+</div>
                  <div className="text-gray-400 text-sm">ROI generado</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gold-500">99%</div>
                  <div className="text-gray-400 text-sm">Satisfacción</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 