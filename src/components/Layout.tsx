
import { ReactNode } from 'react';
import { Home, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-md mx-auto px-4 py-4">
          <h1 className="text-xl font-bold text-gray-800">동네 스탬프 투어</h1>
          <p className="text-sm text-gray-600">우리 동네 상권을 응원해요 🏪</p>
        </div>
      </header>
      
      <main className="max-w-md mx-auto min-h-[calc(100vh-140px)] bg-white">
        {children}
      </main>
      
      <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white border-t shadow-lg">
        <div className="flex justify-around py-2">
          <Link 
            to="/" 
            className={`flex flex-col items-center py-2 px-4 rounded-lg transition-colors ${
              location.pathname === '/' 
                ? 'text-blue-600 bg-blue-50' 
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            <Home size={20} />
            <span className="text-xs mt-1">홈</span>
          </Link>
          <Link 
            to="/mypage" 
            className={`flex flex-col items-center py-2 px-4 rounded-lg transition-colors ${
              location.pathname === '/mypage' 
                ? 'text-blue-600 bg-blue-50' 
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            <User size={20} />
            <span className="text-xs mt-1">마이</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Layout;
