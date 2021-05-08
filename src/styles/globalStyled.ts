import { createGlobalStyle, GlobalStyleComponent } from 'styled-components';


export default createGlobalStyle `

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        max-height: 100vh;
        max-width: 100vw;
        width: 100%;
        height: 100%;
    }

    html {
        background:  var(--primary);
    }
    
    :root {
        --primary: #282C30;
        --button: #7AC64F;
        --search: #E6E6E7;
        --card: #323232;
        --white: #F7F7F7;
        --title: #F5F5F5; 
    }
`;
