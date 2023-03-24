import React, { ReactElement } from 'react';
import { HEX } from '../../types';

type IconProps = {
  height?: number;
  width?: number;
  color?: HEX;
};

export const LogoIcon = ({ height = 24, width = 24, color1 = '#148b14', color2 = '#cc8c04', color3 = '#bc049c' }: any) => (
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width={width}
    viewBox="0 0 395 429"
    enableBackground="new 0 0 395 429"
    xmlSpace="preserve"
  >
    <path
      fill="transparent"
      opacity="1.000000"
      stroke="none"
      d="
M396.000000,146.000000 
	C396.000000,180.687561 396.000000,215.375122 395.763428,250.875519 
	C377.477966,240.498428 359.426361,229.312851 341.382874,218.114136 
	C338.527222,216.341736 336.259003,215.197937 332.558960,217.592651 
	C316.251770,228.146729 299.634766,238.225388 283.017731,248.290909 
	C281.756042,249.055161 279.214325,249.033981 277.947845,248.261963 
	C261.077576,237.978180 244.373718,227.420822 227.472672,217.188843 
	C225.965668,216.276489 222.905533,216.382095 221.358765,217.320496 
	C204.470016,227.566437 187.880386,238.312576 170.860794,248.330429 
	C166.869751,250.679581 165.909698,252.997879 165.921844,257.179993 
	C166.048584,300.843414 166.062943,344.507599 165.899033,388.170776 
	C165.883286,392.364441 167.328384,394.457123 170.860580,396.537384 
	C187.882248,406.562286 204.710617,416.916107 221.551666,427.244446 
	C222.311844,427.710632 222.529602,429.061279 223.000000,430.000000 
	C149.028946,430.000000 75.057877,430.000000 1.043408,430.000000 
	C1.043408,287.084869 1.043408,144.169724 1.043408,1.127292 
	C132.666580,1.127292 264.333282,1.127292 396.000000,1.127292 
	C396.000000,24.748060 396.000000,48.405373 395.641937,72.611420 
	C390.764557,70.412529 386.233765,67.683578 381.727753,64.914299 
	C349.609009,45.174969 317.452148,25.496784 285.440094,5.585886 
	C281.844879,3.349739 279.452545,2.946111 275.729004,5.433340 
	C265.973541,11.949723 255.833923,17.891972 245.833557,24.040503 
	C220.477341,39.630287 195.134583,55.242199 169.724121,70.743118 
	C166.797913,72.528168 165.899750,74.697510 165.929672,78.037346 
	C166.083374,95.197655 166.816925,112.412285 165.724380,129.504150 
	C164.944153,141.710159 167.546310,150.448013 179.873505,154.496399 
	C180.021301,154.544922 180.124893,154.714294 180.265091,154.801636 
	C209.740860,173.159576 239.373489,191.272980 268.598328,210.021988 
	C277.108734,215.481796 284.374878,217.460495 292.068909,209.552124 
	C292.395996,209.215958 292.963593,209.127106 293.384766,208.867249 
	C319.701782,192.630066 345.999664,176.361816 372.338501,160.160172 
	C380.166992,155.344696 388.109650,150.714874 396.000000,146.000000 
M104.601395,364.997833 
	C105.969711,364.601166 107.527893,364.500458 108.677620,363.763000 
	C123.784073,354.072937 138.824692,344.280334 153.905197,334.549683 
	C156.112808,333.125244 157.114197,331.467957 157.084579,328.616150 
	C156.911667,311.961029 156.558975,295.285706 157.216583,278.654785 
	C157.480927,271.969788 154.730911,268.797974 149.485306,266.102814 
	C137.414917,259.901184 125.519073,253.358795 113.427567,247.199768 
	C109.486008,245.192062 107.821159,242.845459 107.863693,238.112823 
	C108.131653,208.299622 107.998001,178.482834 107.995125,148.667221 
	C107.994720,144.481262 108.605972,140.170288 107.797348,136.145569 
	C107.034470,132.348541 108.875397,127.535065 103.877434,124.924553 
	C88.806908,117.052986 73.777504,109.095261 58.899670,100.868034 
	C55.646221,99.068924 53.145935,99.487656 50.452579,101.236526 
	C35.939201,110.660469 21.470900,120.153931 6.942146,129.554001 
	C4.055128,131.421890 2.904345,133.755096 2.928999,137.274002 
	C3.073700,157.927582 2.885367,178.583466 3.024781,199.237122 
	C3.267229,235.155121 3.725609,271.071777 3.909537,306.989929 
	C3.928137,310.622253 5.507435,312.315826 8.378974,313.804108 
	C18.100611,318.842499 27.780834,323.962891 37.423290,329.151581 
	C59.565414,341.066437 81.675919,353.040039 104.601395,364.997833 
z"
    />
    <path
      fill={color1}
      opacity="1.000000"
      stroke="none"
      d="
M223.375000,430.000000 
	C222.529602,429.061279 222.311844,427.710632 221.551666,427.244446 
	C204.710617,416.916107 187.882248,406.562286 170.860580,396.537384 
	C167.328384,394.457123 165.883286,392.364441 165.899033,388.170776 
	C166.062943,344.507599 166.048584,300.843414 165.921844,257.179993 
	C165.909698,252.997879 166.869751,250.679581 170.860794,248.330429 
	C187.880386,238.312576 204.470016,227.566437 221.358765,217.320496 
	C222.905533,216.382095 225.965668,216.276489 227.472672,217.188843 
	C244.373718,227.420822 261.077576,237.978180 277.947845,248.261963 
	C279.214325,249.033981 281.756042,249.055161 283.017731,248.290909 
	C299.634766,238.225388 316.251770,228.146729 332.558960,217.592651 
	C336.259003,215.197937 338.527222,216.341736 341.382874,218.114136 
	C359.426361,229.312851 377.477966,240.498428 395.763428,251.344177 
	C396.000000,275.020905 396.000000,299.041779 395.775696,323.188599 
	C393.858429,324.604340 392.259613,326.046417 390.457794,327.160065 
	C374.779358,336.850647 359.063568,346.480774 343.360687,356.131805 
	C323.908356,368.087158 304.470642,380.066315 285.002838,391.996399 
	C265.819794,403.751953 246.597031,415.442810 227.444260,427.247345 
	C226.685547,427.714966 226.469101,429.062469 226.000000,430.000000 
	C225.250000,430.000000 224.500000,430.000000 223.375000,430.000000 
M269.346130,332.922394 
	C256.671570,340.666351 244.098221,348.584656 231.256500,356.040710 
	C227.722000,358.092926 226.847870,360.313232 226.900208,364.163910 
	C227.131119,381.154327 227.000000,398.149628 227.000000,415.143158 
	C227.000000,416.871796 227.000000,418.600464 227.000000,420.748596 
	C243.425171,410.729523 259.150604,401.131653 274.883850,391.546570 
	C277.121613,390.183289 278.113098,388.487732 278.085724,385.624420 
	C277.915222,367.799530 278.007385,349.972168 277.984741,332.145660 
	C277.983032,330.794861 277.766815,329.444336 277.608398,327.607971 
	C274.623291,329.520782 272.293915,331.013397 269.346130,332.922394 
M352.330872,343.925751 
	C363.411926,336.997742 374.479279,330.047607 385.585175,323.159637 
	C387.922089,321.710236 390.134521,320.711182 390.094055,317.100067 
	C389.888885,298.775574 390.007690,280.447510 389.975433,262.120758 
	C389.973663,261.102386 389.636169,260.084625 389.421265,258.877319 
	C374.217499,268.116272 359.486450,277.182617 344.622925,286.026215 
	C340.481995,288.490051 338.461670,291.182739 338.825470,296.455109 
	C339.454773,305.575073 339.000000,314.769867 339.000000,323.933258 
	C339.000000,333.025177 339.000000,342.117096 339.000000,351.781982 
	C343.594482,348.975159 347.600891,346.527588 352.330872,343.925751 
M227.000000,306.502075 
	C227.000000,321.405426 227.000000,336.308746 227.000000,351.813354 
	C243.556168,341.646912 259.540588,331.921204 275.372559,321.953461 
	C276.759918,321.079926 277.871368,318.625793 277.888336,316.893829 
	C278.067688,298.588318 278.001770,280.280396 277.989136,261.973114 
	C277.988495,261.063507 277.855927,260.153961 277.734528,258.601776 
	C263.700256,267.210022 250.608170,276.114410 236.688950,283.449127 
	C228.382874,287.826019 225.521576,293.341309 226.973953,302.012604 
	C227.163757,303.145813 227.000000,304.338257 227.000000,306.502075 
M316.968750,365.501038 
	C321.923859,362.350037 326.933319,359.279144 331.790100,355.983276 
	C332.812592,355.289459 333.894989,353.773773 333.902496,352.629913 
	C334.031036,333.023315 333.994843,313.415588 333.994843,293.160797 
	C332.440186,294.020386 331.326324,294.580414 330.267517,295.230103 
	C315.682373,304.179321 301.158691,313.231018 286.475708,322.016479 
	C283.826538,323.601654 282.909180,325.231415 282.932678,328.244873 
	C283.070190,345.879486 283.000061,363.515686 283.000000,381.151367 
	C283.000000,382.540710 283.000031,383.930023 283.000031,386.202026 
	C294.687439,379.096191 305.522186,372.508759 316.968750,365.501038 
z"
    />
    <path
      fill={color2}
      opacity="1.000000"
      stroke="none"
      d="
M396.000000,145.531342 
	C388.109650,150.714874 380.166992,155.344696 372.338501,160.160172 
	C345.999664,176.361816 319.701782,192.630066 293.384766,208.867249 
	C292.963593,209.127106 292.395996,209.215958 292.068909,209.552124 
	C284.374878,217.460495 277.108734,215.481796 268.598328,210.021988 
	C239.373489,191.272980 209.740860,173.159576 180.265091,154.801636 
	C180.124893,154.714294 180.021301,154.544922 179.873505,154.496399 
	C167.546310,150.448013 164.944153,141.710159 165.724380,129.504150 
	C166.816925,112.412285 166.083374,95.197655 165.929672,78.037346 
	C165.899750,74.697510 166.797913,72.528168 169.724121,70.743118 
	C195.134583,55.242199 220.477341,39.630287 245.833557,24.040503 
	C255.833923,17.891972 265.973541,11.949723 275.729004,5.433340 
	C279.452545,2.946111 281.844879,3.349739 285.440094,5.585886 
	C317.452148,25.496784 349.609009,45.174969 381.727753,64.914299 
	C386.233765,67.683578 390.764557,70.412529 395.641937,73.080078 
	C396.000000,97.020897 396.000000,121.041786 396.000000,145.531342 
M334.000000,94.484314 
	C334.000000,78.647148 334.000000,62.809986 334.000000,46.060703 
	C331.508179,47.371243 330.027924,48.045700 328.651611,48.889713 
	C314.859009,57.348083 301.148376,65.942970 287.253723,74.229637 
	C284.121460,76.097702 282.899384,78.150673 282.933228,81.752983 
	C283.087891,98.222839 283.000458,114.694977 283.000000,131.166290 
	C282.999939,133.423203 283.000000,135.680130 283.000000,138.643173 
	C284.762817,137.776398 285.790375,137.369095 286.718658,136.799881 
	C298.681030,129.464600 310.536011,121.948868 322.608124,114.799492 
	C333.900360,108.111961 334.000000,108.280190 334.000000,94.484314 
M366.934753,156.472183 
	C373.530823,152.361877 380.011383,148.045959 386.780762,144.244278 
	C389.422913,142.760437 390.050415,141.070557 390.038483,138.349045 
	C389.959686,120.355980 390.003326,102.362396 389.984955,84.369003 
	C389.983826,83.280525 389.792725,82.192245 389.669189,80.882988 
	C388.854675,81.182068 388.375427,81.274979 387.985016,81.513351 
	C372.603973,90.904625 357.170074,100.212891 341.946320,109.852974 
	C340.330841,110.875938 339.154022,113.843567 339.127319,115.926399 
	C338.905182,133.250534 338.991974,150.578781 339.016693,167.905746 
	C339.018921,169.461914 339.241211,171.017776 339.408478,173.184723 
	C348.839813,167.464920 357.577576,162.165787 366.934753,156.472183 
M277.900543,81.956703 
	C276.687592,82.099403 275.245911,81.865051 274.295929,82.441292 
	C259.737976,91.271736 245.251709,100.220222 230.728287,109.107811 
	C228.164032,110.677010 226.862213,112.511719 226.902771,115.859749 
	C227.114502,133.348022 226.992050,150.840271 227.020401,168.331070 
	C227.022675,169.733231 227.286407,171.134964 227.500778,173.248322 
	C243.562836,163.342636 258.940491,153.713669 274.505524,144.397736 
	C277.215546,142.775742 278.074432,141.145599 278.054962,138.168686 
	C277.933929,119.679184 277.980957,101.188576 277.900543,81.956703 
M283.000000,195.466888 
	C283.000000,199.333069 283.000000,203.199249 283.000000,207.461273 
	C284.555206,206.957153 285.239807,206.873474 285.770782,206.542999 
	C300.348633,197.469666 314.808746,188.200043 329.553009,179.406693 
	C332.910706,177.404175 334.121368,175.462234 334.079987,171.672729 
	C333.894562,154.704742 334.006378,137.733597 333.988586,120.763603 
	C333.986938,119.182396 333.828400,117.601364 333.721100,115.621025 
	C332.477325,116.067619 331.661316,116.216805 330.999451,116.619408 
	C316.047516,125.714233 301.041687,134.725296 286.268280,144.102295 
	C284.519073,145.212555 283.185242,148.338120 283.143524,150.557358 
	C282.868744,165.193008 283.000641,179.836288 283.000000,195.466888 
z"
    />
    <path
      fill="transparent"
      opacity="1.000000"
      stroke="none"
      d="
M226.468658,430.000000 
	C226.469101,429.062469 226.685547,427.714966 227.444260,427.247345 
	C246.597031,415.442810 265.819794,403.751953 285.002838,391.996399 
	C304.470642,380.066315 323.908356,368.087158 343.360687,356.131805 
	C359.063568,346.480774 374.779358,336.850647 390.457794,327.160065 
	C392.259613,326.046417 393.858429,324.604340 395.775696,323.657257 
	C396.000000,359.277252 396.000000,394.554504 396.000000,430.000000 
	C339.645874,430.000000 283.291595,430.000000 226.468658,430.000000 
z"
    />
    <path
      fill={color3}
      opacity="1.000000"
      stroke="none"
      d="
M104.200325,364.993835 
	C81.675919,353.040039 59.565414,341.066437 37.423290,329.151581 
	C27.780834,323.962891 18.100611,318.842499 8.378974,313.804108 
	C5.507435,312.315826 3.928137,310.622253 3.909537,306.989929 
	C3.725609,271.071777 3.267229,235.155121 3.024781,199.237122 
	C2.885367,178.583466 3.073700,157.927582 2.928999,137.274002 
	C2.904345,133.755096 4.055128,131.421890 6.942146,129.554001 
	C21.470900,120.153931 35.939201,110.660469 50.452579,101.236526 
	C53.145935,99.487656 55.646221,99.068924 58.899670,100.868034 
	C73.777504,109.095261 88.806908,117.052986 103.877434,124.924553 
	C108.875397,127.535065 107.034470,132.348541 107.797348,136.145569 
	C108.605972,140.170288 107.994720,144.481262 107.995125,148.667221 
	C107.998001,178.482834 108.131653,208.299622 107.863693,238.112823 
	C107.821159,242.845459 109.486008,245.192062 113.427567,247.199768 
	C125.519073,253.358795 137.414917,259.901184 149.485306,266.102814 
	C154.730911,268.797974 157.480927,271.969788 157.216583,278.654785 
	C156.558975,295.285706 156.911667,311.961029 157.084579,328.616150 
	C157.114197,331.467957 156.112808,333.125244 153.905197,334.549683 
	C138.824692,344.280334 123.784073,354.072937 108.677620,363.763000 
	C107.527893,364.500458 105.969711,364.601166 104.200325,364.993835 
M44.349007,216.073914 
	C32.729546,209.893814 21.110085,203.713715 9.004476,197.275055 
	C9.004476,214.014160 8.921369,230.259613 9.148943,246.500702 
	C9.168974,247.930313 10.936080,249.822510 12.379140,250.662003 
	C19.143200,254.596909 26.053932,258.283325 32.958649,261.971710 
	C39.380379,265.402100 45.860653,268.722900 53.000217,272.449524 
	C53.000217,257.895599 52.458233,244.117477 53.221493,230.412033 
	C53.622513,223.211121 51.358532,218.988678 44.349007,216.073914 
M53.000046,311.499146 
	C52.999893,302.005737 53.129822,292.508881 52.881344,283.021973 
	C52.835873,281.285919 51.702389,278.784546 50.305676,278.001160 
	C37.110050,270.600037 23.748495,263.494781 10.389814,256.279968 
	C10.055425,257.428833 9.538440,258.369141 9.545640,259.305481 
	C9.656748,273.755554 10.075124,288.208832 9.852145,302.652557 
	C9.786140,306.928192 11.597201,308.749725 14.871846,310.467316 
	C21.962513,314.186493 28.905506,318.186066 35.963913,321.968292 
	C41.460258,324.913574 47.039776,327.703644 53.000046,330.778137 
	C53.000046,324.149780 53.000046,318.324127 53.000046,311.499146 
M40.960949,207.467758 
	C44.436310,209.394043 47.911671,211.320328 51.996105,213.584198 
	C51.996105,196.558929 52.078976,180.594116 51.855923,164.633575 
	C51.835697,163.186310 50.143391,161.273865 48.721577,160.419662 
	C42.709656,156.807678 36.550007,153.432510 30.361168,150.126511 
	C23.480915,146.451187 16.510258,142.945084 9.005857,139.069321 
	C9.005857,156.000305 8.972553,172.248978 9.088103,188.496567 
	C9.095081,189.477661 10.058934,190.869308 10.963334,191.362564 
	C20.706833,196.676498 30.527864,201.848282 40.960949,207.467758 
M59.201332,333.595367 
	C73.194969,341.497955 87.188606,349.400543 102.001190,357.765594 
	C102.001190,343.716125 101.463097,330.761993 102.187607,317.878876 
	C102.682701,309.075165 101.309685,302.514008 91.679558,300.240204 
	C90.921379,300.061188 90.273369,299.439941 89.556778,299.056732 
	C79.552483,293.707153 69.545151,288.363281 59.036713,282.749908 
	C59.036713,299.867065 59.036713,316.309448 59.201332,333.595367 
z"
    />
    <path
      fill="transparent"
      opacity="1.000000"
      stroke="none"
      d="
M269.655334,332.714233 
	C272.293915,331.013397 274.623291,329.520782 277.608398,327.607971 
	C277.766815,329.444336 277.983032,330.794861 277.984741,332.145660 
	C278.007385,349.972168 277.915222,367.799530 278.085724,385.624420 
	C278.113098,388.487732 277.121613,390.183289 274.883850,391.546570 
	C259.150604,401.131653 243.425171,410.729523 227.000000,420.748596 
	C227.000000,418.600464 227.000000,416.871796 227.000000,415.143158 
	C227.000000,398.149628 227.131119,381.154327 226.900208,364.163910 
	C226.847870,360.313232 227.722000,358.092926 231.256500,356.040710 
	C244.098221,348.584656 256.671570,340.666351 269.655334,332.714233 
z"
    />
    <path
      fill="transparent"
      opacity="1.000000"
      stroke="none"
      d="
M351.969086,344.002869 
	C347.600891,346.527588 343.594482,348.975159 339.000000,351.781982 
	C339.000000,342.117096 339.000000,333.025177 339.000000,323.933258 
	C339.000000,314.769867 339.454773,305.575073 338.825470,296.455109 
	C338.461670,291.182739 340.481995,288.490051 344.622925,286.026215 
	C359.486450,277.182617 374.217499,268.116272 389.421265,258.877319 
	C389.636169,260.084625 389.973663,261.102386 389.975433,262.120758 
	C390.007690,280.447510 389.888885,298.775574 390.094055,317.100067 
	C390.134521,320.711182 387.922089,321.710236 385.585175,323.159637 
	C374.479279,330.047607 363.411926,336.997742 351.969086,344.002869 
z"
    />
    <path
      fill="transparent"
      opacity="1.000000"
      stroke="none"
      d="
M227.000000,306.002686 
	C227.000000,304.338257 227.163757,303.145813 226.973953,302.012604 
	C225.521576,293.341309 228.382874,287.826019 236.688950,283.449127 
	C250.608170,276.114410 263.700256,267.210022 277.734528,258.601776 
	C277.855927,260.153961 277.988495,261.063507 277.989136,261.973114 
	C278.001770,280.280396 278.067688,298.588318 277.888336,316.893829 
	C277.871368,318.625793 276.759918,321.079926 275.372559,321.953461 
	C259.540588,331.921204 243.556168,341.646912 227.000000,351.813354 
	C227.000000,336.308746 227.000000,321.405426 227.000000,306.002686 
z"
    />
    <path
      fill="transparent"
      opacity="1.000000"
      stroke="none"
      d="
M316.662842,365.711182 
	C305.522186,372.508759 294.687439,379.096191 283.000031,386.202026 
	C283.000031,383.930023 283.000000,382.540710 283.000000,381.151367 
	C283.000061,363.515686 283.070190,345.879486 282.932678,328.244873 
	C282.909180,325.231415 283.826538,323.601654 286.475708,322.016479 
	C301.158691,313.231018 315.682373,304.179321 330.267517,295.230103 
	C331.326324,294.580414 332.440186,294.020386 333.994843,293.160797 
	C333.994843,313.415588 334.031036,333.023315 333.902496,352.629913 
	C333.894989,353.773773 332.812592,355.289459 331.790100,355.983276 
	C326.933319,359.279144 321.923859,362.350037 316.662842,365.711182 
z"
    />
    <path
      fill="transparent"
      opacity="1.000000"
      stroke="none"
      d="
M334.000000,94.980469 
	C334.000000,108.280190 333.900360,108.111961 322.608124,114.799492 
	C310.536011,121.948868 298.681030,129.464600 286.718658,136.799881 
	C285.790375,137.369095 284.762817,137.776398 283.000000,138.643173 
	C283.000000,135.680130 282.999939,133.423203 283.000000,131.166290 
	C283.000458,114.694977 283.087891,98.222839 282.933228,81.752983 
	C282.899384,78.150673 284.121460,76.097702 287.253723,74.229637 
	C301.148376,65.942970 314.859009,57.348083 328.651611,48.889713 
	C330.027924,48.045700 331.508179,47.371243 334.000000,46.060703 
	C334.000000,62.809986 334.000000,78.647148 334.000000,94.980469 
z"
    />
    <path
      fill="transparent"
      opacity="1.000000"
      stroke="none"
      d="
M366.625061,156.669403 
	C357.577576,162.165787 348.839813,167.464920 339.408478,173.184723 
	C339.241211,171.017776 339.018921,169.461914 339.016693,167.905746 
	C338.991974,150.578781 338.905182,133.250534 339.127319,115.926399 
	C339.154022,113.843567 340.330841,110.875938 341.946320,109.852974 
	C357.170074,100.212891 372.603973,90.904625 387.985016,81.513351 
	C388.375427,81.274979 388.854675,81.182068 389.669189,80.882988 
	C389.792725,82.192245 389.983826,83.280525 389.984955,84.369003 
	C390.003326,102.362396 389.959686,120.355980 390.038483,138.349045 
	C390.050415,141.070557 389.422913,142.760437 386.780762,144.244278 
	C380.011383,148.045959 373.530823,152.361877 366.625061,156.669403 
z"
    />
    <path
      fill="transparent"
      opacity="1.000000"
      stroke="none"
      d="
M277.936401,82.327522 
	C277.980957,101.188576 277.933929,119.679184 278.054962,138.168686 
	C278.074432,141.145599 277.215546,142.775742 274.505524,144.397736 
	C258.940491,153.713669 243.562836,163.342636 227.500778,173.248322 
	C227.286407,171.134964 227.022675,169.733231 227.020401,168.331070 
	C226.992050,150.840271 227.114502,133.348022 226.902771,115.859749 
	C226.862213,112.511719 228.164032,110.677010 230.728287,109.107811 
	C245.251709,100.220222 259.737976,91.271736 274.295929,82.441292 
	C275.245911,81.865051 276.687592,82.099403 277.936401,82.327522 
z"
    />
    <path
      fill="transparent"
      opacity="1.000000"
      stroke="none"
      d="
M283.000000,194.971985 
	C283.000641,179.836288 282.868744,165.193008 283.143524,150.557358 
	C283.185242,148.338120 284.519073,145.212555 286.268280,144.102295 
	C301.041687,134.725296 316.047516,125.714233 330.999451,116.619408 
	C331.661316,116.216805 332.477325,116.067619 333.721100,115.621025 
	C333.828400,117.601364 333.986938,119.182396 333.988586,120.763603 
	C334.006378,137.733597 333.894562,154.704742 334.079987,171.672729 
	C334.121368,175.462234 332.910706,177.404175 329.553009,179.406693 
	C314.808746,188.200043 300.348633,197.469666 285.770782,206.542999 
	C285.239807,206.873474 284.555206,206.957153 283.000000,207.461273 
	C283.000000,203.199249 283.000000,199.333069 283.000000,194.971985 
z"
    />
    <path
      fill="transparent"
      opacity="1.000000"
      stroke="none"
      d="
M44.666046,216.278503 
	C51.358532,218.988678 53.622513,223.211121 53.221493,230.412033 
	C52.458233,244.117477 53.000217,257.895599 53.000217,272.449524 
	C45.860653,268.722900 39.380379,265.402100 32.958649,261.971710 
	C26.053932,258.283325 19.143200,254.596909 12.379140,250.662003 
	C10.936080,249.822510 9.168974,247.930313 9.148943,246.500702 
	C8.921369,230.259613 9.004476,214.014160 9.004476,197.275055 
	C21.110085,203.713715 32.729546,209.893814 44.666046,216.278503 
z"
    />
    <path
      fill="transparent"
      opacity="1.000000"
      stroke="none"
      d="
M53.000046,311.998810 
	C53.000046,318.324127 53.000046,324.149780 53.000046,330.778137 
	C47.039776,327.703644 41.460258,324.913574 35.963913,321.968292 
	C28.905506,318.186066 21.962513,314.186493 14.871846,310.467316 
	C11.597201,308.749725 9.786140,306.928192 9.852145,302.652557 
	C10.075124,288.208832 9.656748,273.755554 9.545640,259.305481 
	C9.538440,258.369141 10.055425,257.428833 10.389814,256.279968 
	C23.748495,263.494781 37.110050,270.600037 50.305676,278.001160 
	C51.702389,278.784546 52.835873,281.285919 52.881344,283.021973 
	C53.129822,292.508881 52.999893,302.005737 53.000046,311.998810 
z"
    />
    <path
      fill="transparent"
      opacity="1.000000"
      stroke="none"
      d="
M40.644318,207.263367 
	C30.527864,201.848282 20.706833,196.676498 10.963334,191.362564 
	C10.058934,190.869308 9.095081,189.477661 9.088103,188.496567 
	C8.972553,172.248978 9.005857,156.000305 9.005857,139.069321 
	C16.510258,142.945084 23.480915,146.451187 30.361168,150.126511 
	C36.550007,153.432510 42.709656,156.807678 48.721577,160.419662 
	C50.143391,161.273865 51.835697,163.186310 51.855923,164.633575 
	C52.078976,180.594116 51.996105,196.558929 51.996105,213.584198 
	C47.911671,211.320328 44.436310,209.394043 40.644318,207.263367 
z"
    />
    <path
      fill="transparent"
      opacity="1.000000"
      stroke="none"
      d="
M59.119022,333.173584 
	C59.036713,316.309448 59.036713,299.867065 59.036713,282.749908 
	C69.545151,288.363281 79.552483,293.707153 89.556778,299.056732 
	C90.273369,299.439941 90.921379,300.061188 91.679558,300.240204 
	C101.309685,302.514008 102.682701,309.075165 102.187607,317.878876 
	C101.463097,330.761993 102.001190,343.716125 102.001190,357.765594 
	C87.188606,349.400543 73.194969,341.497955 59.119022,333.173584 
z"
    />
  </svg>
);

