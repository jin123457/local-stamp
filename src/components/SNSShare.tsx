
import React from 'react';
import { Share2 } from 'lucide-react';
import { toast } from 'sonner';

interface SNSShareProps {
  title: string;
  description: string;
  url?: string;
}

const SNSShare = ({ title, description, url = window.location.href }: SNSShareProps) => {
  const shareData = {
    title: `🌿 사이사이 - ${title}`,
    text: description,
    url: url
  };

  const handleKakaoShare = () => {
    const kakaoUrl = `https://story.kakao.com/share?url=${encodeURIComponent(url)}&text=${encodeURIComponent(`${title} - ${description}`)}`;
    window.open(kakaoUrl, '_blank', 'width=600,height=400');
    toast.success('카카오톡으로 공유했습니다! 📱');
  };

  const handleInstagramShare = () => {
    // Instagram은 직접 링크 공유가 제한적이므로 텍스트 복사
    const text = `🌿 사이사이에서 ${title}을 완주했어요! \n${description}\n\n#사이사이 #취향지도 #골목상권 #스탬프투어`;
    navigator.clipboard.writeText(text);
    toast.success('인스타그램 공유 텍스트가 복사되었습니다! 📋');
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share(shareData);
        toast.success('공유가 완료되었습니다! 🎉');
      } catch (error) {
        console.log('공유 취소됨');
      }
    } else {
      // Fallback: URL 복사
      navigator.clipboard.writeText(url);
      toast.success('링크가 복사되었습니다! 📋');
    }
  };

  return (
    <div className="space-y-3">
      <h4 className="font-bold text-gray-800 mb-3">공유하기</h4>
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={handleKakaoShare}
          className="flex items-center justify-center p-3 bg-yellow-400 text-yellow-900 rounded-lg font-medium hover:bg-yellow-500 transition-colors"
        >
          💬 카카오톡
        </button>
        <button
          onClick={handleInstagramShare}
          className="flex items-center justify-center p-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-colors"
        >
          📸 인스타그램
        </button>
      </div>
      <button
        onClick={handleNativeShare}
        className="w-full flex items-center justify-center p-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
      >
        <Share2 size={16} className="mr-2" />
        더 많은 앱으로 공유
      </button>
    </div>
  );
};

export default SNSShare;
