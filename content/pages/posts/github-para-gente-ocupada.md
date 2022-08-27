---
title: GitHub para gente ocupada
excerpt: >-
    Como desarrolladores GitHub se ha vuelto nuestro compañero en 
    el día a día y aunque utilicemos sus comandos a diarios se nos 
    suele olvidar uno que otro en el momento más importante. Es 
    por esto que siempre viene bien tener unos apuntes cerca que te 
    ayuden a recordar. Así que aquí te comparto los míos para que puedas
    ahorrarte un poco del trabajo.
date: '2022-07-07'
thumb_img_path: /images/github.jpg
thumb_img_alt: Fork me on GitHub
content_img_path: /images/github.jpg
content_img_alt: Fork me on GitHub
seo:
    title: GitHub para gente ocupada
    description: Un breve resumen de GitHub para que encuentres lo que necesites en poco tiempo.
    extra:
        - name: 'og:type'
          value: article
          keyName: property
        - name: 'og:title'
          value: GitHub
          keyName: property
        - name: 'og:description'
          value: >-
              Un breve resumen de GitHub para que encuentres lo que necesites en poco tiempo.
          keyName: property
        - name: 'og:image'
          value: /images/github.jpg
          keyName: property
          relativeUrl: true
        - name: 'twitter:card'
          value: summary_large_image
        - name: 'twitter:title'
          value: GitHub
        - name: 'twitter:description'
          value: >-
              Un breve resumen de GitHub para que encuentres lo que necesites en poco tiempo.
        - name: 'twitter:image'
          value: /images/github.jpg
          relativeUrl: true
layout: post
---

# Curso Profesional de Git y Github

# Introducción a Git

Git es un **software de control de versiones** diseñado por **Linus Torvalds**, pensando en la eficiencia y la confiabilidad del mantenimiento de versiones de aplicaciones cuando estas tienen un gran número de archivos de código fuente. En su lugar GitHub es una forja para alojar proyectos utilizando el sistema de control de versiones Git. GitHub sería la red social de código para los programadores, tu propio curriculum vitae.

[https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c4bd4d0e-1b06-43e2-9d67-7aea96fe20bc/estados-git.webp](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c4bd4d0e-1b06-43e2-9d67-7aea96fe20bc/estados-git.webp)

# Comando Básicos de Git

**int**: Arranca el repositorio

**add .**: Agrega todos los archivos que hayan cambiado en la carpeta en la que en ese momento estás.

**add**: Arranca el archivo

**Commit**: Envía los últimos cambios del archivo a la base de datos del sistema.

**status**: Estado en tu base de datos

**show**: Te muestra todos los cambio históricos hechos.

**log <archivo>**: Ves la historia entera de un archivo.

**push:** Te permite enviar hacia otro repositorio remoto lo que estás haciendo. Envías tu repositorio local al servidor.

**mkdir**: _make a directory (Hacer un directorio)_

**git config -l : Te muestra todos tus datos**

**touch**: Crear archivos vacíos

**cat**: Te muestra el contenido de un archivo

**rm**: Borra un archivo sin eliminar su historial del sistema de versiones.

**rm - -cached**: Elimina los archivos del área de _staging_ y del próximo _commit_, pero los mantiene en el disco duro.

**rm - -force**: Elimina los archivos de Git y del disco duro. Puedes recuperar los archivos si es necesario, pero con comandos más avanzados.

**checkout**: Traes los últimos cambios o los cambios que tú quieras hacia tu carpeta.

**merge**: Unes ambas ramas o una rama a la rama _master_.

**reset**: Te permite volver a una versión anterior

**reset <archivo> - -soft**: Vuelves a la versión anterior, pero lo que está en _staging_ queda en _staging_.

**reset <archivo> - -hard**: Todo vuelve al estado anterior (más común).

**reset HEAD**: Este comando saca archivos del área de _staging_. No para borrarlos ni nada de eso, solo para que los últimos cambios de esos archivos no se envíen al último _commit_, a menos que cambies de opinión y los incluyas de nuevo en _staging_ con _git add_.

**log - -stat**: Ves los cambios específicos a través de _commit_.

**checkout**: Para ver cómo era el archivo antes. Si pones _git checkout master_ vuelves como estaba originalmente, si llegas a hacer el _commit_ se borra todo tu avance. Es peligroso, pero no tanto.

