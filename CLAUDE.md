@AGENTS.md
# CLAUDE.md — Règles du projet

Ce fichier définit les règles de travail pour Claude Code sur ce projet. Lis-le au début de chaque session et respecte-le strictement.

## 🚨 RÈGLES DE WORKFLOW — NON NÉGOCIABLES

### 1. Travail en local uniquement
- **Code directement sur la branche `main` en local.**
- **N'utilise JAMAIS git worktrees** pour ce projet.
- **Ne crée PAS de branches feature** (`feature/xxx`, `dev`, etc.) sauf si je te le demande explicitement.
- **Ne fais PAS de checkout** vers une autre branche sans mon autorisation explicite.
- Toutes les modifications se font dans le dossier de travail courant, sur la branche active.

### 2. Pas de push automatique
- **Ne fais JAMAIS `git push`** sans que je te le demande explicitement.
- Tu peux faire `git add` et `git commit` après une section terminée et validée par moi, mais c'est tout.
- Le push vers GitHub, c'est moi qui le déclenche manuellement.

### 3. Pas de déploiement automatique
- **Ne lance JAMAIS** `vercel deploy`, `vercel`, ou toute commande de déploiement.
- **Ne crée PAS de projet Vercel** depuis le CLI.
- Le déploiement est sous mon contrôle.

### 4. Confirmation avant actions destructives
Demande-moi confirmation avant de :
- Supprimer un fichier ou un dossier
- Modifier `package.json` (ajout/suppression de dépendances)
- Modifier `tailwind.config.ts` une fois qu'il est validé
- Modifier `next.config.js`
- Lancer `npm install` d'un nouveau package
- Faire un `git reset`, `git revert` ou `git rebase`

### 5. Serveur de dev
- **Ne lance PAS `npm run dev` automatiquement.** C'est moi qui gère le serveur.
- Si tu as besoin de vérifier qu'un truc compile, utilise `npm run build` et regarde la sortie, pas le serveur dev.

## 📋 RÈGLES DE CODE

### Structure des fichiers
- Composants de section : `src/components/sections/`
- Composants UI réutilisables : `src/components/ui/`
- Composants shadcn (déjà installés) : `src/components/ui/` (ne pas écraser)
- Utils et helpers : `src/lib/`
- Types TypeScript : co-localisés avec les composants ou dans `src/types/` si partagés

### Conventions
- **TypeScript strict** : interfaces typées pour toutes les props
- **Tailwind only** : pas de CSS modules, pas de styled-components, pas de inline styles sauf cas très précis
- **Mobile-first** : `className="text-base md:text-lg lg:text-xl"` (pas l'inverse)
- **Imports** : utilise l'alias `@/` pour les imports internes
- **Naming** : composants en PascalCase, fichiers en PascalCase pour les composants, kebab-case pour le reste
- **Pas de `any`** en TypeScript sauf cas justifié et commenté

### Animations
- Toutes les animations passent par le composant `AnimatedSection` (à créer en setup) qui wrap Framer Motion
- Pas d'animation pour le plaisir : seulement fade-in + slide-up subtil au scroll
- Respecter `prefers-reduced-motion` (Framer Motion le fait nativement avec `useReducedMotion`)

### Accessibilité — obligatoire
- `alt` descriptif sur toutes les `<Image>`
- `aria-label` sur les boutons icon-only
- Contraste suffisant (vérifier crème sur vert sombre)
- Focus visible sur tous les éléments interactifs
- Navigation clavier qui marche
- `lang="fr"` sur le html

### Performance
- Utiliser `next/image` pour TOUTES les images, jamais `<img>`
- Utiliser `next/font` pour les Google Fonts (Fraunces, Inter, Caveat)
- Lazy loading par défaut pour les images sous le fold
- Pas de bibliothèque lourde si Tailwind/shadcn peut faire le job

## 🗣️ RÈGLES DE COMMUNICATION

### Langue
- **Réponds-moi toujours en français.** Code et commentaires de code peuvent rester en anglais (convention dev), mais tes explications, tes plans, tes messages → français.
- Le contenu textuel du site (titres, paragraphes, boutons) est en français.

### Workflow de réponse
1. Avant de coder une section, **annonce ce que tu vas faire** (1-2 phrases max)
2. Code la section
3. Liste les fichiers créés/modifiés
4. Indique-moi **ce que je dois vérifier visuellement** dans le navigateur
5. **Attends ma validation avant de passer à la section suivante**

### Si tu hésites
- Pose-moi UNE question claire au lieu de partir dans une direction au hasard
- Si tu vois plusieurs façons de faire un truc, propose-moi 2 options en disant laquelle tu recommandes

### Format des réponses
- Concis. Pas de paragraphes inutiles.
- Pas de "Voici ce que j'ai fait : J'ai créé ce fichier qui contient..." → liste les fichiers, point.
- Pas d'emojis dans le code (sauf si demandé), peu d'emojis dans tes messages.

## 📚 RÉFÉRENCES PROJET

### Brief complet
Le brief détaillé du projet est dans `BRIEF.md` à la racine. Si tu as un doute sur la direction artistique, la structure, le contenu ou la palette, **relis BRIEF.md**.

### Stack
- Next.js 14 App Router + TypeScript
- Tailwind CSS
- shadcn/ui (button, card, input, textarea, badge, separator, sheet déjà installés)
- Framer Motion
- lucide-react
- next/font (Fraunces, Inter, Caveat)

### Palette (rappel rapide)
- bg-primary `#1A2E1F`
- bg-secondary `#243D2A`
- bg-elevated `#2D4A33`
- text-primary `#F5F1E8`
- text-secondary `#A8B5A0`
- accent-gold `#C9A961`
- accent-leaf `#A8C97F`
- border-subtle `#3A5240`

## ✅ CHECKLIST AVANT DE DIRE "C'EST FINI" SUR UNE SECTION

- [ ] Le code compile sans erreur (`npm run build` passe)
- [ ] Pas de warning TypeScript
- [ ] Responsive vérifié mentalement (mobile, tablette, desktop)
- [ ] `next/image` utilisé pour toutes les images
- [ ] Alt et aria-labels présents
- [ ] Animations Framer Motion via `AnimatedSection`
- [ ] Le composant est dans le bon dossier
- [ ] L'import est ajouté dans `page.tsx` si la section doit s'afficher

---

**Si tu as compris ces règles, commence ta première réponse par : "Brief et règles lus, je suis prêt." puis enchaîne avec ton plan d'attaque.**