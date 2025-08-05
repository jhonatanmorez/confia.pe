import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  Shield, 
  ShoppingCart, 
  Users, 
  Search, 
  Eye, 
  Phone, 
  UserPlus,
  Star,
  CheckCircle,
  TrendingUp
} from 'lucide-react';

const Home = () => {
  const valuePropositions = [
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: "Verifica Vendedores Reales",
      description: "Revisa la reputación y credibilidad de vendedores antes de realizar tu compra."
    },
    {
      icon: <ShoppingCart className="h-12 w-12 text-blue-600" />,
      title: "Compra con Mayor Seguridad",
      description: "Realiza tus compras online con mayor confianza y respaldo de la comunidad."
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: "Regístrate Gratis como Emprendedor",
      description: "Crea tu perfil gratuito y construye confianza con tus clientes potenciales."
    }
  ];

  const steps = [
    {
      number: "01",
      icon: <Search className="h-8 w-8 text-white" />,
      title: "Busca el Vendedor",
      description: "Ingresa el nombre, número de teléfono o red social del vendedor que quieres verificar."
    },
    {
      number: "02", 
      icon: <Eye className="h-8 w-8 text-white" />,
      title: "Revisa su Perfil",
      description: "Consulta su reputación, opiniones de clientes, redes sociales y productos ofrecidos."
    },
    {
      number: "03",
      icon: <Phone className="h-8 w-8 text-white" />,
      title: "Decide si Contactar",
      description: "Con toda la información disponible, toma una decisión informada sobre tu compra."
    },
    {
      number: "04",
      icon: <UserPlus className="h-8 w-8 text-white" />,
      title: "¿Eres Vendedor? ¡Regístrate!",
      description: "Crea tu perfil gratis y gana la confianza de miles de compradores potenciales."
    }
  ];

  const testimonials = [
    {
      name: "María González",
      location: "Lima, Perú",
      text: "Antes de conocer Confía.pe, tenía miedo de comprar por redes sociales. Ahora puedo verificar la reputación de los vendedores y compro con total confianza.",
      rating: 5
    },
    {
      name: "Carlos Mendoza",
      location: "Arequipa, Perú", 
      text: "Como emprendedor, Confía.pe me ha ayudado a generar más confianza con mis clientes. Mis ventas han aumentado desde que tengo mi perfil verificado.",
      rating: 5
    },
    {
      name: "Ana Rodríguez",
      location: "Cusco, Perú",
      text: "Excelente plataforma. Me salvó de una posible estafa. Pude verificar que el vendedor tenía muy malas referencias antes de transferir el dinero.",
      rating: 5
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1688561807971-728cd39eb71c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwzfHxkaWdpdGFsJTIwY29tbWVyY2V8ZW58MHx8fHwxNzU0NDIxMDYwfDA&ixlib=rb-4.1.0&q=85')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80"></div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              ¿Compraste por redes y no sabes si{' '}
              <span className="text-blue-300">confiar?</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-blue-100">
              Confía.pe te respalda.
            </p>
            <p className="text-lg md:text-xl text-blue-200 max-w-2xl mx-auto">
              Descubre si un vendedor es confiable o crea tu perfil gratuito para generar confianza con tus clientes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-4 font-semibold transition-all duration-300 hover:scale-105"
              >
                <Link to="/buscar-vendedores">
                  <Search className="mr-2 h-5 w-5" />
                  Buscar Vendedor
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8 py-4 font-semibold transition-all duration-300 hover:scale-105"
              >
                <Link to="/crear-perfil">
                  <UserPlus className="mr-2 h-5 w-5" />
                  Crea tu Perfil
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir Confía.pe?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              La plataforma que revoluciona el comercio online en Perú, generando confianza entre compradores y vendedores.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valuePropositions.map((item, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-none bg-white">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-blue-50 rounded-full">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Cómo funciona Confía.pe?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cuatro simples pasos para comprar y vender con total seguridad y confianza.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="p-6 text-center h-full hover:shadow-lg transition-all duration-300 border-none bg-gradient-to-br from-gray-50 to-white">
                  <div className="flex justify-center mb-4">
                    <div className="relative">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                        {step.icon}
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold text-blue-600">{step.number}</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </Card>
                
                {/* Connection Line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-200 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lo que dicen nuestros usuarios
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Miles de peruanos ya confían en nuestra plataforma para sus compras y ventas online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border-none bg-white">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¡Empieza gratis y genera confianza con tus clientes!
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
              Únete a la comunidad de emprendedores peruanos que ya están construyendo confianza online. 
              Es completamente gratuito y solo toma unos minutos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-4 font-semibold transition-all duration-300 hover:scale-105"
              >
                <Link to="/crear-perfil">
                  <UserPlus className="mr-2 h-5 w-5" />
                  Crear Perfil Gratis
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8 py-4 font-semibold transition-all duration-300 hover:scale-105"
              >
                <Link to="/como-funciona">
                  Conoce Más
                </Link>
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-8 mt-12 text-blue-200">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span className="text-sm">100% Gratuito</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5" />
                <span className="text-sm">Aumenta tus ventas</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span className="text-sm">Genera confianza</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;