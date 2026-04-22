import React, { useState, useMemo, useEffect } from 'react';
import { ArrowLeft, ExternalLink, Download, LayoutGrid, Table as TableIcon, Search, ArrowUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useMarkdownContent } from '@/utils/markdownLoader';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import BackToTop from '@/components/BackToTop';

interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: number;
  type: 'journal' | 'conference' | 'book';
  doi?: string;
}

const CONFERENCE_HINTS = [
  'Proc Intl Soc Mag Reson Med',
  'ISMRM',
  'Workshop',
  'EP-1841',
  'PO-0957',
  'SU-E-J-',
  'MO-FG-CAMPUS',
  'Med Phys. 2016',
  'Med Phys. 2015;42',
];

const BOOK_HINTS = ['In:', 'IOP Publishing', 'Imaging in Particle Therapy'];

const detectType = (journalInfo: string): Publication['type'] => {
  if (BOOK_HINTS.some(h => journalInfo.includes(h))) return 'book';
  if (CONFERENCE_HINTS.some(h => journalInfo.includes(h))) return 'conference';
  return 'journal';
};

const stripMd = (s: string) => s.replace(/\*\*/g, '');

const asciiSlug = (s: string) =>
  s
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '')
    .toLowerCase();

const STOPWORDS = new Set([
  'a', 'an', 'the', 'of', 'for', 'on', 'in', 'and', 'to', 'with', 'using', 'from', 'by', 'at',
]);

const buildCiteKey = (pub: Publication, used: Set<string>): string => {
  const firstAuthor = stripMd(pub.authors).split(',')[0]?.trim().split(' ')[0] || 'anon';
  const titleWord =
    stripMd(pub.title)
      .split(/\s+/)
      .map(w => w.replace(/[^a-zA-Z0-9]/g, ''))
      .find(w => w.length > 2 && !STOPWORDS.has(w.toLowerCase())) || 'work';
  const base = `${asciiSlug(firstAuthor)}${pub.year}${asciiSlug(titleWord)}`;
  let key = base;
  let i = 1;
  while (used.has(key)) {
    key = `${base}${String.fromCharCode(96 + i)}`;
    i++;
  }
  used.add(key);
  return key;
};

const escapeBib = (s: string) =>
  stripMd(s).replace(/[{}]/g, '').replace(/&/g, '\\&').replace(/%/g, '\\%').trim();

