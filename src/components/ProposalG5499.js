import React from 'react';
import './ProposalG5499.css';

const ProposalG5499 = () => {
  return (
    <div className="proposal-container">
      {/* Hero Section */}
      <div className="proposal-hero">
        <div className="hero-content">
          <div className="hero-header">
            <div className="logo-section">
              <div className="logo-container">
                <img src="/logo.png" alt="Goldstein Systems" className="company-logo" />
              </div>
            </div>
            <div className="proposal-meta">
              <p className="date">17 de Septiembre del 2025</p>
              <p className="recipient">Enviado a: Demy Govea</p>
            </div>
          </div>
          <div className="hero-title-section">
            <h1 className="hero-title">Propuesta de Desarrollo</h1>
            <h2 className="hero-subtitle">Sitio Web de Ecommerce</h2>
            <div className="hero-divider"></div>
            <p className="hero-description">
              Solución completa de desarrollo web para plataforma de comercio electrónico 
              con diseño personalizado, integración de pagos y panel de administración.
            </p>
          </div>
        </div>
      </div>

      <div className="proposal-content">

        <div className="confidentiality-notice">
          <p>
            Esta propuesta es propiedad de Goldstein Systems LTD (la "Goldstein") y no debe ser divulgada fuera del destinatario previsto, ni duplicada, utilizada o revelada, en su totalidad o en parte, para ningún propósito distinto al de evaluar esta propuesta. Si se adjudica un contrato a la Compañía como resultado de, o en relación con, esta propuesta, el destinatario tendrá el derecho de duplicar, usar o divulgar los datos únicamente en la medida en que se indique en el contrato resultante y sujeto a las limitaciones de la Ley de Libertad de Información del Reino Unido de 2000 y cualquier otra ley o reglamento aplicable en el Reino Unido. Esta propuesta contiene secretos comerciales, información financiera o comercial confidencial y datos personales que están exentos de divulgación bajo la Ley de Libertad de Información y otra legislación relevante. En consecuencia, ninguna parte de este documento debe ser liberada sin consultar previamente con Goldstein Systems LTD. Esta información se proporciona de manera confidencial y está sujeta a que las partes lleguen a términos y condiciones mutuamente acordados, incluida la aceptación de cualquier limitación descrita en este documento.
          </p>
        </div>

        <div className="table-of-contents">
          <h2>Tabla de Contenidos</h2>
          <ul>
            <li><a href="#supuestos">Supuestos y Divulgación</a></li>
            <li><a href="#alcance">Alcance del Proyecto</a></li>
            <li><a href="#cronograma">Cronograma del Proyecto</a></li>
            <li><a href="#precio">Precio</a></li>
            <li><a href="#entregables">Entregables</a></li>
            <li><a href="#conclusion">Conclusión</a></li>
          </ul>
        </div>

        <div className="section" id="supuestos">
          <h2>Supuestos y Divulgación</h2>
          <ol>
            <li>
              <strong>Disponibilidad y calidad de los datos</strong>
              <ul>
                <li>El cliente compartirá referencias de tiendas en línea para ser utilizados como inspiraciones para el diseño y desarrollo de su nuevo sitio de ecommerce.</li>
                <li>Para la carga de productos, el cliente enviará la información de una manera organizada, es decir, las imágenes y los textos relevantes serán fácil de acceder y de entender su orden</li>
              </ul>
            </li>
            <li>
              <strong>Alineación de diseño</strong>
              <ul>
                <li>Se desarrollará el sitio web basado en el diseño aprobado.</li>
              </ul>
            </li>
            <li>
              <strong>Expectativas del usuario</strong>
              <ul>
                <li>Los usuarios finales están familiarizados con las interacciones básicas de un sitio web de ecommerce (crear cuenta, iniciar sesión, agregar al carrito).</li>
                <li>Los usuarios prefieren una interfaz limpia, minimalista y con filtros intuitivos.</li>
              </ul>
            </li>
            <li>
              <strong>Cronograma y retroalimentación</strong>
              <ul>
                <li>Los participantes del proyecto estarán disponibles para reuniones de seguimiento y proporcionarán retroalimentación oportuna durante las fases de revisión.</li>
              </ul>
            </li>
            <li>
              <strong>Cumplimiento legal</strong>
              <ul>
                <li>Goldstein Systems no asumirá responsabilidad por el uso indebido o ilegal del sitio web</li>
              </ul>
            </li>
          </ol>
        </div>

        <div className="section" id="alcance">
          <h2>Alcance del Proyecto</h2>
          <ol>
            <li>
              <strong>Estrategia y definición inicial</strong>
              <ul>
                <li>Reunión de levantamiento de requerimientos: entender objetivos de negocio, público objetivo y métricas de éxito.</li>
                <li>Benchmarking y análisis competitivo: revisar referentes y buenas prácticas del sector.</li>
                <li>Definición de funcionalidades clave: carrito de compras, checkout, pasarela de pago, registro de usuarios, gestión de inventario, etc.</li>
                <li>Presentación del roadmap del proyecto: fases, hitos y entregables.</li>
              </ul>
            </li>
            <li>
              <strong>Diseño UX/UI</strong>
              <ul>
                <li>Arquitectura de información: definición de la estructura del sitio, navegación y categorías de productos.</li>
              </ul>
            </li>
            <li>
              <strong>Desarrollo técnico</strong>
              <ul>
                <li>Desarrollo frontend: maquetación responsiva, optimización para móviles y accesibilidad.</li>
                <li>Desarrollo backend: gestión de productos, usuarios, pedidos, descuentos, cupones y reportes.</li>
                <li>Panel de administración: interfaz para gestionar catálogo, pedidos y clientes.</li>
              </ul>
            </li>
            <li>
              <strong>Seguridad y cumplimiento</strong>
              <ul>
                <li>Certificado SSL y configuración HTTPS.</li>
                <li>Cumplimiento de normativas: privacidad de datos (ej. GDPR, Ley de Protección de Datos), políticas de cookies.</li>
                <li>Seguridad en transacciones: integración con pasarelas certificadas PCI-DSS.</li>
              </ul>
            </li>
            <li>
              <strong>Pruebas y control de calidad</strong>
              <ul>
                <li>Testing funcional: validación de cada módulo (carrito, checkout, búsqueda).</li>
                <li>Testing de usabilidad: verificar que la experiencia sea fluida y sin fricciones.</li>
                <li>Pruebas de carga y rendimiento: asegurar que el sitio soporte tráfico esperado.</li>
                <li>Revisión cross-browser y dispositivos.</li>
              </ul>
            </li>
            <li>
              <strong>Lanzamiento</strong>
              <ul>
                <li>Capacitación: formación al equipo en uso del panel de administración.</li>
                <li>Monitoreo inicial: seguimiento post-lanzamiento para resolver incidencias.</li>
              </ul>
            </li>
          </ol>

          <h3>Consideraciones específicas del alcance</h3>
          <ul>
            <li>
              <strong>Catálogo de productos</strong>
              <ul>
                <li>Carga inicial de hasta 200 SKUs, con variantes (color, talla, material).</li>
              </ul>
            </li>
            <li>
              <strong>Pasarela de pago (Stripe)</strong>
              <ul>
                <li>Integración de Stripe como pasarela principal.</li>
                <li>Métodos incluidos: tarjetas de crédito y débito.</li>
              </ul>
            </li>
            <li>
              <strong>Logística y envíos</strong>
              <ul>
                <li>Configuración de envíos estándar: tarifa plana y/o envío gratuito, no incluye conexión a sistemas de terceros.</li>
              </ul>
            </li>
            <li>
              <strong>Diseño y experiencia de usuario</strong>
              <ul>
                <li>Diseño personalizado para las pantallas de home, categorías, producto, carrito y checkout.</li>
                <li>Diseño responsivo optimizado para móviles.</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="section" id="cronograma">
          <h2>Cronograma del Proyecto</h2>
          <p>
            La entrega se realizará dentro de las 8 semanas a partir de la fecha de inicio del proyecto, que se define como el día en que se recibe el pago inicial y se proporciona toda la información necesaria del proyecto a Goldstein Systems. Demora en el envío de la información necesaria, podría extender el tiempo de entrega.
          </p>
        </div>

        <div className="section" id="precio">
          <h2>Precio</h2>
          <div className="price">72,000 MXN exento de IVA</div>
          
          <h3>Calendario de Pagos</h3>
          <p>Para garantizar un proceso de pago estructurado y transparente, el siguiente calendario de facturación se aplicará al compromiso entre Goldstein Systems y el cliente:</p>
          <ul>
            <li><strong>Pago inicial – 36,000 MXN</strong> Vencible antes del inicio de las actividades del proyecto. Este pago asegura la fecha de inicio del proyecto y cubre los esfuerzos iniciales de planificación, diseño y desarrollo.</li>
            <li><strong>Pago intermedio – 18,000 MXN</strong> Vencible al finalizar la programación visual de las pantallas. Este pago contribuirá a la continuación del proyecto y cubre los esfuerzos adicionales necesarios para su avance hacia la conclusión.</li>
            <li><strong>Pago final – 18,000 MXN</strong> Vencible después de que el sitio web esté lanzado. Este pago será requerido una vez que Goldstein Systems notifique que el proyecto ha llegado a su finalización.</li>
          </ul>
        </div>

        <div className="section" id="entregables">
          <h2>Entregables</h2>
          <ul>
            <li><strong>Código Fuente del sistema</strong> Código fuente completo, incluyendo la lógica de la aplicación y la integración con servicios backend.</li>
            <li><strong>Base de Datos y Backend</strong> Esquema de base de datos, API y servicios backend necesarios para el funcionamiento del sistema.</li>
            <li><strong>Documentación Técnica y Manuales</strong> Documentación del código, guías para el mantenimiento y actualización del sistema, y manuales de usuario.</li>
          </ul>
        </div>

        <div className="section" id="conclusion">
          <h2>Conclusión</h2>
          <p>
            Estamos seguros de que nuestra experiencia en soluciones tecnológicas, junto con nuestra dedicación para comprender sus necesidades únicas, resultará en una experiencia de usuario fluida e impactante para su plataforma.
          </p>
          <p>
            Esperamos trabajar juntos para hacer realidad esta visión, y estamos comprometidos a entregar resultados de alta calidad a tiempo y dentro del presupuesto. Si tienes alguna pregunta, por favor no dudes en decirme.
          </p>
          <p>
            Estamos listos para iniciar el proyecto tan pronto como recibamos el pago inicial. La presente propuesta vence el 30 de Septiembre del 2025.
          </p>

          <h3>Próximos pasos:</h3>
          <ol>
            <li>Solución de dudas.</li>
            <li>Enviar el pago inicial.</li>
            <li>Compartir información del proyecto.</li>
          </ol>

          <div className="signature">
            <p>Estoy a sus órdenes,</p>
            <p><strong>Michael Goldstein</strong><br />
            Goldstein Systems<br />
            michael@goldsteinsystems.com</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="proposal-footer">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo-container">
              <img src="/logo.png" alt="Goldstein Systems" className="footer-logo" />
            </div>
          </div>
          <div className="footer-section">
            <h4>Contacto</h4>
            <p>michael@goldsteinsystems.com</p>
          </div>
          <div className="footer-section">
            <h4>Fecha de Vencimiento</h4>
            <p>30 de Septiembre del 2025</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Goldstein Systems LTD. Todos los derechos reservados.</p>
        </div>
      </div>
    </div>
  );
};

export default ProposalG5499;
