export interface INews {
  status: string;
  totalResults: number;
  articles: IArticles[];
}

interface IArticles {
  source: ISource;
  author: string;
  title: string;
  description: null;
  url: string;
  urlToImage: null;
  publishedAt: string;
  content: null;
}

interface ISource {
  id: string;
  name: string;
}
