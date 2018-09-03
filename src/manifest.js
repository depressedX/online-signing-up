export const groups = [
    {code: 1, name: '技术工程事业群'},
    {code: 2, name: '应用服务事业群'},
    {code: 3, name: '网络媒体事业群'},
    {code: 4, name: '团队发展事业群'},
    {code: 5, name: '易班工作站'},
]

export const departments = [
    {code: 10, name: '技术-视觉设计组'},
    {code: 11, name: '技术-web开发组'},
    {code: 12, name: '技术-移动终端组'},
    {code: 20, name: '应用-产品运营事业部'},
    {code: 21, name: '应用-内容运营事业部'},
    {code: 30, name: '网媒-小树林日报'},
    {code: 31, name: '网媒-视平线工作室'},
    {code: 32, name: '网媒-有盐工作室'},
    {code: 40, name: '团队-行政中心·财务部'},
    {code: 41, name: '团队-行政中心·人力资源部'},
    {code: 42, name: '团队-行政中心·采购部'},
    {code: 43, name: '团队-运营中心'},
    {code: 50, name: '易班-生活服务事业部'},
    {code: 51, name: '易班-平台运营事业部'},
    {code: 52, name: '易班-公关推广事业部'},
]

export const processStage = [
    {code: 1, message: '已提交申请'},
    {code: 2, message: '面试通过，进入试用期'},
    {code: 3, message: '面试未通过'},
    {code: 4, message: '未通过试用期'},
    {code: 5, message: ' 通过试用期 正式成为学线成员'},
]

export const campus = [
    {code: 0, name: '中心校区'},
    {code: 1, name: '洪家楼校区'},
    {code: 2, name: '兴隆山校区'},
    {code: 3, name: '软件园校区'},
    {code: 4, name: '趵突泉校区'},
    {code: 5, name: '千佛山校区'},
]

export const getGroupByCode = code => groups.find(dd => dd.code === code)