# Contributing to Angular Challenges

I would love for you to contribute to this project and help make it better than it is today. I will update the the detail later. For now, just a simple pull request will works.

## Create a new challenge

Each challenge is organized under `src/app` folder. You can mimic the content of a challenge to create your own.

You can also run the following command to create a new component:

```
// remove --dry-run if you want to create the component for real
npx nx generate @nx/angular:component access-grandchild-component
  --inlineStyle=true
  --inlineTemplate=true
  --nameAndDirectoryFormat=derived
  --no-interactive
  --directory apps/challenges/src/app
  --dry-run
```
