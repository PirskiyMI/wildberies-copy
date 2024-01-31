import { FC } from 'react';
import { TIcon } from '../../lib';

export type Props = {
   icon: TIcon;
   className?: string;
};

export const Icon: FC<Props> = ({ icon, className }) => {
   if (icon === 'burger') {
      return (
         <svg xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M0 2C0 0.895431 0.895431 0 2 0H26C27.1046 0 28 0.895431 28 2C28 3.10457 27.1046 4 26 4H2C0.895431 4 0 3.10457 0 2Z" />
            <path d="M0 12C0 10.8954 0.895431 10 2 10H26C27.1046 10 28 10.8954 28 12C28 13.1046 27.1046 14 26 14H2C0.895431 14 0 13.1046 0 12Z" />
            <path d="M0 22C0 20.8954 0.895431 20 2 20H26C27.1046 20 28 20.8954 28 22C28 23.1046 27.1046 24 26 24H2C0.895431 24 0 23.1046 0 22Z" />
         </svg>
      );
   } else if (icon === 'arrow') {
      return (
         <svg viewBox="0 0 16 10" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M15.3417 8.91208C14.966 9.29821 14.3477 9.30437 13.9644 8.92579L8.14183 3.17475C8.06342 3.0973 7.93715 3.09788 7.85945 3.17603L2.15281 8.91591C1.76725 9.30371 1.14293 9.3137 0.745162 8.93845C0.335488 8.55196 0.321627 7.90488 0.714373 7.5012L7.28326 0.749487C7.67588 0.345934 8.32412 0.345934 8.71674 0.749487L15.3417 7.55884C15.7082 7.93549 15.7082 8.53542 15.3417 8.91208Z" />
         </svg>
      );
   } else if (icon === 'cart') {
      return (
         <svg className={className} viewBox="0 0 27 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.2214 15.4665C10.3829 15.9206 10.8452 16.1949 11.3212 16.119L24.0874 14.0828C24.5004 14.017 24.8288 13.701 24.9106 13.2909L26.2654 6.49865C26.3875 5.88644 25.925 5.31324 25.3008 5.30317L7.94122 5.02324C7.24354 5.01199 6.74913 5.70067 6.98289 6.35812L10.2214 15.4665Z" />
            <path d="M10.8262 23.3593C12.1109 23.3593 13.1523 22.3178 13.1523 21.0331C13.1523 19.7484 12.1109 18.707 10.8262 18.707C9.54146 18.707 8.5 19.7484 8.5 21.0331C8.5 22.3178 9.54146 23.3593 10.8262 23.3593Z" />
            <path d="M22.457 23.3593C23.7417 23.3593 24.7831 22.3178 24.7831 21.0331C24.7831 19.7484 23.7417 18.707 22.457 18.707C21.1723 18.707 20.1308 19.7484 20.1308 21.0331C20.1308 22.3178 21.1723 23.3593 22.457 23.3593Z" />
            <path d="M4 2C5.933 2 7.5 1.77614 7.5 1.5C7.5 1.22386 5.933 1 4 1C2.067 1 0.5 1.22386 0.5 1.5C0.5 1.77614 2.067 2 4 2Z" />
            <path d="M1.45442 0.651472C2.1177 0.556717 3.01745 0.5 4 0.5C4.98255 0.5 5.8823 0.556717 6.54558 0.651472C6.87345 0.69831 7.16489 0.757343 7.38495 0.831667C7.4917 0.867722 7.61185 0.917169 7.71511 0.989256C7.80017 1.04864 8 1.21275 8 1.5C8 1.78725 7.80017 1.95136 7.71511 2.01074C7.61185 2.08283 7.4917 2.13228 7.38495 2.16833C7.16489 2.24266 6.87345 2.30169 6.54558 2.34853C5.8823 2.44328 4.98255 2.5 4 2.5C3.01745 2.5 2.1177 2.44328 1.45442 2.34853C1.12655 2.30169 0.835108 2.24266 0.615051 2.16833C0.508302 2.13228 0.388151 2.08283 0.284892 2.01074C0.199835 1.95136 0 1.78725 0 1.5C0 1.21275 0.199835 1.04864 0.284892 0.989256C0.388151 0.917169 0.508302 0.867722 0.615051 0.831667C0.835108 0.757343 1.12655 0.69831 1.45442 0.651472Z" />
         </svg>
      );
   } else if (icon === 'checked') {
      return (
         <svg viewBox="0 0 28 29" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_2_3453)">
               <path
                  d="M4 10.9998C4 16.5226 8.47715 20.9998 14 20.9998C19.5228 20.9998 24 16.5226 24 10.9998C24 5.47691 19.5228 0.999756 14 0.999756C8.47715 0.999756 4 5.47691 4 10.9998ZM22.1818 10.9997C22.1818 15.5184 18.5187 19.1816 14 19.1816C9.48128 19.1816 5.81815 15.5184 5.81815 10.9997C5.81815 6.48103 9.48128 2.81791 14 2.81791C18.5187 2.81791 22.1818 6.48103 22.1818 10.9997Z"
                  fill="url(#paint0_linear_2_3453)"
               />
               <path
                  d="M9.98273 9.6548C10.4021 9.29538 11.0334 9.34394 11.3928 9.76327L13.6286 12.3717L17.6826 7.58061C18.0394 7.15901 18.6704 7.10643 19.092 7.46317C19.5136 7.81991 19.5662 8.45089 19.2094 8.8725L14.7761 14.1118C14.1795 14.817 13.0933 14.8204 12.4922 14.1191L9.87427 11.0648C9.51485 10.6455 9.56341 10.0142 9.98273 9.6548Z"
                  fill="url(#paint1_linear_2_3453)"
               />
            </g>
            <defs>
               <filter
                  id="filter0_d_2_3453"
                  x="-1"
                  y="0"
                  width="30"
                  height="30"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                     in="SourceAlpha"
                     type="matrix"
                     values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                     result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                     type="matrix"
                     values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                     mode="normal"
                     in2="BackgroundImageFix"
                     result="effect1_dropShadow_2_3453"
                  />
                  <feBlend
                     mode="normal"
                     in="SourceGraphic"
                     in2="effect1_dropShadow_2_3453"
                     result="shape"
                  />
               </filter>
               <linearGradient
                  id="paint0_linear_2_3453"
                  x1="7"
                  y1="1.99994"
                  x2="14"
                  y2="20.9998"
                  gradientUnits="userSpaceOnUse">
                  <stop stop-color="#0CD38B" />
                  <stop offset="1" stop-color="#0CB477" />
               </linearGradient>
               <linearGradient
                  id="paint1_linear_2_3453"
                  x1="12"
                  y1="7.5"
                  x2="13.5089"
                  y2="15.8594"
                  gradientUnits="userSpaceOnUse">
                  <stop stop-color="#0CD38B" />
                  <stop offset="1" stop-color="#0CB477" />
               </linearGradient>
            </defs>
         </svg>
      );
   } else if (icon === 'like') {
      return (
         <svg className={className} viewBox="0 0 20 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.03396 2.05857C2.26589 2.75224 1.76684 3.83284 1.99493 5.42928C2.22332 7.02783 3.26494 8.68522 4.80436 10.3478C6.25865 11.9184 8.10962 13.4437 9.99996 14.874C11.8903 13.4437 13.7413 11.9184 15.1956 10.3478C16.735 8.68521 17.7766 7.02783 18.005 5.4293C18.233 3.83285 17.734 2.75224 16.9659 2.05856C16.1766 1.34572 15.055 1 14 1C12.1319 1 11.0923 2.08479 10.5177 2.68443C10.4581 2.7466 10.4035 2.80356 10.3535 2.85355C10.1582 3.04882 9.84166 3.04882 9.6464 2.85355C9.59641 2.80356 9.54182 2.7466 9.48224 2.68443C8.90757 2.08479 7.86797 1 5.99995 1C4.94495 1 3.82325 1.34573 3.03396 2.05857ZM2.36371 1.31643C3.37369 0.404274 4.75202 0 5.99995 0C8.07123 0 9.34539 1.11257 9.99996 1.77862C10.6545 1.11257 11.9287 0 14 0C15.2479 0 16.6262 0.404275 17.6362 1.31644C18.6674 2.24776 19.2668 3.66715 18.9949 5.5707C18.7233 7.47217 17.5149 9.31479 15.9294 11.0272C14.3355 12.7486 12.3064 14.3952 10.3 15.9C10.1222 16.0333 9.87773 16.0333 9.69995 15.9C7.69353 14.3952 5.66443 12.7485 4.0706 11.0272C2.48503 9.31478 1.27665 7.47217 1.00498 5.57072C0.733012 3.66716 1.33249 2.24776 2.36371 1.31643Z" />
         </svg>
      );
   } else if (icon === 'like-fill') {
      return (
         <svg className={className} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
               <path d="M8.5,1C7.5206299,1,6.6352539,1.4022217,6,2.0504761C5.3648071,1.4022827,4.4793701,1,3.5,1 C1.5670166,1,0,2.5670166,0,4.5S2,8,6,11c4-3,6-4.5670166,6-6.5S10.4329834,1,8.5,1z"></path>
            </g>
         </svg>
      );
   } else if (icon === 'loop') {
      return (
         <svg className={className} viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.93382 1.70286C5.44752 1.70286 2.62132 4.52907 2.62132 8.01536C2.62132 11.5017 5.44752 14.3279 8.93382 14.3279C12.4201 14.3279 15.2463 11.5017 15.2463 8.01536C15.2463 4.52907 12.4201 1.70286 8.93382 1.70286ZM0.937988 8.01536C0.937988 3.59939 4.51784 0.0195312 8.93382 0.0195312C13.3498 0.0195313 16.9296 3.59939 16.9296 8.01536C16.9296 12.4313 13.3498 16.0112 8.93382 16.0112C4.51784 16.0112 0.937988 12.4313 0.937988 8.01536Z" />
            <path d="M12.9602 12.8988C13.2846 12.5659 13.8175 12.559 14.1504 12.8834L20.1959 18.7751C20.5288 19.0995 20.5357 19.6324 20.2112 19.9653C19.8868 20.2982 19.3539 20.3051 19.021 19.9806L12.9756 14.089C12.6427 13.7645 12.6358 13.2317 12.9602 12.8988Z" />
         </svg>
      );
   } else if (icon === 'pen') {
      return (
         <svg className={className} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.1585 1.05991L14.9401 4.84154L4.72705 15.0546L0.735435 15.8529C0.385575 15.9229 0.0771149 15.6144 0.147087 15.2646L0.94541 11.273L11.1585 1.05991ZM2.17707 11.9321L11.1585 2.95072L13.0493 4.84154L4.06789 13.8229L1.70436 14.2956L2.17707 11.9321Z" />
            <path d="M13.9948 5.78715L10.2132 2.00552L11.6313 0.587402C12.4145 -0.195801 13.6843 -0.195801 14.4675 0.587402L15.4129 1.53281C16.1961 2.31601 16.1961 3.58584 15.4129 4.36904L13.9948 5.78715ZM14.4675 3.42363C14.7286 3.16256 14.7286 2.73929 14.4675 2.47822L13.5221 1.53281C13.261 1.27174 12.8378 1.27174 12.5767 1.53281L12.104 2.00552L13.9948 3.89634L14.4675 3.42363Z" />
         </svg>
      );
   } else if (icon === 'trash') {
      return (
         <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.5 5C2.5 4.72386 2.72386 4.5 3 4.5H17C17.2761 4.5 17.5 4.72386 17.5 5C17.5 5.27614 17.2761 5.5 17 5.5H3C2.72386 5.5 2.5 5.27614 2.5 5Z" />
            <path d="M3.4584 4.5H16.5059L15.6411 15.6926C15.5405 16.9947 14.4546 18 13.1486 18H6.84639C5.54299 18 4.45829 16.9986 4.35435 15.6994L3.4584 4.5ZM4.5416 5.5L5.35117 15.6196C5.41353 16.3992 6.06435 17 6.84639 17H13.1486C13.9322 17 14.5837 16.3968 14.6441 15.6155L15.4256 5.5H4.5416Z" />
            <path d="M13 5.5H7V3.46875C7 2.65758 7.65758 2 8.46875 2H11.5312C12.3424 2 13 2.65758 13 3.46875V5.5ZM8.46875 3C8.20987 3 8 3.20987 8 3.46875V4.5H12V3.46875C12 3.20987 11.7901 3 11.5312 3H8.46875Z" />
         </svg>
      );
   } else if (icon === 'user') {
      return (
         <svg className={className} xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5207 5.28873C14.5207 8.05869 12.4361 10.2066 10.006 10.2066C7.57586 10.2066 5.49117 8.05869 5.49117 5.31221C5.47931 2.60094 7.58777 0.5 10.006 0.5C12.4241 0.5 14.5207 2.55399 14.5207 5.28873ZM0.5 18.9977C0.5 19.9836 1.14326 20.5 2.94201 20.5H17.058C18.8567 20.5 19.5 19.9836 19.5 18.9977C19.5 16.1338 15.8429 12.1901 10.006 12.1901C4.15705 12.1901 0.5 16.1338 0.5 18.9977Z" />
         </svg>
      );
   } else if (icon === 'cross') {
      return (
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94.926 94.926" className={className}>
            <g>
               <path
                  d="M55.931,47.463L94.306,9.09c0.826-0.827,0.826-2.167,0-2.994L88.833,0.62C88.436,0.224,87.896,0,87.335,0
		c-0.562,0-1.101,0.224-1.498,0.62L47.463,38.994L9.089,0.62c-0.795-0.795-2.202-0.794-2.995,0L0.622,6.096
		c-0.827,0.827-0.827,2.167,0,2.994l38.374,38.373L0.622,85.836c-0.827,0.827-0.827,2.167,0,2.994l5.473,5.476
		c0.397,0.396,0.936,0.62,1.498,0.62s1.1-0.224,1.497-0.62l38.374-38.374l38.374,38.374c0.397,0.396,0.937,0.62,1.498,0.62
		s1.101-0.224,1.498-0.62l5.473-5.476c0.826-0.827,0.826-2.167,0-2.994L55.931,47.463z"
               />
            </g>
         </svg>
      );
   } else if (icon === 'checkMark') {
      return (
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" className={className}>
            <path d="M 22.566406 4.730469 L 20.773438 3.511719 C 20.277344 3.175781 19.597656 3.304688 19.265625 3.796875 L 10.476563 16.757813 L 6.4375 12.71875 C 6.015625 12.296875 5.328125 12.296875 4.90625 12.71875 L 3.371094 14.253906 C 2.949219 14.675781 2.949219 15.363281 3.371094 15.789063 L 9.582031 22 C 9.929688 22.347656 10.476563 22.613281 10.96875 22.613281 C 11.460938 22.613281 11.957031 22.304688 12.277344 21.839844 L 22.855469 6.234375 C 23.191406 5.742188 23.0625 5.066406 22.566406 4.730469 Z"></path>
         </svg>
      );
   } else if (icon === 'rating') {
      return (
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.94 47.94" className={className}>
            <path
               d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
     c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
     c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
     c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
     c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
     C22.602,0.567,25.338,0.567,26.285,2.486z"
            />
         </svg>
      );
   } else if (icon === 'user-male') {
      return (
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 32" className={className}>
            <g>
               <path
                  d="M0.59,32c0.276,0,0.5-0.224,0.5-0.5c0-3.991,2.092-4.601,4.74-5.372l0.48-0.141
        c2.74-0.815,4.771-3.132,5.754-4.987h0.793c0.276,0,0.5-0.224,0.5-0.5c0-2.871-1.857-5.279-1.936-5.38
        c-0.113-0.144-0.307-0.214-0.485-0.184c-0.113,0.02-0.686,0.058-0.991-0.904c-0.05-0.159-0.116-0.344-0.187-0.545
        C9.515,12.799,8.946,11.189,9.418,11c0.235-0.094,0.363-0.35,0.297-0.594c-0.208-0.771-0.648-4.428,1.193-6.931
        C12.046,1.928,13.857,1.096,16.277,1c0.054,0.007,5.548-0.001,5.594,3.122c0.003,0.193,0.116,0.367,0.291,0.447
        c0.026,0.012,2.604,1.254,0.962,5.406c-0.057,0.145-0.044,0.308,0.036,0.441c0.553,0.922,0.045,2.595-0.211,3.2
        c-0.067,0.198-0.335,0.8-0.684,0.97c-0.102,0.049-0.197,0.053-0.311,0.013c-0.181-0.065-0.383-0.018-0.519,0.118
        c-2.478,2.478-1.831,5.747-1.802,5.885C19.682,20.834,19.887,21,20.124,21h1.27c1.286,2.479,3.341,4.334,5.546,4.99l0.376,0.111
        c2.567,0.754,4.594,1.35,4.594,5.398c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5c0-4.797-2.701-5.591-5.312-6.358l-0.373-0.11
        c-3-0.893-4.642-3.862-5.073-4.75C22.068,20.109,21.893,20,21.702,20h-1.14c-0.07-0.826-0.052-2.782,1.397-4.381
        c0.253,0.028,0.511-0.018,0.75-0.136c0.785-0.386,1.151-1.433,1.175-1.511c0.042-0.098,0.971-2.297,0.254-3.846
        c1.488-4.002-0.513-5.79-1.281-6.302c-0.338-3.833-6.323-3.823-6.604-3.823c-2.754,0.108-4.823,1.077-6.15,2.881
        C8.218,5.444,8.428,8.948,8.67,10.297c-0.841,0.733-0.256,2.387,0.146,3.523c0.067,0.19,0.129,0.364,0.177,0.514
        c0.389,1.226,1.211,1.578,1.789,1.607c0.384,0.559,1.394,2.187,1.555,4.059h-0.578c-0.191,0-0.366,0.109-0.45,0.282
        c-0.832,1.712-2.714,3.982-5.283,4.747L5.55,25.168c-2.559,0.746-5.46,1.59-5.46,6.332C0.09,31.776,0.314,32,0.59,32z"
               />
            </g>
         </svg>
      );
   } else if (icon === 'user-female') {
      return (
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 32" className={className}>
            <g>
               <path
                  d="M0.691,32.034c0.276,0,0.5-0.224,0.5-0.5c0-4.155,2.088-4.774,4.733-5.559l0.219-0.065
        c2.586-0.77,4.569-2.511,5.618-4.922L12.995,21c0.15-0.001,0.262-0.051,0.356-0.145c0.095-0.094,0.148-0.222,0.148-0.355v-0.469
        c0-0.907-0.049-1.785-0.646-2.551c-0.644-0.826-0.799-1.929-0.801-1.94c-0.034-0.248-0.245-0.434-0.495-0.434c0,0,0,0,0,0
        c-0.25,0-0.462,0.184-0.496,0.432c-0.064,0.472-0.074,1.054-0.064,1.565c-0.979-1.076-2.449-3.282-2.449-6.826
        c0-4.185,3.044-9.035,7.118-9.262c3.748-0.202,4.454,1.65,4.479,1.723c0.057,0.179,0.211,0.311,0.397,0.341
        c0.191,0.032,4.696,0.843,4.696,7.053c0,3.087-0.875,5.268-2.738,6.77c0.027-0.367,0.037-0.785,0.001-1.2
        c-0.02-0.227-0.189-0.411-0.414-0.449c-0.225-0.039-0.446,0.079-0.54,0.287c-0.005,0.012-0.575,1.262-1.249,2.153
        c-0.523,0.692-0.8,1.517-0.8,2.386v0.42c0,0.276,0.224,0.5,0.5,0.5h1.277c1.08,2.44,2.942,4.069,5.54,4.842l0.189,0.057
        c2.691,0.799,4.816,1.43,4.816,5.601c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5c0-4.917-2.812-5.752-5.532-6.56l-0.189-0.056
        c-2.4-0.715-4.093-2.253-5.03-4.572C21.995,20.124,21.812,20,21.608,20h-1.107c0.016-0.62,0.222-1.208,0.597-1.704
        c0.088-0.116,0.173-0.237,0.256-0.359c-0.008,0.168,0.069,0.332,0.209,0.432c0.163,0.117,0.378,0.125,0.549,0.021
        c2.777-1.675,4.127-4.376,4.127-8.257c0-6.163-4.146-7.681-5.264-7.978c-0.361-0.682-1.632-2.351-5.364-2.137
        c-4.751,0.264-8.062,5.619-8.062,10.26c0,4.557,2.336,7.442,3.717,8.429c0.158,0.113,0.369,0.125,0.538,0.028
        c0.169-0.097,0.267-0.283,0.25-0.477c0-0.003-0.006-0.074-0.014-0.193c0.008,0.01,0.016,0.021,0.024,0.031
        c0.397,0.509,0.435,1.135,0.436,1.9l-1.066-0.011c-0.19,0.006-0.395,0.125-0.471,0.318c-0.907,2.317-2.672,3.925-5.104,4.65
        L5.64,25.017c-2.678,0.794-5.448,1.616-5.448,6.518C0.191,31.811,0.415,32.034,0.691,32.034z"
               />
            </g>
         </svg>
      );
   } else if (icon === 'ring') {
      return (
         <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M3,14A9,9,0,1,0,14.822,5.46l1.019-1.585a1,1,0,0,0,.031-1.032l-.75-1.333A1,1,0,0,0,14.25,1H9.75a1,1,0,0,0-.872.51l-.75,1.333a1,1,0,0,0,.031,1.032L9.178,5.46A9.011,9.011,0,0,0,3,14Zm8.282-8.966L10.167,3.3l.168-.3h3.33l.168.3L12.718,5.034C12.468,5.011,12.23,5,12,5S11.532,5.011,11.282,5.034ZM12,7a7,7,0,1,1-7,7A7.022,7.022,0,0,1,12,7Z" />
         </svg>
      );
   } else if (icon === 'electronics') {
      return (
         <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 371.486 371.486"
            className={className}>
            <g>
               <g>
                  <g>
                     <path
                        d="M336.704,284.52H34.783c-15.366,0-27.862,12.502-27.862,27.862v31.243c0,15.366,12.496,27.861,27.862,27.861h301.921
				c15.366,0,27.862-12.495,27.862-27.861v-31.243C364.566,297.021,352.07,284.52,336.704,284.52z M216.849,336.269H59.655v-14.934
				h157.194V336.269z M316.312,340.25c-6.581,0-11.932-5.356-11.932-11.932c0-6.605,5.351-11.938,11.932-11.938
				c6.605,0,11.938,5.332,11.938,11.938C328.255,334.894,322.929,340.25,316.312,340.25z"
                     />
                  </g>
                  <g>
                     <path
                        d="M336.704,0H34.783C19.417,0,6.92,12.502,6.92,27.862v220.851c0,15.366,12.496,27.856,27.862,27.856h301.921
				c15.366,0,27.862-12.49,27.862-27.856V27.868C364.566,12.502,352.07,0,336.704,0z M329.252,234.451H36.773V29.853h292.479
				V234.451z"
                     />
                  </g>
               </g>
            </g>
         </svg>
      );
   } else if (icon === 'home') {
      return (
         <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 330.242 330.242"
            className={className}>
            <path
               d="M324.442,129.811l-41.321-33.677V42.275c0-6.065-4.935-11-11-11h-26c-6.065,0-11,4.935-11,11v14.737l-55.213-44.999
         c-3.994-3.254-9.258-5.047-14.822-5.047c-5.542,0-10.781,1.782-14.753,5.019L5.8,129.81c-6.567,5.351-6.173,10.012-5.354,12.314
         c0.817,2.297,3.448,6.151,11.884,6.151h19.791v154.947c0,11.058,8.972,20.053,20,20.053h62.5c10.935,0,19.5-8.809,19.5-20.053
         v-63.541c0-5.446,5.005-10.405,10.5-10.405h42c5.238,0,9.5,4.668,9.5,10.405v63.541c0,10.87,9.388,20.053,20.5,20.053h61.5
         c11.028,0,20-8.996,20-20.053V148.275h19.791c8.436,0,11.066-3.854,11.884-6.151C330.615,139.822,331.009,135.161,324.442,129.811z"
            />
         </svg>
      );
   } else if (icon === 'chat-stroke') {
      return (
         <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M4 3C3.44772 3 3 3.44772 3 4V15C3 15.5523 3.44772 16 4 16H7C7.55228 16 8 16.4477 8 17V19.865L12.3598 16.2318C12.5395 16.082 12.7661 16 13 16H20C20.5523 16 21 15.5523 21 15V4C21 3.44772 20.5523 3 20 3H4ZM1 4C1 2.34315 2.34315 1 4 1H20C21.6569 1 23 2.34315 23 4V15C23 16.6569 21.6569 18 20 18H13.362L7.64018 22.7682C7.3421 23.0166 6.92723 23.0702 6.57584 22.9056C6.22446 22.741 6 22.388 6 22V18H4C2.34315 18 1 16.6569 1 15V4Z" />
         </svg>
      );
   } else if (icon === 'cart-stroke') {
      return (
         <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className={className}>
            <defs></defs>
            <title />
            <path d="M60.53,18.71A2,2,0,0,0,59,18H48.85A15,15,0,0,0,34,5H30A15,15,0,0,0,15.15,18H5a2,2,0,0,0-1.53.71A2,2,0,0,0,3,20.35l5.33,30.3A6.51,6.51,0,0,0,14.77,56H49.23a6.51,6.51,0,0,0,6.41-5.36L61,20.35A2,2,0,0,0,60.53,18.71ZM30,9h4a11,11,0,0,1,10.81,9H19.19A11,11,0,0,1,30,9ZM51.71,49.94A2.52,2.52,0,0,1,49.23,52H14.77a2.5,2.5,0,0,1-2.47-2L7.38,22H56.62Z" />
         </svg>
      );
   } else if (icon === 'home-stroke') {
      return (
         <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M22 22L2 22" strokeWidth="1.5" strokeLinecap="round" />
            <path
               d="M2 11L6.06296 7.74968M22 11L13.8741 4.49931C12.7784 3.62279 11.2216 3.62279 10.1259 4.49931L9.34398 5.12486"
               strokeWidth="1.5"
               strokeLinecap="round"
            />
            <path
               d="M15.5 5.5V3.5C15.5 3.22386 15.7239 3 16 3H18.5C18.7761 3 19 3.22386 19 3.5V8.5"
               strokeWidth="1.5"
               strokeLinecap="round"
            />
            <path d="M4 22V9.5" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M20 9.5V13.5M20 22V17.5" strokeWidth="1.5" strokeLinecap="round" />
            <path
               d="M15 22V17C15 15.5858 15 14.8787 14.5607 14.4393C14.1213 14 13.4142 14 12 14C10.5858 14 9.87868 14 9.43934 14.4393M9 22V17"
               strokeWidth="1.5"
               strokeLinecap="round"
               strokeLinejoin="round"
            />
            <path
               d="M14 9.5C14 10.6046 13.1046 11.5 12 11.5C10.8954 11.5 10 10.6046 10 9.5C10 8.39543 10.8954 7.5 12 7.5C13.1046 7.5 14 8.39543 14 9.5Z"
               strokeWidth="1.5"
            />
         </svg>
      );
   } else if (icon === 'heart-stroke') {
      return (
         <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M8.96173 18.9109L9.42605 18.3219L8.96173 18.9109ZM12 5.50063L11.4596 6.02073C11.601 6.16763 11.7961 6.25063 12 6.25063C12.2039 6.25063 12.399 6.16763 12.5404 6.02073L12 5.50063ZM15.0383 18.9109L15.5026 19.4999L15.0383 18.9109ZM7.00061 16.4209C6.68078 16.1577 6.20813 16.2036 5.94491 16.5234C5.68169 16.8432 5.72758 17.3159 6.04741 17.5791L7.00061 16.4209ZM2.34199 13.4115C2.54074 13.7749 2.99647 13.9084 3.35988 13.7096C3.7233 13.5108 3.85677 13.0551 3.65801 12.6917L2.34199 13.4115ZM2.75 9.1371C2.75 6.98623 3.96537 5.18252 5.62436 4.42419C7.23607 3.68748 9.40166 3.88258 11.4596 6.02073L12.5404 4.98053C10.0985 2.44352 7.26409 2.02539 5.00076 3.05996C2.78471 4.07292 1.25 6.42503 1.25 9.1371H2.75ZM8.49742 19.4999C9.00965 19.9037 9.55954 20.3343 10.1168 20.6599C10.6739 20.9854 11.3096 21.25 12 21.25V19.75C11.6904 19.75 11.3261 19.6293 10.8736 19.3648C10.4213 19.1005 9.95208 18.7366 9.42605 18.3219L8.49742 19.4999ZM15.5026 19.4999C16.9292 18.3752 18.7528 17.0866 20.1833 15.4758C21.6395 13.8361 22.75 11.8026 22.75 9.1371H21.25C21.25 11.3345 20.3508 13.0282 19.0617 14.4798C17.7469 15.9603 16.0896 17.1271 14.574 18.3219L15.5026 19.4999ZM22.75 9.1371C22.75 6.42503 21.2153 4.07292 18.9992 3.05996C16.7359 2.02539 13.9015 2.44352 11.4596 4.98053L12.5404 6.02073C14.5983 3.88258 16.7639 3.68748 18.3756 4.42419C20.0346 5.18252 21.25 6.98623 21.25 9.1371H22.75ZM14.574 18.3219C14.0479 18.7366 13.5787 19.1005 13.1264 19.3648C12.6739 19.6293 12.3096 19.75 12 19.75V21.25C12.6904 21.25 13.3261 20.9854 13.8832 20.6599C14.4405 20.3343 14.9903 19.9037 15.5026 19.4999L14.574 18.3219ZM9.42605 18.3219C8.63014 17.6945 7.82129 17.0963 7.00061 16.4209L6.04741 17.5791C6.87768 18.2624 7.75472 18.9144 8.49742 19.4999L9.42605 18.3219ZM3.65801 12.6917C3.0968 11.6656 2.75 10.5033 2.75 9.1371H1.25C1.25 10.7746 1.66995 12.1827 2.34199 13.4115L3.65801 12.6917Z" />
         </svg>
      );
   } else if (icon === 'travel-stroke') {
      return (
         <svg viewBox="-1 0 19 19" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M16.417 9.579A7.917 7.917 0 1 1 8.5 1.662a7.917 7.917 0 0 1 7.917 7.917zm-3.468-4.393c-.277-.277-1.211.208-1.488.485L9.754 7.379l-.015-.005-4.772-1.297a.678.678 0 0 0-.593.158l-.428.428a.253.253 0 0 0 .06.422L7.18 8.84l.557.557-1.472 1.47a2.47 2.47 0 0 0-.376.56L4.81 11.1a.654.654 0 0 0-.59.148l-.132.131a.355.355 0 0 0 0 .502l.776.776.015.014.587.588.015.015.775.776a.356.356 0 0 0 .502 0l.132-.132a.653.653 0 0 0 .148-.59l-.328-1.08a2.483 2.483 0 0 0 .56-.377L8.74 10.4l.557.556 1.753 3.174a.253.253 0 0 0 .422.06l.428-.428a.678.678 0 0 0 .158-.594l-1.296-4.77-.005-.016 1.707-1.708c.277-.277.762-1.21.485-1.488z" />
         </svg>
      );
   } else if (icon === 'like-stroke') {
      return (
         <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M2,22H18.644a3.036,3.036,0,0,0,3-2.459l1.305-7a2.962,2.962,0,0,0-.637-2.439A3.064,3.064,0,0,0,19.949,9H15.178V5c0-2.061-2.113-3-4.076-3a1,1,0,0,0-1,1c0,1.907-.34,3.91-.724,4.284L6.593,10H2a1,1,0,0,0-1,1V21A1,1,0,0,0,2,22ZM8,11.421l2.774-2.7c.93-.907,1.212-3.112,1.3-4.584.542.129,1.109.38,1.109.868v5a1,1,0,0,0,1,1h5.771a1.067,1.067,0,0,1,.824.38.958.958,0,0,1,.21.8l-1.3,7A1.036,1.036,0,0,1,18.644,20H8ZM3,12H6v8H3Z" />
         </svg>
      );
   } else if (icon === 'user-stroke') {
      return (
         <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
            <circle cx="12" cy="6" r="4" strokeWidth="1.5" />
            <path
               d="M19.9975 18C20 17.8358 20 17.669 20 17.5C20 15.0147 16.4183 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C14.231 22 15.8398 21.8433 17 21.5634"
               strokeWidth="1.5"
               strokeLinecap="round"
            />
         </svg>
      );
   } else if (icon === 'delivery') {
      return (
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className={className}>
            <path
               d="M18.4,3.1l-8-3C10.1,0,9.9,0,9.6,0.1l-8,3C1.3,3.2,1,3.6,1,4s0.3,0.8,0.6,0.9l8,3C9.8,8,9.9,8,10,8s0.2,0,0.4-0.1l8-3
     C18.7,4.8,19,4.4,19,4S18.7,3.2,18.4,3.1z"
            />
            <path
               d="M10,20c-0.1,0-0.2,0-0.4-0.1l-8-3C1.3,16.8,1,16.4,1,16V8c0-0.6,0.4-1,1-1s1,0.4,1,1v7.3l7,2.6l7-2.6V8c0-0.6,0.4-1,1-1
     s1,0.4,1,1v8c0,0.4-0.3,0.8-0.6,0.9l-8,3C10.2,20,10.1,20,10,20z"
            />
         </svg>
      );
   } else if (icon === 'error') {
      return (
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" className={className}>
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
               {' '}
               <g>
                  <path d="M9,39h6v8c0,0.552,0.448,1,1,1s1-0.448,1-1v-8h3c0.552,0,1-0.448,1-1s-0.448-1-1-1h-3v-2c0-0.552-0.448-1-1-1s-1,0.448-1,1 v2h-5V27c0-0.552-0.448-1-1-1s-1,0.448-1,1v11C8,38.552,8.448,39,9,39z"></path>
                  <path d="M40,39h6v8c0,0.552,0.448,1,1,1s1-0.448,1-1v-8h3c0.552,0,1-0.448,1-1s-0.448-1-1-1h-3v-2c0-0.552-0.448-1-1-1 s-1,0.448-1,1v2h-5V27c0-0.552-0.448-1-1-1s-1,0.448-1,1v11C39,38.552,39.448,39,40,39z"></path>
                  <path d="M29.5,48c3.584,0,6.5-2.916,6.5-6.5v-9c0-3.584-2.916-6.5-6.5-6.5S23,28.916,23,32.5v9C23,45.084,25.916,48,29.5,48z M25,32.5c0-2.481,2.019-4.5,4.5-4.5s4.5,2.019,4.5,4.5v9c0,2.481-2.019,4.5-4.5,4.5S25,43.981,25,41.5V32.5z"></path>
                  <path d="M0,0v14v46h60V14V0H0z M2,2h56v10H2V2z M58,58H2V14h56V58z"></path>
                  <polygon points="54.293,3.293 52,5.586 49.707,3.293 48.293,4.707 50.586,7 48.293,9.293 49.707,10.707 52,8.414 54.293,10.707 55.707,9.293 53.414,7 55.707,4.707 "></polygon>
                  <path d="M3,11h39V3H3V11z M5,5h35v4H5V5z"></path>{' '}
               </g>{' '}
            </g>
         </svg>
      );
   } else if (icon === 'card') {
      return (
         <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className={className}>
            <path
               d="M19 21V15M16 18H22M22 10H2M22 12V8.2C22 7.0799 22 6.51984 21.782 6.09202C21.5903 5.7157 21.2843 5.40974 20.908 5.21799C20.4802 5 19.9201 5 18.8 5H5.2C4.0799 5 3.51984 5 3.09202 5.21799C2.7157 5.40973 2.40973 5.71569 2.21799 6.09202C2 6.51984 2 7.0799 2 8.2V15.8C2 16.9201 2 17.4802 2.21799 17.908C2.40973 18.2843 2.71569 18.5903 3.09202 18.782C3.51984 19 4.0799 19 5.2 19H12"
               stroke="#000000"
               strokeWidth="2"
               strokeLinecap="round"
               strokeLinejoin="round"
            />
         </svg>
      );
   }
};
