import React, { useState } from 'react';
import { X, Lock, ShieldCheck, CheckCircle2, User, Key, Search, Phone, MessageCircle, RefreshCw, DollarSign, Building2, Save, LogOut } from 'lucide-react';
import { BUSINESS_INFO, PRODUCTS } from '../data/products';
import { AdminQuoteInquiry } from '../types';
import { Button } from './ui/Button';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Initial mock quote inquiries for demonstration
const INITIAL_INQUIRIES: AdminQuoteInquiry[] = [
  {
    id: "INQ-1001",
    customerName: "Sri Laxmi Garments",
    customerPhone: "9848022338",
    customerEmail: "contact@srilaxmi.in",
    bagCategory: "D-Cut Carry Bags",
    bagSize: "14×18 inches",
    quantity: "100 kg",
    printingType: "Single Color Both Sides",
    estimatedAmount: 27200,
    date: "2026-08-08",
    status: "New",
    notes: "Requires deep blue logo printing for garment showroom."
  },
  {
    id: "INQ-1002",
    customerName: "Heritage Fresh Mart",
    customerPhone: "9100788221",
    customerEmail: "procurement@heritagefresh.com",
    bagCategory: "W-Cut Carry Bags",
    bagSize: "Medium Retail Sizes",
    quantity: "250 kg",
    printingType: "Dual Color Printing",
    estimatedAmount: 68000,
    date: "2026-08-07",
    status: "Contacted",
    notes: "Urgent dispatch to Kukatpally branch."
  },
  {
    id: "INQ-1003",
    customerName: "Karachi Bakery & Sweets",
    customerPhone: "9440112233",
    customerEmail: "orders@karachibakery.com",
    bagCategory: "Stitched Non-Woven Bags",
    bagSize: "14×17 inches",
    quantity: "2000 pieces",
    printingType: "Multi-color Screen Print",
    estimatedAmount: 37000,
    date: "2026-08-05",
    status: "Fulfilled",
    notes: "Box gusset stitched handles for sweet boxes."
  }
];

