
import React, { useState, useRef, useCallback, useEffect } from 'react';
import { 
  Upload, X, Plus, Trash2, Palette, Gem, Crown, Star, Clock, DollarSign, 
  User, Mail, Phone, Globe, MessageSquare, Sparkles, CheckCircle, ArrowRight, 
  Package, Users, ChevronDown, ChevronUp, Layers, Ruler, Paintbrush, Diamond 
} from 'lucide-react';

const CustomOrderForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    city: '',
    projectName: '',
    category: '',
    subcategory: '',
    quantity: 1,
    budget: '',
    timeline: '',
    priority: 'standard',
    style: '',
    metalType: '',
    metalColor: '',
    gemstones: [{ id: Date.now(), type: '', size: '', quality: '', quantity: 1 }],
    dimensions: { length: '', width: '', height: '', weight: '' },
    finish: '',
    description: '',
    inspiration: '',
    specialRequests: '',
    packaging: '',
    communicationPreference: 'email',
    updateFrequency: 'weekly',
    consultationMethod: 'video',
    terms: false,
    newsletter: false,
    portfolio: false
  });

  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});
  const [errors, setErrors] = useState({});
  const fileInputRef = useRef(null);
  const formRef = useRef(null);

  const jewelryCategories = {
    rings: ['Engagement', 'Wedding', 'Statement', 'Cocktail', 'Band', 'Signet'],
    necklaces: ['Pendant', 'Chain', 'Choker', 'Statement', 'Lariat', 'Collar'],
    earrings: ['Stud', 'Drop', 'Hoop', 'Chandelier', 'Huggie', 'Crawler'],
    bracelets: ['Tennis', 'Bangle', 'Chain', 'Cuff', 'Charm', 'Link'],
    brooches: ['Classic', 'Modern', 'Vintage', 'Animal', 'Floral', 'Geometric'],
    sets: ['Bridal', 'Parure', 'Matching', 'Coordinated', 'Collection', 'Suite']
  };

  const metalTypes = [
    { value: 'gold', label: 'Gold', colors: ['Yellow', 'White', 'Rose', 'Green'] },
    { value: 'platinum', label: 'Platinum', colors: ['Natural'] },
    { value: 'silver', label: 'Silver', colors: ['Sterling', 'Fine', 'Oxidized'] },
    { value: 'palladium', label: 'Palladium', colors: ['Natural'] },
    { value: 'titanium', label: 'Titanium', colors: ['Natural', 'Black'] }
  ];

  const gemstoneTypes = [
    'Diamond', 'Ruby', 'Sapphire', 'Emerald', 'Amethyst', 'Topaz', 'Garnet', 
    'Peridot', 'Aquamarine', 'Tourmaline', 'Opal', 'Pearl', 'Tanzanite', 'Other'
  ];

  const formSteps = [
    { id: 'personal', title: 'Personal Information', icon: User, description: 'Tell us about yourself' },
    { id: 'project', title: 'Project Details', icon: Package, description: 'Define your project scope' },
    { id: 'design', title: 'Design Specifications', icon: Palette, description: 'Specify materials and design' },
    { id: 'files', title: 'References & Files', icon: Upload, description: 'Upload sketches and inspiration' },
    { id: 'preferences', title: 'Preferences', icon: Star, description: 'Communication and delivery' },
    { id: 'review', title: 'Review & Submit', icon: CheckCircle, description: 'Final review and submission' }
  ];

  useEffect(() => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
      const firstInput = formRef.current.querySelector('input, select, textarea');
      if (firstInput) firstInput.focus();
    }
  }, [currentStep]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setErrors(prev => {
        const newErrors = { ...prev };
        Object.keys(newErrors).forEach(key => {
          if (key !== 'submit' && key !== 'files') delete newErrors[key];
        });
        return newErrors;
      });
    }, 5000);
    return () => clearTimeout(timer);
  }, [errors]);

  const validateStep = useCallback((step) => {
    const newErrors = {};
    if (step === 0) {
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
      if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Valid email is required';
      if (!formData.phone || !/^\+?\d{10,15}$/.test(formData.phone.replace(/\D/g, ''))) newErrors.phone = 'Valid phone number is required';
      if (!formData.country.trim()) newErrors.country = 'Country is required';
    } else if (step === 1) {
      if (!formData.projectName.trim()) newErrors.projectName = 'Project name is required';
      if (!formData.category) newErrors.category = 'Category is required';
      if (!formData.subcategory) newErrors.subcategory = 'Subcategory is required';
      if (formData.quantity < 1) newErrors.quantity = 'Quantity must be at least 1';
      if (!formData.budget) newErrors.budget = 'Budget range is required';
      if (!formData.timeline) newErrors.timeline = 'Timeline is required';
      if (!formData.description.trim()) newErrors.description = 'Project description is required';
    } else if (step === 2) {
      if (!formData.style) newErrors.style = 'Style is required';
      if (!formData.metalType) newErrors.metalType = 'Metal type is required';
      if (!formData.metalColor) newErrors.metalColor = 'Metal color is required';
      if (!formData.finish) newErrors.finish = 'Finish is required';
      formData.gemstones.forEach((gem, index) => {
        if (!gem.type) newErrors[`gemstone${index}.type`] = 'Gemstone type is required';
        if (!gem.size.trim()) newErrors[`gemstone${index}.size`] = 'Gemstone size is required';
        if (!gem.quality) newErrors[`gemstone${index}.quality`] = 'Gemstone quality is required';
        if (gem.quantity < 1) newErrors[`gemstone${index}.quantity`] = 'Quantity must be at least 1';
      });
      if (formData.dimensions.length && (isNaN(formData.dimensions.length) || formData.dimensions.length < 0)) newErrors['dimensions.length'] = 'Length must be a positive number';
      if (formData.dimensions.width && (isNaN(formData.dimensions.width) || formData.dimensions.width < 0)) newErrors['dimensions.width'] = 'Width must be a positive number';
      if (formData.dimensions.height && (isNaN(formData.dimensions.height) || formData.dimensions.height < 0)) newErrors['dimensions.height'] = 'Height must be a positive number';
      if (formData.dimensions.weight && (isNaN(formData.dimensions.weight) || formData.dimensions.weight < 0)) newErrors['dimensions.weight'] = 'Weight must be a positive number';
    } else if (step === 4) {
      if (!formData.communicationPreference) newErrors.communicationPreference = 'Communication preference is required';
      if (!formData.updateFrequency) newErrors.updateFrequency = 'Update frequency is required';
      if (!formData.consultationMethod) newErrors.consultationMethod = 'Consultation method is required';
      if (!formData.terms) newErrors.terms = 'You must agree to the terms and conditions';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleInputChange = useCallback((field, value, e) => {
    if (e) e.preventDefault();
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: { ...prev[parent], [child]: value }
      }));
    } else {
      setFormData(prev => ({ ...prev, [field]: value }));
    }
    setErrors(prev => ({ ...prev, [field]: '' }));
  }, []);

  const handleGemstoneChange = useCallback((index, field, value, e) => {
    if (e) e.preventDefault();
    const newGemstones = [...formData.gemstones];
    newGemstones[index] = { ...newGemstones[index], [field]: value };
    setFormData(prev => ({ ...prev, gemstones: newGemstones }));
    setErrors(prev => ({ ...prev, [`gemstone${index}.${field}`]: '' }));
  }, [formData.gemstones]);

  const addGemstone = useCallback(() => {
    setFormData(prev => ({
      ...prev,
      gemstones: [...prev.gemstones, { id: Date.now(), type: '', size: '', quality: '', quantity: 1 }]
    }));
  }, []);

  const removeGemstone = useCallback((index) => {
    if (window.confirm('Are you sure you want to remove this gemstone?')) {
      setFormData(prev => ({
        ...prev,
        gemstones: prev.gemstones.filter((_, i) => i !== index)
      }));
      setErrors(prev => {
        const newErrors = { ...prev };
        Object.keys(prev).forEach(key => {
          if (key.startsWith(`gemstone${index}.`)) delete newErrors[key];
        });
        return newErrors;
      });
    }
  }, []);

  const handleFileUpload = useCallback((files) => {
    const maxFileSize = 10 * 1024 * 1024; // 10MB
    const maxFiles = 5;
    const validFiles = Array.from(files).filter(file => 
      (file.type.startsWith('image/') || file.type === 'application/pdf') && 
      file.size <= maxFileSize
    );

    if (uploadedFiles.length + validFiles.length > maxFiles) {
      setErrors(prev => ({ ...prev, files: `Maximum ${maxFiles} files allowed` }));
      return;
    }

    validFiles.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedFiles(prev => [
          ...prev,
          {
            id: Date.now() + Math.random(),
            file,
            preview: e.target.result,
            name: file.name,
            size: file.size,
            type: file.type
          }
        ]);
      };
      reader.readAsDataURL(file);
    });

    if (files.length > validFiles.length) {
      setErrors(prev => ({ ...prev, files: 'Some files were rejected (invalid type or size > 10MB)' }));
    } else {
      setErrors(prev => ({ ...prev, files: '' }));
    }
  }, [uploadedFiles.length]);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setDragActive(false);
    handleFileUpload(e.dataTransfer.files);
  }, [handleFileUpload]);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setDragActive(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    setDragActive(false);
  }, []);

  const removeFile = useCallback((fileId) => {
    if (window.confirm('Are you sure you want to remove this file?')) {
      setUploadedFiles(prev => prev.filter(file => file.id !== fileId));
      setErrors(prev => ({ ...prev, files: '' }));
    }
  }, []);

  const toggleSection = useCallback((section) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    if (!validateStep(currentStep)) return;

    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setShowSuccess(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        country: '',
        city: '',
        projectName: '',
        category: '',
        subcategory: '',
        quantity: 1,
        budget: '',
        timeline: '',
        priority: 'standard',
        style: '',
        metalType: '',
        metalColor: '',
        gemstones: [{ id: Date.now(), type: '', size: '', quality: '', quantity: 1 }],
        dimensions: { length: '', width: '', height: '', weight: '' },
        finish: '',
        description: '',
        inspiration: '',
        specialRequests: '',
        packaging: '',
        communicationPreference: 'email',
        updateFrequency: 'weekly',
        consultationMethod: 'video',
        terms: false,
        newsletter: false,
        portfolio: false
      });
      setUploadedFiles([]);
      setCurrentStep(0);
      setErrors({});
      setExpandedSections({});
    } catch (error) {
      setErrors({ submit: 'Submission failed. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  }, [currentStep, validateStep]);

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const FormSection = ({ title, children, icon: Icon, collapsible = false, sectionKey }) => (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg overflow-hidden">
      <div 
        className={`p-4 sm:p-6 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200/50 ${
          collapsible ? 'cursor-pointer hover:bg-gray-100 transition-colors' : ''
        }`}
        onClick={() => collapsible && toggleSection(sectionKey)}
        role={collapsible ? 'button' : undefined}
        aria-expanded={collapsible ? expandedSections[sectionKey] : undefined}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 flex items-center justify-center mr-3 sm:mr-4 shadow-lg">
              <Icon className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{title}</h3>
          </div>
          {collapsible && (
            <div className="text-gray-500">
              {expandedSections[sectionKey] ? <ChevronUp className="w-4 sm:w-5 h-4 sm:h-5" /> : <ChevronDown className="w-4 sm:w-5 h-4 sm:h-5" />}
            </div>
          )}
        </div>
      </div>
      {(!collapsible || expandedSections[sectionKey]) && (
        <div className="p-4 sm:p-6">{children}</div>
      )}
    </div>
  );

  const InputField = ({ label, type = 'text', value, onChange, placeholder, required = false, options = null, icon: Icon, min }) => (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {errors[label.toLowerCase().replace(/\s/g, '')] && (
        <p className="text-red-500 text-xs mb-1">{errors[label.toLowerCase().replace(/\s/g, '')]}</p>
      )}
      <div className="relative">
        {Icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <Icon className="w-4 h-4" />
          </div>
        )}
        {type === 'select' ? (
          <select
            value={value}
            onChange={(e) => onChange(e.target.value, e)}
            className={`w-full ${Icon ? 'pl-10' : 'pl-4'} pr-4 py-2.5 border ${
              errors[label.toLowerCase().replace(/\s/g, '')] ? 'border-red-500' : 'border-gray-300'
            } rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm text-sm sm:text-base`}
            required={required}
            aria-label={label}
          >
            <option value="">{placeholder}</option>
            {options?.map(option => (
              <option key={option.value || option} value={option.value || option}>
                {option.label || option}
              </option>
            ))}
          </select>
        ) : type === 'textarea' ? (
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value, e)}
            placeholder={placeholder}
            rows={4}
            className={`w-full ${Icon ? 'pl-10' : 'pl-4'} pr-4 py-2.5 border ${
              errors[label.toLowerCase().replace(/\s/g, '')] ? 'border-red-500' : 'border-gray-300'
            } rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm resize-none text-sm sm:text-base`}
            required={required}
            aria-label={label}
          />
        ) : (
          <input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value, e)}
            placeholder={placeholder}
            min={min}
            className={`w-full ${Icon ? 'pl-10' : 'pl-4'} pr-4 py-2.5 border ${
              errors[label.toLowerCase().replace(/\s/g, '')] ? 'border-red-500' : 'border-gray-300'
            } rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm text-sm sm:text-base`}
            required={required}
            aria-label={label}
            autoFocus={label === formSteps[currentStep].title.split(' ')[0]}
          />
        )}
      </div>
    </div>
  );

  const CheckboxField = ({ label, checked, onChange, name }) => (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={name}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
        aria-label={label}
      />
      <label htmlFor={name} className="ml-2 block text-sm text-gray-700">
        {label}
      </label>
      {errors[name] && <p className="text-red-500 text-xs ml-2">{errors[name]}</p>}
    </div>
  );

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-100 flex items-center justify-center p-4 sm:p-6">
        <div className="max-w-2xl w-full mx-auto text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-2xl border border-gray-200/50">
            <div className="w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-lg">
              <CheckCircle className="w-10 sm:w-12 h-10 sm:h-12 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Order Submitted Successfully!</h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Thank you for your custom order request. Our design team will review your submission and contact you within 24 hours to discuss your project details.
            </p>
            <div className="bg-amber-50 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 text-left">
              <h3 className="font-semibold text-amber-800 mb-2">What happens next?</h3>
              <ul className="text-sm text-amber-700 space-y-1">
                <li>• Design consultation within 24 hours</li>
                <li>• Initial concepts and timeline in 2-3 days</li>
                <li>• 3D visualization and approval process</li>
                <li>• Production updates throughout creation</li>
              </ul>
            </div>
            <button 
              onClick={() => setShowSuccess(false)}
              className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-white rounded-xl font-semibold hover:from-amber-600 hover:to-yellow-700 transition-all duration-300 shadow-lg"
              aria-label="Submit another order"
            >
              Submit Another Order
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-24 sm:top-32 right-24 sm:right-32 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-r from-amber-200/20 to-yellow-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-24 sm:bottom-32 left-24 sm:left-32 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-r from-rose-200/20 to-pink-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center justify-center mb-4 sm:mb-6 px-4 py-2 bg-gradient-to-r from-amber-50 to-yellow-50 backdrop-blur-sm rounded-full border border-amber-200/50 shadow-lg">
              <Crown className="w-5 h-5 text-amber-600 mr-2" />
              <span className="text-sm sm:text-base font-medium text-amber-800 tracking-wide">Custom Order Request</span>
              <Sparkles className="w-5 h-5 text-amber-600 ml-2" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-thin text-gray-900 mb-4 sm:mb-6 leading-tight">
              Create Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-rose-600 to-purple-700 font-extralight">
                Masterpiece
              </span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto font-light">
              Share your vision with our master craftsmen. From sketches to specifications, 
              we'll transform your ideas into extraordinary jewelry.
            </p>
          </div>

          <div className="mb-8 sm:mb-12">
            <div className="flex justify-between items-center mb-6 sm:mb-8 overflow-x-auto pb-4">
              {formSteps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <button
                    className={`relative flex flex-col items-center ${
                      index <= currentStep ? 'text-amber-600' : 'text-gray-400'
                    } focus:outline-none`}
                    onClick={() => {
                      if (index < currentStep || validateStep(currentStep)) {
                        setCurrentStep(index);
                      }
                    }}
                    disabled={isSubmitting}
                    aria-label={`Go to ${step.title} step`}
                  >
                    <div className={`w-8 sm:w-10 h-8 sm:h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                      index <= currentStep 
                        ? 'bg-gradient-to-r from-amber-500 to-yellow-600 border-amber-500 text-white shadow-lg' 
                        : 'bg-white border-gray-300 text-gray-400'
                    }`}>
                      {index < currentStep ? (
                        <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5" />
                      ) : (
                        <step.icon className="w-4 sm:w-5 h-4 sm:h-5" />
                      )}
                    </div>
                    <div className="mt-2 text-center">
                      <div className="text-xs sm:text-sm font-medium whitespace-nowrap">{step.title}</div>
                      <div className="text-xs text-gray-500 whitespace-nowrap hidden sm:block">{step.description}</div>
                    </div>
                  </button>
                  {index < formSteps.length - 1 && (
                    <div className={`w-6 sm:w-12 h-0.5 mx-2 sm:mx-4 transition-all duration-300 ${
                      index < currentStep ? 'bg-amber-500' : 'bg-gray-300'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            {currentStep === 0 && (
              <FormSection title="Personal Information" icon={User}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <InputField
                    label="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange.bind(null, 'firstName')}
                    placeholder="Enter your first name"
                    icon={User}
                    required
                  />
                  <InputField
                    label="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange.bind(null, 'lastName')}
                    placeholder="Enter your last name"
                    icon={User}
                    required
                  />
                  <InputField
                    label="Email Address"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange.bind(null, 'email')}
                    placeholder="Enter your email"
                    icon={Mail}
                    required
                  />
                  <InputField
                    label="Phone Number"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange.bind(null, 'phone')}
                    placeholder="Enter your phone number"
                    icon={Phone}
                    required
                  />
                  <InputField
                    label="Company/Business"
                    value={formData.company}
                    onChange={handleInputChange.bind(null, 'company')}
                    placeholder="Enter company name (optional)"
                    icon={Users}
                  />
                  <InputField
                    label="Country"
                    value={formData.country}
                    onChange={handleInputChange.bind(null, 'country')}
                    placeholder="Enter your country"
                    icon={Globe}
                    required
                  />
                </div>
              </FormSection>
            )}

            {currentStep === 1 && (
              <FormSection title="Project Details" icon={Package}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <InputField
                    label="Project Name"
                    value={formData.projectName}
                    onChange={handleInputChange.bind(null, 'projectName')}
                    placeholder="Give your project a name"
                    icon={Star}
                    required
                  />
                  <InputField
                    label="Category"
                    type="select"
                    value={formData.category}
                    onChange={(value, e) => {
                      handleInputChange('category', value, e);
                      handleInputChange('subcategory', '', e);
                    }}
                    placeholder="Select jewelry category"
                    icon={Crown}
                    options={Object.keys(jewelryCategories).map(key => ({ value: key, label: key.charAt(0).toUpperCase() + key.slice(1) }))}
                    required
                  />
                  <InputField
                    label="Subcategory"
                    type="select"
                    value={formData.subcategory}
                    onChange={handleInputChange.bind(null, 'subcategory')}
                    placeholder="Select specific type"
                    icon={Gem}
                    options={formData.category ? jewelryCategories[formData.category].map(sub => ({ value: sub, label: sub })) : []}
                    required
                  />
                  <InputField
                    label="Quantity"
                    type="number"
                    value={formData.quantity}
                    onChange={(value) => handleInputChange('quantity', parseInt(value) || 1)}
                    placeholder="Number of pieces"
                    icon={Package}
                    required
                    min="1"
                  />
                  <InputField
                    label="Budget Range (USD)"
                    type="select"
                    value={formData.budget}
                    onChange={handleInputChange.bind(null, 'budget')}
                    placeholder="Select your budget range"
                    icon={DollarSign}
                    options={[
                      { value: '500-1000', label: '$500 - $1,000' },
                      { value: '1000-2500', label: '$1,000 - $2,500' },
                      { value: '2500-5000', label: '$2,500 - $5,000' },
                      { value: '5000-10000', label: '$5,000 - $10,000' },
                      { value: '10000+', label: '$10,000+' }
                    ]}
                    required
                  />
                  <InputField
                    label="Timeline"
                    type="select"
                    value={formData.timeline}
                    onChange={handleInputChange.bind(null, 'timeline')}
                    placeholder="When do you need it?"
                    icon={Clock}
                    options={[
                      { value: 'rush', label: 'Rush (2-3 weeks)' },
                      { value: 'standard', label: 'Standard (4-6 weeks)' },
                      { value: 'flexible', label: 'Flexible (2-3 months)' },
                      { value: 'no-rush', label: 'No Rush (3+ months)' }
                    ]}
                    required
                  />
                </div>
                <div className="mt-4 sm:mt-6">
                  <InputField
                    label="Project Description"
                    type="textarea"
                    value={formData.description}
                    onChange={handleInputChange.bind(null, 'description')}
                    placeholder="Describe your vision, style preferences, and any specific requirements..."
                    icon={MessageSquare}
                    required
                  />
                </div>
              </FormSection>
            )}

            {currentStep === 2 && (
              <div className="space-y-6 sm:space-y-8">
                <FormSection title="Design Specifications" icon={Palette}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <InputField
                      label="Style"
                      type="select"
                      value={formData.style}
                      onChange={handleInputChange.bind(null, 'style')}
                      placeholder="Select design style"
                      icon={Paintbrush}
                      options={[
                        'Classic/Traditional', 'Modern/Contemporary', 'Vintage/Antique', 
                        'Art Deco', 'Minimalist', 'Bohemian', 'Gothic', 'Nature-inspired'
                      ].map(val => ({ value: val, label: val }))}
                      required
                    />
                    <InputField
                      label="Metal Type"
                      type="select"
                      value={formData.metalType}
                      onChange={(value, e) => {
                        handleInputChange('metalType', value, e);
                        handleInputChange('metalColor', '', e);
                      }}
                      placeholder="Choose metal type"
                      icon={Layers}
                      options={metalTypes}
                      required
                    />
                    <InputField
                      label="Metal Color"
                      type="select"
                      value={formData.metalColor}
                      onChange={handleInputChange.bind(null, 'metalColor')}
                      placeholder="Select metal color"
                      icon={Palette}
                      options={formData.metalType ? metalTypes.find(m => m.value === formData.metalType)?.colors.map(c => ({ value: c, label: c })) : []}
                      required
                    />
                    <InputField
                      label="Finish"
                      type="select"
                      value={formData.finish}
                      onChange={handleInputChange.bind(null, 'finish')}
                      placeholder="Select finish type"
                      icon={Sparkles}
                      options={['High Polish', 'Matte', 'Brushed', 'Hammered', 'Textured', 'Oxidized'].map(f => ({ value: f, label: f }))}
                      required
                    />
                  </div>
                </FormSection>

                <FormSection title="Gemstones" icon={Diamond} collapsible sectionKey="gemstones">
                  {formData.gemstones.map((gemstone, index) => (
                    <div key={gemstone.id} className="bg-gray-50 rounded-xl p-4 sm:p-6 mb-4">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-medium text-gray-900">Gemstone {index + 1}</h4>
                        {index > 0 && (
                          <button
                            type="button"
                            onClick={() => removeGemstone(index)}
                            className="text-red-500 hover:text-red-700 transition-colors"
                            aria-label={`Remove gemstone ${index + 1}`}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        <InputField
                          label="Gemstone Type"
                          type="select"
                          value={gemstone.type}
                          onChange={(value, e) => handleGemstoneChange(index, 'type', value, e)}
                          placeholder="Select gemstone"
                          options={gemstoneTypes.map(g => ({ value: g, label: g }))}
                          required
                        />
                        <InputField
                          label="Size (mm/ct)"
                          value={gemstone.size}
                          onChange={(value, e) => handleGemstoneChange(index, 'size', value, e)}
                          placeholder="Size specification"
                          required
                        />
                        <InputField
                          label="Quality"
                          type="select"
                          value={gemstone.quality}
                          onChange={(value, e) => handleGemstoneChange(index, 'quality', value, e)}
                          placeholder="Select quality"
                          options={['Premium', 'High', 'Good', 'Standard'].map(q => ({ value: q, label: q }))}
                          required
                        />
                        <InputField
                          label="Quantity"
                          type="number"
                          value={gemstone.quantity}
                          onChange={(value, e) => handleGemstoneChange(index, 'quantity', parseInt(value) || 1, e)}
                          placeholder="Number of stones"
                          required
                          min="1"
                        />
                      </div>
                      {Object.keys(errors).filter(key => key.startsWith(`gemstone${index}.`)).map(key => (
                        <p key={key} className="text-red-500 text-xs mt-2">{errors[key]}</p>
                      ))}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addGemstone}
                    className="flex items-center px-4 py-2 bg-amber-100 text-amber-700 rounded-lg hover:bg-amber-200 transition-colors"
                    aria-label="Add another gemstone"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Another Gemstone
                  </button>
                </FormSection>

                <FormSection title="Dimensions" icon={Ruler} collapsible sectionKey="dimensions">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <InputField
                      label="Length (mm)"
                      type="number"
                      value={formData.dimensions.length}
                      onChange={handleInputChange.bind(null, 'dimensions.length')}
                      placeholder="Length"
                      min="0"
                    />
                    <InputField
                      label="Width (mm)"
                      type="number"
                      value={formData.dimensions.width}
                      onChange={handleInputChange.bind(null, 'dimensions.width')}
                      placeholder="Width"
                      min="0"
                    />
                    <InputField
                      label="Height (mm)"
                      type="number"
                      value={formData.dimensions.height}
                      onChange={handleInputChange.bind(null, 'dimensions.height')}
                      placeholder="Height"
                      min="0"
                    />
                    <InputField
                      label="Weight (grams)"
                      type="number"
                      value={formData.dimensions.weight}
                      onChange={handleInputChange.bind(null, 'dimensions.weight')}
                      placeholder="Target weight"
                      min="0"
                    />
                  </div>
                </FormSection>
              </div>
            )}

            {currentStep === 3 && (
              <FormSection title="Upload References" icon={Upload}>
                <div 
                  className={`border-2 border-dashed rounded-2xl p-6 sm:p-8 text-center transition-all duration-300 ${
                    dragActive ? 'border-amber-500 bg-amber-50' : 'border-gray-300 hover:border-gray-400'
                  }`}
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  role="region"
                  aria-label="File upload area"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Upload className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">
                    Drag and drop images or PDFs here, or{' '}
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="text-amber-600 hover:text-amber-700 underline"
                      aria-label="Browse files"
                    >
                      browse files
                    </button>
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">Supported formats: JPG, PNG, PDF (Max 10MB each, 5 files)</p>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={(e) => handleFileUpload(e.target.files)}
                    accept="image/*,application/pdf"
                    multiple
                    className="hidden"
                    aria-label="File upload input"
                  />
                  {errors.files && <p className="text-red-500 text-xs sm:text-sm mt-4">{errors.files}</p>}
                </div>
                {uploadedFiles.length > 0 && (
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {uploadedFiles.map(file => (
                      <div key={file.id} className="relative bg-gray-50 rounded-xl p-4 shadow-sm">
                        <button
                          type="button"
                          onClick={() => removeFile(file.id)}
                          className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                          aria-label={`Remove ${file.name}`}
                        >
                          <X className="w-5 h-5" />
                        </button>
                        {file.type.startsWith('image/') ? (
                          <img src={file.preview} alt={file.name} className="w-full h-32 object-cover rounded-lg mb-2" />
                        ) : (
                          <div className="w-full h-32 flex items-center justify-center bg-gray-200 rounded-lg mb-2">
                            <Upload className="w-12 h-12 text-gray-500" />
                          </div>
                        )}
                        <p className="text-sm text-gray-700 truncate">{file.name}</p>
                        <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
                      </div>
                    ))}
                  </div>
                )}
              </FormSection>
            )}

            {currentStep === 4 && (
              <FormSection title="Preferences" icon={Star}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <InputField
                    label="Communication Preference"
                    type="select"
                    value={formData.communicationPreference}
                    onChange={handleInputChange.bind(null, 'communicationPreference')}
                    placeholder="How should we contact you?"
                    icon={MessageSquare}
                    options={['Email', 'Phone', 'Video Call'].map(v => ({ value: v.toLowerCase(), label: v }))}
                    required
                  />
                  <InputField
                    label="Update Frequency"
                    type="select"
                    value={formData.updateFrequency}
                    onChange={handleInputChange.bind(null, 'updateFrequency')}
                    placeholder="How often do you want updates?"
                    icon={Clock}
                    options={['Daily', 'Weekly', 'Bi-weekly', 'Monthly'].map(v => ({ value: v.toLowerCase(), label: v }))}
                    required
                  />
                  <InputField
                    label="Consultation Method"
                    type="select"
                    value={formData.consultationMethod}
                    onChange={handleInputChange.bind(null, 'consultationMethod')}
                    placeholder="Preferred consultation method"
                    icon={Users}
                    options={['Video', 'Phone', 'In-person', 'Email'].map(v => ({ value: v.toLowerCase(), label: v }))}
                    required
                  />
                  <InputField
                    label="Packaging Preference"
                    type="select"
                    value={formData.packaging}
                    onChange={handleInputChange.bind(null, 'packaging')}
                    placeholder="Select packaging type"
                    icon={Package}
                    options={['Standard', 'Premium', 'Gift', 'Eco-friendly'].map(v => ({ value: v.toLowerCase(), label: v }))}
                  />
                </div>
                <div className="mt-4 sm:mt-6 space-y-3">
                  <CheckboxField
                    label="I agree to the terms and conditions"
                    checked={formData.terms}
                    onChange={(value) => handleInputChange('terms', value)}
                    name="terms"
                  />
                  <CheckboxField
                    label="Subscribe to our newsletter"
                    checked={formData.newsletter}
                    onChange={(value) => handleInputChange('newsletter', value)}
                    name="newsletter"
                  />
                  <CheckboxField
                    label="Allow use in our portfolio"
                    checked={formData.portfolio}
                    onChange={(value) => handleInputChange('portfolio', value)}
                    name="portfolio"
                  />
                </div>
              </FormSection>
            )}

            {currentStep === 5 && (
              <FormSection title="Review & Submit" icon={CheckCircle}>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h4>
                    <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-medium text-gray-900">Personal Information</h5>
                          <p className="text-sm text-gray-600">{formData.firstName} {formData.lastName}</p>
                          <p className="text-sm text-gray-600">{formData.email}</p>
                          <p className="text-sm text-gray-600">{formData.phone}</p>
                          {formData.company && <p className="text-sm text-gray-600">{formData.company}</p>}
                          <p className="text-sm text-gray-600">{formData.country}</p>
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-900">Project Details</h5>
                          <p className="text-sm text-gray-600">Name: {formData.projectName}</p>
                          <p className="text-sm text-gray-600">Category: {formData.category}</p>
                          <p className="text-sm text-gray-600">Subcategory: {formData.subcategory}</p>
                          <p className="text-sm text-gray-600">Quantity: {formData.quantity}</p>
                          <p className="text-sm text-gray-600">Budget: {formData.budget}</p>
                          <p className="text-sm text-gray-600">Timeline: {formData.timeline}</p>
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-900">Design Specifications</h5>
                          <p className="text-sm text-gray-600">Style: {formData.style}</p>
                          <p className="text-sm text-gray-600">Metal: {formData.metalType} ({formData.metalColor})</p>
                          <p className="text-sm text-gray-600">Finish: {formData.finish}</p>
                          {formData.gemstones.map((gem, index) => (
                            <p key={gem.id} className="text-sm text-gray-600">
                              Gemstone {index + 1}: {gem.type}, {gem.size}, {gem.quality}, Qty: {gem.quantity}
                            </p>
                          ))}
                          {Object.values(formData.dimensions).some(val => val) && (
                            <p className="text-sm text-gray-600">
                              Dimensions: {formData.dimensions.length || 'N/A'}mm x {formData.dimensions.width || 'N/A'}mm x {formData.dimensions.height || 'N/A'}mm, Weight: {formData.dimensions.weight || 'N/A'}g
                            </p>
                          )}
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-900">Preferences</h5>
                          <p className="text-sm text-gray-600">Communication: {formData.communicationPreference}</p>
                          <p className="text-sm text-gray-600">Updates: {formData.updateFrequency}</p>
                          <p className="text-sm text-gray-600">Consultation: {formData.consultationMethod}</p>
                          {formData.packaging && <p className="text-sm text-gray-600">Packaging: {formData.packaging}</p>}
                        </div>
                      </div>
                      {uploadedFiles.length > 0 && (
                        <div className="mt-4">
                          <h5 className="font-medium text-gray-900">Uploaded Files</h5>
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {uploadedFiles.map(file => (
                              <p key={file.id} className="text-sm text-gray-600">{file.name} ({formatFileSize(file.size)})</p>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  {errors.submit && <p className="text-red-500 text-sm">{errors.submit}</p>}
                </div>
              </FormSection>
            )}

            <div className="flex flex-col sm:flex-row justify-between mt-6 sm:mt-8 gap-4">
              {currentStep > 0 && (
                <button
                  type="button"
                  onClick={() => setCurrentStep(prev => prev - 1)}
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-colors"
                  aria-label="Previous step"
                  disabled={isSubmitting}
                >
                  Previous
                </button>
              )}
              <div className="sm:ml-auto">
                {currentStep < formSteps.length - 1 ? (
                  <button
                    type="button"
                    onClick={() => {
                      if (validateStep(currentStep)) {
                        setCurrentStep(prev => prev + 1);
                      }
                    }}
                    className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-white rounded-xl hover:from-amber-600 hover:to-yellow-700 transition-colors shadow-lg"
                    disabled={isSubmitting}
                    aria-label="Next step"
                  >
                    Next <ArrowRight className="w-4 h-4 inline ml-2" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-white rounded-xl hover:from-amber-600 hover:to-yellow-700 transition-colors shadow-lg"
                    disabled={isSubmitting}
                    aria-label="Submit order"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Order'} <CheckCircle className="w-4 h-4 inline ml-2" />
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CustomOrderForm;
