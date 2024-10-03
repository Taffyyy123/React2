import Link from "next/link";

const Blog = (props) => {
  const { title, tags, img, name, date, profile, url } = props;
  return (
    <div>
      <div className="blog-container">
        <img src={img} className="img" />
        <div className="text-container">
          <Link href={url} className="type">
            {tags}
          </Link>
          <div className="title">{title}</div>
          <div className="footer-container">
            <div className="user-container">
              <img src={profile} className="pro" />
              <div className="name">{name}</div>
            </div>
            <div className="date">{date}, 2022</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blog;
