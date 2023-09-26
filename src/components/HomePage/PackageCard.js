import React from 'react'

const PackageCard = (props) => {
const { title } = props;
const { points } = props;

return (
    <div className="w-96 h-auto relative rounded-lg mx-auto flex flex-col justify-start items-start gap-5 p-4">
        <div className="w-16 h-16 rounded-full flex justify-center items-center bg-gray-200" style={{ margin: '0 auto' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="83" height="83" viewBox="0 0 83 83" fill="none">
                <g clip-path="url(#clip0_1323_20656)">
                <path d="M54.3281 0.390625H28.3281C12.8641 0.390625 0.328125 12.9266 0.328125 28.3906V54.3906C0.328125 69.8546 12.8641 82.3906 28.3281 82.3906H54.3281C69.7921 82.3906 82.3281 69.8546 82.3281 54.3906V28.3906C82.3281 12.9266 69.7921 0.390625 54.3281 0.390625Z" fill="#ECFDF3"/>
                <path d="M40.1942 60.3906C39.6526 60.3915 39.1283 60.2 38.7149 59.8501C38.3015 59.5003 38.0258 59.0149 37.9372 58.4806L37.5041 55.8806C36.6611 55.6206 35.8442 55.2866 35.0612 54.8806L32.8891 56.4256C32.4501 56.7406 31.9131 56.8887 31.3746 56.8434C30.8362 56.7981 30.3315 56.5624 29.9511 56.1786L27.6511 53.8786C27.267 53.497 27.0312 52.9912 26.9859 52.4516C26.9406 51.912 27.0889 51.3739 27.4041 50.9336L28.9271 48.8156C28.495 48.0137 28.1407 47.1722 27.8691 46.3026L25.2411 45.8556C24.7051 45.7672 24.218 45.4906 23.8674 45.0755C23.5169 44.6604 23.3257 44.134 23.3281 43.5906V40.3376C23.327 39.796 23.5185 39.2716 23.8684 38.8582C24.2183 38.4447 24.7038 38.1691 25.2381 38.0806L27.8041 37.6476C28.0661 36.7746 28.4101 35.9276 28.8321 35.1196L27.2871 32.9476C26.9733 32.5069 26.8258 31.9691 26.8711 31.4299C26.9163 30.8907 27.1512 30.385 27.5341 30.0026L29.8451 27.7026C30.2272 27.3192 30.7329 27.0839 31.2723 27.0386C31.8117 26.9934 32.3496 27.1412 32.7902 27.4556L34.9162 28.9866C35.7175 28.5538 36.5587 28.1991 37.4281 27.9276L37.8761 25.2996C37.9649 24.7664 38.2399 24.2819 38.6523 23.9324C39.0646 23.5828 39.5876 23.3909 40.1281 23.3906H43.3822C43.9235 23.3899 44.4476 23.5814 44.8609 23.931C45.2743 24.2806 45.5501 24.7656 45.6392 25.2996L46.0711 27.8656C46.9751 28.1376 47.8511 28.4976 48.6841 28.9406L50.8332 27.4106C51.2719 27.0954 51.8087 26.9471 52.347 26.9922C52.8853 27.0373 53.3899 27.2729 53.7702 27.6566L56.0701 29.9566C56.4546 30.3383 56.6906 30.8444 56.7358 31.3842C56.7811 31.924 56.6327 32.4623 56.3171 32.9026L54.7871 35.0436C55.2121 35.8496 55.5611 36.6926 55.8301 37.5636L58.4301 38.0036C58.9639 38.0901 59.4487 38.3655 59.7964 38.7796C60.1441 39.1938 60.3314 39.719 60.3241 40.2596V43.5136C60.3251 44.0551 60.1337 44.5792 59.784 44.9926C59.4344 45.406 58.9492 45.6817 58.4151 45.7706L55.8151 46.2036C55.5471 47.0736 55.1982 47.9176 54.7722 48.7236L56.3021 50.8716C56.616 51.3124 56.7635 51.8502 56.7182 52.3894C56.673 52.9286 56.4381 53.4343 56.0551 53.8166L53.7551 56.1166C53.3731 56.5001 52.8674 56.7354 52.328 56.7806C51.7886 56.8259 51.2507 56.6781 50.8101 56.3636L48.6691 54.8336C47.8631 55.2586 47.0191 55.6076 46.1491 55.8766L45.7092 58.4766C45.6205 59.0109 45.3448 59.4963 44.9314 59.8461C44.518 60.196 43.9937 60.3875 43.4522 60.3866L40.1942 60.3906ZM35.5262 52.7696C36.5198 53.3423 37.5856 53.7795 38.6951 54.0696C38.8898 54.1195 39.0658 54.2249 39.2016 54.3729C39.3374 54.521 39.4273 54.7054 39.4601 54.9036L40.0012 58.1506C40.0086 58.1981 40.0329 58.2414 40.0697 58.2724C40.1064 58.3034 40.1531 58.3202 40.2012 58.3196H43.4551C43.5032 58.3202 43.5499 58.3034 43.5866 58.2724C43.6234 58.2414 43.6477 58.1981 43.6551 58.1506L44.2041 54.9036C44.2358 54.7049 44.3252 54.5199 44.4613 54.3716C44.5973 54.2233 44.7739 54.1183 44.9691 54.0696C46.1073 53.7775 47.1979 53.3246 48.2082 52.7246C48.3819 52.6221 48.5815 52.572 48.7831 52.5803C48.9846 52.5886 49.1795 52.6551 49.3441 52.7716L52.0262 54.6806C52.0536 54.702 52.0863 54.7155 52.1208 54.7198C52.1553 54.724 52.1904 54.7188 52.2222 54.7046C52.2474 54.694 52.2702 54.6784 52.2891 54.6586L54.5892 52.3586C54.6225 52.324 54.643 52.2791 54.6471 52.2312C54.6513 52.1833 54.639 52.1355 54.6122 52.0956L52.7031 49.4056C52.5865 49.2412 52.5201 49.0464 52.5119 48.8449C52.5037 48.6435 52.5542 48.444 52.6571 48.2706C53.2571 47.2606 53.7101 46.1706 54.0021 45.0316C54.0524 44.8369 54.158 44.6609 54.3062 44.5249C54.4544 44.389 54.6388 44.2989 54.8371 44.2656L58.0831 43.7246C58.1308 43.7174 58.1743 43.6932 58.2055 43.6564C58.2368 43.6197 58.2537 43.5729 58.2531 43.5246H58.2601V40.2706C58.2609 40.2223 58.2441 40.1754 58.2128 40.1386C58.1815 40.1018 58.1379 40.0777 58.0901 40.0706L54.8441 39.5216C54.6453 39.4903 54.4601 39.401 54.3117 39.265C54.1634 39.1289 54.0585 38.9521 54.0101 38.7566C53.7175 37.619 53.2646 36.5288 52.6652 35.5186C52.5624 35.3448 52.5122 35.1449 52.5205 34.9432C52.5288 34.7414 52.5954 34.5464 52.7121 34.3816L54.6211 31.7016C54.6485 31.6616 54.6611 31.6133 54.657 31.565C54.6528 31.5167 54.632 31.4714 54.5982 31.4366L52.2982 29.1366C52.2592 29.0974 52.2064 29.0752 52.1512 29.0746C52.1096 29.0772 52.0695 29.091 52.0352 29.1146L49.3682 31.0306C49.2036 31.1475 49.0088 31.2142 48.8071 31.2225C48.6055 31.2309 48.4058 31.1805 48.2321 31.0776C47.1978 30.4675 46.081 30.0095 44.9162 29.7176C44.7195 29.6671 44.5417 29.5605 44.4045 29.4109C44.2673 29.2612 44.1765 29.0749 44.1431 28.8746L43.6021 25.6516C43.5949 25.6039 43.5707 25.5605 43.5339 25.5292C43.4972 25.498 43.4504 25.4811 43.4022 25.4816H40.1481C40.0999 25.4811 40.0531 25.498 40.0164 25.5292C39.9796 25.5605 39.9554 25.6039 39.9481 25.6516L39.3921 28.9216C39.3564 29.1188 39.2654 29.3019 39.1298 29.4495C38.9943 29.5971 38.8196 29.7033 38.6261 29.7556C37.4898 30.052 36.4019 30.5104 35.3961 31.1166C35.221 31.2193 35.0201 31.2694 34.8173 31.2611C34.6144 31.2527 34.4183 31.1863 34.2521 31.0696L31.5851 29.1696C31.546 29.1409 31.4977 29.1273 31.4493 29.1316C31.4009 29.1358 31.3557 29.1575 31.3221 29.1926L29.0221 31.4926C28.9889 31.5275 28.9686 31.5727 28.9646 31.6207C28.9606 31.6688 28.9731 31.7167 29.0001 31.7566L30.9241 34.4566C31.0418 34.6194 31.1096 34.8129 31.1192 35.0136C31.1288 35.2142 31.0798 35.4134 30.9781 35.5866C30.3855 36.6002 29.9406 37.6932 29.6571 38.8326C29.6068 39.0293 29.5003 39.207 29.3506 39.3441C29.2009 39.4812 29.0145 39.5717 28.8141 39.6046L25.5911 40.1446C25.5433 40.1519 25.4997 40.1763 25.4684 40.2132C25.4372 40.2502 25.4204 40.2972 25.4211 40.3456V43.5986C25.4206 43.6469 25.4375 43.6937 25.4687 43.7304C25.5 43.7672 25.5435 43.7914 25.5911 43.7986L28.8611 44.3546C29.0585 44.3902 29.2418 44.4811 29.3896 44.6167C29.5374 44.7523 29.6437 44.927 29.6961 45.1206C29.9922 46.257 30.4502 47.3448 31.0561 48.3506C31.159 48.5258 31.2094 48.7269 31.2012 48.9299C31.1931 49.1329 31.1267 49.3293 31.0101 49.4956L29.1101 52.1616C29.0831 52.2014 29.0707 52.2493 29.0749 52.2972C29.0791 52.3451 29.0996 52.3901 29.1331 52.4246L31.4331 54.7246C31.4721 54.7636 31.525 54.7856 31.5801 54.7856C31.6215 54.7834 31.6615 54.7703 31.6961 54.7476L34.4012 52.8226C34.5762 52.6956 34.7861 52.6286 35.0011 52.6296C35.1861 52.6296 35.3671 52.6776 35.5281 52.7686H35.5262V52.7696ZM33.8481 41.8866C33.8487 39.7691 34.6904 37.7386 36.188 36.2417C37.6857 34.7448 39.7167 33.9041 41.8342 33.9046C43.9516 33.9052 45.9822 34.7468 47.4791 36.2445C48.976 37.7422 49.8167 39.7731 49.8161 41.8906C49.8155 44.0081 48.9737 46.0386 47.4759 47.5354C45.9782 49.0323 43.9471 49.8728 41.8296 49.8721C39.7122 49.8715 37.6817 49.0297 36.1848 47.5319C34.688 46.0341 33.8475 44.0041 33.8481 41.8866ZM35.9351 41.8866C35.935 42.6614 36.0875 43.4287 36.3839 44.1445C36.6803 44.8604 37.1147 45.5109 37.6625 46.0589C38.2103 46.6068 38.8606 47.0415 39.5764 47.3381C40.2922 47.6348 41.0594 47.7875 41.8342 47.7876C42.6089 47.7878 43.3762 47.6353 44.0921 47.3389C44.8079 47.0425 45.4584 46.608 46.0064 46.0603C46.5543 45.5125 46.989 44.8622 47.2857 44.1464C47.5823 43.4306 47.735 42.6634 47.7352 41.8886C47.7355 40.3239 47.1143 38.823 46.0081 37.7163C44.902 36.6095 43.4014 35.9875 41.8366 35.9871C40.2719 35.9867 38.771 36.608 37.6643 37.7141C36.5575 38.8203 35.9355 40.3218 35.9351 41.8866Z" fill="#12B76A"/>
                </g>
                <defs>
                <clipPath id="clip0_1323_20656">
                    <path d="M0.328125 8.39063C0.328125 3.97235 3.90985 0.390625 8.32812 0.390625H74.3281C78.7464 0.390625 82.3281 3.97235 82.3281 8.39062V74.3906C82.3281 78.8089 78.7464 82.3906 74.3281 82.3906H8.32813C3.90985 82.3906 0.328125 78.8089 0.328125 74.3906V8.39063Z" fill="white"/>
                </clipPath>
                </defs>
            </svg>
        </div>
        <p className="w-full text-gray-700 text-xl font-bold font-sans leading-7 text-center">{title}</p>
        <p className="w-full text-slate-500 text-base font-normal font-sans leading-loose text-center">
        <ul>
        {points.map(point => (
            <li>{point}</li>
            ))}
        </ul>
        </p>
  </div>
  )
}

export default PackageCard