export const AdminModal: React.FC<AdminModalProps> = ({ isOpen, onClose }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Dashboard state
  const [activeTab, setActiveTab] = useState<'inquiries' | 'rates' | 'factory'>('inquiries');
  const [inquiries, setInquiries] = useState<AdminQuoteInquiry[]>(INITIAL_INQUIRIES);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | 'New' | 'Contacted' | 'Fulfilled'>('All');

  // Product rates state
  const [dCutPrice, setDCutPrice] = useState('272');
  const [wCutPrice, setWCutPrice] = useState('272');
  const [stitchedPrice, setStitchedPrice] = useState('18.50');
  const [gstPercentage, setGstPercentage] = useState('18');
  const [rateSaveSuccess, setRateSaveSuccess] = useState(false);

  // Factory info state
  const [factoryName, setFactoryName] = useState(BUSINESS_INFO.name);
  const [proprietor, setProprietor] = useState(BUSINESS_INFO.proprietor);
  const [gstin, setGstin] = useState(BUSINESS_INFO.gst);
  const [phone, setPhone] = useState(BUSINESS_INFO.phone);
  const [factorySaveSuccess, setFactorySaveSuccess] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim() === 'venu@gmail.com' && password === 'venu@gmail.com') {
      setIsLoggedIn(true);
      setLoginError('');
    } else {
      setLoginError('Invalid admin email or password.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
    setLoginError('');
  };

  const handleUpdateStatus = (id: string, newStatus: 'New' | 'Contacted' | 'Fulfilled') => {
    setInquiries(prev => prev.map(inq => inq.id === id ? { ...inq, status: newStatus } : inq));
  };

  const filteredInquiries = inquiries.filter(inq => {
    const matchesSearch = inq.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          inq.customerPhone.includes(searchTerm) ||
                          inq.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || inq.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleSaveRates = (e: React.FormEvent) => {
    e.preventDefault();
    setRateSaveSuccess(true);
    setTimeout(() => setRateSaveSuccess(false), 3000);
  };

  const handleSaveFactory = (e: React.FormEvent) => {
    e.preventDefault();
    setFactorySaveSuccess(true);
    setTimeout(() => setFactorySaveSuccess(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative max-w-4xl w-full bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-4 sm:p-5 flex items-center justify-between shrink-0 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold shadow-md shadow-blue-600/30">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                RVM Carry Bags — Admin Control Portal
              </h3>
              <p className="text-xs text-slate-400">
                {isLoggedIn ? `Authenticated as ${username}` : 'Factory Management & Order Tracking System'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isLoggedIn && (
              <button
                onClick={handleLogout}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1">
          {!isLoggedIn ? (
            /* Login Form */
            <div className="max-w-md mx-auto py-6 sm:py-10 space-y-6">
              <div className="text-center space-y-2">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto border border-blue-100">
                  <Lock className="w-7 h-7" />
                </div>
                <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900">Admin Authentication</h4>
                <p className="text-xs sm:text-sm text-slate-500">
                  Log in to manage factory customer inquiries, bag pricing rates, and GST records.
                </p>
              </div>

              {loginError && (
                <div className="bg-rose-50 border border-rose-200 text-rose-700 p-3 rounded-xl text-xs font-semibold">
                  {loginError}
                </div>
              )}

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Username / Email
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="admin@example.com"
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <Key className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••••••"
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="blue"
                  size="md"
                  className="w-full"
                >
                  Access Admin Dashboard
                </Button>
              </form>
            </div>
          ) : (
            /* Logged-In Admin Dashboard */
            <div className="space-y-6">
              
              {/* Dashboard Navigation Tabs */}
              <div className="flex border-b border-slate-200 gap-2 sm:gap-4 overflow-x-auto">
                <button
                  onClick={() => setActiveTab('inquiries')}
                  className={`pb-3 pt-1 px-3 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
                    activeTab === 'inquiries'
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Customer Inquiries ({inquiries.length})
                </button>

                <button
                  onClick={() => setActiveTab('rates')}
                  className={`pb-3 pt-1 px-3 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
                    activeTab === 'rates'
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Bag Rates & GST Settings
                </button>

                <button
                  onClick={() => setActiveTab('factory')}
                  className={`pb-3 pt-1 px-3 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
                    activeTab === 'factory'
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Factory Details & GSTIN
                </button>
              </div>

              {/* TAB 1: Customer Inquiries */}
              {activeTab === 'inquiries' && (
                <div className="space-y-4">
                  {/* Filters */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div className="relative w-full sm:w-72">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                      <input
                        type="text"
                        placeholder="Search by name, phone or ID..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>

                    <div className="flex items-center gap-2 w-full sm:w-auto">
                      <span className="text-xs text-slate-500 font-semibold">Status:</span>
                      <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value as any)}
                        className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs font-semibold focus:outline-none"
                      >
                        <option value="All">All Inquiries</option>
                        <option value="New">New</option>
                        <option value="Contacted">Contacted</option>
                        <option value="Fulfilled">Fulfilled</option>
                      </select>
                    </div>
                  </div>

                  {/* Inquiries Table / Cards */}
                  <div className="space-y-3">
                    {filteredInquiries.length === 0 ? (
                      <div className="text-center py-8 text-slate-400 text-xs">
                        No inquiries match the current search filter.
                      </div>
                    ) : (
                      filteredInquiries.map((inq) => (
                        <div
                          key={inq.id}
                          className="bg-slate-50/70 border border-slate-200 rounded-2xl p-4 space-y-3 hover:border-blue-200 transition-colors"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-200/80">
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="font-mono text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                                  {inq.id}
                                </span>
                                <h5 className="font-bold text-slate-900 text-sm">{inq.customerName}</h5>
                              </div>
                              <div className="text-xs text-slate-500 flex items-center gap-3 pt-0.5">
                                <span>Phone: <strong className="text-slate-800">{inq.customerPhone}</strong></span>
                                <span>•</span>
                                <span>Date: {inq.date}</span>
                              </div>
                            </div>

                            {/* Status Badge & Actions */}
                            <div className="flex items-center gap-2">
                              <span
                                className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                                  inq.status === 'New'
                                    ? 'bg-amber-100 text-amber-800 border border-amber-200'
                                    : inq.status === 'Contacted'
                                    ? 'bg-blue-100 text-blue-800 border border-blue-200'
                                    : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                                }`}
                              >
                                {inq.status}
                              </span>

                              <div className="flex items-center gap-1 bg-white border border-slate-200 rounded-xl p-1 text-xs">
                                <button
                                  onClick={() => handleUpdateStatus(inq.id, 'New')}
                                  className={`px-2 py-0.5 rounded cursor-pointer ${inq.status === 'New' ? 'bg-amber-500 text-white font-bold' : 'text-slate-600 hover:bg-slate-100'}`}
                                >
                                  New
                                </button>
                                <button
                                  onClick={() => handleUpdateStatus(inq.id, 'Contacted')}
                                  className={`px-2 py-0.5 rounded cursor-pointer ${inq.status === 'Contacted' ? 'bg-blue-600 text-white font-bold' : 'text-slate-600 hover:bg-slate-100'}`}
                                >
                                  Contacted
                                </button>
                                <button
                                  onClick={() => handleUpdateStatus(inq.id, 'Fulfilled')}
                                  className={`px-2 py-0.5 rounded cursor-pointer ${inq.status === 'Fulfilled' ? 'bg-emerald-600 text-white font-bold' : 'text-slate-600 hover:bg-slate-100'}`}
                                >
                                  Fulfilled
                                </button>
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-slate-600">
                            <div>
                              <span className="text-[10px] uppercase font-bold text-slate-400 block">Category</span>
                              <span className="font-semibold text-slate-800">{inq.bagCategory}</span>
                            </div>
                            <div>
                              <span className="text-[10px] uppercase font-bold text-slate-400 block">Size & Qty</span>
                              <span className="font-semibold text-slate-800">{inq.bagSize} ({inq.quantity})</span>
                            </div>
                            <div>
                              <span className="text-[10px] uppercase font-bold text-slate-400 block">Printing</span>
                              <span className="font-semibold text-slate-800">{inq.printingType}</span>
                            </div>
                            <div>
                              <span className="text-[10px] uppercase font-bold text-slate-400 block">Estimated Quote</span>
                              <span className="font-bold text-blue-600">₹{inq.estimatedAmount.toLocaleString('en-IN')}</span>
                            </div>
                          </div>

                          {inq.notes && (
                            <div className="text-xs bg-white p-2.5 rounded-xl border border-slate-200 text-slate-700 italic">
                              "{inq.notes}"
                            </div>
                          )}

                          <div className="flex justify-end pt-1">
                            <a
                              href={`https://wa.me/91${inq.customerPhone}?text=${encodeURIComponent(
                                `Hello ${inq.customerName}, this is RVM Carry Bags regarding your inquiry for ${inq.bagCategory} (${inq.quantity}).`
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 px-3 py-1.5 rounded-xl transition-colors cursor-pointer"
                            >
                              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                              <span>Reply Customer on WhatsApp</span>
                            </a>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}

              {/* TAB 2: Bag Rates & GST Settings */}
              {activeTab === 'rates' && (
                <form onSubmit={handleSaveRates} className="space-y-6 max-w-xl">
                  {rateSaveSuccess && (
                    <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-3 rounded-2xl text-xs font-bold flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Product pricing rates updated successfully!</span>
                    </div>
                  )}

                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-4">
                    <h5 className="text-xs font-extrabold uppercase text-slate-700 flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-blue-600" />
                      Base Wholesale Factory Rates
                    </h5>

                    <div className="space-y-3 text-xs">
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">
                          D-Cut Carry Bags Base Rate (₹ per kg)
                        </label>
                        <input
                          type="number"
                          value={dCutPrice}
                          onChange={(e) => setDCutPrice(e.target.value)}
                          className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 font-mono text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-slate-700 mb-1">
                          W-Cut Grocery Bags Base Rate (₹ per kg)
                        </label>
                        <input
                          type="number"
                          value={wCutPrice}
                          onChange={(e) => setWCutPrice(e.target.value)}
                          className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 font-mono text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-slate-700 mb-1">
                          Stitched Loop Bags Base Rate (₹ per piece)
                        </label>
                        <input
                          type="text"
                          value={stitchedPrice}
                          onChange={(e) => setStitchedPrice(e.target.value)}
                          className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 font-mono text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-slate-700 mb-1">
                          Applicable GST Percentage (%)
                        </label>
                        <input
                          type="number"
                          value={gstPercentage}
                          onChange={(e) => setGstPercentage(e.target.value)}
                          className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 font-mono text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    variant="blue"
                    size="md"
                    icon={<Save className="w-4 h-4" />}
                  >
                    Save Pricing Changes
                  </Button>
                </form>
              )}

              {/* TAB 3: Factory & GST Details */}
              {activeTab === 'factory' && (
                <form onSubmit={handleSaveFactory} className="space-y-6 max-w-xl">
                  {factorySaveSuccess && (
                    <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-3 rounded-2xl text-xs font-bold flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Factory records updated successfully!</span>
                    </div>
                  )}

                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-4">
                    <h5 className="text-xs font-extrabold uppercase text-slate-700 flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-blue-600" />
                      Factory Business Record
                    </h5>

                    <div className="space-y-3 text-xs">
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">
                          Business / Enterprise Name
                        </label>
                        <input
                          type="text"
                          value={factoryName}
                          onChange={(e) => setFactoryName(e.target.value)}
                          className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-slate-700 mb-1">
                          Proprietor Name
                        </label>
                        <input
                          type="text"
                          value={proprietor}
                          onChange={(e) => setProprietor(e.target.value)}
                          className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-slate-700 mb-1">
                          GSTIN Registration Number
                        </label>
                        <input
                          type="text"
                          value={gstin}
                          onChange={(e) => setGstin(e.target.value)}
                          className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 font-mono text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-slate-700 mb-1">
                          Factory Contact Phone Number
                        </label>
                        <input
                          type="text"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    variant="blue"
                    size="md"
                    icon={<Save className="w-4 h-4" />}
                  >
                    Save Factory Profile
                  </Button>
                </form>
              )}

            </div>
          )}
        </div>

      </div>
    </div>
  );
};
