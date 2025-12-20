const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2);

console.log(doubled);
let comp=["Iname","akash","taju"];

console.log(comp.map(n=> n));
const number = [1, 2, 3, 4, 5, 6];

const evenNumbers = number.filter(num => num % 2 === 0);

console.log(evenNumbers);
const akash=number.filter(num=>num%2!=0)
console.log(akash);
const num = [1, 2, 3, 4, 5];

const sum = num.reduce((total, num) => {
  return total + num;
}, 0);

console.log(sum);


const cart = [
  { name: "Laptop",
     price: 1200,
      qty: 1,
       category: "electronics", 
       inStock: true },
  { name: "Headphones", 
    price: 200, qty: 2,
     category: "electronics", 
     inStock: true },
  { name: "Shoes",
     price: 150, 
     qty: 1, 
     category: "fashion", 
     inStock: false },
  { name: "T-Shirt", 
    price: 50,
     qty: 3,
      category: "fashion",
       inStock: true },
  { name: "Mobile", 
    price: 800, 
    qty: 1,
     category: "electronics",
      inStock: true }
];

const orderSummary = cart
  .filter(item => item.inStock)

  // 2️⃣ Apply discount + calculate item total
  .map(item => {
    const discount = item.category === "fashion" ? 0.10 : 0;
    const discountedPrice = item.price - (item.price * discount);

    return {
      name: item.name,
      qty: item.qty,
      finalPrice: discountedPrice,
      itemTotal: discountedPrice * item.qty
    };
  });

const cartTotal = orderSummary.reduce(
  (total, item) => total + item.itemTotal,
  0
);

console.log(orderSummary);
console.log("Cart Total:", cartTotal);


