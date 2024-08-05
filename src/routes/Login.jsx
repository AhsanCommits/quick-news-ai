import { SignIn } from '@clerk/clerk-react';

export default function Login() {
  return (
    <div className="flex h-screen justify-center items-center">
      <SignIn path="/sign-in" />
    </div>
  );
}
