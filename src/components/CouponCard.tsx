
import { MapPin, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CouponGroup } from '@/data/mockData';

interface CouponCardProps {
  coupon: CouponGroup;
}

const CouponCard = ({ coupon }: CouponCardProps) => {
  const progress = (coupon.completedStamps / coupon.totalStamps) * 100;
  
  return (
    <Link to={`/coupon/${coupon.id}`}>
      <div className={`bg-gradient-to-r ${coupon.backgroundColor} rounded-xl p-5 mb-4 shadow-sm hover:shadow-md transition-shadow`}>
        <div className="flex justify-between items-start mb-3">
          <div>
            <span className={`text-xs px-2 py-1 rounded-full ${coupon.textColor} bg-white bg-opacity-70 font-medium`}>
              {coupon.theme}
            </span>
            <h3 className={`text-lg font-bold mt-2 ${coupon.textColor}`}>
              {coupon.title}
            </h3>
          </div>
          <div className="text-right">
            <div className="flex items-center text-gray-600 text-sm mb-2">
              <MapPin size={12} className="mr-1" />
              {coupon.location}
            </div>
            <div className="flex items-center">
              <BarChart3 size={16} className="text-gray-600 mr-1" />
              <span className="text-sm text-gray-600">{Math.round(progress)}% 완료</span>
            </div>
          </div>
        </div>
        
        <p className={`text-sm ${coupon.textColor} opacity-80 mb-3`}>
          {coupon.description}
        </p>
        
        <div className="bg-white bg-opacity-50 rounded-lg p-3">
          <div className="flex justify-between items-center mb-2">
            <span className={`text-sm font-medium ${coupon.textColor}`}>
              진행률: {coupon.completedStamps}/{coupon.totalStamps}
            </span>
            <span className={`text-sm ${coupon.textColor}`}>
              {Math.round(progress)}%
            </span>
          </div>
          <div className="w-full bg-white bg-opacity-70 rounded-full h-2 mb-2">
            <div
              className="h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className={`text-xs ${coupon.textColor} mt-2 font-medium`}>
            🎁 완주 혜택: {coupon.finalReward}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CouponCard;
