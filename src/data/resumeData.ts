import { ResumeData } from "@/types/resume";

export const resumeData: ResumeData = {
  profile: {
    name: "수완",
    englishName: "Soowan",
    role: "Backend Software Engineer",
    tagline:
      "암호화 보안 게이트웨이 설계부터 DDD·클린 아키텍처 전환까지, 문제의 본질을 구조적으로 해결하는 백엔드 엔지니어입니다.",
    summary: [
      "현재 아이네크(2024.04 ~ 재직 중)에서 AI 자동화 공격 및 토큰 탈취를 방어하는 암호화 봉투 게이트웨이(INEK-GATEWAY)를 설계·구현하고, Grails 2.4.5 레거시 서버와 AngularJS(CoffeeScript)/Angular(TypeScript) 유지보수 및 BLE Central/Peripheral 역할을 수행하는 재사용 가능한 iOS 모바일 출입증 프레임워크를 개발했습니다.",
      "초기 학습기(`crello_be`)과 서브 프로젝트(`soobook-api`)에서 단순 레이어드 아키텍처만 고집하며 겪었던 '서비스 계층 비대화'와 '강결합 문제'를 복기하여, 메인 프로젝트(`hactto-api`)에 DDD(Domain-Driven Design)와 클린 아키텍처(Ports & Adapters, CQRS)를 도입해 해결했습니다.",
      "현재 `hactto-api`의 대규모 회차·알고리즘 통계 연산과 배치 처리 특성상 Node.js 단일 스레드 이벤트 루프보다 JVM 멀티스레딩 및 Spring 생태계가 유리하다고 판단하여 **Spring Boot로의 아키텍처 마이그레이션**을 준비하고 있습니다.",
    ],
    email: "ksw9565@gmail.com",
    github: "https://github.com/soowan95",
    location: "Seoul, South Korea",
    keyMetrics: [
      {
        label: "Current Experience",
        value: "아이네크 (2024.04 ~)",
        description: "INEK-GATEWAY 보안 설계 · Grails/Angular 유지보수 · iOS BLE 출입증 프레임워크 개발",
      },
      {
        label: "Architecture Evolution",
        value: "Layered ➔ DDD & Clean",
        description: "서브 프로젝트(soobook-api)의 강결합 한계를 CQRS·헥사고날 구조(hactto-api)로 해소",
      },
      {
        label: "Core & Migration",
        value: "NestJS ➔ Spring Boot",
        description: "TypeScript/NestJS 주력 설계 및 JVM 기반 대용량 연산 마이그레이션 준비",
      },
    ],
  },
  architectureEvolution: [
    {
      phase: "Stage 1 · Spring Boot 학습기",
      period: "crello_be / prj1-be / prj2-be",
      title: "획일적인 레이어드 아키텍처(Layered Architecture)와 절차지향적 서비스 구현",
      repos: ["soowan95/crello_be", "soowan95/prj2-be", "soowan95/prj1-be"],
      problemOrLimitation:
        "백엔드 개발 초기에는 디자인 패턴이나 도메인 모델링에 대한 고민 없이, 모든 프로젝트를 관성적인 Controller - Service - Repository(JPA/QueryDSL) 3계층 구조로만 작성했습니다. 그 결과 엔티티는 단순 데이터 홀더(Getter/Setter)로 전락하고 모든 비즈니스 규칙이 Service에 절차지향적으로 쌓였습니다.",
      solutionOrLesson:
        "Spring Security + JWT 인증 필터 체인과 QueryDSL 동적 쿼리 등 백엔드 기본기를 다졌으나, '기능이 동작하는 코드'와 '변경에 유연한 구조'는 다르다는 아키텍처적 문제의식을 갖게 되었습니다.",
    },
    {
      phase: "Stage 2 · 서브 프로젝트 (전환점)",
      period: "soobook-api (TypeScript + NestJS)",
      title: "실제 도메인(복식부기·다중 통화 가계부)에서 마주한 레이어드 구조의 한계",
      repos: ["soowan95/soobook-api", "soowan95/soobook-ios"],
      problemOrLimitation:
        "TypeORM 기반의 `soobook-api`에서도 특별한 아키텍처나 디자인 패턴 없이 개발을 진행했습니다. 동시성 제어를 위한 `@Recursion(3, OptimisticLockVersionMismatchError)` 데코레이터나 `decimal.js` 정밀 연산 등을 구현했지만, `TransactionService`가 `Account`, `Balance`, `Category`, `Currency` 서비스를 모두 직접 주입받아 호출하면서 모듈 간 결합도가 급격히 높아지고 단위 테스트 작성이 어려워졌습니다.",
      solutionOrLesson:
        "도메인 규칙(잔액 검증, 환율 계산, 이체 정합성)이 인프라(TypeORM Entity)와 강하게 얽혀 있을 때 유지보수 비용이 기하급수적으로 증가함을 체감했고, 다음 프로젝트에서는 도메인을 순수하게 격리해야겠다는 명확한 목표를 세웠습니다.",
    },
    {
      phase: "Stage 3 · 메인 프로젝트 & Next Step",
      period: "hactto-api (DDD · Clean Architecture ➔ Spring Boot 준비)",
      title: "DDD·클린 아키텍처(CQRS)를 통한 결합도 해소 및 런타임 한계 극복을 위한 마이그레이션",
      repos: ["soowan95/hactto-api", "soowan95/hactto-client", "soowan95/hactto-algorithm"],
      problemOrLimitation:
        "`soobook-api`에서의 아쉬움을 해결하기 위해 `hactto-api`에 4계층 클린 아키텍처(CQRS + Ports & Adapters)를 전면 도입했습니다. 나아가 1,100회차 이상의 로또 알고리즘 시뮬레이션 배치가 늘어나며 Node.js 싱글 스레드 환경의 CPU 바운드 연산 한계를 마주했습니다.",
      solutionOrLesson:
        "의존성 역전(DIP)과 도메인 이벤트로 복잡한 비즈니스를 깔끔하게 격리하는 데 성공했으며, 현재는 확립된 DDD 도메인 모델을 바탕으로 CPU 집약적 배치와 멀티스레드 처리에 강점이 있는 **Spring Boot로의 마이그레이션**을 설계·준비하고 있습니다.",
    },
  ],
  primaryBackend: [
    {
      name: "TypeScript & NestJS",
      badge: "Primary Stack · Node.js Ecosystem",
      tagline: "DDD · 클린 아키텍처(Hexagonal) 및 CQRS 패턴 기반의 모듈형 서버 엔지니어링",
      description:
        "TypeScript의 정적 타입 시스템과 NestJS의 DI(의존성 주입) 컨테이너를 활용하여, 비즈니스 도메인 계층이 외부 인프라나 ORM에 오염되지 않는 확장 가능한 백엔드 아키텍처를 설계합니다.",
      coreModules: [
        "@nestjs/cqrs (Command/Query/EventBus)",
        "Prisma ORM & TypeORM",
        "Custom Guards / Interceptors / Pipes",
        "Passport / JWT & Crypto (HMAC/TOTP)",
        "@nestjs/schedule & Socket.IO Gateway",
        "Jest / Supertest",
      ],
      architectureStrengths: [
        "Ports & Adapters (DIP): `Symbol` 토큰 기반의 추상 포트(Port)와 영속성 어댑터/매퍼(Adapter/Mapper)를 분리하여 도메인 순수성 보장 및 ORM 교체 유연성 확보",
        "DDD 전술적 설계 & Event Sourcing: Aggregate Root와 불변 Value Object 내부에 도메인 규칙을 캡슐화하고, 도메인 이벤트 스트림 기반의 상태 복원 및 비동기 후처리 구현",
        "실행 컨텍스트 제어: Request-Scoped Guard, 커스텀 데코레이터(메타데이터 리플렉션), 전역 Interceptor를 활용한 인증·접근 제어 및 공통 응답 규격화",
      ],
      accentColor: "emerald",
    },
    {
      name: "Java / Groovy (Spring Boot & Grails)",
      badge: "JVM Ecosystem & Migration Stack",
      tagline: "프레임워크 독립적 보안 모듈 설계, Grails(2.4.5) 실무 운영 및 Spring Boot 아키텍처",
      description:
        "Spring/Hibernate 기반 위에서 동작하는 Grails 2.4.5 레거시 백엔드를 실무에서 유지보수하고 표준 암호화 명세(NIST/RFC) 기반의 멀티 모듈 라이브러리를 개발하며, Spring Security·JPA·QueryDSL 역량에 DDD 설계를 접목하려 하고 있습니다.",
      coreModules: [
        "Spring Boot & Spring MVC",
        "Spring Security & Servlet Filter Chain",
        "Java Cryptography (ECDH P-256 / HKDF / AES-GCM)",
        "Spring Data JPA / Hibernate & QueryDSL",
        "Grails 2.4.5 (Groovy / GORM)",
      ],
      architectureStrengths: [
        "프레임워크 불가지론적(Framework-Agnostic) 코어 설계: 비즈니스/보안 코어 모듈을 순수 Java로 작성하고, Grails와 Spring Boot 필터 어댑터를 분리하여 이종 프레임워크 간 호환성 확보",
        "JVM 기반 영속성 계층(JPA / Hibernate / GORM) 제어: 영속성 컨텍스트 생명주기, 지연 로딩(Lazy Loading) 프록시 이슈 및 더티 체킹을 고려한 안전한 트랜잭션 관리와 QueryDSL 동적 쿼리 최적화",
        "런타임 특성에 맞춘 기술 선택: 단일 스레드 이벤트 루프(Node.js)의 CPU 연산 병목을 극복하기 위한 JVM 멀티스레드 병렬 처리 및 배치 아키텍처 설계",
      ],
      accentColor: "blue",
    },
  ],
  supportingSkills: [
    {
      category: "Database, ORM & Caching",
      description: "관계형 데이터베이스 모델링, 동시성 제어 및 인메모리 캐시 전략",
      skills: [
        {
          name: "MySQL / MariaDB (Prisma & TypeORM / JPA)",
          detail:
            "멀티 스키마 모듈화 및 마이그레이션 형상 관리, 낙관적 락(Optimistic Lock `@Version`)을 활용한 동시성 정합성 제어 및 복합 인덱스 쿼리 최적화",
        },
        {
          name: "Redis (ioredis)",
          detail:
            "분산 락(Distributed Lock, TTL 기반 중복 실행 방지), 인메모리 세션·차단 목록 O(1) 조회 캐싱, Look-aside 캐시 전략 구성",
        },
      ],
    },
    {
      category: "Security, Infra & Integration",
      description: "표준 암호화 프로토콜 구현, 컨테이너 자동화 및 서드파티 파이프라인",
      skills: [
        {
          name: "Cryptographic Protocol (NIST / RFC)",
          detail:
            "ECDH(P-256) 키 합의, HKDF-SHA256 세션 키 유도, AES-GCM(AAD) 봉투·티켓 암복호화 및 Java-TypeScript 간 공통 Test Vector 정합성 검증",
        },
        {
          name: "Docker & GitHub Actions CI/CD",
          detail:
            "Docker Compose 기반 멀티 컨테이너 환경 구성, GitHub Actions를 통한 빌드·테스트 검증 및 BuildKit Secret 기반 자동화 배포",
        },
        {
          name: "AWS (EC2, RDS, S3, Textract) & Sharp",
          detail:
            "클라우드 인프라 운영, AWS SDK(Textract OCR) 연동 및 Node.js `sharp`/`jsQR` 스트림 기반의 고성능 서버 사이드 이미지 가공 파이프라인",
        },
      ],
    },
    {
      category: "Client & Cross-Platform",
      description: "레거시 모듈 로더부터 모던 SPA·모바일 네이티브까지 아우르는 연동 역량",
      skills: [
        {
          name: "AngularJS (RequireJS/AMD) & Angular",
          detail:
            "AngularJS(1.x) + CoffeeScript 레거시용 AMD 번들 및 모던 Angular + TypeScript용 npm 패키지 듀얼 빌드 체계 구축 및 유지보수",
        },
        {
          name: "iOS (Swift & CoreBluetooth)",
          detail:
            "`BleCentral`·`BlePeripheral` 싱글톤 기반 재사용 프레임워크 설계, `CryptoSwift`를 활용한 AES-CBC 리더기 암호화 통신 및 `.sh` 빌드 스크립트 구성",
        },
        {
          name: "React / Next.js",
          detail:
            "App Router(SSR/SSG) 기반 풀스택 웹 개발, TypeScript 인터페이스 공유 및 데이터 시각화 UI 구현",
        },
      ],
    },
  ],
  projects: [
    {
      id: "hactto-api-main",
      title: "[Main Project] Hactto API — DDD & 클린 아키텍처 기반 로또 분석 풀스택 플랫폼",
      subtitle:
        "서브 프로젝트(soobook-api)의 계층 간 강결합 문제를 해소하기 위해 CQRS·헥사고날 아키텍처와 이벤트 소싱으로 설계한 메인 백엔드 (Spring Boot 마이그레이션 준비 중)",
      period: "Main Project · soowan95/hactto-api (v1.7.3) & hactto-client",
      role: "Full-Stack & Backend Architecture (DDD · Clean Architecture · CQRS)",
      defaultOpen: false,
      techStack: [
        "TypeScript",
        "NestJS (@nestjs/cqrs)",
        "DDD & Clean Architecture",
        "Prisma (MariaDB)",
        "Redis (ioredis)",
        "Socket.IO",
        "PortOne SDK",
        "AWS Textract / Sharp",
      ],
      overview:
        "초기 서브 프로젝트(`soobook-api`)에서 별도의 디자인 패턴 없이 레이어드 아키텍처로만 개발하며 겪었던 '서비스 비대화'와 'ORM 강결합' 문제를 근본적으로 해소하기 위해 설계한 메인 프로젝트입니다. 모든 모듈(`lottery-analysis`, `number`, `user`)을 `Presentation - Application(CQRS) - Domain(Aggregate/VO/Port) - Infrastructure(Adapter/Mapper)`로 엄격히 분리했으며, 현재 대용량 알고리즘 연산 최적화를 위해 **Spring Boot로의 마이그레이션**을 준비하고 있습니다.",
      highlights: [
        "서브 프로젝트의 한계를 극복한 DDD & Clean Architecture: 도메인 계층이 Prisma ORM을 전혀 모르도록 `Symbol` 기반 Port 인터페이스(`PREDICTION_REPOSITORY_TOKEN` 등)와 `InfraMapper`를 두어 의존성을 역전(DIP)시키고, 로또 번호(`LottoNumberSet`), 가중치(`Weights`), 신뢰도 산출 로직을 `DomainPrediction` Aggregate 내부에 캡슐화",
        "자체 보안 가드(`IpAccessGuard`) & Redis 보안 제어: 전역 Request-Scoped Guard에서 IP 기반 SHA-256 식별자 생성 및 IP 하이재킹(불일치) 탐지, `user-blocked` Redis 캐싱, RFC 표준 HMAC-SHA1 기반 6자리 관리자 TOTP 검증 및 `crypto.timingSafeEqual`을 활용한 서명 검증 구현",
        "이벤트 소싱(Event Sourcing) 기반 결제(`PaymentAggregate`) & HON 포인트 원장: 결제 요청·승인·취소·실패 상태 변화를 이벤트 스트림(`rebuild`)으로 복원하고 읽기 전용 Projection 모델을 분리하여 PortOne 단건/정기결제 정합성 보장",
        "분산 락 기반 주간 분석 배치 & 실시간 진행률 브로드캐스트: 매주 토요일 추첨 시점 `@Cron` 스케줄러가 동행복권 데이터를 수집(최대 15회 재시도)하고, Redis 분산 락(`system:status:analysis-running`) 하에 다중 알고리즘 배치 분석을 수행하며 `RxJS Subject` + `Socket.IO`(`AppGateway`)로 클라이언트에 진행률(%)을 실시간 스트리밍",
        "Why Migrate to Spring Boot? 회차가 누적될수록 수십 개 알고리즘의 백테스팅 및 신뢰도 연산(`AlgorithmExecutor`)이 CPU 바운드 작업으로 증가함에 따라, Node.js 단일 스레드 이벤트 루프 블로킹 한계를 넘어 JVM 멀티스레드 병렬 처리와 Spring Batch를 활용하기 위해 Spring Boot 마이그레이션을 설계 중",
      ],
      architecture: {
        title: "Hactto-API Clean Architecture (CQRS) & Security / Batch Pipeline",
        summary:
          "실제 `soowan95/hactto-api` 저장소의 패키지 구조(`presentation` ➔ `application(CQRS)` ➔ `domain(aggregates/vos/ports)` ◄ `infrastructure(adapters/mappers)`)와 `IpAccessGuard` 보안 파이프라인 흐름입니다.",
        mermaidCode: `flowchart TB
    Client["Client (hactto-client)\nHTTP REST & Socket.IO"]

    subgraph SecurityGate["Edge Security Layer (src/common/guards & helpers/redis)"]
        Guard["IpAccessGuard (APP_GUARD)\n• IP Hijacking Detection\n• Blocked User Filter\n• Admin TOTP (HMAC-SHA1) Validation"]
        RedisSec[("Redis (ioredis)\n• user-ip / user-blocked Cache\n• manager:session TOTP\n• system:status:analysis-running Lock")]
        Guard <--> RedisSec
    end

    subgraph CleanArch["DDD & Clean Architecture Module (src/modules/lottery-analysis & user)"]
        Pres["Presentation Layer\nControllers & Request/Response DTOs"]
        App["Application Layer (@nestjs/cqrs)\nCommandHandlers · QueryHandlers · EventHandlers"]
        Dom["Domain Layer (Pure TypeScript)\n• Aggregates: DomainPrediction, PaymentAggregate\n• VOs: LottoNumberSet, Weights, BallTemperature\n• Ports: Symbol Interfaces (DIP)"]
        Infra["Infrastructure Layer\n• Adapters: Infra*Repository, DhlotteryFetcher\n• Mappers: Domain ⇄ Prisma Model"]

        Pres --> App
        App --> Dom
        Infra -.->|"Implements Port (DIP)"| Dom
    end

    DB[("MariaDB (Prisma)\n15+ Multi-Schema Files\nEvents & Projections")]
    WS["AppGateway (Socket.IO)\nReal-time Analysis Progress (%)"]

    Client --> Guard --> Pres
    Infra <--> DB
    App -.->|"systemStatusService.statusStream$"| WS -.-> Client`,
        dataFlowSteps: [
          {
            step: "01",
            title: "Edge Security Guard (`IpAccessGuard` + `RedisService`)",
            detail:
              "모든 요청 진입 시 `user-blocked:{userId}` 및 `user-ip:{userId}`를 Redis에서 O(1)로 조회해 차단 유저와 세션 하이재킹(IP 불일치)을 즉시 거부하며, 관리자 요청은 자체 구현한 Base32/HMAC-SHA1 TOTP 6자리 코드로 검증합니다.",
          },
          {
            step: "02",
            title: "CQRS Command / Query 분리 (`@nestjs/cqrs`)",
            detail:
              "컨트롤러는 비즈니스 로직을 수행하지 않고 `CommandBus`와 `QueryBus`로 메시지를 위임합니다. 쓰기 작업(`AnalyzeHandler`, `GeneratePredictionHandler`)과 읽기 작업(`GetAlgorithmReliabilityHistoryHandler` 등)의 모델을 분리해 복잡도를 낮췄습니다.",
          },
          {
            step: "03",
            title: "순수 도메인 모델 & 의존성 역전 (`domain/ports` ◄ `infrastructure/adapters`)",
            detail:
              "`DomainPrediction.calculateReliability()`나 `PaymentAggregate.rebuild()`는 외부 프레임워크나 DB 스키마를 전혀 참조하지 않습니다. `InfraPredictionRepository`가 `PREDICTION_REPOSITORY_TOKEN` 포트를 구현하고 `Mapper`로 변환하여 도메인 순수성을 지킵니다.",
          },
          {
            step: "04",
            title: "주간 분석 스케줄러 & 실시간 상태 스트리밍 (`TaskService` ➔ `AppGateway`)",
            detail:
              "매주 토요일 21시 Cron 배치가 Redis 락을 획득한 뒤 당첨번호 크롤링 ➔ 공 온도(`BallTemperature`) 분석 ➔ 알고리즘 신뢰도 평가를 순차 실행하며, 진행 상태를 `Socket.IO`로 연결된 클라이언트에 실시간 브로드캐스팅합니다.",
          },
        ],
      },
      links: {
        github: "https://github.com/soowan95/hactto-api",
      },
    },
    {
      id: "soobook-and-spring-evolution",
      title: "[Sub & Foundation] Soobook API & 초기 Spring Boot 프로젝트 — 아키텍처 성장의 출발점",
      subtitle:
        "디자인 패턴 없이 레이어드 아키텍처만 고집하며 겪은 설계적 한계와, 이를 통해 메인 프로젝트(hactto-api)의 클린 아키텍처를 도출해 낸 엔지니어링 회고",
      period: "Sub Project · soowan95/soobook-api & crello_be",
      role: "Backend Development & Architecture Retrospective",
      defaultOpen: false,
      techStack: [
        "TypeScript",
        "NestJS",
        "TypeORM",
        "Decimal.js",
        "Java / Spring Boot",
        "Spring Security",
        "JPA / QueryDSL",
      ],
      overview:
        "가계부 및 자산 관리 백엔드인 서브 프로젝트(`soobook-api`)와 Spring Boot 학습기에 개발한 백엔드 저장소들(`crello_be`, `prj2-be`, `prj1-be`)입니다. 당시에는 빠른 기능 구현에만 집중하여 별도의 디자인 패턴이나 도메인 분리 없이 전형적인 **Controller - Service - Repository(Entity) 레이어드 아키텍처**만을 고집했습니다. 이 과정에서 겪은 시행착오와 기술 부채가 메인 프로젝트(`hactto-api`)에 DDD와 클린 아키텍처를 도입하게 된 결정적 계기가 되었습니다.",
      highlights: [
        "`soobook-api`에서 구현한 핵심 기능과 동시에 마주한 설계적 한계: 다중 통화(KRW 등 환율 반영) 기반 수입/지출/이체 처리, `Decimal.js` 정밀 연산, `@Recursion(3, OptimisticLockVersionMismatchError)` 커스텀 데코레이터를 통한 낙관적 락 재시도, 일/주/월 반복 거래(`Recurrence`) `@Cron` 스케줄러를 구현했으나, `TransactionService` 하나가 4개 이상의 외부 도메인 서비스와 TypeORM Repository에 직접 결합되는 'Fat Service' 문제 발생",
        "초기 Spring Boot 프로젝트(`crello_be` 등)의 회고: 칸반 보드(`Board`, `BoardList`, `Card`) 이동과 JWT 인증(`JwtFilter`, `TokenProvider`), QueryDSL 커스텀 리포지토리를 구현하며 백엔드 기초를 다졌으나, 엔티티가 DB 테이블에 종속된 빈약한 도메인 모델(Anemic Domain Model)에 머물렀음",
        "서브 프로젝트의 아쉬움을 메인 프로젝트(`hactto-api`)에서 해소한 과정: (1) `Service`에 뒤엉켜 있던 잔액·가중치 계산 로직 ➔ **DDD Aggregate & Value Object 내부 행위 메서드로 이동**, (2) `Service`가 다른 `Service`를 줄줄이 호출하던 강결합 ➔ **CQRS Command/EventBus 기반 느슨한 결합으로 전환**, (3) ORM 엔티티가 컨트롤러 응답까지 침범하던 구조 ➔ **Domain Port & Infrastructure Mapper 계층 분리로 해결**",
      ],
      architecture: {
        title: "Architecture Evolution: From Tightly-Coupled Layered (soobook-api) to Clean DDD (hactto-api)",
        summary:
          "서브 프로젝트(`soobook-api`)와 초기 Spring 프로젝트(`crello_be`)의 강결합 레이어드 구조에서 발생한 문제점을 메인 프로젝트(`hactto-api`)에서 어떻게 아키텍처적으로 해결했는지 보여주는 비교 다이어그램입니다.",
        mermaidCode: `flowchart LR
    subgraph Before["Before: soobook-api & Early Spring Boot (Layered Architecture)"]
        direction TB
        B_Ctrl["TransactionController\n/ BoardController"]
        B_Svc["Fat Service Layer (TransactionService)\n• Account / Balance / Category / Currency 직접 참조\n• 비즈니스 규칙 + 트랜잭션 + ORM 쿼리 혼재"]
        B_ORM["TypeORM / JPA Entity\n(DB 테이블 스키마에 강결합된 Anemic Model)"]
        B_Ctrl --> B_Svc --> B_ORM
    end

    subgraph After["After: hactto-api (DDD & Clean Architecture + CQRS)"]
        direction TB
        A_Pres["Presentation\n(Controller + DTO)"]
        A_App["Application (CQRS)\n(Command / Query / Event Handler)"]
        A_Dom["Pure Domain Layer\n• AggregateRoot & Value Objects\n• Repository Port (Interface)"]
        A_Infra["Infrastructure Layer\n• Prisma Repository Adapter\n• Domain ⇄ Persistence Mapper"]
        A_Pres --> A_App --> A_Dom
        A_Infra -.->|"의존성 역전 (DIP)"| A_Dom
    end

    Before ==>|"설계적 한계 복기 및 아키텍처 리팩토링\n1. Fat Service 해체 (CQRS & Domain Event)\n2. Anemic Model ➔ Rich Aggregate/VO\n3. ORM 직접 참조 ➔ Port & Adapter 격리"| After`,
        dataFlowSteps: [
          {
            step: "01",
            title: "[Before] 초기 Spring Boot (`crello_be`) — 관성적인 3계층 구조",
            detail:
              "백엔드 입문 시기에는 모든 기능을 `Controller ➔ Service ➔ Repository`로만 작성했습니다. 기능 추가 시마다 `Service` 클래스가 비대해지고, DB 스키마 변경이 비즈니스 로직 전체에 파급되는 한계를 경험했습니다.",
          },
          {
            step: "02",
            title: "[Problem] 서브 프로젝트 (`soobook-api`) — 도메인 복잡도 증가와 강결합",
            detail:
              "가계부의 이체(`TRANSFER`), 환율 계산(`kftcDealBasR`), 반복 거래 배치, 낙관적 락(`@Recursion`)을 구현하면서 `TransactionService`가 `AccountService`, `BalanceService`, `CategoryService`, `CurrencyService`를 모두 직접 주입받아 제어하는 구조적 병목을 겪었습니다.",
          },
          {
            step: "03",
            title: "[Solution] 메인 프로젝트 (`hactto-api`) — DDD & Clean Architecture로 해소",
            detail:
              "서브 프로젝트에서의 갈증을 해결하기 위해 도메인 객체(`DomainPrediction`, `PaymentAggregate`)가 스스로 비즈니스 불변식을 검증하게 만들고, 영속성 계층은 `Port` 인터페이스 뒤로 숨겨 테스트 가능하고 유연한 구조를 완성했습니다.",
          },
          {
            step: "04",
            title: "[Next] Spring Boot로의 재도약 (Architecture-Driven Migration)",
            detail:
              "과거 지식이 부족했던 시절의 단순 레이어드 Spring Boot가 아니라, `hactto-api`에서 확립한 DDD·클린 아키텍처 철학을 그대로 유지하면서 대용량 통계/배치 연산 성능을 극대화하기 위해 Spring Boot 마이그레이션을 추진하고 있습니다.",
          },
        ],
      },
      links: {
        github: "https://github.com/soowan95/soobook-api",
      },
    },
  ],
  experiences: [
    {
      id: "inek-corp",
      companyName: "아이네크 (INEK)",
      role: "Software Engineer · 백엔드 보안 설계 및 레거시/모바일 유지보수",
      period: "2024.04 ~ 현재 (재직 중)",
      isCurrent: true,
      summary:
        "사내 핵심 솔루션(SOLARS, PYXIS 등)의 API 보안을 위한 암호화 게이트웨이(INEK-GATEWAY)와 다중 앱에서 재사용 가능한 iOS BLE 모바일 출입증 프레임워크를 기획·개발하고, Grails 2.4.5 레거시 백엔드 서버와 AngularJS(CoffeeScript) / Angular(TypeScript) 웹 프론트엔드의 유지보수 및 안정화를 담당하고 있습니다.",
      coreStack: [
        "Grails 2.4.5 (Groovy / JVM)",
        "Java / Spring Boot",
        "AngularJS (CoffeeScript)",
        "Angular (TypeScript)",
        "iOS (Swift / CoreBluetooth / CryptoSwift)",
        "ECDH / AES-GCM / AES-CBC",
      ],
      projects: [
        {
          id: "inek-proj-gateway",
          title: "INEK-GATEWAY — 암호화 봉투(Envelope) & 무상태 티켓 기반 보안 게이트웨이 설계",
          categoryBadge: "Security Architecture & Multi-Module SDK",
          techStack: [
            "Java (Pure Core)",
            "Grails 2.4.5 & Spring Boot Adapters",
            "TypeScript (RequireJS AMD / npm)",
            "ECDH P-256 / HKDF-SHA256 / AES-GCM",
          ],
          summary:
            "사내 호스트 프로젝트(SOLARS, PYXIS 등)에서 브라우저 `/api/**` 노출로 인한 토큰 탈취 및 AI 자동화 공격을 방어하기 위해, 양방향 암호화 봉투(`/api/gw`) 게이트웨이와 멀티 플랫폼 SDK를 설계·구현했습니다.",
          highlights: [
            "NIST/RFC 표준 암호 기법 핸드쉐이크: `/api/gw/hello` ➔ `/api/gw/login` 과정에서 **ECDH(P-256)** 공유 비밀 `Z`와 **HKDF-SHA256**으로 브라우저 탭 실행 메모리에만 상주하는 16바이트 AES 세션 키(`K_s`) 유도",
            "무상태(Stateless) 티켓(`X-Gw-Ticket`) & 듀얼 키 로테이션: 서버에 세션을 저장하지 않고 `[세션 키 K_s + 만료 시각 + 토큰 SHA-256 해시]`를 서버 티켓 키(`ticketKey` / `ticketKeyPrevious`)로 **AES-GCM(AAD: `inek-gw/v1/ticket`)** 암호화하여 무중단 키 교체 지원",
            "암호화 봉투(`/api/gw`) & 디코이(Decoy) 기만 방어: 안쪽 요청(`tk`, `m`, `u`, `q`, `b`, `ts`)을 무작위 IV와 티켓 해시 기반 AAD로 암호화하고 60초 타임스탬프 창으로 Replay Attack을 차단. 평문 `/api/**` 직접 호출이나 검증 실패 시 항상 동일한 `HTTP 200 needLogin` 디코이를 응답해 API 존재 여부 은닉 및 `proof`(HMAC) 로그인으로 투명한 세션 복구 지원",
            "6종 멀티 모듈 분리 & 공통 Test Vector 검증: 프레임워크 비의존 코어(`inek-gateway-server`), 호스트 위임 인터페이스(`CredentialVerifier`, `ActiveTokenLookup`), `grails`/`boot` 연결 어댑터, AngularJS용 **RequireJS(AMD)** 및 Angular용 **npm** 패키지(`inek-passenger`), 외부업체용 SDK 및 클래스패스 충돌 방지 커넥터(`gwconnector`)를 구축",
          ],
          architecture: {
            title: "INEK-GATEWAY Handshake, Stateless Ticket & Encrypted Envelope Flow",
            summary:
              "평문 호출에 대한 디코이(Decoy) 방어부터 ECDH/HKDF 핸드쉐이크, 무상태 `X-Gw-Ticket` 발급, AES-GCM 암호화 봉투(`/api/gw`) 통신 및 만료 시 Proof 자동 갱신까지의 전체 시퀀스입니다.",
            mermaidCode: `sequenceDiagram
    autonumber
    participant Client as 브라우저 (inek-passenger) / 외부업체 SDK
    participant GW as INEK-GATEWAY Filter (Grails / Spring Boot)
    participant Host as 호스트 API (SOLARS / PYXIS)

    Note over Client,GW: [방어] 평문 /api/** 직접 호출 시 HTTP 200 Decoy 응답 (API 은닉)
    Client->>GW: POST /api/gw/hello
    GW-->>Client: 서버 임시 공개키(ps) + 티켓키로 암호화된 상태(hs) + 보호정책(strict.*)
    Note right of Client: ECDH(P-256) 공유비밀 Z 계산 후 HKDF-SHA256으로 16B 세션키 K_s 유도
    Client->>GW: POST /api/gw/login (hs, pc, K_s로 AES-GCM 암호화한 로그인 본문)
    GW->>Host: hs 복호화 후 K_s 유도 ➔ CredentialVerifier 검증
    Host-->>GW: 인증 토큰(DB_TOKEN) 발급
    GW-->>Client: K_s 암호화 응답 + 무상태 X-Gw-Ticket (K_s + 만료시각 + 토큰 SHA-256)

    Note over Client,Host: [통신] 암호화 봉투 (POST /api/gw) 요청 & 응답
    Client->>GW: POST /api/gw + X-Gw-Ticket + 암호화 봉투(IV + AES-GCM 안쪽요청)
    GW->>GW: 티켓 복호화(K_s 확보) ➔ 봉투 복호화(AAD 검증) ➔ ts 허용시간(60초) 검증
    GW->>Host: ActiveTokenLookup 확인 후 내부 경로(m, u, q, b) + InnerTokenHeader 위임
    Host-->>GW: 기존 API 응답 캡처
    GW-->>Client: K_s + 응답용 AAD로 재암호화한 응답 봉투 반환`,
            dataFlowSteps: [
              {
                step: "01",
                title: "Stateless ECDH Handshake (`hs` 토큰 & `K_s` 메모리 격리)",
                detail:
                  "`/api/gw/hello` 시 생성한 서버 임시 개인키를 티켓 키로 암호화한 `hs`에 담아 내려보내고 `/api/gw/login` 시 복호화하여 서버 무상태(Stateless)를 유지하며, 유도된 `K_s`는 브라우저 JS 실행 메모리에만 존재합니다.",
              },
              {
                step: "02",
                title: "AAD 결합 AES-GCM 티켓 & 봉투 무결성 검증",
                detail:
                  "티켓(`inek-gw/v1/ticket`)과 요청 봉투(`inek-gw/v1/envelope-request` + 티켓 해시) 각각에 전용 AAD와 무작위 IV를 적용하여 암호문 치환 공격과 패킷 재전송(60초 타임스탬프 검증)을 차단합니다.",
              },
            ],
          },
        },
        {
          id: "inek-proj-grails-angular",
          title: "레거시 백엔드(Grails 2.4.5) 및 엔터프라이즈 웹(AngularJS · Angular) 유지보수",
          categoryBadge: "Legacy Backend & Web Maintenance",
          techStack: [
            "Grails 2.4.5 (Groovy)",
            "GORM (Hibernate)",
            "AngularJS (1.x) + CoffeeScript",
            "Angular + TypeScript",
          ],
          summary:
            "Spring/Hibernate 위에서 동작하는 Grails 2.4.5 기반 레거시 백엔드와 AngularJS(CoffeeScript)·Angular(TypeScript) 프론트엔드의 일상적인 유지보수, 장애 대응 및 고객사 요구사항 개발을 전담하고 있습니다.",
          highlights: [
            "공식 레퍼런스가 부족한 Grails 2.4.5 환경에서 Groovy 동적 타이핑과 GORM(Hibernate) 지연 로딩·영속성 컨텍스트 흐름을 역추적하여 사이드 이펙트 없는 결함 수정 및 쿼리 최적화 수행",
            "AngularJS(CoffeeScript, RequireJS AMD) 구형 모듈과 모던 Angular(TypeScript) 화면부터 Grails 백엔드 컨트롤러까지 엔드투엔드로 분석하여 직렬 API 호출 병목 및 응답 페이로드 개선",
          ],
        },
        {
          id: "inek-proj-ios-pass",
          title: "BLE Central 역할을 하는 iOS 모바일 출입증 프레임워크 기획 및 개발",
          categoryBadge: "iOS Reusable Framework & BLE Security",
          techStack: [
            "iOS (Swift)",
            "CoreBluetooth (BLE Central / Peripheral)",
            "CryptoSwift (AES-CBC)",
            "Shell Script (.sh Build)",
          ],
          summary:
            "기존 기업은행 모바일 출입증 개발 시 경험했던 외부 프레임워크(S1) 종속성 한계를 극복하기 위해 익성전자와 제휴하여 진행한 프로젝트로, 단일 일회성 앱이 아닌 여러 앱에서 공통으로 임베드하여 재사용할 수 있는 iOS BLE 출입증 프레임워크를 기획·구현했습니다.",
          highlights: [
            "재사용성을 고려한 BLE Central / Peripheral 듀얼 역할 설계: 블루투스 연결 관리를 주도하는 Central 역할뿐만 아니라 Peripheral 역할까지 모두 수행할 수 있도록 `BleCentral`, `BlePeripheral` 클래스를 분리 구현하고 싱글톤(`public static let shared = BleCentral()`)으로 일관된 연결 상태 관리",
            "제조사(익성전자) 리더기 규격에 맞춘 AES-CBC 데이터 암호화: 리더기와 모바일 단말 간 근거리 무선 패킷 보호를 위해 사전 협의된 **AES-CBC 모드** 암호화 프로토콜을 `CryptoSwift` 패키지 기반으로 구현하여 개발 기간 단축 및 보안성 확보",
            "프레임워크 빌드 이슈 해결 및 확장성 회고(KPT): Xcode UI를 통한 프레임워크 빌드 실패 이슈를 쉘 스크립트(`.sh`) 기반 빌드 파이프라인으로 우회 해결했으며, 신규 합류 개발자를 위한 빌드 히스토리 문서화 필요성 도출 및 향후 다양한 협력사 리더기와 범용 통신할 수 있는 통합 BLE 프레임워크로의 확장 방향성 수립",
          ],
        },
      ],
    },
  ],
};
