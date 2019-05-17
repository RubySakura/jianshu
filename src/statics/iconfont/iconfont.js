import { createGlobalStyle } from "styled-components";

const GlobalFontStyle = createGlobalStyle`
  @font-face {
    font-family: "iconfont";
    src: url('./iconfont.eot?t=1554779631096'); /* IE9 */
    src: url('./iconfont.eot?t=1554779631096#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAASUAAsAAAAACOAAAARFAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDMgqEdIQtATYCJAMUCwwABCAFhG0HUhvDB8gekgQk4AcFEhIgAYDyIbb1vZlBjx22g1+1FSE/ykDFPuQq+NdZxkW3PPBc7t8aeO/wTGZgaRSNBRZQovGhN7kGCMgE///fO23aBpsXKJc1Bw3vUyfAaAJl4RibFsgDLpAS5RzA7pZ9GAiAq7QRGYYnFyES6KMIgOw0jx1iwkyoYBKizlqwMAa5w0IMj6MvAjjF+zz5oT4RoCwR9Imz2yEXep/Wz5vZ4anDsd3BQTKcEwC7DGCAjQAByKXQHcCC9EYMl7sLegGciKJDdUr7vODz5lSKSL4hLTf+8AABwVAgKXR1OknuzQjwudUSR5o0GEGgKYARDJpmZEAB1+UFOPIeAtLQKSs9jBJQtK1FsaDKKu5WH+B+I6kkErZYbDEeX3om2aOedcINZijDTCYVJGKxLG5LX+R+acvWsyv5hcWb7Q9IJwA84I/y418mpqKY/PjOpTuvxeEP6YQnCFEUT41imtx29plYbFxL5650rr/y+dLCbeeXeYqUC264565VS/fFNx7Ejz+7aNs5JxRsOetczseeEvvYdtU9RTfFx+JJ5RGdFhj3luJLz8Xr7lybf3OiPWHjscVnY7XSCWflbz7z+MKtZ18gdW6WCQJtumEiuviNNy6xFYwRQnEJBNj2w9DKj6zW68oGyyoTZnjTjXQPNW+6yXTRvPEmZrI9N96IR90jr60dfE3NTDn6hK97Zon2O7TupPBPd9R4qrWGWPqqw+tsWsYOaaK3/dOdivFCScE/pat+WlWJ/+qLI/SRExq3EkqOnUZ2AeJ5JV98cNwy9s4F57vLDyoqlgqX0i/HGrZe9odvn5JjpoYLpodQ/480fsnoCWxr8dbjyehpkrdqfO/IRNUZLaWOmWPzWr95cXZA2LnysRXjQ/ueEKoY8gYG5ZmVCvga+L22efaXPF/O+eN9T/ZXjiJthb5uzczEZd7BumN/AJC6kr3KdnrsVPQoA9tkW9gh2Rej31nJX/IddGzq711ZnX9REgAAb75e/QNCKVNAc/Gr1kCW/BOShmWCItMtllgqtcSSx2IwZgaVazjgT/Dnen8YbUHjQoAQFURA7aUCGNFKvEDeCBaSRrAS9QC3wchySR4dQ+I0AOsdRQCR7RagMj0CTLaX8AL5PbAo9B1YZceAswV5G0pWp/EBXbUbqkt2HCBrznDIbdoM7hfPq559AnY9LvNYNlWPajG5rro2nRtRQ6o+xJTovp56w3DLbj0clIeJ49RAICxH9LBPdRrVXsOItNfUuIteVO0MB8EN0KnsDCoXmcMBZBqnsBC3U93AM++fp/LYR4CdXoEp89uodFFa+7I61Wob4EfUoUaYS+ketS+PegaDmxrmpgsLkg3DqQoY6TBZpLifj8rJUM3bIRnRroas5G6qrp5eG7zHLQCcfqMloIQRgViIFRlX1a47vZvqNjnDkQNonz39LASx3l7V6ddCQjSihQAAAAA=') format('woff2'),
    url('./iconfont.woff?t=1554779631096') format('woff'),
    url('./iconfont.ttf?t=1554779631096') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1554779631096#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .iconsearch-1-copy:before {
    content: "\e609";
  }

  .iconAa:before {
    content: "\e636";
  }

  .iconicon-checkin:before {
    content: "\e615";
  }
  .iconspin:before {
    content: "\e606";
  }
`;

export default GlobalFontStyle;


