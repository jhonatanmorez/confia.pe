import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card } from '../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  Search, 
  Filter, 
  Star, 
  Shield, 
  MapPin, 
  Phone, 
  Instagram, 
  Facebook,
  MessageSquare,
  ShoppingBag,
  Calendar,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';
import { mockVendedores, mockCategorias } from '../mock';

const BuscarVendedores = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setIsSearching(true);
    setHasSearched(true);
    
    // Simulate API call delay
    setTimeout(() => {
      let filteredResults = mockVendedores;
      
      if (searchTerm) {
        filteredResults = filteredResults.filter(vendedor =>
          vendedor.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
          vendedor.telefono.includes(searchTerm) ||
          vendedor.negocio.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
      
      if (selectedCategory) {
        filteredResults = filteredResults.filter(vendedor =>
          vendedor.negocio.toLowerCase().includes(selectedCategory.toLowerCase())
        );
      }
      
      setResults(filteredResults);
      setIsSearching(false);
    }, 1000);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('es-PE', {
      year: 'numeric',
      month: 'long'
    });
  };

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Buscar Vendedores Confiables
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Verifica la reputación de cualquier vendedor antes de realizar tu compra. 
              Busca por nombre, teléfono o tipo de negocio.
            </p>
          </div>
        </div>
      </section>

      {/* Search Form */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto p-8 shadow-lg border-none">
            <form onSubmit={handleSearch} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Buscar por nombre, teléfono o negocio
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="Ej: María González, +51987654321, Ropa Femenina..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Categoría (opcional)
                  </label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <Filter className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Seleccionar categoría" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">Todas las categorías</SelectItem>
                      {mockCategorias.map((categoria) => (
                        <SelectItem key={categoria} value={categoria}>
                          {categoria}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="text-center">
                <Button 
                  type="submit" 
                  size="lg"
                  disabled={isSearching}
                  className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  {isSearching ? (
                    <>Buscando...</>
                  ) : (
                    <>
                      <Search className="mr-2 h-5 w-5" />
                      Buscar Vendedor
                    </>
                  )}
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* Search Results */}
      {hasSearched && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Resultados de búsqueda
              </h2>
              <p className="text-gray-600">
                {results.length === 0 
                  ? "No se encontraron vendedores con esos criterios" 
                  : `${results.length} vendedor${results.length !== 1 ? 'es' : ''} encontrado${results.length !== 1 ? 's' : ''}`
                }
              </p>
            </div>

            {results.length > 0 && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {results.map((vendedor) => (
                  <Card key={vendedor.id} className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border-none bg-white">
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="text-xl font-bold text-gray-900">
                              {vendedor.nombre}
                            </h3>
                            {vendedor.verificado && (
                              <CheckCircle className="h-5 w-5 text-green-500" />
                            )}
                          </div>
                          <p className="text-blue-600 font-semibold">
                            {vendedor.negocio}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-1 mb-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="font-bold text-gray-900">
                              {vendedor.calificacion}
                            </span>
                          </div>
                          <p className="text-xs text-gray-500">
                            {vendedor.totalReseñas} reseñas
                          </p>
                        </div>
                      </div>

                      {/* Status Badge */}
                      <div className="flex items-center space-x-2">
                        {vendedor.verificado ? (
                          <div className="flex items-center space-x-1 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                            <Shield className="h-3 w-3" />
                            <span>Verificado</span>
                          </div>
                        ) : (
                          <div className="flex items-center space-x-1 bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                            <AlertTriangle className="h-3 w-3" />
                            <span>Sin verificar</span>
                          </div>
                        )}
                        <div className="flex items-center space-x-1 text-gray-500 text-xs">
                          <MapPin className="h-3 w-3" />
                          <span>{vendedor.ubicacion}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {vendedor.descripcion}
                      </p>

                      {/* Products */}
                      <div>
                        <p className="text-sm font-medium text-gray-700 mb-2">Productos:</p>
                        <div className="flex flex-wrap gap-1">
                          {vendedor.productos.slice(0, 3).map((producto, index) => (
                            <span key={index} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">
                              {producto}
                            </span>
                          ))}
                          {vendedor.productos.length > 3 && (
                            <span className="text-xs text-gray-500">
                              +{vendedor.productos.length - 3} más
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Contact Info */}
                      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2 text-sm">
                            <Phone className="h-4 w-4 text-gray-400" />
                            <span className="text-gray-700">{vendedor.telefono}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm">
                            <Calendar className="h-4 w-4 text-gray-400" />
                            <span className="text-gray-700">
                              Desde {formatDate(vendedor.fechaRegistro)}
                            </span>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <p className="text-xs font-medium text-gray-700 mb-1">Redes sociales:</p>
                          <div className="flex space-x-2">
                            {vendedor.redesSociales.instagram && (
                              <Instagram className="h-4 w-4 text-pink-500" />
                            )}
                            {vendedor.redesSociales.facebook && (
                              <Facebook className="h-4 w-4 text-blue-600" />
                            )}
                            {vendedor.redesSociales.whatsapp && (
                              <MessageSquare className="h-4 w-4 text-green-500" />
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Latest Review */}
                      {vendedor.reseñas && vendedor.reseñas.length > 0 && (
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <p className="text-xs font-medium text-gray-700 mb-1">Reseña reciente:</p>
                          <p className="text-xs text-gray-600 italic">
                            "{vendedor.reseñas[0].comentario}"
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            - {vendedor.reseñas[0].cliente}
                          </p>
                        </div>
                      )}

                      {/* Action Button */}
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 transition-colors">
                        Ver Perfil Completo
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            )}

            {results.length === 0 && hasSearched && !isSearching && (
              <Card className="p-12 text-center border-none bg-white">
                <ShoppingBag className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  No se encontraron vendedores
                </h3>
                <p className="text-gray-500 mb-6">
                  Prueba con diferentes términos de búsqueda o revisa la ortografía.
                </p>
                <Button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('');
                    setResults([]);
                    setHasSearched(false);
                  }}
                  variant="outline"
                >
                  Limpiar búsqueda
                </Button>
              </Card>
            )}
          </div>
        </section>
      )}

      <Footer />
    </>
  );
};

export default BuscarVendedores;