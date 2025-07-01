
import Layout from '@/components/Layout';
import { User, Star, Gift, MapPin, TrendingUp } from 'lucide-react';
import { mockCouponGroups } from '@/data/mockData';

const MyPage = () => {
  const totalStamps = mockCouponGroups.reduce((acc, coupon) => acc + coupon.completedStamps, 0);
  const totalPossibleStamps = mockCouponGroups.reduce((acc, coupon) => acc + coupon.totalStamps, 0);
  const completedGroups = mockCouponGroups.filter(coupon => coupon.completedStamps === coupon.totalStamps).length;

  return (
    <Layout>
      <div className="p-4">
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl p-6 mb-6 text-white">
          <div className="flex items-center mb-4">
            <div className="bg-white bg-opacity-20 rounded-full p-3 mr-4">
              <User size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold">스탬프 여행자</h2>
              <p className="text-blue-100">우리 동네 탐험가</p>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold">{totalStamps}</div>
              <div className="text-xs text-blue-100">획득 스탬프</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{completedGroups}</div>
              <div className="text-xs text-blue-100">완주한 투어</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{mockCouponGroups.length}</div>
              <div className="text-xs text-blue-100">참여 투어</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 mb-6">
          <div className="flex items-center mb-4">
            <TrendingUp className="text-blue-600 mr-2" size={20} />
            <h3 className="text-lg font-bold text-gray-800">진행 현황</h3>
          </div>
          
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">전체 진행률</span>
              <span className="text-sm text-gray-600">
                {Math.round((totalStamps / totalPossibleStamps) * 100)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transition-all duration-300"
                style={{ width: `${(totalStamps / totalPossibleStamps) * 100}%` }}
              />
            </div>
          </div>
          
          <p className="text-sm text-gray-600">
            {totalPossibleStamps - totalStamps}개의 스탬프가 더 필요해요!
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-4">나의 투어 목록</h3>
          <div className="space-y-3">
            {mockCouponGroups.map((coupon) => (
              <div key={coupon.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-bold text-gray-800">{coupon.title}</h4>
                    <div className="flex items-center text-gray-600 text-sm mt-1">
                      <MapPin size={12} className="mr-1" />
                      {coupon.location}
                    </div>
                  </div>
                  <div className="flex items-center">
                    {[...Array(coupon.totalStamps)].map((_, index) => (
                      <Star
                        key={index}
                        size={16}
                        className={index < coupon.completedStamps ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    {coupon.completedStamps}/{coupon.totalStamps} 완료
                  </span>
                  {coupon.completedStamps === coupon.totalStamps && (
                    <div className="flex items-center text-green-600">
                      <Gift size={16} className="mr-1" />
                      <span className="text-sm font-medium">혜택 받기</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
          <h4 className="font-bold text-orange-800 mb-2">🎉 다음 레벨까지</h4>
          <p className="text-orange-700 text-sm">
            스탬프 {Math.max(0, 15 - totalStamps)}개만 더 모으면 "동네 마스터" 레벨이 됩니다!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default MyPage;
