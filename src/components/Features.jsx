import { Link } from 'react-router-dom';

const Features = () => {
  return (
    <section className="bg-[#242629]">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl text-[#fffffe]">
            QuickNews AI is here to simplify daily news for you
          </h2>

          <p className="mt-4 text-[#94a1b2]">
            Our advanced Falcon LLM technology ensures you get the most accurate
            and relevant news summaries. Trusted by thousands of users daily.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <a
            className="block bg-[#16161a] rounded-xl border border-[#010101]/20 p-8 shadow-xl transition hover:border-[#010101]/10 hover:shadow-[#7f5af0]/10"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="size-8 text-[#7f5af0]"
            >
              <path
                fill="#7f5af0"
                d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
              />
            </svg>

            <h2 className="mt-4 text-xl font-bold text-[#fffffe]">
              Time saving
            </h2>

            <p className="mt-1 text-sm text-[#94a1b2]">
              Time-saving by providing quick news summaries.
            </p>
          </a>

          <a
            className="block bg-[#16161a] rounded-xl border border-[#010101]/20 p-8 shadow-xl transition hover:border-[#010101]/10 hover:shadow-[#7f5af0]/10"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="size-8 text-[#7f5af0]"
            >
              <path
                fill="#7f5af0"
                d="M0 64C0 46.3 14.3 32 32 32c229.8 0 416 186.2 416 416c0 17.7-14.3 32-32 32s-32-14.3-32-32C384 253.6 226.4 96 32 96C14.3 96 0 81.7 0 64zM0 416a64 64 0 1 1 128 0A64 64 0 1 1 0 416zM32 160c159.1 0 288 128.9 288 288c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-123.7-100.3-224-224-224c-17.7 0-32-14.3-32-32s14.3-32 32-32z"
              />
            </svg>

            <h2 className="mt-4 text-xl font-bold text-[#fffffe]">
              Accurate information
            </h2>

            <p className="mt-1 text-sm text-[#94a1b2]">
              Enhances knowledge with accurate information.
            </p>
          </a>
          <a
            className="block bg-[#16161a] rounded-xl border border-[#010101]/20 p-8 shadow-xl transition hover:border-[#010101]/10 hover:shadow-[#7f5af0]/10"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="size-8 text-[#7f5af0]"
            >
              <path
                fill="#7f5af0"
                d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
              />
            </svg>

            <h2 className="mt-4 text-xl font-bold text-[#fffffe]">
              Easy to use
            </h2>

            <p className="mt-1 text-sm text-[#94a1b2]">
              Easy-to-use interface for efficient news consumption.
            </p>
          </a>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="https://accounts.quicknews.live/sign-in"
            className="inline-block rounded bg-[#7f5af0] px-12 py-3 text-sm font-medium text-[#fffffe] transition hover:bg-[#6f42f7] focus:outline-none focus:ring focus:ring-[#2cb67d]"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features;