export const Uncheck = ({ height = 24, width = 24, color = '#000000' }: IconProps) => (
  <svg
    fill={color}
    width={`${width}px`}
    height={`${height}px`}
    viewBox="0 0 22 22"
    xmlns="http://www.w3.org/2000/svg"
    id="memory-checkbox-cross"
  >
    {' '}
    <path d="M13 12H14V13H15V15H13V14H12V13H10V14H9V15H7V13H8V12H9V10H8V9H7V7H9V8H10V9H12V8H13V7H15V9H14V10H13V12M18 19H4V18H3V4H4V3H18V4H19V18H18V19M5 5V17H17V5H5Z" />{' '}
  </svg>
);

export const Check = ({ height = 24, width = 24, color = '#000000' }: IconProps) => (
  <svg
    fill={color}
    width={`${width}px`}
    height={`${height}px`}
    viewBox="0 0 22 22"
    xmlns="http://www.w3.org/2000/svg"
    id="memory-checkbox-marked"
  >
    <path d="M3 4H4V3H18V4H17V5H5V17H17V11H18V10H19V18H18V19H4V18H3V4M6 9H8V10H9V11H10V12H12V11H13V10H14V9H15V8H16V7H17V6H18V5H19V4H21V6H20V7H19V8H18V9H17V10H16V11H15V12H14V13H13V14H12V15H10V14H9V13H8V12H7V11H6V9Z" />
  </svg>
);

