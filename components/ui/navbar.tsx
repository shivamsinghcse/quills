'use client'

import React from 'react'
import { Menu, X } from 'lucide-react'
import quillsLogo from '@/public/quills.svg'
const menuItems = [
    {
        name: 'Home',
        href: '#',
    },
    {
        name: 'About',
        href: '#',
    },
    {
        name: 'Contact',
        href: '#',
    },
]

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className="relative w-full bg-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
                {/* <div className="inline-flex items-center space-x-2">
                    <span className='h-20'>
                       
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="558" height="257">
                            <path d="M0 0 C184.14 0 368.28 0 558 0 C558 84.81 558 169.62 558 257 C373.86 257 189.72 257 0 257 C0 172.19 0 87.38 0 0 Z " fill="#020000" transform="translate(0,0)" />
                            <path d="M0 0 C4.35870738 2.5225239 6.41918041 6.08836082 8.625 10.5 C9.49125 12.0778125 9.49125 12.0778125 10.375 13.6875 C12.54694236 18.93942843 12.38068347 24.89756912 12.625 30.5 C13.285 30.5 13.945 30.5 14.625 30.5 C15.44080542 36.21193113 15.77354221 41.73898134 15.77026367 47.50439453 C15.77362228 48.3675528 15.7769809 49.23071106 15.78044128 50.12002563 C15.78989201 52.95763619 15.79189235 55.79518721 15.79296875 58.6328125 C15.79618863 60.63133772 15.79955323 62.62986271 15.80305481 64.62838745 C15.80903378 68.81948389 15.8108963 73.01055976 15.81030273 77.20166016 C15.81020193 82.50838803 15.8237748 87.81497965 15.84107494 93.12167549 C15.85233873 97.2556109 15.85421749 101.38951504 15.85369301 105.5234642 C15.85485468 107.47579283 15.85917118 109.42812277 15.86702538 111.38043594 C16.06033559 164.45612432 16.06033559 164.45612432 3.81640625 177.4140625 C-1.3949601 181.98619681 -4.6790127 182.80659173 -11.62109375 182.70703125 C-16.91697166 182.30890142 -19.97890799 180.14073364 -23.5 176.375 C-33.83574766 163.3406237 -34.52906535 143.94764341 -34.52026367 127.91040039 C-34.52362228 127.00977371 -34.5269809 126.10914703 -34.53044128 125.18122864 C-34.53985457 122.23669006 -34.54188928 119.29220889 -34.54296875 116.34765625 C-34.54618722 114.28079709 -34.54955172 112.21393816 -34.55305481 110.14707947 C-34.55902143 105.82762118 -34.56089717 101.50818282 -34.56030273 97.1887207 C-34.56020107 91.67694667 -34.573869 86.16530132 -34.59107494 80.65355778 C-34.60223634 76.38882367 -34.6042207 72.12412031 -34.60369301 67.85937309 C-34.60486628 65.82817579 -34.60925101 63.79697752 -34.61702538 61.76579475 C-34.6835545 42.59525961 -34.6835545 42.59525961 -32.84559631 34.56344604 C-32.37031071 32.47943865 -32.12898427 30.47631441 -31.953125 28.34765625 C-31.10824514 18.60136358 -29.46796337 9.7514992 -22.3671875 2.4296875 C-15.61953914 -2.77011321 -7.80575486 -3.26342294 0 0 Z " fill="#040000" transform="translate(79.375,23.5)" />
                            <path d="M0 0 C8.70012009 7.17409096 13.79365274 14.88675147 17.875 25.375 C18.31714844 26.47585937 18.75929688 27.57671875 19.21484375 28.7109375 C30.57355877 60.54295953 28.91408472 98.484512 23.875 131.375 C23.76816895 132.138125 23.66133789 132.90125 23.55126953 133.6875 C21.2594373 149.82440744 13.60696952 167.56691383 0.7421875 178.00390625 C-1.46537942 179.62494388 -3.70537762 181.08957561 -6.125 182.375 C-4.949375 182.705 -3.77375 183.035 -2.5625 183.375 C2.78603582 185.48975796 6.22081476 188.20818606 8.875 193.375 C9.88068773 197.17869021 10.44729496 201.0353032 10.90161133 204.93969727 C11.42573021 209.38216107 11.93045047 212.79896876 14.875 216.375 C18.00135209 216.79246608 18.00135209 216.79246608 20.875 216.375 C21.865 213.735 22.855 211.095 23.875 208.375 C24.535 208.375 25.195 208.375 25.875 208.375 C25.50626118 214.52064694 24.10246623 217.14753377 19.875 221.375 C14.12995976 223.29001341 7.00881085 223.81485904 1.41796875 221.24609375 C-0.62257504 219.75177583 -2.36320283 218.18701467 -4.125 216.375 C-5.053125 215.488125 -5.98125 214.60125 -6.9375 213.6875 C-11.4494042 206.85518793 -12.39643632 198.69874116 -13.3046875 190.6875 C-13.96316532 188.1979299 -13.96316532 188.1979299 -16.2734375 186.6171875 C-19.55577294 185.18734823 -22.31404125 184.82444291 -25.875 184.5 C-32.34176563 183.67560564 -36.84137108 182.14902066 -42.125 178.375 C-42.71410156 177.98957031 -43.30320312 177.60414063 -43.91015625 177.20703125 C-60.18605868 165.15767296 -64.89124552 141.31487763 -67.71777344 122.56103516 C-69.08146162 111.89189203 -69.28915377 101.13839806 -69.25537109 90.39550781 C-69.25000153 88.37557479 -69.25536678 86.35586398 -69.26171875 84.3359375 C-69.26914282 72.37602789 -68.99729565 60.34097308 -66.75 48.5625 C-66.55156494 47.49189331 -66.55156494 47.49189331 -66.34912109 46.3996582 C-63.06782176 29.26333519 -56.60430494 9.90027478 -41.59765625 -0.3515625 C-29.31382726 -7.96356813 -12.20561538 -8.48266706 0 0 Z M-37.46484375 5.015625 C-38.54483174 6.75990749 -39.35116244 8.47593945 -40.125 10.375 C-40.39828125 10.98472656 -40.6715625 11.59445313 -40.953125 12.22265625 C-43.71720452 19.25479973 -44.1641507 26.81671721 -44.87548828 34.27612305 C-45.125 36.375 -45.125 36.375 -45.63052368 38.94512939 C-46.23077364 43.10868507 -46.2804372 47.15136748 -46.28613281 51.35180664 C-46.29109772 52.23578629 -46.29606262 53.11976593 -46.30117798 54.03053284 C-46.31575009 56.94874871 -46.32259816 59.86690999 -46.328125 62.78515625 C-46.33095238 63.79050352 -46.33377975 64.79585079 -46.33669281 65.83166313 C-46.35167585 71.16617977 -46.36090722 76.50066949 -46.36523438 81.83520508 C-46.37067606 87.28787474 -46.39461453 92.74028924 -46.42320633 98.19287968 C-46.44205258 102.43229325 -46.44705013 106.67164851 -46.44857025 110.91110039 C-46.45155491 112.91729545 -46.45943727 114.92349056 -46.47275543 116.92964363 C-47.07080965 149.45473128 -47.07080965 149.45473128 -33.125 177.375 C-28.24906678 181.41800029 -24.02171529 181.72555394 -17.84765625 181.65234375 C-12.74357273 181.13241559 -10.17694831 178.34997648 -6.5625 175 C0.21391217 166.29996115 1.90224706 154.03298872 2.875 143.375 C2.95722809 142.48356293 3.03945618 141.59212585 3.12417603 140.67367554 C4.01649793 129.83355208 4.02070169 119.03408403 4.0078125 108.1640625 C4.00848772 106.14057402 4.00945955 104.11708562 4.01071167 102.09359741 C4.01217637 97.87961037 4.01007253 93.66564469 4.00537109 89.45166016 C3.99965243 84.06529367 4.00297409 78.67897678 4.00894356 73.29261208 C4.01256366 69.12494536 4.01140429 64.95729034 4.00881577 60.78962326 C4.00815165 58.80339934 4.00895678 56.81717434 4.01129532 54.83095169 C4.01384816 52.05605514 4.00994527 49.2812383 4.00439453 46.50634766 C4.00641876 45.69683655 4.00844299 44.88732544 4.01052856 44.05328369 C3.99218234 39.07693526 3.58178637 34.30224683 2.875 29.375 C2.215 29.375 1.555 29.375 0.875 29.375 C0.88402344 28.59898438 0.89304688 27.82296875 0.90234375 27.0234375 C0.6431655 17.58033441 -1.7287187 10.1403804 -7.125 2.375 C-12.75949327 -1.94646154 -17.2182742 -3.10522027 -24.19921875 -3.03125 C-29.74798864 -2.2607933 -33.95256745 0.71487851 -37.46484375 5.015625 Z " fill="#F30000" transform="translate(91.125,24.625)" />
                            <path d="M0 0 C8.64779954 -0.5657439 15.16325893 3.10569192 21.6328125 8.5859375 C22.5815625 9.4728125 23.5303125 10.3596875 24.5078125 11.2734375 C24.5078125 8.6334375 24.5078125 5.9934375 24.5078125 3.2734375 C25.8278125 3.2734375 27.1478125 3.2734375 28.5078125 3.2734375 C28.5078125 21.0934375 28.5078125 38.9134375 28.5078125 57.2734375 C27.5178125 57.2734375 26.5278125 57.2734375 25.5078125 57.2734375 C23.93331708 50.85999283 22.48679172 44.51358574 21.6328125 37.9609375 C19.97400349 26.6645852 17.09512919 13.12883011 8.2578125 5.2734375 C3.3579807 3.49168048 -1.03047219 3.31632259 -5.93359375 5.22265625 C-12.76437616 8.78996766 -16.18119452 12.70398464 -18.85058594 20.01489258 C-19.93279018 23.82443269 -19.98122004 27.52191922 -19.9296875 31.4609375 C-19.91615234 32.70713867 -19.91615234 32.70713867 -19.90234375 33.97851562 C-19.55009653 46.63006158 -15.53882806 55.61221817 -7.4921875 65.2734375 C-7.04278809 65.81613281 -6.59338867 66.35882813 -6.13037109 66.91796875 C-1.27125984 72.76143338 3.72311287 78.46620347 8.91357422 84.01733398 C13.988154 89.4503577 18.54056347 94.96818091 22.5078125 101.2734375 C23.17683594 102.33175781 23.84585938 103.39007813 24.53515625 104.48046875 C29.57672742 112.72711412 32.88080876 120.96692036 35.5078125 130.2734375 C35.87390625 131.51867187 36.24 132.76390625 36.6171875 134.046875 C39.77249732 146.99581707 38.99516517 163.03823877 32.15234375 174.5546875 C26.00172987 183.39310315 18.19167449 188.73461334 7.58203125 190.859375 C-3.99124716 192.41816472 -14.87895238 191.32295604 -24.7421875 184.6484375 C-25.6496875 183.8646875 -26.5571875 183.0809375 -27.4921875 182.2734375 C-27.4921875 181.6134375 -27.4921875 180.9534375 -27.4921875 180.2734375 C-28.1521875 180.2734375 -28.8121875 180.2734375 -29.4921875 180.2734375 C-29.8221875 182.9134375 -30.1521875 185.5534375 -30.4921875 188.2734375 C-31.4821875 188.2734375 -32.4721875 188.2734375 -33.4921875 188.2734375 C-34.48671528 168.26121102 -34.60954638 148.3038907 -34.4921875 128.2734375 C-33.5021875 128.2734375 -32.5121875 128.2734375 -31.4921875 128.2734375 C-31.34970581 129.19286133 -31.34970581 129.19286133 -31.2043457 130.13085938 C-27.14502034 159.70983111 -27.14502034 159.70983111 -11.4921875 184.2734375 C-6.08545615 187.89826642 1.30196166 186.90642123 7.5078125 186.2734375 C13.2681102 184.2732149 16.66180734 180.63706261 19.5078125 175.2734375 C21.74731874 169.94551472 21.84142649 165.08232489 21.8203125 159.3984375 C21.83642578 158.53863281 21.85253906 157.67882812 21.86914062 156.79296875 C21.88236963 139.357136 8.86452789 126.79129099 -2.04638672 114.52636719 C-7.77577472 108.07374643 -13.19167531 101.5811926 -17.9921875 94.3984375 C-18.38937988 93.80426025 -18.78657227 93.21008301 -19.19580078 92.59790039 C-21.97875607 88.31620152 -24.2829626 83.87338169 -26.4921875 79.2734375 C-27.06646484 78.12101562 -27.06646484 78.12101562 -27.65234375 76.9453125 C-32.51137535 66.59620624 -34.05368796 56.26226534 -33.9921875 44.8984375 C-33.98864258 43.71612549 -33.98509766 42.53381348 -33.98144531 41.31567383 C-33.76238156 29.78704708 -31.46535068 20.68345878 -24.4921875 11.2734375 C-16.69331774 4.00059121 -10.31426117 1.13165875 0 0 Z " fill="#F40000" transform="translate(489.4921875,13.7265625)" />
                            <path d="M0 0 C13.2 0 26.4 0 40 0 C40 0.99 40 1.98 40 3 C36.7 3 33.4 3 30 3 C30.06058331 23.57567805 30.13811776 44.15123045 30.23571491 64.72676754 C30.2806399 74.2808058 30.32006217 83.83480705 30.34643555 93.38891602 C30.36944233 101.71833543 30.40287029 110.04763743 30.44870156 118.37696368 C30.47259765 122.7854193 30.49135009 127.19375889 30.49761391 131.60227776 C30.50368114 135.75638789 30.52373989 139.91020128 30.55427551 144.06420135 C30.56302955 145.58426665 30.5667838 147.10437076 30.56500816 148.62446022 C30.55870474 156.51450663 30.71455714 163.69392369 34 171 C34.26329762 171.64091552 34.52659525 172.28183104 34.79787159 172.94216824 C36.80263533 177.15693168 39.20566993 179.53175997 43.40234375 181.3359375 C51.00266553 183.2788769 59.32363107 183.21650038 66.5625 180.0625 C74.19769199 175.53465359 77.24296307 168.49128216 79.39540291 160.19192314 C80.52859287 154.20933519 80.42566503 148.20476173 80.40405273 142.13696289 C80.40976752 140.67386355 80.41673603 139.21076866 80.42485046 137.74768066 C80.44266147 133.80804113 80.4416381 129.86862574 80.43590808 125.92895818 C80.43280283 122.63322189 80.43892249 119.33752783 80.44494683 116.04179758 C80.45894675 108.27123695 80.45746483 100.50078642 80.44604492 92.73022461 C80.43452978 84.71778377 80.44870633 76.70567632 80.4754414 68.69327933 C80.49757808 61.80045915 80.50424152 54.90774382 80.49836498 48.01489061 C80.49499395 43.90347722 80.49742185 39.79227826 80.51461601 35.68089485 C80.53005402 31.82209711 80.5261653 27.9637965 80.50731087 24.10501862 C80.50361817 22.68925256 80.50675332 21.27344987 80.51719666 19.85771751 C80.53035738 17.92638712 80.51648144 15.99492871 80.50120544 14.06361389 C80.50099616 12.98281083 80.50078688 11.90200777 80.50057125 10.7884531 C79.87818214 7.32140853 78.73813867 6.14677804 76 4 C73.65961239 3.31466368 73.65961239 3.31466368 71.25 3.25 C70.45078125 3.19328125 69.6515625 3.1365625 68.828125 3.078125 C68.22484375 3.05234375 67.6215625 3.0265625 67 3 C67 2.01 67 1.02 67 0 C77.56 0 88.12 0 99 0 C99 0.99 99 1.98 99 3 C98.39671875 3.03738281 97.7934375 3.07476563 97.171875 3.11328125 C90.93350611 3.49037194 90.93350611 3.49037194 86 7 C84.86947957 10.34035356 84.8703182 13.51941375 84.86196899 17.02565002 C84.85651566 18.26054672 84.85106232 19.49544342 84.84544373 20.76776123 C84.84432399 22.13366694 84.84327347 23.49957271 84.84228516 24.86547852 C84.83761492 26.30633193 84.83247101 27.74718388 84.82688904 29.18803406 C84.81561786 32.2905876 84.80717876 35.3931316 84.80076981 38.49569893 C84.79006982 43.40959856 84.76981767 48.32342981 84.74765015 53.23728943 C84.68579944 67.21065115 84.63179183 81.18400927 84.59863281 95.1574707 C84.58023814 102.87532344 84.55123924 110.59306189 84.5106281 118.31083053 C84.48963434 122.39066054 84.47411177 126.47034699 84.47182083 130.55023384 C84.46965992 134.39414425 84.45364509 138.23775613 84.42743111 142.08157539 C84.42029047 143.48470407 84.41811142 144.88786913 84.42153358 146.29101181 C84.44919553 159.80072434 82.79949009 169.77032221 73.37109375 179.71875 C66.23680152 186.47232594 58.56090534 187.42285315 49.01928711 187.28125 C37.75013186 186.92177888 28.82966008 185.12572581 20.21875 177.40234375 C9.56787311 165.90917813 8.69188112 152.11586082 8.77294922 137.18701172 C8.77351443 135.71757515 8.77319462 134.24813802 8.77206421 132.77870178 C8.771494 128.81862603 8.78319411 124.85867321 8.79721212 120.89862585 C8.80977524 116.7493284 8.81089436 112.60002765 8.81326294 108.45071411 C8.81946139 100.60638342 8.83584992 92.76210895 8.85596192 84.91780293 C8.87837201 75.98183603 8.88932716 67.04586634 8.89935279 58.1098783 C8.92021771 39.73988708 8.95536166 21.36994807 9 3 C6.03 3 3.06 3 0 3 C0 2.01 0 1.02 0 0 Z " fill="#EEEEEE" transform="translate(132,19)" />
                            <path d="M0 0 C13.2 0 26.4 0 40 0 C40 0.99 40 1.98 40 3 C37.03 3 34.06 3 31 3 C31 61.74 31 120.48 31 181 C47.45850907 181.43945409 47.45850907 181.43945409 58.125 174 C67.00725302 159.78839517 66.38107176 141.18985985 67 125 C67.99 125 68.98 125 70 125 C70 144.47 70 163.94 70 184 C46.9 184 23.8 184 0 184 C0 183.01 0 182.02 0 181 C3.3 181 6.6 181 10 181 C10 122.59 10 64.18 10 4 C7.03 4 4.06 4 1 4 C0.67 2.68 0.34 1.36 0 0 Z " fill="#F40000" transform="translate(373,17)" />
                            <path d="M0 0 C13.2 0 26.4 0 40 0 C40 1.32 40 2.64 40 4 C37.03 4 34.06 4 31 4 C31 62.41 31 120.82 31 181 C46.89587333 181.6458682 46.89587333 181.6458682 57.5390625 174.421875 C66.76563939 160.21692929 66.12186962 141.26326027 67 125 C67.99 125 68.98 125 70 125 C70.02553841 129.38435557 70.04323489 133.768667 70.05493164 138.15307617 C70.05982895 139.63127397 70.06654386 141.10946734 70.07543945 142.58764648 C70.15640958 156.43353777 69.55450931 170.13726731 69 184 C46.56 184 24.12 184 1 184 C1 183.34 1 182.68 1 182 C3.97 182 6.94 182 10 182 C10 123.26 10 64.52 10 4 C6.7 4 3.4 4 0 4 C0 2.68 0 1.36 0 0 Z " fill="#F50000" transform="translate(293,17)" />
                            <path d="M0 0 C13.2 0 26.4 0 40 0 C40 0.99 40 1.98 40 3 C36.7 3 33.4 3 30 3 C30 62.07 30 121.14 30 182 C33.3 182 36.6 182 40 182 C40 182.66 40 183.32 40 184 C27.13 184 14.26 184 1 184 C1 183.34 1 182.68 1 182 C3.97 182 6.94 182 10 182 C10 122.93 10 63.86 10 3 C6.7 3 3.4 3 0 3 C0 2.01 0 1.02 0 0 Z " fill="#FC0000" transform="translate(247,17)" />
                            <path d="M0 0 C10.56 0 21.12 0 32 0 C32 0.99 32 1.98 32 3 C31.39671875 3.03738281 30.7934375 3.07476563 30.171875 3.11328125 C23.93350611 3.49037194 23.93350611 3.49037194 19 7 C17.86947957 10.34035356 17.8703182 13.51941375 17.86196899 17.02565002 C17.85651566 18.26054672 17.85106232 19.49544342 17.84544373 20.76776123 C17.84432399 22.13366694 17.84327347 23.49957271 17.84228516 24.86547852 C17.83761492 26.30633193 17.83247101 27.74718388 17.82688904 29.18803406 C17.81561786 32.2905876 17.80717876 35.3931316 17.80076981 38.49569893 C17.79006982 43.40959856 17.76981767 48.32342981 17.74765015 53.23728943 C17.68579944 67.21065115 17.63179183 81.18400927 17.59863281 95.1574707 C17.58023814 102.87532344 17.55123924 110.59306189 17.5106281 118.31083053 C17.48963434 122.39066054 17.47411177 126.47034699 17.47182083 130.55023384 C17.46965992 134.39414425 17.45364509 138.23775613 17.42743111 142.08157539 C17.42029047 143.48470407 17.41811142 144.88786913 17.42153358 146.29101181 C17.46108389 165.60683164 17.46108389 165.60683164 12.58365822 171.79776859 C11 173 11 173 8 173 C8.29003906 172.14728516 8.29003906 172.14728516 8.5859375 171.27734375 C8.97652344 170.11912109 8.97652344 170.11912109 9.375 168.9375 C9.63023437 168.18339844 9.88546875 167.42929688 10.1484375 166.65234375 C10.42945313 165.77707031 10.71046875 164.90179688 11 164 C11.51235703 162.63121956 11.51235703 162.63121956 12.0350647 161.23478699 C13.73620417 155.18717394 13.29562037 148.81976227 13.29052734 142.59106445 C13.29651778 141.12855691 13.30332451 139.66605252 13.31088257 138.20355225 C13.3284882 134.24719574 13.33323538 130.29092583 13.33451414 126.33453393 C13.33593833 123.86184498 13.34021278 121.38917788 13.34550858 118.91649437 C13.36398429 110.28830954 13.37218146 101.66018638 13.37060547 93.03198242 C13.36940173 84.99010116 13.39055564 76.94848727 13.4220928 68.90667373 C13.44822463 61.99696029 13.45897421 55.08733444 13.45769465 48.17757195 C13.4571845 44.05267076 13.46289783 39.92800784 13.48405075 35.8031559 C13.50338358 31.92801772 13.50359211 28.05334658 13.48901749 24.17819214 C13.48692273 22.75597134 13.49166994 21.33372165 13.5037384 19.91155052 C13.51913857 17.97126914 13.50750749 16.03082914 13.49447632 14.0905304 C13.49556585 13.00453206 13.49665539 11.91853373 13.49777794 10.79962635 C12.87961485 7.32292412 11.74614158 6.15044204 9 4 C6.65961239 3.31466368 6.65961239 3.31466368 4.25 3.25 C3.05117187 3.16492188 3.05117187 3.16492188 1.828125 3.078125 C1.22484375 3.05234375 0.6215625 3.0265625 0 3 C0 2.01 0 1.02 0 0 Z " fill="#E7E7E7" transform="translate(199,19)" />
                            <path d="M0 0 C0.99 0 1.98 0 3 0 C3 11.22 3 22.44 3 34 C2.67 34 2.34 34 2 34 C1.67 29.71 1.34 25.42 1 21 C0.67 22.98 0.34 24.96 0 27 C-0.33 27 -0.66 27 -1 27 C-0.67 18.09 -0.34 9.18 0 0 Z " fill="#DE0000" transform="translate(360,142)" />
                            <path d="M0 0 C0.33 1.32 0.66 2.64 1 4 C1.66 4 2.32 4 3 4 C2.74337755 5.44010481 2.46909179 6.8770687 2.1875 8.3125 C2.03667969 9.11300781 1.88585937 9.91351563 1.73046875 10.73828125 C0.90822527 13.28415813 0.13313096 14.40402551 -2 16 C-2.99 16 -3.98 16 -5 16 C-4.80664062 15.43152344 -4.61328125 14.86304688 -4.4140625 14.27734375 C-2.81863577 9.54635062 -1.33099414 4.81205575 0 0 Z " fill="#CDCDCD" transform="translate(212,176)" />
                            <path d="M0 0 C0.33 0.99 0.66 1.98 1 3 C-6.11389522 10.66742597 -6.11389522 10.66742597 -11 12 C-11 10.68 -11 9.36 -11 8 C-9.04690112 6.59886384 -7.04291182 5.26660533 -5 4 C-4.34 3.01 -3.68 2.02 -3 1 C-2.01 0.67 -1.02 0.34 0 0 Z " fill="#E4E4E4" transform="translate(209,191)" />
                            <path d="M0 0 C0.66 0.33 1.32 0.66 2 1 C-0.97 3.97 -3.94 6.94 -7 10 C-7 5.69032084 -4.83274712 4.10253255 -2 1 C-1.34 0.67 -0.68 0.34 0 0 Z " fill="#340000" transform="translate(480,20)" />
                            <path d="M0 0 C0.66 0.33 1.32 0.66 2 1 C-0.64 3.64 -3.28 6.28 -6 9 C-6 6 -6 6 -3.5625 3.375 C-2.716875 2.59125 -1.87125 1.8075 -1 1 C-0.67 0.67 -0.34 0.34 0 0 Z " fill="#2F0000" transform="translate(60,24)" />
                        </svg>
                    </span>
                    <span className="font-bold">DevUI</span>
                </div> */}
                <div className="hidden lg:block">
                    <ul className="inline-flex space-x-8">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.href}
                                    className="text-sm font-semibold text-gray-800 hover:text-gray-900"
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="hidden lg:block">
                    <button
                        type="button"
                        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        Button text
                    </button>
                </div>
                <div className="lg:hidden">
                    <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
                </div>
                {isMenuOpen && (
                    <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
                        <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="px-5 pb-6 pt-5">
                                <div className="flex items-center justify-between">
                                    <div className="inline-flex items-center space-x-2">
                                        <span>
                                            <svg
                                                width="30"
                                                height="30"
                                                viewBox="0 0 50 56"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                                                    fill="black"
                                                />
                                            </svg>
                                        </span>
                                        <span className="font-bold">DevUI</span>
                                    </div>
                                    <div className="-mr-2">
                                        <button
                                            type="button"
                                            onClick={toggleMenu}
                                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                        >
                                            <span className="sr-only">Close menu</span>
                                            <X className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <nav className="grid gap-y-4">
                                        {menuItems.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                                            >
                                                <span className="ml-3 text-base font-medium text-gray-900">
                                                    {item.name}
                                                </span>
                                            </a>
                                        ))}
                                    </nav>
                                </div>
                                <button
                                    type="button"
                                    className="mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                >
                                    Button text
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}