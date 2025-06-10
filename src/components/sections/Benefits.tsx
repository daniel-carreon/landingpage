'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  UserGroupIcon, 
  ChatBubbleLeftRightIcon, 
  Cog8ToothIcon,
  TrophyIcon,
  ClockIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  BoltIcon
} from '@heroicons/react/24/outline';

// Main services data (80/20 principle)
const mainServices = [
  {
    icon: UserGroupIcon,
    title: 'Lead Generation Agents',
    description: 'Agentes IA que identifican, califican y nutren prospectos automáticamente',
    benefits: [
      '+400% más leads calificados',
      'Prospección 24/7 sin descanso',
      'Personalización a escala',
      'Integración con CRM existente'
    ],
    roi: '400%',
    color: 'from-gold-400 to-gold-600'
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'Customer Support IA',
    description: 'Asistentes conversacionales que resuelven el 80% de consultas instantáneamente',
    benefits: [
      'Respuesta instantánea 24/7',
      '90% de resolución automática',
      'Escalamiento inteligente',
      'Análisis de sentimientos'
    ],
    roi: '300%',
    color: 'from-gold-500 to-gold-700'
  },
  {
    icon: Cog8ToothIcon,
    title: 'N8N Automations',
    description: 'Workflows inteligentes que conectan todas tus herramientas y procesos',
    benefits: [
      'Procesos completamente automatizados',
      'Integración con +500 apps',
      'Reducción 80% tiempo manual',
      'Monitoreo y alertas inteligentes'
    ],
    roi: '250%',
    color: 'from-gold-600 to-gold-800'
  }
];

// Additional benefits data
const additionalBenefits = [
  {
    icon: TrophyIcon,
    title: 'Resultados Garantizados',
    description: 'ROI medible en los primeros 30 días o devolvemos tu inversión',
  },
  {
    icon: ClockIcon,
    title: 'Implementación Rápida',
    description: 'Sistema funcionando en 7 días o menos, sin interrumpir operaciones',
  },
  {
    icon: CurrencyDollarIcon,
    title: 'Inversión Recuperable',
    description: 'La mayoría de clientes recuperan su inversión en menos de 60 días',
  },
  {
    icon: ChartBarIcon,
    title: 'Escalabilidad Infinita',
    description: 'Crece sin límites de personal, costos fijos o restricciones geográficas',
  },
];

export function Benefits() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="benefits"
      className="py-24 bg-gradient-to-b from-dark-900 to-dark-950"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-20"
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-sm font-medium">
              <BoltIcon className="w-4 h-4 mr-2" />
              Beneficios Comprobados
            </div>
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-white">
              Los <span className="text-gold-gradient">3 Pilares</span> que Transforman Negocios
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Nos enfocamos en las 3 automatizaciones que generan el{' '}
              <span className="text-gold-400 font-semibold">80% de los resultados</span>{' '}
              en menos tiempo y con mayor ROI garantizado
            </p>
          </motion.div>

          {/* Main services grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                <div className="card-premium h-full space-y-6 relative overflow-hidden">
                  {/* ROI Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-gold-gradient text-dark-950 text-xs font-bold px-3 py-1 rounded-full">
                      +{service.roi} ROI
                    </div>
                  </div>

                  {/* Icon with gradient background */}
                  <div className="relative">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-display font-bold text-white group-hover:text-gold-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Benefits list */}
                  <div className="space-y-3">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hover effect gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats section */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-dark-800/50 border border-gold-500/20 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-display font-bold text-white mb-8">
                Resultados que <span className="text-gold-gradient">Hablan por Sí Solos</span>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-gold-400">500+</div>
                  <div className="text-sm text-gray-300">Empresas Transformadas</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-gold-400">$50M+</div>
                  <div className="text-sm text-gray-300">ROI Generado</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-gold-400">24/7</div>
                  <div className="text-sm text-gray-300">Automatización</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-gold-400">99%</div>
                  <div className="text-sm text-gray-300">Satisfacción Cliente</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Additional benefits */}
          <motion.div variants={itemVariants} className="space-y-12">
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                Garantías que <span className="text-gold-gradient">Respaldan</span> tu Inversión
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center space-y-4 p-6 rounded-xl bg-dark-800/30 border border-gold-500/10 hover:border-gold-500/30 transition-colors"
                >
                  <div className="w-12 h-12 bg-gold-500/10 rounded-xl flex items-center justify-center mx-auto">
                    <benefit.icon className="w-6 h-6 text-gold-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-white">
                    {benefit.title}
                  </h4>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <h3 className="text-3xl font-display font-bold text-white">
                ¿Listo para <span className="text-gold-gradient">Multiplicar</span> tus Resultados?
              </h3>
              <p className="text-lg text-gray-300">
                Únete a las 500+ empresas que ya están automatizando sus procesos más críticos 
                y generando resultados 24/7 con nuestros sistemas de IA
              </p>
              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary text-lg px-12 py-5 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Programa tu Consulta Estratégica Gratis
                <BoltIcon className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform inline" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 