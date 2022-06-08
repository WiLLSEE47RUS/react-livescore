export interface INewsModel {
  author: string;
  content: string;
  description: string;
  published_at: string;
  source: {
    id: string | null;
    name: string;
  }
  title: string;
  url: string;
  urlToImage: string;
}

export interface TFetchNews<Type = INewsModel>{
  articles: Type[];
  status: string;
  totalResults: number;
}
