import Vue from 'vue';
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate';

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);