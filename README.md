# prography_6th_react
pre-task to apply prography

## how to run
1. cd frontend
2. npm install
3. npm start
4. check localhost:3003

## Project Structure
    ├── src                    # source files
        ├── components            # atomic design을 위한 atoms, molecules, organisms
        ├── pages                 # atomic design을 위한 templates, pages
        ├── modules               # 상태 관리에 필요한 ducks 구조의 redux action, reducer 
        ├── sags                  # redux-saga에 필요한 middlewares
        ├── lib                   # 필요에 따라 만든 모듈들
        └──  server.tsx           # SSR를 위해 만든 express 기반의 서버
    │   
    ├── .eslintignore, .stlintrc.js                     # lint에 필요한 파일
    ├── .prettierrc                    # Pritter 설정 파일
    ├── package.json                   # npm setting 파일
    ├── tsconfig.json                  # ts compile 설정 파일
    ├── webpack.config.js              # env에 따라 webpack을 실행시키는 default 설정 파일
    ├── webpack.client.js              # CSR 설정 파일
    └── webpack.server.js              # SSR 설정 파일

## screen shot
<img width="1265" alt="screentshot1 jpg" src="https://user-images.githubusercontent.com/40534721/75902938-2f458280-5e84-11ea-8b64-4d76f6f97e3f.PNG">

![image](https://user-images.githubusercontent.com/40534721/75903005-44baac80-5e84-11ea-92d5-946cb9389db5.png)



## Details
### Responsive Web
![image](https://user-images.githubusercontent.com/40534721/75903574-21dcc800-5e85-11ea-85be-1eb1752624f2.png)


### Atomic Design
**Atoms**

![image](https://user-images.githubusercontent.com/40534721/75903960-b6472a80-5e85-11ea-87eb-230c175562b1.png)

**Molecules**
![image](https://user-images.githubusercontent.com/40534721/75904012-cced8180-5e85-11ea-9494-0c4eaa4f8a51.png)


**Organisms**
![image](https://user-images.githubusercontent.com/40534721/75904082-e7275f80-5e85-11ea-9d6c-3577f3f8f99f.png)


**Templates + Pages**
![image](https://user-images.githubusercontent.com/40534721/75904147-04f4c480-5e86-11ea-8fc8-efb0c028ab03.png)


** 설계 과정 **
https://velog.io/@thsoon/%EC%93%B8%EB%95%8C%EC%97%86%EC%9D%B4-%EA%B3%A0%ED%80%84%EC%9D%B8-%ED%88%AC%EB%91%90%EB%A6%AC%EC%8A%A4%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0-FE-2.-%EB%B7%B0-%EC%84%A4%EA%B3%84


### Like there is a server
서버가 있는 것처럼 모든 input에 비동기 동작을 둠
- Todo Create, Update(취소선, 텍스트변경), Delete 동작 수행 시, 서버로 데이터 전송하는 것을 고려한 loading 구현
- Todo Create시, saga 미들웨어 로직에서 api으로 uuid를 사용해 id 부여해 insert

### Cacheing
정확하게 캐싱과는 거리가 멀지만 redux 상태 값에 항목들이 존재하면 load action을 dispatch하지 않습니다.
- todo: 자신만의 private한 기능이라 생각해 다른 사용자로 인한 데이터 부수효과가 없을 것이라 판단해 상태 값 유지
- movie: 데이터 양이 많아 접속할 때마다 최신 값을 가져오는 것보다 현재 필요한 데이터에 초점을 맞추는 것이 좋다고 판단

### Server Side Rendering
![image](https://user-images.githubusercontent.com/40534721/75905218-d677e900-5e87-11ea-9943-1e85b9e42ed7.png)
- SEO를 위해서라도 필요한 기능이라고 판단
- 페이지 첫 접근 시, Content 내용들이 html 파일에 포함되어 SEO에 효과적

### etc
![image](https://user-images.githubusercontent.com/40534721/75905537-5c942f80-5e88-11ea-9cfa-ffa6ddc10935.png)
- todo 내용이 많을 때의 수정 삭제 버튼 뷰의 위치를 중앙으로 배치
- code spltting을 구현하려고 했으나, html에 Content 내용이 들어가지 않아 시도만 함
- rendering memorization 최적화
