# 🚀 Guide de Déploiement - EduQuiet

Ce guide vous explique comment déployer votre application Next.js sur différentes plateformes d'hébergement.

## 📋 Prérequis

- ✅ Build fonctionnel (`npm run build`)
- ✅ Dépendances installées (`npm install`)
- ✅ Configuration Next.js optimisée

## 🌐 Plateformes d'hébergement supportées

### 1. **Vercel (Recommandé)**

Vercel est la plateforme optimale pour Next.js.

#### Déploiement automatique :
1. Connectez votre repository GitHub à Vercel
2. Vercel détectera automatiquement Next.js
3. Le fichier `vercel.json` configure automatiquement le déploiement

#### Déploiement manuel :
```bash
# Installation de Vercel CLI
npm i -g vercel

# Déploiement
vercel --prod
```

### 2. **Netlify**

#### Configuration :
- Le fichier `netlify.toml` est déjà configuré
- Connectez votre repository GitHub à Netlify
- Netlify utilisera automatiquement la configuration

#### Déploiement manuel :
```bash
# Installation de Netlify CLI
npm i -g netlify-cli

# Déploiement
netlify deploy --prod
```

### 3. **Railway**

#### Configuration :
- Le fichier `railway.json` est configuré
- Connectez votre repository GitHub à Railway
- Railway détectera automatiquement Node.js

#### Déploiement :
1. Créez un compte sur Railway
2. Connectez votre repository
3. Railway déploiera automatiquement

### 4. **Render**

#### Configuration :
- Utilisez le `Dockerfile` fourni
- Connectez votre repository GitHub à Render
- Sélectionnez "Web Service" et "Docker"

### 5. **Docker (Local/Server)**

#### Build et exécution :
```bash
# Build de l'image Docker
docker build -t eduquiet .

# Exécution du conteneur
docker run -p 3000:3000 eduquiet
```

## 🔧 Variables d'environnement

Créez un fichier `.env.local` avec les variables suivantes :

```env
NEXT_PUBLIC_APP_URL=https://votre-domaine.com
NEXT_PUBLIC_APP_NAME=EduQuiet
NEXT_PUBLIC_APP_DESCRIPTION=Solution innovante pour réduire les bruits en classe
NEXT_PUBLIC_APP_KEYWORDS=éducation, concentration, bruit, technologie
NEXT_PUBLIC_OG_IMAGE=/assets/hero-hand.svg
NEXT_PUBLIC_TWITTER_CARD=summary_large_image
```

## 🚨 Résolution des problèmes

### Problème de build :
```bash
# Nettoyer et réinstaller
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Problème avec hls.js :
- Le fichier `next.config.ts` contient déjà la configuration pour résoudre ce problème
- Si le problème persiste, exécutez : `npm install hls.js @types/hls.js`

### Problème de mémoire :
```bash
# Augmenter la mémoire Node.js
export NODE_OPTIONS="--max-old-space-size=4096"
npm run build
```

## 📊 Monitoring et Analytics

### Vercel Analytics :
```bash
npm install @vercel/analytics
```

### Google Analytics :
Ajoutez votre ID GA dans les variables d'environnement :
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 🔒 Sécurité

Tous les fichiers de configuration incluent :
- Headers de sécurité (X-Frame-Options, X-XSS-Protection, etc.)
- Configuration HTTPS
- Protection contre les attaques courantes

## 📈 Optimisations

### Performance :
- ✅ Images optimisées avec Next.js
- ✅ Code splitting automatique
- ✅ Compression gzip/brotli
- ✅ Cache des assets statiques

### SEO :
- ✅ Métadonnées optimisées
- ✅ Open Graph tags
- ✅ Twitter Cards
- ✅ Sitemap automatique

## 🆘 Support

En cas de problème :
1. Vérifiez les logs de déploiement
2. Testez en local avec `npm run dev`
3. Vérifiez que le build fonctionne avec `npm run build`
4. Consultez la documentation de votre plateforme d'hébergement

---

**🎉 Votre application est maintenant prête pour le déploiement !**
