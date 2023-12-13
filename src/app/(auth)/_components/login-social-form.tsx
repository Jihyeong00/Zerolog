import style from '@/app/(auth)/_components/login.module.scss'
import GoogleLoginButton from '@/assets/svg/social/google-login-button'
import NaverLoginButton from '@/assets/svg/social/naver-login-button'
import KakaoLoginButton from '@/assets/svg/social/kakao-login-button'

type PropsType = {
  changeForm: () => void
}

export default function LoginSocialForm({ changeForm }: PropsType) {
  return (
    <div className={`${style.form_div} ${style.social}`}>
      <div
        className={style.change_title}
        onMouseDown={changeForm}
        tabIndex={0}
        role="button"
      >
        <p>⬅ Move to Local login</p>
      </div>
      <div className={style.form}>
        <GoogleLoginButton />
        <NaverLoginButton />
        <KakaoLoginButton />
      </div>
    </div>
  )
}
