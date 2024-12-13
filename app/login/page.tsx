// app/login/page.tsx
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import LoginForm from "@/components/loginForm";

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-gray-50">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center">Login to Your Account</h2>
          <LoginForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
