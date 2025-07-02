
import Layout from '@/components/Layout';
import { User, TrendingUp, Gift, Share2, Trophy, Star } from 'lucide-react';
import { mockCouponGroups } from '@/data/mockData';
import { toast } from 'sonner';

const MyPage = () => {
  const totalStamps = mockCouponGroups.reduce((acc, coupon) => acc + coupon.completedStamps, 0);
  const totalPossibleStamps = mockCouponGroups.reduce((acc, coupon) => acc + coupon.totalStamps, 0);
  const completedGroups = mockCouponGroups.filter(coupon => coupon.completedStamps === coupon.totalStamps).length;
  
  // 현재 레벨 계산
  const getCurrentLevel = (stamps: number) => {
    if (stamps >= 30) return { name: "동네 마스터", level: 4, nextLevel: null, stampsToNext: 0 };
    if (stamps >= 15) return { name: "스탬프 수집가", level: 3, nextLevel: "동네 마스터", stampsToNext: 30 - stamps };
    if (stamps >= 8) return { name: "골목 탐험가", level: 2, nextLevel: "스탬프 수집가", stampsToNext: 15 - stamps };
    return { name: "여행 초보자", level: 1, nextLevel: "골목 탐험가", stampsToNext: 8 - stamps };
  };

  const levelInfo = getCurrentLevel(totalStamps);
  
  const handleShare = () => {
    toast.success('공유 링크가 복사되었습니다! 📱');
  };

  const handleClaimReward = (coupon: any) => {
    toast.success(`${coupon.finalReward} 혜택을 받았습니다! 🎉`);
  };

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
              <div className="flex items-center">
                <Trophy size={16} className="mr-1" />
                <span className="text-blue-100">
                  {levelInfo.name} (Level {levelInfo.level})
                </span>
              </div>
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

        {/* 완주 혜택 섹션 */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Gift className="text-green-600 mr-2" size={20} />
              <h3 className="text-lg font-bold text-gray-800">완주 혜택</h3>
            </div>
            <button
              onClick={handleShare}
              className="flex items-center text-blue-600 text-sm font-medium"
            >
              <Share2 size={16} className="mr-1" />
              공유하기
            </button>
          </div>
          
          {completedGroups > 0 ? (
            <div className="space-y-3">
              {mockCouponGroups
                .filter(coupon => coupon.completedStamps === coupon.totalStamps)
                .map((coupon) => (
                  <div key={coupon.id} className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-bold text-green-800">{coupon.title}</h4>
                        <p className="text-sm text-green-600 mt-1">🎁 {coupon.finalReward}</p>
                      </div>
                      <button
                        onClick={() => handleClaimReward(coupon)}
                        className="bg-green-600 text-white px-3 py-1 rounded-lg text-sm font-medium hover:bg-green-700"
                      >
                        혜택 받기
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <p className="text-gray-500 text-sm">완주한 투어가 없습니다. 스탬프를 모아보세요!</p>
          )}
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-4">나의 투어 목록</h3>
          <div className="space-y-3">
            {mockCouponGroups.map((coupon) => {
              const progress = (coupon.completedStamps / coupon.totalStamps) * 100;
              return (
                <div key={coupon.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-bold text-gray-800">{coupon.title}</h4>
                      <p className="text-gray-600 text-sm mt-1">{coupon.location}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-blue-600 font-medium">
                        {Math.round(progress)}% 완료
                      </span>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transition-all duration-300"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">
                      {coupon.completedStamps}/{coupon.totalStamps} 완료
                    </span>
                    {coupon.completedStamps === coupon.totalStamps && (
                      <div className="flex items-center text-green-600">
                        <Gift size={16} className="mr-1" />
                        <span className="text-sm font-medium">혜택 가능</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {levelInfo.nextLevel && (
          <div className="mt-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
            <h4 className="font-bold text-orange-800 mb-2">🎉 다음 레벨까지</h4>
            <p className="text-orange-700 text-sm">
              스탬프 {levelInfo.stampsToNext}개만 더 모으면 "{levelInfo.nextLevel}" 레벨이 됩니다!
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default MyPage;