export const Copy = ({ height = 24, width = 24, color = '#000000' }: IconProps) => (
  <svg fill={color} width={width} height={height} version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g>
      <polygon points="3,2 3,3 2,3 2,19 3,19 3,20 6,20 6,18 5,18 5,17 4,17 4,5 5,5 5,4 7,4 7,2 	" />{' '}
      <path d="M21,9V8h-1V7h-1V6h-1V5h-1V4H9v1H8v16h1v1h12v-1h1V9H21z M20,19h-1v1h-8v-1h-1V7h1V6h3v6h6V19z M18,9v1h-2V8h1v1H18z" />{' '}
    </g>{' '}
  </svg>
);

export const SoundOn = ({ height = 24, width = 24, color = '#000000' }: IconProps) => (
  <svg fill={color} width={width} height={height} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g>
      <polygon points="16,14 17,14 17,10 16,10 16,9 15,9 15,15 16,15 	" />
      <path
        d="M11,3v1h-1v1H9v1H8v1H7v1H6v1H5v1H4v1H3v2h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h2V3H11z M11,16h-1v-1H9v-1H8v-1H7v-2h1v-1h1V9
		h1V8h1V16z"
      />
      <polygon points="19,7 19,6 15,6 15,8 17,8 17,9 18,9 18,15 17,15 17,16 15,16 15,18 19,18 19,17 20,17 20,7 	" />
    </g>
  </svg>
);

