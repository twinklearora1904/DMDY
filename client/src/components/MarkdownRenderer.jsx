import React, { useState } from 'react';
import { Copy, Check, Lightbulb, AlertTriangle, Info, Quote, Terminal } from 'lucide-react';

const CodeBlock = ({ code, language }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-6 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-lg text-slate-200">
      <div className="flex items-center justify-between px-4 py-2 bg-slate-900/90 border-b border-slate-800 text-xs text-slate-400 font-mono">
        <span className="flex items-center gap-1.5 uppercase font-semibold text-slate-300">
          <Terminal className="w-3.5 h-3.5 text-[#00AED6]" />
          {language || 'code'}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1 text-[11px] py-1 px-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
        >
          {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre className="p-4 text-xs sm:text-sm font-mono overflow-x-auto leading-relaxed text-slate-100">
        <code>{code}</code>
      </pre>
    </div>
  );
};

const formatInlineText = (text) => {
  if (!text) return null;

  // Regex to match images, links, bold, italic, code, strikethrough, highlight
  const regex = /(!?\[[^\]]*\]\([^)]+\)|\*\*[^*]+\*\*|~~[^~]+~~|==[^=]+==|`[^`]+`|\*[^*]+\*)/g;
  const parts = text.split(regex);

  return parts.map((part, index) => {
    if (!part) return null;

    // Image: ![alt](url "optional caption")
    if (part.startsWith('![') && part.includes('](') && part.endsWith(')')) {
      const imgMatch = part.match(/^!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]+)")?\)$/);
      if (imgMatch) {
        const alt = imgMatch[1];
        const src = imgMatch[2];
        const caption = imgMatch[3] || alt;
        return (
          <figure key={index} className="my-6">
            <img
              src={src}
              alt={alt || 'Blog illustration'}
              className="w-full rounded-2xl border border-slate-200 shadow-md max-h-[500px] object-cover"
              loading="lazy"
            />
            {caption && (
              <figcaption className="text-center text-xs text-slate-400 mt-2 italic">
                {caption}
              </figcaption>
            )}
          </figure>
        );
      }
    }

    // Link: [text](url)
    if (part.startsWith('[') && part.includes('](') && part.endsWith(')')) {
      const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (linkMatch) {
        return (
          <a
            key={index}
            href={linkMatch[2]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00AED6] hover:text-[#0092b3] underline underline-offset-2 font-semibold transition"
          >
            {linkMatch[1]}
          </a>
        );
      }
    }

    // Bold: **text**
    if (part.startsWith('**') && part.endsWith('**') && part.length >= 4) {
      return (
        <strong key={index} className="font-extrabold text-slate-900">
          {part.slice(2, -2)}
        </strong>
      );
    }

    // Strikethrough: ~~text~~
    if (part.startsWith('~~') && part.endsWith('~~') && part.length >= 4) {
      return (
        <span key={index} className="line-through text-slate-400">
          {part.slice(2, -2)}
        </span>
      );
    }

    // Highlight: ==text==
    if (part.startsWith('==') && part.endsWith('==') && part.length >= 4) {
      return (
        <mark key={index} className="bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded font-medium">
          {part.slice(2, -2)}
        </mark>
      );
    }

    // Inline Code: `code`
    if (part.startsWith('`') && part.endsWith('`') && part.length >= 2) {
      return (
        <code
          key={index}
          className="px-1.5 py-0.5 rounded-md bg-slate-100 text-[#E6007A] text-xs font-mono border border-slate-200"
        >
          {part.slice(1, -1)}
        </code>
      );
    }

    // Italic: *text*
    if (part.startsWith('*') && part.endsWith('*') && part.length >= 2) {
      return (
        <em key={index} className="italic text-slate-800">
          {part.slice(1, -1)}
        </em>
      );
    }

    return part;
  });
};

const MarkdownRenderer = ({ content }) => {
  if (!content) {
    return (
      <div className="py-8 text-center text-slate-400 text-sm italic">
        No content to preview yet. Start typing your article...
      </div>
    );
  }

  const lines = content.split('\n');
  const elements = [];
  let i = 0;

  while (i < lines.length) {
    const rawLine = lines[i];
    const trimmed = rawLine.trim();

    // 1. Code blocks (```language ... ```)
    if (trimmed.startsWith('```')) {
      const language = trimmed.slice(3).trim();
      const codeLines = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      elements.push({
        type: 'code',
        code: codeLines.join('\n'),
        language,
      });
      i++;
      continue;
    }

    // 2. Empty lines
    if (!trimmed) {
      i++;
      continue;
    }

    // 3. Horizontal rule (--- or ***)
    if (/^(-{3,}|\*{3,})$/.test(trimmed)) {
      elements.push({ type: 'hr' });
      i++;
      continue;
    }

    // 4. Headings
    if (trimmed.startsWith('#### ')) {
      elements.push({ type: 'h4', text: trimmed.replace(/^####\s+/, '') });
      i++;
      continue;
    }
    if (trimmed.startsWith('### ')) {
      elements.push({ type: 'h3', text: trimmed.replace(/^###\s+/, '') });
      i++;
      continue;
    }
    if (trimmed.startsWith('## ')) {
      elements.push({ type: 'h2', text: trimmed.replace(/^##\s+/, '') });
      i++;
      continue;
    }
    if (trimmed.startsWith('# ')) {
      elements.push({ type: 'h1', text: trimmed.replace(/^#\s+/, '') });
      i++;
      continue;
    }

    // 5. Blockquote & Callouts (> ...)
    if (trimmed.startsWith('>')) {
      const quoteLines = [];
      while (i < lines.length && lines[i].trim().startsWith('>')) {
        quoteLines.push(lines[i].trim().replace(/^>\s?/, ''));
        i++;
      }
      const quoteText = quoteLines.join('\n');
      
      // Check for Callout types
      if (/^\[!TIP\]|💡|pro tip|tip:/i.test(quoteText)) {
        elements.push({
          type: 'callout-tip',
          text: quoteText.replace(/^(\[!TIP\]|💡|pro tip:?|tip:?)\s*/i, ''),
        });
      } else if (/^\[!WARNING\]|⚠️|warning:|caution:/i.test(quoteText)) {
        elements.push({
          type: 'callout-warning',
          text: quoteText.replace(/^(\[!WARNING\]|⚠️|warning:?|caution:?)\s*/i, ''),
        });
      } else if (/^\[!NOTE\]|ℹ️|note:|important:/i.test(quoteText)) {
        elements.push({
          type: 'callout-note',
          text: quoteText.replace(/^(\[!NOTE\]|ℹ️|note:?|important:?)\s*/i, ''),
        });
      } else {
        elements.push({ type: 'blockquote', text: quoteText });
      }
      continue;
    }

    // 6. Tables (| col 1 | col 2 |)
    if (trimmed.startsWith('|') && trimmed.endsWith('|') && trimmed.includes('|')) {
      const tableLines = [];
      while (i < lines.length && lines[i].trim().startsWith('|') && lines[i].trim().endsWith('|')) {
        tableLines.push(lines[i].trim());
        i++;
      }

      if (tableLines.length >= 2) {
        const headerRow = tableLines[0]
          .split('|')
          .slice(1, -1)
          .map((col) => col.trim());
        
        // Skip separator row if present (e.g. |---|---|)
        const hasDivider = /^[|\-\s:]+$/.test(tableLines[1]);
        const startRow = hasDivider ? 2 : 1;
        const rows = tableLines.slice(startRow).map((row) =>
          row
            .split('|')
            .slice(1, -1)
            .map((col) => col.trim())
        );

        elements.push({
          type: 'table',
          headers: headerRow,
          rows,
        });
        continue;
      }
    }

    // 7. Checklists / Task lists (- [ ] or - [x])
    if (/^[-*]\s+\[[ xX]\]\s+/.test(trimmed)) {
      const taskItems = [];
      while (i < lines.length && /^[-*]\s+\[[ xX]\]\s+/.test(lines[i].trim())) {
        const tLine = lines[i].trim();
        const isChecked = /^[-*]\s+\[[xX]\]/.test(tLine);
        const text = tLine.replace(/^[-*]\s+\[[ xX]\]\s+/, '');
        taskItems.push({ isChecked, text });
        i++;
      }
      elements.push({ type: 'tasklist', items: taskItems });
      continue;
    }

    // 8. Unordered Lists (- or *)
    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      const items = [];
      while (i < lines.length && (lines[i].trim().startsWith('- ') || lines[i].trim().startsWith('* '))) {
        items.push(lines[i].trim().replace(/^[-*]\s+/, ''));
        i++;
      }
      elements.push({ type: 'ul', items });
      continue;
    }

    // 9. Ordered Lists (1. 2. etc.)
    if (/^\d+\.\s+/.test(trimmed)) {
      const items = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+\.\s+/, ''));
        i++;
      }
      elements.push({ type: 'ol', items });
      continue;
    }

    // 10. Standalone Images (![alt](url))
    if (trimmed.startsWith('![') && trimmed.includes('](') && trimmed.endsWith(')')) {
      const imgMatch = trimmed.match(/^!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]+)")?\)$/);
      if (imgMatch) {
        elements.push({
          type: 'image',
          alt: imgMatch[1],
          src: imgMatch[2],
          caption: imgMatch[3] || imgMatch[1],
        });
        i++;
        continue;
      }
    }

    // 11. Normal Paragraph
    elements.push({ type: 'p', text: trimmed });
    i++;
  }

  return (
    <div className="markdown-content text-slate-800 leading-relaxed font-sans space-y-4">
      {elements.map((el, idx) => {
        switch (el.type) {
          case 'h1':
            return (
              <h1
                key={idx}
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-10 mb-4 tracking-tight leading-tight"
              >
                {formatInlineText(el.text)}
              </h1>
            );

          case 'h2':
            return (
              <h2
                key={idx}
                className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 mt-8 mb-3.5 border-b border-slate-100 pb-2.5 tracking-tight leading-snug"
              >
                {formatInlineText(el.text)}
              </h2>
            );

          case 'h3':
            return (
              <h3
                key={idx}
                className="text-lg sm:text-xl font-bold text-slate-900 mt-6 mb-2 leading-snug"
              >
                {formatInlineText(el.text)}
              </h3>
            );

          case 'h4':
            return (
              <h4
                key={idx}
                className="text-base sm:text-lg font-bold text-slate-800 mt-4 mb-1.5"
              >
                {formatInlineText(el.text)}
              </h4>
            );

          case 'hr':
            return (
              <div key={idx} className="my-8 flex items-center justify-center">
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
              </div>
            );

          case 'code':
            return <CodeBlock key={idx} code={el.code} language={el.language} />;

          case 'blockquote':
            return (
              <blockquote
                key={idx}
                className="border-l-4 border-[#00AED6] bg-cyan-50/40 pl-5 pr-4 py-3 my-5 rounded-r-2xl text-slate-700 italic text-sm sm:text-base relative shadow-xs"
              >
                <Quote className="w-5 h-5 text-[#00AED6]/30 absolute top-2 right-3 pointer-events-none" />
                {formatInlineText(el.text)}
              </blockquote>
            );

          case 'callout-tip':
            return (
              <div
                key={idx}
                className="my-5 p-4 sm:p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-emerald-950 flex gap-3 items-start shadow-xs"
              >
                <div className="w-7 h-7 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <div className="flex-1 text-xs sm:text-sm">
                  <span className="font-extrabold uppercase tracking-wide block mb-1 text-emerald-800">
                    Pro Growth Tip
                  </span>
                  <div className="text-emerald-900/90 leading-relaxed font-normal">
                    {formatInlineText(el.text)}
                  </div>
                </div>
              </div>
            );

          case 'callout-warning':
            return (
              <div
                key={idx}
                className="my-5 p-4 sm:p-5 rounded-2xl bg-amber-50/70 border border-amber-200 text-amber-950 flex gap-3 items-start shadow-xs"
              >
                <div className="w-7 h-7 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <AlertTriangle className="w-4 h-4" />
                </div>
                <div className="flex-1 text-xs sm:text-sm">
                  <span className="font-extrabold uppercase tracking-wide block mb-1 text-amber-800">
                    Important Consideration
                  </span>
                  <div className="text-amber-900/90 leading-relaxed font-normal">
                    {formatInlineText(el.text)}
                  </div>
                </div>
              </div>
            );

          case 'callout-note':
            return (
              <div
                key={idx}
                className="my-5 p-4 sm:p-5 rounded-2xl bg-blue-50/70 border border-blue-200 text-blue-950 flex gap-3 items-start shadow-xs"
              >
                <div className="w-7 h-7 rounded-xl bg-blue-500 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <Info className="w-4 h-4" />
                </div>
                <div className="flex-1 text-xs sm:text-sm">
                  <span className="font-extrabold uppercase tracking-wide block mb-1 text-blue-800">
                    Key Note
                  </span>
                  <div className="text-blue-900/90 leading-relaxed font-normal">
                    {formatInlineText(el.text)}
                  </div>
                </div>
              </div>
            );

          case 'table':
            return (
              <div key={idx} className="my-6 overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-100/90 border-b border-slate-200 text-slate-800 font-bold uppercase tracking-wider text-[11px]">
                      {el.headers.map((h, hIdx) => (
                        <th key={hIdx} className="p-3 sm:p-3.5">
                          {formatInlineText(h)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {el.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-slate-50/80 transition-colors">
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className="p-3 sm:p-3.5 text-slate-600">
                            {formatInlineText(cell)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );

          case 'tasklist':
            return (
              <ul key={idx} className="my-4 space-y-2 text-xs sm:text-sm text-slate-700">
                {el.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-2.5">
                    <input
                      type="checkbox"
                      checked={item.isChecked}
                      readOnly
                      className="mt-1 w-4 h-4 rounded text-brandPrimary border-slate-300 focus:ring-0 cursor-default"
                    />
                    <span className={item.isChecked ? 'line-through text-slate-400' : 'text-slate-700'}>
                      {formatInlineText(item.text)}
                    </span>
                  </li>
                ))}
              </ul>
            );

          case 'ul':
            return (
              <ul key={idx} className="my-4 ml-6 list-disc space-y-2 text-slate-700">
                {el.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="text-xs sm:text-sm leading-relaxed">
                    {formatInlineText(item)}
                  </li>
                ))}
              </ul>
            );

          case 'ol':
            return (
              <ol key={idx} className="my-4 ml-6 list-decimal space-y-2 text-slate-700">
                {el.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="text-xs sm:text-sm leading-relaxed">
                    {formatInlineText(item)}
                  </li>
                ))}
              </ol>
            );

          case 'image':
            return (
              <figure key={idx} className="my-6">
                <img
                  src={el.src}
                  alt={el.alt || 'Blog illustration'}
                  className="w-full rounded-2xl border border-slate-200 shadow-md max-h-[500px] object-cover"
                  loading="lazy"
                />
                {el.caption && (
                  <figcaption className="text-center text-xs text-slate-400 mt-2 italic">
                    {el.caption}
                  </figcaption>
                )}
              </figure>
            );

          default:
            return (
              <p key={idx} className="text-slate-600 leading-relaxed text-xs sm:text-sm font-normal my-3">
                {formatInlineText(el.text)}
              </p>
            );
        }
      })}
    </div>
  );
};

export default MarkdownRenderer;
