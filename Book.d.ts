type Book = {
  image: string;
  title: string;
  description: string;
  authors: string[];
  isbn: string;
};

type BookProvider = "googleBooksSearch" | "openLibrarySearch"