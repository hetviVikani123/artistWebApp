import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, Edit2, Plus, LogOut, Eye, EyeOff, Image, Save, X, BarChart3, Package, DollarSign } from 'lucide-react';
import { usePaintings } from '../context/PaintingContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Painting } from '../types';

type FormMode = 'add' | 'edit' | 'none';

export default function AdminDashboard() {
  const { paintings, addPainting, updatePainting, deletePainting } = usePaintings();
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const [formMode, setFormMode] = useState<FormMode>('none');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string>('');

  const [formData, setFormData] = useState({
    title: '',
    medium: '',
    year: new Date().getFullYear(),
    dimensions: '',
    price: 0,
    description: '',
    images: [] as string[],
    status: 'available' as 'available' | 'sold' | 'hidden',
    published: true,
  });

  // Stats
  const totalPaintings = paintings.length;
  const publishedPaintings = paintings.filter(p => p.published).length;
  const soldPaintings = paintings.filter(p => p.status === 'sold').length;
  const totalValue = paintings.filter(p => p.status === 'available').reduce((sum, p) => sum + p.price, 0);

  const resetForm = () => {
    setFormData({
      title: '',
      medium: '',
      year: new Date().getFullYear(),
      dimensions: '',
      price: 0,
      description: '',
      images: [],
      status: 'available',
      published: true,
    });
    setEditingId(null);
    setImageUrl('');
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    
    setFormData(prev => ({
      ...prev,
      [name]: name === 'price' || name === 'year' ? parseFloat(value) || 0 : val,
    }));
  };

  const addImage = () => {
    if (imageUrl) {
      setFormData(prev => ({
        ...prev,
        images: [...prev.images, imageUrl],
      }));
      setImageUrl('');
    }
  };

  const removeImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title || !formData.images.length) {
      alert('Please fill in all required fields including at least one image');
      return;
    }

    if (formMode === 'edit' && editingId) {
      updatePainting(editingId, formData);
    } else {
      addPainting(formData);
    }

    resetForm();
    setFormMode('none');
  };

  const handleEdit = (painting: Painting) => {
    setFormData({
      title: painting.title,
      medium: painting.medium,
      year: painting.year,
      dimensions: painting.dimensions,
      price: painting.price,
      description: painting.description,
      images: painting.images,
      status: painting.status,
      published: painting.published,
    });
    setEditingId(painting.id);
    setFormMode('edit');
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Admin Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gradient">Admin Dashboard</h1>
              <p className="text-sm text-gray-600 mt-1">Welcome back, {user?.username}</p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full font-medium hover:shadow-lg transition-all hover:scale-105"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </div>
        </div>
      </motion.header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="card p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Artworks</p>
                <p className="text-3xl font-bold">{totalPaintings}</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Package className="w-6 h-6 text-white" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="card p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Published</p>
                <p className="text-3xl font-bold">{publishedPaintings}</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <Eye className="w-6 h-6 text-white" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="card p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Sold</p>
                <p className="text-3xl font-bold">{soldPaintings}</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="card p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Value</p>
                <p className="text-3xl font-bold">${totalValue.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Actions Bar */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center mb-8">
          <h2 className="text-2xl font-bold">Manage Artworks</h2>
          {formMode === 'none' && (
            <button
              onClick={() => setFormMode('add')}
              className="btn-primary flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              Add New Artwork
            </button>
          )}
        </div>

        {/* Form Modal */}
        <AnimatePresence>
          {formMode !== 'none' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => {
                setFormMode('none');
                resetForm();
              }}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="card p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold">
                    {formMode === 'edit' ? 'Edit Artwork' : 'Add New Artwork'}
                  </h3>
                  <button
                    onClick={() => {
                      setFormMode('none');
                      resetForm();
                    }}
                    className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Title *
                      </label>
                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleFormChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        placeholder="Celestial Dreams"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Medium *
                      </label>
                      <input
                        type="text"
                        name="medium"
                        value={formData.medium}
                        onChange={handleFormChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        placeholder="Oil on Canvas"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Year *
                      </label>
                      <input
                        type="number"
                        name="year"
                        value={formData.year}
                        onChange={handleFormChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Dimensions *
                      </label>
                      <input
                        type="text"
                        name="dimensions"
                        value={formData.dimensions}
                        onChange={handleFormChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        placeholder="100cm × 80cm"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Price ($) *
                      </label>
                      <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleFormChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Status
                      </label>
                      <select
                        name="status"
                        value={formData.status}
                        onChange={handleFormChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      >
                        <option value="available">Available</option>
                        <option value="sold">Sold</option>
                        <option value="hidden">Hidden</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Description *
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleFormChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                      placeholder="A mesmerizing abstract piece..."
                    />
                  </div>

                  {/* Images */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Images * (At least one required)
                    </label>
                    <div className="flex gap-2 mb-4">
                      <input
                        type="url"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        placeholder="https://example.com/image.jpg"
                        onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addImage())}
                      />
                      <button
                        type="button"
                        onClick={addImage}
                        className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium"
                      >
                        Add
                      </button>
                    </div>
                    {formData.images.length > 0 && (
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {formData.images.map((img, index) => (
                          <div key={index} className="relative group">
                            <img
                              src={img}
                              alt={`Preview ${index + 1}`}
                              className="w-full aspect-square object-cover rounded-xl"
                            />
                            <button
                              type="button"
                              onClick={() => removeImage(index)}
                              className="absolute top-2 right-2 w-8 h-8 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                            >
                              <X className="w-5 h-5" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="published"
                      name="published"
                      checked={formData.published}
                      onChange={(e) => setFormData(prev => ({ ...prev, published: e.target.checked }))}
                      className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                    />
                    <label htmlFor="published" className="text-sm font-semibold text-gray-700">
                      Publish to public gallery
                    </label>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button
                      type="submit"
                      className="flex-1 btn-primary flex items-center justify-center gap-2"
                    >
                      <Save className="w-5 h-5" />
                      {formMode === 'edit' ? 'Update' : 'Create'} Artwork
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setFormMode('none');
                        resetForm();
                      }}
                      className="px-8 py-4 bg-gray-200 text-gray-700 rounded-full font-medium hover:bg-gray-300 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Paintings List */}
        <div className="space-y-4">
          {paintings.length === 0 ? (
            <div className="card p-16 text-center">
              <Image className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-xl text-gray-400 mb-6">No artworks yet</p>
              <button
                onClick={() => setFormMode('add')}
                className="btn-primary inline-flex items-center gap-2"
              >
                <Plus className="w-5 h-5" />
                Add Your First Artwork
              </button>
            </div>
          ) : (
            paintings.map((painting, index) => (
              <motion.div
                key={painting.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="card p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <img
                    src={painting.images[0]}
                    alt={painting.title}
                    className="w-full md:w-32 h-32 object-cover rounded-xl"
                  />
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                      <div>
                        <h3 className="text-xl font-bold mb-1">{painting.title}</h3>
                        <p className="text-sm text-gray-600">
                          {painting.medium} • {painting.year} • {painting.dimensions}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          painting.status === 'sold' ? 'bg-red-100 text-red-700' :
                          painting.status === 'available' ? 'bg-green-100 text-green-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {painting.status.toUpperCase()}
                        </span>
                        {painting.published ? (
                          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            Public
                          </span>
                        ) : (
                          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-bold flex items-center gap-1">
                            <EyeOff className="w-3 h-3" />
                            Private
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 line-clamp-2">{painting.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold">${painting.price.toLocaleString()}</span>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(painting)}
                          className="px-4 py-2 bg-blue-100 text-blue-700 rounded-xl hover:bg-blue-200 transition-colors font-medium flex items-center gap-2"
                        >
                          <Edit2 className="w-4 h-4" />
                          Edit
                        </button>
                        <button
                          onClick={() => {
                            if (window.confirm('Are you sure you want to delete this artwork?')) {
                              deletePainting(painting.id);
                            }
                          }}
                          className="px-4 py-2 bg-red-100 text-red-700 rounded-xl hover:bg-red-200 transition-colors font-medium flex items-center gap-2"
                        >
                          <Trash2 className="w-4 h-4" />
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
