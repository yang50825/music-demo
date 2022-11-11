<template>
    <div>
        <div class="content">
            {{ list }}
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [],
        };
    },
    methods: {
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
    computed: {
        listId() {
            return this.$route.params.listId;
        },
    },
    created() {
        this.queryMusicList();
    },
};
</script>

<style>
.content {
    width: 100px;
    height: 100px;
    background-color: red;
}
</style>
