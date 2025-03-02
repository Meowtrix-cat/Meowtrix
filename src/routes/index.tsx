import { LoginForm } from '@/features/auth';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: () => <App />,
});

export function App() {
  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Meowtrix 앱</h1>
      <LoginForm />
    </div>
  );
}
