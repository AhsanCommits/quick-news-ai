import { SignedIn, SignedOut } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-[#16161a]">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link className="block text-[#7f5af0] font-semibold" to="/">
              <span className="sr-only">Home</span>
              Quick News
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <div>
                <SignedIn>
                  <Link
                    to="dashboard"
                    className="rounded-md bg-[#7f5af0] px-5 py-2.5 text-sm font-medium text-[#fffffe] shadow hover:bg-[#6f42f7]"
                  >
                    Dashboard
                  </Link>
                </SignedIn>
                <SignedOut>
                  <Link
                    to="https://accounts.quicknews.live/sign-in"
                    className="rounded-md bg-[#7f5af0] px-5 py-2.5 text-sm font-medium text-[#fffffe] shadow hover:bg-[#6f42f7] mr-2"
                  >
                    Login
                  </Link>
                  <Link
                    to="https://accounts.quicknews.live/sign-up"
                    className="rounded-md bg-[#fffffe] px-5 py-2.5 text-sm font-medium text-[#7f5af0]"
                  >
                    Register
                  </Link>
                </SignedOut>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
