var posts=["posts/0.html","posts/31a7036b.html","posts/c4de2d78.html","posts/5bd2752a.html","posts/66de4e4e.html","posts/4a17b156.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };