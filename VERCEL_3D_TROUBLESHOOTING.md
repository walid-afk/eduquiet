# 🔧 Dépannage Modèle 3D sur Vercel

Ce guide vous aide à résoudre les problèmes courants avec les modèles 3D sur Vercel.

## ✅ **Problèmes résolus**

### 1. **Configuration des headers pour les fichiers FBX**
- ✅ Ajout de headers spécifiques dans `vercel.json`
- ✅ Configuration du Content-Type pour les fichiers binaires
- ✅ Cache optimisé pour les assets 3D

### 2. **Gestion d'erreurs robuste**
- ✅ Error Boundary pour capturer les erreurs de chargement
- ✅ Fallback avec modèle 3D simplifié
- ✅ Messages d'erreur informatifs

### 3. **Optimisation du chargement**
- ✅ Suspense avec indicateur de chargement
- ✅ Gestion des états de chargement
- ✅ Retry automatique en cas d'échec

## 🚀 **Déploiement sur Vercel**

### Méthode 1 : Déploiement automatique
1. Connectez votre repository GitHub à Vercel
2. Vercel détectera automatiquement Next.js
3. Le fichier `vercel.json` configure les headers automatiquement

### Méthode 2 : Déploiement manuel
```bash
# Installation de Vercel CLI
npm i -g vercel

# Déploiement
vercel --prod
```

## 🔍 **Vérifications post-déploiement**

### 1. Vérifier que le fichier FBX est accessible
```bash
curl -I https://votre-domaine.vercel.app/model.fbx
```

Vous devriez voir :
```
HTTP/2 200
content-type: application/octet-stream
cache-control: public, max-age=31536000, immutable
```

### 2. Vérifier les logs Vercel
- Allez dans votre dashboard Vercel
- Consultez les logs de déploiement
- Vérifiez les logs de fonction si nécessaire

### 3. Tester en local
```bash
npm run build
npm run start
```

## 🐛 **Problèmes courants et solutions**

### Problème : "Module not found: Can't resolve 'hls.js'"
**Solution :** ✅ Résolu dans `next.config.ts`
```typescript
config.resolve.alias = {
  ...config.resolve.alias,
  'hls.js': require.resolve('hls.js'),
};
```

### Problème : Modèle 3D ne se charge pas
**Solutions :**
1. Vérifiez que `model.fbx` est dans `/public/`
2. Vérifiez les headers dans `vercel.json`
3. Testez l'URL directe : `https://votre-domaine.vercel.app/model.fbx`

### Problème : Erreur de chargement en production
**Solutions :**
1. L'Error Boundary affichera un fallback automatiquement
2. Un modèle 3D simplifié sera affiché
3. Consultez la console pour les erreurs détaillées

### Problème : Performance lente
**Solutions :**
1. Le fichier FBX est mis en cache (1 an)
2. Compression automatique par Vercel
3. CDN global pour les assets statiques

## 📊 **Monitoring**

### Vercel Analytics
```bash
npm install @vercel/analytics
```

### Logs personnalisés
Les erreurs sont automatiquement loggées dans la console :
```javascript
console.error('Erreur dans le composant 3D:', error, errorInfo);
```

## 🔧 **Configuration avancée**

### Variables d'environnement
```env
NEXT_PUBLIC_MODEL_URL=/model.fbx
NEXT_PUBLIC_ENABLE_3D=true
```

### Optimisation des performances
- ✅ Lazy loading du composant 3D
- ✅ Suspense avec fallback
- ✅ Error Boundary pour éviter les crashes

## 🆘 **Support**

### En cas de problème persistant :
1. Vérifiez les logs Vercel
2. Testez en local avec `npm run build && npm run start`
3. Vérifiez la taille du fichier FBX (< 10MB recommandé)
4. Consultez la documentation Vercel pour les assets statiques

### Commandes utiles :
```bash
# Vérifier la taille du modèle
ls -lh public/model.fbx

# Tester le build local
npm run build

# Déployer sur Vercel
vercel --prod

# Vérifier les logs
vercel logs
```

---

**🎉 Votre modèle 3D devrait maintenant fonctionner parfaitement sur Vercel !**
