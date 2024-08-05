const FAQ = () => {
  return (
    <div className="flex justify-center items-center py-16 flex-col bg-[#16161a]">
      <h1 className="text-2xl font-bold text-[#fffffe] md:text-3xl pb-6">
        Frequently Asked Questions
      </h1>
      <div className="space-y-4 w-3/4">
        <details
          className="group border-s-4 border-[#7f5af0] bg-[#242629] p-6 [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-[#fffffe]">
              What is QuickNews AI?
            </h2>

            <span className="shrink-0 rounded-full bg-[#fffffe] p-1.5 text-[#7f5af0] sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-[#94a1b2]">
            QuickNews AI is an advanced web application that uses Falcon LLM
            technology to provide concise and accurate summaries of news
            articles from various RSS feeds.
          </p>
        </details>

        <details className="group border-s-4 border-[#7f5af0] bg-[#242629] p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-[#fffffe]">
              How does QuickNews AI work?
            </h2>

            <span className="shrink-0 rounded-full bg-[#fffffe] p-1.5 text-[#7f5af0] sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-[#94a1b2]">
            QuickNews AI scans multiple RSS feeds, analyzes the content using
            Falcon LLM, and generates brief and accurate summaries that are easy
            to read and understand.
          </p>
        </details>
        <details className="group border-s-4 border-[#7f5af0] bg-[#242629] p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-[#fffffe]">
              How often are the news summaries updated?
            </h2>

            <span className="shrink-0 rounded-full bg-[#fffffe] p-1.5 text-[#7f5af0] sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-[#94a1b2]">
            News summaries are updated daily to ensure you receive the most
            current and relevant information.
          </p>
        </details>
        <details className="group border-s-4 border-[#7f5af0] bg-[#242629] p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-[#fffffe]">
              How accurate are the news summaries?
            </h2>

            <span className="shrink-0 rounded-full bg-[#fffffe] p-1.5 text-[#7f5af0] sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-[#94a1b2]">
            QuickNews AI uses the advanced Falcon LLM technology to provide
            highly accurate and relevant news summaries. However, we recommend
            cross-referencing with original sources for complete information.
          </p>
        </details>
        <details className="group border-s-4 border-[#7f5af0] bg-[#242629] p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-[#fffffe]">
              Is my personal information safe with QuickNews AI?
            </h2>

            <span className="shrink-0 rounded-full bg-[#fffffe] p-1.5 text-[#7f5af0] sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-[#94a1b2]">
            Yes, we take your privacy seriously. Your personal information is
            protected and will not be shared with third parties without your
            consent.
          </p>
        </details>
        <details className="group border-s-4 border-[#7f5af0] bg-[#242629] p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-[#fffffe]">
              How can I get started with QuickNews AI?
            </h2>

            <span className="shrink-0 rounded-full bg-[#fffffe] p-1.5 text-[#7f5af0] sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-[#94a1b2]">
            Simply sign up for a free account, select your preferred news
            categories, and start receiving daily news summaries in your inbox.
          </p>
        </details>
      </div>
    </div>
  );
};

export default FAQ;
