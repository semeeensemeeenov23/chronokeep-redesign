export interface Article {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  image: string;
  date: string;
  slug: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}