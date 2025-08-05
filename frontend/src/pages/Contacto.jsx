import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card } from '../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  HelpCircle,
  Shield,
  User,
  CheckCircle,
  Facebook,
  Instagram,
  Twitter
} from 'lucide-react';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    tipo: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Mensaje enviado:', formData);
      alert('¡Mensaje enviado exitosamente! Te responderemos pronto.');
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        asunto: '',
        tipo: '',
        mensaje: ''
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const tiposConsulta = [
    'Consulta General',
    'Soporte Técnico',
    'Problema con Perfil',
    'Reporte de Usuario',
    'Sugerencia',
    'Colaboración Empresarial',
    'Prensa y Media'
  ];

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      titulo: 'Correo Electrónico',
      info: 'contacto@confia.pe',
      descripcion: 'Respuesta en menos de 24 horas'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      titulo: 'Teléfono',
      info: '+51 1 234-5678',
      descripcion: 'Lunes a Viernes, 9:00 - 18:00'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      titulo: 'Ubicación',
      info: 'Lima, Perú',
      descripcion: 'Zona horaria: GMT-5'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      titulo: 'Horarios',
      info: 'Lun - Vie: 9:00 - 18:00',
      descripcion: 'Sáb: 9:00 - 13:00'
    }
  ];

  const faqRapido = [
    {
      icon: <HelpCircle className="h-8 w-8 text-blue-600" />,
      pregunta: '¿Cómo verifico un vendedor?',
      respuesta: 'Ve a "Buscar Vendedores", ingresa su nombre o teléfono y revisa su perfil completo.'
    },
    {
      icon: <User className="h-8 w-8 text-green-600" />,
      pregunta: '¿Cómo creo mi perfil?',
      respuesta: 'Haz clic en "Crear Perfil", completa tus datos en 3 simples pasos y ¡listo!'
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-600" />,
      pregunta: '¿Es seguro usar Confía.pe?',
      respuesta: 'Sí, verificamos identidades y tenemos sistemas anti-fraude para tu seguridad.'
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-orange-50 to-red-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contáctanos
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              ¿Tienes alguna pregunta, sugerencia o necesitas ayuda? 
              Estamos aquí para apoyarte en todo lo que necesites.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow border-none bg-gradient-to-br from-gray-50 to-white">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-600">
                    {info.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {info.titulo}
                </h3>
                <p className="text-blue-600 font-medium mb-1">
                  {info.info}
                </p>
                <p className="text-sm text-gray-500">
                  {info.descripcion}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & FAQ */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div>
              <Card className="p-8 shadow-lg border-none bg-white">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                    <Send className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Envíanos un Mensaje
                  </h2>
                  <p className="text-gray-600">
                    Completa el formulario y te responderemos lo antes posible.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Nombre Completo *
                      </label>
                      <Input
                        type="text"
                        placeholder="Tu nombre completo"
                        value={formData.nombre}
                        onChange={(e) => handleInputChange('nombre', e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Teléfono (opcional)
                      </label>
                      <Input
                        type="tel"
                        placeholder="+51 987 654 321"
                        value={formData.telefono}
                        onChange={(e) => handleInputChange('telefono', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Correo Electrónico *
                    </label>
                    <Input
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Tipo de Consulta *
                      </label>
                      <Select value={formData.tipo} onValueChange={(value) => handleInputChange('tipo', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccionar tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          {tiposConsulta.map((tipo) => (
                            <SelectItem key={tipo} value={tipo}>
                              {tipo}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Asunto *
                      </label>
                      <Input
                        type="text"
                        placeholder="Resumen breve del tema"
                        value={formData.asunto}
                        onChange={(e) => handleInputChange('asunto', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Mensaje *
                    </label>
                    <Textarea
                      placeholder="Describe tu consulta, problema o sugerencia en detalle..."
                      value={formData.mensaje}
                      onChange={(e) => handleInputChange('mensaje', e.target.value)}
                      rows={5}
                      required
                    />
                  </div>

                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3 font-semibold transition-all duration-300 hover:scale-105"
                  >
                    {isSubmitting ? (
                      'Enviando...'
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Enviar Mensaje
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    Responderemos tu mensaje en menos de 24 horas.
                  </p>
                </form>
              </Card>
            </div>

            {/* FAQ Section */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Preguntas Frecuentes
                </h2>
                <p className="text-gray-600 mb-6">
                  Revisa estas respuestas rápidas antes de contactarnos.
                </p>
              </div>

              {faqRapido.map((faq, index) => (
                <Card key={index} className="p-6 border-none bg-white hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {faq.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {faq.pregunta}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {faq.respuesta}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}

              {/* Social Media */}
              <Card className="p-6 border-none bg-white">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Síguenos en Redes Sociales
                </h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                    <Facebook className="h-6 w-6 text-white" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                    <Instagram className="h-6 w-6 text-white" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                    <Twitter className="h-6 w-6 text-white" />
                  </a>
                </div>
                <p className="text-sm text-gray-500 mt-3">
                  Mantente actualizado con noticias y consejos sobre comercio seguro.
                </p>
              </Card>

              {/* Emergency Contact */}
              <Card className="p-6 border-red-200 bg-red-50">
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-red-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-red-900 mb-2">
                      ¿Víctima de Estafa?
                    </h3>
                    <p className="text-red-700 text-sm mb-3">
                      Si fuiste víctima de una estafa a través de un vendedor listado en nuestra plataforma, 
                      contáctanos inmediatamente para tomar las medidas correspondientes.
                    </p>
                    <Button 
                      size="sm" 
                      className="bg-red-600 hover:bg-red-700"
                    >
                      Reportar Estafa
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contacto;