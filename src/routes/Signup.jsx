import { SignUp } from '@clerk/clerk-react';

export default function Signup() {
  return (
    <div className="flex h-screen justify-center items-center">
      <SignUp path="/sign-up" />
    </div>
  );
}
