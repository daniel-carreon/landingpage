# 🤖 Chatbot Widget - Guía de Configuración

## ✅ Estado Actual
- ✅ Chatbot completamente implementado
- ✅ UI/UX integrada con el diseño de tu landing page
- ✅ Animaciones profesionales con Framer Motion
- ✅ Responsive design (móvil/desktop)
- ✅ Configuración centralizada
- ✅ Compilación exitosa ✓

## 🔧 Configuración del Webhook N8N

### Archivo Principal de Configuración:
**📍 Ubicación exacta: `src/lib/chatbot-config.ts` - Línea 36**

```typescript
webhook: {
  // CAMBIA ESTA URL POR TU WEBHOOK DE N8N
  url: 'https://your-n8n-instance.com/webhook/chatbot-test',
  timeout: 30000,
  retries: 3
}
```

### Pasos para Conectar:
1. **Copia tu URL de N8N webhook**
2. **Ve al archivo:** `src/lib/chatbot-config.ts`
3. **Línea 36:** Reemplaza la URL mock
4. **Guarda y el chatbot ya estará conectado**

## 📡 Formato de Datos

### Payload que envía el chatbot a N8N:
```json
{
  "message": "Mensaje del usuario",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "sessionId": "session_1234567890",
  "metadata": {
    "source": "landing-page-chatbot",
    "userAgent": "Mozilla/5.0...",
    "page": "homepage"
  }
}
```

### Respuesta esperada de N8N (cualquiera funciona):
```json
// Opción 1:
{ "response": "Respuesta del asistente IA" }

// Opción 2:
{ "message": "Respuesta del asistente IA" }

// Opción 3:
"Respuesta directa como string"

// Opción 4:
{ "data": { "response": "Respuesta del asistente IA" } }
```

## 🎨 Características Implementadas

### ✅ UI/UX Premium
- Burbuja flotante con animación de pulse
- Ventana de chat con glass morphism
- Colores coherentes con tu paleta gold/dark
- Indicador de "escribiendo..." animado
- Estados de mensaje (enviando, enviado, error)
- Timestamps en formato español

### ✅ Funcionalidades
- Scroll automático a últimos mensajes
- Envío con Enter
- Retry automático (3 intentos)
- Timeout de 30 segundos
- Manejo de errores elegante
- Navegación por teclado (accesible)

### ✅ Responsive
- Desktop: Ventana 384px × 500px
- Mobile: Se adapta automáticamente
- Posición fija bottom-right

## 🚀 Cómo Probar

1. **Ejecuta el servidor:**
   ```bash
   npm run dev
   ```

2. **Ve a http://localhost:3000**

3. **Busca la burbuja dorada en bottom-right**

4. **Haz clic y prueba el chat:**
   - Sin webhook: Mensajes de error elegantes
   - Con webhook: Respuestas reales de tu N8N

## 🔧 Personalización Adicional

### Cambiar Posición:
```typescript
// En chatbot-config.ts
ui: {
  position: 'bottom-left', // bottom-right, top-right, top-left
}
```

### Personalizar Textos:
```typescript
// En chatbot-config.ts
branding: {
  name: 'Tu Asistente IA',
  description: 'Disponible 24/7 para ayudarte'
},
ui: {
  welcomeMessage: 'Tu mensaje personalizado',
  placeholderText: 'Escribe aquí...'
}
```

### Límite de Mensajes:
```typescript
ui: {
  maxMessages: 50 // Máximo historial
}
```

## 🎯 Próximos Pasos (Opcional)

### 🔊 Soporte de Audio
Para activar en el futuro:
```typescript
features: {
  enableAudio: true // Cambiar a true cuando esté listo
}
```

### 📁 Subida de Archivos
```typescript
features: {
  enableFileUpload: true
}
```

## 🛠️ Arquitectura Técnica

### Archivos Principales:
- `src/components/ui/ChatBot.tsx` - Componente principal
- `src/components/ui/ChatMessage.tsx` - Componente de mensaje
- `src/components/ui/TypingIndicator.tsx` - Indicador de escritura
- `src/hooks/useChatBot.ts` - Hook con lógica
- `src/lib/chatbot-config.ts` - **Configuración (URL webhook)**

### Dependencias Utilizadas:
- ✅ Framer Motion (ya instalado)
- ✅ Heroicons (ya instalado)
- ✅ TailwindCSS (ya configurado)
- ✅ TypeScript (tipado completo)

## 🎉 ¡Tu Chatbot Está Listo!

Solo necesitas:
1. **Pegar tu URL de N8N en `chatbot-config.ts`**
2. **El chatbot ya funciona perfectamente**

### Estado del Proyecto:
- ✅ **Compilación exitosa**
- ✅ **UI completamente integrada**
- ✅ **Lista para producción**

---

*Desarrollado siguiendo mejores prácticas: SOLID, DRY, KISS - Código limpio y modular* 