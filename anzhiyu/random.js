var posts=["posts/31a7036b.html","posts/4a17b156.html","posts/5bd2752a.html","posts/4a17b156.html","posts/66de4e4e.html","posts/c4de2d78.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };