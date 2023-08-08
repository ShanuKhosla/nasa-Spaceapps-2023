import React from 'react';
import { useParams } from 'react-router-dom';
import { blogs } from '../constants';

const BlogDetail = () => {
  const { title } = useParams(); // Get the title from the URL parameters
  const decodedTitle = decodeURIComponent(title);
   // Decode the title

  // Find the corresponding blog data from the blogs array based on the decoded title
  const blog = blogs.find((blog) => blog.title === decodedTitle);

  if (!blog) {
    // Handle the case when the blog with the given title is not found
    return <div>Blog not found</div>;
  }

  const {image, tags, points, author, date } = blog;

  return (
    <>

   
    <div className="mx-auto max-w-[70%] flex flex-col items-start justify-center p-2">
      <h2 className="text-4xl xs:text-5xl lg:text-6xl font-extrabold font-firaSans tracking-wider mb-2">
        {title}
      </h2>
      <div className="my-3">
        <p className="max-w-full text-md  leading-snug font-overpass font-normal tracking-wide text-white">
          {author}
        </p>
        <p className="max-w-full text-md  leading-snug font-overpass font-normal tracking-wide text-white">
          {date}
        </p>
      </div>

      <ul style={{ listStyleType: 'none' }} className="mt-5 space-y-10 mt-10 max-w-full text-md md:text-xl text-base leading-snug font-overpass font-normal tracking-wide text-white">
      {points.map((point, index) => (
        <li
          key={`event-point-${index}`}
          className="text-white pl-1 tracking-wider my-3 text-justify"
          >
          {point}
        </li>
      ))}
    </ul>
    </div>
    </>
  );
};

export default BlogDetail;
