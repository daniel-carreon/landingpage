import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { Process } from '@/components/sections/Process';
import { Benefits } from '@/components/sections/Benefits';
import { Contact } from '@/components/sections/Contact';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { FloatingParticles } from '@/components/ui/FloatingParticles';
import { ChatBot } from '@/components/ui/ChatBot';

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-950 custom-scrollbar relative">
      {/* Premium UI Components */}
      <ScrollIndicator />
      <CustomCursor />
      <FloatingParticles count={15} />
      
      {/* AI Chatbot Assistant */}
      <ChatBot />
      
      {/* Header with navigation */}
      <Header />
      
      {/* Hero section */}
      <Hero />
      
      {/* Process section with video */}
      <Process />
      
      {/* Benefits section */}
      <Benefits />
      
      {/* Contact form section */}
      <Contact />
      
      {/* Footer */}
      <footer className="bg-dark-950 border-t border-gold-500/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-display font-bold text-gold-gradient">
              AI<span className="text-white">Agency</span>
            </h3>
            <p className="text-gray-400">
              Automatización IA que transforma negocios · Resultados garantizados en 30 días
            </p>
            <div className="flex justify-center items-center space-x-8 text-sm text-gray-500">
              <span>© 2024 AI Agency. Todos los derechos reservados.</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
