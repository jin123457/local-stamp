
import { useState } from 'react';
import Layout from '@/components/Layout';
import CouponCard from '@/components/CouponCard';
import { mockCouponGroups } from '@/data/mockData';
import { Search, TrendingUp, Grid3X3 } from 'lucide-react';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTheme, setSelectedTheme] = useState('');
  
  const themes = [
    { tag: '#망원동감성', filter: '망원동' },
    { tag: '#생활혜택', filter: '생활' },
    { tag: '#상생협력', filter: '상생' },
    { tag: '#팬커뮤니티', filter: '팬' }
  ];

  const filteredCoupons = mockCouponGroups.filter(coupon => {
    const matchesSearch = coupon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coupon.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coupon.theme.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coupon.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTheme = !selectedTheme || 
      coupon.title.toLowerCase().includes(selectedTheme.toLowerCase()) ||
      coupon.theme.toLowerCase().includes(selectedTheme.toLowerCase()) ||
      coupon.description.toLowerCase().includes(selectedTheme.toLowerCase());
    
    return matchesSearch && matchesTheme;
  });

  const handleSearchInput = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value);
    setSelectedTheme(''); // 검색 시 테마 필터 초기화
  };

  const handleThemeClick = (theme: { tag: string; filter: string }) => {
    setSelectedTheme(theme.filter);
    setSearchTerm(''); // 테마 클릭 시 검색어 초기화
  };

  const handleShowAll = () => {
    setSelectedTheme('');
    setSearchTerm('');
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
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <TrendingUp className="text-blue-600 mr-2" size={20} />
              <h2 className="text-lg font-bold text-gray-800">인기 스탬프 투어</h2>
            </div>
            {(selectedTheme || searchTerm) && (
              <button
                onClick={handleShowAll}
                className="flex items-center text-blue-600 text-sm font-medium"
              >
                <Grid3X3 size={16} className="mr-1" />
                전체보기
              </button>
            )}
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {themes.map((theme) => (
              <button
                key={theme.tag}
                onClick={() => handleThemeClick(theme)}
                className={`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedTheme === theme.filter
                    ? 'bg-blue-600 text-white'
                    : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                }`}
              >
                {theme.tag}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-4">
            {searchTerm ? `'${searchTerm}' 검색 결과` : 
             selectedTheme ? `'${themes.find(t => t.filter === selectedTheme)?.tag}' 테마` :
             '참여 가능한 쿠폰 그룹'}
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
