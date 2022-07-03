import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'Modulos',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        icon     : 'apps',
        children : [
            {
                id       : 'reservas',
                title    : 'Reservas',
                translate: 'NAV.RESERVAS',
                type     : 'item',
                //icon     : 'build',
                url      : '/reservas'
            }
        ]
    }
];
