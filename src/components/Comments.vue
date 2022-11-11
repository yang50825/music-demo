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
                :autosize="{ minRows: 2, maxRows: 4 }"
                placeholder="请输入内容"
                v-model="comment"
            ></el-input>
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
}
</style>
