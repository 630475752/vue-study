import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import main from '@/components/main'
import login from '@/components/login'
import table from '@/components/table'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout-main',
      component: main,
			children: [
				{
					path: 'HelloWorld',
					name: 'HelloWorld',
					component: HelloWorld
					
				},
				{
					path: 'table',
					name: 'table',
					component: table
					
				}
			]
    },
		{
			path: '/',
			name: 'login',
			component: login,
		}
  ]
})
