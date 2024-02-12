function PostContent({ className, content, title }) {
  return (
    <div className={className}>
      <h2 className={`text-center text-xl font-bold`}>{title}</h2>
      <p className={`tracking text-lg`}>{content}</p>
    </div>
  );
}

export default PostContent;
