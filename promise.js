// ================= E-COMMERCE MINI PROJECT (PROMISES) =================

// Login
function loginUser(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      email === "user@test.com" && password === "1234"
        ? resolve({ id: 1, name: "Muhammad Ali" })
        : reject("Login failed ❌");
    }, 1000);
  });
}

// Fetch Products
function fetchProducts() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Laptop", price: 120000 },
        { id: 2, name: "Mobile", price: 60000 }
      ]);
    }, 1000);
  });
}

// Add to Cart
function addToCart(product) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      product ? resolve({ ...product, qty: 1 }) : reject("Product not found ❌");
    }, 800);
  });
}

// Payment
function makePayment(item) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      item.price <= 150000
        ? resolve({ paymentId: "PAY001", amount: item.price })
        : reject("Payment failed ❌");
    }, 1200);
  });
}

// Order Confirmation
function confirmOrder(payment) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ orderId: "ORD1001", status: "Confirmed", payment });
    }, 500);
  });
}

// ================= MAIN FLOW =================

loginUser("user@test.com", "1234")
  .then(user => {
    console.log("User:", user.name);
    return fetchProducts();
  })
  .then(products => {
    console.log("Products:", products);
    return addToCart(products[0]);
  })
  .then(cartItem => {
    console.log("Cart:", cartItem);
    return makePayment(cartItem);
  })
  .then(payment => {
    console.log("Payment:", payment);
    return confirmOrder(payment);
  })
  .then(order => {
    console.log("Order:", order);
  })
  .catch(err => console.log("Error:", err))
  .finally(() => console.log("Shopping complete 🛒"));

  // ================= REAL-TIME E-COMMERCE USING PROMISES =================

// 1️⃣ Login (simulate API call)
function loginUser(email, password) {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(users => {
      const user = users.find(u => u.email === email);
      if (user && password === "1234") return user;
      throw "Login failed ❌";
    });
}

// 2️⃣ Fetch Products (using fake API)
function fetchProducts() {
  return fetch("https://fakestoreapi.com/products?limit=5")
    .then(res => res.json())
    .then(products => products);
}

// 3️⃣ Add to Cart
function addToCart(product) {
  return new Promise((resolve, reject) => {
    if (product) resolve({ ...product, qty: 1 });
    else reject("Product not found ❌");
  });
}

// 4️⃣ Make Payment
function makePayment(cartItem) {
  return new Promise((resolve, reject) => {
    if (cartItem.price <= 2000) resolve({ paymentId: "PAY001", amount: cartItem.price });
    else reject("Payment failed ❌ (Limit exceeded)");
  });
}

// 5️⃣ Confirm Order
function confirmOrder(payment) {
  return new Promise(resolve => {
    resolve({ orderId: "ORD1001", status: "Confirmed", payment });
  });
}

// ================= MAIN FLOW =================

loginUser("Sincere@april.biz", "1234") // JSONPlaceholder user email
  .then(user => {
    console.log("Logged in:", user.name);
    return fetchProducts();
  })
  .then(products => {
    console.log("Products:", products);
    return addToCart(products[0]);
  })
  .then(cartItem => {
    console.log("Added to cart:", cartItem);
    return makePayment(cartItem);
  })
  .then(payment => {
    console.log("Payment successful:", payment);
    return confirmOrder(payment);
  })
  .then(order => {
    console.log("Order confirmed:", order);
  })
  .catch(err => console.log("Error:", err))
  .finally(() => console.log("Shopping complete 🛒"));
