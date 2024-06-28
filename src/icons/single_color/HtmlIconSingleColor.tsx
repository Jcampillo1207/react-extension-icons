import * as React from "react";
function HtmlIconSingleColor(props: React.SVGProps<SVGSVGElement>) {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 200 240" width="1em" height="1em" {...props}><g clipPath="url(#a)"><path fill={props.color || "#4690FF"} d="M139.67 49.24C134.203 49.2347 128.961 47.0606 125.095 43.1947C121.229 39.3288 119.055 34.0871 119.05 28.62V0H26.9099C19.7747 -4.92665e-07 12.9316 2.83379 7.88525 7.87823C2.83894 12.9227 0.00265152 19.7648 0 26.9V189.12C0.0079507 196.252 2.84659 203.089 7.89233 208.129C12.9381 213.169 19.7781 216 26.9099 216H137.51C141.045 216.001 144.545 215.306 147.811 213.954C151.077 212.603 154.045 210.621 156.545 208.122C159.045 205.623 161.028 202.656 162.381 199.39C163.734 196.125 164.43 192.625 164.43 189.09V49.24H139.67Z" opacity={0.3} /><path fill={props.color || "#4690FF"} d="M164.43 49.24H139.67C134.203 49.2347 128.961 47.0606 125.095 43.1947 121.229 39.3288 119.055 34.0871 119.05 28.62V0L164.43 49.24ZM183.94 170.6H58.8999C50.0302 170.6 42.8401 177.79 42.8401 186.66V223.94C42.8401 232.81 50.0302 240 58.8999 240H183.94C192.81 240 200 232.81 200 223.94V186.66C200 177.79 192.81 170.6 183.94 170.6Z" /><path fill="#fff" d="M68 213.37V220.64H60.47V213.37H68ZM97.8201 190.57V220.64H90.5V208.09H79.1001V220.64H71.8301V190.57H79.1001V202.22H90.5V190.57H97.8201ZM124.44 190.57V196.35H116.28V220.64H109V196.35H100.92V190.57H124.44ZM161.32 190.78V220.64H154V202L147.54 220.67H141.24L134.74 201.96V220.67H127.46V190.81H136.35L144.48 211.61 152.43 190.81 161.32 190.78ZM173.61 215.07H183.31V220.64H166.31V190.57H173.59L173.61 215.07Z" /><path fill={props.color || "#4690FF"} d="M41.6398 114.19C41.6288 113.759 41.7627 113.336 42.0199 112.99 42.3233 112.6 42.6881 112.262 43.1 111.99 43.723 111.665 44.3678 111.385 45.0299 111.15L46.9599 110.35 54.6798 107.1C55.7532 106.6 57.7532 105.767 60.6798 104.6L64.35 103.1 65.6698 102.63 65.8998 102.53C65.9623 102.516 66.0274 102.516 66.09 102.53 66.2378 102.464 66.398 102.429 66.56 102.43 66.8696 102.414 67.1792 102.46 67.4711 102.564 67.7629 102.669 68.0311 102.831 68.2599 103.04 68.4507 103.224 68.6029 103.445 68.7077 103.689 68.8124 103.932 68.8676 104.195 68.87 104.46V107C68.861 107.473 68.7112 107.932 68.4398 108.32 68.1677 108.757 67.7552 109.088 67.2699 109.26L51.4999 115.71 67.2699 122.16C67.7381 122.351 68.1433 122.67 68.4398 123.08 68.7216 123.451 68.873 123.904 68.87 124.37V126.91C68.8639 127.451 68.6446 127.969 68.2599 128.35 68.035 128.566 67.768 128.734 67.4755 128.842 67.183 128.95 66.8714 128.997 66.56 128.98 66.3991 128.979 66.2398 128.949 66.09 128.89L65.6698 128.75 64.35 128.28 60.6798 126.77 54.6798 124.28 46.9599 121.03 45.0299 120.23C44.3999 119.98 43.76 119.7 43.1 119.38 42.6892 119.189 42.337 118.892 42.0802 118.519 41.8234 118.147 41.6712 117.712 41.6398 117.26V114.19ZM73.22 131.7C72.5966 131.721 71.9873 131.511 71.51 131.11 71.2975 130.945 71.1251 130.735 71.0056 130.494 70.8861 130.253 70.8227 129.988 70.8201 129.72 70.8201 129.34 71.95 126.72 74.21 121.72L77.51 114.47 78.21 112.96 83.53 101.15 85.4099 97.0597 85.79 96.1197C85.9358 95.7727 86.1097 95.4383 86.3101 95.1197 86.574 94.6867 86.9482 94.3316 87.3945 94.0908 87.8409 93.8501 88.3433 93.7324 88.8501 93.7497H91.2C91.8263 93.7283 92.4386 93.9384 92.9199 94.3397 93.1306 94.5053 93.3012 94.7163 93.4189 94.957 93.5367 95.1976 93.5987 95.4618 93.6001 95.7297 92.7996 98.0615 91.8577 100.342 90.78 102.56L90.26 103.69 86.26 112.44 80.9399 124.25 79.0601 128.35 78.6799 129.29C78.5455 129.665 78.3747 130.027 78.1699 130.37 77.8866 130.796 77.5014 131.144 77.0491 131.384 76.5967 131.623 76.0918 131.745 75.5801 131.74L73.22 131.7ZM97.93 129C97.6123 129.02 97.2938 128.974 96.9945 128.866 96.6951 128.757 96.4213 128.589 96.19 128.37 95.9969 128.183 95.8434 127.959 95.7386 127.712 95.6338 127.464 95.5799 127.198 95.5802 126.93V124.39C95.5756 123.929 95.7154 123.477 95.9801 123.1 96.2792 122.68 96.6971 122.36 97.18 122.18L112.99 115.73 97.18 109.28C96.6985 109.067 96.2888 108.72 96.0001 108.28 95.7345 107.898 95.5884 107.445 95.5802 106.98V104.4C95.5805 104.132 95.6365 103.868 95.745 103.623 95.8535 103.379 96.0119 103.159 96.2101 102.98 96.6818 102.56 97.2991 102.341 97.93 102.37 98.0795 102.366 98.2277 102.4 98.3602 102.47 98.4462 102.455 98.5342 102.455 98.6202 102.47L98.8302 102.57C98.7602 102.57 99.1902 102.69 100.1 103.04L103.82 104.54C103.627 104.453 105.627 105.286 109.82 107.04 112.107 107.98 114.727 109.093 117.68 110.38 117.87 110.44 118.12 110.54 118.44 110.66L119.52 111.09C120.154 111.316 120.766 111.597 121.35 111.93 121.772 112.119 122.132 112.423 122.39 112.807 122.647 113.19 122.793 113.638 122.81 114.1V117.2C122.806 117.626 122.666 118.039 122.41 118.38 122.133 118.77 121.771 119.092 121.35 119.32 120.79 119.6 120.11 119.9 119.35 120.22L117.35 121.02 99.93 128.31C99.43 128.56 99.1301 128.72 99.0401 128.78L98.8502 128.92 97.93 129Z" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0H200V240H0z" /></clipPath></defs></svg>;
}
export default HtmlIconSingleColor;