import { createComponent } from "xolus";

const Head = createComponent({
    template({ storage, parentRef, props}){
        return (
            <template>
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Invisible Tipster - Get the best winning tips and predictions daily.</title>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <meta name="description" content="Invisible Tipster - Get the best winning tips and predictions daily." />
                    <meta name="twitter:image:src" content="https://luxuryautomobile.netlify.app/assets/images/hero-section-small-resized.jpg" />
                    <meta name="twitter:site" content="@invisibletipster" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="Invisible Tipster - Get the best winning tips and predictions daily." />
                    <meta name="twitter:description" content="Invisible Tipster - Get the best winning tips and predictions daily." />
                    <meta property="og:image" content="https://luxuryautomobile.netlify.app/assets/images/hero-section-small-resized.jpg" />
                    <meta property="og:image:alt" content="Invisible Tipster - Get the best winning tips and predictions daily." />
                    <meta property="og:site_name" content="KBis.works" />
                    <meta property="og:type" content="object" />
                    <meta property="og:title" content="Invisible Tipster - Get the best winning tips and predictions daily." />
                    <meta property="og:url" content="https://luxuryautomobile.netlify.app" />
                    <meta property="og:description" content="Invisible Tipster - Get the best winning tips and predictions daily." />
                    <link rel="stylesheet" href="/assets/css/index.css" />
                    <link rel="stylesheet" href="/assets/css/home.css" />
                </head>
            </template>
            
        )
    },
    async templateData({ storage, parentRef, props, done}){
        return <template-data done></template-data>
    }
})

export default Head;



