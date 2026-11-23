# Conferencia

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.29.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
"# WorkshopAngular_DAS" 

## Prosit 1

La page d’accueil réutilise les composants Header, Navbar, Profil, Friends, Notifications et Footer du projet. ConferenceList affiche les conférences définies par l’interface Conference, dans le dossier Models.

- L’interpolation affiche les informations. La liaison de propriété [disabled] désactive le bouton d’une conférence complète et (click) déclenche l’inscription.
- [(ngModel)] synchronise la recherche avec la saisie et permet de modifier les noms des amis.
- @for parcourt les conférences, @empty gère une liste vide et @if affiche les détails selon la sélection.
- [ngClass] applique le vert à partir de 10 places, l’orange de 1 à 9 places et le rouge quand la conférence est complète.
- Les pipes uppercase et date affichent les titres en majuscules et les dates au format dd/MM/yyyy, sans modifier les données.

La recherche accepte une partie ou la totalité du titre. Chaque inscription augmente nbParticipants de 1 tant qu’il reste une place.
