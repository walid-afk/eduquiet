// Configuration des variables d'environnement pour le déploiement
module.exports = {
  // Configuration pour l'environnement de production
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'https://eduquiet.vercel.app',
  NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME || 'EduQuiet',
  
  // Configuration pour les métadonnées
  NEXT_PUBLIC_APP_DESCRIPTION: process.env.NEXT_PUBLIC_APP_DESCRIPTION || 'Solution innovante pour réduire les bruits en classe et améliorer la concentration des élèves',
  NEXT_PUBLIC_APP_KEYWORDS: process.env.NEXT_PUBLIC_APP_KEYWORDS || 'éducation, concentration, bruit, technologie, innovation',
  
  // Configuration pour les réseaux sociaux
  NEXT_PUBLIC_OG_IMAGE: process.env.NEXT_PUBLIC_OG_IMAGE || '/assets/hero-hand.svg',
  NEXT_PUBLIC_TWITTER_CARD: process.env.NEXT_PUBLIC_TWITTER_CARD || 'summary_large_image',
  
  // Configuration pour l'analytics (optionnel)
  NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID || '',
};
