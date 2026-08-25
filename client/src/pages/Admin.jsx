import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { LogOut, Trash2, LayoutDashboard, FileText } from 'lucide-react';
import api from '../utils/api';
import BlogManager from '../components/BlogManager';

const Admin = () => {
  const { user, loading, logout } = useContext(AuthContext);
  const [leads, setLeads] = useState([]);
  const [activeTab, setActiveTab] = useState('leads'); // 'leads' or 'blogs'
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/admin/login');
    }
    
    if (user && activeTab === 'leads') {
      fetchLeads();
    }
  }, [user, loading, navigate, activeTab]);

  const fetchLeads = async () => {
    try {
      const res = await api.get('/api/leads');
      setLeads(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      await api.put(`/api/leads/${id}`, { status: newStatus });
      fetchLeads();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this lead?')) {
      try {
        await api.delete(`/api/leads/${id}`);
        fetchLeads();
      } catch (err) {
        console.error(err);
      }
    }
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center pt-20">Loading...</div>;
  if (!user) return null;

  return (
    <div className="pt-28 pb-12 container mx-auto px-6 min-h-screen bg-slate-50 flex flex-col md:flex-row gap-8">
      {/* Sidebar Navigation */}
      <div className="w-full md:w-64 shrink-0">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 sticky top-28">
          <h2 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 px-3">Admin Menu</h2>
          <nav className="space-y-1">
            <button 
              onClick={() => setActiveTab('leads')}
              className={`w-full flex items-center px-3 py-2.5 rounded-lg font-medium transition ${activeTab === 'leads' ? 'bg-brandPrimary/10 text-brandPrimary' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <LayoutDashboard className="w-5 h-5 mr-3" />
              Lead Management
            </button>
            <button 
              onClick={() => setActiveTab('blogs')}
              className={`w-full flex items-center px-3 py-2.5 rounded-lg font-medium transition ${activeTab === 'blogs' ? 'bg-brandPrimary/10 text-brandPrimary' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <FileText className="w-5 h-5 mr-3" />
              Blog Posts
            </button>
          </nav>

          <div className="mt-8 pt-4 border-t border-slate-100">
            <button onClick={logout} className="w-full flex items-center px-3 py-2.5 rounded-lg font-medium text-red-600 hover:bg-red-50 transition">
              <LogOut className="w-5 h-5 mr-3" /> Logout
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 min-w-0">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            {activeTab === 'leads' ? 'Lead Management' : 'Blog Management'}
          </h1>
          <p className="text-slate-500 mt-1">
            {activeTab === 'leads' ? 'View and manage contact requests.' : 'Create, edit, and publish blog articles.'}
          </p>
        </div>

        {activeTab === 'leads' && (
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-200 text-slate-700">
                    <th className="p-4 font-semibold whitespace-nowrap">Name</th>
                    <th className="p-4 font-semibold whitespace-nowrap">Service</th>
                    <th className="p-4 font-semibold whitespace-nowrap">Contact</th>
                    <th className="p-4 font-semibold whitespace-nowrap">Status</th>
                    <th className="p-4 font-semibold whitespace-nowrap text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {leads.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="p-8 text-center text-slate-500">No leads found.</td>
                    </tr>
                  ) : (
                    leads.map(lead => (
                      <tr key={lead._id} className="border-b border-slate-100 hover:bg-slate-50 transition">
                        <td className="p-4">
                          <div className="font-semibold text-slate-900">{lead.name}</div>
                          <div className="text-sm text-slate-500">{new Date(lead.createdAt).toLocaleDateString()}</div>
                        </td>
                        <td className="p-4 text-slate-700">{lead.service}</td>
                        <td className="p-4">
                          <div className="text-sm"><a href={`mailto:${lead.email}`} className="text-brandPrimary hover:underline">{lead.email}</a></div>
                          <div className="text-sm text-slate-600">{lead.phone}</div>
                        </td>
                        <td className="p-4">
                          <select 
                            value={lead.status}
                            onChange={(e) => handleStatusChange(lead._id, e.target.value)}
                            className={`bg-white border border-slate-300 rounded px-2 py-1 text-sm outline-none shadow-sm focus:border-brandPrimary focus:ring-1 focus:ring-brandPrimary ${
                              lead.status === 'New' ? 'text-blue-600 font-medium' : 
                              lead.status === 'Won' ? 'text-green-600 font-medium' : 
                              lead.status === 'Lost' ? 'text-red-600 font-medium' : 'text-yellow-600 font-medium'
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
                        <td className="p-4 text-right">
                          <button onClick={() => handleDelete(lead._id)} className="text-red-500 hover:text-red-700 transition p-2 rounded-full hover:bg-red-50">
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'blogs' && <BlogManager />}
      </div>
    </div>
  );
};

export default Admin;
