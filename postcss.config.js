export default {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 16, // 기준 폰트 크기
      propList: ['*'], // 모든 속성에 적용
      selectorBlackList: [], // 제외할 선택자
      replace: true,
      mediaQuery: false,
      minPixelValue: 0
    }
  }
}
