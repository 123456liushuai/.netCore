import {createRouter,createWebHistory} from 'vue-router'import LoginPage from "../view/index/LoginPage.vue"
import RootPage from "../view/index/RootPage.vue"
import DeskTop from '../view/index/DeskTop.vue'const router = createRouter({  history: createWebHistory(),  routes: [
	 { path: '/', component: RootPage ,
	 children: [
	     { name: "工作台", path: "/desktop", component: DeskTop },
	 ]
	 },
	 { path: '/login', component: LoginPage }  ]})export default router