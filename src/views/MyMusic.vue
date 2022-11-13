<template>
    <div>
        我的音乐
        <el-button @click="dialogFormVisible = true">添加音乐</el-button>

        <el-dialog title="添加音乐" :visible.sync="dialogFormVisible">
            <el-form :model="music">
                <el-form-item label="音乐名称" :label-width="formLabelWidth">
                    <el-input v-model="music.songName" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="歌手名称" :label-width="formLabelWidth">
                    <el-input v-model="music.songSinger" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="音乐描述" :label-width="formLabelWidth">
                    <el-input v-model="music.songDesc" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="音乐时长" :label-width="formLabelWidth">
                    <el-input v-model="music.songTime" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="是否是VIP" :label-width="formLabelWidth">
                    <el-radio-group v-model.number="music.isVip">
                        <el-radio :label="1">是</el-radio>
                        <el-radio :label="0">否</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="是否有MV" :label-width="formLabelWidth">
                    <el-radio-group v-model.number="music.isMv">
                        <el-radio :label="1">是</el-radio>
                        <el-radio :label="0">否</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="音乐类型" :label-width="formLabelWidth">
                    <el-select v-model.number="music.listId" placeholder="请选择">
                        <el-option
                            v-for="obj in typeList"
                            :key="obj.id"
                            :label="obj.listTitle"
                            :value="obj.id"
                        ></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="addMusic">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: 'MyMusic',
    data() {
        return {
            typeList: [],
            dialogTableVisible: false,
            dialogFormVisible: false,
            music: {
                songName: '',
                songSinger: '',
                songImg:
                    'https://y.qq.com/music/photo_new/T002R300x300M000001aC9dM35U6KB_3.jpg?max_age=2592000',
                songTime: '',
                songDesc: '',
                songAmount: 0,
                isVip: '',
                isMv: '',
                listId: '',
            },
            formLabelWidth: '120px',
        };
    },
    methods: {
        addMusic() {
            console.log(this.music);
            this.$axios({
                url: '/api/music/addMusic',
                method: 'POST',
                data: {
                    ...this.music,
                },
            }).then(res => {
                this.dialogTableVisible = false;
                this.dialogFormVisible = false;
            });
        },
    },
    created() {
        this.$axios({
            url: '/api/music/queryTypeList',
        }).then(res => {
            this.typeList = res.data.data;
        });
    },
};
</script>

<style></style>
