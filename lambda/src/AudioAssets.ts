'use strict';

import { Request, IntentRequest, LaunchRequest } from 'ask-sdk-model';
let en = {
    card: {
        title: 'Illinois Radio Reader',
        text: 'A free radio service for the blind and visually impaired community of east central Illinois, provided by Illinois Public Media.',
        image: {
            largeImageUrl: 'https://will.illinois.edu/android-chrome-512x512.png',
            smallImageUrl: 'https://will.illinois.edu/android-chrome-192x192.png'
        }
    },
    url: 'https://icecast.will.illinois.edu/WILL-IRR',
    startJingle: ''
    // startJingle: 'https://s3.amazonaws.com/audio02.will.illinois.edu/irr-indemnification.mp3'
};

let globalAudioData = {
    'en-US': en
};

export function audioData(request: Request) {
    let DEFAULT_LOCALE = 'en-US';
    var locale = (<IntentRequest | LaunchRequest>request).locale;
    if (locale === undefined) {
        locale = DEFAULT_LOCALE
    };
    return globalAudioData[locale];
}