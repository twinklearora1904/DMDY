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
  Download,
  BarChart3,
  Award,
  Sparkles,
  RefreshCw,
  Flame,
  ArrowUpRight,
  AlertTriangle,
  Filter
} from 'lucide-react';
import api from '../utils/api';
import BlogManager from '../components/BlogManager';
import TableSkeleton from '../components/skeletons/TableSkeleton';
import EmptyState from '../components/EmptyState';
import SEO from '../components/SEO';

const Admin = () => {
  const { user, loading, logout } = useAuth();
  const [leads, setLeads] = useState([]);
  const [leadsLoading, setLeadsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('leads'); // 'leads', 'analytics', 'blogs'
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [selectedLead, setSelectedLead] = useState(null);
  const [pagination, setPagination] = useState({
    page: 1,
    totalPages: 1,
    totalLeads: 0,
    hasNextPage: false,
  });
  const [statusCounts, setStatusCounts] = useState({
    New: 0,
    Contacted: 0,
    Qualified: 0,
    Proposal: 0,
    Won: 0,
    Lost: 0,
  });

  // Analytics State
  const [analyticsData, setAnalyticsData] = useState(null);
  const [analyticsLoading, setAnalyticsLoading] = useState(false);
  const navigate = useNavigate();

  const fetchLeads = useCallback(async (page = 1) => {
    await Promise.resolve();
    setLeadsLoading(true);
    try {
      const res = await api.get(`/api/leads?page=${page}&limit=20`);
      const { leads, currentPage, totalPages, totalLeads, hasNextPage, statusCounts: counts } = res.data;

      setLeads(leads || []);
      if (counts) setStatusCounts(counts);
      setPagination({
        page: currentPage,
        totalPages,
        totalLeads,
        hasNextPage,
      });
    } catch (err) {
      console.error('Failed to fetch leads:', err);
    } finally {
      setLeadsLoading(false);
    }
  }, []);

  const fetchAnalytics = useCallback(async () => {
    await Promise.resolve();
    setAnalyticsLoading(true);
    try {
      const res = await api.get('/api/analytics/dashboard');
      setAnalyticsData(res.data);
    } catch (err) {
      console.error('Failed to fetch analytics:', err);
    } finally {
      setAnalyticsLoading(false);
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
      fetchLeads(1);
    } else if (user && activeTab === 'analytics') {
      fetchAnalytics();
    }
  }, [user, activeTab, fetchAnalytics, fetchLeads]);

  const handleStatusChange = async (id, newStatus) => {
    // Optimistic Update
    const previousLeads = [...leads];
    const previousStatusCounts = { ...statusCounts };

    // 1. Update Leads List
    setLeads(prev => prev.map(l => l._id === id ? { ...l, status: newStatus } : l));

    // 2. Update KPI Cards Optimistically
    const leadToUpdate = leads.find(l => l._id === id);
    if (leadToUpdate) {
      const oldStatus = leadToUpdate.status;
      setStatusCounts(prev => ({
        ...prev,
        [oldStatus]: Math.max(0, (prev[oldStatus] || 0) - 1),
        [newStatus]: (prev[newStatus] || 0) + 1,
      }));
    }

    try {
      await api.put(`/api/leads/${id}`, { status: newStatus });
      if (selectedLead && selectedLead._id === id) {
        setSelectedLead((prev) => ({ ...prev, status: newStatus }));
      }
    } catch (err) {
      console.error('Failed to update lead status:', err);
      setLeads(previousLeads); // Rollback list
      setStatusCounts(previousStatusCounts); // Rollback counts
    }
  };

  const handleDelete = async (id, name) => {
    if (window.confirm(`Are you sure you want to delete lead from "${name}"?`)) {
      try {
        await api.delete(`/api/leads/${id}`);
        setLeads(prev => prev.filter(l => l._id !== id));
        if (selectedLead && selectedLead._id === id) {
          setSelectedLead(null);
        }
      } catch (err) {
        console.error('Failed to delete lead:', err);
      }
    }
  };

  // KPI Calculations
  const totalLeads = pagination.totalLeads;
  const newLeads = statusCounts.New ?? leads.filter((l) => l.status === 'New').length;
  const wonLeads = statusCounts.Won ?? leads.filter((l) => l.status === 'Won').length;
  const inPipelineLeads = ((statusCounts.Contacted || 0) + (statusCounts.Qualified || 0) + (statusCounts.Proposal || 0)) || leads.filter((l) => ['Contacted', 'Qualified', 'Proposal'].includes(l.status)).length;

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
    <div className="pt-24 sm:pt-28 pb-16 min-h-screen bg-slate-50/70 font-sans">
      <SEO
        title="Admin Console | DMDY Intelligence"
        description="Internal administration console for DMDY."
        url="https://www.digimedigiyou.com/admin"
        noindex={true}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Strip */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-5 border-b border-slate-200/80">
          <div>
            <div className="flex items-center gap-2.5">
              <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">Admin Console</h1>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Live Portal
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Manage client inquiries, track pipeline conversion, and edit strategic content.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2.5 px-3 py-1.5 bg-white border border-slate-200/80 rounded-xl shadow-2xs">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-brandPrimary to-brandSecondary flex items-center justify-center text-white font-bold text-xs">
                {user.name ? user.name.charAt(0).toUpperCase() : 'A'}
              </div>
              <div className="text-left text-xs">
                <div className="font-semibold text-slate-900 leading-tight">{user.name || 'Admin'}</div>
                <div className="text-[10px] text-slate-400 capitalize">{user.role || 'Super Admin'}</div>
              </div>
            </div>
            <button
              onClick={logout}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-red-600 hover:bg-red-50 border border-slate-200/80 transition"
              title="Logout"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation Segmented Bar */}
        <div className="flex items-center gap-1 sm:gap-2 mb-6 p-1 bg-slate-200/60 rounded-xl w-full sm:w-fit overflow-x-auto">
          <button
            onClick={() => setActiveTab('leads')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition whitespace-nowrap ${
              activeTab === 'leads'
                ? 'bg-white text-slate-900 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/50'
            }`}
          >
            <LayoutDashboard className="w-4 h-4 text-brandPrimary" />
            <span>Leads & CRM</span>
            {newLeads > 0 && (
              <span className="px-1.5 py-0.5 text-[10px] font-bold bg-blue-600 text-white rounded-full">
                {newLeads}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('analytics')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition whitespace-nowrap ${
              activeTab === 'analytics'
                ? 'bg-white text-slate-900 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/50'
            }`}
          >
            <BarChart3 className="w-4 h-4 text-[#00AED6]" />
            <span>Performance Analytics</span>
          </button>

          <button
            onClick={() => setActiveTab('blogs')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition whitespace-nowrap ${
              activeTab === 'blogs'
                ? 'bg-white text-slate-900 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/50'
            }`}
          >
            <FileText className="w-4 h-4 text-slate-500" />
            <span>Blog Articles</span>
          </button>
        </div>

        {/* Tab 1: Leads & CRM */}
        {activeTab === 'leads' && (
          <div className="space-y-6">
            
            {/* KPI Summary Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200/80 shadow-2xs flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Total Leads</p>
                  <p className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">{totalLeads}</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">All inquiries recorded</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 shrink-0">
                  <Inbox className="w-5 h-5" />
                </div>
              </div>

              <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200/80 shadow-2xs flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">New Inquiries</p>
                  <p className="text-2xl sm:text-3xl font-bold text-blue-600 mt-1">{newLeads}</p>
                  <p className="text-[11px] text-blue-500/80 mt-0.5">Awaiting initial reply</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
              </div>

              <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200/80 shadow-2xs flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">In Pipeline</p>
                  <p className="text-2xl sm:text-3xl font-bold text-amber-600 mt-1">{inPipelineLeads}</p>
                  <p className="text-[11px] text-amber-600/80 mt-0.5">Contacted & qualified</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
              </div>

              <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200/80 shadow-2xs flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Won / Converted</p>
                  <p className="text-2xl sm:text-3xl font-bold text-emerald-600 mt-1">{wonLeads}</p>
                  <p className="text-[11px] text-emerald-600/80 mt-0.5">Successfully closed deals</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                  <CheckCircle className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Filter & Search Toolbar */}
            <div className="bg-white p-3 sm:p-4 rounded-xl border border-slate-200/80 shadow-2xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input 
                  type="text"
                  placeholder="Search leads by name, company, email, service..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-50 hover:bg-slate-100/60 focus:bg-white border border-slate-200/90 rounded-lg pl-9.5 pr-8 py-2 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brandPrimary focus:ring-1 focus:ring-brandPrimary transition"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Status Filter & CSV Export */}
              <div className="flex items-center gap-2 shrink-0">
                <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200/90 rounded-lg px-2.5 py-1.5">
                  <Filter className="w-3.5 h-3.5 text-slate-400" />
                  <span className="text-xs font-semibold text-slate-500">Status:</span>
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="bg-transparent text-xs font-bold text-slate-800 outline-none cursor-pointer pr-1"
                  >
                    <option value="All">All Statuses ({totalLeads})</option>
                    <option value="New">New ({newLeads})</option>
                    <option value="Contacted">Contacted</option>
                    <option value="Qualified">Qualified</option>
                    <option value="Proposal">Proposal</option>
                    <option value="Won">Won ({wonLeads})</option>
                    <option value="Lost">Lost</option>
                  </select>
                </div>

                <button
                  onClick={handleExportCSV}
                  title="Export Leads to CSV"
                  className="bg-slate-50 hover:bg-slate-100 border border-slate-200/90 text-slate-700 font-semibold px-3 py-2 rounded-lg text-xs flex items-center gap-1.5 transition shrink-0"
                >
                  <Download className="w-3.5 h-3.5 text-brandPrimary" />
                  <span>Export CSV</span>
                </button>
              </div>
            </div>

            {/* Leads Table */}
            <div className="bg-white rounded-xl overflow-hidden shadow-2xs border border-slate-200/80">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50/90 border-b border-slate-200/80 text-slate-500 text-[11px] uppercase tracking-wider font-semibold">
                      <th className="py-3 px-4 whitespace-nowrap">Prospect</th>
                      <th className="py-3 px-4 whitespace-nowrap">Service</th>
                      <th className="py-3 px-4 whitespace-nowrap">Contact</th>
                      <th className="py-3 px-4 whitespace-nowrap">Status</th>
                      <th className="py-3 px-4 whitespace-nowrap text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm">
                    {leadsLoading ? (
                      <tr>
                        <td colSpan="5" className="p-4">
                          <TableSkeleton rows={5} />
                        </td>
                      </tr>
                    ) : filteredLeads.length === 0 ? (
                      <tr>
                        <td colSpan="5" className="p-8">
                          <EmptyState
                            variant="minimal"
                            icon={Inbox}
                            badge="CRM Pipeline"
                            title={searchQuery || statusFilter !== 'All' ? 'No Matching Leads' : 'No Inquiries Received Yet'}
                            description={
                              searchQuery || statusFilter !== 'All'
                                ? 'No leads matched your search query or status filter. Try clearing filters.'
                                : 'Incoming business enquiries submitted via website contact forms and modal triggers will appear here in real time.'
                            }
                            actionText={searchQuery || statusFilter !== 'All' ? 'Reset Filters' : undefined}
                            onAction={
                              searchQuery || statusFilter !== 'All'
                                ? () => {
                                    setSearchQuery('');
                                    setStatusFilter('All');
                                  }
                                : undefined
                            }
                          />
                        </td>
                      </tr>
                    ) : (
                      filteredLeads.map((lead) => (
                        <tr key={lead._id} className="hover:bg-slate-50/70 transition-colors">
                          <td className="py-3.5 px-4">
                            <div className="text-sm font-semibold text-slate-900 leading-snug">{lead.name}</div>
                            {lead.company && (
                              <div className="text-xs text-slate-500 flex items-center gap-1.5 mt-0.5">
                                <Building2 className="w-3 h-3 text-slate-400 shrink-0" />
                                <span>{lead.company}</span>
                              </div>
                            )}
                            <div className="text-[11px] text-slate-400 mt-0.5">
                              {new Date(lead.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                            </div>
                          </td>
                          <td className="py-3.5 px-4 whitespace-nowrap">
                            <span className="inline-block px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200/70">
                              {lead.service || 'General Inquiry'}
                            </span>
                          </td>
                          <td className="py-3.5 px-4">
                            <div className="text-xs">
                              <a href={`mailto:${lead.email}`} className="text-slate-700 hover:text-brandPrimary hover:underline inline-flex items-center gap-1.5 font-medium">
                                <Mail className="w-3 h-3 text-slate-400 shrink-0" />
                                <span>{lead.email}</span>
                              </a>
                            </div>
                            {lead.phone && (
                              <div className="text-xs text-slate-500 mt-1">
                                <a href={`tel:${lead.phone}`} className="hover:text-slate-800 inline-flex items-center gap-1.5">
                                  <Phone className="w-3 h-3 text-slate-400 shrink-0" />
                                  <span>{lead.phone}</span>
                                </a>
                              </div>
                            )}
                          </td>
                          <td className="py-3.5 px-4 whitespace-nowrap">
                            <select 
                              value={lead.status}
                              onChange={(e) => handleStatusChange(lead._id, e.target.value)}
                              className={`text-xs font-semibold rounded-md px-2.5 py-1 border outline-none cursor-pointer transition shadow-2xs ${
                                lead.status === 'New' ? 'bg-blue-50/80 border-blue-200 text-blue-700 hover:bg-blue-50' : 
                                lead.status === 'Won' ? 'bg-emerald-50/80 border-emerald-200 text-emerald-700 hover:bg-emerald-50' : 
                                lead.status === 'Lost' ? 'bg-rose-50/80 border-rose-200 text-rose-700 hover:bg-rose-50' : 
                                lead.status === 'Proposal' ? 'bg-purple-50/80 border-purple-200 text-purple-700 hover:bg-purple-50' :
                                lead.status === 'Qualified' ? 'bg-indigo-50/80 border-indigo-200 text-indigo-700 hover:bg-indigo-50' :
                                'bg-amber-50/80 border-amber-200 text-amber-700 hover:bg-amber-50'
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
                          <td className="py-3.5 px-4 text-right whitespace-nowrap">
                            <div className="inline-flex items-center gap-1">
                              <button
                                onClick={() => setSelectedLead(lead)}
                                title="View Full Details"
                                className="p-1.5 rounded-lg text-slate-500 hover:text-brandPrimary hover:bg-slate-100 transition"
                              >
                                <Eye className="w-4 h-4" />
                              </button>
                              <button 
                                onClick={() => handleDelete(lead._id, lead.name)} 
                                title="Delete Lead"
                                className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition"
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
              
              {/* Table Footer Count */}
              {!leadsLoading && filteredLeads.length > 0 && (
                <div className="px-4 py-3 bg-slate-50/60 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between">
                  <span>Showing <strong className="text-slate-700 font-semibold">{filteredLeads.length}</strong> of {pagination.totalLeads} total leads (Page {pagination.page})</span>
                  <div className="flex items-center gap-3">
                    {statusFilter !== 'All' && (
                      <button
                        onClick={() => setStatusFilter('All')}
                        className="text-brandPrimary hover:underline font-semibold text-xs"
                      >
                        Reset Filter
                      </button>
                    )}
                    {pagination.hasNextPage && (
                      <button
                        onClick={() => {
                          const nextPage = pagination.page + 1;
                          setPagination(prev => ({ ...prev, page: nextPage }));
                          fetchLeads(nextPage);
                        }}
                        className="bg-white border border-slate-200 px-2 py-1 rounded hover:bg-slate-50 text-xs font-semibold transition shadow-2xs"
                      >
                        Load More
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab 2: Performance Analytics View */}
        {activeTab === 'analytics' && (
          <div className="space-y-6 animate-in fade-in duration-150">
            
            {/* Header Action Bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-4 sm:p-5 rounded-xl border border-slate-200/80 shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-brandPrimary/10 border border-brandPrimary/20 flex items-center justify-center text-brandPrimary shrink-0">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                    <span>Performance & Conversion Metrics</span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      Real-Time
                    </span>
                  </h3>
                  <p className="text-xs text-slate-500">
                    Lead conversion pipeline velocity and editorial readership performance.
                  </p>
                </div>
              </div>

              <button
                onClick={fetchAnalytics}
                disabled={analyticsLoading}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/90 text-xs font-semibold transition cursor-pointer ml-auto sm:ml-0"
              >
                <RefreshCw className={`w-3.5 h-3.5 text-brandPrimary ${analyticsLoading ? 'animate-spin' : ''}`} />
                <span>{analyticsLoading ? 'Calculating...' : 'Refresh Metrics'}</span>
              </button>
            </div>

            {/* 4 Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              {/* Card 1: Lead Conversion Rate */}
              <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-2xs">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Conversion Rate</span>
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                </div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {analyticsData?.leads?.conversionRate ?? (totalLeads > 0 ? ((wonLeads / totalLeads) * 100).toFixed(1) : 0)}%
                  </span>
                  <span className="text-xs font-semibold text-emerald-600">Won Deals</span>
                </div>
                <p className="text-xs text-slate-500">
                  {analyticsData?.leads?.wonCount ?? wonLeads} won of {analyticsData?.leads?.total ?? totalLeads} total prospects
                </p>
                <div className="w-full bg-slate-100 h-1.5 rounded-full mt-3 overflow-hidden">
                  <div 
                    className="bg-emerald-500 h-full rounded-full transition-all duration-500" 
                    style={{ width: `${Math.min(100, Math.max(5, analyticsData?.leads?.conversionRate || 0))}%` }}
                  ></div>
                </div>
              </div>

              {/* Card 2: Active Pipeline Volume */}
              <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-2xs">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Active Pipeline</span>
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                </div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {analyticsData?.leads?.pipelineCount ?? inPipelineLeads}
                  </span>
                  <span className="text-xs font-semibold text-blue-600">In Progress</span>
                </div>
                <p className="text-xs text-slate-500">
                  {analyticsData?.leads?.pipelineRate ?? 0}% in Contacted, Qualified, or Proposal
                </p>
                <div className="w-full bg-slate-100 h-1.5 rounded-full mt-3 overflow-hidden">
                  <div 
                    className="bg-blue-500 h-full rounded-full transition-all duration-500" 
                    style={{ width: `${Math.min(100, Math.max(5, analyticsData?.leads?.pipelineRate || 0))}%` }}
                  ></div>
                </div>
              </div>

              {/* Card 3: Total Content Views */}
              <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-2xs">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Article Reads</span>
                  <div className="w-8 h-8 rounded-lg bg-cyan-50 text-brandPrimary flex items-center justify-center shrink-0">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {(analyticsData?.blogs?.totalViews ?? 0).toLocaleString()}
                  </span>
                  <span className="text-xs font-semibold text-brandPrimary">Views</span>
                </div>
                <p className="text-xs text-slate-500">
                  Across {analyticsData?.blogs?.totalPublished ?? 0} published strategies & teardowns
                </p>
                <div className="w-full bg-slate-100 h-1.5 rounded-full mt-3 overflow-hidden">
                  <div 
                    className="bg-brandPrimary h-full rounded-full transition-all duration-500" 
                    style={{ width: `${Math.min(100, (analyticsData?.blogs?.totalViews || 0) > 0 ? 80 : 10)}%` }}
                  ></div>
                </div>
              </div>

              {/* Card 4: Average Readership Depth */}
              <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-2xs">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Avg Reads / Post</span>
                  <div className="w-8 h-8 rounded-lg bg-pink-50 text-brandSecondary flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                </div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {(analyticsData?.blogs?.avgViews ?? 0).toLocaleString()}
                  </span>
                  <span className="text-xs font-semibold text-brandSecondary">Avg Readers</span>
                </div>
                <p className="text-xs text-slate-500">
                  Audience engagement per thought leadership piece
                </p>
                <div className="w-full bg-slate-100 h-1.5 rounded-full mt-3 overflow-hidden">
                  <div 
                    className="bg-brandSecondary h-full rounded-full transition-all duration-500" 
                    style={{ width: `${Math.min(100, (analyticsData?.blogs?.avgViews || 0) > 0 ? 65 : 10)}%` }}
                  ></div>
                </div>
              </div>

            </div>

            {/* Funnel Section: Lead Conversion Stages */}
            <div className="bg-white rounded-xl border border-slate-200/80 shadow-2xs p-5 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
                <div>
                  <h4 className="text-base font-bold text-slate-900 tracking-tight">
                    Client Conversion Funnel
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Prospect progression from inbound inquiry to proposal and won contract.
                  </p>
                </div>
                {analyticsData?.leads?.statusCounts?.Lost > 0 && (
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200 self-start sm:self-auto">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>{analyticsData.leads.statusCounts.Lost} Lost</span>
                  </span>
                )}
              </div>

              {/* Funnel Horizontal Stepper */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {[
                  { stage: 'New', label: '1. Inbound', count: analyticsData?.leads?.statusCounts?.New ?? newLeads, color: 'border-blue-200/80 bg-blue-50/40 text-blue-700' },
                  { stage: 'Contacted', label: '2. Contacted', count: analyticsData?.leads?.statusCounts?.Contacted ?? 0, color: 'border-cyan-200/80 bg-cyan-50/40 text-cyan-700' },
                  { stage: 'Qualified', label: '3. Qualified', count: analyticsData?.leads?.statusCounts?.Qualified ?? 0, color: 'border-amber-200/80 bg-amber-50/40 text-amber-700' },
                  { stage: 'Proposal', label: '4. Proposal', count: analyticsData?.leads?.statusCounts?.Proposal ?? 0, color: 'border-purple-200/80 bg-purple-50/40 text-purple-700' },
                  { stage: 'Won', label: '5. Converted', count: analyticsData?.leads?.statusCounts?.Won ?? wonLeads, color: 'border-emerald-200/80 bg-emerald-50/40 text-emerald-700' }
                ].map((step, idx) => {
                  const total = analyticsData?.leads?.total || totalLeads || 1;
                  const pct = Math.round((step.count / total) * 100);

                  return (
                    <div key={idx} className={`p-3.5 rounded-lg border ${step.color} flex flex-col justify-between`}>
                      <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider mb-1.5">
                        <span>{step.label}</span>
                        <span className="font-extrabold text-sm">{step.count}</span>
                      </div>
                      <div className="text-[11px] text-slate-500 font-medium mb-2">
                        {pct}% of all leads
                      </div>
                      <div className="w-full bg-white/90 h-1.5 rounded-full overflow-hidden border border-slate-200/40">
                        <div 
                          className="h-full rounded-full bg-current transition-all duration-500" 
                          style={{ width: `${Math.max(4, pct)}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 2-Column Deep Dive: Service Demand & Blog Popularity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Left Column: Service Demand Heatmap */}
              <div className="bg-white rounded-xl border border-slate-200/80 shadow-2xs p-5 sm:p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-base font-bold text-slate-900 tracking-tight flex items-center gap-2">
                      <span>Service Demand Breakdown</span>
                      <Flame className="w-4 h-4 text-amber-500" />
                    </h4>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Client Requests
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mb-5">
                    Distribution of client inquiries across DMDY service areas.
                  </p>

                  <div className="space-y-3.5">
                    {(analyticsData?.leads?.serviceBreakdown || []).slice(0, 6).map((item, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-slate-800 truncate max-w-[240px] sm:max-w-xs">
                            {item.service}
                          </span>
                          <span className="font-bold text-slate-600">
                            {item.count} ({item.percentage}%)
                          </span>
                        </div>
                        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                          <div 
                            className="h-full rounded-full bg-gradient-to-r from-brandPrimary to-brandSecondary transition-all duration-500"
                            style={{ width: `${Math.min(100, Math.max(6, item.percentage))}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}

                    {(!analyticsData?.leads?.serviceBreakdown || analyticsData.leads.serviceBreakdown.length === 0) && (
                      <div className="py-8 text-center text-slate-400 text-xs">
                        No service demand data yet. Inbound inquiries will populate this breakdown automatically.
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Column: Blog Popularity Leaderboard */}
              <div className="bg-white rounded-xl border border-slate-200/80 shadow-2xs p-5 sm:p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-base font-bold text-slate-900 tracking-tight flex items-center gap-2">
                      <span>Top Read Playbooks</span>
                      <Award className="w-4 h-4 text-brandPrimary" />
                    </h4>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Readership
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mb-5">
                    Top articles driving audience engagement and authority.
                  </p>

                  <div className="space-y-2.5">
                    {(analyticsData?.blogs?.topBlogs || []).map((blog, idx) => (
                      <div 
                        key={blog._id} 
                        className="p-2.5 rounded-lg border border-slate-100 hover:border-slate-200 hover:bg-slate-50/60 transition-colors flex items-center justify-between gap-3"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className="w-5 h-5 rounded-md flex items-center justify-center text-xs font-bold shrink-0 bg-slate-100 text-slate-600 border border-slate-200">
                            {idx + 1}
                          </span>
                          <div className="min-w-0">
                            <h5 className="text-xs sm:text-sm font-semibold text-slate-800 hover:text-brandPrimary truncate">
                              <a href={`/blog/${blog.slug}`} target="_blank" rel="noopener noreferrer">
                                {blog.title}
                              </a>
                            </h5>
                            <div className="flex items-center gap-2 text-[11px] text-slate-400 mt-0.5">
                              {blog.tags && blog.tags[0] && (
                                <span className="text-brandPrimary font-medium">#{blog.tags[0]}</span>
                              )}
                              <span>&bull;</span>
                              <span>{new Date(blog.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <span className="inline-flex items-center gap-1 font-semibold text-xs text-slate-700">
                            <Eye className="w-3.5 h-3.5 text-brandPrimary" />
                            {(blog.views || 0).toLocaleString()}
                          </span>
                          <a
                            href={`/blog/${blog.slug}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-brandPrimary p-1"
                            title="View Article"
                          >
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    ))}

                    {(!analyticsData?.blogs?.topBlogs || analyticsData.blogs.topBlogs.length === 0) && (
                      <div className="py-8 text-center text-slate-400 text-xs">
                        No articles published yet. Publish insights in Blog Manager to see readership rankings.
                      </div>
                    )}
                  </div>
                </div>

                {/* Popular Topics / Tags Pill Cloud */}
                {analyticsData?.blogs?.popularTags && analyticsData.blogs.popularTags.length > 0 && (
                  <div className="mt-5 pt-3 border-t border-slate-100">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Popular Focus Topics
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {analyticsData.blogs.popularTags.map((tagItem) => (
                        <span 
                          key={tagItem.tag}
                          className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-xs font-medium flex items-center gap-1.5 border border-slate-200/60"
                        >
                          <span>#{tagItem.tag}</span>
                          <span className="text-brandPrimary font-bold">({tagItem.totalViews})</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

            </div>

          </div>
        )}

        {/* Tab 3: Blog Posts View */}
        {activeTab === 'blogs' && <BlogManager />}
      </div>

      {/* Lead Details Modal */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-4 animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-xl border border-slate-200">
            
            {/* Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-slate-100 sticky top-0 bg-white/95 backdrop-blur-sm z-10">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">Lead Details</h3>
                <p className="text-xs text-slate-400 mt-0.5">Submitted on {new Date(selectedLead.createdAt).toLocaleString()}</p>
              </div>
              <button 
                onClick={() => setSelectedLead(null)}
                className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 space-y-5 text-sm">
              {/* Top Info Cards */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Prospect</div>
                  <div className="text-sm font-bold text-slate-900 truncate">{selectedLead.name}</div>
                </div>

                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Lifecycle Status</div>
                  <select 
                    value={selectedLead.status}
                    onChange={(e) => handleStatusChange(selectedLead._id, e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-lg px-2 py-1 text-xs font-semibold text-slate-800 outline-none"
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

              {/* Contact & Company Details */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-2.5">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Contact Information</div>
                
                <div className="flex items-center justify-between text-xs sm:text-sm py-1 border-b border-slate-200/50">
                  <span className="text-slate-500 flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-slate-400" /> Email:</span>
                  <a href={`mailto:${selectedLead.email}`} className="font-semibold text-brandPrimary hover:underline">{selectedLead.email}</a>
                </div>

                <div className="flex items-center justify-between text-xs sm:text-sm py-1 border-b border-slate-200/50">
                  <span className="text-slate-500 flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-slate-400" /> Phone:</span>
                  <a href={`tel:${selectedLead.phone}`} className="font-semibold text-slate-800 hover:text-brandPrimary">{selectedLead.phone}</a>
                </div>

                {selectedLead.company && (
                  <div className="flex items-center justify-between text-xs sm:text-sm py-1 border-b border-slate-200/50">
                    <span className="text-slate-500 flex items-center gap-1.5"><Building2 className="w-3.5 h-3.5 text-slate-400" /> Company:</span>
                    <span className="font-semibold text-slate-800">{selectedLead.company}</span>
                  </div>
                )}

                {selectedLead.website && (
                  <div className="flex items-center justify-between text-xs sm:text-sm py-1 border-b border-slate-200/50">
                    <span className="text-slate-500 flex items-center gap-1.5"><Globe className="w-3.5 h-3.5 text-slate-400" /> Website:</span>
                    <a href={selectedLead.website.startsWith('http') ? selectedLead.website : `https://${selectedLead.website}`} target="_blank" rel="noopener noreferrer" className="font-semibold text-brandPrimary hover:underline flex items-center gap-1">
                      {selectedLead.website} <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}

                <div className="flex items-center justify-between text-xs sm:text-sm pt-0.5">
                  <span className="text-slate-500">Service Goal:</span>
                  <span className="font-semibold text-slate-800 bg-white px-2 py-0.5 rounded border border-slate-200 text-xs">{selectedLead.service || 'Not specified'}</span>
                </div>
              </div>

              {/* Message / Requirements */}
              <div>
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Client Note / Challenge</div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">
                  {selectedLead.message ? selectedLead.message : <span className="italic text-slate-400">No message provided.</span>}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => handleDelete(selectedLead._id, selectedLead.name)}
                  className="text-xs font-semibold text-red-600 hover:text-red-700 transition"
                >
                  Delete Lead
                </button>
                <div className="flex items-center gap-2">
                  <a
                    href={`mailto:${selectedLead.email}?subject=DMDY Consultation Follow-up`}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-brandPrimary text-white text-xs font-semibold hover:bg-brandPrimary/90 transition shadow-2xs"
                  >
                    <Mail className="w-3.5 h-3.5" /> Email Client
                  </a>
                  <button
                    onClick={() => setSelectedLead(null)}
                    className="px-3.5 py-2 rounded-lg text-slate-600 font-semibold hover:bg-slate-100 transition text-xs border border-slate-200"
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
