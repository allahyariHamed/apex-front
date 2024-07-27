import { i18nRouter } from 'next-i18n-router';
import i18nConfig from '../i18nconfig';

export function middleware(request: any) {
    return i18nRouter(request, i18nConfig);
}

export const config = {
    matcher: '/((?!api|static|.*\\..*|_next).*)'
};