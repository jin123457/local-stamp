
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Store } from 'lucide-react';
import Layout from '@/components/Layout';
import StampCard from '@/components/StampCard';
import { mockCouponGroups } from '@/data/mockData';

const CouponDetail = () => {
  const { id } = useParams();
  const coupon = mockCouponGroups.find(c => c.id === id);

  if (!coupon) {
    return (
      <Layout>
        <div className="p-4 text-center">
          <p className="text-gray-600">쿠폰을 찾을 수 없습니다.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="p-4">
        <div className="flex items-center mb-4">
          <Link to="/" className="mr-3">
            <ArrowLeft className="text-gray-600" size={24} />
          </Link>
          <h1 className="text-xl font-bold text-gray-800">{coupon.title}</h1>
        </div>

        <div className={`bg-gradient-to-r ${coupon.backgroundColor} rounded-xl p-5 mb-6`}>
          <div className="flex items-center text-gray-600 mb-2">
            <MapPin size={16} className="mr-1" />
            <span className="text-sm">{coupon.location}</span>
          </div>
          <p className={`${coupon.textColor} opacity-90`}>{coupon.description}</p>
        </div>

        <StampCard
          stores={coupon.stores}
          completedStamps={coupon.completedStamps}
          totalStamps={coupon.totalStamps}
          finalReward={coupon.finalReward}
        />

        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-4">참여 가게 목록</h3>
          <div className="space-y-6">
            {coupon.stores.map((store) => (
              <Link key={store.id} to={`/store/${store.id}`}>
                <div className={`p-4 rounded-xl border transition-all ${
                  store.visited 
                    ? 'bg-blue-50 border-blue-200 shadow-sm' 
                    : 'bg-white border-gray-200 hover:shadow-sm'
                }`}>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <Store size={16} className={store.visited ? 'text-blue-600' : 'text-gray-600'} />
                        <h4 className={`ml-2 font-bold ${store.visited ? 'text-blue-800' : 'text-gray-800'}`}>
                          {store.name}
                        </h4>
                        {store.visited && (
                          <span className="ml-2 bg-blue-600 text-white px-2 py-1 rounded-full text-xs">
                            완료
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mb-1">{store.description}</p>
                      <p className="text-xs text-gray-500">{store.address}</p>
                      <p className="text-sm text-green-600 font-medium mt-2">
                        🎁 {store.reward}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CouponDetail;
