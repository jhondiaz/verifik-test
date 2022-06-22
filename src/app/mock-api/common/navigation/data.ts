/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id   : 'inicio',
        title: 'Inicio',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/dashboard'
    },
    {
        id   : 'tester',
        title: 'Tablero 01',
        type : 'basic',
        icon : 'heroicons_outline:chart-bar',
        link : '/quick-search'
    },
    {
        id   : 'statusapi',
        title: 'Tablero 02',
        type : 'basic',
        icon : 'heroicons_outline:status-online',
        link : '/statusapi'
    },
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id   : 'inicio',
        title: 'Medio ambiente',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/dashboard'
    },{
        id   : 'tester',
        title: 'Agricultura',
        type : 'basic',
        icon : 'heroicons_outline:chart-bar',
        link :  '/quick-search'
    },
    {
        id   : 'statusapi',
        title: 'Servicios Publicos',
        type : 'basic',
        icon : 'heroicons_outline:table',
        link : '/statusapi'
    },
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'inicio',
        title: 'Inicio',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/dashboard'
    },{
        id   : 'tester',
        title: 'Consulta Rapida',
        type : 'basic',
        icon : 'heroicons_outline:search',
        link : '/quick-search'
    },
    {
        id   : 'statusapi',
        title: 'Status Api',
        type : 'basic',
        icon : 'heroicons_outline:status-online',
        link : '/statusapi'
    },
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'inicio',
        title: 'Inicio',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/dashboard'
    },{
        id   : 'tester',
        title: 'Consulta Rapida',
        type : 'basic',
        icon : 'heroicons_outline:search',
        link : '/quick-search'
    },
    {
        id   : 'statusapi',
        title: 'Status Api',
        type : 'basic',
        icon : 'heroicons_outline:status-online',
        link : '/statusapi'
    },
];
