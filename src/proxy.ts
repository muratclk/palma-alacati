import createMiddleware from 'next-intl/middleware';
import {NextResponse} from 'next/server';
import {routing} from './i18n/routing';
import {HOME_HIDDEN} from './lib/siteStatus';

const intlMiddleware = createMiddleware(routing);

// Ana sayfa olarak kabul edilen yollar: "/", "/tr", "/en"
const homePaths = new Set(['/', ...routing.locales.map((locale) => `/${locale}`)]);

// Ana sayfa gizliyken gosterilen bombos beyaz 404 sayfasi (her zaman beyaz, karanlik moddan etkilenmez).
const hiddenHomeHtml = `<!DOCTYPE html>
<html lang="en" style="color-scheme:light;background:#fff">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>404: This page could not be found.</title>
<style>
  html,body{margin:0;padding:0;background:#fff;color:#000}
  body{font-family:system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;height:100vh;display:flex;align-items:center;justify-content:center;text-align:center}
  h1{display:inline-block;margin:0 20px 0 0;padding:0 23px 0 0;font-size:24px;font-weight:500;vertical-align:top;line-height:49px;border-right:1px solid rgba(0,0,0,.3)}
  h2{display:inline-block;font-size:14px;font-weight:400;line-height:49px;margin:0}
</style>
</head>
<body><div><h1>404</h1><div style="display:inline-block"><h2>This page could not be found.</h2></div></div></body>
</html>`;

export default function proxy(request: Parameters<typeof intlMiddleware>[0]) {
  if (HOME_HIDDEN) {
    const pathname = request.nextUrl.pathname.replace(/\/+$/, '') || '/';
    if (homePaths.has(pathname)) {
      // Gercek HTTP 404 koduyla bombos beyaz sayfa don. Eski ana sayfa kodu yerinde durur.
      return new NextResponse(hiddenHomeHtml, {
        status: 404,
        headers: {'content-type': 'text/html; charset=utf-8'}
      });
    }
  }
  return intlMiddleware(request);
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\..*).*)'
  ]
};
