# wanna.hot – strona produktowa (statyczna, Vercel)

Bez frameworka i bez zależności: zwykłe pliki HTML w folderze `public/`. Zakup odbywa się na Allegro.

## Struktura
- `public/index.html` – strona główna
- `public/produkt/balia-opalana-drewnem/index.html` – strona produktu
- `public/regulamin/`, `public/polityka-prywatnosci/` – **puste szablony, wstaw własne dokumenty**
- `public/config.js` – **jedyne miejsce z adresem oferty Allegro** (`allegroUrl`)
- `public/site.js` – wstawia adres Allegro we wszystkie przyciski „Kup na Allegro”
- `scripts/check.mjs` – sprawdza linki, obrazy i brakujące dane
- `vercel.json`, `package.json` – konfiguracja wdrożenia

## Uruchomienie lokalnie
```
npm run check      # raport: błędy i rzeczy do uzupełnienia
npm start          # podgląd na http://localhost:3000
```

## Publikacja na Vercel (krok po kroku)
1. **Uzupełnij dane** (lista poniżej). Najważniejsze: `public/config.js` → `allegroUrl`.
2. Załóż konto na vercel.com i konto na github.com.
3. Utwórz nowe repozytorium na GitHub i wgraj do niego zawartość tego folderu (przycisk „Add file → Upload files”).
4. Na Vercel: **Add New → Project** → wybierz repozytorium → **Deploy**. Ustawienia z `vercel.json` wczytają się same (Framework: Other, Output: `public`).
5. **Wdrożenie produkcyjne zatrzyma się z błędem**, jeśli zostały nieuzupełnione pola lub brak adresu Allegro. To zabezpieczenie. Podglądy (Preview) przechodzą zawsze.
6. Domena: Vercel → Project → **Settings → Domains** → dodaj `wanna.hot` i ustaw rekordy DNS, które Vercel pokaże, u rejestratora domeny.
7. Po wdrożeniu kliknij każdy przycisk „Kup na Allegro” i sprawdź, czy otwiera właściwą ofertę.

Bez GitHuba: `npm i -g vercel`, potem `vercel --prod` w tym folderze.

## Do uzupełnienia przed publikacją
- `public/config.js`: adres oferty Allegro
- cena (strona główna i produkt, 3 miejsca w tekście `[TWOJA CENA]`)
- dane firmy w stopce: nazwa, NIP, adres (obie strony)
- warunki i czas dostawy, czas nagrzewania (własna próba), zalecana odległość od budynków
- treść regulaminu i polityki prywatności (dla faktycznie prowadzonej działalności)
- własne zdjęcia (galeria, „Jak to działa”, lifestyle) i pisemna zgoda na zdjęcie, którego używasz
- jeśli adres domeny jest inny niż wanna.hot: zmień go w `<link rel="canonical">`, `og:url`, `og:image`, `sitemap.xml`, `robots.txt`
