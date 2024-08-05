import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-[#16161a]">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-[#fffffe]">
            Welcome to
            <strong className="font-extrabold text-[#7f5af0] ">
              {' '}
              Quick News{' '}
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed text-[#94a1b2]">
            QuickNews AI offers precise and concise summaries of the latest news
            articles. It saves time and keeps you informed with quick,
            easy-to-read news highlights.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              className="block w-full rounded bg-[#7f5af0] px-12 py-3 text-sm font-medium text-white shadow hover:bg-[#6f42f7] focus:outline-none focus:ring active:bg-[#7f5af0] sm:w-auto"
              to="https://accounts.quicknews.live/sign-in"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
