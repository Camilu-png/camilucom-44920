---
title: Platzi Game
excerpt: >-
  Este proyecto es parte de una colección que estoy realizando para demostrar mis conocimientos en preprocesadores, en este caso el sitio web fue creado utilizando el preprocesador Pug.
date: '2021-11-18'
thumb_img_path: https://i.imgur.com/sQtudkS.png
thumb_img_alt: Platzi Game
content_img_path: https://i.imgur.com/sQtudkS.png
content_img_alt: Platzi Game
seo:
  title: Platzi Game
  description: Este proyecto es parte de una colección que estoy realizando para demostrar mis conocimientos en preprocesadores, en este caso el sitio web fue creado utilizando el preprocesador Pug.

  extra:
    - name: 'og:type'
      value: article
      keyName: property
    - name: 'og:title'
      value: Platzi Game
      keyName: property
    - name: 'og:description'
      value: >-
        Este proyecto es parte de una colección que estoy realizando para demostrar mis conocimientos en preprocesadores, en este caso el sitio web fue creado utilizando el preprocesador Pug.
      keyName: property
    - name: 'og:image'
      value: public/images/pug.png
      keyName: property
      relativeUrl: true
    - name: 'twitter:card'
      value: summary_large_image
    - name: 'twitter:title'
      value: Platzi Game
    - name: 'twitter:description'
      value: >-
        Este proyecto es parte de una colección que estoy realizando para demostrar mis conocimientos en preprocesadores, en este caso el sitio web fue creado utilizando el preprocesador Pug.
    - name: 'twitter:image'
      value: public/images/pug.png
      relativeUrl: true
layout: proyect
---

## Preprocesador Pug de HTML

Este post se trata del preprocesador Pug, así que me daré el lujo de solamente explicar por qué hice lo que hice al utilizar Pug, dejándo de lado HTML o CSS.

### ¿Qué es Pug?

Es un preprocesador de HTML, es decir, ayuda a crear una página web de una manera más rápida y sencilla. Ya que permite reutilizar código, lo que facilita el mantenimiento de la página web y la velocidad en la que se crea el proyecto. Sin mencionar su sintaxis simple y que está basado en JavaScript.

### ¿Por qué una carpeta con componentes?

Quitándo de lado lo hermosa que se ve esa carpeta con pequeños Pugs reunidos:

