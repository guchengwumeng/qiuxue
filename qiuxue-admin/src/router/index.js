import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Homepage from '@/views/Homepage'
import Welcome from '@/views/Welcome'
import Banner from '@/views/banner/Banner'
import Addbanner from '@/views/banner/Addbanner'
import Editbanner from '@/views/banner/Editbanner'
import Notice from '@/views/notice/Notice'
import Addnotice from '@/views/notice/Addnotice'
import Editnotice from '@/views/notice/Editnotice'
import Message from '@/views/message/Message'
import Addmessage from '@/views/message/Addmessage'
import Editmessage from '@/views/message/Editmessage'
import Course from '@/views/course/Course'
import Addcourse from '@/views/course/Addcourse'
import Editcourse from '@/views/course/Editcourse'
import Password from '@/views/background/Password'
import ID from '@/views/background/id/ID'
import Addid from '@/views/background/id/Addid'
import Editid from '@/views/background/id/Editid'
import Module from '@/views/background/module/Module'
import Addmodule from '@/views/background/module/Addmodule'
import Editmodule from '@/views/background/module/Editmodule'
import Role from '@/views/background/role/Role'
import Addrole from '@/views/background/role/Addrole'
import Editrole from '@/views/background/role/Editrole'
import User from '@/views/user/User'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/homepage',
      name: 'homepage',
      component: Homepage,
      children: [
        { path: '/welcome', name: 'Welcome', component: Welcome },
        { path: '/banner', name: 'Banner', component: Banner },
        { path: '/addbanner', name: 'Addbanner', component: Addbanner },
        { path: '/editbanner', name: 'Editbanner', component: Editbanner },
        { path: '/notice', name: 'Notice', component: Notice },
        { path: '/addnotice', name: 'Addnotice', component: Addnotice },
        { path: '/editnotice', name: 'Editnotice', component: Editnotice },
        { path: '/message', name: 'Message', component: Message },
        { path: '/addmessage', name: 'Addmessage', component: Addmessage },
        { path: '/editmessage', name: 'Editmessage', component: Editmessage },
        { path: '/course', name: 'Course', component: Course },
        { path: '/addcourse', name: 'Addcourse', component: Addcourse },
        { path: '/editcourse', name: 'Editcourse', component: Editcourse },
        { path: '/password', name: 'Password', component: Password },
        { path: '/id', name: 'ID', component: ID },
        { path: '/addid', name: 'Addid', component: Addid },
        { path: '/editid', name: 'Editid', component: Editid },
        { path: '/module', name: 'Module', component: Module },
        { path: '/addmodule', name: 'Addmodule', component: Addmodule },
        { path: '/editmodule', name: 'Editmodule', component: Editmodule },
        { path: '/role', name: 'Role', component: Role },
        { path: '/addrole', name: 'Addrole', component: Addrole },
        { path: '/editrole', name: 'Editrole', component: Editrole },
        { path: '/user', name: 'User', component: User }
      ]
    }
  ]
})
