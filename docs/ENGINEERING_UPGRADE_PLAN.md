# Engineering Upgrade Plan — labdelsur

> **Meta:** llevar el repo a **BUENO+** sin rediseño.
> **Foco:** retirar workaround DOM del buscador FAQ, separar contenido/search de UI, limpiar MapKit muerto y modernizar tooling sin copiar ciegamente Santa Bárbara.

## Contrato para la IA ejecutora

- Baseline desktop/mobile de `/`, `/indicaciones`, `/obras-sociales`, `/preguntas-frecuentes`.
- Tests de búsqueda propios de Lab del Sur.
- Preservar logo, imágenes, coberturas, FAQs, horarios, teléfonos, WhatsApp, mapa estático, Motion, responsive y URLs.
- No reemplazar datos por los de Santa Bárbara aunque compartan estructura.

---

# FASE 1 — P0: eliminar workaround DOM/HTML del FAQ

## `components/home/PreguntasFrecuentes.jsx`

Problemas confirmados:
- `respuesta` mezcla strings y React nodes;
- `getTextFromHtml()` usa `document.createElement`, `innerHTML` y `textContent`;
- en SSR devuelve vacío, por lo que la lógica difiere server/client;
- filtro accede a props internas de `dangerouslySetInnerHTML`;
- render puede generar `<p>` anidados;
- HTML crudo no es necesario.

## Target

```ts
interface Faq {
  id: string;
  question: string;
  searchText: string;
  answer: ReactNode | structured data;
}
```

## Pasos
1. Mover FAQs a `data/faqs.ts`.
2. `searchText` siempre string.
3. Reemplazar `dangerouslySetInnerHTML` por JSX/data segura.
4. Eliminar `getTextFromHtml`/DOM parsing.
5. Helper puro accent-insensitive con mismo resultado server/client.
6. IDs estables.
7. Render sin HTML inválido.

## Tests
vacío, pregunta, respuesta, acentos, FAQ con mapa, SSR/pure helper, no results.

---

# FASE 2 — Server pages + search client islands

`app/preguntas-frecuentes/page.js` y `app/obras-sociales/page.js` no deben ser client completas por un input.

Target:

```text
components/search/FaqSearch.client.tsx
components/search/CoverageSearch.client.tsx
```

Header/Navbar/Contacto/Footer fuera del boundary. Mantener UI exacta.

---

# FASE 3 — coberturas/indicaciones propias

- `Coberturas.jsx` ~8.9 KB;
- `Indicaciones.jsx` ~7.5 KB.

## Target

```text
data/coverages.ts
data/indications.ts
lib/normalize-search.ts
```

IDs explícitos, helpers puros, orden/texto exactos. **Nunca sustituir con datasets del repo hermano ni corregir contenido médico automáticamente.**

---

# FASE 4 — Home FAQ vs catálogo

1. Comparar `Preguntas.jsx` con catálogo completo.
2. Usar IDs del mismo catálogo si el copy coincide.
3. Si Home usa versión corta deliberada, modelar `shortAnswer/homeAnswer`.
4. No mantener duplicación sin relación explícita.

---

# FASE 5 — MapKit muerto

## `components/home/Maps.jsx`
La UI usa `Images/image.png` + link Google Maps, no MapKit.

1. Confirmar cero imports de `react-mapkit`.
2. Eliminar dependency si huérfana.
3. No implementar una integración que el producto no usa.
4. Mantener mapa estático/URL.
5. Agregar alt y `_blank`/rel correctos.

`image.png` (~297 KB) tiene prioridad menor que el mapa de Santa Bárbara; optimizar solo si métrica lo justifica.

---

# FASE 6 — assets propios

Inventario inicial: fachada ~564KB, image ~297KB, favicon ~129KB y assets específicos/compartidos.

- import graph por este repo;
- borrar solo huérfanos;
- optimizar activos preservando crop/calidad;
- no copiar decisiones de assets del repo hermano.

---

# FASE 7 — Navbar

Aplicar patrón, no archivo copiado:
- preservar scroll cleanup si ya es correcto;
- retirar state/ref/classList duplicado;
- `NAV_ITEMS` único desktop/mobile;
- button semántico/ARIA;
- distinguir internal vs Resultados Online;
- verificar `/#nosotros` desde rutas secundarias.

Datos/URLs/logo propios de Lab del Sur se conservan.

---

# FASE 8 — reutilización entre repos

Reutilizar únicamente:
- helper de normalización;
- patrón Server page + search island;
- estructura de tests;
- tooling/gates.

No crear monorepo/npm package compartido ahora. Mantener branding/data por repo.

---

# FASE 9 — package/TS/gates

Estado: `my-app`, Next14.2.3/React18/ESLint8, MapKit probable dead, Tailwind a verificar, sin TS/tests/check/CI.

1. import/dependency graph;
2. eliminar MapKit/Tailwind solo si huérfanos;
3. package metadata + Node/package manager;
4. TS en data/search/props;
5. lint/typecheck/unit/E2E/build;
6. `npm run check` + CI;
7. framework upgrade al final.

---

# FASE 10 — layout/SEO/a11y

- `lang="es"/"es-AR"`;
- canonical/dominio/tracking propios de Lab del Sur;
- no copiar metadata de Santa Bárbara;
- labels/focus/aria-live/alt donde aporte;
- mantener visual.

---

# Arquitectura target

```text
app/
  page.tsx
  preguntas-frecuentes/page.tsx
  obras-sociales/page.tsx
  indicaciones/page.tsx
components/search/
  FaqSearch.client.tsx
  CoverageSearch.client.tsx
data/
  faqs.ts
  coverages.ts
  indications.ts
lib/
  normalize-search.ts
```

---

# Orden de PRs

1. baseline + search/import graph;
2. FAQ homogéneo, sin DOM workaround;
3. coverages/indications + client islands;
4. Home FAQ source;
5. MapKit/deps/assets;
6. Navbar/boundaries/a11y;
7. TS/check/CI;
8. framework/SEO/performance.

---

# Definition of Done — BUENO+

- cero DOM/HTML parsing para buscar FAQs;
- mismo comportamiento server/client;
- no `<p>` anidados por React responses;
- catálogos propios tipados;
- MapKit fuera si está muerto;
- pages de búsqueda server-first;
- Navbar funciona en todas las rutas;
- lint + typecheck + tests + E2E + build PASS;
- visual/contenido del laboratorio preservados.

---

# Prompt para la IA ejecutora

```text
Implementá docs/ENGINEERING_UPGRADE_PLAN.md completo. No rediseñes labdelsur y no copies datos/código de Santa Bárbara sin comparar este repo.

Primero eliminá el workaround DOM del FAQ mediante un contrato de datos puro y testeado. Después aislá search client state y mové catálogos a data. Retirá MapKit solo si está huérfano. Reutilizá patrones de la familia, no branding/datasets.

TypeScript/gates antes del framework upgrade. Corré tests/screenshots propios de Lab del Sur en cada fase y no declares terminado hasta cumplir la Definition of Done.
```
