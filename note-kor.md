# TypeScript

## 타입스크립트란?

Let's install the TypeScript compiler to transpile it into JavaScript for the browser to read.

- Console log shortcut `log` + `tab`
- 터미널에 `node main.ts` 커멘드로 돌아가는 지 확인
- HTML 템플릿 `!` + `tab`
- 터미널에 `tsc main.ts`로 컴파일러 깔아주기

간단한 타입스크립트 연습을 위해

- `npm install -g ts-node`
- `ts-node main.ts`하면 자바스크립트 파일 날리고 바로 결과값 확인할 수 있음

매번 자바스크립트 파일을 업데이트 하기 위해서

- `tsc main.ts -w` 왓치모드로 하면 바로바로 확인 가능

## 기본 타입 마스터하기

## 타입이란?

- 타입을 설정해서 좀 더 안정적으로 코딩 가능, 직관적 문서화 가능

#### Union type

- 발생할 수 있는 타입 중 하나를 받아오고 싶을 때 활용

## OOP

### 객체지향 프로그래밍이란?

Object Oriented Programming

a progrmming paradigm based on the concept of "objects" which can contain data and code.

ex. Java, C++, C#, Python, Kotlin, JavaScript

- vs 명령 절차 지향적 프로그래밍(Imperative and Procedural Programming)?
  - 함수가 서로 엉켜있어서 수정 시에 번거롭고 side effect가 잘 생김

객체들끼리 소통하게, 서로 관련있는 함수들로 정리되어 있음. 재사용, 수정, 확장성 모두 용이.

- class
  - template, declare once, no data in
- object
  - instance of a class, created many times, data in

### 객체 지향 원칙

1. Encapsulation - 캡슐화

- 흩어져있는 데이터와 함수들끼리 각 오브젝트 안에 캡슐화해주는 것
- 상태를 외부에서 변경할 수는 없지만, 외부 기능을 통해 유도는 가능

2. Abstraction - 추상성

- 내부의 복잡한 기능을 다 이해할 필요 없이, 외부에서 간단한 인터페이스 함수를 이용하여 핸들링할 수 있는 것

3. Inheritance - 상속, 재사용성 높이기

4. Polymorphism - 다형성, 좀 더 객체지향적
