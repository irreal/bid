import axios from "axios";
import netlifyWidget from "netlify-identity-widget";

axios.interceptors.request.use(
  function(config) {
    if (
      config.url.startsWith("/.netlify/functions") &&
      netlifyWidget.currentUser()
    ) {
      return netlifyWidget
        .currentUser()
        .jwt()
        .then(t => {
          config.headers.Authorization = `Bearer ${t}`;
          return config;
        });
    }
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
