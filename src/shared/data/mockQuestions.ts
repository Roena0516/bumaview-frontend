export interface InterviewQuestion {
  id: string;
  content: string;
  company: string;
  field: string;
  year: number;
}

export const mockQuestions: InterviewQuestion[] = [
  {
    id: '1',
    content: '간단한 자기소개 부탁드립니다.',
    company: '마이다스IT',
    field: '백엔드',
    year: 2023
  },
  {
    id: '2',
    content: '프로젝트를 하면서 가장 중요하게 생각하는 것이 무엇인가요?',
    company: '마이다스IT',
    field: '백엔드',
    year: 2023
  },
  {
    id: '3',
    content: '우리 회사에 왜 지원하게 되었나요?',
    company: '모비어스',
    field: '백엔드',
    year: 2024
  },
  {
    id: '4',
    content: '요즘 무슨 책 읽고 계신가요?',
    company: 'U2SR',
    field: 'AI',
    year: 2025
  },
  {
    id: '5',
    content: '팀 프로젝트에서 갈등이 생겼을 때 어떻게 해결하나요?',
    company: '카카오',
    field: '프론트엔드',
    year: 2024
  },
  {
    id: '6',
    content: '본인의 장점과 단점을 말해주세요.',
    company: '네이버',
    field: '백엔드',
    year: 2023
  },
  {
    id: '7',
    content: '5년 후 본인의 모습은 어떨 것 같나요?',
    company: '삼성',
    field: 'AI',
    year: 2024
  },
  {
    id: '8',
    content: '이 분야를 선택한 이유가 무엇인가요?',
    company: 'LG',
    field: 'UX/UI',
    year: 2023
  },
  {
    id: '9',
    content: '가장 기억에 남는 프로젝트는 무엇인가요?',
    company: '토스',
    field: '프론트엔드',
    year: 2024
  },
  {
    id: '10',
    content: '새로운 기술을 학습할 때 어떤 방식을 사용하나요?',
    company: '라인',
    field: '백엔드',
    year: 2025
  },
  {
    id: '11',
    content: '스트레스를 받을 때 어떻게 해소하나요?',
    company: '쿠팡',
    field: 'DevOps',
    year: 2024
  },
  {
    id: '12',
    content: '실패한 경험과 그로부터 배운 점은?',
    company: '배달의민족',
    field: '프론트엔드',
    year: 2023
  }
];

// 유틸리티 함수들
export const getUniqueCompanies = (): string[] => {
  return Array.from(new Set(mockQuestions.map(q => q.company))).sort();
};

export const getUniqueFields = (): string[] => {
  return Array.from(new Set(mockQuestions.map(q => q.field))).sort();
};

export const getUniqueYears = (): number[] => {
  return Array.from(new Set(mockQuestions.map(q => q.year))).sort((a, b) => b - a);
};