const toBibtex = (pubs: Publication[]): string => {
  const used = new Set<string>();
  return pubs
    .map(pub => {
      const key = buildCiteKey(pub, used);
      const entryType =
        pub.type === 'conference' ? 'inproceedings' : pub.type === 'book' ? 'incollection' : 'article';
      const journalField = pub.type === 'book' ? 'booktitle' : 'journal';
      const lines = [
        `@${entryType}{${key},`,
        `  author = {${escapeBib(pub.authors)}},`,
        `  title = {${escapeBib(pub.title)}},`,
        `  ${journalField} = {${escapeBib(pub.journal)}},`,
        `  year = {${pub.year}},`,
      ];
      if (pub.doi) {
        const doiOnly = pub.doi.replace(/^https?:\/\/(dx\.)?doi\.org\//, '');
        lines.push(`  doi = {${doiOnly}},`);
        lines.push(`  url = {${pub.doi}},`);
      }
      lines.push('}');
      return lines.join('\n');
    })
    .join('\n\n');
};

const renderAuthors = (authors: string) => {
  const parts = authors.split(/(\*\*Maspero M\*\*|\*\*Maspero, Matteo\*\*)/g);
  return parts.map((part, idx) => {
    if (part === '**Maspero M**' || part === '**Maspero, Matteo**') {
      return (
        <strong key={idx} className="text-primary font-semibold">
          Maspero M
        </strong>
      );
    }
    return <span key={idx}>{part.replace(/\*\*/g, '')}</span>;
  });
};

const Publications = () => {
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [yearFilter, setYearFilter] = useState<number | 'all'>('all');
  const [search, setSearch] = useState('');
  const [sortDesc, setSortDesc] = useState(true);
  const [view, setView] = useState<'cards' | 'table'>('cards');
  const { content, isLoading } = useMarkdownContent('/src/content/publications.md');

  useEffect(() => {
    document.title = 'Publications — Matteo Maspero | 54+ peer-reviewed papers in AI for radiotherapy';
    const desc =
      'Complete publication list of Matteo Maspero: peer-reviewed journal articles, conference proceedings, and book chapters on deep learning, MRI-guided radiotherapy, synthetic CT, and image registration.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', desc);
  }, []);

  const publications = useMemo<Publication[]>(() => {
    if (!content) return [];
    const lines = content.split('\n').filter(line => line.match(/^\d+\./));
    return lines.map(line => {
      const cleanLine = line.replace(/^\d+\.\s*/, '');
      const doiMatch = cleanLine.match(/\[DOI\]\((https?:\/\/[^)]+)\)/);
      const doi = doiMatch ? doiMatch[1] : undefined;
      const textWithoutDoi = cleanLine.replace(/\s*\[DOI\]\([^)]+\)/, '').trim();

      const firstPeriodIdx = textWithoutDoi.indexOf('. ');
      if (firstPeriodIdx === -1) {
        return { title: textWithoutDoi, authors: '', journal: '', year: 0, type: 'journal' as const };
      }
      const authors = textWithoutDoi.substring(0, firstPeriodIdx);
      const rest = textWithoutDoi.substring(firstPeriodIdx + 2);
      const parts = rest.split(/\.\s+/);
      const title = parts[0] || '';
      const journalInfo = parts.slice(1).join('. ');
      const yearMatch = journalInfo.match(/(19|20)\d{2}/);
      const year = yearMatch ? parseInt(yearMatch[0]) : 0;
      const type = detectType(journalInfo);
      const journalMatch = journalInfo.match(/^([^.]+?)(?:\.\s*\d{4}|\s*\d{4})/);
      const journal = journalMatch ? journalMatch[1].trim() : journalInfo.split('.')[0];
      return { title, authors, journal, year, type, doi };
    });
  }, [content]);

  const years = useMemo(() => {
    const set = new Set(publications.map(p => p.year).filter(y => y > 0));
    return Array.from(set).sort((a, b) => b - a);
  }, [publications]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    let list = publications.filter(p => {
      if (typeFilter !== 'all' && p.type !== typeFilter) return false;
      if (yearFilter !== 'all' && p.year !== yearFilter) return false;
      if (!q) return true;
      const blob = `${stripMd(p.authors)} ${p.title} ${p.journal} ${p.year}`.toLowerCase();
      return blob.includes(q);
    });
    list = [...list].sort((a, b) => (sortDesc ? b.year - a.year : a.year - b.year));
    return list;
  }, [publications, typeFilter, yearFilter, search, sortDesc]);

  const handleDownloadBib = () => {
    const bib = toBibtex(filtered.length ? filtered : publications);
    const blob = new Blob([bib], { type: 'application/x-bibtex;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'maspero-publications.bib';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const jsonLd = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: publications.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'ScholarlyArticle',
          headline: p.title,
          author: stripMd(p.authors)
            .split(',')
            .map(a => ({ '@type': 'Person', name: a.trim() })),
          datePublished: String(p.year),
          isPartOf: { '@type': 'Periodical', name: p.journal },
          ...(p.doi ? { sameAs: p.doi, identifier: p.doi } : {}),
        },
      })),
    }),
    [publications],
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="section-container py-8 pt-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#0050B2' }}>
            Publications
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            {publications.length} peer-reviewed research articles, conference proceedings, and book chapters
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://orcid.org/0000-0003-0347-3375"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2"
              >
                <img src="https://orcid.org/assets/vectors/orcid.logo.icon.svg" alt="ORCID" className="h-4 w-4" />
                ORCID
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://scholar.google.it/citations?user=vIO1i9EAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                Google Scholar
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://www.ncbi.nlm.nih.gov/myncbi/1LCg61DsIdlkC/bibliography/public/"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                PubMed
              </a>
            </Button>
            <Button variant="outline" size="sm" onClick={handleDownloadBib} className="gap-2">
              <Download className="h-4 w-4" />
              Download .bib
            </Button>
          </div>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col gap-4 mb-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search title, author, journal, year…"
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="pl-9"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSortDesc(s => !s)}
                className="gap-2"
                title={sortDesc ? 'Newest first' : 'Oldest first'}
              >
                <ArrowUpDown className="h-4 w-4" />
                {sortDesc ? 'Newest' : 'Oldest'}
              </Button>
              <div className="inline-flex rounded-md border border-input">
                <Button
                  variant={view === 'cards' ? 'secondary' : 'ghost'}
                  size="sm"
                  onClick={() => setView('cards')}
                  className="rounded-r-none gap-2"
                >
                  <LayoutGrid className="h-4 w-4" />
                  Cards
                </Button>
                <Button
                  variant={view === 'table' ? 'secondary' : 'ghost'}
                  size="sm"
                  onClick={() => setView('table')}
                  className="rounded-l-none gap-2"
                >
                  <TableIcon className="h-4 w-4" />
                  Table
                </Button>
              </div>
            </div>
          </div>

          {/* Year chips */}
          <div className="flex flex-wrap gap-2">
            <Badge
              variant={yearFilter === 'all' ? 'default' : 'outline'}
              className="cursor-pointer"
              onClick={() => setYearFilter('all')}
            >
              All years
            </Badge>
            {years.map(y => (
              <Badge
                key={y}
                variant={yearFilter === y ? 'default' : 'outline'}
                className="cursor-pointer"
                onClick={() => setYearFilter(y)}
              >
                {y}
              </Badge>
            ))}
          </div>

          <p className="text-sm text-muted-foreground">
            Showing <span className="font-medium text-foreground">{filtered.length}</span> of {publications.length}
          </p>
        </div>

        <Tabs value={typeFilter} onValueChange={setTypeFilter} className="mb-8">
          <div className="flex justify-start overflow-x-auto">
            <TabsList>
              <TabsTrigger value="all">All ({publications.length})</TabsTrigger>
              <TabsTrigger value="journal">
                Journal ({publications.filter(p => p.type === 'journal').length})
              </TabsTrigger>
              <TabsTrigger value="conference">
                Conference ({publications.filter(p => p.type === 'conference').length})
              </TabsTrigger>
              <TabsTrigger value="book">Book ({publications.filter(p => p.type === 'book').length})</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={typeFilter} className="mt-8">
            {isLoading ? (
              <div className="grid gap-4">
                {Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <div key={index} className="animate-pulse bg-white p-6 rounded-lg">
                      <div className="h-6 bg-slate-200 rounded w-3/4 mb-3"></div>
                      <div className="h-4 bg-slate-200 rounded w-full mb-2"></div>
                      <div className="h-4 bg-slate-200 rounded w-1/2"></div>
                    </div>
                  ))}
              </div>
            ) : view === 'cards' ? (
              <div className="grid gap-4">
                {filtered.map((pub, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex gap-4">
                        <div className="hidden sm:flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary shrink-0 text-sm font-medium">
                          {index + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <CardTitle className="text-base sm:text-lg mb-2 leading-snug">{pub.title}</CardTitle>
                          <CardDescription className="text-muted-foreground mb-2 text-sm">
                            {renderAuthors(pub.authors)}
                          </CardDescription>
                          <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm items-center">
                            <span className="text-primary font-medium">{pub.journal}</span>
                            <span className="text-muted-foreground">{pub.year || '—'}</span>
                            <Badge variant="outline" className="capitalize text-xs">
                              {pub.type}
                            </Badge>
                            {pub.doi && (
                              <a
                                href={pub.doi}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-teal-600 hover:underline inline-flex items-center gap-1"
                              >
                                <ExternalLink className="h-3 w-3" />
                                DOI
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                {filtered.length === 0 && (
                  <p className="text-center text-muted-foreground py-12">No publications match your filters.</p>
                )}
              </div>
            ) : (
              <div className="rounded-lg border bg-card">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12">#</TableHead>
                      <TableHead
                        className="w-20 cursor-pointer select-none"
                        onClick={() => setSortDesc(s => !s)}
                      >
                        <span className="inline-flex items-center gap-1">
                          Year <ArrowUpDown className="h-3 w-3" />
                        </span>
                      </TableHead>
                      <TableHead>Title</TableHead>
                      <TableHead className="hidden md:table-cell">Authors</TableHead>
                      <TableHead className="hidden lg:table-cell">Journal</TableHead>
                      <TableHead className="hidden sm:table-cell w-24">Type</TableHead>
                      <TableHead className="w-16">DOI</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filtered.map((pub, index) => (
                      <TableRow key={index}>
                        <TableCell className="text-muted-foreground">{index + 1}</TableCell>
                        <TableCell className="font-medium">{pub.year || '—'}</TableCell>
                        <TableCell className="max-w-md">
                          <div className="leading-snug">{pub.title}</div>
                          <div className="text-xs text-muted-foreground mt-1 md:hidden">
                            {renderAuthors(pub.authors)}
                          </div>
                          <div className="text-xs text-primary mt-1 lg:hidden">{pub.journal}</div>
                        </TableCell>
                        <TableCell className="hidden md:table-cell text-sm text-muted-foreground max-w-xs">
                          <span className="line-clamp-2">{renderAuthors(pub.authors)}</span>
                        </TableCell>
                        <TableCell className="hidden lg:table-cell text-sm text-primary">{pub.journal}</TableCell>
                        <TableCell className="hidden sm:table-cell">
                          <Badge variant="outline" className="capitalize text-xs">
                            {pub.type}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {pub.doi ? (
                            <a
                              href={pub.doi}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-teal-600 hover:underline inline-flex items-center gap-1"
                              aria-label="Open DOI"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          ) : (
                            <span className="text-muted-foreground">—</span>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                    {filtered.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={7} className="text-center text-muted-foreground py-12">
                          No publications match your filters.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
      <BackToTop />
    </div>
  );
};

export default Publications;
