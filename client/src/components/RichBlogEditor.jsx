import React, { useState, useRef } from 'react';
import {
  Bold,
  Italic,
  Strikethrough,
  Code,
  List,
  ListOrdered,
  CheckSquare,
  Quote,
  Link as LinkIcon,
  Image as ImageIcon,
  Table as TableIcon,
  Minus,
  Undo,
  Redo,
  Maximize2,
  Minimize2,
  Eye,
  Columns,
  Sparkles,
  X
} from 'lucide-react';
import MarkdownRenderer from './MarkdownRenderer';

const QUICK_TEMPLATES = [
  {
    name: '💡 Pro Growth Tip Callout',
    snippet: `> 💡 **Pro Growth Tip:** Focus on high-intent conversion pages before scaling top-of-funnel traffic for maximum return on investment.`,
  },
  {
    name: '🚀 Key Takeaways Box',
    snippet: `### 🎯 Key Takeaways\n- **Point 1:** Data-driven decisions outperform intuition.\n- **Point 2:** Technical SEO foundations accelerate organic momentum.\n- **Point 3:** Consistent testing compounds into sustainable revenue.`,
  },
  {
    name: '📊 Comparison Table',
    snippet: `| Feature / Metric | Traditional Marketing | DMDY Growth Engine |\n| :--- | :--- | :--- |\n| Attribution | Siloed & Estimations | Multi-Touch Revenue Modeling |\n| Optimization Speed | Monthly Check-ins | Continuous Real-Time Testing |\n| Target Outcome | Vanity Impressions | Verifiable Inbound Pipeline |`,
  },
  {
    name: '❓ FAQ Section',
    snippet: `### Frequently Asked Questions\n\n**Q: How fast can we expect results from this framework?**\nA: Typically within the first 30 to 60 days of baseline setup and pipeline attribution.\n\n**Q: Does this strategy apply to both B2B and D2C brands?**\nA: Yes, our omnichannel framework adapts to both high-ticket consultative sales and volume e-commerce transactions.`,
  },
  {
    name: '💻 Code Snippet Block',
    snippet: `\`\`\`javascript\n// DMDY Custom Attribution Event\nwindow.dataLayer = window.dataLayer || [];\nwindow.dataLayer.push({\n  event: 'lead_conversion',\n  service_category: 'performance_marketing'\n});\n\`\`\``,
  },
];

const MAX_HISTORY_SIZE = 50;

