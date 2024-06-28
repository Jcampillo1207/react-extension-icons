import * as React from "react";
function MdbIconSingleColor(props: React.SVGProps<SVGSVGElement>) {
  return <svg width="1em" height="1em" viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><g clipPath="url(#clip0_2_2374)"><g opacity={0.3}><path opacity={0.3} d="M139.67 49.25C134.202 49.2421 128.96 47.0657 125.095 43.1982C121.229 39.3308 119.055 34.0881 119.05 28.62V0H26.91C19.773 0 12.9284 2.83511 7.88176 7.88171C2.83516 12.9283 0 19.7731 0 26.91V189.13C0.0105984 196.26 2.85043 203.094 7.89589 208.132C12.9413 213.17 19.78 216 26.91 216H137.51C141.045 216.001 144.545 215.306 147.811 213.954C151.077 212.603 154.045 210.621 156.545 208.122C159.045 205.623 161.028 202.656 162.381 199.39C163.734 196.125 164.43 192.625 164.43 189.09V49.21L139.67 49.25Z" fill={props.color || "#4690FF"} /></g><path d="M164.43 49.25H139.67C134.202 49.2421 128.96 47.0657 125.095 43.1982C121.229 39.3308 119.055 34.0881 119.05 28.62V0L164.43 49.25Z" fill={props.color || "#4690FF"} /><path d="M183.94 170.61H58.9C50.0303 170.61 42.84 177.8 42.84 186.67V223.95C42.84 232.82 50.0303 240.01 58.9 240.01H183.94C192.81 240.01 200 232.82 200 223.95V186.67C200 177.8 192.81 170.61 183.94 170.61Z" fill={props.color || "#4690FF"} /><path d="M75.21 213.38V220.65H67.69V213.38H75.21Z" fill="white" /><path d="M112.81 190.79V220.65H105.54V202L99.07 220.67H92.78L86.27 201.95V220.67H79V190.81H87.89L96.01 211.61L104.01 190.81L112.81 190.79Z" fill="white" /><path d="M143 213.4C141.748 215.671 139.856 217.524 137.56 218.73C134.978 220.06 132.103 220.72 129.2 220.65H117.83V190.58H129.19C132.095 190.504 134.973 191.147 137.57 192.45C139.855 193.636 141.74 195.469 142.99 197.72C144.283 200.124 144.934 202.821 144.88 205.55C144.935 208.284 144.287 210.987 143 213.4ZM135.17 211.89C135.984 211.057 136.615 210.062 137.022 208.97C137.428 207.878 137.601 206.713 137.53 205.55C137.601 204.387 137.428 203.222 137.022 202.13C136.615 201.038 135.984 200.043 135.17 199.21C133.349 197.62 130.974 196.811 128.56 196.96H125.1V214.14H128.55C130.964 214.289 133.338 213.48 135.16 211.89H135.17Z" fill="white" /><path d="M171.36 207.8C172.413 209.115 172.975 210.756 172.95 212.44C173.004 213.569 172.801 214.697 172.356 215.736C171.911 216.775 171.235 217.7 170.38 218.44C168.66 219.89 166.21 220.61 163 220.61H149V190.54H162.65C165.71 190.54 168.077 191.207 169.75 192.54C170.59 193.224 171.255 194.097 171.691 195.088C172.128 196.079 172.323 197.159 172.26 198.24C172.318 199.871 171.809 201.472 170.82 202.77C169.862 203.965 168.525 204.798 167.03 205.13C168.741 205.488 170.272 206.432 171.36 207.8ZM156.28 202.87H161C163.527 202.87 164.79 201.793 164.79 199.64C164.79 197.48 163.5 196.41 160.92 196.41H156.24L156.28 202.87ZM165.51 211.42C165.536 210.946 165.453 210.472 165.27 210.034C165.086 209.595 164.806 209.205 164.45 208.89C163.593 208.233 162.528 207.907 161.45 207.97H156.3V214.74H161.49C164.17 214.74 165.51 213.633 165.51 211.42Z" fill="white" /><path d="M82.21 67.9302C79.785 67.9302 77.3837 68.408 75.1433 69.3363C72.903 70.2646 70.8676 71.6252 69.1533 73.3405C67.439 75.0557 66.0794 77.0919 65.1523 79.3328C64.2252 81.5736 63.7487 83.9751 63.75 86.4001C63.7492 90.1618 64.8981 93.8337 67.0429 96.924C69.1876 100.014 72.2257 102.375 75.75 103.69V109.6L77.75 111.6V118L75.86 119.1V123.83L77.75 124.93V128.13L75.5 129.43V133.33L77.75 134.64V139.08L75.68 140.28V143.74L81.2 148.09H87.2L89.86 144.01V103.19C93.0883 101.723 95.8262 99.3584 97.7466 96.3776C99.6671 93.3967 100.689 89.926 100.69 86.3801C100.685 81.4833 98.735 76.789 95.2697 73.3292C91.8043 69.8695 87.1068 67.9275 82.21 67.9302ZM82.68 82.9302C81.4388 82.9302 80.2484 82.437 79.3707 81.5593C78.4931 80.6817 78 79.4913 78 78.2501C78.0027 77.0106 78.4969 75.8228 79.3743 74.9473C80.2517 74.0718 81.4405 73.5801 82.68 73.5801C83.2941 73.5788 83.9025 73.6986 84.4702 73.9327C85.038 74.1668 85.5539 74.5106 85.9886 74.9443C86.4234 75.3781 86.7683 75.8935 87.0036 76.4607C87.2389 77.0279 87.36 77.636 87.36 78.2501C87.3494 79.4835 86.8514 80.6626 85.9746 81.53C85.0978 82.3975 83.9134 82.8828 82.68 82.8801V82.9302Z" fill={props.color || "#4690FF"} /></g><defs><clipPath id="clip0_2_2374"><rect width={200} height={240.01} fill="white" /></clipPath></defs></svg>;
}
export default MdbIconSingleColor;