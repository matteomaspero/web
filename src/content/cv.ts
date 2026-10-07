export interface CvEntry {
  period: string;
  title: string;
  org?: string;
  details?: string[];
}

export interface CvSection {
  heading: string;
  entries: CvEntry[];
}

export const CV_CONTACT: string[] = [
  'Heidelberglaan 100, 3584 CX Utrecht, The Netherlands',
  'm.maspero@umcutrecht.nl',
  'linkedin.com/in/matteo-maspero',
  'matteo-maspero.lovable.app',
];

export const CV_SECTIONS: CvSection[] = [
  {
    heading: 'Education',
    entries: [
      { period: '2022 – 2026', title: 'Medical Physics School', org: 'UMC Utrecht, Radiotherapy Department', details: ['Dutch Medical Physics School, radiotherapy subspecialisation (OKF); NVKF-registered medical physicist since August 2026.'] },
      { period: '2014 – 2018', title: 'PhD', org: 'UMC Utrecht, Radiotherapy Department & Image Sciences Institute', details: ['Thesis: MR-only radiotherapy of prostate cancer.', 'Feasibility of MRI-based treatment planning for prostate cancer; fiducial marker visibility and automatic localisation; clinical implementation of MRI-only radiotherapy.'] },
      { period: '2011 – 2014', title: 'MSc (Laurea Magistrale) in Physics, 110/110 cum laude', org: 'Università degli Studi dell’Insubria, Como', details: ['Thesis: Integrated data acquisition system for a scintillating fibre neutron dosimeter.'] },
      { period: '2008 – 2011', title: 'BSc (Laurea Triennale) in Physics, 104/110', org: 'Università degli Studi dell’Insubria, Como', details: ['Thesis: Profilometry characterisation of an antiproton beam and solar physics experiments with an ultra-rapid monolithic pixel silicon detector.'] },
    ],
  },
  {
    heading: 'Work Experience',
    entries: [
      { period: '2026 – now', title: 'Medical Physicist', org: 'UMC Utrecht, Imaging & Oncology Division, Radiotherapy Department', details: ['Responsible for treatment planning and artificial intelligence applications.'] },
      { period: '2022 – now', title: 'Assistant Professor', org: 'UMC Utrecht, Computational Imaging Group & Radiotherapy Department', details: ['Development and clinical implementation of deep learning methods; adaptive radiotherapy research; student supervision; coordination of “AI for Medical Imaging”; research funding.'] },
      { period: '2023 – 2026', title: 'Medical Physicist Resident', org: 'UMC Utrecht, Radiotherapy Department' },
      { period: '2018 – 2021', title: 'Postdoc / Clinical Scientist', org: 'UMC Utrecht, Radiotherapy Department & Computational Imaging Group', details: ['Deep learning for synthetic CT, CBCT correction and automatic segmentation; clinical implementation; supervision and teaching.'] },
    ],
  },
  {
    heading: 'Teaching',
    entries: [
      { period: '2018 – now', title: 'Lecturer', org: 'UMC Utrecht', details: ['MRI in Radiotherapy, Capita Selecta, AI for Medical Imaging, Deep Learning in Radiotherapy.'] },
      { period: '2021 – 2023', title: 'Course Coordinator, AI for Medical Imaging', org: 'Utrecht University' },
      { period: '2010 – 2013', title: 'Laboratory assistant and tutor', org: 'Università degli Studi dell’Insubria, Como' },
    ],
  },
  {
    heading: 'Editorial & Community',
    entries: [
      { period: '2024 – now', title: 'Associate Editor', org: 'BJR|Artificial Intelligence' },
      { period: '2023 – now', title: 'Editorial Board Member', org: 'Physics in Medicine and Biology' },
      { period: '2025 – now', title: 'Creator and maintainer', org: 'DLinRT.eu', details: ['Overview of commercial deep learning solutions for radiotherapy.'] },
    ],
  },
  {
    heading: 'Awards',
    entries: [
      { period: '2026', title: 'Best in Physics, ESTRO 2026', details: ['SynthRAD2025 challenge report.'] },
      { period: '2024', title: 'Best in Physics, ESTRO 2024', details: ['SynthRAD2023 challenge report.'] },
      { period: '2016 – 2018', title: 'Outstanding Reviewer Award (3×)', org: 'Physics in Medicine and Biology' },
    ],
  },
  {
    heading: 'Memberships, Skills & Languages',
    entries: [
      { period: 'Member', title: 'NVKF (since 2022); ISMRM, ESMRMB, ESTRO, SIF, EPS (since 2014)' },
      { period: 'Skills', title: 'Python, PyTorch, MATLAB, LaTeX, SQL, Unix; TensorFlow, Fortran' },
      { period: 'Languages', title: 'Italian (native), English (proficient), Dutch (proficient)' },
    ],
  },
];
