export const parseBook = (item: any, provider: BookProvider): Book => {
  if (provider === "googleBooksSearch") {
    return {
      image: item.volumeInfo.imageLinks?.thumbnail,
      title: item.volumeInfo.title,
      description: item.volumeInfo.description,
      authors: item.volumeInfo.authors,
      isbn: item.volumeInfo.industryIdentifiers?.[0]?.identifier,
    };
  }
  return {
    image: `https://covers.openlibrary.org/b/olid/${item.cover_edition_key}-M.jpg`,
    title: item.title,
    authors: item.author_name,
    description: item.description,
    isbn: item.isbn?.[0],
  };
};
