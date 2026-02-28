import Link from "next/link";

function slugify(text: string) {
  return text.toLowerCase().trim().replace(/\s+/g, "-"); // แทน space ด้วย - .replace(/[^\w\-]+/g, '') // ลบอักขระพิเศษ
}
const BlogPage = () => {
  const blogList = [
    { id: 1, title: "Next.js Installation" },
    { id: 2, title: "how to use prisma with mysql" },
  ];
  return (
    <div>
      <h1>Blog Page</h1>
      <ul>
        {blogList.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${slugify(blog.title)}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default BlogPage;