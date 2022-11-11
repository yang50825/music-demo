// 该文件用于创建整个应用的路由器
import VueRouter from 'vue-router';

// 引入组件
import MusicHall from '../views/MusicHall.vue';
import MyMusic from '../views/MyMusic.vue';
import Client from '../views/Client.vue';
import OpenPlatform from '../views/OpenPlatform.vue';
import Vip from '../views/Vip.vue';
import HomePage from '../views/Second/HomePage';
import Singer from '../views/Second/Singer.vue';
import NewDisc from '../views/Second/NewDisc';
import RankingList from '../views/Second/RankingList';
import Catalog from '../views/Second/Catalog';
import Station from '../views/Second/Station';
import MV from '../views/Second/MV';
import DigitalAlbum from '../views/Second/DigitalAlbum';
import SongList from '../views/Second/SongList.vue';

// 创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/musicHall/homePage',
        },
        {
            path: '/musicHall',
            component: MusicHall,
            children: [
                {
                    path: 'homePage',
                    component: HomePage,
                },
                {
                    path: 'singer',
                    component: Singer,
                },
                {
                    path: 'newDisc',
                    component: NewDisc,
                },
                {
                    path: 'rankingList',
                    component: RankingList,
                    children: [
                        {
                            path: 'songList/:listId',
                            name: 'SongList',
                            component: SongList,
                        },
                    ],
                },
                {
                    path: 'catalog',
                    component: Catalog,
                },
                {
                    path: 'station',
                    component: Station,
                },
                {
                    path: 'mv',
                    component: MV,
                },
                {
                    path: 'digitalAlbum',
                    component: DigitalAlbum,
                },
            ],
        },
        {
            path: '/myMusic',
            component: MyMusic,
        },
        {
            path: '/client',
            component: Client,
        },
        {
            path: '/openPlatform',
            component: OpenPlatform,
        },
        {
            path: '/vip',
            component: Vip,
        },
    ],
});
