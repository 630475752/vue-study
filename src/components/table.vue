<template>
<div>
   <el-table 
    :data="tableData2"
    style="width: 100%;"
    :row-class-name="tableRowClassName">
    <el-table-column
      prop="birth"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="addr"
      label="地址">
    </el-table-column>
  </el-table>
  <div class="block el-page-layout">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</div>
</template>

<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
  .el-page-layout{
	  text-align: right;
	  margin-top: 10px;
	  margin-right: 10px;
  }
</style>

<script>
	import { getUserList } from '../api/api';
export default {
	name: "user-table",
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      },
	  handleSizeChange(val) {
		 this.pageSize=val;
        console.log(`每页 ${val} 条`);
		console.log(this.pageSize);
		console.log(this.currentPage);

      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
		this.currentPage=val;
		console.log(this.pageSize);
		console.log(this.currentPage);
      }
    },
    data() {
      return {
         tableData2: [],
		 currentPage: 40,
		 pageSize: 100,
		 total: 0
      }
    },mounted: function () {
		let params={currentPage:this.currentPage,pageSize:this.pageSize,page:1};
		getUserList(params).then(data => {
			let { users, total, pageSize ,currentPage} = data;
			
			this.tableData2=users;
			this.total = total;
			this.pageSize=pageSize;
			this.currentPage = currentPage;
		});
			
	},
  }
</script>
