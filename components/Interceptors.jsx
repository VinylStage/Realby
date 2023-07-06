import axios from "axios";
import { useRouter } from "next/router";
// import fetchIntercept from "fetch-intercept";

// (일반 로근인) axios 서버 요청시 헤더에 자동으로 access 토큰 포함
axios.interceptors.request.use(
  (config) => {
    const access = localStorage.getItem("access");
    if (access) {
      config.headers["Authorization"] = `Bearer ${access}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// (참고) fetch -> axios 라이브러리로 전부 교체함 
// (일반 로근인) fetch 서버 요청시 헤더에 자동으로 access 토큰 포함
// const interceptors = fetchIntercept.register({
//   request: function (url, config) {
//     const access = localStorage.getItem("access");
//     if (access) {
//       config.headers["Authorization"] = `Bearer ${access}`;
//     }
//     return [url, config];
//   },
// });

// fetchIntercept.unregister(interceptors); // 앱 종료시 인터셉터 해제

// (응답 오류시) access 또는 refresh 토큰이 만료되었거나 유효하지 않을 경우
const handleUnauthorizedError = () => {
  const router = useRouter();

  // 로그인 페이지로 이동
  router.push("/login");

  // 메시지 창 표시
  alert("로그인 세션이 만료되었습니다. 다시 로그인해주세요.");
};

axios.interceptors.response.use(
  async (response) => response,
  async (error) => {
    try {
      const originalRequest = error.config;

      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        // refresh 토큰을 사용하여 새로운 access 토큰 요청
        const response = await axios.post("/api/token/refresh/", {
          refresh: refresh,
        });

        // 새로운 access 토큰을 받아서 originalRequest에 추가
        const access = response.data;
        originalRequest.headers["Authorization"] = `Bearer ${access}`;

        // 원래 요청을 다시 시도
        const retryResponse = await axios(originalRequest);
        return retryResponse;
      } else {
        // 401 오류가 아니거나 요청을 재시도하는데 실패한 경우
        return Promise.reject(error);
      }
    } catch (error) {
      // refresh 토큰이 만료되었거나 유효하지 않은 경우
      handleUnauthorizedError();
      return Promise.reject(error);
    }
  }
);
