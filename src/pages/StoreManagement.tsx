
import { useState } from 'react';
import { ArrowLeft, Users, Share, Plus } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const StoreManagement = () => {
  const navigate = useNavigate();
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [showJoinDialog, setShowJoinDialog] = useState(false);
  const [inviteCode, setInviteCode] = useState('');
  const [groupName, setGroupName] = useState('');
  const [groupTheme, setGroupTheme] = useState('');
  const [groupDescription, setGroupDescription] = useState('');

  const handleCreateGroup = () => {
    // 여기서 실제로는 백엔드에 그룹을 생성하고 초대 코드를 받아올 것입니다
    const newInviteCode = Math.random().toString(36).substr(2, 8).toUpperCase();
    setInviteCode(newInviteCode);
    alert(`그룹이 생성되었습니다! 초대 코드: ${newInviteCode}`);
    setShowCreateDialog(false);
  };

  const handleJoinGroup = () => {
    // 여기서 실제로는 초대 코드로 그룹에 참여하는 로직을 구현할 것입니다
    alert(`그룹에 참여했습니다! 코드: ${inviteCode}`);
    setShowJoinDialog(false);
  };

  const handlePublishCoupon = () => {
    // 쿠폰을 발행하고 메인 페이지로 이동
    alert('쿠폰 그룹이 발행되었습니다!');
    navigate('/customer');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center">
            <Link to="/" className="mr-3">
              <ArrowLeft className="text-gray-600" size={24} />
            </Link>
            <div>
              <h1 className="text-xl font-bold text-gray-800">상점 관리</h1>
              <p className="text-sm text-gray-600">쿠폰 그룹을 만들고 관리하세요</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto p-4 space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
            <DialogTrigger asChild>
              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-4 text-center">
                  <Plus className="mx-auto mb-2 text-blue-600" size={32} />
                  <p className="font-medium text-gray-800">그룹 만들기</p>
                  <p className="text-xs text-gray-600 mt-1">새로운 쿠폰 그룹 생성</p>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>새 쿠폰 그룹 만들기</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="그룹 이름"
                  className="w-full p-3 border rounded-lg"
                  value={groupName}
                  onChange={(e) => setGroupName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="테마 (예: #망원동감성)"
                  className="w-full p-3 border rounded-lg"
                  value={groupTheme}
                  onChange={(e) => setGroupTheme(e.target.value)}
                />
                <textarea
                  placeholder="그룹 설명"
                  className="w-full p-3 border rounded-lg h-20 resize-none"
                  value={groupDescription}
                  onChange={(e) => setGroupDescription(e.target.value)}
                />
                <Button onClick={handleCreateGroup} className="w-full">
                  그룹 생성하기
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog open={showJoinDialog} onOpenChange={setShowJoinDialog}>
            <DialogTrigger asChild>
              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-4 text-center">
                  <Users className="mx-auto mb-2 text-green-600" size={32} />
                  <p className="font-medium text-gray-800">그룹 참여</p>
                  <p className="text-xs text-gray-600 mt-1">초대 코드로 참여</p>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>그룹 참여하기</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="초대 코드 입력"
                  className="w-full p-3 border rounded-lg text-center"
                  value={inviteCode}
                  onChange={(e) => setInviteCode(e.target.value.toUpperCase())}
                />
                <Button onClick={handleJoinGroup} className="w-full">
                  그룹 참여하기
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Share className="mr-2" size={20} />
              내 그룹 현황
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-sm font-medium text-blue-800">망원동 감성 카페 투어</p>
                <p className="text-xs text-blue-600">참여 상점: 3개 | 초대 코드: ABC123</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="text-sm font-medium text-green-800">수원 블루윙즈 팬존</p>
                <p className="text-xs text-green-600">참여 상점: 5개 | 초대 코드: XYZ789</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Button onClick={handlePublishCoupon} className="w-full bg-blue-600 hover:bg-blue-700">
          쿠폰 그룹 발행하기
        </Button>
      </main>
    </div>
  );
};

export default StoreManagement;
