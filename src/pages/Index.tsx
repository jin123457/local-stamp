
import { useState } from 'react';
import Layout from '@/components/Layout';
import CouponCard from '@/components/CouponCard';
import { mockCouponGroups } from '@/data/mockData';
import { Search, TrendingUp } from 'lucide-react';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredCoupons = mockCouponGroups.filter(coupon =>
    coupon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    coupon.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    coupon.theme.toLowerCase().includes(searchTerm.toLowerCase()) ||
    coupon.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchInput = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value);
  };

  return (
    <Layout>
      <div className="p-4">
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="지역이나 테마로 검색해보세요"
              className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={searchTerm}
              onInput={handleSearchInput}
            />
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center mb-3">
            <TrendingUp className="text-blue-600 mr-2" size={20} />
            <h2 className="text-lg font-bold text-gray-800">인기 스탬프 투어</h2>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
              #망원동감성
            </span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
              #생활혜택
            </span>
            <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
              #상생협력
            </span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
              #팬커뮤니티
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-4">
            {searchTerm ? `'${searchTerm}' 검색 결과` : '참여 가능한 쿠폰 그룹'}
          </h2>
          {filteredCoupons.length > 0 ? (
            filteredCoupons.map((coupon) => (
              <CouponCard key={coupon.id} coupon={coupon} />
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-600">검색 결과가 없습니다.</p>
              <p className="text-sm text-gray-500 mt-2">다른 키워드로 검색해보세요.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
