1) Librerias de Estilos CSS

Material UI (MUI)  https://mui.com/

2) Fuentes

Primaria: Poppins (Google Fonts) (https://fonts.google.com/specimen/Poppins):
    Uso: Títulos y encabezados.

Secundaria: Roboto (Google Fonts) (https://fonts.google.com/specimen/Roboto):
    Uso: Párrafos y contenido general.

3) Paleta de Colores

La idea es mantener la paleta de colores del logo, que es lo mas cercano a las preferencias que tenemos del cliente.

#3F4B8C (Azul oscuro)
    Uso:
        Encabezados principales: Títulos de secciones (NavBar) o páginas.
        Botones importantes: Botones llamativos.
        Elementos destacados: Iconos o detalles en gráficos que queremos resaltar.
    Reglas:
        No deberíamos usar mucho de este color en una sección.
        Siempre es mejor usar texto blanco (#FFFFFF) o un color claro sobre este fondo así se lee sin problemas.

#F2F2F2 (Gris claro)
    Uso:
        Fondo principal.
        Secciones separadas: Para crear contraste entre diferentes partes del contenido.
    Reglas:
        Este color debería ser el fondo por defecto en al menos el 70% del sitio.
        Combinarlo con texto oscuro (como #0D0D0D) es clave para que sea fácil de leer.

#869AA6 (Gris azulado)
    Uso:
        Texto secundario: Descripciones, subtítulos o información que no necesita ser el foco principal.
        Fondos de tarjetas: Tarjetas de información que necesitan ser diferentes.
    Reglas:
        No deberíamos usar más del 20% de este color en una sección.
        Hay que asegurarse de que haya buen contraste si lo usamos de fondo (verificar con links del anexo); el texto oscuro es la mejor opción.

#0D6073 (Verde azulado oscuro)
    Uso:
        Botones secundarios.
        Elementos de acento: Iconos, bordes o líneas que queremos que se noten.
    Reglas:
        Limitar el uso para que no se vea demasiado cargado.
        Mezclarlo con texto blanco o claro es clave para que se lea bien en botones o elementos destacados.

#0D0D0D (Negro)
    Uso:
        Texto principal.
        Líneas divisorias y bordes.
    Reglas:
        Usar para el 60% del texto en la interfaz es una buena práctica.
        No usarlo en fondos, excepto en secciones donde queremos darle un toque.


SIEMPRE: Verificar la combinacion de texto-background con las pautas WCAG: 
-Chequeo rapido: https://webaim.org/resources/contrastchecker/

OPCIONAL: Verificar la accesibilidad del sitio
-Extensión del Chrome: https://www.deque.com/axe/devtools/



4) Tamaño de Fuente

Definir tamaños constantes para mantener la jerarquía visual, algo que la pagina original no tiene.
La idea es ir probando los tamaños de las letras una vez que tengamos desarrollado algo de código.

Usar unidades relativas (rem) en lugar de píxeles (px). Los tamaños de fuente se escalan de manera proporcional según el tamaño de la ventana del navegador (responsive).

Tamaño base: 16px = 1rem

Títulos principales (h1): 2rem - 2.5rem

Subtítulos (h2, h3): 1.5rem - 1.75rem

Texto de párrafo: 1rem - 1.125rem

Texto pequeño (detalles, captions): 0.75rem - 0.875rem


Hay que ver que los tamaños de fuente en dispositivos móviles no pierdan la legibilidad.


5) Espaciado

Espaciado estándar (tamaño base: 16px = 1rem):

Margen entre secciones: 2.5rem - 3.75rem

Margen entre elementos (títulos, párrafos): 1.25rem - 1.875rem

Padding dentro de contenedores: 0.9375rem - 1.5625rem



6) Anexo de Alternativos


Ir agregando links de utilidad o la fuente de lo que estamos justificando como regla.

