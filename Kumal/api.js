// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(console.log);
// api promise function
function fetchData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
        .then(res => {
            if (!res.ok) {
                throw new Error('Product not found');
            }
            return res.json();
        })
        .then(data => resolve(data))
        .catch(err => reject(err));
    }
);
}
fetchData('https://dummyjson.com/products')
.then(data => console.log(data))
.catch(err => console.error('Error fetching data:', err));
