import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card } from '../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  ShoppingBag,
  Instagram,
  Facebook,
  MessageSquare,
  Shield,
  CheckCircle,
  AlertCircle,
  Info
} from 'lucide-react';
import { mockCategorias } from '../mock';

const CrearPerfil = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    negocio: '',
    categoria: '',
    descripcion: '',
    ubicacion: '',
    instagram: '',
    facebook: '',
    whatsapp: '',
    productos: '',
    experiencia: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(1);
  const totalSteps = 3;

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
      console.log('Datos del perfil:', formData);
      alert('¡Perfil creado exitosamente! Te contactaremos pronto para la verificación.');
      setIsSubmitting(false);
    }, 2000);
  };

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const isStepValid = (stepNumber) => {
    switch (stepNumber) {
      case 1:
        return formData.nombre && formData.email && formData.telefono;
      case 2:
        return formData.negocio && formData.categoria && formData.descripcion;
      case 3:
        return formData.ubicacion;
      default:
        return false;
    }
  };

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-green-50 to-emerald-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Crear Tu Perfil de Vendedor
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Regístrate gratis y comienza a generar confianza con tus clientes. 
              Solo toma unos minutos completar tu perfil.
            </p>
            
            {/* Progress Indicator */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center space-x-4">
                {[1, 2, 3].map((stepNum) => (
                  <div key={stepNum} className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm
                      ${step >= stepNum 
                        ? 'bg-green-600 text-white' 
                        : 'bg-gray-200 text-gray-500'
                      }`}
                    >
                      {step > stepNum ? <CheckCircle className="h-5 w-5" /> : stepNum}
                    </div>
                    {stepNum < 3 && (
                      <div className={`w-8 h-0.5 mx-2 ${
                        step > stepNum ? 'bg-green-600' : 'bg-gray-200'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto p-8 shadow-lg border-none">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Step 1: Información Personal */}
              {step === 1 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <User className="h-16 w-16 text-green-600 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Información Personal
                    </h2>
                    <p className="text-gray-600">
                      Cuéntanos sobre ti para que los clientes puedan conocerte mejor.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 flex items-center">
                        <User className="h-4 w-4 mr-2" />
                        Nombre Completo *
                      </label>
                      <Input
                        type="text"
                        placeholder="Ej: María González"
                        value={formData.nombre}
                        onChange={(e) => handleInputChange('nombre', e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 flex items-center">
                        <Mail className="h-4 w-4 mr-2" />
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

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 flex items-center">
                        <Phone className="h-4 w-4 mr-2" />
                        Teléfono *
                      </label>
                      <Input
                        type="tel"
                        placeholder="+51 987 654 321"
                        value={formData.telefono}
                        onChange={(e) => handleInputChange('telefono', e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        Ciudad
                      </label>
                      <Input
                        type="text"
                        placeholder="Ej: Lima, Arequipa, Cusco"
                        value={formData.ubicacion}
                        onChange={(e) => handleInputChange('ubicacion', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button 
                      type="button"
                      onClick={nextStep}
                      disabled={!isStepValid(1)}
                      className="bg-green-600 hover:bg-green-700 px-8"
                    >
                      Siguiente
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 2: Información del Negocio */}
              {step === 2 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <ShoppingBag className="h-16 w-16 text-green-600 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Tu Negocio
                    </h2>
                    <p className="text-gray-600">
                      Describe tu negocio para que los clientes sepan qué ofreces.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                          Nombre del Negocio *
                        </label>
                        <Input
                          type="text"
                          placeholder="Ej: Ropa Femenina Premium"
                          value={formData.negocio}
                          onChange={(e) => handleInputChange('negocio', e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                          Categoría *
                        </label>
                        <Select value={formData.categoria} onValueChange={(value) => handleInputChange('categoria', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccionar categoría" />
                          </SelectTrigger>
                          <SelectContent>
                            {mockCategorias.map((categoria) => (
                              <SelectItem key={categoria} value={categoria}>
                                {categoria}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Descripción del Negocio *
                      </label>
                      <Textarea
                        placeholder="Describe tu negocio, experiencia y qué te hace diferente..."
                        value={formData.descripcion}
                        onChange={(e) => handleInputChange('descripcion', e.target.value)}
                        rows={4}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Productos Principales
                      </label>
                      <Textarea
                        placeholder="Lista los productos que vendes (separados por comas)"
                        value={formData.productos}
                        onChange={(e) => handleInputChange('productos', e.target.value)}
                        rows={2}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Años de Experiencia
                      </label>
                      <Select value={formData.experiencia} onValueChange={(value) => handleInputChange('experiencia', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccionar experiencia" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="menos-1">Menos de 1 año</SelectItem>
                          <SelectItem value="1-2">1-2 años</SelectItem>
                          <SelectItem value="2-5">2-5 años</SelectItem>
                          <SelectItem value="5-mas">Más de 5 años</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Button type="button" onClick={prevStep} variant="outline">
                      Anterior
                    </Button>
                    <Button 
                      type="button"
                      onClick={nextStep}
                      disabled={!isStepValid(2)}
                      className="bg-green-600 hover:bg-green-700 px-8"
                    >
                      Siguiente
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 3: Redes Sociales y Confirmación */}
              {step === 3 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <Shield className="h-16 w-16 text-green-600 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Redes Sociales y Confirmación
                    </h2>
                    <p className="text-gray-600">
                      Conecta tus redes sociales para generar mayor confianza.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 flex items-center">
                          <Instagram className="h-4 w-4 mr-2 text-pink-500" />
                          Instagram (opcional)
                        </label>
                        <Input
                          type="text"
                          placeholder="@tuinstagram"
                          value={formData.instagram}
                          onChange={(e) => handleInputChange('instagram', e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 flex items-center">
                          <Facebook className="h-4 w-4 mr-2 text-blue-600" />
                          Facebook (opcional)
                        </label>
                        <Input
                          type="text"
                          placeholder="Link de tu página de Facebook"
                          value={formData.facebook}
                          onChange={(e) => handleInputChange('facebook', e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 flex items-center">
                          <MessageSquare className="h-4 w-4 mr-2 text-green-500" />
                          WhatsApp (opcional)
                        </label>
                        <Input
                          type="text"
                          placeholder="+51 987 654 321"
                          value={formData.whatsapp}
                          onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                        />
                      </div>
                    </div>

                    {/* Information Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card className="p-4 border-blue-200 bg-blue-50">
                        <div className="flex items-start space-x-3">
                          <Info className="h-5 w-5 text-blue-600 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-blue-900 text-sm">
                              Verificación
                            </h4>
                            <p className="text-blue-700 text-xs">
                              Te contactaremos para verificar tu identidad y negocio.
                            </p>
                          </div>
                        </div>
                      </Card>

                      <Card className="p-4 border-green-200 bg-green-50">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-green-900 text-sm">
                              100% Gratuito
                            </h4>
                            <p className="text-green-700 text-xs">
                              Crear tu perfil es completamente gratis, sin costos ocultos.
                            </p>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Button type="button" onClick={prevStep} variant="outline">
                      Anterior
                    </Button>
                    <Button 
                      type="submit"
                      disabled={isSubmitting || !isStepValid(3)}
                      className="bg-green-600 hover:bg-green-700 px-8"
                    >
                      {isSubmitting ? 'Creando Perfil...' : 'Crear Perfil'}
                    </Button>
                  </div>
                </div>
              )}

            </form>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            ¿Por qué crear tu perfil en Confía.pe?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 text-center border-none bg-white hover:shadow-lg transition-shadow">
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">
                Genera Confianza
              </h3>
              <p className="text-sm text-gray-600">
                Los clientes podrán verificar tu reputación antes de comprar.
              </p>
            </Card>

            <Card className="p-6 text-center border-none bg-white hover:shadow-lg transition-shadow">
              <ShoppingBag className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">
                Aumenta Ventas
              </h3>
              <p className="text-sm text-gray-600">
                Mayor confianza se traduce en más ventas y clientes recurrentes.
              </p>
            </Card>

            <Card className="p-6 text-center border-none bg-white hover:shadow-lg transition-shadow">
              <CheckCircle className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">
                Es Gratuito
              </h3>
              <p className="text-sm text-gray-600">
                Sin costos, sin comisiones, sin letra pequeña. 100% gratuito.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CrearPerfil;