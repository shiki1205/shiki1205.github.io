var posts=["posts/8a50a8e4.html","posts/5bd2752a.html","posts/31a7036b.html","posts/c4de2d78.html","posts/775c2c79.html","posts/4a17b156.html","posts/66de4e4e.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };