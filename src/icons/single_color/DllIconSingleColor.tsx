import * as React from "react";
function DllIconSingleColor(props: React.SVGProps<SVGSVGElement>) {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 201 240" width="1em" height="1em" {...props}><g clipPath="url(#a)"><path fill={props.color || "#4690FF"} d="M140.53 49.25C135.06 49.2447 129.816 47.0695 125.948 43.2018C122.081 39.3341 119.905 34.0898 119.9 28.62V0H27.7703C20.6333 0 13.7885 2.83511 8.74194 7.88171C3.69534 12.9283 0.860352 19.7731 0.860352 26.91V189.13C0.860352 196.267 3.69534 203.112 8.74194 208.158C13.7885 213.205 20.6333 216.04 27.7703 216.04H138.37C145.507 216.04 152.352 213.205 157.398 208.158C162.445 203.112 165.28 196.267 165.28 189.13V49.25H140.53Z" opacity={0.3} /><path fill={props.color || "#4690FF"} d="M165.28 49.25H140.53C135.06 49.2447 129.816 47.0695 125.948 43.2018 122.081 39.3341 119.905 34.0898 119.9 28.62V0L165.28 49.25ZM184.8 170.61H59.7603C50.8906 170.61 43.7002 177.8 43.7002 186.67V223.95C43.7002 232.82 50.8906 240.01 59.7603 240.01H184.8C193.67 240.01 200.86 232.82 200.86 223.95V186.67C200.86 177.8 193.67 170.61 184.8 170.61Z" /><path fill="#fff" d="M90.0002 213.38V220.65H82.4702V213.38H90.0002ZM119 213.4C117.751 215.673 115.859 217.527 113.56 218.73 110.979 220.061 108.104 220.721 105.2 220.65H93.8003V190.58H105.15C108.055 190.503 110.934 191.145 113.53 192.45 115.815 193.636 117.7 195.469 118.95 197.72 120.247 200.123 120.901 202.82 120.85 205.55 120.914 208.282 120.277 210.984 119 213.4ZM111.18 211.89C111.993 211.055 112.622 210.06 113.028 208.969 113.435 207.877 113.609 206.713 113.54 205.55 113.609 204.387 113.435 203.223 113.028 202.131 112.622 201.04 111.993 200.045 111.18 199.21 109.355 197.62 106.977 196.812 104.56 196.96H101.12V214.14H104.56C106.96 214.275 109.317 213.468 111.13 211.89H111.18ZM132.24 215.08H141.94V220.65H124.94V190.58H132.21L132.24 215.08ZM152.57 215.08H162.27V220.65H145.27V190.58H152.54L152.57 215.08Z" /><path fill={props.color || "#4690FF"} d="M69.2402 159.4C68.0998 159.4 67.0061 158.947 66.1997 158.141 65.3933 157.334 64.9402 156.24 64.9402 155.1V148.49C64.9402 147.926 65.0516 147.367 65.2678 146.846 65.484 146.325 65.8008 145.852 66.2002 145.453 66.5996 145.055 67.0738 144.739 67.5955 144.524 68.1171 144.309 68.676 144.199 69.2402 144.2 70.378 144.2 71.4692 144.652 72.2737 145.457 73.0782 146.261 73.5303 147.352 73.5303 148.49V155.1C73.5303 156.239 73.0787 157.331 72.2744 158.137 71.4702 158.943 70.3789 159.397 69.2402 159.4ZM69.2402 106.1C68.676 106.101 68.1171 105.991 67.5955 105.776 67.0738 105.561 66.5996 105.245 66.2002 104.847 65.8008 104.448 65.484 103.975 65.2678 103.454 65.0516 102.933 64.9402 102.374 64.9402 101.81V94.1199C64.9402 92.9794 65.3933 91.8858 66.1997 91.0793 67.0061 90.2729 68.0998 89.8198 69.2402 89.8198 70.3789 89.8225 71.4702 90.2768 72.2744 91.0829 73.0787 91.889 73.5303 92.9812 73.5303 94.1199V101.81C73.5303 102.948 73.0782 104.039 72.2737 104.843 71.4692 105.648 70.378 106.1 69.2402 106.1ZM84.4902 155.32C83.7348 155.319 82.9929 155.12 82.3384 154.743 81.6839 154.365 81.1397 153.823 80.7603 153.17L77.5603 147.61C76.991 146.623 76.8365 145.451 77.1309 144.35 77.4252 143.25 78.1442 142.311 79.1301 141.74 80.1182 141.171 81.2916 141.019 82.3923 141.315 83.4931 141.611 84.4311 142.332 85.0003 143.32L88.2102 148.87C88.7787 149.858 88.9315 151.031 88.6353 152.132 88.339 153.233 87.6178 154.171 86.6301 154.74 85.9807 155.119 85.2423 155.319 84.4902 155.32ZM57.9401 109.32C57.1843 109.321 56.4417 109.123 55.7868 108.746 55.132 108.368 54.5881 107.825 54.2102 107.17L50.2802 100.35C49.9972 99.8626 49.8134 99.324 49.7392 98.7652 49.665 98.2064 49.7017 97.6384 49.8476 97.0939 49.9935 96.5494 50.2454 96.0392 50.5891 95.5923 50.9327 95.1455 51.3615 94.7709 51.8503 94.4902 52.3386 94.2069 52.8779 94.0229 53.4375 93.9485 53.997 93.8742 54.5657 93.911 55.111 94.0568 55.6564 94.2027 56.1675 94.4547 56.6152 94.7985 57.0629 95.1423 57.4385 95.5711 57.7202 96.0602L61.6501 102.88C61.9333 103.368 62.1175 103.908 62.1919 104.467 62.2662 105.027 62.2293 105.596 62.0835 106.141 61.9376 106.686 61.6858 107.198 61.342 107.645 60.9982 108.093 60.5694 108.468 60.0803 108.75 59.4295 109.125 58.6912 109.322 57.9401 109.32ZM95.6503 144.15C94.8952 144.148 94.1539 143.948 93.5004 143.57L87.9403 140.36C86.9551 139.791 86.2362 138.854 85.9418 137.755 85.6473 136.656 85.8017 135.485 86.3705 134.5 86.9397 133.512 87.8777 132.791 88.9784 132.495 90.0791 132.199 91.2523 132.352 92.2404 132.92L97.8004 136.13C98.7863 136.701 99.5053 137.64 99.7997 138.74 100.094 139.841 99.9398 141.013 99.3705 142 98.995 142.655 98.453 143.198 97.7997 143.576 97.1464 143.953 96.4048 144.151 95.6503 144.15ZM49.6401 117.6C48.8884 117.596 48.1508 117.396 47.5003 117.02L40.6802 113.09C39.6943 112.519 38.9753 111.58 38.6809 110.48 38.3866 109.379 38.5411 108.207 39.1104 107.22 39.6795 106.232 40.6176 105.511 41.7183 105.215 42.819 104.918 43.9922 105.071 44.9802 105.64L51.8003 109.58C52.7862 110.151 53.5052 111.089 53.7996 112.19 54.0939 113.291 53.9397 114.463 53.3704 115.45 52.9924 116.104 52.4486 116.648 51.7937 117.025 51.1389 117.403 50.396 117.601 49.6401 117.6ZM99.7302 128.91H93.1104C91.9707 128.907 90.8783 128.453 90.0725 127.647 89.2667 126.842 88.8129 125.749 88.8103 124.61 88.813 123.471 89.2671 122.38 90.0732 121.576 90.8794 120.772 91.9717 120.32 93.1104 120.32H99.7302C100.869 120.32 101.961 120.772 102.767 121.576 103.573 122.38 104.028 123.471 104.03 124.61 104.028 125.749 103.574 126.842 102.768 127.647 101.962 128.453 100.87 128.907 99.7302 128.91ZM46.4302 128.91H38.7502C37.6106 128.907 36.5185 128.453 35.7126 127.647 34.9068 126.842 34.4528 125.749 34.4502 124.61 34.4528 123.471 34.907 122.38 35.7131 121.576 36.5193 120.772 37.6115 120.32 38.7502 120.32H46.4302C47.568 120.32 48.6591 120.772 49.4636 121.576 50.2682 122.381 50.7202 123.472 50.7202 124.61 50.7202 125.749 50.2686 126.841 49.4644 127.647 48.6601 128.453 47.5689 128.907 46.4302 128.91ZM89.6204 117.14C88.8645 117.141 88.1217 116.943 87.4668 116.565 86.812 116.188 86.2681 115.644 85.8902 114.99 85.6089 114.501 85.4268 113.962 85.354 113.403 85.2812 112.844 85.3194 112.277 85.4661 111.732 85.6128 111.188 85.8653 110.678 86.2093 110.232 86.5532 109.785 86.9816 109.411 87.4702 109.13L93.4702 105.64C94.4583 105.071 95.6317 104.918 96.7324 105.215 97.8332 105.511 98.7712 106.232 99.3404 107.22 99.9097 108.207 100.064 109.379 99.7696 110.48 99.4752 111.58 98.7562 112.519 97.7703 113.09L91.7703 116.57C91.1171 116.948 90.375 117.145 89.6204 117.14ZM42.8303 144.15C42.0762 144.149 41.3353 143.95 40.6824 143.573 40.0294 143.195 39.4874 142.653 39.1104 142 38.5411 141.013 38.3866 139.841 38.6809 138.74 38.9753 137.64 39.6943 136.701 40.6802 136.13L47.0403 132.46C48.0277 131.893 49.1993 131.74 50.2991 132.035 51.3989 132.329 52.3374 133.046 52.9102 134.03 53.4795 135.017 53.634 136.189 53.3396 137.29 53.0452 138.39 52.3263 139.329 51.3403 139.9L44.9802 143.57C44.3267 143.948 43.5854 144.148 42.8303 144.15Z" /><path fill={props.color || "#4690FF"} d="M69.7703 152.79H69.0803C64.1655 152.684 59.3703 151.253 55.2002 148.65C51.0779 146.094 47.6986 142.501 45.4001 138.23C43.2519 134.208 42.1257 129.72 42.1204 125.16C42.1204 124.92 42.1204 124.7 42.1204 124.47C42.2386 119.771 43.5532 115.18 45.9402 111.13C48.324 107.086 51.6962 103.714 55.7402 101.33C59.8066 98.9412 64.4153 97.6299 69.1301 97.52H69.7603C74.3257 97.5144 78.8209 98.645 82.8403 100.81C87.1081 103.101 90.6982 106.473 93.2502 110.59C95.8592 114.78 97.2894 119.596 97.3901 124.53C97.3901 124.7 97.3901 124.92 97.3901 125.16C97.3911 129.934 96.1543 134.627 93.8003 138.78C91.3394 143.139 87.7368 146.745 83.3801 149.21C79.2287 151.558 74.5399 152.792 69.7703 152.79ZM69.6602 106.1H69.3901C66.1269 106.166 62.9354 107.068 60.1204 108.72C57.3281 110.364 54.9987 112.69 53.3503 115.48C51.7012 118.282 50.7957 121.459 50.7202 124.71C50.7202 124.89 50.7202 125.02 50.7202 125.15C50.7212 128.289 51.4939 131.38 52.9702 134.15C54.5565 137.102 56.8913 139.585 59.7402 141.35C62.6249 143.14 65.9365 144.124 69.3303 144.2H69.7703C73.0614 144.204 76.2969 143.353 79.1602 141.73C82.1669 140.028 84.6529 137.539 86.3503 134.53C87.9714 131.67 88.8224 128.438 88.8203 125.15V124.77C88.7464 121.354 87.7624 118.019 85.9702 115.11C84.2032 112.271 81.7246 109.944 78.7803 108.36C75.9723 106.868 72.8397 106.092 69.6602 106.1Z" /><path fill={props.color || "#4690FF"} d="M80.8003 108.87C80.0493 108.872 79.311 108.675 78.6602 108.3 78.171 108.019 77.7422 107.643 77.3984 107.195 77.0547 106.748 76.8028 106.236 76.657 105.691 76.5111 105.146 76.4742 104.577 76.5486 104.017 76.623 103.458 76.8071 102.919 77.0903 102.43L80.7603 96.0602C81.042 95.5711 81.4175 95.1423 81.8652 94.7985 82.313 94.4547 82.8241 94.2027 83.3694 94.0568 83.9147 93.911 84.4834 93.8742 85.043 93.9485 85.6025 94.0229 86.1418 94.2069 86.6301 94.4902 87.1188 94.771 87.5475 95.1455 87.8914 95.5921 88.2353 96.0386 88.4878 96.5486 88.6345 97.0928 88.7813 97.637 88.8194 98.2048 88.7466 98.7637 88.6738 99.3226 88.4915 99.8617 88.2102 100.35L84.5303 106.72C84.1524 107.375 83.6085 107.918 82.9536 108.296 82.2988 108.673 81.5561 108.871 80.8003 108.87ZM54.0003 155.32C53.2482 155.319 52.5098 155.119 51.8604 154.74 51.3712 154.458 50.9424 154.083 50.5986 153.635 50.2549 153.187 50.0028 152.676 49.8569 152.131 49.7111 151.586 49.6742 151.017 49.7485 150.457 49.8229 149.898 50.0071 149.358 50.2903 148.87L53.7603 142.87C54.042 142.381 54.4175 141.952 54.8652 141.608 55.313 141.265 55.8241 141.012 56.3694 140.867 56.9147 140.721 57.4834 140.684 58.043 140.758 58.6025 140.833 59.1418 141.017 59.6301 141.3 60.6161 141.871 61.3353 142.81 61.6296 143.91 61.924 145.011 61.7695 146.183 61.2002 147.17L57.7302 153.17C57.3523 153.825 56.8087 154.368 56.1538 154.746 55.499 155.123 54.7561 155.321 54.0003 155.32ZM108.84 100.66C108.145 100.66 107.479 100.384 106.988 99.8927 106.496 99.4014 106.22 98.735 106.22 98.0402V94.0402C106.22 93.6966 106.288 93.3564 106.42 93.0391 106.552 92.7218 106.745 92.4336 106.988 92.1911 107.232 91.9486 107.521 91.7566 107.838 91.626 108.156 91.4954 108.497 91.4289 108.84 91.4302 109.533 91.4302 110.196 91.7051 110.686 92.1946 111.175 92.6841 111.45 93.348 111.45 94.0402V98.0402C111.452 98.3838 111.385 98.7242 111.254 99.042 111.124 99.3598 110.932 99.6487 110.689 99.8921 110.447 100.136 110.159 100.329 109.841 100.46 109.524 100.592 109.184 100.66 108.84 100.66ZM108.84 68.2299C108.497 68.2312 108.156 68.1646 107.838 68.0341 107.521 67.9035 107.232 67.7115 106.988 67.469 106.745 67.2265 106.552 66.9383 106.42 66.621 106.288 66.3037 106.22 65.9635 106.22 65.6199V60.9398C106.22 60.245 106.496 59.5786 106.988 59.0873 107.479 58.5959 108.145 58.3198 108.84 58.3198 109.184 58.3198 109.524 58.3877 109.841 58.5195 110.159 58.6513 110.447 58.8445 110.689 59.0879 110.932 59.3313 111.124 59.6202 111.254 59.938 111.385 60.2558 111.452 60.5962 111.45 60.9398V65.6199C111.45 66.3121 111.175 66.976 110.686 67.4655 110.196 67.9549 109.533 68.2299 108.84 68.2299ZM118.12 98.1699C117.661 98.1711 117.21 98.0516 116.811 97.8235 116.413 97.5953 116.082 97.2664 115.85 96.8699L113.9 93.4899C113.559 92.8824 113.472 92.1642 113.659 91.4929 113.847 90.8217 114.293 90.2523 114.9 89.9099 115.2 89.741 115.531 89.6327 115.873 89.5915 116.214 89.5504 116.561 89.577 116.893 89.6699 117.224 89.7628 117.534 89.92 117.805 90.1328 118.075 90.3456 118.302 90.6097 118.47 90.9099L120.47 94.2899C120.639 94.5899 120.747 94.9202 120.789 95.2621 120.83 95.6039 120.803 95.9505 120.71 96.2821 120.617 96.6137 120.46 96.9237 120.247 97.1944 120.035 97.4652 119.77 97.6913 119.47 97.8599 119.057 98.0848 118.59 98.1921 118.12 98.1699ZM102 70.19C101.54 70.1892 101.089 70.0678 100.69 69.8379 100.292 69.6081 99.961 69.2778 99.7302 68.8801L97.3403 64.73C97.1714 64.43 97.0631 64.0996 97.022 63.7577 96.9808 63.4159 97.0075 63.0693 97.1003 62.7377 97.1932 62.4062 97.3505 62.0962 97.5632 61.8255 97.776 61.5548 98.0401 61.3287 98.3403 61.1601 98.64 60.9898 98.9703 60.8806 99.3125 60.8387 99.6546 60.7968 100.002 60.8231 100.334 60.9161 100.666 61.009 100.976 61.1668 101.246 61.3803 101.517 61.5938 101.743 61.8589 101.91 62.1601L104.3 66.3101C104.469 66.6101 104.577 66.9404 104.619 67.2823 104.66 67.6241 104.633 67.9707 104.54 68.3023 104.447 68.6339 104.29 68.9439 104.077 69.2147 103.865 69.4854 103.601 69.7115 103.3 69.8801 102.9 70.0919 102.453 70.1985 102 70.19ZM124.91 91.3799C124.45 91.3822 123.998 91.2613 123.6 91.03L120.22 89.03C119.92 88.8614 119.656 88.6351 119.443 88.3644 119.23 88.0937 119.073 87.7838 118.98 87.4522 118.887 87.1206 118.861 86.774 118.902 86.4322 118.943 86.0903 119.051 85.7599 119.22 85.4599 119.388 85.1587 119.613 84.8937 119.884 84.6802 120.155 84.4667 120.465 84.3088 120.797 84.2159 121.129 84.1229 121.476 84.0966 121.818 84.1385 122.16 84.1804 122.491 84.2896 122.79 84.4599L126.17 86.4599C126.471 86.6275 126.736 86.8532 126.95 87.1238 127.163 87.3944 127.321 87.7046 127.414 88.0366 127.507 88.3685 127.534 88.7155 127.492 89.0577 127.45 89.3998 127.34 89.7303 127.17 90.03 126.948 90.4357 126.621 90.7748 126.224 91.0121 125.826 91.2495 125.373 91.3764 124.91 91.3799ZM96.9202 75.22C96.4601 75.2222 96.008 75.1014 95.6103 74.87L91.4602 72.48C91.16 72.3114 90.8959 72.0853 90.6831 71.8146 90.4703 71.5439 90.3131 71.2338 90.2202 70.9023 90.1273 70.5707 90.1007 70.2241 90.1418 69.8822 90.183 69.5404 90.2912 69.2101 90.4602 68.9101 90.8026 68.303 91.372 67.8567 92.0432 67.6692 92.7145 67.4817 93.4328 67.5684 94.0403 67.9101L98.1802 70.3001C98.7872 70.6425 99.2336 71.2118 99.4211 71.8831 99.6086 72.5543 99.5218 73.2726 99.1802 73.88 98.9556 74.2833 98.6282 74.6197 98.2312 74.8551 97.8342 75.0905 97.3817 75.2164 96.9202 75.22ZM127.39 82.1099H123.39C123.047 82.1099 122.706 82.0421 122.389 81.9103 122.072 81.7785 121.784 81.5854 121.541 81.3419 121.299 81.0985 121.107 80.8095 120.976 80.4917 120.846 80.1739 120.779 79.8335 120.78 79.4899 120.78 78.7977 121.055 78.1338 121.545 77.6443 122.034 77.1548 122.698 76.8799 123.39 76.8799H127.39C127.734 76.8786 128.074 76.9451 128.392 77.0757 128.71 77.2063 128.999 77.3983 129.242 77.6408 129.486 77.8833 129.679 78.1715 129.811 78.4888 129.942 78.8061 130.01 79.1463 130.01 79.4899 130.01 80.1848 129.734 80.8512 129.243 81.3425 128.752 81.8339 128.085 82.1099 127.39 82.1099ZM95.0003 82.1099H90.3203C89.9767 82.1099 89.6364 82.0421 89.3191 81.9103 89.0018 81.7785 88.7137 81.5853 88.4712 81.3419 88.2287 81.0985 88.0366 80.8095 87.906 80.4917 87.7754 80.1739 87.7089 79.8335 87.7102 79.4899 87.7102 79.1471 87.7778 78.8077 87.909 78.4911 88.0401 78.1744 88.2323 77.8866 88.4746 77.6443 88.717 77.4019 89.0049 77.2098 89.3216 77.0786 89.6382 76.9474 89.9776 76.8799 90.3203 76.8799H95.0003C95.6925 76.8799 96.3563 77.1548 96.8457 77.6443 97.3352 78.1338 97.6104 78.7977 97.6104 79.4899 97.6117 79.8335 97.5451 80.1739 97.4146 80.4917 97.284 80.8095 97.0919 81.0985 96.8494 81.3419 96.6069 81.5853 96.3188 81.7785 96.0015 81.9103 95.6842 82.0421 95.3439 82.1099 95.0003 82.1099ZM121.24 75.0001C120.78 74.9993 120.329 74.878 119.93 74.6481 119.532 74.4182 119.201 74.0878 118.97 73.6901 118.801 73.3901 118.693 73.0598 118.652 72.7179 118.611 72.3761 118.637 72.0295 118.73 71.6979 118.823 71.3663 118.98 71.0563 119.193 70.7855 119.406 70.5148 119.67 70.2887 119.97 70.1201L123.64 68.0001C123.94 67.8312 124.271 67.7231 124.613 67.6819 124.954 67.6407 125.301 67.6673 125.633 67.7601 125.964 67.853 126.274 68.0104 126.545 68.2232 126.816 68.4359 127.042 68.6999 127.21 69.0001 127.38 69.2998 127.49 69.6303 127.532 69.9724 127.574 70.3146 127.547 70.6616 127.454 70.9935 127.361 71.3255 127.203 71.6357 126.99 71.9063 126.776 72.1769 126.511 72.4025 126.21 72.5701L122.54 74.6901C122.14 74.9019 121.693 75.0087 121.24 75.0001ZM92.7702 91.3799C92.3115 91.3804 91.8608 91.2594 91.4639 91.0293 91.0669 90.7993 90.7379 90.4682 90.5102 90.0699 90.3366 89.7735 90.2235 89.4458 90.1772 89.1054 90.131 88.765 90.1526 88.4188 90.241 88.0868 90.3293 87.7549 90.4826 87.4438 90.6919 87.1714 90.9012 86.8991 91.1622 86.6708 91.4602 86.4999L95.3303 84.2699C95.63 84.0997 95.9603 83.9904 96.3025 83.9485 96.6446 83.9067 96.9918 83.933 97.3237 84.0259 97.6556 84.1189 97.9657 84.2766 98.2363 84.4902 98.5069 84.7037 98.7325 84.9688 98.9001 85.2699 99.0691 85.57 99.1773 85.9004 99.2185 86.2422 99.2597 86.5841 99.233 86.9307 99.1401 87.2623 99.0472 87.5938 98.89 87.9038 98.6772 88.1745 98.4645 88.4452 98.2004 88.6713 97.9001 88.8399L94.0403 91.0799C93.6489 91.285 93.2121 91.3882 92.7702 91.3799Z" /><path fill={props.color || "#4690FF"} d="M109.16 96.64H108.73C105.744 96.575 102.832 95.7043 100.3 94.12C97.7775 92.5711 95.7079 90.3842 94.3003 87.78C92.9848 85.3188 92.2978 82.5707 92.3003 79.78V79.3499C92.373 76.4922 93.1749 73.7005 94.6301 71.24C96.0856 68.7609 98.1511 66.6954 100.63 65.24C103.106 63.787 105.911 62.9887 108.78 62.92H109.16C111.952 62.9113 114.701 63.5987 117.16 64.92C119.764 66.328 121.951 68.3975 123.5 70.92C125.081 73.4718 125.951 76.3993 126.02 79.4V79.79C126.022 82.6921 125.271 85.545 123.84 88.0699C122.341 90.7248 120.145 92.9204 117.49 94.42C114.954 95.8728 112.083 96.638 109.16 96.64ZM109.09 68.2299H108.94C106.951 68.2632 105.005 68.811 103.29 69.8199C101.589 70.8211 100.171 72.239 99.1702 73.9399C98.1681 75.6432 97.6175 77.5743 97.5703 79.55V79.8199C97.5693 81.7315 98.0397 83.6138 98.9402 85.3C99.9056 87.0902 101.323 88.5967 103.05 89.67C104.807 90.7596 106.823 91.3603 108.89 91.41H109.16C111.161 91.4113 113.128 90.8945 114.87 89.91C116.701 88.8744 118.215 87.3603 119.25 85.53C120.232 83.787 120.749 81.8205 120.75 79.8199V79.5799C120.705 77.5043 120.108 75.4783 119.02 73.7099C117.944 71.9815 116.433 70.5647 114.64 69.5999C112.932 68.691 111.025 68.2203 109.09 68.2299Z" /><path fill={props.color || "#4690FF"} d="M115.87 69.9101C115.414 69.911 114.965 69.7902 114.57 69.5601 114.27 69.3915 114.006 69.1653 113.793 68.8945 113.58 68.6238 113.423 68.3139 113.33 67.9823 113.237 67.6508 113.211 67.3041 113.252 66.9623 113.293 66.6204 113.401 66.29 113.57 65.99L115.81 62.12C115.979 61.8198 116.205 61.5558 116.476 61.343 116.746 61.1303 117.056 60.9729 117.388 60.88 117.719 60.7871 118.066 60.7606 118.408 60.8018 118.75 60.843 119.08 60.9511 119.38 61.12 119.68 61.2886 119.944 61.5147 120.157 61.7854 120.37 62.0561 120.527 62.3662 120.62 62.6978 120.713 63.0293 120.74 63.3759 120.698 63.7178 120.657 64.0596 120.549 64.3899 120.38 64.69L118.14 68.57C117.916 68.9754 117.587 69.3134 117.188 69.549 116.789 69.7846 116.334 69.9093 115.87 69.9101ZM99.5603 98.1701C99.1036 98.171 98.6548 98.0501 98.2602 97.82 97.96 97.6514 97.6959 97.4253 97.4831 97.1546 97.2704 96.8838 97.1131 96.5739 97.0203 96.2423 96.9274 95.9108 96.9007 95.5642 96.9419 95.2223 96.9831 94.8805 97.0913 94.55 97.2602 94.25L99.3704 90.59C99.539 90.2898 99.7649 90.0258 100.036 89.813 100.306 89.6002 100.616 89.4429 100.948 89.35 101.28 89.2571 101.626 89.2306 101.968 89.2717 102.31 89.3129 102.64 89.421 102.94 89.59 103.24 89.7586 103.505 89.9848 103.717 90.2555 103.93 90.5262 104.087 90.8362 104.18 91.1677 104.273 91.4993 104.3 91.8459 104.259 92.1878 104.217 92.5296 104.109 92.86 103.94 93.1601L101.83 96.83C101.603 97.2326 101.273 97.5684 100.875 97.8036 100.476 98.0388 100.023 98.1652 99.5603 98.1701Z" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0H200V240.01H0z" transform="translate(.86)" /></clipPath></defs></svg>;
}
export default DllIconSingleColor;