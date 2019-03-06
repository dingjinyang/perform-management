<template>
  <div class="errorpPage-box">
    <h1>对不起！您访问的页面不存在！</h1>
    <h2>Sorry, the page you visited does not exist.</h2>
    <p>您可以：</p>
    <div class="errorpPage-operate">
      <a class="operateBtn" title="上一页" @click="$router.back(-1)">上一页</a>
      <a class="operateBtn" title="返回首页" @click="$router.push('/')">返回首页</a>
    </div>
  </div>
</template>
<style scoped>
.errorpPage-box {
  margin: 0px;
  padding: 0px;
  font-family: "微软雅黑";
  font-size: 16px;
}
a {
  text-decoration: none;
  color: #1064a0;
}
h1,
h2 {
  margin: 0;
  font-weight: normal;
  font-family: "微软雅黑";
}
.errorpPage-box h1 {
  font-size: 44px;
  color: #0188de;
  padding: 20px 0px 10px;
}
.errorpPage-box h2 {
  color: #0188de;
  font-size: 16px;
  padding: 10px 0px 40px;
}
.errorpPage-box p {
  color: #666;
}
.errorpPage-box {
  width: 910px;
  padding: 20px 20px 40px;
  margin-top: 80px;
  border-style: dashed;
  border-color: #e4e4e4;
  line-height: 30px;
  margin-left: auto;
  margin-right: auto;
}
.errorpPage-operate .operateBtn {
  width: 180px;
  height: 28px;
  margin-left: 0px;
  margin-top: 10px;
  background: #009cff;
  border-bottom: 4px solid #0188de;
  text-align: center;
  display: inline-block;
  font-size: 14px;
  color: #fff;
}
.errorpPage-operate .operateBtn:hover {
  background: #5bbfff;
}
</style>


