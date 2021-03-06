interface IProps {
  id: string;
  title: string;
  description: string;
  image?: string;
  url: string;
  date: Date | string | number;
}

const PostCard = ({ title, description, url, date, image }: IProps) => {
  return (
    <div className="relative max-w-md pt-12 pb-16 px-8 bg-white ring-1 ring-secondary-100 shadow-lg rounded-lg my-10">
      {image ? (
        <div className="absolute -top-10 right-8 w-20 h-20 object-cover rounded-full ring-1 ring-offset-2 ring-secondary-100">
          {/* NOTE: Have to use <img> because next.js doesn't support images domains wildcards yet. */}
          {/* And facebook has a lot of different domains */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt={title}
            className="object-cover rounded-full w-20 h-20 bg-white"
            width={80}
            height={80}
            src={image}
          />
        </div>
      ) : null}
      <div className="flex flex-col gap-2">
        <h2 className="text-primary text-2xl h-16 font-semibold line-clamp-2">{title}</h2>
        <h3 className="text-gray-600 font-roboto text-sm font-light">{date}</h3>
        <p className="text-gray-600 line-clamp-5">{description}</p>
      </div>
      <div className="absolute bottom-4 right-8">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-md font-roboto font-medium text-secondary-400 transition-all duration-500
        before:content-[''] before:absolute before:h-[0.10rem] before:w-0 before:bg-secondary-400 before:-top-1 before:opacity-0 before:transition-all
        before:duration-500 hover:before:w-4/12 hover:before:opacity-100 hover:transition-all hover:ease hover:duration-200"
        >
          Czytaj więcej...
        </a>
      </div>
    </div>
  );
};

export default PostCard;
