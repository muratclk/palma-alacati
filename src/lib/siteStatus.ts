// Ana sayfayi gecici olarak gizlemek icin kullanilan bayrak.
// true  -> /tr ve /en ana sayfasi bombos beyaz bir 404 sayfasi olarak gorunur (HTTP 404).
// false -> eski ana sayfa (Hero, Rooms, Gallery vb.) tekrar gorunur.
// Diger sayfalar (/odalar, /galeri, ...) bu bayraktan etkilenmez.
export const HOME_HIDDEN = true;