const RichBlogEditor = ({ value = '', onChange, placeholder = 'Write your blog post article here...' }) => {
  const textareaRef = useRef(null);
  const [viewMode, setViewMode] = useState('split'); // 'write' | 'split' | 'preview'
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showLinkModal, setShowLinkModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [linkData, setLinkData] = useState({ text: '', url: '' });
  const [imageData, setImageData] = useState({ alt: '', url: '', caption: '' });
  const [showTemplates, setShowTemplates] = useState(false);

  // Prevent accidental data loss on tab close/refresh
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (value !== '') {
        e.preventDefault();
        e.returnValue = '';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [value]);

  // Undo / Redo history stack
  const [history, setHistory] = useState(() => [value || '']);
  const [historyIndex, setHistoryIndex] = useState(0);

  const updateContent = (newText, addToHistory = true) => {
    onChange(newText);
    if (addToHistory) {
      setHistory((prev) => {
        const next = prev.slice(0, historyIndex + 1);
        if (next.length >= MAX_HISTORY_SIZE) {
          next.shift();
        }
        next.push(newText);
        return next;
      });
      setHistoryIndex((prev) => prev + 1);
    }
  };

  const handleUndo = () => {
    if (historyIndex > 0) {
      const newIdx = historyIndex - 1;
      setHistoryIndex(newIdx);
      onChange(history[newIdx]);
    }
  };

  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      const newIdx = historyIndex + 1;
      setHistoryIndex(newIdx);
      onChange(history[newIdx]);
    }
  };

  // Helper to wrap selected text or insert snippet at cursor
  const insertFormatting = (prefix, suffix = '', defaultText = '') => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const currentVal = textarea.value;
    const selectedText = currentVal.substring(start, end) || defaultText;

    const replacement = `${prefix}${selectedText}${suffix}`;
    const newContent = currentVal.substring(0, start) + replacement + currentVal.substring(end);

    updateContent(newContent);

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(
        start + prefix.length,
        start + prefix.length + selectedText.length
      );
    }, 10);
  };

  // Insert at new line
  const insertBlock = (blockText) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const currentVal = textarea.value;

    const needsPreNewline = start > 0 && currentVal[start - 1] !== '\n';
    const needsPostNewline = end < currentVal.length && currentVal[end] !== '\n';

    const insertString = `${needsPreNewline ? '\n\n' : ''}${blockText}${needsPostNewline ? '\n\n' : '\n'}`;
    const newContent = currentVal.substring(0, start) + insertString + currentVal.substring(end);

    updateContent(newContent);

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + insertString.length, start + insertString.length);
    }, 10);
  };

  // Keyboard shortcut listener
  const handleKeyDown = (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'b') {
      e.preventDefault();
      insertFormatting('**', '**', 'bold text');
    } else if ((e.ctrlKey || e.metaKey) && e.key === 'i') {
      e.preventDefault();
      insertFormatting('*', '*', 'italic text');
    } else if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      openLinkModal();
    } else if ((e.ctrlKey || e.metaKey) && e.key === 'z') {
      e.preventDefault();
      handleUndo();
    } else if ((e.ctrlKey || e.metaKey) && e.key === 'y') {
      e.preventDefault();
      handleRedo();
    } else if (e.key === 'Tab') {
      e.preventDefault();
      insertFormatting('  ', '');
    }
  };

  const openLinkModal = () => {
    const textarea = textareaRef.current;
    const selectedText = textarea
      ? textarea.value.substring(textarea.selectionStart, textarea.selectionEnd)
      : '';
    setLinkData({ text: selectedText, url: '' });
    setShowLinkModal(true);
  };

  const submitLinkModal = (e) => {
    e.preventDefault();
    if (!linkData.url) return;
    const text = linkData.text.trim() || linkData.url;
    insertFormatting(`[${text}](`, `)`, linkData.url);
    setShowLinkModal(false);
  };

  const openImageModal = () => {
    setImageData({ alt: '', url: '', caption: '' });
    setShowImageModal(true);
  };

  const submitImageModal = (e) => {
    e.preventDefault();
    if (!imageData.url) return;
    const captionSnippet = imageData.caption ? ` "${imageData.caption}"` : '';
    insertBlock(`![${imageData.alt || 'Illustration'}](${imageData.url}${captionSnippet})`);
    setShowImageModal(false);
  };

  // Word & Character count calculation
  const trimmed = (value || '').trim();
  const wordCount = trimmed ? trimmed.split(/\s+/).length : 0;
  const charCount = (value || '').length;
  const readTime = Math.max(1, Math.ceil(wordCount / 200));

  return (
    <div
      className={`flex flex-col bg-white rounded-2xl border border-slate-200 transition-all ${
        isFullscreen
          ? 'fixed inset-0 z-[999999] rounded-none border-none h-screen w-screen p-4 sm:p-6 bg-slate-900 text-slate-100'
          : 'relative shadow-xs min-h-[500px]'
      }`}
    >
      {/* 1. TOP TOOLBAR */}
      <div
        className={`flex flex-wrap items-center justify-between gap-2 p-2 sm:p-3 border-b border-slate-200 sticky top-0 z-20 backdrop-blur-md rounded-t-2xl ${
          isFullscreen ? 'bg-slate-900/95 border-slate-800' : 'bg-slate-50/95'
        }`}
      >
        {/* Left Toolbar: Buttons */}
        <div className="flex flex-wrap items-center gap-1 sm:gap-1.5">
          {/* History */}
          <div className="flex items-center bg-white border border-slate-200 rounded-lg p-0.5 shadow-2xs">
            <button
              type="button"
              onClick={handleUndo}
              disabled={historyIndex === 0}
              title="Undo (Ctrl+Z)"
              className="p-1.5 rounded-md hover:bg-slate-100 disabled:opacity-30 disabled:hover:bg-transparent text-slate-600 transition"
            >
              <Undo className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={handleRedo}
              disabled={historyIndex === history.length - 1}
              title="Redo (Ctrl+Y)"
              className="p-1.5 rounded-md hover:bg-slate-100 disabled:opacity-30 disabled:hover:bg-transparent text-slate-600 transition"
            >
              <Redo className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="w-[1px] h-5 bg-slate-200 mx-0.5 hidden sm:block"></div>

          {/* Headings */}
          <div className="flex items-center bg-white border border-slate-200 rounded-lg p-0.5 shadow-2xs">
            <button
              type="button"
              onClick={() => insertFormatting('# ', '', 'Main Heading')}
              title="Heading 1"
              className="px-2 py-1 text-xs font-extrabold rounded-md hover:bg-slate-100 text-slate-700 transition"
            >
              H1
            </button>
            <button
              type="button"
              onClick={() => insertFormatting('## ', '', 'Section Title')}
              title="Heading 2"
              className="px-2 py-1 text-xs font-bold rounded-md hover:bg-slate-100 text-slate-700 transition"
            >
              H2
            </button>
            <button
              type="button"
              onClick={() => insertFormatting('### ', '', 'Subsection Title')}
              title="Heading 3"
              className="px-2 py-1 text-xs font-semibold rounded-md hover:bg-slate-100 text-slate-700 transition"
            >
              H3
            </button>
          </div>

          <div className="w-[1px] h-5 bg-slate-200 mx-0.5 hidden sm:block"></div>

          {/* Basic Text Formatting */}
          <div className="flex items-center bg-white border border-slate-200 rounded-lg p-0.5 shadow-2xs">
            <button
              type="button"
              onClick={() => insertFormatting('**', '**', 'bold text')}
              title="Bold (Ctrl+B)"
              className="p-1.5 rounded-md hover:bg-slate-100 text-slate-700 transition font-bold"
            >
              <Bold className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => insertFormatting('*', '*', 'italic text')}
              title="Italic (Ctrl+I)"
              className="p-1.5 rounded-md hover:bg-slate-100 text-slate-700 transition italic"
            >
              <Italic className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => insertFormatting('~~', '~~', 'strikethrough')}
              title="Strikethrough"
              className="p-1.5 rounded-md hover:bg-slate-100 text-slate-700 transition"
            >
              <Strikethrough className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => insertFormatting('==', '==', 'highlighted text')}
              title="Highlight"
              className="px-1.5 py-1 text-[11px] font-bold rounded-md hover:bg-amber-100 text-amber-800 transition"
            >
              Mark
            </button>
            <button
              type="button"
              onClick={() => insertFormatting('`', '`', 'code')}
              title="Inline Code"
              className="p-1.5 rounded-md hover:bg-slate-100 text-slate-700 transition font-mono"
            >
              <Code className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="w-[1px] h-5 bg-slate-200 mx-0.5 hidden sm:block"></div>

          {/* Lists & Quotes */}
          <div className="flex items-center bg-white border border-slate-200 rounded-lg p-0.5 shadow-2xs">
            <button
              type="button"
              onClick={() => insertFormatting('- ', '', 'List item')}
              title="Bulleted List"
              className="p-1.5 rounded-md hover:bg-slate-100 text-slate-700 transition"
            >
              <List className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => insertFormatting('1. ', '', 'Numbered item')}
              title="Numbered List"
              className="p-1.5 rounded-md hover:bg-slate-100 text-slate-700 transition"
            >
              <ListOrdered className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => insertFormatting('- [ ] ', '', 'Task to complete')}
              title="Checklist / Task List"
              className="p-1.5 rounded-md hover:bg-slate-100 text-slate-700 transition"
            >
              <CheckSquare className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => insertFormatting('> ', '', 'Insightful quote or statement')}
              title="Blockquote"
              className="p-1.5 rounded-md hover:bg-slate-100 text-slate-700 transition"
            >
              <Quote className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="w-[1px] h-5 bg-slate-200 mx-0.5 hidden sm:block"></div>

          {/* Media & Inserts */}
          <div className="flex items-center bg-white border border-slate-200 rounded-lg p-0.5 shadow-2xs">
            <button
              type="button"
              onClick={openLinkModal}
              title="Insert Link (Ctrl+K)"
              className="p-1.5 rounded-md hover:bg-slate-100 text-slate-700 transition"
            >
              <LinkIcon className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={openImageModal}
              title="Insert Image"
              className="p-1.5 rounded-md hover:bg-slate-100 text-slate-700 transition"
            >
              <ImageIcon className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() =>
                insertBlock(
                  `| Strategy | Target ROAS | Time to Value |\n| :--- | :--- | :--- |\n| Paid Search (Google Ads) | 4.5x - 7.0x | 14 - 30 Days |\n| Organic SEO Engine | 10x+ Compound | 90 - 180 Days |\n| Meta Retargeting | 5.0x - 8.5x | Immediate |`
                )
              }
              title="Insert Table"
              className="p-1.5 rounded-md hover:bg-slate-100 text-slate-700 transition"
            >
              <TableIcon className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => insertBlock('---')}
              title="Insert Divider Line"
              className="p-1.5 rounded-md hover:bg-slate-100 text-slate-700 transition"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Quick Agency Templates Popover */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowTemplates(!showTemplates)}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-gradient-to-r from-[#00AED6]/10 to-[#E6007A]/10 text-slate-800 hover:text-brandPrimary text-xs font-bold border border-brandPrimary/20 transition cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#E6007A]" />
              <span className="hidden md:inline">Templates</span>
            </button>

            {showTemplates && (
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-200 p-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2.5 py-1.5">
                  Insert Ready Templates
                </div>
                {QUICK_TEMPLATES.map((tmpl, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      insertBlock(tmpl.snippet);
                      setShowTemplates(false);
                    }}
                    className="w-full text-left px-2.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 rounded-lg transition"
                  >
                    {tmpl.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Toolbar: View Mode & Fullscreen */}
        <div className="flex items-center gap-2">
          {/* View Mode Toggle */}
          <div className="inline-flex rounded-lg border border-slate-200 bg-white p-0.5 text-xs font-bold shadow-2xs">
            <button
              type="button"
              onClick={() => setViewMode('write')}
              className={`px-2.5 py-1 rounded-md transition ${
                viewMode === 'write' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Write
            </button>
            <button
              type="button"
              onClick={() => setViewMode('split')}
              className={`hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-md transition ${
                viewMode === 'split' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Columns className="w-3 h-3" /> Split
            </button>
            <button
              type="button"
              onClick={() => setViewMode('preview')}
              className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md transition ${
                viewMode === 'preview' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Eye className="w-3 h-3" /> Preview
            </button>
          </div>

          {/* Fullscreen Toggle */}
          <button
            type="button"
            onClick={() => setIsFullscreen(!isFullscreen)}
            title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen Distraction-Free Mode'}
            className="p-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 transition"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* 2. MAIN CONTENT AREA */}
      <div className={`flex-1 grid ${viewMode === 'split' ? 'grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-200' : 'grid-cols-1'} overflow-hidden min-h-[420px]`}>
        {/* Editor Pane (Shown in 'write' and 'split' modes) */}
        {(viewMode === 'write' || viewMode === 'split') && (
          <div className="relative flex flex-col h-full bg-white">
            <textarea
              ref={textareaRef}
              value={value}
              onChange={(e) => updateContent(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={placeholder}
              className={`w-full flex-1 p-4 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed text-slate-900 placeholder-slate-400 resize-none focus:outline-none focus:ring-0 ${
                isFullscreen ? 'bg-slate-900 text-slate-100' : 'bg-white'
              }`}
              style={{ minHeight: isFullscreen ? 'calc(100vh - 160px)' : '420px' }}
            />
          </div>
        )}

        {/* Live Preview Pane (Shown in 'preview' and 'split' modes) */}
        {(viewMode === 'preview' || viewMode === 'split') && (
          <div
            className={`p-4 sm:p-6 overflow-y-auto ${
              isFullscreen ? 'bg-slate-950 text-slate-100' : 'bg-slate-50/70'
            }`}
            style={{ maxHeight: isFullscreen ? 'calc(100vh - 160px)' : '550px' }}
          >
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200 text-xs font-bold text-slate-400 uppercase tracking-wider">
              <span>Live Article Preview</span>
              <span className="text-[11px] text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                Exact Reader Output
              </span>
            </div>
            <div className="prose prose-slate max-w-none">
              <MarkdownRenderer content={value} />
            </div>
          </div>
        )}
      </div>

      {/* 3. BOTTOM FOOTER BAR WITH STATS */}
      <div
        className={`flex flex-wrap items-center justify-between gap-3 px-4 py-2.5 border-t border-slate-200 text-xs text-slate-500 rounded-b-2xl ${
          isFullscreen ? 'bg-slate-900 border-slate-800 text-slate-400' : 'bg-slate-50'
        }`}
      >
        <div className="flex items-center gap-4">
          <span className="font-semibold text-slate-700">
            {wordCount} <span className="font-normal text-slate-400">words</span>
          </span>
          <span>&bull;</span>
          <span className="font-semibold text-slate-700">
            {charCount} <span className="font-normal text-slate-400">characters</span>
          </span>
          <span>&bull;</span>
          <span className="font-semibold text-brandPrimary">
            ~{readTime} min read
          </span>
        </div>

        <div className="flex items-center gap-2 text-[11px] text-slate-400">
          <span>Shortcuts: <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded font-mono">Ctrl+B</kbd> Bold &bull; <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded font-mono">Ctrl+K</kbd> Link</span>
        </div>
      </div>

      {/* ======================================================== */}
      {/* MODAL A: INSERT LINK                                     */}
      {/* ======================================================== */}
      {showLinkModal && (
        <div className="fixed inset-0 z-[9999999] flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-4 animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl w-full max-w-md p-5 sm:p-6 shadow-2xl border border-slate-100">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <LinkIcon className="w-4 h-4 text-brandPrimary" /> Insert Hyperlink
              </h4>
              <button
                type="button"
                onClick={() => setShowLinkModal(false)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={submitLinkModal} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Display Text</label>
                <input
                  type="text"
                  placeholder="e.g. Schedule a Growth Consultation"
                  value={linkData.text}
                  onChange={(e) => setLinkData({ ...linkData, text: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-brandPrimary"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Destination URL *</label>
                <input
                  required
                  type="url"
                  placeholder="https://dmdy.in/contact"
                  value={linkData.url}
                  onChange={(e) => setLinkData({ ...linkData, url: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-brandPrimary"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowLinkModal(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 text-white hover:bg-slate-800 shadow-sm"
                >
                  Insert Link
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL B: INSERT IMAGE                                    */}
      {/* ======================================================== */}
      {showImageModal && (
        <div className="fixed inset-0 z-[9999999] flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-4 animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl w-full max-w-md p-5 sm:p-6 shadow-2xl border border-slate-100">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-brandPrimary" /> Insert Inline Article Image
              </h4>
              <button
                type="button"
                onClick={() => setShowImageModal(false)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={submitImageModal} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Image URL *</label>
                <input
                  required
                  type="url"
                  placeholder="https://images.unsplash.com/..."
                  value={imageData.url}
                  onChange={(e) => setImageData({ ...imageData, url: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-brandPrimary"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Alt Text (Accessibility & SEO)</label>
                <input
                  type="text"
                  placeholder="e.g. Performance marketing dashboard metrics graph"
                  value={imageData.alt}
                  onChange={(e) => setImageData({ ...imageData, alt: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-brandPrimary"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Optional Caption Below Image</label>
                <input
                  type="text"
                  placeholder="e.g. Figure 1: 4.8x ROAS progression across 90 days"
                  value={imageData.caption}
                  onChange={(e) => setImageData({ ...imageData, caption: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-brandPrimary"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowImageModal(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 text-white hover:bg-slate-800 shadow-sm"
                >
                  Insert Image
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default RichBlogEditor;
