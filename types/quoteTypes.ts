export type AddQuoteTypes = {};

export type QuoteType = {
  image: string;
  movie_id: string;
  user_id: string;
  id: string;
  quote: {
    en: string;
    ge: string;
  };
  comments: any;
  likes: string;
};

export type UpdateQuoteType = {
  quote: {
    en: string;
    ge: string;
  };
  image: FileList;
  id: string;
};

export type QuoteId = {
  quoteId: string;
  quoteAuthorId: string;
};
