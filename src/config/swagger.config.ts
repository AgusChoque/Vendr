import { DocumentBuilder } from '@nestjs/swagger';

export const setupSwagger = new DocumentBuilder()
  .setTitle('Vendr API')
  .setDescription(
    `Vendr API - Sistema de Gestión de Ventas y Negocios

API RESTful para la gestión integral de negocios, incluyendo:
- Gestión de usuarios y autenticación
- Administración de productos y categorías
- Control de inventario
- Gestión de pedidos y ventas
- Sistema de cupones y promociones
- Reportes y estadísticas de negocio

Documentación técnica completa para desarrolladores.`,
  )
  .setVersion('1.0')
  .addBearerAuth()
  .build();
