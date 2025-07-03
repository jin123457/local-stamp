
import React from 'react';
import { Trophy, Star, Crown, Sparkles } from 'lucide-react';

const LevelInfo = () => {
  const levels = [
    {
      level: 1,
      name: "여행 초보자",
      icon: <Star size={20} />,
      requirement: "0-7 스탬프",
      color: "text-gray-600",
      bgColor: "bg-gray-100",
      description: "첫 발걸음을 내딛는 탐험가"
    },
    {
      level: 2,
      name: "골목 탐험가",
      icon: <Trophy size={20} />,
      requirement: "8-14 스탬프",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      description: "동네 구석구석을 누비는 탐험가"
    },
    {
      level: 3,
      name: "스탬프 수집가",
      icon: <Sparkles size={20} />,
      requirement: "15-29 스탬프",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      description: "스탬프의 참된 가치를 아는 수집가"
    },
    {
      level: 4,
      name: "동네 마스터",
      icon: <Crown size={20} />,
      requirement: "30+ 스탬프",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
      description: "골목의 모든 비밀을 아는 마스터"
    }
  ];

  return (
    <div className="space-y-3">
      <h3 className="text-lg font-bold text-gray-800 mb-4">레벨 시스템</h3>
      {levels.map((level) => (
        <div key={level.level} className={`${level.bgColor} rounded-lg p-4 border`}>
          <div className="flex items-center mb-2">
            <div className={`${level.color} mr-3`}>
              {level.icon}
            </div>
            <div>
              <h4 className={`font-bold ${level.color}`}>
                Level {level.level}: {level.name}
              </h4>
              <p className="text-sm text-gray-600">{level.requirement}</p>
            </div>
          </div>
          <p className="text-sm text-gray-700">{level.description}</p>
        </div>
      ))}
    </div>
  );
};

export default LevelInfo;