# Flujo de trabajo básico en Git

**clone url**: Con el link del repositorio remoto se trae los archivos al directorio de trabajo y al repositorio local.

**fetch**: Traes una actualización del repositorio remoto a tu repositorio local.

**merge**: Fusionas tu última actualización. Te permite crear un nuevo _commit_ con la combinación de dos ramas.

**pull**: Funciona el concepto de _git fetch_ y _git merge_.

## Ramas

Sirven para hacer cambios en los proyectos sin afectar el flujo de trabajo de la rama principal (_master_).

La cabecera o _HEAD_ representan la rama y el _commit_ de esa rama. Esta cabecera aparecerá en el último _commit_ de la rama principal. Pero se puede cambiar al crear una rama (_git branch ramna, git checkout -b rama_) o moverte en el tiempo a cualquier otro _commit_ de cualquier otra rama con los comandos (_git reset id-commit, git checkout rama-o-id-commit_). Es el apuntador al estado actual del repositorio basado en la rama en la que estoy trabajando.

**commit -am**: Solo funciona con los archivos que ya hayas hecho _commit_ previamente.

## Resolución de conflictos

**Git nunca borra nada** a menos que nosotros se lo indiquemos. Cuando usamos los comandos `git merge` o `git checkout` estamos cambiando de rama o creando un nuevo commit, no borrando ramas ni commits (recuerda que puedes borrar commits con `git reset` y ramas con `git branch -d`).

Git es muy inteligente y puede resolver algunos conflictos automáticamente: cambios, nuevas líneas, entre otros. Pero algunas veces no sabe cómo resolver estas diferencias, por ejemplo, cuando dos ramas diferentes hacen cambios distintos a una misma línea. (<<<<<<< HEAD .... —— ....>>>>>>>cabecera)

Esto lo conocemos como **conflicto** y lo podemos resolver manualmente, solo debemos hacer el merge, ir a nuestro editor de código y elegir si queremos quedarnos con alguna de estas dos versiones o algo diferente. Algunos editores de código como VSCode nos ayudan a resolver estos conflictos sin necesidad de borrar o escribir líneas de texto, basta con hundir un botón y guardar el archivo.

Recuerda que siempre debemos crear un nuevo commit para aplicar los cambios del merge. Si Git puede resolver el conflicto hará commit automáticamente. Pero, en caso de no pueda resolverlo, debemos solucionarlo y hacer el commit.

Los archivos con conflictos por el comando `git merge` entran en un nuevo estado que conocemos como **Unmerged**. Funcionan muy parecido a los archivos en estado Unstaged, algo así como un estado intermedio entre Untracked y Unstaged, solo debemos ejecutar `git add` para pasarlos al área de staging y `git commit` para aplicar los cambios en el repositorio.

## Trabajando con repositorios remotos en Github

GitHub es una plataforma que nos permite guardar repositorios de Git que podemos usar como servidores remotos y ejecutar algunos comandos de forma visual e interactiva (sin necesidad de la consola de comandos).

Luego de crear nuestra cuenta, podemos crear o importar repositorios, crear organizaciones y proyectos de trabajo, descubrir repositorios de otras personas, contribuir a esos proyectos, dar estrellas y muchas otras cosas.

El `README.md` es el archivo que veremos por defecto al entrar a un repositorio. Es una muy buena práctica configurarlo para describir el proyecto, los requerimientos y las instrucciones que debemos seguir para contribuir correctamente.

Para clonar un repositorio desde GitHub (o cualquier otro servidor remoto) debemos copiar la URL (por ahora, usando `HTTPS`) y ejecutar el comando `git clone` + la URL que acabamos de copiar. Esto descargara la versión de nuestro proyecto que se encuentra en GitHub.

Sin embargo, esto solo funciona para las personas que quieren empezar a contribuir en el proyecto. Si queremos conectar el repositorio de GitHub con nuestro repositorio local, el que creamos con `git init`, debemos ejecutar las siguientes instrucciones:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5ed1f7bc-3af4-46a3-a869-0c36803887d3/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5ed1f7bc-3af4-46a3-a869-0c36803887d3/Untitled.png)

### Llaves públicas y privadas

Las llaves públicas y privadas nos ayudan a cifrar y descifrar nuestros archivos de forma que los podamos compartir sin correr el riesgo de que sean interceptados por personas con malas intenciones.

