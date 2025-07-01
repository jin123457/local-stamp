
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserTypeSelection from "./pages/UserTypeSelection";
import Index from "./pages/Index";
import CouponDetail from "./pages/CouponDetail";
import StoreDetail from "./pages/StoreDetail";
import StoreManagement from "./pages/StoreManagement";
import MyPage from "./pages/MyPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserTypeSelection />} />
          <Route path="/customer" element={<Index />} />
          <Route path="/store-management" element={<StoreManagement />} />
          <Route path="/coupon/:id" element={<CouponDetail />} />
          <Route path="/store/:id" element={<StoreDetail />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
