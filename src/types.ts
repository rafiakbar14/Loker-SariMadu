export type JobPositionId =
  | 'crew_store'
  | 'kasir'
  | 'waiters'
  | 'koki_produksi'
  | 'packing'
  | 'cleaning_service'
  | 'dishwasher';

export interface JobPosition {
  id: JobPositionId;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  education: string;
  salaryRange: string;
  iconName: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  whatsappTemplate: string;
  talentaLink: string;
}

export interface CandidateApplication {
  id: string;
  positionId: JobPositionId;
  positionTitle: string;
  fullName: string;
  email: string;
  phone: string;
  address: string;
  lastEducation: string;
  major: string;
  experienceYears: number;
  coverLetter: string;
  uploadedFileName?: string;
  uploadedFileSize?: string;
  submittedAt: string;
  status: 'baru' | 'direview' | 'interview' | 'ditolak';
}
