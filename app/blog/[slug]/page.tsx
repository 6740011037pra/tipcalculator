type Props = {
  params: {
    slug: string;
  };
};

const BlogDetail = async ({ params }: Props) => {
  const { slug } = await params;
  return <div>Blog Title: {slug}</div>;
};
export default BlogDetail;