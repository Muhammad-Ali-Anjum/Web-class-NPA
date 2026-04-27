import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    // Simulate API fetch
    const dummyBooks = [
      { id: 1, title: "The Midnight Library", author: "Matt Haig", price: 18.99, rating: 4.5, category: "Fiction", coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400" },
      { id: 2, title: "Atomic Habits", author: "James Clear", price: 21.99, rating: 4.8, category: "Self-Help", coverImage: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400" },
      { id: 3, title: "Dune", author: "Frank Herbert", price: 24.99, rating: 4.9, category: "Science Fiction", coverImage: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400" },
    ];

    setTimeout(() => {
      setBooks(dummyBooks);
      setLoading(false);
    }, 500);
  }, []);

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [...new Set(books.map(book => book.category))];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">All Books</h1>

      {/* Filters */}
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Search books..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 input-field"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 border rounded-lg"
        >
          <option value="">All Categories</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Books Grid with Dynamic Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredBooks.map((book) => (
          <Link to={`/books/${book.id}`} key={book.id} className="block">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <img src={book.coverImage} alt={book.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{book.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{book.author}</p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-bold">${book.price}</span>
                  <span className="text-yellow-500">★ {book.rating}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredBooks.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No books found.</p>
        </div>
      )}
    </div>
  );
};

export default Books;