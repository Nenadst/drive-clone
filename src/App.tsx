import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { DEFAULT_STALE_TIME } from "./utils/constants";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: DEFAULT_STALE_TIME,
      },
    },
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ToastContainer transition={Slide} />
        <ReactQueryDevtools initialIsOpen={false} />
        <Dashboard />
      </QueryClientProvider>
    </>
  );
}

export default App;