export const SoundOff = ({ height = 24, width = 24, color = '#000000' }: IconProps) => (
  <svg fill={color} width={width} height={height} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g>
      <path
        d="M11,3v1h-1v1H9v1H8v1H7v1H6v1H5v1H4v1H3v2h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h2V3H11z M11,16h-1v-1H9v-1H8v-1H7v-2h1v-1h1V9
		h1V8h1V16z"
      />
      <polygon
        points="19,10 19,11 18,11 18,10 16,10 16,12 17,12 17,13 16,13 16,15 18,15 18,14 19,14 19,15 21,15 21,13 20,13 20,12 
		21,12 21,10 	"
      />
    </g>
  </svg>
);

export const Play = ({ height = 24, width = 24, color = '#000000' }: IconProps): ReactElement<any, any> => (
  <svg fill={color} width={width} height={height} viewBox="5 3 14 18">
    {' '}
    <path d="M18,11v-1h-1V9h-2V7h-2V5h-2V3H5v18h6v-1v-1h2v-2h2v-2h2v-1h1v-1h1v-2H18z M13,13v2h-2v2H9v2H7V5h2v2h2v2h2v2h2v2H13z"></path>{' '}
  </svg>
);

export const Repeat = ({ height = 24, width = 24, color = '#000000' }: IconProps): ReactElement<any, any> => (
  <svg fill={color} width={width} height={height} viewBox="3 3 18 18">
    {' '}
    <polygon points="4,6 4,5 5,5 5,4 6,4 6,3 16,3 16,4 17,4 17,5 18,5 18,6 19,6 19,5 19,4 21,4 21,10 15,10 15,8 17,8 17,7 16,7 16,6  	15,6 15,5 8,5 8,6 7,6 7,7 6,7 6,8 5,8 5,16 6,16 6,17 7,17 7,18 8,18 8,19 15,19 15,18 16,18 16,17 17,17 17,16 18,16 18,15 20,15  	20,18 19,18 19,19 18,19 18,20 17,20 17,21 6,21 6,20 5,20 5,19 4,19 4,18 3,18 3,6 "></polygon>{' '}
  </svg>
);

