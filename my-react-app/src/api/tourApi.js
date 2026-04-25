export const fetchTours = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  return data.products.map((item) => ({
    id: item.id,
    title: item.title,
    location: "Pakistan",
    price: item.price,
    image: item.thumbnail,
  }));
};