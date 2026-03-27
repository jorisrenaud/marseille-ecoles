# Roadmap — Mobilisation contre la fermeture de 43 classes à Marseille

> Date : 27 mars 2026  
> Auteur : Rico (recherche + synthèse)  
> Pour : Joris Renaud

---

## PARTIE 1 — Synthèse des meilleures pratiques (recherche)

### 1. Envoyer le message à la place de l'utilisateur (server-side sending)

**Référence :** Resistbot (USA), Action Network Letter Campaigns, Quorum Grassroots, CiviClick

Le modèle dominant aux USA pour les campagnes de contact d'élus n'utilise **jamais** le `mailto:`. L'utilisateur entre ses coordonnées, personnalise éventuellement un message pré-rédigé, et **le serveur envoie directement** l'email/fax/courrier au nom du citoyen. C'est le standard de Resistbot (qui a envoyé des millions de messages depuis 2017), d'Action Network (utilisé par les syndicats enseignants UFT, les organisations progressistes), et de Quorum/VoterVoice (utilisés par les grosses associations).

**Pourquoi ça marche :**
- Comptage réel à 100% (chaque soumission = 1 message envoyé garanti)
- Friction minimale (pas besoin d'ouvrir un client mail, de copier-coller)
- Possibilité de varier automatiquement les messages (anti-spam côté récepteur)
- Dashboard en temps réel pour les organisateurs

**Source :** [resistbot.io](https://resist.bot), [actionnetwork.org](https://actionnetwork.org), [quorum.us](https://www.quorum.us/solutions/grassroots-advocacy/)

---

### 2. Le "Ladder of Engagement" — Escalier d'implication progressive

**Référence :** CiviClick, New Media Campaigns, Action Network Advocacy Automation

Le concept central de toutes les grosses campagnes US : ne jamais demander un effort max d'entrée. L'utilisateur monte un escalier :

| Échelon | Action | Effort |
|---------|--------|--------|
| 1 | Lire la page / partager sur les réseaux | Quasi nul |
| 2 | Envoyer un message pré-rédigé (1 clic) | Faible |
| 3 | Laisser son email / rejoindre un groupe | Moyen |
| 4 | Personnaliser son message / témoigner | Moyen-fort |
| 5 | Organiser une action locale | Fort |
| 6 | Devenir relais / porte-parole | Maximum |

**Clé :** Chaque action déclenche automatiquement la suggestion de l'action suivante. Action Network appelle ça "Advocacy Automation" — des séquences email qui guident le supporter vers l'échelon suivant après chaque action.

**Source :** [civiclick.com/mastering-the-ladder-of-engagement-strategy](https://civiclick.com/mastering-the-ladder-of-engagement-strategy/), [newmediacampaigns.com](https://www.newmediacampaigns.com/blog/using-the-ladder-of-engagement)

---

### 3. Les groupes locaux outillés (Local Chapter Toolkit)

**Référence :** Red Wine & Blue / TroubleNation (USA), Moms for Liberty, FCPE France

Red Wine & Blue a créé **TroubleNation** — un programme qui outille des groupes locaux de parents dans les 50 États US. Leur modèle :
- **Formulaire "Start a Group"** → la personne reçoit un kit complet
- **Page dédiée par groupe** avec événements locaux
- **Ressources téléchargeables** : guides, checklists, scripts de réunion, visuels à personnaliser
- **Connexion entre leaders** via un réseau national
- Résultat : 50+ groupes actifs en 2025, taux de victoire de 87% sur les courses school board ciblées en Virginie

**Moms for Liberty** (côté conservateur) a utilisé le même modèle avec encore plus de succès structurel : 300+ chapitres dans 48 États, 130 000 membres, avec un "Parent Pledge" + résolutions à faire adopter localement.

**FCPE en France** : campagne "Mobilisons-nous" (sept. 2025) — fournit aux conseils locaux des affiches, bulletins d'adhésion, kits de rassemblement, mais **pas de plateforme digitale centralisée**. L'outil reste très traditionnel (PDF, email). La FCPE du Tarn a organisé un rassemblement devant la DSDEN à Albi le 5 mars 2025 contre les fermetures — même mécanique que Marseille.

**Source :** [redwine.blue/troublenation](https://redwine.blue/troublenation/), [portal.momsforliberty.org/resources](https://portal.momsforliberty.org/resources3/), [fcpe.asso.fr/campagne](https://www.fcpe.asso.fr/campagne/mobilisons-nous-pour-une-ecole-publique-laique-et-solidaire)

---

### 4. Le compteur social visible (Social Proof Counter)

**Référence :** 5calls.org, Resistbot, pétitions Change.org

5calls.org affiche un compteur global d'appels passés en temps réel. Resistbot affiche le nombre de lettres envoyées. Change.org utilise une barre de progression vers un objectif.

**Pourquoi ça marche :**
- Effet de preuve sociale ("4 327 parents ont déjà agi")
- Barre de progression vers un objectif = urgence + momentum
- Compteur **par école** = compétition positive entre communautés locales
- Le compteur ne ment pas si l'envoi est server-side

**Best practice :** Afficher à la fois le compteur global ET le compteur par école/arrondissement.

**Source :** [5calls.org](https://5calls.org/), Change.org UX patterns

---

### 5. Le kit d'action locale "prêt à l'emploi"

**Référence :** Red Wine & Blue "Parent Playbook", FCPE "Monter une campagne", Popular Comms School Board Resources

Les campagnes qui scalent fournissent un **kit d'organisation téléchargeable** contenant :

1. **Guide pas-à-pas** : comment organiser un rassemblement devant l'école (timeline, checklist)
2. **Templates de communication** : messages WhatsApp/SMS à envoyer aux autres parents, affiche à imprimer
3. **Script de prise de parole** : quoi dire si un journaliste vient, quoi dire aux élus
4. **Visuels personnalisables** : avec nom de l'école, nombre de classes menacées
5. **FAQ juridique** : droits des parents, à qui s'adresser, comment interpeller le DASEN
6. **Formulaire de report** : "J'ai organisé une action, voici ce qui s'est passé" → remonte au site central

Red Wine & Blue appelle ça le "Parent Playbook" et l'a fait télécharger 50 000+ fois.

**Source :** [redwine.blue/taking-back-power](https://redwine.blue/taking-back-power/), [popularcomms.org/school-board-campaign-resources](https://www.popularcomms.org/school-board-campaign-resources)

---

### 6. L'automatisation post-action (Advocacy Automation)

**Référence :** Action Network, Quorum Grassroots

Après chaque action, l'utilisateur reçoit automatiquement :
- Un email de confirmation ("Votre message a été envoyé au DSDEN")
- Une invitation à partager sur les réseaux (avec message pré-rédigé)
- 48h plus tard : "Voulez-vous organiser une action dans votre école ?"
- 1 semaine plus tard : "Réponse du DSDEN ? Dites-nous comment ça avance"

C'est ce qu'Action Network appelle les "supporter journeys" — des séquences automatisées qui maintiennent l'engagement et poussent vers l'échelon suivant.

**Source :** [actionnetwork.org/advocacy-automation](https://actionnetwork.org/advocacy-automation/)

---

### 7. La pression visible et mesurable sur les décideurs

**Référence :** Solidarity Tech, Quorum analytics

Les plateformes pro (Quorum, Solidarity Tech) permettent de montrer **par district/zone** combien de messages ont été envoyés à chaque élu. Cela crée une pression publique mesurable.

**Adaptation Marseille :** Un dashboard par arrondissement montrant combien de parents se sont mobilisés, combien de messages ont été envoyés au DSDEN, combien d'écoles ont organisé des actions. C'est de la data qui peut être utilisée dans les médias, dans les réunions avec les élus, dans les communiqués de presse.

**Source :** [solidarity.tech/solutions/advocacy-software](https://www.solidarity.tech/solutions/advocacy-software)

---

## PARTIE 2 — Roadmap produit par axe

### Axe 3 — UX progressive "Je m'implique" ⭐ PRIORITÉ 1

> **C'est l'axe par lequel commencer.** Il résout les 3 problèmes en même temps : engagement progressif, comptage réel, et structuration par école.

#### Recommandation concrète

**Flow "Je m'implique" en 3 étapes :**

1. **CTA principal** : Bouton "Je m'implique pour mon école" (remplace ou complète le mailto actuel)
2. **Formulaire minimal** : Prénom + Email + Sélection de l'école (dropdown des écoles concernées par les fermetures)
3. **Action immédiate** : Le serveur envoie automatiquement un email personnalisé au DSDEN au nom du parent
   - L'email utilise une des 50 variantes existantes
   - Ajout automatique du nom de l'école et du prénom
   - Envoi via un service transactionnel (Brevo free tier = 300 emails/jour, suffisant pour commencer)
4. **Confirmation** : Page de remerciement avec :
   - "Votre message a été envoyé !" + aperçu du message
   - Compteur mis à jour en temps réel
   - "X parents de [école Y] se sont déjà impliqués"
   - Boutons de partage WhatsApp/Facebook/Twitter avec message pré-rédigé
5. **Post-action** : L'email rejoint la base SQLite existante (ou Brevo list) avec tag école

#### Architecture technique

```
[Bouton "Je m'implique"]
    → Formulaire (prénom, email, école)
    → API endpoint POST /api/implique
        → Stocke en SQLite (email, école, timestamp)
        → Envoie email au DSDEN via Brevo API (variante aléatoire, personnalisée)
        → Incrémente compteur global + compteur école
    → Page confirmation + compteurs mis à jour
```

#### Compteurs visibles sur le site
- **Compteur global** : "2 847 parents mobilisés"
- **Compteur par école** : Carte ou liste avec "École X — 47 parents impliqués"
- Les compteurs sont réels car chaque soumission = 1 email envoyé vérifié

#### Effort technique : 3/5
- Backend : 1 nouvel endpoint API, intégration Brevo (quelques heures)
- Frontend : formulaire + page confirmation + compteurs par école (1 jour)
- Brevo free tier pour commencer, upgrade si > 300/jour
- Pas besoin de changer l'infrastructure existante (SQLite OK)

#### Impact : 5/5
- Résout le problème de tracking (100% des messages comptés)
- Réduit la friction (plus besoin d'ouvrir un client mail)
- Crée la base de données par école (indispensable pour les axes suivants)
- Preuve sociale puissante (compteurs par école)

---

### Axe 2 — Comptage réel des messages envoyés ⭐ PRIORITÉ 2 (intégré dans Axe 3)

> Si l'Axe 3 est implémenté, ce problème est résolu. Cette section couvre l'option de transition si le mailto est conservé temporairement.

#### Analyse des options

| Option | Fiabilité | Effort | UX |
|--------|-----------|--------|----|
| **Server-side sending (Axe 3)** | ✅ 100% | 3/5 | ✅ Meilleure |
| BCC sur adresse dédiée | ⚠️ 60-70% (certains clients mail ne supportent pas le BCC pré-rempli) | 2/5 | ⚠️ Moyenne |
| Bouton "J'ai envoyé" post-mailto | ⚠️ 40-60% (beaucoup oublieront de cliquer) | 1/5 | ❌ Friction |
| Proxy d'envoi (formulaire web → envoi serveur) | ✅ 100% | 3/5 | ✅ Bonne |
| Tracking pixel dans le mail | ❌ Non applicable (c'est un mailto, pas un mail envoyé par nous) | N/A | N/A |

#### Recommandation

**Option A (recommandée) :** Passer directement au server-side sending (Axe 3). C'est le standard industriel, toutes les grosses campagnes US l'utilisent.

**Option B (transition) :** Si on veut garder le mailto en parallèle pendant la transition :
1. Ajouter `&bcc=compteur@marseille-ecoles.fr` dans le mailto
2. Un script IMAP compte les emails reçus en BCC toutes les heures
3. Afficher le compteur BCC + un bouton "J'ai envoyé" pour les cas où le BCC ne passe pas
4. Afficher les deux sources : "Entre X et Y messages envoyés" (BCC = plancher, BCC + déclaratif = plafond)

#### Effort technique : 2/5 (si transition BCC) — Déjà inclus dans Axe 3 sinon

#### Impact : 4/5

---

### Axe 1 — Organiser une action dans son école ⭐ PRIORITÉ 3

> C'est l'étape suivante dans l'escalier d'engagement. Ne l'activer qu'une fois qu'il y a une base de parents identifiés par école (grâce à l'Axe 3).

#### Recommandation concrète

**1. Formulaire "J'organise une action dans mon école"**

Champs :
- Nom + Email (pré-rempli si déjà dans la base)
- École
- Type d'action (dropdown) : Rassemblement devant l'école / Banderole + tractage / Présence au conseil d'école / Interpellation d'élu local / Autre
- Date prévue
- "Je veux recevoir le kit d'organisation" (checkbox, coché par défaut)

**2. Kit d'organisation envoyé par email**

Contenu du kit (basé sur les best practices Red Wine & Blue + FCPE) :

📦 **Le Kit "Parent Organisateur" contient :**

1. **Checklist J-7 / J-3 / Jour J** : étapes concrètes pour organiser un rassemblement
2. **Messages prêts à envoyer** : 
   - SMS/WhatsApp pour mobiliser les parents de l'école
   - Message pour le groupe de parents d'élèves
   - Post réseaux sociaux avec hashtag unifié (#SauvonsNosClasses, #Marseille2026)
3. **Affiche A4 personnalisable** : avec le nom de l'école et le nombre de classes menacées (template Canva ou PDF éditable)
4. **Banderole type** : dimensions, texte recommandé, où l'imprimer pas cher
5. **Script "Si un journaliste me pose une question"** : 3 messages clés à faire passer
6. **Script "Si un élu vient"** : quoi demander concrètement
7. **FAQ juridique** : droit de rassemblement devant une école, déclaration en préfecture si > X personnes
8. **Formulaire de report post-action** : lien vers formulaire "Comment ça s'est passé ?" avec upload photo

**3. Rendre les actions visibles sur le site**

- **Carte des actions** : carte de Marseille avec pins par école + date de l'action prévue
- **Feed d'activité** : "L'école La Castellane organise un rassemblement le 3 avril — 12 parents mobilisés"
- **Photos post-action** : section galerie alimentée par les reports des organisateurs
- **Compteur d'actions** : "17 écoles ont déjà organisé une action"

#### Architecture technique

```
[Formulaire "J'organise"]
    → API POST /api/organise
        → Stocke en SQLite (organisateur, école, type, date)
        → Envoie le kit par email (Brevo transactionnel, template HTML avec pièces jointes ou liens)
        → Notifie les parents déjà inscrits de cette école : "Un parent organise une action dans votre école !"
    → Affichage sur la carte du site
```

**Bonus :** Quand un parent s'inscrit via "Je m'implique" (Axe 3) et qu'une action est déjà prévue dans son école → message automatique : "Un rassemblement est prévu le [date] devant votre école. Vous serez là ?"

#### Effort technique : 4/5
- Kit à rédiger et mettre en page (contenu = 1-2 jours de travail)
- Carte interactive (Leaflet.js + data SQLite = 1 jour)
- Email automatique aux parents de la même école (logique de notification = quelques heures)
- Formulaire de report post-action avec upload photo (1/2 journée)

#### Impact : 4/5
- Transforme des supporters passifs en organisateurs actifs
- Crée de la visibilité médiatique (17 écoles = une vraie histoire pour les médias)
- Effets de réseau : chaque action locale recrute de nouveaux parents

---

## PARTIE 3 — Recommandation finale : par quoi commencer et pourquoi

### Ordre de priorité

| Priorité | Axe | Quoi | Effort | Impact | Délai estimé |
|----------|-----|------|--------|--------|--------------|
| **🥇 1** | Axe 3 | "Je m'implique" + envoi serveur + compteurs par école | 3/5 | 5/5 | 2-3 jours |
| **🥈 2** | Axe 2 | Comptage réel (résolu par Axe 3, ou transition BCC) | 2/5 | 4/5 | Inclus dans Axe 3 |
| **🥉 3** | Axe 1 | "J'organise une action" + kit + carte | 4/5 | 4/5 | 1 semaine |

### Pourquoi commencer par l'Axe 3

1. **Il résout l'Axe 2 gratuitement.** Le server-side sending donne un comptage 100% fiable sans effort supplémentaire.

2. **Il crée la base de données par école.** Sans ça, l'Axe 1 tourne à vide (on ne sait pas qui notifier quand quelqu'un organise une action).

3. **Il réduit la friction maximale.** Le `mailto:` est le plus gros frein à l'action. Beaucoup de parents sur mobile n'ont pas de client mail configuré, ou le message se perd dans les brouillons. Un formulaire web avec envoi serveur = 100% de conversion du formulaire en message envoyé.

4. **Il crée la preuve sociale la plus puissante.** Des compteurs par école en temps réel ("47 parents de l'école X déjà mobilisés") = viralité naturelle via WhatsApp entre parents.

5. **C'est le pattern prouvé.** Resistbot, 5calls, Action Network, Quorum — toutes les plateformes qui ont généré des millions d'actions citoyennes utilisent ce modèle exact.

### Séquence d'implémentation recommandée

```
Semaine 1 (jours 1-3) : Axe 3
├── Jour 1 : Backend (endpoint API + intégration Brevo + stockage SQLite)
├── Jour 2 : Frontend (formulaire, page confirmation, compteurs)
└── Jour 3 : Test + déploiement + migration des 50 variantes de messages

Semaine 2 (jours 4-8) : Axe 1
├── Jour 4-5 : Rédaction du kit d'organisation (contenu)
├── Jour 6 : Formulaire "J'organise" + carte interactive
├── Jour 7 : Email automatique kit + notifications aux parents de l'école
└── Jour 8 : Test + déploiement

En continu :
├── Séquences email post-action (advocacy automation)
├── Ajustement des variantes de messages selon les retours
└── Dashboard médias (stats à partager avec les journalistes)
```

### Note technique : Brevo comme moteur d'envoi

- **Free tier** : 300 emails/jour — suffisant pour le lancement
- **Starter** : 5 000 emails/mois pour 7€/mois si ça décolle
- Brevo est français (conformité RGPD native)
- API simple, bien documentée, templates transactionnels
- Alternative : Resend.com (dev-friendly) ou Amazon SES (le moins cher à volume)

---

## Annexe — Veille à garder en tête

### Ce que fait la FCPE (et ce qu'on peut faire mieux)

La FCPE nationale fournit des supports de mobilisation (affiches, pétitions, communiqués) mais **pas de plateforme d'action digitale**. Leur campagne "Mobilisons-nous" de septembre 2025 reste sur un modèle papier + email. C'est une opportunité : la page Marseille peut devenir la référence d'une mobilisation digitale que la FCPE elle-même n'a pas encore construite.

### Outils US à surveiller

- **Action Network** (actionnetwork.org) : plateforme complète pour les campagnes progressistes, avec letter campaigns, advocacy automation, fundraising. Si le mouvement grandit, c'est l'outil de référence.
- **New/Mode** (newmode.net) : spécialisé dans les campagnes multi-cibles (contacter plusieurs élus en même temps).
- **Solidarity Tech** : analytics par district, très utile pour montrer la pression sur les élus.

### Hashtags recommandés

- `#SauvonsNosClasses`
- `#Marseille2026`
- `#43ClassesMenacées`
- `#EcolePubliqueMarseille`
