import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";

const SingleBlog = () => {
  const imageUrl =
    "https://ventsmagazine.com/wp-content/uploads/2020/11/blog.jpg";
  const sectionTitle = "Blog Section";
  const sectionContent =
    "Puta possimus, aspernatur officiis ullam minima a, in praesentium assumenda nostrum! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea nam, quos est cupiditate dolorum atque molestiae minus veritatis dicta tempora aperiam exercitationem blanditiis voluptatibus consequuntur sequi nihil impedit repellat. Itaque.";

  return (
    <>
        <Navbar />
    <div className="container m-auto">
      <header>
        <img
          className="w-full lg:h-[80vh] rounded-b-lg"
          src={imageUrl}
          alt="image"
        />
      </header>
      <article>
        <h1 className="text-4xl m-6">Title of Blog</h1>
        <p className="text-lg m-8">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          laborum iure quae voluptates laboriosam optio at dolor culpa fugiat
          soluta possimus, aspernatur officiis ullam minima a, in praesentium
          assumenda nostrum! Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Ea nam, quos est cupiditate dolorum atque molestiae minus
          veritatis dicta tempora aperiam exercitationem blanditiis voluptatibus
          consequuntur sequi nihil impedit repellat. Itaque.
        </p>

        <section>
          <h2 className="text-2xl m-8">{sectionTitle}</h2>
          <img
            className="lg:w-1/2 md:w-9/12 sm:w-full xs:w-full h-[50vh] m-auto rounded-lg"
            src={imageUrl}
            alt="image"
          />
          <p className="text-md m-8">{sectionContent}</p>

          <ul className="list-decimal ml-14">
            <li className="my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              ducimus corporis, recusandae mollitia explicabo quas velit
            </li>
            <li className="my-2">
              {" "}
              non impedit id inventore sed optio laudantium quia veniam aperiam
              accusantium repudiandae maxime dolore?
            </li>
            <li className="my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              ducimus corporis, recusandae mollitia explicabo quas velit
            </li>
            <li className="my-2">
              {" "}
              non impedit id inventore sed optio laudantium quia veniam aperiam
              accusantium repudiandae maxime dolore?
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl m-8">{sectionTitle}</h2>
          <img
            className="lg:w-1/2 md:w-9/12 sm:w-full xs:w-full h-[50vh] m-auto rounded-lg"
            src={imageUrl}
            alt="image"
          />
          <p className="text-md m-8">{sectionContent}</p>
        </section>
        <section>
          <h2 className="text-2xl m-8">{sectionTitle}</h2>
          <p className="text-md m-8">{sectionContent}</p>
          <ul className="list-decimal ml-14">
            <li className="my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              ducimus corporis, recusandae mollitia explicabo quas velit
            </li>
            <li className="my-2">
              {" "}
              non impedit id inventore sed optio laudantium quia veniam aperiam
              accusantium repudiandae maxime dolore?
            </li>
            <li className="my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              ducimus corporis, recusandae mollitia explicabo quas velit
            </li>
            <li className="my-2">
              {" "}
              non impedit id inventore sed optio laudantium quia veniam aperiam
              accusantium repudiandae maxime dolore?
            </li>
          </ul>
        </section>
      </article>
     
    </div>
    <Footer />
    </>
  );
};

export default SingleBlog;
