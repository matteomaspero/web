import { useState, type FormEvent } from 'react';
import { FileDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

// Light gate only: the site is static, so this is not real access control.
const CV_PASSWORD = 'CiaoTeo!';

const CvDownloadButton = () => {
  const [open, setOpen] = useState(false);
  const [pw, setPw] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (pw !== CV_PASSWORD) {
      setError('Incorrect password.');
      return;
    }
    setBusy(true);
    const { generateCvPdf } = await import('@/utils/generateCvPdf');
    await generateCvPdf();
    setBusy(false);
    setOpen(false);
    setPw('');
    setError('');
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" style={{ color: '#0050B2', borderColor: '#0050B2' }}>
          <FileDown className="h-4 w-4 mr-1" aria-hidden="true" /> CV
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Download CV</DialogTitle>
          <DialogDescription>Enter the password to download the CV as PDF.</DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-3">
          <Input type="password" value={pw} onChange={e => setPw(e.target.value)} placeholder="Password" aria-label="Password" autoFocus />
          {error && <p className="text-sm text-destructive">{error}</p>}
          <Button type="submit" disabled={busy} className="w-full">{busy ? 'Generating…' : 'Download PDF'}</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CvDownloadButton;
