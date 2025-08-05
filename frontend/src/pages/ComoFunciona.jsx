import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  Search, 
  Eye, 
  Phone, 
  UserPlus,
  Shield,
  Star,
  CheckCircle,
  Users,
  ShoppingCart,
  AlertTriangle,
  HelpCircle,
  TrendingUp,
  Award
} from 'lucide-react';

const ComoFunciona = () => {
  const pasos = [
    {
      numero: "01",
      icono: <Search className="h-16 w-16 text-white" />,
      titulo: "Busca el Vendedor",
      descripcion: "Ingresa el nombre, número de teléfono o red social del vendedor que quieres verificar.",
      detalles: [
        "Busca por nombre completo o apodo",
        "Ingresa el número de WhatsApp o teléfono",
        "Busca por usuario de Instagram o Facebook",
        "Filtra por categoría de producto"
      ]
    },
    {
      numero: "02", 
      icono: <Eye className="h-16 w-16 text-white" />,
      titulo: "Revisa su Perfil",
      descripcion: "Consulta su reputación, opiniones de clientes, redes sociales y productos ofrecidos.",
      detalles: [
        "Ve su calificación promedio y total de reseñas",
        "Lee comentarios reales de otros compradores",
        "Verifica sus redes sociales oficiales",
        "Conoce su experiencia y tiempo en el mercado"
      ]
    },
    {
      numero: "03",
      icono: <Phone className="h-16 w-16 text-white" />,
      titulo: "Decide si Contactar",
      descripcion: "Con toda la información disponible, toma una decisión informada sobre tu compra.",
      detalles: [
        "Evalúa si el vendedor es confiable",
        "Contacta directamente por sus redes verificadas",
        "Realiza tu compra con mayor seguridad",
        "Deja tu reseña después de la compra"
      ]
    },
    {
      numero: "04",
      icono: <UserPlus className="h-16 w-16 text-white" />,
      titulo: "¿Eres Vendedor? ¡Regístrate!",
      descripcion: "Crea tu perfil gratis y gana la confianza de miles de compradores potenciales.",
      detalles: [
        "Registro 100% gratuito y fácil",
        "Verificación de identidad para mayor confianza",
        "Gestiona tu reputación online",
        "Aumenta tus ventas con credibilidad"
      ]
    }
  ];

  const beneficios = [
    {
      icono: <Shield className="h-12 w-12 text-blue-600" />,
      titulo: "Para Compradores",
      descripcion: "Compra con mayor seguridad verificando la reputación de vendedores.",
      puntos: [
        "Evita estafas y vendedores poco confiables",
        "Lee reseñas reales de otros compradores",
        "Verifica información antes de transferir dinero",
        "Encuentra vendedores de calidad en tu zona"
      ]
    },
    {
      icono: <TrendingUp className="h-12 w-12 text-green-600" />,
      titulo: "Para Vendedores",
      descripcion: "Construye confianza y aumenta tus ventas con un perfil verificado.",
      puntos: [
        "Genera confianza con compradores nuevos",
        "Construye tu reputación online",
        "Aumenta tus ventas hasta 40%",
        "Diferénciate de la competencia"
      ]
    }
  ];

  const faqs = [
    {
      pregunta: "¿Es realmente gratuito crear un perfil?",
      respuesta: "Sí, es 100% gratuito. No cobramos por crear tu perfil, mantenerlo activo o por las reseñas que recibas. Nuestro modelo se basa en generar confianza en el ecosistema de comercio peruano."
    },
    {
      pregunta: "¿Cómo verifican la identidad de los vendedores?",
      respuesta: "Utilizamos un proceso de verificación que incluye validación de documentos de identidad, verificación de redes sociales y confirmación de datos de contacto. Los perfiles verificados tienen una insignia especial."
    },
    {
      pregunta: "¿Qué pasa si encuentro información falsa sobre mí?",
      respuesta: "Tenemos un sistema para reportar información incorrecta. Los vendedores pueden solicitar correcciones o eliminar reseñas falsas a través de nuestro sistema de soporte con evidencia."
    },
    {
      pregunta: "¿Pueden los compradores dejar reseñas falsas?",
      respuesta: "Tenemos filtros automáticos y revisión manual para detectar reseñas falsas. Solo permitimos reseñas de compradores verificados y revisamos patrones sospechosos."
    },
    {
      pregunta: "¿Confía.pe maneja pagos o transacciones?",
      respuesta: "No, somos una plataforma de verificación y reputación. Las transacciones se realizan directamente entre comprador y vendedor. Nosotros solo proporcionamos información para tomar mejores decisiones."
    },
    {
      pregunta: "¿Cómo puedo mejorar mi calificación como vendedor?",
      respuesta: "Mantén una excelente atención al cliente, cumple con los tiempos de entrega, responde rápido a las consultas y solicita a tus clientes satisfechos que dejen reseñas honestas."
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-purple-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ¿Cómo Funciona Confía.pe?
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Descubre cómo nuestra plataforma está revolucionando el comercio online en Perú, 
              conectando compradores y vendedores con total confianza.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proceso Simple en 4 Pasos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tanto si eres comprador como vendedor, nuestro proceso es intuitivo y fácil de usar.
            </p>
          </div>

          <div className="space-y-16">
            {pasos.map((paso, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                <div className="flex-1">
                  <Card className="p-8 hover:shadow-xl transition-all duration-300 border-none bg-gradient-to-br from-gray-50 to-white">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                        <span className="text-2xl font-bold text-white">{paso.numero}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {paso.titulo}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                      {paso.descripcion}
                    </p>

                    <ul className="space-y-3">
                      {paso.detalles.map((detalle, i) => (
                        <li key={i} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700">{detalle}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>

                <div className="flex-shrink-0">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-2xl">
                    {paso.icono}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Beneficios para Todos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Confía.pe beneficia tanto a compradores como vendedores, creando un ecosistema de confianza mutua.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {beneficios.map((beneficio, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 border-none bg-white">
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-gray-50 rounded-full mr-4">
                    {beneficio.icono}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {beneficio.titulo}
                  </h3>
                </div>
                
                <p className="text-gray-600 text-lg mb-6">
                  {beneficio.descripcion}
                </p>

                <ul className="space-y-3">
                  {beneficio.puntos.map((punto, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{punto}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Resolvemos las dudas más comunes sobre Confía.pe y su funcionamiento.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                      <div className="flex items-center space-x-3">
                        <HelpCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                        <span className="font-semibold text-gray-900">{faq.pregunta}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed pl-8">
                        {faq.respuesta}
                      </p>
                    </AccordionContent>
                  </Card>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Confía.pe en Números
            </h2>
            <p className="text-lg text-blue-100">
              Nuestra comunidad crece cada día más fuerte
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">2,547</div>
              <div className="text-blue-100">Vendedores Registrados</div>
            </div>

            <div className="text-center">
              <div className="bg-white/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Star className="h-10 w-10 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">8,934</div>
              <div className="text-blue-100">Reseñas Publicadas</div>
            </div>

            <div className="text-center">
              <div className="bg-white/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="h-10 w-10 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">15,678</div>
              <div className="text-blue-100">Compras Verificadas</div>
            </div>

            <div className="text-center">
              <div className="bg-white/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">25</div>
              <div className="text-blue-100">Ciudades Activas</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              ¿Listo para Empezar?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Únete a miles de peruanos que ya están comprando y vendiendo con total confianza.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4 font-semibold transition-all duration-300 hover:scale-105"
              >
                <Link to="/crear-perfil">
                  <UserPlus className="mr-2 h-5 w-5" />
                  Crear Mi Perfil
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-4 font-semibold transition-all duration-300 hover:scale-105"
              >
                <Link to="/buscar-vendedores">
                  <Search className="mr-2 h-5 w-5" />
                  Buscar Vendedores
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ComoFunciona;