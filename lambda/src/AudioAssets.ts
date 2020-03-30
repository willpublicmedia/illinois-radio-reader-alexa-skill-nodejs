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
    startJingle: 'https://s3-eu-west-1.amazonaws.com/alexa.maxi80.com/assets/jingle.m4a'
};

let fr = {
    card: {
        title: 'Illinois Radio Reader',
        text: 'Moins de bla bla bla, plus de la la la',
        image: {
            image: {
                largeImageUrl: 'https://will.illinois.edu/android-chrome-512x512.png',
                smallImageUrl: 'https://will.illinois.edu/android-chrome-192x192.png'
            }
    
        }
    },
    url: 'https://icecast.will.illinois.edu/WILL-IRR',
    startJingle: 'https://s3-eu-west-1.amazonaws.com/alexa.maxi80.com/assets/jingle.m4a'
};

let it = {
    card: {
        title: 'La Mia Radio',
        text: 'Meno parlare, più musica',
        image: {
            image: {
                largeImageUrl: 'https://will.illinois.edu/android-chrome-512x512.png',
                smallImageUrl: 'https://will.illinois.edu/android-chrome-192x192.png'
            }
    
        }
    },
    url: 'https://icecast.will.illinois.edu/WILL-IRR',
    startJingle: 'https://s3-eu-west-1.amazonaws.com/alexa.maxi80.com/assets/jingle.m4a'
};

let es = {
    card: {
        title: 'Mi Radio',
        text: 'Menos conversación, más música',
        image: {
            image: {
                largeImageUrl: 'https://will.illinois.edu/android-chrome-512x512.png',
                smallImageUrl: 'https://will.illinois.edu/android-chrome-192x192.png'
            }
    
        }
    },
    url: 'https://icecast.will.illinois.edu/WILL-IRR',
    startJingle: 'https://s3-eu-west-1.amazonaws.com/alexa.maxi80.com/assets/jingle.m4a'
};

let globalAudioData = {
        'en-US': en,
        'en-GB': en,
        'en-CA': en,
        'en-IN': en,
        'en-AU': en,
        'fr-FR': fr,
        'fr-CA': fr,
        'it-IT': it,
        'es-ES': es,
        'es-MX': es
};

export function audioData(request : Request) {
    let DEFAULT_LOCALE = 'en-US';
    var locale = (<IntentRequest | LaunchRequest>request).locale;
    if (locale === undefined) { 
        locale = DEFAULT_LOCALE
    };
    return globalAudioData[locale];    
}

