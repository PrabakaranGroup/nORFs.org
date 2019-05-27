# nORFs
nORFs prabakaran lab repository

---

### installation:

```git clone https://github.com/PrabakaranGroup/nORFs.org.git```

```npm install``` or ```yarn install```

go to node_modules/feature-viewer/lib/index.js and change line 15 & 16

from
> require("bootstrap/js/tooltip.js");
> require("bootstrap/js/popover.js");

to
> require("bootstrap/js/src/tooltip.js");
> require("bootstrap/js/src/popover.js");

### start:

```npm run start``` or ```yarn run start```


### deploy

```npm run build```
```firebase deploy```
