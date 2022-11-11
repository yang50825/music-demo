<template>
    <div>
        <TopBar :arr="navList"></TopBar>
        <div class="box">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import TopBar from './components/TopBar';
export default {
    name: 'App',
    data() {
        return {
            navList: [
                {
                    name: '音乐馆',
                    path: '/musicHall/homePage',
                },
                {
                    name: '我的音乐',
                    path: '/myMusic',
                },
                {
                    name: '客户端',
                    path: '/client',
                },
                {
                    name: '开放平台',
                    path: '/openPlatform',
                },
                {
                    name: 'VIP',
                    path: '/vip',
                },
            ],
        };
    },
    components: {
        TopBar,
    },
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

a {
    text-decoration: none;
    color: #333;
}

li {
    list-style: none;
}

body {
    background-color: #f3f3f3;
}

/* 版心 */
.wrapper {
    margin: 0 auto;
    width: 1200px;
}
</style>
