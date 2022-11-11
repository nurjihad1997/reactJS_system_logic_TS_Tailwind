"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function Brand({ color, className }) {
    return ((0, jsx_runtime_1.jsx)("div", { className: className || "w-20 h-10", children: (0, jsx_runtime_1.jsxs)("svg", { viewBox: "0 0 564 120", fill: "none", preserveAspectRatio: "xMidYMid meet", children: [(0, jsx_runtime_1.jsx)("path", { d: "M63 6.35085L104.962 30.5774C106.818 31.6491 107.962 33.6299 107.962 35.7735V84.2265C107.962 86.3701 106.818 88.3509 104.962 89.4227L63 113.649C61.1436 114.721 58.8564 114.721 57 113.649L15.0385 89.4226C13.1821 88.3509 12.0385 86.3701 12.0385 84.2265V35.7735C12.0385 33.6299 13.1821 31.6491 15.0385 30.5774L57 6.35085C58.8564 5.27906 61.1436 5.27906 63 6.35085Z", className: "stroke-blue", "stroke-width": "8" }), (0, jsx_runtime_1.jsx)("path", { d: "M63.1625 69.1494L57.1966 69.1599L39.9825 33.8207L48.1057 33.8065L60.0567 59.8864L59.5769 59.6475L60.7221 59.6455L60.2698 59.886L72.1025 33.7643L80.2523 33.75L63.1625 69.1494Z", className: "fill-blue" }), (0, jsx_runtime_1.jsx)("path", { d: "M56.1458 33.8868L62.1117 33.8764L79.3258 69.2155L71.2026 69.2298L59.2516 43.1499L59.7314 43.3887L58.5861 43.3907L59.0385 43.1502L47.2058 69.2719L39.0559 69.2862L56.1458 33.8868Z", className: "fill-blue" }), (0, jsx_runtime_1.jsx)("line", { x1: "30.3896", y1: "80.335", x2: "89.6104", y2: "80.335", className: "stroke-blue", "stroke-width": "8" }), (0, jsx_runtime_1.jsx)("path", { d: "M154.25 85.13C151.217 85.13 148.487 84.5933 146.06 83.52C143.68 82.4 141.79 80.9067 140.39 79.04C138.99 77.1267 138.243 75.0033 138.15 72.67H146.41C146.55 74.3033 147.32 75.68 148.72 76.8C150.167 77.8733 151.963 78.41 154.11 78.41C156.35 78.41 158.077 77.99 159.29 77.15C160.55 76.2633 161.18 75.1433 161.18 73.79C161.18 72.3433 160.48 71.27 159.08 70.57C157.727 69.87 155.557 69.1 152.57 68.26C149.677 67.4667 147.32 66.6967 145.5 65.95C143.68 65.2033 142.093 64.06 140.74 62.52C139.433 60.98 138.78 58.95 138.78 56.43C138.78 54.3767 139.387 52.51 140.6 50.83C141.813 49.1033 143.54 47.75 145.78 46.77C148.067 45.79 150.68 45.3 153.62 45.3C158.007 45.3 161.53 46.42 164.19 48.66C166.897 50.8533 168.343 53.8633 168.53 57.69H160.55C160.41 55.9633 159.71 54.5867 158.45 53.56C157.19 52.5333 155.487 52.02 153.34 52.02C151.24 52.02 149.63 52.4167 148.51 53.21C147.39 54.0033 146.83 55.0533 146.83 56.36C146.83 57.3867 147.203 58.25 147.95 58.95C148.697 59.65 149.607 60.21 150.68 60.63C151.753 61.0033 153.34 61.4933 155.44 62.1C158.24 62.8467 160.527 63.6167 162.3 64.41C164.12 65.1567 165.683 66.2767 166.99 67.77C168.297 69.2633 168.973 71.2467 169.02 73.72C169.02 75.9133 168.413 77.8733 167.2 79.6C165.987 81.3267 164.26 82.68 162.02 83.66C159.827 84.64 157.237 85.13 154.25 85.13ZM212.363 45.93L188.703 102.63H180.443L188.283 83.87L173.093 45.93H181.983L192.833 75.33L204.103 45.93H212.363ZM232.385 85.13C229.351 85.13 226.621 84.5933 224.195 83.52C221.815 82.4 219.925 80.9067 218.525 79.04C217.125 77.1267 216.378 75.0033 216.285 72.67H224.545C224.685 74.3033 225.455 75.68 226.855 76.8C228.301 77.8733 230.098 78.41 232.245 78.41C234.485 78.41 236.211 77.99 237.425 77.15C238.685 76.2633 239.315 75.1433 239.315 73.79C239.315 72.3433 238.615 71.27 237.215 70.57C235.861 69.87 233.691 69.1 230.705 68.26C227.811 67.4667 225.455 66.6967 223.635 65.95C221.815 65.2033 220.228 64.06 218.875 62.52C217.568 60.98 216.915 58.95 216.915 56.43C216.915 54.3767 217.521 52.51 218.735 50.83C219.948 49.1033 221.675 47.75 223.915 46.77C226.201 45.79 228.815 45.3 231.755 45.3C236.141 45.3 239.665 46.42 242.325 48.66C245.031 50.8533 246.478 53.8633 246.665 57.69H238.685C238.545 55.9633 237.845 54.5867 236.585 53.56C235.325 52.5333 233.621 52.02 231.475 52.02C229.375 52.02 227.765 52.4167 226.645 53.21C225.525 54.0033 224.965 55.0533 224.965 56.36C224.965 57.3867 225.338 58.25 226.085 58.95C226.831 59.65 227.741 60.21 228.815 60.63C229.888 61.0033 231.475 61.4933 233.575 62.1C236.375 62.8467 238.661 63.6167 240.435 64.41C242.255 65.1567 243.818 66.2767 245.125 67.77C246.431 69.2633 247.108 71.2467 247.155 73.72C247.155 75.9133 246.548 77.8733 245.335 79.6C244.121 81.3267 242.395 82.68 240.155 83.66C237.961 84.64 235.371 85.13 232.385 85.13ZM265.087 52.44V73.79C265.087 75.2367 265.414 76.2867 266.067 76.94C266.767 77.5467 267.934 77.85 269.567 77.85H274.467V84.5H268.167C264.574 84.5 261.821 83.66 259.907 81.98C257.994 80.3 257.037 77.57 257.037 73.79V52.44H252.487V45.93H257.037V36.34H265.087V45.93H274.467V52.44H265.087ZM317.172 64.27C317.172 65.7167 317.079 67.0233 316.892 68.19H287.422C287.656 71.27 288.799 73.7433 290.852 75.61C292.906 77.4767 295.426 78.41 298.412 78.41C302.706 78.41 305.739 76.6133 307.512 73.02H316.122C314.956 76.5667 312.832 79.4833 309.752 81.77C306.719 84.01 302.939 85.13 298.412 85.13C294.726 85.13 291.412 84.3133 288.472 82.68C285.579 81 283.292 78.6667 281.612 75.68C279.979 72.6467 279.162 69.1467 279.162 65.18C279.162 61.2133 279.956 57.7367 281.542 54.75C283.176 51.7167 285.439 49.3833 288.332 47.75C291.272 46.1167 294.632 45.3 298.412 45.3C302.052 45.3 305.296 46.0933 308.142 47.68C310.989 49.2667 313.206 51.5067 314.792 54.4C316.379 57.2467 317.172 60.5367 317.172 64.27ZM308.842 61.75C308.796 58.81 307.746 56.4533 305.692 54.68C303.639 52.9067 301.096 52.02 298.062 52.02C295.309 52.02 292.952 52.9067 290.992 54.68C289.032 56.4067 287.866 58.7633 287.492 61.75H308.842ZM371.715 45.3C374.749 45.3 377.455 45.93 379.835 47.19C382.262 48.45 384.152 50.3167 385.505 52.79C386.905 55.2633 387.605 58.25 387.605 61.75V84.5H379.695V62.94C379.695 59.4867 378.832 56.85 377.105 55.03C375.379 53.1633 373.022 52.23 370.035 52.23C367.049 52.23 364.669 53.1633 362.895 55.03C361.169 56.85 360.305 59.4867 360.305 62.94V84.5H352.395V62.94C352.395 59.4867 351.532 56.85 349.805 55.03C348.079 53.1633 345.722 52.23 342.735 52.23C339.749 52.23 337.369 53.1633 335.595 55.03C333.869 56.85 333.005 59.4867 333.005 62.94V84.5H325.025V45.93H333.005V50.34C334.312 48.7533 335.969 47.5167 337.975 46.63C339.982 45.7433 342.129 45.3 344.415 45.3C347.495 45.3 350.249 45.9533 352.675 47.26C355.102 48.5667 356.969 50.4567 358.275 52.93C359.442 50.5967 361.262 48.7533 363.735 47.4C366.209 46 368.869 45.3 371.715 45.3ZM405.74 32.7V84.5H397.76V32.7H405.74ZM432.947 85.13C429.307 85.13 426.017 84.3133 423.077 82.68C420.137 81 417.827 78.6667 416.147 75.68C414.467 72.6467 413.627 69.1467 413.627 65.18C413.627 61.26 414.49 57.7833 416.217 54.75C417.943 51.7167 420.3 49.3833 423.287 47.75C426.273 46.1167 429.61 45.3 433.297 45.3C436.983 45.3 440.32 46.1167 443.307 47.75C446.293 49.3833 448.65 51.7167 450.377 54.75C452.103 57.7833 452.967 61.26 452.967 65.18C452.967 69.1 452.08 72.5767 450.307 75.61C448.533 78.6433 446.107 81 443.027 82.68C439.993 84.3133 436.633 85.13 432.947 85.13ZM432.947 78.2C435 78.2 436.913 77.71 438.687 76.73C440.507 75.75 441.977 74.28 443.097 72.32C444.217 70.36 444.777 67.98 444.777 65.18C444.777 62.38 444.24 60.0233 443.167 58.11C442.093 56.15 440.67 54.68 438.897 53.7C437.123 52.72 435.21 52.23 433.157 52.23C431.103 52.23 429.19 52.72 427.417 53.7C425.69 54.68 424.313 56.15 423.287 58.11C422.26 60.0233 421.747 62.38 421.747 65.18C421.747 69.3333 422.797 72.5533 424.897 74.84C427.043 77.08 429.727 78.2 432.947 78.2ZM476.395 45.3C479.382 45.3 482.019 45.9067 484.305 47.12C486.639 48.2867 488.459 49.7567 489.765 51.53V45.93H497.815V85.13C497.815 88.6767 497.069 91.8267 495.575 94.58C494.082 97.38 491.912 99.5733 489.065 101.16C486.265 102.747 482.905 103.54 478.985 103.54C473.759 103.54 469.419 102.303 465.965 99.83C462.512 97.4033 460.552 94.09 460.085 89.89H467.995C468.602 91.8967 469.885 93.5067 471.845 94.72C473.852 95.98 476.232 96.61 478.985 96.61C482.205 96.61 484.795 95.63 486.755 93.67C488.762 91.71 489.765 88.8633 489.765 85.13V78.69C488.412 80.51 486.569 82.05 484.235 83.31C481.949 84.5233 479.335 85.13 476.395 85.13C473.035 85.13 469.955 84.29 467.155 82.61C464.402 80.8833 462.209 78.5033 460.575 75.47C458.989 72.39 458.195 68.9133 458.195 65.04C458.195 61.1667 458.989 57.7367 460.575 54.75C462.209 51.7633 464.402 49.4533 467.155 47.82C469.955 46.14 473.035 45.3 476.395 45.3ZM489.765 65.18C489.765 62.52 489.205 60.21 488.085 58.25C487.012 56.29 485.589 54.7967 483.815 53.77C482.042 52.7433 480.129 52.23 478.075 52.23C476.022 52.23 474.109 52.7433 472.335 53.77C470.562 54.75 469.115 56.22 467.995 58.18C466.922 60.0933 466.385 62.38 466.385 65.04C466.385 67.7 466.922 70.0333 467.995 72.04C469.115 74.0467 470.562 75.5867 472.335 76.66C474.155 77.6867 476.069 78.2 478.075 78.2C480.129 78.2 482.042 77.6867 483.815 76.66C485.589 75.6333 487.012 74.14 488.085 72.18C489.205 70.1733 489.765 67.84 489.765 65.18ZM512.357 40.82C510.91 40.82 509.697 40.33 508.717 39.35C507.737 38.37 507.247 37.1567 507.247 35.71C507.247 34.2633 507.737 33.05 508.717 32.07C509.697 31.09 510.91 30.6 512.357 30.6C513.757 30.6 514.947 31.09 515.927 32.07C516.907 33.05 517.397 34.2633 517.397 35.71C517.397 37.1567 516.907 38.37 515.927 39.35C514.947 40.33 513.757 40.82 512.357 40.82ZM516.277 45.93V84.5H508.297V45.93H516.277ZM524.094 65.18C524.094 61.2133 524.887 57.7367 526.474 54.75C528.107 51.7167 530.347 49.3833 533.194 47.75C536.041 46.1167 539.307 45.3 542.994 45.3C547.661 45.3 551.511 46.42 554.544 48.66C557.624 50.8533 559.701 54.0033 560.774 58.11H552.164C551.464 56.1967 550.344 54.7033 548.804 53.63C547.264 52.5567 545.327 52.02 542.994 52.02C539.727 52.02 537.114 53.1867 535.154 55.52C533.241 57.8067 532.284 61.0267 532.284 65.18C532.284 69.3333 533.241 72.5767 535.154 74.91C537.114 77.2433 539.727 78.41 542.994 78.41C547.614 78.41 550.671 76.38 552.164 72.32H560.774C559.654 76.24 557.554 79.3667 554.474 81.7C551.394 83.9867 547.567 85.13 542.994 85.13C539.307 85.13 536.041 84.3133 533.194 82.68C530.347 81 528.107 78.6667 526.474 75.68C524.887 72.6467 524.094 69.1467 524.094 65.18Z", className: color === "light" ? "fill-white" : "fill-darkblue" })] }) }));
}
exports.default = Brand;