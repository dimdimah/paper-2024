import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className='flex items-center justify-center flex-col my-10'>
      <SignIn />
    </div>
  );
}
