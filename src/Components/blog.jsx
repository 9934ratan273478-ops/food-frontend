import "./blog.css";

function Blog() {
  const blogs = [
    {
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800",
      title: "How to prepare a delicious gluten free sushi",
    },
    // {
    //   image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?w=800",
    //   title: "Exclusive baking lessons from the pastry king",
    // },
    {
      image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=800",
      title: "How to prepare the perfect fries in an air fryer",
    },
    {
      image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=800",
      title: "How to prepare delicious chicken tenders",
    },
    {
      image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800",
      title: "5 great cooking gadgets you can buy to save time",
    },
    {
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
      title: "The secret tips & tricks to prepare a perfect burger",
    },
    {
      image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=800",
      title: "7 delicious cheesecake recipes you can prepare",
    },
    {
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800",
      title: "5 great pizza restaurants you should visit this city",
    },
    {
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
      title: "Best kitchen gadgets for home cooks",
    },
    {
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800",
      title: "Healthy breakfast ideas for busy mornings",
    },
    {
      image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800",
      title: "Top 20 simple and quick desserts for kids",
    },
    {
      image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800",
      title: "Easy homemade dessert recipes everyone loves",
    },
  ];

  return (
    <section className="blog">
      <div className="blog-header">
        <h1>Our Blog & Articles</h1>
        <p>
          We consider all the drivers of change gives you the components you
          need
          <br />
          to change to create a truly happens.
        </p>
      </div>

      <div className="blog-grid">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <img src={blog.image} alt={blog.title} />

            <div className="blog-content">
              <span>January 3, 2023</span>
              <h3>{blog.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;