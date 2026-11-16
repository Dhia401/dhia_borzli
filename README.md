# Prosit 1 — Conference App

Lancer le projet avec `npm start` ou `ng serve`, puis ouvrir [http://127.0.0.1:4201/](http://127.0.0.1:4201/). Laisser le terminal ouvert pendant l’utilisation de l’application.

## 1. Structuration de la page d’accueil

`Home` rassemble `Profile`, `FriendList` et `Notifications`. `Header`, `Navigation` et `Footer` sont partagés entre l’accueil et la page Conférences. Chaque composant porte sa propre responsabilité et peut être utilisé dans une autre page.

## 2. Liste des conférences

L’interface `Conference` définit les attributs `id`, `title`, `description`, `date`, `place`, `maxParticipants` et `nbParticipants`. La classe `ConferenceList` contient les données et les actions. Le template HTML gère leur affichage.

- L’interpolation `{{ ... }}` affiche les valeurs. La liaison de propriété `[disabled]` désactive l’inscription quand la conférence est complète. La liaison d’événement `(click)` incrémente `nbParticipants` à chaque inscription possible.
- La liaison bidirectionnelle `[(ngModel)]` synchronise la saisie et le titre recherché. La recherche accepte une partie ou la totalité du titre, indépendamment de la casse.
- Le contrôle de flux natif `@for` parcourt les conférences et `@empty` affiche un message lorsque la liste filtrée est vide. `@if` affiche la description de la conférence sélectionnée.
- La directive `[ngClass]` applique la couleur du bouton selon les places restantes. Le bouton est vert dès 10 places, orange de 1 à 9 places et rouge à 0 place.
- Les pipes `uppercase` et `date` affichent le titre en majuscules et la date au format `dd/MM/yyyy` sans modifier les données.
