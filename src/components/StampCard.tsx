
import { MapPin, Gift, BarChart3 } from 'lucide-react';
import { Store } from '@/data/mockData';

interface StampCardProps {
  stores: Store[];
  completedStamps: number;
  totalStamps: number;
  finalReward: string;
}

const StampCard = ({ stores, completedStamps, totalStamps, finalReward }: StampCardProps) => {
  const progress = (completedStamps / totalStamps) * 100;
  
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-gray-800">스탬프 카드</h3>
        <div className="flex items-center text-blue-600">
          <BarChart3 size={16} className="mr-1" />
          <span className="text-sm font-medium">
            {completedStamps}/{totalStamps} 완료
          </span>
        </div>
      </div>
      
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">진행률</span>
          <span className="text-sm text-gray-600">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-3 mb-4">
        {stores.map((store, index) => (
          <div key={store.id} className="text-center">
            <div className={`w-16 h-16 mx-auto mb-2 rounded-full flex items-center justify-center text-white font-bold text-lg ${
              store.visited 
                ? 'bg-gradient-to-r from-blue-400 to-purple-400' 
                : 'bg-gray-200 text-gray-400'
            }`}>
              {store.visited ? '✓' : index + 1}
            </div>
            <p className="text-xs text-gray-600 font-medium">
              {store.name.length > 6 ? store.name.slice(0, 6) + '...' : store.name}
            </p>
          </div>
        ))}
      </div>
      
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-3 border border-yellow-200">
        <div className="flex items-center justify-center">
          <Gift className="text-orange-500 mr-2" size={20} />
          <span className="text-sm font-medium text-orange-800">
            완주 혜택: {finalReward}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StampCard;
