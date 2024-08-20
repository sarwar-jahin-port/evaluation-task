import LoginForm from "@/components/LoginForm";
import SignupForm from "@/components/SignupForm";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <h1 className="text-5xl">EVALUATION TASK</h1>
      <SignupForm/>
      <LoginForm/>
    </main>
  );
}
