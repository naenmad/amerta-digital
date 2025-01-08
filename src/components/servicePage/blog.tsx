// src/components/servicePage/Blog.tsx
const Blog = () => {
    const blogPosts = [
        { id: 1, title: 'Blog Post 1', excerpt: 'Excerpt of blog post 1.' },
        { id: 2, title: 'Blog Post 2', excerpt: 'Excerpt of blog post 2.' },
        // Add more blog posts as needed
    ];

    return (
        <section className="bg-gray-100 p-8">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6 text-green-500">Latest Blog Posts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map(post => (
                        <div key={post.id} className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                            <p>{post.excerpt}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;