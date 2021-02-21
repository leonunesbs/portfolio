import React from 'react';
import { Global } from '@emotion/react'

const Fonts: React.FC = () => (
  <Global styles={`
  /*
  * The Typekit service used to deliver this font or fonts for use on websites
  * is provided by Adobe and is subject to these Terms of Use
  * http://www.adobe.com/products/eulas/tou_typekit. For font license
  * information, see the list below.
  *
  * all-round-gothic:
  *   - http://typekit.com/eulas/00000000000000007735c472
  *   - http://typekit.com/eulas/00000000000000007735c479
  *   - http://typekit.com/eulas/00000000000000007735c47d
  * roboto-condensed:
  *   - http://typekit.com/eulas/00000000000000007735a08d
  *
  * © 2009-2020 Adobe Systems Incorporated. All Rights Reserved.
  */
 /*{"last_published":"2021-02-21 18:15:14 UTC"}*/
 
 @import url("https://p.typekit.net/p.css?s=1&k=scj3vjm&ht=tk&f=26840.37144.37146.37148&a=20316651&app=typekit&e=css");
 
 @font-face {
 font-family:"Roboto";
 src:url("https://use.typekit.net/af/ea559d/00000000000000007735a08d/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/ea559d/00000000000000007735a08d/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/ea559d/00000000000000007735a08d/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");
 font-display:auto;font-style:normal;font-weight:400;
 }
 
 @font-face {
 font-family:"All Round Gothic";
 src:url("https://use.typekit.net/af/b66ee9/00000000000000007735c472/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/b66ee9/00000000000000007735c472/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/b66ee9/00000000000000007735c472/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");
 font-display:auto;font-style:normal;font-weight:400;
 }
 
 @font-face {
 font-family:"All Round Gothic";
 src:url("https://use.typekit.net/af/a7d147/00000000000000007735c479/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("woff2"),url("https://use.typekit.net/af/a7d147/00000000000000007735c479/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("woff"),url("https://use.typekit.net/af/a7d147/00000000000000007735c479/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("opentype");
 font-display:auto;font-style:normal;font-weight:500;
 }
 
 @font-face {
 font-family:"All Round Gothic";
 src:url("https://use.typekit.net/af/8a5ca3/00000000000000007735c47d/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3") format("woff2"),url("https://use.typekit.net/af/8a5ca3/00000000000000007735c47d/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3") format("woff"),url("https://use.typekit.net/af/8a5ca3/00000000000000007735c47d/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3") format("opentype");
 font-display:auto;font-style:normal;font-weight:600;
 }
 
 .tk-roboto-condensed { font-family: "Roboto",sans-serif; }
 .tk-all-round-gothic { font-family: "All Round Gothic",sans-serif; }
  `} />
)

export default Fonts