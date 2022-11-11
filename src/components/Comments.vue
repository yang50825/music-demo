<template>
    <div class="mod_comment">
        <!-- 头部 -->
        <div class="part_hd">
            <h2 class="part_title">
                评论
                <span class="part_title_desc">共1000条评论</span>
            </h2>
        </div>

        <!-- 输入框 -->
        <div class="comment_input">
            <el-input
                type="textarea"
                :rows="4"
                placeholder="说说你的看法吧"
                v-model="comment"
                resize="none"
                maxlength="300"
                show-word-limit
            ></el-input>
            <a href="#" class="comment_face">
                <em class="icon_comment_face"></em>
            </a>
            <div class="comment_tool">
                <a href="#" class="comment_tool_btn">发表评论</a>
            </div>
        </div>

        <!-- 精彩评论 -->
        <div class="mod_hot_comment">
            <div class="title">
                <h2>精彩评论</h2>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Comments',
    data() {
        return {
            comment: '',
        };
    },
};
</script>

<style lang="less" scoped>
.mod_comment {
    // 标题
    .part_hd {
        height: 60px;
        overflow: hidden;
        .part_title {
            font-size: 24px;
            font-weight: 400;
            line-height: 58px;
            .part_title_desc {
                margin-left: 12px;
                font-size: 14px;
                color: #999;
            }
        }
    }

    // 输入框
    .comment_input {
        display: flex;
        margin-bottom: 60px;
        justify-content: end;
        flex-wrap: wrap;
        // 图标
        .icon_comment_face {
            display: inline-block;
            margin-right: 10px;
            width: 20px;
            height: 20px;
            background-position: 0 0;
            vertical-align: -1px;
            background-image: -webkit-image-set(
                url(https://y.qq.com/ryqq/static/media/comment.933b16ba.png?max_age=2592000) 1x,
                url(https://y.qq.com/ryqq/static/media/comment@2x.4da1c58e.png?max_age=2592000) 2x
            );
            background-repeat: no-repeat;
            vertical-align: middle;
        }

        // 发表评论
        .comment_tool {
            .comment_tool_btn {
                display: inline-block;
                margin-right: 5px;
                width: 80px;
                height: 27px;
                border: 1px solid #31c27c;
                background-color: #31c27c;
                color: #fff;
                line-height: 27px;
                text-align: center;
                border-radius: 2px;
                font-size: 14px;
            }
        }
    }

    // 精彩评论
    .mod_hot_comment {
        .title {
            margin-bottom: 50px;
            height: 34px;
            line-height: 34px;
            padding-bottom: 10px;
            border-bottom: 1px solid #ededed;
            h2 {
                font-weight: 400;
                font-size: 16px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
    }
}
</style>
