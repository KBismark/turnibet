import { createComponent } from "xolus";

const Head = createComponent({
    template({ storage, parentRef, props}){
        return (
            <template>
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>KBismark - AutoMobiles - Live your dream. Get the finest and most quality automobiles</title>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <meta name="description" content="KBismark - AutoMobiles - Live your dream. Get the finest and most quality automobiles" />
                    <meta name="twitter:image:src" content="https://luxuryautomobile.netlify.app/assets/images/hero-section-small-resized.jpg" />
                    <meta name="twitter:site" content="@KBismark_" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="KBismark - AutoMobiles - Live your dream. Get the finest and most quality automobiles" />
                    <meta name="twitter:description" content="KBismark - AutoMobiles - Live your dream. Get the finest and most quality automobiles" />
                    <meta property="og:image" content="https://luxuryautomobile.netlify.app/assets/images/hero-section-small-resized.jpg" />
                    <meta property="og:image:alt" content="KBismark - AutoMobiles - Live your dream. Get the finest and most quality automobiles" />
                    <meta property="og:site_name" content="KBis.works" />
                    <meta property="og:type" content="object" />
                    <meta property="og:title" content="KBismark - AutoMobiles - Live your dream. Get the finest and most quality automobiles" />
                    <meta property="og:url" content="https://luxuryautomobile.netlify.app" />
                    <meta property="og:description" content="KBismark - AutoMobiles - Live your dream. Get the finest and most quality automobiles" />
                    <link rel="stylesheet" href="/assets/css/index.css" />
                    <link rel="stylesheet" href="/assets/css/home.css" />
                    <link rel="stylesheet" href="/assets/css/slider.css" />
                </head>
            </template>
            
        )
    },
    async templateData({ storage, parentRef, props, done}){
        return <template-data done></template-data>
    }
})

export default Head;