export const BackArrow = ({ height = 24, width = 24, color = '#000000' }: IconProps): ReactElement<any, any> => (
  <svg fill={color} width={width} height={height} viewBox="3 5 18 14">
    {' '}
    <polygon points="12,17 11,17 11,15 9,15 9,13 21,13 21,11 9,11 9,9 11,9 11,7 12,7 12,5 9,5 9,7 7,7 7,9 5,9 5,10 4,10 4,11 3,11  	3,13 4,13 4,14 5,14 5,15 7,15 7,17 9,17 9,19 12,19 "></polygon>{' '}
  </svg>
);

export const SoundGear = ({ height = 24, width = 24, color = '#000000' }: IconProps): ReactElement<any, any> => (
  <svg fill={color} width={width} height={height} viewBox="128 128 256 256">
    <g transform="translate(0.000000,513.000000) scale(0.100000,-0.100000)" stroke="none">
      <path
        d="M2522 3818 c-7 -7 -12 -42 -12 -89 l0 -77 -32 -7 c-18 -4 -69 -24
-114 -44 l-80 -38 -58 54 c-31 29 -63 53 -70 53 -22 0 -206 -191 -206 -214 0
-11 23 -44 52 -73 l52 -53 -28 -57 c-16 -31 -37 -81 -46 -112 l-18 -56 -78 -3
c-43 -2 -84 -8 -91 -14 -14 -11 -19 -228 -6 -228 5 0 117 36 250 81 188 62
243 84 243 97 0 35 59 140 107 189 179 184 479 154 622 -62 104 -159 89 -354
-38 -497 -51 -57 -161 -114 -241 -126 l-55 -7 0 -240 0 -240 66 -3 c46 -2 69
1 77 11 6 7 12 48 14 91 l3 78 56 18 c31 9 81 30 112 46 l57 28 53 -52 c29
-29 62 -52 72 -52 25 0 215 184 215 208 0 10 -24 42 -54 71 l-54 53 38 82 c21
44 41 96 45 114 l7 32 78 0 c54 0 81 4 89 14 8 9 11 60 9 157 l-3 144 -86 3
-87 3 -12 47 c-6 26 -27 78 -46 116 l-34 70 55 56 c30 31 55 62 55 70 0 20
-191 210 -210 210 -8 0 -39 -25 -70 -55 l-56 -55 -70 34 c-38 19 -90 40 -116
46 l-47 12 -3 87 -3 86 -145 3 c-105 2 -149 -1 -158 -10z"
      />
      <path
        d="M2435 2989 c-49 -16 -108 -36 -130 -43 -22 -8 -143 -49 -270 -91
-126 -43 -236 -84 -242 -93 -10 -12 -13 -114 -13 -429 0 -227 -2 -413 -4 -413
-2 0 -24 9 -49 20 -180 80 -427 -17 -427 -167 0 -115 99 -192 257 -201 97 -5
166 13 230 61 74 57 73 47 73 506 l0 409 58 20 c90 33 574 192 584 192 4 0 8
-153 8 -340 0 -187 -4 -340 -8 -340 -4 0 -12 4 -18 9 -21 20 -112 41 -176 41
-158 0 -268 -76 -276 -189 -5 -80 29 -130 118 -174 59 -29 73 -32 160 -32 105
0 168 21 224 73 57 54 56 44 56 636 0 299 -3 551 -6 560 -9 23 -45 19 -149
-15z"
      />
    </g>
  </svg>
);

