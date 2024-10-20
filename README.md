# ♟️ ***USERINTERFACE - API*** ♟️
# **Interface utilisateur fonctionnant avec une API**

## 📋 **Fonctionnalités**

- **Meilleur film** :
  - Affiche le meilleur film eselon le `imdb_score` et le nombre de votes;

- **Meilleurs films** :
  - Sort 6 meilleurs films selon le `imdb_score` et le nombre de votes;

- **Catégories** :
  - Affiche la catégorie "Histoire";
  - Affiche la catégorie "Action";
  - Affiche la catégorie choisie parmi 25 proposées;

## 🛠 **Prérequis**

Avant de commencer, assurez-vous d'avoir les éléments suivants installés :

- Un **navigateur web** moderne (Chrome, Firefox, etc.) pour tester l'application;
- Un éditeur de code (comme [Visual Studio Code](https://code.visualstudio.com/), [Atom](https://atom.io/), ou [Sublime Text](https://www.sublimetext.com/)) pour modifier le code;
- Avoir une connexion Internet pour accéder à l'API;
- Vous devez utiliser l'API disponible à cette adresse :
  - **API** : [OCMovies-API-EN-FR](https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR.git);

## 📂 **Installation**

1. **Clonez le dépôt API** :
   Clonez le dépôt contenant le projet de l'API en utilisant la commande suivante :
   ```bash
   git clone "https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR.git" ./api

2. **Clonez le dépôt APP** :
   Clonez le dépôt contenant le projet de l'APP en utilisant la commande suivante :
   ```bash
   git clone "https://github.com/siwax74/P6_INTERFACE.git" ./app

## 🚀 **Lancement de l'application**
1. Assurez vous d'avoir les deux dépôts clonés dans le même dossier.
  ```bash
  Votre_dossier/
                api/
                app/
  ```

2. Depuis votre terminal de commande, lancez l'API en utilisant la commande suivante :
  ```bash
  python -m venv env
  source env/bin/activate # Sur Mac/Linux
  env\Scripts\activate    # Sur Windows
  cd api
  pip install -r requirements.txt
  python manage.py create_db
  python manage.py runserver
  ```
2. Ouvrez le dossier templates :
- Cliquer-droit sur le fichier [home.html](/app/templates/home.html);
- Ouvrir le fichier avec votre serveur de développement local. (Exemple : Live Server);

## 🛠 **Maintenance et Améliorations Futures**

Voici quelques améliorations prévues pour les versions futures :
- Création d'une barre de recherche;
- Ajout de bandes annonces;
- Ajout de publicités;

## 📄 **Licences**

Ce projet est sous licence MIT. Consultez le fichier [LICENSE](./LICENSE) pour plus d'informations;

## 👨‍💻 **Auteur**

Développé par [DGEY].

N'hésitez pas à contribuer en ouvrant une issue ou en soumettant une pull request !