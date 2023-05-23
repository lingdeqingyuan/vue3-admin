import SvgIcon from './SvgIcon/index.vue'

const allGlobalComponent = {
    SvgIcon
}
// 自定义插件

export default {
    install(app) {
        Object.keys(allGlobalComponent).forEach((key) => {
            app.component(key, key)
        })
    }
}