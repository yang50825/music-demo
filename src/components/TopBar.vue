<template>
    <div class="mod_header">
        <!-- 头部 -->
        <div class="section_inner wrapper">
            <!-- logo -->
            <h1 class="qqmusic_title">
                <router-link to="/">
                    <img src="https://y.qq.com/mediastyle/yqq/img/logo.png?max_age=2592000" />
                </router-link>
            </h1>

            <!-- 路由 -->
            <ul class="mod_top_nav">
                <li class="top_nav_item" v-for="(obj, index) in arr" :key="index">
                    <router-link :to="obj.path">{{ obj.name }}</router-link>
                </li>
            </ul>

            <!-- 搜索 -->
            <div class="mod_top_search">
                <input type="text" placeholder="搜索音乐、MV、歌单、用户" />
                <em class="el-icon-search"></em>
            </div>

            <!-- 右侧选项 -->
            <div class="header_right">
                <a href="#" class="top_login_link">登录</a>
                <el-dropdown class="vip_btn">
                    <span class="el-dropdown-link">
                        <a href="#">开通VIP</a>
                        <em class="el-icon-caret-bottom"></em>
                    </span>
                    <el-dropdown-menu class="menu" slot="dropdown">
                        <el-dropdown-item class="item">开通绿钻豪华版</el-dropdown-item>
                        <el-dropdown-item class="item">开通付费包</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-dropdown class="pay_btn">
                    <span class="el-dropdown-link">
                        <a href="#">充值</a>
                        <em class="el-icon-caret-bottom"></em>
                    </span>
                    <el-dropdown-menu class="menu" slot="dropdown">
                        <el-dropdown-item class="item">购买乐币</el-dropdown-item>
                        <el-dropdown-item class="item">充值饭票</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TopBar',
    props: {
        arr: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style lang="less" scoped>
.mod_header {
    background-color: #fff;
    .section_inner {
        display: flex;
        align-items: center;
        // logo
        .qqmusic_title {
            display: flex;
            align-items: center;
        }
        // 导航栏
        .mod_top_nav {
            display: flex;
            align-items: center;
            margin-left: 20px;
            font-size: 18px;
            li {
                a {
                    display: block;
                    padding: 0 20px;
                    height: 90px;
                    line-height: 90px;
                    text-align: center;
                    font-size: 18px;
                }
                & a:hover {
                    color: #31c27c;
                }

                & a.router-link-active {
                    background-color: #31c27c;
                    color: #fff;
                }
            }
            & li:nth-child(3) {
                position: relative;
            }

            & li:nth-child(3)::after {
                position: absolute;
                top: 20px;
                right: 0;
                width: 37px;
                height: 14px;
                content: '';
                display: inline-block;
                background-image: url('https://y.qq.com/mediastyle/yqq/extra/mark_1.png?max_age=2592000');
                background-size: contain;
            }
        }

        // 搜索框
        .mod_top_search {
            position: relative;
            margin-left: 30px;
            padding: 0 33px 0 11px;
            height: 36px;
            border: 1px solid #c9c9c9;
            border-radius: 3px;
            transition: width 0.6s ease-out;
            input {
                width: 174px;
                border: 0;
                line-height: 34px;
                outline: none;
            }
            em {
                position: absolute;
                top: 50%;
                right: 11px;
                margin-top: -8px;
                width: 16px;
                height: 16px;
                background-position: 0 -40px;
                font-weight: 700;
                color: #999;
                cursor: pointer;
            }
            & em:hover {
                color: #31c27c;
            }
        }

        // 右侧选项
        .header_right {
            margin-left: 20px;
            display: flex;
            align-items: center;
            // 登录
            .top_login_link {
                margin-right: 10px;
                width: 38px;
                height: 90px;
                line-height: 90px;
                text-align: center;
                font-size: 16px;
            }
            & .top_login_link:hover {
                color: #31c27c;
            }

            // 开通vip
            .vip_btn {
                position: relative;
                width: 122px;
                height: 40px;
                font-size: 13px;
                border-radius: 3px;
                background-color: #31c27c;
                text-align: center;
                line-height: 38px;
                color: #fff;
                a {
                    color: #fff;
                }
                em {
                    position: absolute;
                    right: 8px;
                    top: 12px;
                }
                .menu {
                    .item {
                        background-color: #31c27c;
                    }
                    .item:hover {
                        background-color: #31c27c;
                    }
                }
            }

            // 充值
            .pay_btn {
                position: relative;
                margin-left: 10px;
                width: 73px;
                height: 40px;
                font-size: 13px;
                border: 1px solid #c9c9c9;
                text-align: center;
                line-height: 38px;
                em {
                    position: absolute;
                    right: 8px;
                    top: 12px;
                }
            }
            .pay_btn:hover {
                background-color: #31c27c;
                color: #fff;
                a {
                    color: #fff;
                }
            }
        }
    }
}
</style>
