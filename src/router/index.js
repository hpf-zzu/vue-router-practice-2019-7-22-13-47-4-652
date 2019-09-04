import Main from '../components/Main'
import display from '../components/dispaly'
import my from '../components/My.vue'
import home from '../components/Home'
export default({
    routes: [
        {
            path: '/',
            name: 'main',
            component: Main
        },
        {
            path: 'home/:name',
            name: 'home',
            component: home,
            props: true,
            children: [
                {
                    path: 'list',
                    component: display
                },
                {
                    path: 'my/:name',
                    component: my,
                    props: true
                }
            ]

        }

    ]



})