# 맛동산 프론트엔드 리팩토링 진행사항 🚀

### 📂 프로젝트 개요

Vue.js를 기반으로 한 프론트엔드 프로젝트입니다. 현재 AWS와 GitHub Actions를 활용하여 배포 및 CI/CD 환경을 성공적으로 구축했습니다.

---

## 💡 현재 진행 상황

1. **AWS 배포 환경 구성**
   - **S3**: Vue.js 프로젝트를 빌드한 정적 파일을 S3에 업로드해 정적 웹 호스팅을 구성했습니다.
   - **CloudFront**: 전 세계 사용자들에게 빠르고 안정적인 콘텐츠 제공을 위해 CDN(Content Delivery Network) 설정을 완료했습니다.
   - **Route 53**: 사용자 정의 도메인을 연결하고 HTTPS 인증서를 적용해 보안을 강화했습니다.

2. **GitHub Actions를 활용한 CI/CD 구축**
   - **자동화된 배포**: GitHub Actions를 사용해 코드 변경 시 자동으로 빌드 및 S3 배포가 이루어지도록 설정했습니다.
   - **CloudFront 캐시 무효화**: 배포 이후 변경된 콘텐츠를 즉시 반영하기 위해 자동 캐시 무효화를 적용했습니다.

---

## 🛠 사용 기술 스택

- **프레임워크**: Vue.js
- **AWS 서비스**: S3, CloudFront, Route 53
- **CI/CD**: GitHub Actions
