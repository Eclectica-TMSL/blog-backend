export interface simpleBlogCard {
  title: string;
  smallDescription: string;
  currentSlug: string;
  titleImage: any;
}

export interface fullBlog {
  author: ReactI18NextChildren | Iterable<ReactI18NextChildren>;
  currentSlug: string;
  title: string;
  content: any;
  titleImage: any;
}
