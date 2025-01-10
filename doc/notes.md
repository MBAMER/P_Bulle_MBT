### Mathieu Bamert

## 08.11.2024

# Introduction du projet(45min)

- On peut utiliser un fichier de notes pour toute la classe
- Nommage du commit exemple : feat(snake):Répondre à une touche, écoute(kickoff): Ajouter notes
- Exemple description : [45] [Done]
- Question à se poser pour nommer un commit : "Qu'est ce que j'ai fait pour arriver au résultat?" donc, quoi(sur quoi): qu'est ce qui est fait
- Description des commits (Journal de travail) : [temps] [WIP ou bien DONE]

# Lecture du cahier des charges(30min)

- Créer un snake en JavaScript
- On doit créer le jeu sur une base fournie par le prof
- Il doit avoir un fichier avec les 5 meilleures scores et le temps le plus rapide qui s'affichent après chaque partie joué

# Explication git(20min)

## Staged

- Faire un commit séparé : Selectionner le fichier que l'on veut avec ☒ puis faire le commit avec le fichier souhaité.

## Stashed

- Right click sur : X changed files : en haut de chaque changement individuel ( ATTENTION, ne peut pas stasher des changements idividuels)

## Discard

- Selectionner le ou les fichier a discard puis right click (option discard change)

# Installation de node.js(15min)

- Installation de node.js et de choco

# Apprentissage du JS sur JAVASCRIPT.INFO(90min)

- Il y a deux façon de commenter comme dans C# // pour une ligne et /_ texte _/ pour plusieurs lignes de codes
- Il y a qu'une seul variable Let, avant il existait la variable var
- les constant c'est comme en c# mais il y a une différence entre majuscule et minuscule

## 15.11.2024

# Théorie sur les fichier présent dans la base de code(35min)

- Un fichier de config de vite

- Un fichier gitignore pour ne pas mettre /node_modules dans le repo

- Un fichier package.json qui spécifie les dépendances

- Un fichier package-lock.json qui spécifie les modules installés

- Le html du jeu

- Les différent fichiers JS qui gérent chacun une chose différente (un pour la nourriture, un pour le score, etc)

- Le dossier node_modules qui contient tout ce que a besoin pour faire tourner le serveur

# Modification du code (10min)

- Rajout du mot export pour toutes les fo

# Apprentissage du JS(180min)

- Apprentissage des type de donnée

- Apprentissage des boucles for, do while

- Apprentissage de la déclaration switch

- Apprentissage des comparaison, des opérateurs logiques, des opérateurs de base, mathématiques

- Apprentissage interaction: alert, prompt, confirm

## 22.11.2024

# Daily scrum

- Daily scrum est utile même si on est tout seul pour faire le point sur la situation

# Point JSP

- On doit toujours pouvoir expliquer son code.
- On doit toujours avoir les point jsp sur nous
- Si on sait pas comment expliquer son code -1point
- Si on a pas nos point jsp -2 la semain d'après

# Explication du journal git(45min)

- Commit doivent respecter la structure
- Si on a oublié de faire un commit, on peut ajouter une troisième accolade
- [durée] [status] [correction]
- Ce qui donnerait (ligne de commande car commit vide): git commit -m "feat(snake): Affichage de la tête" -m "[30min] [Done] [2024-11-18]" --allow-empty
- Le token n'apparait qu'une seule fois !

- Explication comment faire le journal sur git

# Création du journal de travail sur github(10min)

- Récupérer le tocken et le mettre dans .config.js

# Explication debugger(15min)

- On débug grâce au mot debugger

- On peut aller pas à pas depuis le debugger

# Explication modèle et vu(40min)

- Explication FPS

- Explication comment et fais la vue dans le jeu
- While (i)
  {
  update,
  render,
  Sleep(Frame-Render Time)
  }
- Modèle Position taille

- unshift: rajoute un élément à la fin de l'objet

# Bat pour l'automatisation du lancement du serveur(10min)

- Créer un fichier .bat pour automatiser le lancement serveur vite

# Apprentissage du JS sur openclasseroom(100min)

- Appréhendez la logique de la programmation
- Les tableaux
- Structure des données
- Modifié des variable

## 29.11.2024

# Apprentissage du JS sur openclasseroom(70min)

- Les conditions
- Les boucles
- Les fonctions
- Intéragir avec une page web

# Génération de food(35min)

- La food se génère de manière complétement aléatoire dans l'interface de jeu
- Elle est dessiner en rouge

# Génération du snake(30min)

-Génération de la tête du snake et elle avance tout seul.

# Fin de ma formation openclasseroom(90min)

- Récupérer les champ de formulaire
- Soumettre un formulaire
- Afficher un message d'erreur
- Mettre en place les règle de validation

## 06.12.2024

# Porte ouverte(225min)

- Porte ouverte de l'etml

## 13.12.2024

# Déplacement du snake(90min)

- Ecrire le code qui nous permets de déplacer le snake avec l'aide des flèche

# Agrandissement du serpent(40min)

- Le serpent a'ingrandis quand la tête du snake mange la food.
- La nourriture se régénère automatiquement dans une position aléatoire quand elle est mangée

# Tableau snake(35min)

- Mon snake était un objet et il fallait faire un tableau. C'est ce que j'ai fais.

# Collision contre le mur(40min)

- J'ai mis les collision du snake avec le mur. Quand le snake fonce dans un mur, on affiche game over

## 20.12.2024

# Cadeau(45)

- Emballage des cadeaux secret santa et le mettre dans la classe N505
- Recevoir les cadeaux

# Collision avec le serpent(120)

- La collision de la tête du snake avec le corp fonctionne.
- ça m'a pris beaucoup de temps car j'utilisais la mauvaise technique.

# Augmentation du score (105)

- Problème le score ne s'incrément pas quand je mange une pomme

## 10.01.2025

# Régler collision avec les murs

- Le snake pouvais sortir du caneva de 1 case.
- J'ai changé le code pour que le serpent meurt quand le serpent se prends un mur

# Le score s'incrémente

- Le score s'incrément.
- J'ai pris énormément de temps à faire ça car j'avais 2 fois une partie du code.
- J'ai du mettre des variable global car mes variable local créer par le paramettre.
