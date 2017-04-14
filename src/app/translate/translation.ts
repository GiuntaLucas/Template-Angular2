import { OpaqueToken } from '@angular/core';

import { LANG_FR, LANG_FR_TRANS } from './fr';
import { LANG_EN, LANG_EN_TRANS } from './en';

export const TRANSLATION = new OpaqueToken('translation');

const DICTIONARY = {
    [LANG_EN]: LANG_EN_TRANS,
    [LANG_FR]: LANG_FR_TRANS
};

export const TRANSLATION_PROVIDERS = [
    {provide: TRANSLATION, useValue: DICTIONARY}
];

