import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

const BookDetail = () => {
  const { id } = useParams(); // Get dynamic ID from URL
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { user } = useAuth();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  // Fetch book data based on dynamic ID
  useEffect(() => {
    const fetchBook = async () => {
      try {
        // Simulating API call with dummy data
        const dummyBooks = {
          1: {
            id: 1,
            title: "The Midnight Library",
            author: "Matt Haig",
            price: 18.99,
            rating: 4.5,
            category: "Fiction",
            description: "Between life and death there is a library. When Nora Seed finds herself in the Midnight Library, she has a chance to make things right.",
            coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400",
            stock: 15,
            pages: 304,
            language: "English",
            isbn: "978-0525559474"
          },
          2: {
            id: 2,
            title: "Atomic Habits",
            author: "James Clear",
            price: 21.99,
            rating: 4.8,
            category: "Self-Help",
            description: "No matter your goals, Atomic Habits offers a proven framework for improving every day.",
            coverImage: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400",
            stock: 23,
            pages: 320,
            language: "English",
            isbn: "978-0735211292"
          },
          3: {
            id: 3,
            title: "Dune",
            author: "Frank Herbert",
            price: 24.99,
            rating: 4.9,
            category: "Science Fiction",
            description: "Set on the desert planet Arrakis, Dune is the story of Paul Atreides.",
            coverImage: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400",
            stock: 8,
            pages: 896,
            language: "English",
            isbn: "978-0441172719"
          }
        };

        setTimeout(() => {
          const foundBook = dummyBooks[id];
          if (foundBook) {
            setBook(foundBook);
          } else {
            toast.error('Book not found');
            navigate('/books');
          }
          setLoading(false);
        }, 500);
      } catch (error) {
        toast.error('Failed to load book');
        setLoading(false);
      }
    };

    fetchBook();
  }, [id, navigate]);

  const handleAddToCart = () => {
    if (!user) {
      toast.error('Please login to add items to cart');
      navigate('/login');
      return;
    }
    
    addToCart({ ...book, quantity });
    toast.success(`${book.title} added to cart!`);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!book) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="mb-6 text-sm breadcrumbs">
        <Link to="/" className="text-gray-500 hover:text-blue-600">Home</Link>
        <span className="mx-2 text-gray-400">/</span>
        <Link to="/books" className="text-gray-500 hover:text-blue-600">Books</Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-900">{book.title}</span>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8 p-6">
          {/* Book Cover */}
          <div className="flex justify-center">
            <img
              src={book.coverImage}
              alt={book.title}
              className="w-full max-w-md rounded-lg shadow-md object-cover"
            />
          </div>

          {/* Book Details */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-gray-900">{book.title}</h1>
            <p className="text-xl text-gray-600">by {book.author}</p>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <span className="text-yellow-400 text-xl">★</span>
                <span className="ml-1 text-gray-700">{book.rating}</span>
              </div>
              <span className="text-gray-400">|</span>
              <span className="text-green-600 font-semibold">
                {book.stock > 0 ? `In Stock (${book.stock} available)` : 'Out of Stock'}
              </span>
            </div>

            <div className="border-t border-b py-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Category:</span>
                  <span className="ml-2 text-gray-900 font-medium">{book.category}</span>
                </div>
                <div>
                  <span className="text-gray-500">Language:</span>
                  <span className="ml-2 text-gray-900 font-medium">{book.language}</span>
                </div>
                <div>
                  <span className="text-gray-500">Pages:</span>
                  <span className="ml-2 text-gray-900 font-medium">{book.pages}</span>
                </div>
                <div>
                  <span className="text-gray-500">ISBN:</span>
                  <span className="ml-2 text-gray-900 font-medium">{book.isbn}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
              <p className="text-gray-600 leading-relaxed">{book.description}</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-blue-600">${book.price}</span>
                {book.stock > 0 && (
                  <div className="flex items-center space-x-2">
                    <label className="text-gray-600">Qty:</label>
                    <select
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                      className="border rounded-lg px-3 py-1"
                    >
                      {[...Array(Math.min(10, book.stock))].map((_, i) => (
                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                      ))}
                    </select>
                  </div>
                )}
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={handleAddToCart}
                  disabled={book.stock === 0}
                  className={`flex-1 btn-primary ${book.stock === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  🛒 Add to Cart
                </button>
                <button className="px-6 btn-secondary">
                  ❤️ Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Books Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Related Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/books/2" className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
            <h3 className="font-semibold">Atomic Habits</h3>
            <p className="text-gray-600">James Clear</p>
            <p className="text-blue-600 font-bold">$21.99</p>
          </Link>
          <Link to="/books/3" className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
            <h3 className="font-semibold">Dune</h3>
            <p className="text-gray-600">Frank Herbert</p>
            <p className="text-blue-600 font-bold">$24.99</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;