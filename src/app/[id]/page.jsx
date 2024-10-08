"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Page = () => {
  const blogId = usePathname();
  const [fetchData, setFetchData] = useState([]);
  const fetchId = async () => {
    const dataJson = await fetch(`https://dev.to/api/articles${blogId}`);
    const data = await dataJson.json();
    setFetchData(data);
  };
  useEffect(() => {
    fetchId();
  }, []);
  console.log(fetchData);
  return (
    <div>
      {/* <div>{fetchData.title}</div>
      <img src={fetchData.social_image} /> */}
      <Link href={`${fetchData.url}`}>Click me</Link>
    </div>
  );
};
export default Page;
