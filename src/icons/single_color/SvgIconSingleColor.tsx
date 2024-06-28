import * as React from "react";
function SvgIconSingleColor(props: React.SVGProps<SVGSVGElement>) {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 201 240" width="1em" height="1em" {...props}><g clipPath="url(#a)"><path fill={props.color || "#4690FF"} d="M139.81 49.24C134.343 49.2347 129.101 47.0606 125.235 43.1947C121.37 39.3288 119.195 34.0871 119.19 28.62V0H27.0602C19.9206 0 13.0733 2.83616 8.02478 7.88464C2.9763 12.9331 0.140137 19.7804 0.140137 26.92V189.13C0.140137 196.27 2.9763 203.117 8.02478 208.165C13.0733 213.214 19.9206 216.05 27.0602 216.05H137.66C141.195 216.05 144.695 215.354 147.96 214.001C151.226 212.648 154.193 210.665 156.692 208.165C159.191 205.665 161.173 202.697 162.525 199.431C163.876 196.165 164.571 192.665 164.57 189.13V49.25L139.81 49.24Z" opacity={0.3} /><path fill={props.color || "#4690FF"} d="M164.57 49.24H139.81C134.343 49.2347 129.101 47.0606 125.235 43.1947 121.37 39.3288 119.195 34.0871 119.19 28.62V0L164.57 49.24ZM184.09 170.6H59.0501C50.1804 170.6 42.9901 177.79 42.9901 186.66V223.94C42.9901 232.81 50.1804 240 59.0501 240H184.09C192.96 240 200.15 232.81 200.15 223.94V186.66C200.15 177.79 192.96 170.6 184.09 170.6Z" /><path fill="#fff" d="M80.1401 213.37V220.65H72.6101V213.37H80.1401ZM104.32 216.56C103.46 217.943 102.221 219.051 100.75 219.75 98.9604 220.592 96.9972 221 95.0202 220.94 92.0481 221.061 89.1193 220.197 86.6901 218.48 85.6134 217.676 84.733 216.638 84.1147 215.445 83.4964 214.251 83.1564 212.933 83.1202 211.59H90.8601C90.9154 212.603 91.3469 213.559 92.0701 214.27 92.7901 214.941 93.7463 215.301 94.7301 215.27 95.5379 215.316 96.3313 215.043 96.9401 214.51 97.2068 214.251 97.4167 213.94 97.5562 213.595 97.6957 213.251 97.7617 212.881 97.7502 212.51 97.7609 212.156 97.7 211.803 97.5711 211.473 97.4422 211.144 97.248 210.843 97.0002 210.59 96.473 210.054 95.844 209.629 95.1502 209.34 94.4102 209.013 93.3901 208.623 92.0901 208.17 90.4964 207.645 88.9396 207.013 87.4302 206.28 86.1893 205.637 85.1248 204.7 84.3301 203.55 83.4075 202.162 82.9522 200.515 83.0302 198.85 82.9882 197.202 83.4638 195.583 84.3902 194.22 85.337 192.883 86.6445 191.842 88.1602 191.22 89.9058 190.514 91.7778 190.173 93.6602 190.22 96.5224 190.06 99.3509 190.901 101.66 192.6 102.624 193.383 103.417 194.354 103.991 195.455 104.565 196.556 104.909 197.762 105 199H97.1302C97.0397 198.114 96.6562 197.283 96.0402 196.64 95.7267 196.342 95.3556 196.111 94.9499 195.962 94.5441 195.812 94.1121 195.747 93.6802 195.77 92.9328 195.732 92.198 195.974 91.6202 196.45 91.3485 196.704 91.1368 197.015 91.0002 197.361 90.8635 197.707 90.8054 198.079 90.8301 198.45 90.8235 198.782 90.8828 199.112 91.0047 199.421 91.1266 199.73 91.3086 200.012 91.5402 200.25 92.0379 200.772 92.6368 201.187 93.3002 201.47 94.0102 201.78 95.0301 202.18 96.3601 202.66 97.9814 203.179 99.5595 203.825 101.08 204.59 102.334 205.26 103.413 206.216 104.23 207.38 105.161 208.788 105.623 210.454 105.55 212.14 105.566 213.7 105.139 215.232 104.32 216.56ZM115.19 190.58 122.54 213.2 129.9 190.58H137.69L127.22 220.65H117.82L107.4 190.58H115.19ZM163.88 193C166.304 194.819 167.937 197.501 168.44 200.49H160.74C160.237 199.417 159.422 198.521 158.4 197.92 157.255 197.24 155.942 196.893 154.61 196.92 153.575 196.878 152.543 197.064 151.587 197.464 150.631 197.865 149.775 198.471 149.08 199.24 147.617 200.991 146.874 203.232 147 205.51 147 208.37 147.73 210.566 149.19 212.1 150.011 212.896 150.989 213.512 152.062 213.908 153.135 214.304 154.279 214.472 155.42 214.4 157.052 214.43 158.649 213.928 159.97 212.97 161.319 211.962 162.294 210.534 162.74 208.91H153.55V203.68H168.82V210.87C168.233 212.658 167.31 214.318 166.1 215.76 164.784 217.309 163.151 218.558 161.31 219.42 159.227 220.382 156.954 220.861 154.66 220.82 151.87 220.893 149.11 220.227 146.66 218.89 144.419 217.629 142.594 215.742 141.41 213.46 140.138 210.989 139.502 208.239 139.56 205.46 139.51 202.698 140.146 199.966 141.41 197.51 142.592 195.233 144.409 193.347 146.64 192.08 149.053 190.751 151.776 190.085 154.53 190.15 157.878 190.029 161.169 191.033 163.88 193Z" /><path fill={props.color || "#4690FF"} d="M123.17 127.73H120.68C120.667 117.638 116.651 107.964 109.514 100.829C102.377 93.6937 92.7019 89.6807 82.6101 89.6702C72.5192 89.6808 62.8447 93.694 55.7094 100.829C48.574 107.965 44.5608 117.639 44.5502 127.73H42.0502C42.0634 116.978 46.3412 106.67 53.9451 99.068C61.549 91.466 71.8579 87.1908 82.6101 87.1802C93.3623 87.1908 103.671 91.466 111.275 99.068C118.879 106.67 123.157 116.978 123.17 127.73Z" /><path fill={props.color || "#4690FF"} d="M140.24 87.1802H24.9801V89.6702H140.24V87.1802ZM47.2802 123.75H39.3102V131.72H47.2802V123.75ZM125.9 123.75H117.93V131.72H125.9V123.75Z" /><path fill={props.color || "#4690FF"} d="M86.5901 84.3101H78.6201V92.28H86.5901V84.3101ZM24.8501 92.29C27.0537 92.29 28.8401 90.5037 28.8401 88.3 28.8401 86.0964 27.0537 84.3101 24.8501 84.3101 22.6465 84.3101 20.8601 86.0964 20.8601 88.3 20.8601 90.5037 22.6465 92.29 24.8501 92.29ZM139.86 92.29C142.064 92.29 143.85 90.5037 143.85 88.3 143.85 86.0964 142.064 84.3101 139.86 84.3101 137.656 84.3101 135.87 86.0964 135.87 88.3 135.87 90.5037 137.656 92.29 139.86 92.29Z" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0H200.01V240H0z" transform="translate(.14)" /></clipPath></defs></svg>;
}
export default SvgIconSingleColor;