
import React, { useState } from 'react';
import { QrCode, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface QRStampAuthProps {
  storeName: string;
  onSuccess: () => void;
}

const QRStampAuth = ({ storeName, onSuccess }: QRStampAuthProps) => {
  const [isScanning, setIsScanning] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);

  const handleQRScan = () => {
    setIsScanning(true);
    // QR 스캔 시뮬레이션
    setTimeout(() => {
      setIsScanning(false);
      onSuccess();
    }, 2000);
  };

  const mockQRCode = `SAISAI_${storeName.replace(/\s/g, '_')}_${Date.now()}`;

  return (
    <div className="space-y-4">
      {!showQRCode ? (
        <div className="text-center space-y-4">
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <QrCode className="mx-auto text-blue-600 mb-2" size={48} />
            <h3 className="font-bold text-blue-800 mb-2">QR 코드로 방문 인증</h3>
            <p className="text-sm text-blue-700">
              가게에 비치된 QR 코드를 스캔하거나<br/>
              사장님께 인증 요청을 해주세요
            </p>
          </div>
          
          <div className="space-y-2">
            <Button
              onClick={handleQRScan}
              disabled={isScanning}
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold rounded-xl"
            >
              {isScanning ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  QR 코드 스캔 중...
                </div>
              ) : (
                <>
                  <QrCode size={20} className="mr-2" />
                  QR 코드 스캔하기
                </>
              )}
            </Button>
            
            <Button
              onClick={() => setShowQRCode(true)}
              variant="outline"
              className="w-full py-3 rounded-xl"
            >
              사장님께 보여드릴 코드 생성
            </Button>
          </div>
        </div>
      ) : (
        <div className="text-center space-y-4">
          <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6">
            <div className="bg-black text-white text-xs font-mono p-4 rounded inline-block">
              {mockQRCode}
            </div>
            <p className="text-sm text-gray-600 mt-3">
              이 코드를 사장님께 보여주세요
            </p>
          </div>
          
          <Button
            onClick={() => setShowQRCode(false)}
            variant="outline"
            className="w-full py-3 rounded-xl"
          >
            QR 스캔으로 돌아가기
          </Button>
        </div>
      )}
    </div>
  );
};

export default QRStampAuth;
