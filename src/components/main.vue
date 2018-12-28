<template>
	<div>
	<el-container style=" border: 1px solid #eee;min-width: 1200px;" id="layout-main-div">		  
	<el-header style="text-align: right; font-size: 12px;padding: 0;">
	  <span class="menu-span"  v-bind:class="{ 'menu-span-focus': isFocus }">
		<i class="icon iconfont icon-menu-wh"  v-bind:class="{ 'icon-menu-focus': isFocus ,'icon-menu-fold ' : isCollapse, 'icon-menu-unfold ': !isCollapse}"  @click="menuClick" @mouseenter="enter" @mouseleave="leave"></i>		
	  </span>
	  <span class="div-logo">
	  	<img src="../assets/logo.png" height="40px" style="margin-top: 10px;margin-left: 10px;"/> 
	  </span>

      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span style="margin-right: 30px;">王小虎</span>
    </el-header>
	
	
	<el-container class="el-menu-demo-height">
 
	<el-menu default-active="1-4-1" class="el-menu-vertical-demo el-menu-demo-height "  @open="handleOpen" @close="handleClose" :collapse="isCollapse">
		
	  <el-submenu index="1">
		<template slot="title">
		  <i class="el-icon-location"></i>
		  <span slot="title">导航一</span>
		</template>
		<el-menu-item-group>
		  <span slot="title">分组一</span>
		  <el-menu-item index="1-1" @click="handleClick('/HelloWorld')">主页</el-menu-item>
		  <el-menu-item index="1-2" @click="handleClick('/table')">table</el-menu-item>
		</el-menu-item-group>
		<el-menu-item-group title="分组2">
		  <el-menu-item index="1-3">选项3</el-menu-item>
		</el-menu-item-group>
		<el-submenu index="1-4">
		  <span slot="title">选项4</span>
		  <el-menu-item index="1-4-1">选项1</el-menu-item>
		</el-submenu>
	  </el-submenu>
	  <el-menu-item index="2">
		<i class="el-icon-menu"></i>
		<span slot="title">导航二</span>
	  </el-menu-item>
	  <el-menu-item index="3" disabled>
		<i class="el-icon-document"></i>
		<span slot="title">导航三</span>
	  </el-menu-item>
	  <el-menu-item index="4">
		<i class="el-icon-setting"></i>
		<span slot="title">导航四</span>
	  </el-menu-item>
	
	</el-menu>
		
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</el-container>
</div>
</template>

<style scoped="scoped">
	@import '../../static/css/self-icon/iconfont.css';
	.div-logo{
		float: left;
		width: 135px;
		height: 60px;
		text-align: left;
		background-color: #F0F9EB;
	}
   .icon-menu-wh{
   	  font-size: 24px;
   }
   
   .icon-menu-focus{
   	  font-size: 28px;
   }
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-menu-demo-height {
	height: 100%;
	text-align: left;
  }
  .menu-span{
  	float: left; 
  	width: 65px;
  	height: 60px;
  	text-align: center;
  	vertical-align: middle;
  }
  .menu-span-focus{
  	background-color:#CBD3DE ;
  }
</style>

<script>
  export default {
	name: 'layout-main',
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item),
		isCollapse: false,
		isFocus: false
      }
    },
	mounted: function () {
		var clientHeight=document.documentElement.clientHeight;//document.body.clientHeight;
		document.getElementById("layout-main-div").style.height=clientHeight+"px";
			
	},
	methods: {
	  menuClick(){
		this.isCollapse=!this.isCollapse;
	  },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
	  handleClick(path) {
		this.$router.push(path)
	  },
	  enter(){
	  	this.isFocus= true;
	  },
	  leave(){
	  	this.isFocus= false;
	  }
    }
  };
</script>