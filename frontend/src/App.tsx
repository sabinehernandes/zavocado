import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import MainNavigation from "./components/landing-page/MainNavigation";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainNavigation />
    </QueryClientProvider>
  );
}
