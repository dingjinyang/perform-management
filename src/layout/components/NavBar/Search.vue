<template>
    <div class="container">
        <el-tooltip class="item" effect="dark" content="搜索" :disabled="showInput" placement="bottom">
        <i style="cursor: pointer;flex: 1;" @click="handleClick"
           class="el-icon-search"></i>
        </el-tooltip>
        <transition name="fade">
            <el-input ref="input"
                      style="margin-left: 3px"
                      v-if="showInput"
                      v-model="input"
                      placeholder="请输入设备名称"
                      @focus="handleFocus"
                      @blur="handleBlur"></el-input>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "Search",
        data() {
            return {
                showInput: false,
                input: ''
            }
        },
        methods: {
            handleClick() {
                this.showInput = true;
                this.$nextTick(() => {
                    setTimeout(() => {
                        this.$refs.input.focus();
                    }, 500)
                })
            },
            handleFocus() {
                this.showInput = true;
            },
            handleBlur() {
                this.showInput = false;
            }
        }
    }
</script>

<style scoped>
    .container {
        width: 100%;
        height: 100%;
        text-align: end;
        display: flex;
        align-items: center;
    }

    .fade-enter-active, .fade-leave-active {
        transition: all .5s;
    }

    .fade-enter, .fade-leave-to {
        width: 0;
        overflow: hidden;
    }


</style>

<style>
    .el-input__inner {
        -webkit-appearance: none;
        background-color: #FFF;
        border-radius: 0;
        border-bottom: 1px solid #dbdbdb;
        border-top: 0;
        border-left: 0;
        border-right: 0;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        font-size: inherit;
        height: 40px;
        line-height: 40px;
        outline: 0;
        padding: 0 15px;
        -webkit-transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
        transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
        width: 100%;
    }
</style>
