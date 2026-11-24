# Despliegue en Netlify

1. Sube este repositorio a GitHub, GitLab o Bitbucket.
2. En Netlify, selecciona **Add new site > Import an existing project**.
3. Escoge el repositorio `fideliza-growth`. Netlify leerá `netlify.toml` automáticamente.
4. En **Site configuration > Environment variables**, crea `CALENDLY_URL` con el enlace real de la reunión, por ejemplo `https://calendly.com/tu-usuario/diagnostico`.
5. Publica. El comando de build genera `out/index.html` con esa URL y Netlify publica esa carpeta.

Para probar el build localmente:

```bash
CALENDLY_URL=https://calendly.com/tu-usuario/diagnostico node scripts/build-netlify.mjs
```

No subas claves privadas al repositorio. `CALENDLY_URL` es pública por definición, ya que se usa en botones del sitio.
