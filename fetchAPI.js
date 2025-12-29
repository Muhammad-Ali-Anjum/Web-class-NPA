fetch('https://api.example.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'New Post',
    body: 'Content goes here',
    userId: 1
  })
})
.then(res => res.json())
.then(data => console.log('Created:', data));
