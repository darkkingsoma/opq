import SigninForm from './SigninForm';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function SigninPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <SigninForm />
    </div>
  );
}