export const Gear = ({ height = 24, width = 24, color = '#000000' }: IconProps): ReactElement<any, any> => (
  <svg fill={color} width={width} height={height} viewBox="0 0 512 512">
    <g>
      <path
        d="M502.325,307.303l-39.006-30.805c-6.215-4.908-9.665-12.429-9.668-20.348c0-0.084,0-0.168,0-0.252
		c-0.014-7.936,3.44-15.478,9.667-20.396l39.007-30.806c8.933-7.055,12.093-19.185,7.737-29.701l-17.134-41.366
		c-4.356-10.516-15.167-16.86-26.472-15.532l-49.366,5.8c-7.881,0.926-15.656-1.966-21.258-7.586
		c-0.059-0.06-0.118-0.119-0.177-0.178c-5.597-5.602-8.476-13.36-7.552-21.225l5.799-49.363
		c1.328-11.305-5.015-22.116-15.531-26.472L337.004,1.939c-10.516-4.356-22.646-1.196-29.701,7.736l-30.805,39.005
		c-4.908,6.215-12.43,9.665-20.349,9.668c-0.084,0-0.168,0-0.252,0c-7.935,0.014-15.477-3.44-20.395-9.667L204.697,9.675
		c-7.055-8.933-19.185-12.092-29.702-7.736L133.63,19.072c-10.516,4.356-16.86,15.167-15.532,26.473l5.799,49.366
		c0.926,7.881-1.964,15.656-7.585,21.257c-0.059,0.059-0.118,0.118-0.178,0.178c-5.602,5.598-13.36,8.477-21.226,7.552
		l-49.363-5.799c-11.305-1.328-22.116,5.015-26.472,15.531L1.939,174.996c-4.356,10.516-1.196,22.646,7.736,29.701l39.006,30.805
		c6.215,4.908,9.665,12.429,9.668,20.348c0,0.084,0,0.167,0,0.251c0.014,7.935-3.44,15.477-9.667,20.395L9.675,307.303
		c-8.933,7.055-12.092,19.185-7.736,29.701l17.134,41.365c4.356,10.516,15.168,16.86,26.472,15.532l49.366-5.799
		c7.882-0.926,15.656,1.965,21.258,7.586c0.059,0.059,0.118,0.119,0.178,0.178c5.597,5.603,8.476,13.36,7.552,21.226l-5.799,49.364
		c-1.328,11.305,5.015,22.116,15.532,26.472l41.366,17.134c10.516,4.356,22.646,1.196,29.701-7.736l30.804-39.005
		c4.908-6.215,12.43-9.665,20.348-9.669c0.084,0,0.168,0,0.251,0c7.936-0.014,15.478,3.44,20.396,9.667l30.806,39.007
		c7.055,8.933,19.185,12.093,29.701,7.736l41.366-17.134c10.516-4.356,16.86-15.168,15.532-26.472l-5.8-49.366
		c-0.926-7.881,1.965-15.656,7.586-21.257c0.059-0.059,0.119-0.119,0.178-0.178c5.602-5.597,13.36-8.476,21.225-7.552l49.364,5.799
		c11.305,1.328,22.117-5.015,26.472-15.531l17.134-41.365C514.418,326.488,511.258,314.358,502.325,307.303z M281.292,329.698
		c-39.68,16.436-85.172-2.407-101.607-42.087c-16.436-39.68,2.407-85.171,42.087-101.608c39.68-16.436,85.172,2.407,101.608,42.088
		C339.815,267.771,320.972,313.262,281.292,329.698z"
      />
    </g>
  </svg>
);
export const Close = ({ height = 24, width = 24, color = '#000000' }: IconProps): ReactElement<any, any> => (
  <svg fill={color} width={width} height={height} xmlns="http://www.w3.org/2000/svg" stroke={color} viewBox="0.55 5.5 16.93 5.98">
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.272"></g>
    <g id="SVGRepo_iconCarrier">
      <title>1177</title> <defs> </defs>
      <g strokeWidth="0.28900000000000003" fillRule="evenodd">
        <g transform="translate(1.000000, 6.000000)">
          <path
            d="M1.053,4.938 L1.053,4.032 L1.948,4.032 L1.948,4.938 L1.053,4.938 L1.053,4.938 Z M0.048,3.932 L0.048,1.037 L0.953,1.037 L0.953,3.932 L0.048,3.932 L0.048,3.932 Z M1.053,0.938 L1.053,0.032 L1.948,0.032 L1.948,0.938 L1.053,0.938 L1.053,0.938 Z"
            className="si-glyph-fill"
          ></path>
          <path
            d="M7.021,4.979 L7.021,4 L8,4 L8,4.979 L7.021,4.979 L7.021,4.979 Z M8.037,3.941 L8.037,1.037 L8.942,1.037 L8.942,3.941 L8.037,3.941 L8.037,3.941 Z M6.059,3.941 L6.059,1.037 L6.932,1.037 L6.932,3.941 L6.059,3.941 L6.059,3.941 Z M7,0.973 L7,0.001 L7.951,0.001 L7.951,0.973 L7,0.973 L7,0.973 Z"
            className="si-glyph-fill"
          ></path>
          <path
            d="M3.059,4.931 L3.059,0.059 L3.942,0.059 L3.942,4.048 L4.973,4.048 L4.973,4.932 L3.059,4.931 Z"
            className="si-glyph-fill"
          ></path>
          <path
            d="M14.058,4.947 L14.058,0.042 L15.958,0.042 L15.958,0.947 L14.918,0.947 L14.918,2.1 L15.979,2.1 L15.979,2.947 L14.94,2.947 L14.94,4.053 L15.958,4.053 L15.958,4.947 L14.058,4.947 Z"
            className="si-glyph-fill"
          ></path>
          <path
            d="M10.079,4.916 L10.079,4.084 L11.942,4.084 L11.942,4.916 L10.079,4.916 L10.079,4.916 Z M12.007,3.947 L12.007,3.026 L12.943,3.026 L12.943,3.947 L12.007,3.947 L12.007,3.947 Z M11.031,2.964 L11.031,2.021 L11.963,2.021 L11.963,2.964 L11.031,2.964 L11.031,2.964 Z M10.037,1.958 L10.037,1.026 L10.963,1.026 L10.963,1.958 L10.037,1.958 L10.037,1.958 Z M11.079,0.916 L11.079,0.068 L12.942,0.068 L12.942,0.916 L11.079,0.916 L11.079,0.916 Z"
            className="si-glyph-fill"
          ></path>
        </g>
      </g>
    </g>
  </svg>
);
