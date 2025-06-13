# Vendr 🍽️

Plataforma SaaS de gestión integral para negocios de comida y restaurantes.

## Descripción

Vendr es una plataforma completa diseñada para optimizar la gestión de negocios de comida y restaurantes. Ofrece una solución integral que abarca desde la gestión de pedidos hasta el control de inventario, pasando por la administración de empleados y sucursales.

## Planes y Precios

### Proximamente...

## Características Principales

- **Gestión de Usuarios y Credenciales**

  - Sistema de autenticación seguro
  - Roles y permisos personalizables
  - Gestión de credenciales de empleados

- **Sistema de Órdenes y Pedidos**

  - Proceso de pedidos en tiempo real
  - Seguimiento de estado de pedidos
  - Historial de órdenes

- **Gestión de Productos y Variantes**

  - Catálogo de productos
  - Variantes y modificadores
  - Gestión de precios

- **Sistema de Cupones y Descuentos**

  - Cupones personalizables
  - Descuentos por categoría/producto
  - Control de uso de cupones

- **Gestión de Sucursales y Empleados**

  - Múltiples sucursales
  - Asignación de empleados
  - Horarios y turnos

- **Control de Inventario y Recetas**

  - Gestión de stock
  - Recetas y costos
  - Movimientos de inventario

- **Manejo de Direcciones y Horarios**
  - Direcciones de entrega
  - Horarios de operación
  - Fechas especiales

## Tecnologías Utilizadas

- NestJS
- Prisma
- TypeScript
- PostgreSQL

## Requisitos Previos

- Node.js (v18 o superior)
- PostgreSQL
- npm o yarn

## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/AgusChoque/Vendr.git
cd vendr
```

2. Instalar dependencias:

```bash
npm install
```

3. Configurar variables de entorno:

```bash
cp .env.example .env
```

4. Configurar la base de datos:

```bash
# Aplicar migraciones y actualizar el schema
npx prisma migrate dev

# Generar el cliente de Prisma basado en el schema actualizado
npx prisma generate
```

5. Iniciar el servidor de desarrollo:

```bash
npm run start:dev
```

## Estructura del Proyecto

```
vendr/
├── prisma/           # Modelos y migraciones de la base de datos
├── src/             # Código fuente de la aplicación
├── test/            # Pruebas
└── generated/       # Archivos generados
```

## Contribución

Este es un proyecto propietario. Para contribuir o reportar problemas, por favor contactame.

## Licencia

Este proyecto está bajo una licencia propietaria. Ver el archivo [LICENSE](LICENSE) para más detalles.

## Contacto

¡Hola! Soy el único desarrollador detrás de Vendr. Si te interesa el proyecto, tienes alguna sugerencia o quieres colaborar, ¡me encantaría escucharte! Puedes contactarme a través de:

- Correo: [aguschoque.dev@gmail.com](mailto:aguschoque.dev@gmail.com)
- Linkedin: [Agustin Choque](https://www.linkedin.com/in/agustinchoque/)
- GitHub: [AgusChoque](https://github.com/AgusChoque)
