import { SVGAttributeProps } from '@/types'

export default function KakaoLoginButton({
  height = 50,
  width = 366,
}: Partial<SVGAttributeProps>) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 366 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="366" height="50" rx="10" fill="#FEE500" />
      <path
        d="M146.859 19.75C146.854 21.2396 146.664 22.599 146.289 23.8281C145.919 25.0573 145.266 26.2031 144.328 27.2656C143.391 28.3281 142.104 29.2604 140.469 30.0625L139.656 28.9531C140.891 28.349 141.904 27.6719 142.695 26.9219C143.487 26.1719 144.099 25.3411 144.531 24.4297L139.953 24.8594L139.734 23.5781L144.984 23.2266C145.188 22.5286 145.318 21.7708 145.375 20.9531H140.469V19.75H146.859ZM150.484 23.9219H152.656V25.1406H150.484V32.3125H149V18.3281H150.484V23.9219ZM160.688 19.75C160.682 21.2396 160.492 22.599 160.117 23.8281C159.747 25.0573 159.094 26.2031 158.156 27.2656C157.219 28.3281 155.932 29.2604 154.297 30.0625L153.484 28.9531C154.719 28.349 155.732 27.6719 156.523 26.9219C157.315 26.1719 157.927 25.3411 158.359 24.4297L153.781 24.8594L153.562 23.5781L158.812 23.2266C159.016 22.5286 159.146 21.7708 159.203 20.9531H154.297V19.75H160.688ZM164.312 23.9219H166.484V25.1406H164.312V32.3125H162.828V18.3281H164.312V23.9219ZM173.609 19.1719C174.604 19.1771 175.492 19.3359 176.273 19.6484C177.06 19.9557 177.674 20.3906 178.117 20.9531C178.56 21.5104 178.781 22.1562 178.781 22.8906C178.781 23.5781 178.594 24.1901 178.219 24.7266C177.849 25.2578 177.328 25.6849 176.656 26.0078C175.99 26.3255 175.219 26.5208 174.344 26.5938V29.3438H180.047V30.5781H167.234V29.3438H172.875V26.5938C172.005 26.5208 171.237 26.3255 170.57 26.0078C169.904 25.6849 169.383 25.2578 169.008 24.7266C168.638 24.1901 168.453 23.5781 168.453 22.8906C168.453 22.1562 168.674 21.5104 169.117 20.9531C169.56 20.3906 170.172 19.9557 170.953 19.6484C171.734 19.3359 172.62 19.1771 173.609 19.1719ZM173.609 20.3906C172.896 20.3854 172.255 20.487 171.688 20.6953C171.125 20.8984 170.685 21.1927 170.367 21.5781C170.049 21.9583 169.891 22.3958 169.891 22.8906C169.891 23.4062 170.049 23.8568 170.367 24.2422C170.685 24.6276 171.125 24.9245 171.688 25.1328C172.25 25.3411 172.891 25.4479 173.609 25.4531C174.333 25.4479 174.977 25.3411 175.539 25.1328C176.107 24.9245 176.549 24.6276 176.867 24.2422C177.185 23.8568 177.344 23.4062 177.344 22.8906C177.344 22.3958 177.185 21.9583 176.867 21.5781C176.549 21.1927 176.107 20.8984 175.539 20.6953C174.971 20.487 174.328 20.3854 173.609 20.3906ZM197.781 30.6562H184.969V29.4062H190.609V26.9531H186.531V22.5H194.75V20.5312H186.5V19.3125H196.219V23.6875H188V25.7344H196.547V26.9531H192.078V29.4062H197.781V30.6562ZM209.891 21.25C209.891 22.0677 209.88 22.776 209.859 23.375C209.844 23.974 209.799 24.6667 209.727 25.4531C209.654 26.2344 209.536 27.0885 209.375 28.0156L207.859 27.875C208.031 27.0104 208.159 26.1927 208.242 25.4219C208.326 24.651 208.375 23.9661 208.391 23.3672C208.411 22.763 208.422 22.0573 208.422 21.25V20.9688H200.172V19.75H209.891V21.25ZM211.562 30.3438H198.797V29.1094H211.562V30.3438ZM224.234 28.5156H222.75V18.3438H224.234V28.5156ZM224.656 32.0312H215.078V27.4844H216.578V30.8281H224.656V32.0312ZM216.641 19.2812C217.339 19.2812 217.969 19.4297 218.531 19.7266C219.099 20.0234 219.544 20.4349 219.867 20.9609C220.195 21.487 220.359 22.0833 220.359 22.75C220.359 23.4271 220.195 24.0312 219.867 24.5625C219.544 25.0885 219.099 25.5 218.531 25.7969C217.969 26.0885 217.339 26.2344 216.641 26.2344C215.943 26.2344 215.31 26.0885 214.742 25.7969C214.174 25.5 213.727 25.0859 213.398 24.5547C213.07 24.0234 212.906 23.4219 212.906 22.75C212.906 22.0833 213.07 21.487 213.398 20.9609C213.727 20.4349 214.174 20.0234 214.742 19.7266C215.31 19.4297 215.943 19.2812 216.641 19.2812ZM216.641 20.5781C216.208 20.5781 215.818 20.6719 215.469 20.8594C215.125 21.0417 214.854 21.2969 214.656 21.625C214.458 21.9531 214.359 22.3281 214.359 22.75C214.359 23.1823 214.456 23.5651 214.648 23.8984C214.846 24.2266 215.117 24.4818 215.461 24.6641C215.81 24.8464 216.203 24.9375 216.641 24.9375C217.068 24.9375 217.453 24.8464 217.797 24.6641C218.141 24.4818 218.411 24.224 218.609 23.8906C218.807 23.5573 218.906 23.1771 218.906 22.75C218.906 22.3333 218.807 21.9609 218.609 21.6328C218.411 21.2995 218.138 21.0417 217.789 20.8594C217.445 20.6719 217.062 20.5781 216.641 20.5781Z"
        fill="#391B1B"
      />
      <path
        d="M28 14C21.3724 14 16 18.2378 16 23.4656C16 26.8686 18.2765 29.8503 21.6926 31.5189C21.4414 32.4543 20.7837 34.9063 20.6519 35.4311C20.4897 36.0824 20.8913 36.0737 21.1542 35.8981C21.3606 35.7611 24.4428 33.6707 25.7726 32.7681C26.4943 32.8748 27.2385 32.9313 28 32.9313C34.6276 32.9313 40 28.6928 40 23.4656C40 18.2384 34.6276 14 28 14Z"
        fill="#391B1B"
      />
    </svg>
  )
}
