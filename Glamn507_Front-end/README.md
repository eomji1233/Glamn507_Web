![Logo_Default](https://github.com/user-attachments/assets/ae1a168a-f023-4b4a-a1d5-f2ebad3ff55d)
# Glamn 507 - Frontend

> ✨ 이 프로젝트는 [Glamn 507 Backend 레포](https://github.com/spkoreaa/Glamn507_Back-end)와 함께 구성됩니다.  
> 🔗 실제 배포 사이트: [https://www.glamn507.com/](https://www.glamn507.com/)
---

## 📌 프로젝트 개요
본 프로젝트는 자사에서 제공하는 서비스 및 작업물을 외부에 소개하기 위한 공식 홈페이지입니다.  
React 기반 프론트엔드와 Spring Boot 백엔드, AWS 인프라를 활용하여  
보안성과 확장성을 고려한 구조로 개발되었으며, 현재 운영 중인 서비스입니다.

- ⚛️ **React** 기반 프론트엔드 설계 및 구현  
- ☁️ **AWS S3 + CloudFront**를 이용한 정적 웹사이트 배포  
- 🔐 Presigned URL 방식 적용으로 **보안 강화된 파일 업로드 기능 개발**  
- ⚙️ **GitHub Actions** 기반 CI/CD 자동화로 무중단 배포 시스템 구축

---

## 🛠️ 기술 스택

#### - FRONTEND
![React](https://img.shields.io/badge/React-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)  
![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)  
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)  
![CSS](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)  
![React Context](https://img.shields.io/badge/React_Context-%23007ACC.svg?style=for-the-badge&logo=react&logoColor=white)  
![JWT](https://img.shields.io/badge/JWT-000000.svg?style=for-the-badge&logo=jwt&logoColor=white)  

#### - INFRA
![AWS S3](https://img.shields.io/badge/AWS%20S3-569A31.svg?style=for-the-badge&logo=amazonaws&logoColor=white)  
![CloudFront](https://img.shields.io/badge/CloudFront-232F3E.svg?style=for-the-badge&logo=amazonaws&logoColor=white)  
![Route 53](https://img.shields.io/badge/Route%2053-232F3E.svg?style=for-the-badge&logo=amazonaws&logoColor=white)  
![Presigned URL](https://img.shields.io/badge/Presigned%20URL-0A0A0A.svg?style=for-the-badge&logo=aws)  
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF.svg?style=for-the-badge&logo=githubactions&logoColor=white)  

#### - ETC
![GitHub](https://img.shields.io/badge/GitHub-181717.svg?style=for-the-badge&logo=github&logoColor=white)  
![MySQL](https://img.shields.io/badge/MySQL-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white)  

---

## 🚀 주요 기능

- 회원가입 및 로그인 기능 (JWT 인증으로 보안 강화)
- 관리자 페이지 (포트폴리오 CRUD 및 이미지 업로드)
- 일반 사용자용 포트폴리오 열람
- Contact Form을 통한 문의 전송 (메일 발송 연동)
- AWS S3 Presigned URL 기반 이미지 업로드로 안전한 파일 처리
---

## 📂 폴더 구조


```
📦 Glamn507_Front-end
┗ 📂 src
  ┣ 📜 App.jsx
  ┣ 📂 assets
  ┃ ┣ 📂 img
  ┃ ┗ 📂 videos
  ┣ 📂 components
  ┃ ┣ 📜 ContactForm.jsx
  ┃ ┣ 📜 CursorFollwer.jsx
  ┃ ┣ 📜 Footer.css
  ┃ ┣ 📜 Footer.jsx
  ┃ ┣ 📜 Header.css
  ┃ ┣ 📜 Header.jsx
  ┃ ┣ 📜 ImageUploader.jsx
  ┃ ┣ 📜 Logo.jsx
  ┃ ┣ 📜 ScrollToTop.jsx
  ┃ ┗ 📜 VideoUploader.jsx
  ┣ 📂 contexts
  ┃ ┗ 📜 AuthContext.jsx
  ┣ 📜 index.js
  ┣ 📂 pages
  ┃ ┣ 📜 About.css
  ┃ ┣ 📜 About.jsx
  ┃ ┣ 📂 admin
  ┃ ┃ ┣ 📜 WorkAdd.css
  ┃ ┃ ┣ 📜 WorkAdd.jsx
  ┃ ┃ ┣ 📜 WorkEdit.css
  ┃ ┃ ┗ 📜 WorkEdit.jsx
  ┃ ┣ 📜 Home.css
  ┃ ┣ 📜 Home.jsx
  ┃ ┣ 📂 user
  ┃ ┃ ┣ 📜 Login.css
  ┃ ┃ ┣ 📜 Login.jsx
  ┃ ┃ ┣ 📜 SignUp.css
  ┃ ┃ ┗ 📜 SignUp.jsx
  ┃ ┗ 📂 work
  ┃   ┣ 📜 WorkDetail.css
  ┃   ┣ 📜 WorkDetail.jsx
  ┃   ┣ 📜 WorkList.css
  ┃   ┗ 📜 WorkList.jsx
  ┗ 📂 utils
    ┣ 📜 authUtils.jsx
    ┗ 📜 s3Uploader.jsx
```
---
## 🌀 프로젝트 배포

GitHub Actions 기반 CI/CD 자동화가 구축되어 있어, GitHub에 코드를 푸시하면 다음 과정이 자동으로 실행됩니다:

```bash
# 1. GitHub에 코드 푸시
git add .
git commit -m "커밋 메시지"
git push origin main
```

→ 이후 GitHub Actions가 자동으로 아래 과정을 수행합니다:

1. `npm install` 및 `npm run build` 실행
2. 빌드된 정적 파일을 S3에 업로드
3. CloudFront 배포 무효화(invalidation) 실행
4. 수정 내용 반영된 최신 버전 배포 완료 🎉

> ✅ 별도의 수동 배포 과정 없이 푸시만으로 자동 반영됩니다.

