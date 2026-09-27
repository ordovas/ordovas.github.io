# ordovas.github.io

Personal website and CV of Ignacio Ordovás Pascual: <https://ordovas.github.io>.

A small, dependency-free Jekyll site built directly by GitHub Pages (no Actions,
no Node). Only GitHub Pages–supported plugins are used.

## Editing content

Almost everything lives in `_data/`:

| File | What it controls |
| --- | --- |
| `profile.yml` | Name, role, headline, About text, links |
| `experience.yml` | Jobs (home page summary + full CV bullets) |
| `education.yml` | Degrees and bootcamp |
| `skills.yml` | Skills, certifications, courses |
| `highlights.yml` | "Selected work" cards on the home page |
| `projects.yml` | Work page: case studies, published work, personal projects, archive, filter tags |
| `talks.yml` | Speaking page (grouped by area; research talks also on the Research page) |
| `timeline.yml` | Career spectrum on the home page |
| `publications.yml` | Papers (`featured: true` shows them on the home page) |

Pages: `index.html` (home), `cv/` (printable CV), `work/`, `writing/`,
`speaking/`, `astro/`, `miscellaneous/`. Styles are in `assets/css/main.css`.

Posts for the Writing page go in `_posts/` as `YYYY-MM-DD-slug.md` (published at
`/writing/YYYY/slug/`). For something published
elsewhere, add `external_url` and `external_site` to show a link to the original.

Images go in `assets/img/` (not `_site/`, which is rebuilt from scratch on every
build). Resize photos to about 1600 px wide before adding them.

Remember to replace `files/CV_iop_eng.pdf` when the CV changes.

## Running locally

With Docker (no Ruby needed), using the same Jekyll and plugins as GitHub Pages:

```sh
docker compose up -d      # then open http://localhost:4000
docker compose logs -f    # see build output / errors
docker compose down       # stop
```

The site rebuilds and the browser reloads when you save a file. Changes to
`_config.yml` need a restart (`docker compose restart`). The first start takes a
few minutes while gems install; they're cached in the `ghp-bundle` volume after
that (`docker compose down -v` deletes the cache).