La forma de hacerlo es la siguiente:

1. Ambas personas deben crear su llave pública y privada.
2. Ambas personas pueden compartir su llave pública a las otras partes (recuerda que esta llave es pública, no hay problema si la “interceptan”).
3. La persona que quiere compartir un mensaje puede usar la llave pública de la otra persona para cifrar los archivos y asegurarse que solo puedan ser descifrados con la llave privada de la persona con la que queremos compartir el mensaje.
4. El mensaje está cifrado y puede ser enviado a la otra persona sin problemas en caso de que los archivos sean interceptados.
5. La persona a la que enviamos el mensaje cifrado puede usar su llave privada para descifrar el mensaje y ver los archivos.

> Puedes compartir tu llave pública pero nunca tu llave privada.

### Configura tus llaves SSH en local

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e1b5aeb2-8372-45e4-b55a-e084bc6399a2/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e1b5aeb2-8372-45e4-b55a-e084bc6399a2/Untitled.png)

Primer paso: Generar tus llaves SSH. Recuerda que es muy buena idea proteger tu llave privada con una contraseña.

```bash
ssh-keygen -t rsa -b 4096 -C "camilachillan99@gmail.com"
```

Cuando te diga dónde la quieres guardar, tú solo apreta enter, el lugar predeterminado sirve.

**Segundo paso**: Terminar de configurar nuestro sistema.

```bash
#En Windows y Linux:
# Encender el "servidor" de llaves SSH de tu computadora:
eval $(ssh-agent -s)

# Añadir tu llave SSH a este "servidor":
ssh-add ruta-donde-guardaste-tu-llave-privada
#En Mac:
# Encender el "servidor" de llaves SSH de tu computadora:
eval "$(ssh-agent -s)"

# Si usas una versión de OSX superior a Mac Sierra (v10.12)
# debes crear o modificar un archivo "config" en la carpeta
# de tu usuario con el siguiente contenido (ten cuidado con
# las mayúsculas):
Host *
        AddKeysToAgent yes
        UseKeychain yes
        IdentityFile ruta-donde-guardaste-tu-llave-privada

# Añadir tu llave SSH al "servidor" de llaves SSH de tu
# computadora (en caso de error puedes ejecutar este
# mismo comando pero sin el argumento -K):
ssh-add -K ruta-donde-guardaste-tu-llave-privada
```

~~Mi contraseña es Laura2008\*lala~~

### Conexión a GitHub con SSH

Luego de crear nuestras llaves SSH podemos entregarle la llave pública a GitHub para comunicarnos de forma segura y sin necesidad de escribir nuestro usuario y contraseña todo el tiempo.

