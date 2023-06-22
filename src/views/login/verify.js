import i18n from '@/i18n'

// 请输入用户名
export const userVerifyRequired = () => {
    return i18n.global.t('login.userVerifyRequired')
}

// 用户名长度为3~8个
export const userVerifyLength = () => {
    return i18n.global.t('login.userVerifyLength')
}

// 请输入密码
export const passwordVerifyRequired = () => {
    return i18n.global.t('login.passwordVerifyRequired')
}

// 密码长度为6~12个
export const passwordVerifyLength = () => {
    return i18n.global.t('login.passwordVerifyLength')
}
