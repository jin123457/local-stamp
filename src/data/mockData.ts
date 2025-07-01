
export interface Store {
  id: string;
  name: string;
  description: string;
  category: string;
  address: string;
  image: string;
  visited: boolean;
  reward: string;
}

export interface CouponGroup {
  id: string;
  title: string;
  theme: string;
  location: string;
  description: string;
  image: string;
  stores: Store[];
  completedStamps: number;
  totalStamps: number;
  finalReward: string;
  backgroundColor: string;
  textColor: string;
}

export const mockCouponGroups: CouponGroup[] = [
  {
    id: '1',
    title: '망원동 감성 카페투어',
    theme: 'MZ골목탐방',
    location: '서울 망원동',
    description: '인스타 감성 넘치는 망원동 핫플레이스를 탐방해보세요',
    image: '/placeholder.svg',
    backgroundColor: 'from-pink-100 to-purple-100',
    textColor: 'text-purple-800',
    completedStamps: 2,
    totalStamps: 5,
    finalReward: '망원동 굿즈 세트',
    stores: [
      {
        id: '1-1',
        name: '모모카페',
        description: '수제 디저트와 핸드드립 커피 전문점',
        category: '카페',
        address: '서울 마포구 망원동 123-45',
        image: '/placeholder.svg',
        visited: true,
        reward: '아메리카노 500원 할인'
      },
      {
        id: '1-2',
        name: '작은서점 북카페',
        description: '책과 커피를 함께 즐길 수 있는 복합공간',
        category: '서점',
        address: '서울 마포구 망원동 234-56',
        image: '/placeholder.svg',
        visited: true,
        reward: '음료 주문 시 쿠키 서비스'
      },
      {
        id: '1-3',
        name: '꽃집 플라워샵',
        description: '계절 꽃다발과 화분 전문',
        category: '꽃집',
        address: '서울 마포구 망원동 345-67',
        image: '/placeholder.svg',
        visited: false,
        reward: '미니 화분 10% 할인'
      },
      {
        id: '1-4',
        name: '브런치 하우스',
        description: '홈메이드 브런치와 샐러드',
        category: '음식점',
        address: '서울 마포구 망원동 456-78',
        image: '/placeholder.svg',
        visited: false,
        reward: '브런치 세트 15% 할인'
      },
      {
        id: '1-5',
        name: '빈티지 소품샵',
        description: '유니크한 빈티지 소품과 액세서리',
        category: '소품샵',
        address: '서울 마포구 망원동 567-89',
        image: '/placeholder.svg',
        visited: false,
        reward: '전 상품 20% 할인'
      }
    ]
  },
  {
    id: '2',
    title: '부평 생활권 쿠폰',
    theme: '실속파주부',
    location: '인천 부평구',
    description: '생활에 꼭 필요한 가게들의 실속 혜택 모음',
    image: '/placeholder.svg',
    backgroundColor: 'from-green-100 to-blue-100',
    textColor: 'text-green-800',
    completedStamps: 0,
    totalStamps: 4,
    finalReward: '5,000원 현금 할인',
    stores: [
      {
        id: '2-1',
        name: '부평마트',
        description: '신선한 식재료와 생필품',
        category: '마트',
        address: '인천 부평구 부평동 111-22',
        image: '/placeholder.svg',
        visited: false,
        reward: '3만원 이상 구매시 2천원 할인'
      },
      {
        id: '2-2',
        name: '미용실 헤어플러스',
        description: '컷, 펌, 염색 전문 미용실',
        category: '미용실',
        address: '인천 부평구 부평동 222-33',
        image: '/placeholder.svg',
        visited: false,
        reward: '커트 서비스 시 샴푸 무료'
      },
      {
        id: '2-3',
        name: '엄마손 분식',
        description: '옛날 떡볶이와 순대 맛집',
        category: '분식',
        address: '인천 부평구 부평동 333-44',
        image: '/placeholder.svg',
        visited: false,
        reward: '떡볶이 세트 1천원 할인'
      },
      {
        id: '2-4',
        name: '동네 세탁소',
        description: '드라이클리닝과 수선 서비스',
        category: '세탁소',
        address: '인천 부평구 부평동 444-55',
        image: '/placeholder.svg',
        visited: false,
        reward: '드라이클리닝 10% 할인'
      }
    ]
  },
  {
    id: '3',
    title: '은행동 소상공인 연합',
    theme: '창업가상생',
    location: '대전 중구 은행동',
    description: '지역 창업가들이 함께 만든 상생 프로모션',
    image: '/placeholder.svg',
    backgroundColor: 'from-yellow-100 to-orange-100',
    textColor: 'text-orange-800',
    completedStamps: 1,
    totalStamps: 5,
    finalReward: '은행동 상품권 1만원',
    stores: [
      {
        id: '3-1',
        name: '커피하우스 모카',
        description: '핸드드립 원두커피 전문점',
        category: '카페',
        address: '대전 중구 은행동 100-11',
        image: '/placeholder.svg',
        visited: true,
        reward: '원두커피 15% 할인'
      },
      {
        id: '3-2',
        name: '동네서점',
        description: '지역 문화 거점서점',
        category: '서점',
        address: '대전 중구 은행동 200-22',
        image: '/placeholder.svg',
        visited: false,
        reward: '도서 구매시 북마크 증정'
      },
      {
        id: '3-3',
        name: '베이커리 밀',
        description: '매일 굽는 신선한 빵집',
        category: '베이커리',
        address: '대전 중구 은행동 300-33',
        image: '/placeholder.svg',
        visited: false,
        reward: '크로와상 2개 구매시 1개 무료'
      },
      {
        id: '3-4',
        name: '꽃담화원',
        description: '결혼식, 개업식 화환 전문',
        category: '꽃집',
        address: '대전 중구 은행동 400-44',
        image: '/placeholder.svg',
        visited: false,
        reward: '꽃다발 제작시 20% 할인'
      },
      {
        id: '3-5',
        name: '한식당 고향',
        description: '집밥 같은 정성 한식',
        category: '음식점',
        address: '대전 중구 은행동 500-55',
        image: '/placeholder.svg',
        visited: false,
        reward: '정식 주문시 반찬 무료 리필'
      }
    ]
  },
  {
    id: '4',
    title: '블루윙즈 팬 상권',
    theme: '팬커뮤니티',
    location: '수원 전체',
    description: '수원 삼성 블루윙즈 팬이 운영하는 가게들',
    image: '/placeholder.svg',
    backgroundColor: 'from-blue-100 to-sky-100',
    textColor: 'text-blue-800',
    completedStamps: 3,
    totalStamps: 6,
    finalReward: '블루윙즈 응원 굿즈 세트',
    stores: [
      {
        id: '4-1',
        name: '응원카페 승리',
        description: '경기날마다 응원가가 흘러나오는 카페',
        category: '카페',
        address: '수원시 영통구 매탄동 111-11',
        image: '/placeholder.svg',
        visited: true,
        reward: '블루윙즈 승리시 음료 50% 할인'
      },
      {
        id: '4-2',
        name: '치킨집 골인',
        description: '경기 시청하며 치킨과 맥주를',
        category: '치킨집',
        address: '수원시 팔달구 행궁동 222-22',
        image: '/placeholder.svg',
        visited: true,
        reward: '후반전 득점시 맥주 1병 서비스'
      },
      {
        id: '4-3',
        name: '스포츠바 빅매치',
        description: '대형 스크린으로 경기 관람',
        category: '주점',
        address: '수원시 영통구 영통동 333-33',
        image: '/placeholder.svg',
        visited: true,
        reward: '팀 유니폼 착용시 안주 10% 할인'
      },
      {
        id: '4-4',
        name: '분식집 킥오프',
        description: '경기 전 간단한 식사',
        category: '분식',
        address: '수원시 팔달구 화서동 444-44',
        image: '/placeholder.svg',
        visited: false,
        reward: '떡볶이 세트 2천원 할인'
      },
      {
        id: '4-5',
        name: '굿즈샵 팬하트',
        description: '블루윙즈 공식 굿즈 판매',
        category: '굿즈샵',
        address: '수원시 영통구 원천동 555-55',
        image: '/placeholder.svg',
        visited: false,
        reward: '굿즈 구매시 응원 스티커 증정'
      },
      {
        id: '4-6',
        name: '노래방 챔피언',
        description: '응원가 부르기 좋은 노래방',
        category: '노래방',
        address: '수원시 팔달구 매교동 666-66',
        image: '/placeholder.svg',
        visited: false,
        reward: '2시간 이용시 30분 추가 서비스'
      }
    ]
  }
];
