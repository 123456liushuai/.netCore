import {createRouter,createWebHistory} from 'vue-router'import LoginPage from "../view/index/LoginPage.vue"
import RootPage from "../view/index/RootPage.vue"
import DeskTop from '../view/index/DeskTop.vue'
import PersonCenter from '../view/index/PersonCenter.vue'const router = createRouter({  history: createWebHistory(),  routes: [
	 { path: '/', component: RootPage ,
	 children: [
	     { name: "工作台", path: "/desktop", component: DeskTop },
		  { name: "个人信息", path: "/person", component: PersonCenter },
		   { name: "个人信息", path: "/person", component: PersonCenter },
	 ]
	 },
	 { path: '/login', component: LoginPage }  ]})export default router