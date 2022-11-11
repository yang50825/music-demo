<template>
    <div class="subNav">
        <div class="wrapper">
            <ul>
                <li class="top_nav_item" v-for="(obj, index) in list" :key="index">
                    <router-link :to="obj.path">{{ obj.name }}</router-link>
                </li>
            </ul>
        </div>
        <div class="main">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MusicHall',
    data() {
        return {
            list: [
                {
                    name: '首页',
                    path: '/musicHall/homePage',
                },
                {
                    name: '歌手',
                    path: '/musicHall/singer',
                },
                {
                    name: '新碟',
                    path: '/musicHall/newDisc',
                },
                {
                    name: '排行榜',
                    path: '/musicHall/rankingList/songList/1',
                },
                {
                    name: '分类歌单',
                    path: '/musicHall/catalog',
                },
                {
                    name: '电台',
                    path: '/musicHall/station',
                },
                {
                    name: 'MV',
                    path: '/musicHall/mv',
                },
                {
                    name: '数字专辑',
                    path: '/musicHall/digitalAlbum',
                },
            ],
        };
    },
};
</script>

<style lang="less" scoped>
.subNav {
    height: 51px;
    line-height: 51px;
    background-color: #fff;
    ul {
        margin-right: -50px;
        padding-left: 220px;
        border-top: 1px solid #f2f2f2;
        display: flex;
        .top_nav_item {
            margin-right: 40px;
            height: 51px;
            font-size: 15px;
            color: #c1c1c1;
            & a.router-link-exact-active {
                color: #31c27c;
            }
        }
    }
}
</style>
