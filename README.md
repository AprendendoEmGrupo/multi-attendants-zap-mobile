### About

The mobile of multi attendance zap project.

### Instructions to run project

- Clone project
- Executed command **yarn** to install modules project needs.
- Install expo app on play store or apple store.
- Executed command **yarn run start** start project.
- Scan qrcode in your terminal using expo app.

### The project structure

```
- assets         
- src            -> when you put source code.
    - hooks      -> when you put your hooks.
    - contexts   -> where you put your contexts.
    - screens    -> where you put code represent one screen in app.
    - components -> where you put code you want share between many components.
    - routes     -> where you put code to setup routes in app.
```

## How to work with Git and Github

- Branch **master** code go to production
- Branch **staging** code go to staging. Warn: in future can have staging environment to validate if feature is ok before send production.
- Branch **develop** all new feature created based this branch.

### Rules 

- To write commit message in english
- Never send your directly to branchs: **master**, **staging** and **develop**
- Always you complete your feature open pull request to branch **develop**
- When create branch for new feature you need use this pattern: feature/shor_description_about_task
