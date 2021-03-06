import Vue from "vue";
import axios from "axios";
Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create({
            baseURL: (process.env.NODE_ENV === 'production') ? process.env.VUE_APP_IP_SERVICE_EXTERNO : process.env.VUE_APP_IP_SERVICE_LOCAL
        });
        //interceptar requisições
        Vue.prototype.$http.interceptors.request.use(
            (config) => {
                return config;
            },
            (error) => Promise.reject(error)
        );
    },
});
