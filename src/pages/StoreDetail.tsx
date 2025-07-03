
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Phone, Clock, Gift, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import StoreMap from '@/components/StoreMap';
import QRStampAuth from '@/components/QRStampAuth';
import SNSShare from '@/components/SNSShare';
import { mockCouponGroups } from '@/data/mockData';
import { toast } from 'sonner';
import { useState } from 'react';

const StoreDetail = () => {
  const { id } = useParams();
  const [showQRAuth, setShowQRAuth] = useState(false);
  
  // Find store across all coupon groups
  let store = null;
  let parentCoupon = null;
  
  for (const coupon of mockCouponGroups) {
    const foundStore = coupon.stores.find(s => s.id === id);
    if (foundStore) {
      store = foundStore;
      parentCoupon = coupon;
      break;
    }
  }

  if (!store || !parentCoupon) {
    return (
      <Layout>
        <div className="p-4 text-center">
          <p className="text-gray-600">가게를 찾을 수 없습니다.</p>
        </div>
      </Layout>
    );
  }

  const handleVisitSuccess = () => {
    // Update store visited status (in real app, this would be API call)
    store.visited = true;
    
    toast.success(`${store.name} 방문이 완료되었습니다! 🎉`, {
      description: `혜택: ${store.reward}`,
    });
    
    setShowQRAuth(false);
  };

  return (
    <Layout>
      <div className="p-4">
        <div className="flex items-center mb-4">
          <Link to={`/coupon/${parentCoupon.id}`} className="mr-3">
            <ArrowLeft className="text-gray-600" size={24} />
          </Link>
          <h1 className="text-xl font-bold text-gray-800">{store.name}</h1>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 mb-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-2">{store.name}</h2>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                {store.category}
              </span>
            </div>
            {store.visited && (
              <div className="flex items-center text-green-600">
                <CheckCircle size={20} className="mr-1" />
                <span className="text-sm font-medium">방문 완료</span>
              </div>
            )}
          </div>
          
          <p className="text-gray-600 mb-4">{store.description}</p>
          
          <div className="space-y-3 mb-4">
            <div className="flex items-center text-gray-600">
              <MapPin size={16} className="mr-2" />
              <span className="text-sm">{store.address}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Phone size={16} className="mr-2" />
              <span className="text-sm">전화 문의 후 방문</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock size={16} className="mr-2" />
              <span className="text-sm">영업시간: 09:00 - 22:00</span>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4 border border-green-200 mb-4">
            <div className="flex items-center mb-2">
              <Gift className="text-green-600 mr-2" size={20} />
              <span className="font-bold text-green-800">방문 혜택</span>
            </div>
            <p className="text-green-700 font-medium">{store.reward}</p>
          </div>
        </div>

        <div className="mb-6">
          <StoreMap storeName={store.name} address={store.address} />
        </div>

        <div className="space-y-4 mb-6">
          {!store.visited ? (
            showQRAuth ? (
              <QRStampAuth 
                storeName={store.name} 
                onSuccess={handleVisitSuccess}
              />
            ) : (
              <Button 
                onClick={() => setShowQRAuth(true)}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold rounded-xl"
              >
                🏪 방문하고 스탬프 받기
              </Button>
            )
          ) : (
            <div className="space-y-4">
              <div className="w-full py-3 bg-green-50 border border-green-200 text-green-800 font-bold rounded-xl text-center">
                ✅ 방문 완료! 혜택을 받아보세요
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <SNSShare 
                  title={`${store.name} 방문 완료`}
                  description={`${parentCoupon.title}에서 ${store.name}을 방문했어요! ${store.reward} 혜택도 받았답니다 🎉`}
                />
              </div>
            </div>
          )}
          
          <Link to={`/coupon/${parentCoupon.id}`}>
            <Button variant="outline" className="w-full py-3 rounded-xl">
              스탬프 카드로 돌아가기
            </Button>
          </Link>
        </div>

        <div className="p-4 bg-yellow-50 rounded-xl border border-yellow-200">
          <p className="text-yellow-800 text-sm">
            💡 <strong>이용 팁:</strong> 가게 방문 시 "스탬프 투어 참여"라고 말씀해주시면 
            더 친절한 서비스를 받으실 수 있어요!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default StoreDetail;
