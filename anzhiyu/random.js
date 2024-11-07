var posts=["posts/5bd2752a.html","posts/4a17b156.html","posts/4a17b156.html","posts/66de4e4e.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };