import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatarUrl: string;
}

export interface NavItem {
  label: string;
  href: string;
}