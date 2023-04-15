import { postApi } from './postApi.js'
const apiObj = {
  apiLogin: '/api/user/login', // 登录
  apiCaptcha: '/captcha', // 获取验证码
  apiRegister: '/api/user/register', // 用户注册
  apiGetNewsList: '/api/index/getNewsList', // 新闻列表
  apiFindNewsDetails: '/api/index/findNewsDetails', // 新闻详情
  apiGetBannerList: '/api/index/getBannerList', // 首页轮播
  apiIndexCommon: '/api/index/common', // 首页公共数据
  apiSignin: '/api/index/signin', // 签到
  apiSignInList: '/api/index/signInList', // 签到列表
  apiEnsureList: '/api/index/ensureList', // 民生保障列表
  apiDrawEnsure: '/api/index/drawEnsure', // 领取民生保障
  apiProjectCategoryList: '/api/project/projectCategoryList', // 项目分类列表
  apiProjectList: '/api/project/projectList', // 项目列表
  apiApplyProject: '/api/project/applyProject', // 申请项目
  apiMyApply: '/api/project/myApply', // 我的申请
  apiApplyDetails: '/api/project/applyDetails', // 申请详情
  apiGetTeam: '/api/index/getTeam', // 获取团队
  apiMyBill: '/api/user/myBill', // 我的账单
  apiRealname: '/api/user/realname', // 用户实名
  apiBindPayment: '/api/user/bindPayment', // 绑定收款方式
  apiGetPayment: '/api/user/getPayment', // 获取收款方式
  apiUpload: '/api/common/upload', // 上传文件
  apiProfile: '/api/user/profile', // 修改个人信息
  apiWithdraw: '/api/user/withdraw', // 用户提现
  apiGetWithdrawRecord: '/api/user/getWithdrawRecord', // 获取提现记录
  apiTransfer: '/api/user/transfer', // 用户转账
  apiTransferRecord: '/api/user/transferRecord', // 最近转账记录
  apiFindUserInfo: '/api/user/findUserInfo', // 获取用户信息
  apiRecharge: '/api/user/recharge', // 用户充值
  apiGetRechargeChannel: '/api/user/getRechargeChannel', // 获取充值渠道
  apiGetRechargeRecord: '/api/user/getRechargeRecord', // 获取充值记录
  apiExchange: '/api/user/exchange', //用户兑现
  apiExchangeRecord: '/api/user/exchangeRecord', // 获取兑换记录
}
// 设置请求方式 POST/GET
const newApi = {}
Object.keys(apiObj).forEach(item => {
  newApi[item] = {
    url: apiObj[item],
    method: postApi.indexOf(item) === -1 ? 'GET' : 'POST'
  }
})


export default newApi