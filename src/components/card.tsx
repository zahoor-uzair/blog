import Link from 'next/link';

const Card = () => {
  return (
<div className='h-[12rem]  overflow-hidden rounded-lg'>
<Link href="#" className="flex flex-col items-center bg-light   shadow  hover:bg-gray-100">
<div
  className="flex  rounded-lg bg-ligh md:flex-row">
  <img
    className="h-[12rem] w-[40%] object-cover"
    src="https://ventsmagazine.com/wp-content/uploads/2020/11/blog.jpg"
    alt="" />
  <div className="flex flex-col justify-start p-6">
    <h5
      className="mb-2 text-xl font-medium  ">
      Card title
    </h5>
    <p className="mb-4 text-base ">
      This is a wider card with supporting text below as a natural lead-in
      to additional content. This content is a little bit longer.
    </p>
    <p className="text-xs ">
      Last updated 3 mins ago
    </p>
  </div>
</div>
</Link>
</div>

  );
};

export default Card;
