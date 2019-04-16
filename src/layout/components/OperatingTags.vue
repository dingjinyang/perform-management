<template>
    <div class="tag-container">
        <div class="tag" v-for="(item,index) in tags" :key="index" :class="item.name===currentTag?'active':''"
             @click="handleClick(item.name)">
            {{item.name}}
            <i class="el-icon-close close" @click="deleteTag(item.name)"></i>
        </div>
    </div>
</template>

<script>
    export default {
        name: "OperatingTags",
        data() {
            return {
                tags: [
                    {name: '标签一'},
                    {name: '标签二'},
                    {name: '标签三'},
                    {name: '标签四'},
                    {name: '标签五'}
                ],
                currentTag: '标签一'
            }
        },
        methods: {
            deleteTag(name) {
                const index = this.tags.findIndex(item => item.name === name);
                this.tags.splice(index, 1);
            },
            handleClick(name) {
                this.currentTag = name;
            }
        },
        watch: {
            $route(val) {
                const index = this.tags.findIndex(item => item === val.name);
                if (index) {
                    this.tags.push({name: val.name})
                }
            }
        }
    }
</script>

<style scoped>
    .tag-container {
        height: 100%;
        padding-left: 10px;
        display: flex;
        justify-items: start;
        align-items: center;
        /*-webkit-box-shadow: 0 1px 3px  rgba(0,0,0,.12);*/
        /*box-shadow: 0 1px 3px  rgba(0,0,0,.12);*/

        -moz-box-shadow: 0 -2px 3px -1px rgba(0,0,0,.12);
        -webkit-box-shadow: 0 -2px 3px -1px rgba(0,0,0,.12);
        box-shadow: 0 -2px 3px -1px rgba(0,0,0,.12);
        border-bottom: 1px solid #DCDFE6;
    }

    .tag {
        height: 25px;
        padding: 0 10px;
        margin: 0 2px;
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #d8dce5;
        cursor: pointer;
    }

    .active {
        background-color: #6699ff;
        color: white;
    }

    .close {
        width: 15px;
        height: 15px;
        margin-top: 2px;
        padding-top: 1px;
        font-size: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .close:hover {
        border-radius: 50%;
        background-color: #b4bccc;
        color: #fff;
    }
</style>
