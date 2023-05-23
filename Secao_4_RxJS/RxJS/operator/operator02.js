const { XMLHttpRequest } = require("xmlhttprequest");
const { ajax } = require("rxjs/ajax");
const { map, concatAll } = require("rxjs/operators");

const obs$ = ajax({
  createXHR: () => new XMLHttpRequest(),
  url: "https://api.github.com/users/BrunoColturato/repos",
}).pipe(
  map((resp) => JSON.parse(resp.xhr.responseText)),
  concatAll(),
  map((repo) => repo.full_name)
);

obs$.subscribe(console.log);
