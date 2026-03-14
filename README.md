# React host and remote

## Getting started

From this directory execute:

- npm run install:deps
- npm run preview

Open your browser at http://localhost:4173/ to see the amazing result

## Mixed React versions

This example now runs:

- `host`: React 19
- `remote`: React 18

It does not share `react` or `react-dom` through Module Federation. Instead the remote exposes a `mount()` API and renders into a DOM node owned by the host. That boundary keeps each app on its own React runtime.
