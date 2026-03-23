const DESC =
  "is an artist book created by Alexey Yurenev in collaboration with designer Teun van der Heijden and the Anti-Kriegs-Museum in Berlin. It is one of several outcomes of Silent Hero, a visual research project and historical investigation into Yurenev's grandfather's unspoken experience during World War II.";

export const BOOKS = [
  {
    id: 1,
    slug: 'seeing-against-seeing',
    title: 'Seeing Against Seeing',
    thumb: '/books/book-1-thumb.jpg',
    description: DESC,
    images: ['/books/sas-1.jpg', '/books/sas-2.jpg', '/books/sas-3.jpg'],
  },
];

export function getBookBySlug(slug) {
  return BOOKS.find(b => b.slug === slug) ?? null;
}
