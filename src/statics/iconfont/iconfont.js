import { createGlobalStyle } from "styled-components";

const GlobalFontStyle = createGlobalStyle`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1553654572962'); /* IE9 */
    src: url('./iconfont.eot?t=1553654572962#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAO8AAsAAAAAB+AAAANuAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqDGIJ5ATYCJAMQCwoABCAFhG0HSxvuBhEVnPPIfhzkpsybM3LRNaF8vrHvwQOPp72P9rJkEM92dqDQzS25yd6MiDC8kvPg9/nSpf1JL4Q9AfA/x0yX1mD5bTaXaqooHO0NcNw6sMi6O5ADvgM5Qb9leK1L4aD3QwAmkaRHFC9ZvjoGGjJMAKJ9m1ZNMDJKdEOmwEDgrJirERNxYMhR8iwwIfh98YaswgCJQ0HGVm5ZojmFn7s9z6kGuwZT30PAn04PyItAAekBDaJ1pbEpKgqmR2GanTU5AQMDCVO1BDzP6XJhwVFkBv2XBwKFBOGEpLsDkB2HFDx340wIeB7Aq5LnhDQkwAdRGJDSB9gIwYXzIRKNDHQ3jADLK7hPyys3al2/XvPq1erXrtU4caNQi2lj1tgdC+QbN2qxq97gZdZ0r262s+rUnR5pzg2u3WSPNQZMYR40R58Xdq1adnBm/hpbVzJ4lTXmiBC1arXKVMu2zZrTp1Ldv3mNmfHeG5aeDg2sNzusVVCtOWt2bEuoseta+vyNY7SWOVIpp+ZfubLAFSvggHgBsGHThx3jHzmdq8KKh0Vet+W6tTJV2uvW2f73XLtO2Sp17VoOtix1Kbn4pRaerq3Y9bYFK9WQRZu2KXhD/ynYrfux3JmEo0jGTik123g0sMoVzvu0Ya3uZ0IC/oQmfEqI5J/7/M7ywJjsdYUUIyviLaKP9gt58WDUljJ35nTZHt4vKNgK3BL6sky2uot+xDNkRIWSARVL0BkA11J1UTUMqC51UBG2VR014Af+DREjd6xp5JX/m2FpAG4e0unB7rI13eT8BX5n/u/idyzRlpCotDZEnGebNJlTw5CAiQn8pCj4cn8KRUDndBAYBCQgSUMEKAzikRqbHhxYZAcnBoXAJB2lFlv40RWF0G5AWoYhEHizASSeHACFN+eQGnsPHATyDpx4CwUmNYXfmhaJQhBUMUYt+IbtD8HQbplGVJh5Q3dmzWlhQHkhH8EDYzfkIyvuyFNMOD5uErFgmQos6DDMmaAyRTTSeZE6972t+qLOUGkUxRi14Bu2PwRDu/Uqiyr8/A3dmTU3FDVZX8hHaB/GbuiAXGV7p6JbeeT4uEnEgmUqsCA9ZhokqNW9Ihrp/AB/nXtcznaVdcsryhuuAkzIVVpIoYQWDjy6oWbj27E1VP+XIvp6E+xUgUeTwt40AAA=') format('woff2'),
    url('./iconfont.woff?t=1553654572962') format('woff'),
    url('./iconfont.ttf?t=1553654572962') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1553654572962#iconfont') format('svg'); /* iOS 4.1- */
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
`;

export default GlobalFontStyle;


