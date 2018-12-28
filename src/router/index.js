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
			path: '/login',
			name: 'login',
			component: login,
		},
    {
      path: '/',
      name: 'layout-main',
      component: main,
			meta:{
			  requireAuth: true	
			},
			children: [
				{
					path: 'HelloWorld',
					name: 'HelloWorld',
					component: HelloWorld,
				},
				{
					path: 'table',
					name: 'table',
					component: table,
					meta:{
						requireAuth: true	
					},
				}
			]
    }
		
  ]
})
