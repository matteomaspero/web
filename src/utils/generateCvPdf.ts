import type { jsPDF as JsPdf } from 'jspdf';
import publicationsMd from '@/content/publications.md?raw';
import { CV_CONTACT, CV_SECTIONS } from '@/content/cv';

interface CvPublication {
  text: string;
  year: number;
  url?: string;
}

const BLUE: [number, number, number] = [0, 80, 178];
const GREY: [number, number, number] = [90, 90, 90];
const PAGE_W = 210;
const MARGIN = 18;
const DATE_COL = 32;
const BODY_X = MARGIN + DATE_COL;
const BODY_W = PAGE_W - MARGIN - BODY_X;
const BOTTOM = 280;

export const parseCvPublications = (md: string): CvPublication[] =>
  md
    .split('\n')
    .map(l => l.trim())
    .filter(l => /^\d+\.\s/.test(l))
    .map(l => {
      const url = l.match(/\]\((https?:[^)]+)\)/)?.[1];
      const text = l.replace(/^\d+\.\s/, '').replace(/\s*\[[^\]]*\]\([^)]+\)/g, '').trim();
      const years = text.match(/\b(19|20)\d{2}\b/g) ?? [];
      return { text, url, year: Number(years[years.length - 1] ?? 0) };
    });

interface Word { w: string; bold: boolean }

const toLatin1 = (t: string): string =>
  t.replace(/χ/g, 'chi').replace(/[‐‑–—]/g, m => (m === '—' ? '-' : '-')).replace(/[‘’]/g, "'").replace(/[“”]/g, '"')
    .normalize('NFC').replace(/[^\x00-\xFF]/g, c => c.normalize('NFD').replace(/[^\x00-\xFF]/g, ''));

const toWords = (text: string): Word[] =>
  toLatin1(text).split(/(\*\*[^*]+\*\*)/).flatMap(part => {
    const bold = part.startsWith('**');
    return part.replace(/\*\*/g, '').split(/\s+/).filter(Boolean).map(w => ({ w, bold }));
  });

export const generateCvPdf = async (): Promise<void> => {
  const { jsPDF } = await import('jspdf');
  const doc: JsPdf = new jsPDF({ unit: 'mm', format: 'a4' });
  let y = MARGIN;

  const ensure = (h: number) => {
    if (y + h <= BOTTOM) return;
    doc.addPage();
    y = MARGIN;
  };

  const richText = (text: string, x: number, width: number, size: number) => {
    doc.setFontSize(size);
    const lh = size * 0.42;
    let cx = x;
    ensure(lh);
    for (const { w, bold } of toWords(text)) {
      doc.setFont('helvetica', bold ? 'bold' : 'normal');
      const ww = doc.getTextWidth(w);
      const sp = doc.getTextWidth(' ');
      if (/^[.,;:)]/.test(w) && cx > x) cx -= sp;
      if (cx > x && cx + ww > x + width) {
        cx = x;
        y += lh;
        ensure(lh);
      }
      doc.text(w, cx, y);
      cx += ww + sp;
    }
    y += lh;
  };

  const heading = (t: string) => {
    ensure(14);
    y += 4;
    doc.setFont('helvetica', 'bold').setFontSize(13).setTextColor(...BLUE);
    doc.text(t, MARGIN, y);
    y += 1.8;
    doc.setDrawColor(...BLUE).setLineWidth(0.3).line(MARGIN, y, PAGE_W - MARGIN, y);
    y += 5;
    doc.setTextColor(0, 0, 0);
  };

  doc.setFont('helvetica', 'bold').setFontSize(24).setTextColor(...BLUE);
  doc.text('Matteo Maspero', MARGIN, y + 4);
  doc.setFont('helvetica', 'normal').setFontSize(9).setTextColor(...GREY);
  CV_CONTACT.forEach((c, i) => doc.text(c, PAGE_W - MARGIN, y + i * 4, { align: 'right' }));
  y += 12;
  doc.setFontSize(11).setTextColor(0, 0, 0);
  doc.text('Curriculum Vitae', MARGIN, y);
  doc.setFont('helvetica', 'italic').setFontSize(9).setTextColor(...GREY);
  const today = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  doc.text(`Updated on ${today}`, MARGIN, y + 4.5);
  y += 8;

  for (const s of CV_SECTIONS) {
    heading(s.heading);
    for (const e of s.entries) {
      ensure(8);
      doc.setFont('helvetica', 'normal').setFontSize(9).setTextColor(...GREY);
      doc.text(e.period, MARGIN, y);
      doc.setTextColor(0, 0, 0);
      richText(`**${e.title}**${e.org ? ` — ${e.org}` : ''}`, BODY_X, BODY_W, 9.5);
      doc.setTextColor(...GREY);
      e.details?.forEach(d => richText(d, BODY_X, BODY_W, 9));
      doc.setTextColor(0, 0, 0);
      y += 2;
    }
  }

  const pubs = parseCvPublications(publicationsMd);
  heading(`Publications (${pubs.length})`);
  let lastYear = -1;
  pubs.forEach((p, i) => {
    ensure(10);
    if (p.year !== lastYear) {
      doc.setFont('helvetica', 'bold').setFontSize(10).setTextColor(...BLUE);
      doc.text(p.year ? String(p.year) : 'Other', MARGIN, y);
      doc.setTextColor(0, 0, 0);
      lastYear = p.year;
    }
    doc.setFont('helvetica', 'normal').setFontSize(8.5).setTextColor(...GREY);
    doc.text(`[${i + 1}]`, BODY_X - 2, y, { align: 'right' });
    doc.setTextColor(0, 0, 0);
    richText(p.text, BODY_X, BODY_W, 8.5);
    if (p.url) {
      doc.setFont('helvetica', 'normal').setFontSize(8).setTextColor(...BLUE);
      ensure(4);
      doc.textWithLink(p.url, BODY_X, y, { url: p.url });
      y += 3.6;
      doc.setTextColor(0, 0, 0);
    }
    y += 1.6;
  });

  const n = doc.getNumberOfPages();
  for (let i = 1; i <= n; i++) {
    doc.setPage(i);
    doc.setFont('helvetica', 'normal').setFontSize(8).setTextColor(...GREY);
    doc.text(`Matteo Maspero — CV`, MARGIN, 290);
    doc.text(`${i}/${n}`, PAGE_W - MARGIN, 290, { align: 'right' });
  }

  doc.save('Matteo_Maspero_CV.pdf');
};