![Carpeta de componentes](https://i.imgur.com/4WviKnS.png)

Lo realicé de esta forma porque necesitaba modularizar el código y decidí que la mejor manera de hacer esto era dejar los componentes en una carpeta a parte y dejar los archivos.pug de las páginas en la carpeta raíz.

### Analizando el código

Para comprender bien la importancia de la reutilización de código es necesario verlo por partes, partiendo por los componentes y luego por las páginas.

#### configuraciones.pug

Comenzamos con lo más extenso. 

`-var` se utiliza para inicializar las variables en el código, puede ser un solo valor como en el caso de `usuario` o un arreglo como en el caso de `títulos`. Tal vez por ahora no le veas la importancia, pero si tuvieras un sitio web con muchas páginas web y necesitaras modificar el nombre de la página y estuvieras trabajando con HTML puro, entonces tendrías que modificar todas las páginas y buscar una por una si utilizan el título. 

Ya lo he hecho y es bastante tedioso, pero gracias a Pug puedes simplemente modificar el nombre en la variable y el código se actualizará. Es casi mágico.

~~~pug
-var títulos = ["PlatziGames", "Título principal"]
-var subtitulos = ["Título 1", "Título 2", "Título 3"]
-var usuario = "Camilú"
-var enlaces = ["Acerca", "Noticias", "Contacto"]
~~~

#### Mixins

Pero la magia no se acaba ahí, ya que Pug también te permite crear bloques reutilizables gracias a los mixins. 
En este caso necesitaba crear varios contenedores que contuvieran una imagen, su título respectivo y un contenido. Puedes ver lo que tenía que hacer más abajo.

![Fotos](https://i.imgur.com/J9KMKnj.png)

Para realizar esto en un HTML se hace de la siguiente forma: 

P.D: No necesitas ver detenidamente el código, es para que comprendas la dimensión de lo que tendrías que escribir si utilizaras HTML puro.

~~~html
<div class="caja">
  <div class="caja__imagen"><img src="images/imagen.png"/></div>
  <div class="caja__contenido">
    <h3>Título 1</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem debitis est possimus placeat nesciunt omnis, earum aut voluptatibus laborum veritatis natus incidunt quisquam dolor deserunt ut pariatur temporibus fugiat nisi?</p>
  </div>
</div>
<div class="caja">
  <div class="caja__imagen"><img src="images/imagen.png"/></div>
  <div class="caja__contenido">
    <h3>Título 2</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem debitis est possimus placeat nesciunt omnis, earum aut voluptatibus laborum veritatis natus incidunt quisquam dolor deserunt ut pariatur temporibus fugiat nisi?</p>
  </div>
</div>
<div class="caja">
  <div class="caja__imagen"><img src="images/imagen.png"/></div>
  <div class="caja__contenido">
    <h3>Título 3</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem debitis est possimus placeat nesciunt omnis, earum aut voluptatibus laborum veritatis natus incidunt quisquam dolor deserunt ut pariatur temporibus fugiat nisi?</p>
  </div>
</div>
~~~

Como ves son muchas lineas de código, si tuviera la necesidad de agregar más contenedores después de unos meses me costaría encontrar la parte del código que debo copiar, pegar y después modificar. Pero no todo está perdido, los mixin de Pug pueden ayudarte en este trabajo.

~~~pug
mixin caja(imagen, titulo, contenido)
    .caja
        .caja__imagen: img(src="images/"+imagen)
        .caja__contenido
            h3=titulo
            p=contenido
~~~

Los mixin son fáciles de comprender, tal vez el código de arriba no lo entiendes todavía, pero tal vez lo que viene más adelante te ayude un poco:

~~~pug
mixin nombre(atributos)
    {Código reutilizable}
~~~

Ahora que ya comprendes la estructura de los mixin voy a explicarte cómo funciona lo que está en su interior.

* `.caja` se refiere a que se crea un `div` con la clase `caja`
* `.caja__imagen: img(src="images/"+imagen)` se refiere a que se crea un `div` con la clase `caja__imagen` y dentro de él se crea un `img` con la imagen que le pasemos como parámetro. Como la imagen está dentro de la carpeta images, entonces la ruta será `images/imagen.png`. Por lo que se concadenan las dos variables con `+`. Como la clase `caja__imagen` solo tiene un hijo se pueden utilizar dos puntos.
* `.caja__contenido` se refiere a que se crea un `div` con la clase `caja__contenido` y dentro de este se crea un `h3` con el título que le pasemos como parámetro y un `p` con el contenido que le pasemos como parámetro.

##### ¿Y cómo utilizo esto en mi archivo Pug?

En el archivo que quieras utilizar tu mixin debes de escribir lo siguiente:

~~~pug
+caja("imagen.png", subtitulos[0], "Lorem ipsum...")
+caja("imagen.png", subtitulos[1], "Lorem ipsum...")
+caja("imagen.png", subtitulos[2], "Lorem ipsum...")
~~~

En la parte del Lorem ipsum solo escribí la primera parte para que no te confundieras, pero entre comillas debería de ir todo el texto que quieras agregar.
Entonces, para repasar, la sintaxis que debes utilizar es la siguiente:

~~~pug
+nombre(paramentros)
~~~

Vaya, con todo esto ya visto ya eres casi un experto en Pug. Y eso que solamente he logrado explicarte un archivo de los que he creado. Pero bueno, confío en que puedas decifrar el resto del código por tu cuenta, recuerda que los links al repositorio y a las páginas están más abajo.

Pero todavía no terminamos, te queda una cosa más que saber. No puedes irte de aquí sin conocer los `include`, `block` y `extend`.

#### include

El siguiente código es lo que utilizo en mi archivo `plantilla.pug`, que como supondrás es la plantilla de mi página web. Es decir que con esta ya tengo definido mi `header` y `footer`.

~~~pug
include configuraciones.pug
doctype html
html
    include head.pug
    body
        include header.pug
        include footer.pug
~~~

En el código de mi plantilla utilizo `include nombre.pug` esto quiere decir que pug va al nombre del archivo que estoy llamando y pega las líneas de código que tiene adentro. Por ejemplo, el primer include queda de la siguiente forma: 

~~~pug
-var títulos = ["PlatziGames", "Título principal"]
-var subtitulos = ["Título 1", "Título 2", "Título 3"]
-var usuario = "Camilú"
-var enlaces = ["Acerca", "Noticias", "Contacto"]
mixin caja(imagen, titulo, contenido)
    .caja
        .caja__imagen: img(src="images/"+imagen)
        .caja__contenido
            h3=titulo
            p=contenido
doctype html
html
    include head.pug
    body
        include header.pug
        include footer.pug
~~~

#### block

Ahora que ya conoces el `include` tengo que confesarte que te mentí. La verdad es que el código que te mostré de `plantilla.pug` no está completo, debería de lucir así:

~~~pug
include configuraciones.pug
doctype html
html
    include head.pug
    body
        include header.pug
        block contenidos
        include footer.pug
~~~

Como ves le faltaba la linea `block contenidos`, esto sirve para poder agregar un bloque de código más adelante. Ya que en realidad la plantilla no puede estar completa sin el `header`, el `main` y el `footer`. Debes imaginar que `block contenidos` es el main, por ahora no hay nada, pero debes creer que lo estará.

#### extend

Te presento mi archivo `landing.pug`, como ves la primera línea es `extend componentes/plantilla.pug`, esto quiere decir que va a ir al archivo `plantilla.pug`, va a copiar y pegar todo el código que ya se tiene en ese archivo, pero va a permitir modificar lo que contiene `block`.

Para modificar el interior de `block contenidos` se necesita escribir el nombre del bloque a modificar y agregar lo que se quiere hacer.

~~~pug
extend componentes/plantilla.pug
block contenidos
	main
		section.intro
			.intro__imagen: img(src="images/imagen.png")
			include componentes/intro.pug
		.contenido
            +caja("imagen.png", subtitulos[0], "Lorem ipsum...")
            +caja("imagen.png", subtitulos[1], "Lorem ipsum...")
            +caja("imagen.png", subtitulos[2], "Lorem ipsum...")
~~~

Esto permite reutilizar el código para cuando quieras crear otra página, por ejemplo este es el archivo de `homepage.pug` que también utiliza `plantilla.pug`.

~~~pug
extend componentes/plantilla.pug 
block contenidos
    .homepage
        include componentes/menu.pug
        include componentes/intro.pug
~~~

Y felicidades, ya puedes llamarte un conocedor de Pug. Ahora solo debes crear tu propio proyecto y conocer sus maravillas por tu cuenta.

### Links

*   [Github](https://github.com/Camilu-png/Platzi-Game)
*   [Platzi Game Landing](https://camilu-png.github.io/Platzi-Game/landing.html)
*   [Platzi Game Home](https://camilu-png.github.io/Platzi-Game/homepage.html)

![HTML](https://img.shields.io/badge/HTML-orange?style=plastic) ![PUG](https://img.shields.io/badge/PUG-ea9999?style=plastic) ![CSS](https://img.shields.io/badge/CSS-blue?style=plastic)