![Logo_Default](https://github.com/user-attachments/assets/40a5f79b-c09e-4a88-a7ba-029541638004)
# Glamn 507 - Backend

> ✨ 이 프로젝트는 [Glamn 507 Frontend 레포](https://github.com/spkoreaa/Glamn507_Front-end)와 함께 구성됩니다.  
> 🔗 실제 배포 사이트: [https://www.glamn507.com/](https://www.glamn507.com/)

---

## 📌 프로젝트 개요
본 프로젝트는 자사에서 제공하는 서비스 및 작업물을 외부에 소개하기 위한 공식 홈페이지입니다.  
React 기반 프론트엔드와 Spring Boot 백엔드, AWS 인프라를 활용하여  
보안성과 확장성을 고려한 구조로 개발되었으며, 현재 운영 중인 서비스입니다.

- 🖥️ **Spring Boot** 기반 RESTful API 서버 설계 및 구현  
- 🔒 AWS EC2 + Nginx + HTTPS 환경에서 **보안 강화된 서버 배포**  
- 🔑 JWT 인증 및 Spring Security 기반 **사용자 인증 시스템 구축**  
- 🗄️ Hibernate + MySQL 기반 DB 설계 및 **AWS RDS 연동**
- 🔐 Presigned URL 방식 적용으로 **보안 강화된 파일 업로드 기능 개발** 
- 📧 Spring Boot Starter Mail 기반 **이메일 발송 기능 개발**  
- 🌐 CORS 및 HTTPS 환경 문제 해결로 **서비스 안정성 확보**

---

## 🛠️ 기술 스택

#### - BACKEND  
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F.svg?style=for-the-badge&logo=springboot&logoColor=white)  
![Spring Security](https://img.shields.io/badge/Spring_Security-6DB33F.svg?style=for-the-badge&logo=springsecurity&logoColor=white)  
![JWT](https://img.shields.io/badge/JWT-000000.svg?style=for-the-badge&logo=jwt&logoColor=white)  

#### - INFRA  
![AWS EC2](https://img.shields.io/badge/AWS_EC2-FF9900.svg?style=for-the-badge&logo=amazonaws&logoColor=white)  
![Route 53](https://img.shields.io/badge/Route_53-232F3E.svg?style=for-the-badge&logo=amazonaws&logoColor=white)  
![Nginx](https://img.shields.io/badge/Nginx-009639.svg?style=for-the-badge&logo=nginx&logoColor=white)  
![HTTPS](https://img.shields.io/badge/HTTPS-007ACC.svg?style=for-the-badge)  
![Presigned URL](https://img.shields.io/badge/Presigned%20URL-0A0A0A.svg?style=for-the-badge&logo=aws)  

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
📦 Glamn507_Back-end
  📂src
   ┣ 📂main
   ┃ ┣ 📂java
   ┃ ┃ ┗ 📂com
   ┃ ┃ ┃ ┗ 📂Glamn507
   ┃ ┃ ┃ ┃ ┣ 📂config
   ┃ ┃ ┃ ┃ ┃ ┣ 📜AwsS3Config.java
   ┃ ┃ ┃ ┃ ┃ ┣ 📜JwtAuthenticationFilter.java
   ┃ ┃ ┃ ┃ ┃ ┣ 📜JwtUtil.java
   ┃ ┃ ┃ ┃ ┃ ┣ 📜SecurityConfig.java
   ┃ ┃ ┃ ┃ ┃ ┗ 📜WebConfig.java
   ┃ ┃ ┃ ┃ ┣ 📂controller
   ┃ ┃ ┃ ┃ ┃ ┣ 📜AuthController.java
   ┃ ┃ ┃ ┃ ┃ ┣ 📜CategoryController.java
   ┃ ┃ ┃ ┃ ┃ ┣ 📜ContactController.java
   ┃ ┃ ┃ ┃ ┃ ┣ 📜S3Controller.java
   ┃ ┃ ┃ ┃ ┃ ┗ 📜WorkController.java
   ┃ ┃ ┃ ┃ ┣ 📂dto
   ┃ ┃ ┃ ┃ ┃ ┣ 📜LoginRequestDto.java
   ┃ ┃ ┃ ┃ ┃ ┣ 📜LoginResponseDto.java
   ┃ ┃ ┃ ┃ ┃ ┣ 📜MainThumbnailDto.java
   ┃ ┃ ┃ ┃ ┃ ┣ 📜NewThumbnailDto.java
   ┃ ┃ ┃ ┃ ┃ ┣ 📜SignupRequestDto.java
   ┃ ┃ ┃ ┃ ┃ ┣ 📜WorkRequestDto.java
   ┃ ┃ ┃ ┃ ┃ ┗ 📜WorkResponseDto.java
   ┃ ┃ ┃ ┃ ┣ 📂entity
   ┃ ┃ ┃ ┃ ┃ ┣ 📜Category.java
   ┃ ┃ ┃ ┃ ┃ ┣ 📜ContactMessage.java
   ┃ ┃ ┃ ┃ ┃ ┣ 📜User.java
   ┃ ┃ ┃ ┃ ┃ ┣ 📜Work.java
   ┃ ┃ ┃ ┃ ┃ ┗ 📜WorkImage.java
   ┃ ┃ ┃ ┃ ┣ 📂repository
   ┃ ┃ ┃ ┃ ┃ ┣ 📜CategoryRepository.java
   ┃ ┃ ┃ ┃ ┃ ┣ 📜ContactMessageRepository.java
   ┃ ┃ ┃ ┃ ┃ ┣ 📜UserRepository.java
   ┃ ┃ ┃ ┃ ┃ ┣ 📜WorkImageRepository.java
   ┃ ┃ ┃ ┃ ┃ ┗ 📜WorkRepository.java
   ┃ ┃ ┃ ┃ ┣ 📂service
   ┃ ┃ ┃ ┃ ┃ ┣ 📜AuthService.java
   ┃ ┃ ┃ ┃ ┃ ┣ 📜CategoryService.java
   ┃ ┃ ┃ ┃ ┃ ┣ 📜ContactService.java
   ┃ ┃ ┃ ┃ ┃ ┣ 📜S3Service.java
   ┃ ┃ ┃ ┃ ┃ ┣ 📜UserService.java
   ┃ ┃ ┃ ┃ ┃ ┗ 📜WorkService.java
   ┃ ┃ ┃ ┃ ┗ 📜SpKoreaBackEndApplication.java
   ┃ ┗ 📂resources
   ┃ ┃ ┣ 📂META-INF
   ┃ ┃ ┃ ┗ 📜additional-spring-configuration-metadata.json
   ┃ ┃ ┣ 📂static
   ┃ ┃ ┣ 📂templates
   ┃ ┃ ┗ 📜application.properties
```
---
## 🌀 프로젝트 배포

Spring Boot 애플리케이션을 EC2 서버에 배포하는 절차는 다음과 같습니다.

```bash
# 1. EC2 인스턴스 접속
ssh -i ~/Downloads/glamn507-keypair.pem ubuntu@3.35.10.180

# 2. JAR 빌드 (로컬 PC에서 실행)
mvn clean package

# 3. 빌드된 JAR 파일 EC2로 전송 (로컬 PC에서 실행)
scp -i ~/Downloads/glamn507-keypair.pem target/Glamn507_Back-end-0.0.1-SNAPSHOT.jar ubuntu@3.35.10.180:~

# 4. EC2에서 JAR 실행 (백그라운드 실행 및 로그 저장)
nohup java -jar Glamn507_Back-end-0.0.1-SNAPSHOT.jar > app.log 2>&1 &

# 5. 실행 상태 및 로그 확인
ps aux | grep java      # 실행 중인 Java 프로세스 확인
tail -f app.log         # 로그 실시간 확인
```

> 🔐 `.pem` 키 파일 경로와 JAR 파일 이름은 환경에 맞게 수정하세요.

> ⚠️ **주의**
> - 현재 GitHub Actions 기반의 자동 배포(`.github/workflows/deploy.yml`) 설정을 시도 중이며,
>   자동 배포 실행 시 다음과 같은 오류가 발생하여 **중단된 상태**입니다:
>
>   ```
>   2025/06/12 08:49:36 Process exited with status 143 from signal TERM
>   ```
>
> - 따라서 **현재는 수동 배포만 정상 동작**하며,
>   GitHub에 코드를 푸시하면 자동 배포가 트리거되어 실패할 수 있으므로 주의하세요.
>   → **배포가 필요할 경우, 위 수동 배포 절차를 따르세요.**



