var posts=["posts/4a17b156.html","posts/4a17b156.html","posts/66de4e4e.html","posts/5bd2752a.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };