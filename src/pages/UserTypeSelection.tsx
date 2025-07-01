
import { Link } from 'react-router-dom';
import { User, Store } from 'lucide-react';

const UserTypeSelection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">사이사이 🌿</h1>
          <p className="text-lg text-gray-600 mb-2">우리 동네 상권을 응원해요 🏪</p>
          <p className="text-sm text-gray-500">내 취향을 따라 동네를 걷는 여정</p>
          <p className="text-sm text-gray-500 font-medium mt-2">당신의 취향은 어느 골목에 머물고 있나요?</p>
        </div>

        <div className="space-y-4">
          <Link to="/customer">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <User className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">고객으로 시작하기</h3>
                  <p className="text-sm text-gray-600">동네 상권을 탐방하고 스탬프를 모아보세요</p>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/store-management">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Store className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">상점 운영하기</h3>
                  <p className="text-sm text-gray-600">다른 상점과 함께 쿠폰 그룹을 만들어보세요</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserTypeSelection;
