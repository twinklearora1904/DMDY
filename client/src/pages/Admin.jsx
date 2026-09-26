import React, { useEffect, useState, useCallback } from 'react';
import { useAuth } from '../context/authContextInstance';
import { useNavigate } from 'react-router-dom';
import { 
  LogOut, 
  Trash2, 
  LayoutDashboard, 
  FileText, 
  Search, 
  Eye, 
  X, 
  ExternalLink, 
  Mail, 
  Phone, 
  Building2, 
  Globe, 
  TrendingUp, 
  Inbox, 
  CheckCircle, 
  Clock,
  Download 
} from 'lucide-react';
import api from '../utils/api';
import BlogManager from '../components/BlogManager';

const Admin = () => {
  const { user, loading, logout } = useAuth();
  const [leads, setLeads] = useState([]);
  const [activeTab, setActiveTab] = useState('leads'); // 'leads' or 'blogs'
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [selectedLead, setSelectedLead] = useState(null);
  const navigate = useNavigate();

  const fetchLeads = useCallback(async () => {
    try {
      const res = await api.get('/api/leads');
      setLeads(res.data);
    } catch (err) {
      console.error('Failed to fetch leads:', err);
    }
  }, []);

  useEffect(() => {
    document.title = 'Admin Dashboard | DMDY - Growth Marketing Agency';
    if (!loading && !user) {
      navigate('/admin/login');
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    if (user && activeTab === 'leads') {
      let isMounted = true;
      api.get('/api/leads')
        .then((res) => {
          if (isMounted) setLeads(res.data);
        })
        .catch((err) => console.error('Failed to fetch leads:', err));
      return () => {
        isMounted = false;
      };
    }
  }, [user, activeTab]);

  const handleStatusChange = async (id, newStatus) => {
    try {
      await api.put(`/api/leads/${id}`, { status: newStatus });
      fetchLeads();
      if (selectedLead && selectedLead._id === id) {
        setSelectedLead((prev) => ({ ...prev, status: newStatus }));
      }
    } catch (err) {
      console.error('Failed to update lead status:', err);
    }
  };

  const handleDelete = async (id, name) => {
    if (window.confirm(`Are you sure you want to delete lead from "${name}"?`)) {
      try {
        await api.delete(`/api/leads/${id}`);
        fetchLeads();
        if (selectedLead && selectedLead._id === id) {
          setSelectedLead(null);
        }
      } catch (err) {
        console.error('Failed to delete lead:', err);
      }
    }
  };

  // KPI Calculations
  const totalLeads = leads.length;
  const newLeads = leads.filter((l) => l.status === 'New').length;
  const wonLeads = leads.filter((l) => l.status === 'Won').length;
  const inPipelineLeads = leads.filter((l) => ['Contacted', 'Qualified', 'Proposal'].includes(l.status)).length;

  const filteredLeads = leads.filter((lead) => {
    const query = searchQuery.toLowerCase();
    const matchesSearch = 
      lead.name?.toLowerCase().includes(query) ||
      lead.email?.toLowerCase().includes(query) ||
      lead.company?.toLowerCase().includes(query) ||
      lead.service?.toLowerCase().includes(query) ||
      lead.phone?.includes(query);

    const matchesStatus = statusFilter === 'All' || lead.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleExportCSV = () => {
    if (filteredLeads.length === 0) {
      alert('No leads available to export.');
      return;
    }

    const headers = ['Name', 'Email', 'Phone', 'Company', 'Website', 'Service', 'Status', 'Date', 'Message / Challenges'];
    const rows = filteredLeads.map((lead) => [
      `"${(lead.name || '').replace(/"/g, '""')}"`,
      `"${(lead.email || '').replace(/"/g, '""')}"`,
      `"${(lead.phone || '').replace(/"/g, '""')}"`,
      `"${(lead.company || '').replace(/"/g, '""')}"`,
      `"${(lead.website || '').replace(/"/g, '""')}"`,
      `"${(lead.service || '').replace(/"/g, '""')}"`,
      `"${(lead.status || '').replace(/"/g, '""')}"`,
      `"${new Date(lead.createdAt).toISOString()}"`,
      `"${(lead.message || '').replace(/"/g, '""')}"`,
    ]);

    const csvContent = '\uFEFF' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `dmdy-leads-${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20 bg-slate-50 text-slate-500">
        <div className="w-8 h-8 border-3 border-brandPrimary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="pt-28 sm:pt-36 pb-12 sm:pb-20 min-h-screen bg-slate-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-6 sm:gap-8">
      {/* Sidebar Navigation */}
      <div className="w-full md:w-64 shrink-0">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-sm border border-slate-200/80 p-4 sm:p-5 static md:sticky md:top-32">
          <div className="flex items-center gap-3 px-3 py-2 mb-4 border-b border-slate-100">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-brandPrimary to-brandSecondary flex items-center justify-center text-white font-bold text-sm shadow-sm">
              {user.name ? user.name.charAt(0).toUpperCase() : 'A'}
            </div>
            <div className="min-w-0">
              <div className="text-sm font-bold text-slate-900 truncate">{user.name || 'Admin'}</div>
              <div className="text-xs text-slate-400 capitalize">{user.role || 'Super Admin'}</div>
            </div>
          </div>

          <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-3">Management</h2>
          <nav className="space-y-1">
            <button 
              onClick={() => setActiveTab('leads')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition ${
                activeTab === 'leads' ? 'bg-brandPrimary/10 text-brandPrimary shadow-sm' : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <span className="flex items-center">
                <LayoutDashboard className="w-4 h-4 mr-3" />
                Leads & CRM
              </span>
              {newLeads > 0 && (
                <span className="bg-brandSecondary text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {newLeads}
                </span>
              )}
            </button>
            <button 
              onClick={() => setActiveTab('blogs')}
              className={`w-full flex items-center px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition ${
                activeTab === 'blogs' ? 'bg-brandPrimary/10 text-brandPrimary shadow-sm' : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <FileText className="w-4 h-4 mr-3" />
              Blog Articles
            </button>
          </nav>

          <div className="mt-6 sm:mt-8 pt-4 border-t border-slate-100">
            <button 
              onClick={logout} 
              className="w-full flex items-center px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-red-600 hover:bg-red-50 transition"
            >
              <LogOut className="w-4 h-4 mr-3" /> Logout
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 min-w-0">
        
        {/* KPI Counter Cards */}
        {activeTab === 'leads' && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="bg-white p-3.5 sm:p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider">Total Leads</p>
                <p className="text-xl sm:text-3xl font-extrabold text-slate-900 mt-0.5 sm:mt-1">{totalLeads}</p>
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
                <Inbox className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </div>

            <div className="bg-white p-3.5 sm:p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider">New Inquiries</p>
                <p className="text-xl sm:text-3xl font-extrabold text-blue-600 mt-0.5 sm:mt-1">{newLeads}</p>
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </div>

            <div className="bg-white p-3.5 sm:p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider">In Pipeline</p>
                <p className="text-xl sm:text-3xl font-extrabold text-amber-600 mt-0.5 sm:mt-1">{inPipelineLeads}</p>
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 shrink-0">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </div>

            <div className="bg-white p-3.5 sm:p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider">Won / Closed</p>
                <p className="text-xl sm:text-3xl font-extrabold text-emerald-600 mt-0.5 sm:mt-1">{wonLeads}</p>
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </div>
          </div>
        )}

        {/* Section Heading */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {activeTab === 'leads' ? 'Client Inquiries & CRM' : 'Blog Article Management'}
            </h1>
            <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed">
              {activeTab === 'leads' 
                ? 'Review prospective clients, update lifecycle stages, and read strategy challenge requests.' 
                : 'Publish, edit, and optimize articles for SEO and audience growth.'}
            </p>
          </div>
        </div>

        {/* Leads Management View */}
        {activeTab === 'leads' && (
          <div>
            {/* Filter Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-5">
              <div className="flex items-center gap-2.5 w-full sm:w-auto flex-1">
                <div className="relative w-full sm:w-80">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input 
                    type="text"
                    placeholder="Search by name, email, company, service..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-brandPrimary focus:ring-1 focus:ring-brandPrimary shadow-sm"
                  />
                </div>
                <button
                  onClick={handleExportCSV}
                  title="Export Leads to Excel/CSV"
                  className="bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-bold px-3.5 py-2.5 rounded-xl text-xs flex items-center gap-1.5 shadow-sm hover:bg-slate-50 transition shrink-0"
                >
                  <Download className="w-3.5 h-3.5 text-brandPrimary" /> Export CSV
                </button>
              </div>

              {/* Status Filter Chips */}
              <div className="flex flex-wrap gap-1.5 w-full sm:w-auto">
                {['All', 'New', 'Contacted', 'Qualified', 'Proposal', 'Won', 'Lost'].map((st) => (
                  <button
                    key={st}
                    onClick={() => setStatusFilter(st)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                      statusFilter === st
                        ? 'bg-slate-900 text-white shadow-sm'
                        : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            {/* Leads Table */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 text-xs uppercase tracking-wider font-bold">
                      <th className="p-4 whitespace-nowrap">Prospect</th>
                      <th className="p-4 whitespace-nowrap">Service</th>
                      <th className="p-4 whitespace-nowrap">Contact</th>
                      <th className="p-4 whitespace-nowrap">Status</th>
                      <th className="p-4 whitespace-nowrap text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm">
                    {filteredLeads.length === 0 ? (
                      <tr>
                        <td colSpan="5" className="p-10 text-center text-xs sm:text-sm text-slate-500">
                          <Inbox className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                          {searchQuery || statusFilter !== 'All' 
                            ? 'No leads match the selected filter.' 
                            : 'No inquiries received yet. Incoming requests from the contact form will appear here.'}
                        </td>
                      </tr>
                    ) : (
                      filteredLeads.map((lead) => (
                        <tr key={lead._id} className="hover:bg-slate-50/80 transition-colors">
                          <td className="p-4">
                            <div className="text-sm font-bold text-slate-900">{lead.name}</div>
                            {lead.company && (
                              <div className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                                <Building2 className="w-3 h-3 text-slate-400" />
                                {lead.company}
                              </div>
                            )}
                            <div className="text-[11px] text-slate-400 mt-0.5">
                              {new Date(lead.createdAt).toLocaleDateString()}
                            </div>
                          </td>
                          <td className="p-4 whitespace-nowrap">
                            <span className="inline-block px-2.5 py-1 rounded-md text-xs font-bold bg-brandPrimary/10 text-brandPrimary border border-brandPrimary/20">
                              {lead.service}
                            </span>
                          </td>
                          <td className="p-4">
                            <div className="text-xs font-medium">
                              <a href={`mailto:${lead.email}`} className="text-slate-800 hover:text-brandPrimary hover:underline flex items-center gap-1">
                                <Mail className="w-3 h-3 text-slate-400" /> {lead.email}
                              </a>
                            </div>
                            <div className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                              <Phone className="w-3 h-3 text-slate-400" /> {lead.phone}
                            </div>
                          </td>
                          <td className="p-4 whitespace-nowrap">
                            <select 
                              value={lead.status}
                              onChange={(e) => handleStatusChange(lead._id, e.target.value)}
                              className={`bg-white border rounded-lg px-2.5 py-1 text-xs font-bold outline-none shadow-sm focus:ring-1 focus:ring-brandPrimary ${
                                lead.status === 'New' ? 'border-blue-300 text-blue-700 bg-blue-50/50' : 
                                lead.status === 'Won' ? 'border-emerald-300 text-emerald-700 bg-emerald-50/50' : 
                                lead.status === 'Lost' ? 'border-rose-300 text-rose-700 bg-rose-50/50' : 
                                'border-amber-300 text-amber-700 bg-amber-50/50'
                              }`}
                            >
                              <option value="New">New</option>
                              <option value="Contacted">Contacted</option>
                              <option value="Qualified">Qualified</option>
                              <option value="Proposal">Proposal</option>
                              <option value="Won">Won</option>
                              <option value="Lost">Lost</option>
                            </select>
                          </td>
                          <td className="p-4 text-right whitespace-nowrap">
                            <div className="inline-flex items-center gap-1">
                              <button
                                onClick={() => setSelectedLead(lead)}
                                title="View Full Details"
                                className="text-slate-600 hover:text-brandPrimary p-1.5 rounded-lg hover:bg-slate-100 transition"
                              >
                                <Eye className="w-4 h-4" />
                              </button>
                              <button 
                                onClick={() => handleDelete(lead._id, lead.name)} 
                                title="Delete Lead"
                                className="text-slate-400 hover:text-red-600 p-1.5 rounded-lg hover:bg-red-50 transition"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts View */}
        {activeTab === 'blogs' && <BlogManager />}
      </div>
      </div>

      {/* Lead Details Modal */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl w-full max-w-xl max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100">
            <div className="flex justify-between items-center p-6 border-b border-slate-100 sticky top-0 bg-white/95 backdrop-blur-sm z-10">
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">Lead Details</h3>
                <p className="text-xs text-slate-500 mt-0.5">Submitted on {new Date(selectedLead.createdAt).toLocaleString()}</p>
              </div>
              <button 
                onClick={() => setSelectedLead(null)}
                className="text-slate-400 hover:text-slate-600 p-2 rounded-full hover:bg-slate-100 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-6 text-sm">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="text-xs font-semibold text-slate-400 uppercase mb-1">Prospect Name</div>
                  <div className="text-sm sm:text-base font-bold text-slate-900">{selectedLead.name}</div>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="text-xs font-semibold text-slate-400 uppercase mb-1">Lifecycle Status</div>
                  <select 
                    value={selectedLead.status}
                    onChange={(e) => handleStatusChange(selectedLead._id, e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-lg px-2 py-1 text-xs font-bold text-slate-800 outline-none"
                  >
                    <option value="New">New</option>
                    <option value="Contacted">Contacted</option>
                    <option value="Qualified">Qualified</option>
                    <option value="Proposal">Proposal</option>
                    <option value="Won">Won</option>
                    <option value="Lost">Lost</option>
                  </select>
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-3">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Contact & Company Info</div>
                
                <div className="flex items-center justify-between py-1 border-b border-slate-200/60 text-xs sm:text-sm">
                  <span className="text-slate-500 flex items-center gap-2"><Mail className="w-4 h-4 text-slate-400" /> Email:</span>
                  <a href={`mailto:${selectedLead.email}`} className="font-semibold text-brandPrimary hover:underline">{selectedLead.email}</a>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-slate-200/60 text-xs sm:text-sm">
                  <span className="text-slate-500 flex items-center gap-2"><Phone className="w-4 h-4 text-slate-400" /> Phone:</span>
                  <a href={`tel:${selectedLead.phone}`} className="font-semibold text-slate-800 hover:text-brandPrimary">{selectedLead.phone}</a>
                </div>

                {selectedLead.company && (
                  <div className="flex items-center justify-between py-1 border-b border-slate-200/60 text-xs sm:text-sm">
                    <span className="text-slate-500 flex items-center gap-2"><Building2 className="w-4 h-4 text-slate-400" /> Company:</span>
                    <span className="font-semibold text-slate-800">{selectedLead.company}</span>
                  </div>
                )}

                {selectedLead.website && (
                  <div className="flex items-center justify-between py-1 border-b border-slate-200/60 text-xs sm:text-sm">
                    <span className="text-slate-500 flex items-center gap-2"><Globe className="w-4 h-4 text-slate-400" /> Website:</span>
                    <a href={selectedLead.website.startsWith('http') ? selectedLead.website : `https://${selectedLead.website}`} target="_blank" rel="noopener noreferrer" className="font-semibold text-brandPrimary hover:underline flex items-center gap-1">
                      {selectedLead.website} <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}

                <div className="flex items-center justify-between py-1 text-xs sm:text-sm">
                  <span className="text-slate-500">Service Goal:</span>
                  <span className="font-bold text-slate-800 bg-white px-2 py-0.5 rounded border border-slate-200">{selectedLead.service}</span>
                </div>
              </div>

              {/* Message / Challenges Box */}
              <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Current Challenges / Message</div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-wrap font-sans">
                  {selectedLead.message ? selectedLead.message : <span className="italic text-slate-400">No message provided.</span>}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                <button
                  onClick={() => handleDelete(selectedLead._id, selectedLead.name)}
                  className="text-xs font-bold text-red-600 hover:text-red-700 transition"
                >
                  Delete this Lead
                </button>
                <div className="flex gap-2">
                  <a
                    href={`mailto:${selectedLead.email}?subject=DMDY Strategy Consultation Follow-up`}
                    className="btn-primary text-xs py-2 px-4 font-bold flex items-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5" /> Email Client
                  </a>
                  <button
                    onClick={() => setSelectedLead(null)}
                    className="px-4 py-2 rounded-xl text-slate-600 font-bold hover:bg-slate-100 transition text-xs"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
