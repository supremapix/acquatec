export interface ServiceItem {
  id: string;
  title: string;
  description: string[];
  price?: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface NavItem {
  label: string;
  href: string;
}