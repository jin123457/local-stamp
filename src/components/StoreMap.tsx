
import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';

interface StoreMapProps {
  storeName: string;
  address: string;
}

const StoreMap = ({ storeName, address }: StoreMapProps) => {
  const handleOpenMap = () => {
    const query = encodeURIComponent(`${storeName} ${address}`);
    const mapUrl = `https://map.kakao.com/link/search/${query}`;
    window.open(mapUrl, '_blank');
  };

  return (
    <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <MapPin className="text-blue-600 mr-2" size={20} />
          <span className="font-bold text-blue-800">위치 정보</span>
        </div>
        <button
          onClick={handleOpenMap}
          className="flex items-center text-blue-600 text-sm font-medium hover:text-blue-800"
        >
          <ExternalLink size={16} className="mr-1" />
          지도 열기
        </button>
      </div>
      <p className="text-blue-700 text-sm mb-2">{address}</p>
      <div className="bg-white rounded p-3 text-center">
        <div className="text-gray-600 text-sm">🗺️ 카카오맵에서 정확한 위치를 확인하세요</div>
      </div>
    </div>
  );
};

export default StoreMap;
