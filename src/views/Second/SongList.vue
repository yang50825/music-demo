<template>
    <div class="mod_toplist">
        <!-- 头部 -->
        <div class="toplist_header">
            <h1 class="toplist_title">{{ list[0].listTitle }}</h1>
            <div class="toplist_date">{{ new Date() | formatDate }}</div>
            <a href="#" class="toplist_rule">榜单规则</a>
        </div>

        <!-- 工具栏 -->
        <div class="toolbar">
            <a href="#" class="btn">
                <em class="el-icon-caret-right"></em>
                播放全部
            </a>
            <a href="#" class="btn">
                <em class="el-icon-folder-add"></em>
                添加到
            </a>
            <a href="#" class="btn">
                <em class="el-icon-download"></em>
                下载
            </a>
            <a href="#" class="btn">
                <em class="el-icon-edit-outline"></em>
                批量操作
            </a>
            <a href="#" class="btn">
                <em class="el-icon-chat-dot-square"></em>
                评论 (257541)
            </a>
        </div>

        <!-- 歌曲列表 -->
        <!-- <div class="songList">
            <ul class="songlist_header">
                <li>歌曲</li>
                <li>歌手</li>
                <li>时长</li>
            </ul>
        </div> -->
        <el-table :data="list" stripe style="width: 100%" class="songList">
            <el-table-column type="index" width="132">
                <template slot-scope="scope">
                    <div class="songList_index" :class="{ red: scope.$index < 3 }">
                        {{ scope.$index + 1 }}
                    </div>
                    <div class="songList_rank">
                        <em class="el-icon-top"></em>
                        <br />
                        {{ scope.row.songAmount }}%
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="歌曲" width="556">
                <template slot-scope="scope">
                    <div class="song_info">
                        <span class="song_img">
                            <a href="#" class="cover">
                                <img :src="scope.row.songImg" />
                            </a>
                            <a href="#" class="title">
                                {{ scope.row.songName }}
                                <span class="songDesc">{{ scope.row.songDesc }}</span>
                            </a>
                            <a href="#" class="mv_btn" v-if="scope.row.isMv == 1"></a>
                            <em class="vip_btn" v-if="scope.row.isVip == 1"></em>
                        </span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="songSinger" label="歌手" width="197"></el-table-column>
            <el-table-column prop="songTime" label="时长" width="60"></el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    name: 'SongList',
    data() {
        return {
            list: [],
        };
    },
    methods: {
        fn(scope) {
            console.log(scope);
        },
        // 获取音乐列表
        queryMusicList() {
            this.$axios({
                method: 'GET',
                url: '/api/music/queryMusicList',
                params: {
                    listId: this.listId,
                },
            }).then(res => {
                this.list = res.data.data;
            });
        },
    },

    created() {
        this.queryMusicList();
    },
    computed: {
        listId() {
            return this.$route.params.listId;
        },
    },
    watch: {
        listId: {
            handler() {
                // location.reload();
                this.queryMusicList();
            },
        },
    },
};
</script>

<style lang="less" scoped>
.mod_toplist {
    // 头部
    .toplist_header {
        display: flex;
        margin-bottom: 10px;
        font-size: 14px;
        // 标题
        .toplist_title {
            font-weight: 400;
            font-size: 24px;
            margin-right: 15px;
        }

        // 日期
        .toplist_date {
            margin-right: 15px;
            line-height: 4;
            font-weight: 300;
        }

        // 榜单规则
        .toplist_rule {
            line-height: 4;
        }

        & .toplist_rule:hover {
            color: #31c27c;
        }
    }

    // 工具栏
    .toolbar {
        margin-bottom: 20px;
        display: flex;
        // 按钮
        .btn {
            margin-right: 6px;
            padding: 0 23px;
            height: 38px;
            border: 1px solid #c9c9c9;
            line-height: 38px;
            text-align: center;
            font-size: 14px;
            border-radius: 2px;
            white-space: nowrap;
            em {
                color: #a2a2a2;
            }
        }
        & .btn:hover {
            background-color: #ededed;
        }

        & .btn:first-child {
            background-color: #31c27c;
            color: #fff;
            em {
                color: #fff;
            }
        }

        & .btn:first-child:hover {
            background-color: #2caf6f;
        }
    }

    // 歌曲列表
    .songList {
        .songList_index {
            float: left;
            width: 40px;
            text-align: right;
            font-size: 24px;
            color: #333;
        }
        .songList_rank {
            float: left;
            width: 72px;
            font-size: 12px;
            text-align: center;
            line-height: 10px;
            color: #999;
        }
        .song_info {
            .song_img {
                // 图片
                .cover {
                    margin-right: 20px;
                    vertical-align: middle;
                    img {
                        width: 70px;
                    }
                }
                // 歌名
                .title {
                    margin-right: 5px;
                    white-space: nowrap;
                    font-size: 14px;
                    vertical-align: middle;
                    .songDesc {
                        margin-left: 10px;
                        color: #999;
                    }
                }

                & .title:hover {
                    color: #31c27c;
                }
                // VIP MV共同样式
                .vip_btn,
                .mv_btn {
                    color: #31c27c;
                    display: inline-block;
                    width: 34px;
                    height: 16px;
                    vertical-align: middle;
                    margin-right: 6px;
                    background-image: -webkit-image-set(
                        url(https://y.qq.com/ryqq/static/media/icon_sprite.630b3e60.png?max_age=2592000) 1x,
                        url(https://y.qq.com/ryqq/static/media/icon_sprite@2x.bf4cef49.png?max_age=2592000) 2x
                    );
                }
                // vip
                .vip_btn {
                    background-position: -80px -160px;
                }
                // mv
                .mv_btn {
                    background-position: -40px -280px;
                }
            }
        }
    }
}

.red {
    color: #ff4222 !important;
}
</style>
