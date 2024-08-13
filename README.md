# Art-Portfolio

## Descriere

Art-Portfolio este o aplicație web care permite artistilor digitali să își gestioneze și să își prezinte lucrările. Aplicația include funcționalități pentru încărcarea și afișarea lucrărilor, gestionarea titlurilor, descrierilor și a link-urilor către site-urile clienților.

## Tehnologii folosite
- **Frontend:** React, Material-UI
- **Backend:** NestJS
- **Bază de date:** În această versiune, nu există o bază de date, toate datele sunt gestionate în memorie. Poate fi extinsă ulterior pentru a folosi o bază de date (de exemplu, MongoDB).
- **Gestionarea fișierelor:** Multer pentru încărcarea fișierelor în backend

## Caracteristici
- Adăugare, editare și ștergere de lucrări din portofoliu.
- Vizualizare lucrări sub formă de listă/grid.
- Încărcare imagini pentru lucrările din portofoliu.
- Navigare către site-ul clientului pentru fiecare lucrare.
- Posibilitatea de a ascunde/afișa lucrările.

## Instalare și Rulare
Poți descărca și instala Node.js și npm de aici: [Node.js official site](https://nodejs.org/).

**Instalare pachete pentru backend**:
```
cd backend
npm install
npm install @nestjs/common @nestjs/core @nestjs/platform-express @nestjs/mongoose @nestjs/testing @nestjs/mapped-types
npm install typescript@latest @nestjs/core@latest @nestjs/common@latest typeorm@latest
```
**Instalare pachete pentru frontend**:
```
cd ../frontend
npm install
npm install axios
npm install @mui/material @emotion/react @emotion/styled
```
## Rulare
**1. Pornire Backend:**
```
cd backend
npm run start:dev
```
Backend-ul va rula pe http://localhost:3000.

**2. Pornire Frontend:**
```
cd frontend
npm start
```
Frontend-ul va rula pe http://localhost:3001.