Para esto debes entrar a la [Configuración de Llaves SSH en GitHub](https://github.com/settings/keys), crear una nueva llave con el nombre que le quieras dar y el contenido de la llave pública de tu computadora.

Ahora podemos actualizar la URL que guardamos en nuestro repositorio remoto, solo que, en vez de guardar la URL con HTTPS, vamos a usar la URL con SSH:

```bash
git remote set-url origin url-ssh-del-repositorio-en-github
```

### Tags y versiones en Git y GitHub

El siguiente código te muestra codo con las ramas.

```bash
git log --all --graph --decorate --oneline
git arbolito="git log --all --graph --decorate --oneline"
```

Los tags o etiquetas nos permiten asignar versiones a los commits con cambios más importantes o significativos de nuestro proyecto.

Comandos para trabajar con etiquetas:

-   Crear un nuevo tag y asignarlo a un commit: **`git tag -a nombre-del-tag id-del-commit`**.
-   Borrar un tag en el repositorio local: **`git tag -d nombre-del-tag`**.
-   Listar los tags de nuestro repositorio local: **`git tag`** o **`git show-ref --tags`**.
-   Publicar un tag en el repositorio remoto: **`git push origin --tags`**.
-   Borrar un tag del repositorio remoto: `git tag -d nombre-del-tag` y **`git push origin :refs/tags/nombre-del-tag`**.

### Manejo de ramas en GitHub

Puedes trabajar con ramas que nunca envías a GitHub, así como pueden haber ramas importantes en GitHub que nunca usas en el repositorio local. Lo importante es que aprendas a manejarlas para trabajar profesionalmente.

-   Crear una rama en el repositorio local: **`git branch nombre-de-la-rama`** o **`git checkout -b nombre-de-la-rama`**.
-   Publicar una rama local al repositorio remoto: **`git push origin nombre-de-la-rama`**.

Recuerda que podemos ver gráficamente nuestro entorno y flujo de trabajo local con Git usando el comando `gitk`.

## Configurar múltiples colaboradores en un repositorio de GitHub

Por defecto, cualquier persona puede clonar o descargar tu proyecto desde GitHub, pero no pueden crear commits, ni ramas, ni nada.

Existen varias formas de solucionar esto para poder aceptar contribuciones. Una de ellas es añadir a cada persona de nuestro equipo como colaborador de nuestro repositorio.

Solo debemos entrar a la configuración de colaboradores de nuestro proyecto (`Repositorio > Settings > Collaborators`) y añadir el email o username de los nuevos colaboradores.

# Flujos de trabajo profesionales

## Flujo de trabajo profesional con Pull requests

En un entorno profesional normalmente se bloquea la rama **master**, y para enviar código a dicha rama pasa por un *code review* y luego de su aprobación se unen códigos con los llamados *merge request*.

Para realizar pruebas enviamos el código a servidores que normalmente los llamamos *staging develop* (servidores de pruebas) luego de que se realizan las pruebas pertinentes tanto de código como de la aplicación estos pasan al servidor de producción con el ya antes mencionado *merge request*.

## Utilizando Pull Requests en GitHub

Es una funcionalidad de github (en gitlab llamada merge request y en bitbucket push request), en la que un colaborador pide que revisen sus cambios antes de hacer merge a una rama, normalmente master.

Al hacer un pull request se genera una conversación que pueden seguir los demás usuarios del repositorio, así como autorizar y rechazar los cambios.

El flujo del pull request es el siguiente

1. Se trabaja en una **rama paralela** los cambios que se desean (`git checkout -b <rama>`)
2. Se hace un **commit** a la rama (`git commit -am '<Comentario>'`)
3. Se **suben** al **remoto** los **cambios** (`git push origin <rama>`)
4. En GitHub se hace el `pull request` comparando la **rama master** con la rama del **fix**.
5. Uno, o varios colaboradores revisan que el **código sea correcto** y dan **feedback** (en el chat del pull request)
6. El colaborador hace los cambios que desea en la **rama** y lo **vuelve a subir** al remoto (automáticamente jala la historia de los cambios que se hagan en la rama, en remoto)
7. Se **aceptan los cambios** en GitHub
8. Se hace **merge** a `master` desde GitHub

**Importante**: Cuando se modifica una `rama`, también se modifica el `pull request`.

![https://static.platzi.com/media/public/uploads/flujodetrabprofbranches_96136aab-1884-4a9a-8b1e-83421630464d.PNG](https://static.platzi.com/media/public/uploads/flujodetrabprofbranches_96136aab-1884-4a9a-8b1e-83421630464d.PNG)

## Creando un Fork, contribuyendo a un repositorio

Un Fork es cuando clonas un repositorio a tu github, debes ir al repositorio al que quieras hacerle Fork y hacer click en Fork. Lo encuentras arriba a la izquierda. (P.D: Dale amor a mi [repositorio](https://github.com/Camilu-png/ulimac) ❤️ Puedes hacerle Fork si quieres)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/921041a0-8c9c-4a87-96a6-960492aa2492/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/921041a0-8c9c-4a87-96a6-960492aa2492/Untitled.png)

Esto solo se puede hacer con repositorios públicos.

Al hacer un Fork de un proyecto en GitHub, te conviertes en dueño del repositorio Fork, puedes trabajar en este con todos los permisos, pero es un repositorio completamente diferente que el original, teniendo alguna historia en común.

Al hacer un Fork, GitHub sabe que se hizo el Fork del proyecto, por lo que se le permite al colaborador hacer pull request desde su repositorio propio.

## Haciendo deployment a un servidor

[https://www.youtube.com/watch?v=UuF_T1WqlrY&ab_channel=Platzi](https://www.youtube.com/watch?v=UuF_T1WqlrY&ab_channel=Platzi)

## Ignorar archivos en el repositorio con .gitignore

No todos los archivos que agregas a un proyecto deberían ir a un repositorio, por ejemplo cuando tienes un archivo donde están tus contraseñas que comúnmente tienen la extensión .env o cuando te estás conectando a una base de datos; son archivos que nadie debe ver.

Una buena práctica es evitar que los archivos binarios pasen.

Creas un archivo llamado .gitignore y en el insertas los nombres de los archivos que quieres ignorar.

```python
*.jpg
```

Con el ejemplo anterior se te ignorarán todos los archivos con la extensión .jpg

## Readme.md es una excelente práctica

README.md es una excelente práctica en tus proyectos, md significa Markdown, que es una especie de código que te permite cambiar la manera en que se ve un archivo de texto.

Lo interesante de Markdown es que funciona en muchas páginas, por ejemplo la edición en Wikipedia; es un lenguaje intermedio que no es HTML, no es texto plano, es una manera de crear excelentes texto formateados.

[Editor.md](https://pandao.github.io/editor.md/en.html)

## Tu sitio web público con GitHub Pages

GitHub tiene un servicio de hosting gratis llamado GitHub Pages, tú puedes tener un repositorio donde el contenido del repositorio se vaya a GitHub y se vea online.

# Múltiples entornos de trabajo en Git

## Git Rebase: reorganizando el trabajo realizado

El comando rebase es **_una mala práctica, nunca se debe usar_**, pero para efectos del curso te lo vamos a enseñar para que hagas tus propios experimentos. Con `rebase` puedes recoger todos los cambios confirmados en una rama y ponerlos sobre otra.

```bash
# Cambiamos a la rama que queremos traer los cambios
git checkout experiment
# Aplicamos rebase para traer los cambios de la rama que queremos
git rebase master
```

## Git Stash: Guardar cambios en memoria y recuperarlos después

Cuando necesitamos regresar en el tiempo porque borramos alguna línea de código pero no queremos pasarnos a otra rama porque nos daría un error ya que debemos pasar ese “mal cambio” que hicimos a stage, podemos usar `git stash` para regresar el cambio anterior que hicimos.

`git stash` es típico cuando estamos cambios que no merecen una rama o no merecen un *rebase* si no simplemente estamos probando algo y luego quieres volver rápidamente a tu versión anterior la cual es la correcta.

### Stashed:

El stashed nos sirve para guardar cambios para después, Es una lista de estados que nos guarda algunos cambios que hicimos en Staging para poder cambiar de rama sin perder el trabajo que todavía no guardamos en un commit

Ésto es especialmente útil porque hay veces que no se permite cambiar de rama, ésto porque porque tenemos cambios sin guardar, no siempre es un cambio lo suficientemente bueno como para hacer un commit, pero no queremos perder ese código en el que estuvimos trabajando.

El stashed nos permite cambiar de ramas, hacer cambios, trabajar en otras cosas y, más adelante, retomar el trabajo con los archivos que teníamos en Staging pero que podemos recuperar ya que los guardamos en el Stash.

### git stash

El comando git stash guarda el trabajo actual del Staging en una lista diseñada para ser temporal llamada Stash, para que pueda ser recuperado en el futuro.

Para agregar los cambios al stash se utiliza el comando:

```bash
git stash
```

Podemos poner un mensaje en el stash, para asi diferenciarlos en git stash list por si tenemos varios elementos en el stash. Ésto con:

```bash
git stash save "mensaje identificador del elemento del stashed"
```

### Obtener elelmentos del stash

El stashed se comporta como una [Stack](<https://es.wikipedia.org/wiki/Pila_(inform%C3%A1tica)>) de datos comportándose de manera tipo [LIFO](https://es.wikipedia.org/wiki/LIFO) (del inglés *Last In, First Out*, «último en entrar, primero en salir»), así podemos acceder al método pop.

El método **pop** recuperará y sacará de la lista el **último estado del stashed** y lo insertará en el **staging area**, por lo que es importante saber en qué branch te encuentras para poder recuperarlo, ya que el stash será **agnóstico a la rama o estado en el que te encuentres**, siempre recuperará los cambios que hiciste en el lugar que lo llamas.

Para recuperar los últimos cambios desde el stash a tu staging area utiliza el comando:

```bash
git stash pop
```

Para aplicar los cambios de un stash específico y eliminarlo del stash:

```bash
git stash pop stash@{<num_stash>}
```

Para retomar los cambios de una posición específica del Stash puedes utilizar el comando:

```bash
git stash apply stash@{<num_stash>}
```

Donde el `<num_stash>` lo obtienes desden el `git stash list`

### Listado de elementos en el stash

Para ver la lista de cambios guardados en Stash y así poder recuperarlos o hacer algo con ellos podemos utilizar el comando:

```bash
git stash list
```

Retomar los cambios de una posición específica del Stash || Aplica los cambios de un stash específico

### Crear una rama con el stash

Para crear una rama y aplicar el stash mas reciente podemos utilizar el comando

```bash
git stash branch <nombre_de_la_rama>
```

Si deseas crear una rama y aplicar un stash específico (obtenido desde `git stash list`) puedes utilizar el comando:

```bash
git stash branch nombre_de_rama stash@{<num_stash>}
```

Al utilizar estos comandos **crearás una rama** con el nombre `<nombre_de_la_rama>`, te pasarás a ella y tendrás el **stash especificado** en tu **staging area**.

### Eliminar elementos del stash

Para eliminar los cambios más recientes dentro del stash (el elemento 0), podemos utilizar el comando:

```bash
git stash drop
```

Pero si en cambio conoces el `índice` del stash que quieres borrar (mediante `git stash list`) puedes utilizar el comando:

```bash
git stash drop stash@{<num_stash>}
```

Donde el `<num_stash>` es el `índice` del cambio guardado.

Si en cambio deseas eliminar todos los elementos del stash, puedes utilizar:

```bash
git stash clear
```

Consideraciones:

-   El cambio más reciente (al crear un stash) **SIEMPRE** recibe el valor 0 y los que estaban antes aumentan su valor.
-   Al crear un stash tomará los archivos que han sido modificados y eliminados. Para que tome un archivo creado es necesario agregarlo al Staging Area con git add [nombre_archivo] con la intención de que git tenga un seguimiento de ese archivo, o también utilizando el comando git stash -u (que guardará en el stash los archivos que no estén en el staging).
-   Al aplicar un stash este no se elimina, es buena práctica eliminarlo.

## Git Clean: limpiar tu proyecto de archivos no deseados

A veces creamos archivos cuando estamos realizando nuestro proyecto que realmente no forman parte de nuestro directorio de trabajo, que no se deberían agregar y lo sabemos.

-   Para saber qué archivos vamos a borrar tecleamos `git clean --dry-run` (En seco)
-   Para borrar todos los archivos listados (que no son carpetas) tecleamos `git clean -f`

## Git cherry-pick: traer commits viejos al head de un branch

Existe un mundo alternativo en el cual vamos avanzando en una rama pero necesitamos en *master* uno de esos avances de la rama, para eso utilizamos el comando `git cherry-pick IDCommit`.

*cherry-pick es una mala práctica* porque significa que estamos reconstruyendo la historia, **usa cherry-pick con sabiduría**. Si no sabes lo que estás haciendo **ten mucho cuidado**.

Este comando permite coger uno o varios commits de otra rama sin tener que hacer un merge completo. Así, gracias a cherry-pick, podríamos aplicar los commits relacionados con nuestra funcionalidad de Facebook en nuestra rama master sin necesidad de hacer un merge.

Para demostrar cómo utilizar git cherry-pick, supongamos que tenemos un repositorio con el siguiente estado de rama:

```bash
a - b - c - d   Master
         \
           e - f - g Feature
```

El uso de git cherry-pick es sencillo y se puede ejecutar de la siguiente manera:

```bash
git checkout master
```

En este ejemplo, commitSha es una referencia de confirmación. Puedes encontrar una referencia de confirmación utilizando el comando git log. En este caso, imaginemos que queremos utilizar la confirmación ‘f’ en la rama master. Para ello, primero debemos asegurarnos de que estamos trabajando con esa rama master.

```bash
git cherry-pick f
```

Una vez ejecutado, el historial de Git se verá así:

```bash
a - b - c - d - f   Master
         \
           e - f - g Feature
```

La confirmación f se ha sido introducido con éxito en la rama de funcionalidad

# Comandos de Git para casos de emergencia

## Reconstruir commits en Git con amend

A veces hacemos un commit, pero resulta que no queríamos mandarlo porque faltaba algo más. Utilizamos git commit --amend, amend en inglés es remendar y lo que hará es que los cambios que hicimos nos los agregará al commit anterior.

## Git Reset y Reflog: úsese en caso de emergencia

¿Qué pasa cuando todo se rompe y no sabemos qué está pasando? Con `git reset HashDelHEAD` nos devolveremos al estado en que el proyecto funcionaba.

-   `git reset --soft HashDelHEAD` te mantiene lo que tengas en staging ahí.
-   `git reset --hard HashDelHEAD` resetea absolutamente todo incluyendo lo que tengas en staging.

**_`git reset` es una mala práctica, no deberías usarlo en ningún momento; debe ser nuestro último recurso._**

### Git nunca olvida, `git reflog`

Git guarda todos los cambios aunque decidas borrarlos, al borrar un cambio lo que estás haciendo sólo es actualizar la punta del branch, para gestionar éstas puntas existe un mecanismo llamado registros de referencia o `reflogs`..La gestión de estos cambios es mediante los hash’es de referencia (o `ref`) que son apuntadores a los commits..Los recoges registran cuándo se actualizaron las referencias de Git en el repositorio local (sólo en el local), por lo que si deseas ver cómo has modificado la historia puedes utilizar el comando:

```
git reflog
```

Muchos comandos de Git aceptan un parámetro para especificar una referencia o “ref”, que es un puntero a una confirmación sobre todo los comandos:

-   `git checkout` Puedes moverte sin realizar ningún cambio al commit exacto de la `ref`
    ```bash
    git checkout eff544f
    ```
-   `git reset`: Hará que el último commit sea el pasado por la `ref`, usar este comando sólo si sabes exactamente qué estás haciendo
    ```bash
    git reset --hard eff544f # Perderá todo lo que se encuentra en staging y en el Working directory y se moverá el head al commit eff544f
    git reset --soft eff544f # Te recuperará todos los cambios que tengas diferentes al commit eff544f, los agregará al staging area y moverá el head al commit eff544f
    ```
-   `git merge`: Puedes hacer merge de un commit en específico, funciona igual que con una branch, pero te hace el merge del estado específico del commit mandado
    ```bash
    git checkout master
    git merge eff544f # Fusionará en un nuevo commit la historia de master con el momento específico en el que vive eff544f
    ```

## Buscar en archivos y commits de Git con Grep y log

A medida que nuestro proyecto se hace grande vamos a querer buscar ciertas cosas.

Por ejemplo: ¿cuántas veces en nuestro proyecto utilizamos la palabra *color*?

Para buscar utilizamos el comando `git grep color` y nos buscará en todo el proyecto los archivos en donde está la palabra *color*.

-   Con `git grep -n color` nos saldrá un output el cual nos dirá en qué línea está lo que estamos buscando.
-   Con `git grep -c color` nos saldrá un output el cual nos dirá cuántas veces se repite esa palabra y en qué archivo.
-   Si queremos buscar cuántas veces utilizamos un atributo de HTML lo hacemos con `git grep -c "<p>"`.
-   Buscar en los commits `git log -S "<p>"`

# Bonus sobre Git y Github

## Comandos y recursos colaborativos en Git y GitHub

-   **git shortlog -sn** = muestra cuantos commit han hecho cada miembros del equipo.
-   **git shortlog -sn --all** = muestra cuantos commit han hecho cada miembros del equipo hasta los que han sido eliminado
-   **git shortlog -sn --all --no-merge** = muestra cuantos commit han hecho cada miembros quitando los eliminados sin los merges
-   **git blame ARCHIVO** = muestra quien hizo cada cosa linea por linea
-   **git COMANDO --help** = muestra como funciona el comando.
-   **git blame ARCHIVO -Llinea_inicial,linea_final**= muestra quien hizo cada cosa linea por linea indicándole desde que linea ver ejemplo -L35,50
-   \*git branch -r \*\*= se muestran todas las ramas remotas
-   **git branch -a** = se muestran todas las ramas tanto locales como remotas

## Tu futuro con Git y GitHub

Ahora queda que hagas tu parte; experimenta, falla, sube y borra y por último haz deploy a tu proyecto y compartelo con la comunidad

Dato: las "M" significan _Alt_, puedes utilizar _Alt_ _A_ para añadir. Tienes que ir probando y arriesgarte
