<template>
    <div class="rankingList">
        <div class="wrapper">
            <!-- 侧边导航栏 -->
            <div class="aside">
                <dl class="aside_list" v-for="(obj, index) in asideList" :key="index">
                    <dt>{{ obj.title }}</dt>
                    <dd v-for="(item, index) in obj.item" :key="index">
                        <router-link :to="item.path">{{ item.title }}</router-link>
                    </dd>
                </dl>
            </div>

            <div class="main">
                <router-view class="main_box"></router-view>
                <div class="page_box">
                    <div class="client_guide">
                        <p>查看更多内容，请下载客户端</p>
                        <a href="#" class="btn">立即下载</a>
                    </div>
                </div>
                <Comments></Comments>
            </div>
        </div>
    </div>
</template>

<script>
import Comments from '../../components/Comments';
export default {
    name: 'RankingList',
    data() {
        return {
            asideList: [
                {
                    title: '巅峰榜',
                    item: [
                        {
                            title: '飙升榜',
                            path: '/musicHall/rankingList/SongList/1',
                        },
                        {
                            title: '热歌榜',
                            path: '/musicHall/rankingList/SongList/2',
                        },
                        {
                            title: '新歌榜',
                            path: '/',
                        },
                        {
                            title: '流行指数榜',
                            path: '/',
                        },
                        {
                            title: '喜力电音榜',
                            path: '/',
                        },
                        {
                            title: '腾讯音乐人原创榜',
                            path: '/',
                        },
                        {
                            title: '听歌识曲榜',
                            path: '/',
                        },
                        {
                            title: 'MV榜',
                            path: '/',
                        },
                    ],
                },
                {
                    title: '地区榜',
                    item: [
                        {
                            title: '内地榜',
                            path: '/',
                        },
                        {
                            title: '香港榜',
                            path: '/',
                        },
                        {
                            title: '台湾地区榜',
                            path: '/',
                        },
                        {
                            title: '欧美榜',
                            path: '/',
                        },
                        {
                            title: '韩国榜',
                            path: '/',
                        },
                        {
                            title: '日本榜',
                            path: '/',
                        },
                    ],
                },
                {
                    title: '特色榜',
                    item: [
                        {
                            title: '网络歌曲榜',
                            path: '/',
                        },
                        {
                            title: 'DJ舞曲榜',
                            path: '/',
                        },
                        {
                            title: '抖快榜',
                            path: '/',
                        },
                        {
                            title: '综艺新歌榜',
                            path: '/',
                        },
                        {
                            title: '影视金曲榜',
                            path: '/',
                        },
                        {
                            title: '国风热歌榜',
                            path: '/',
                        },
                        {
                            title: '说唱榜',
                            path: '/',
                        },
                        {
                            title: '动漫音乐榜',
                            path: '/',
                        },
                        {
                            title: '游戏音乐榜',
                            path: '/',
                        },
                        {
                            title: '达人音乐榜',
                            path: '/',
                        },
                        {
                            title: 'K歌金曲榜',
                            path: '/',
                        },
                    ],
                },
                {
                    title: '全球榜',
                    item: [
                        {
                            title: '美国公共牌榜',
                            path: '/',
                        },
                        {
                            title: '韩国Melon榜',
                            path: '/',
                        },
                        {
                            title: '英国UK榜',
                            path: '/',
                        },
                        {
                            title: '日本公信榜',
                            path: '/',
                        },
                        {
                            title: 'JOOX本地热播榜',
                            path: '/',
                        },
                        {
                            title: '香港TVB劲歌金榜',
                            path: '/',
                        },
                        {
                            title: '台湾KKBOX榜',
                            path: '/',
                        },
                        {
                            title: 'YouTube音乐排行榜',
                            path: '/',
                        },
                    ],
                },
            ],
            list: [],
        };
    },
    components: {
        Comments,
    },
};
</script>

<style lang="less" scoped>
.rankingList {
    padding-top: 60px;
    background: #fafafa;
    .wrapper {
        display: flex;
        justify-content: space-between;
        // 侧边栏
        .aside {
            width: 178px;
            height: 1620px;
            border: 1px solid hsla(0, 0%, 60%, 0.2);
            .aside_list {
                margin-bottom: 20px;
                dt {
                    margin: 0 17px 10px;
                    font-size: 20px;
                    font-weight: 400;
                    border-bottom: 1px solid #ebebeb;
                    line-height: 60px;
                }
                dd {
                    font-size: 14px;
                    a {
                        display: inline-block;
                        padding: 8px 17px;
                        height: 100%;
                        font-size: 15px;
                        display: block;
                        line-height: 22px;
                        padding: 8px 17px;
                    }
                    a:hover {
                        color: #31c27c;
                    }
                    a.router-link-exact-active {
                        background-color: #31c27c;
                        color: #fff;
                    }
                }
            }
        }

        // 主体内容
        .main {
            width: 990px;
            .main_box {
                margin-bottom: 60px;
            }
            .page_box {
                text-align: center;
                .client_guide {
                    margin-bottom: 22px;
                    p {
                        font-size: 18px;
                        color: #000;
                        text-align: center;
                        line-height: 0.8;
                    }
                    .btn {
                        display: block;
                        margin: 20px auto 0;
                        width: 175px;
                        height: 41px;
                        line-height: 41px;
                        font-size: 16px;
                        color: #fff;
                        text-align: center;
                        border-radius: 41px;
                        background-color: #31c27c;
                    }
                    & .btn:hover {
                        background-color: #2caf6f;
                    }
                }
            }
        }
    }
}
</style>
