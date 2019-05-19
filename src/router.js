const routers = [
    {
        path: '/',
        meta: {
            title: 'iview'
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    }
];
export default routers;