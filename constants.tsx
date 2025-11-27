import { 
  Code2, 
  Palette, 
  Smartphone, 
  BrainCircuit, 
  Cloud, 
  ShieldCheck,
  Rocket,
  Globe,
  Zap
} from 'lucide-react';
import { ServiceItem, PortfolioItem, TestimonialItem, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Mission', href: '#mission' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: '1',
    title: 'Custom Software Development',
    description: 'Scalable, robust, and secure enterprise software solutions tailored to your unique business requirements.',
    icon: Code2,
    gradient: 'from-blue-500 to-cyan-400'
  },
  {
    id: '2',
    title: 'UI/UX Design',
    description: 'Human-centered design that creates intuitive, engaging, and aesthetically pleasing digital experiences.',
    icon: Palette,
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: '3',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver seamless performance on iOS and Android.',
    icon: Smartphone,
    gradient: 'from-orange-500 to-red-500'
  },
  {
    id: '4',
    title: 'AI & Machine Learning',
    description: 'Leveraging cutting-edge AI models to automate processes, analyze data, and predict trends.',
    icon: BrainCircuit,
    gradient: 'from-emerald-500 to-teal-400'
  },
  {
    id: '5',
    title: 'Cloud Infrastructure',
    description: 'Secure cloud architecture, migration, and DevOps services for AWS, Azure, and Google Cloud.',
    icon: Cloud,
    gradient: 'from-indigo-500 to-blue-600'
  },
  {
    id: '6',
    title: 'Cybersecurity',
    description: 'Comprehensive security audits, penetration testing, and protection strategies for your digital assets.',
    icon: ShieldCheck,
    gradient: 'from-rose-500 to-pink-600'
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: '1',
    title: 'FinEdge Banking App',
    category: 'App Development',
    // Mobile App Interface / Development
    imageUrl: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800',
    description: 'A next-generation mobile banking experience with AI-driven financial insights.'
  },
  {
    id: '2',
    title: 'Orbit Analytics Dashboard',
    category: 'AI & Analytics',
    // Data/Tech Dashboard
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    description: 'Real-time data visualization platform for enterprise marketing teams.'
  },
  {
    id: '3',
    title: 'Neon Commerce',
    category: 'UI/UX Design',
    // Designing Phase / Wireframing
    imageUrl: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=80&w=800',
    description: 'Headless e-commerce solution enabling sub-second page loads.'
  },
  {
    id: '4',
    title: 'MediSync Health',
    category: 'Software Solutions',
    // General Tech Services / Software
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    description: 'Secure patient portal and telemedicine scheduling system.'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'CTO',
    company: 'TechFlow Inc.',
    content: 'EverBright transformed our legacy system into a modern, scalable cloud architecture. The team is simply world-class.',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: '2',
    name: 'Marcus Thorne',
    role: 'Product Director',
    company: 'InnovateX',
    content: 'Their design team captured our vision perfectly. The user feedback on our new app has been overwhelmingly positive.',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    role: 'Founder',
    company: 'GreenScale',
    content: 'Professional, timely, and technically brilliant. They are not just vendors, they are strategic partners.',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150'
  }
];

export const PROCESS_STEPS = [
  {
    title: 'Discovery',
    description: 'We dive deep into your business goals and technical requirements.',
    icon: Globe
  },
  {
    title: 'Strategy',
    description: 'Architecting a robust roadmap and selecting the right tech stack.',
    icon: Zap
  },
  {
    title: 'Development',
    description: 'Agile sprints with regular updates and transparent code delivery.',
    icon: Code2
  },
  {
    title: 'Launch',
    description: 'Seamless deployment, monitoring, and ongoing support.',
    icon: Rocket
  }
];