// src/types/index.ts
import { ReactElement } from 'react';

export interface ServiceItem {
  icon: ReactElement;
  title: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface BenefitItem {
  text: string;
}