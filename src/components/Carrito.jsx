const formatearPrecio = (precio) =>
  new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0,
  }).format(precio);

function Carrito({ items, onSumar, onRestar, onQuitar, onVaciar }) {
  const total = items.reduce((acumulado, item) => acumulado + item.precio * item.cantidad, 0);

  return (
    <section id="carrito" className="cart-section section-space">
      <div className="container">
        <div className="section-heading d-flex flex-column flex-lg-row justify-content-between align-items-lg-end gap-3">
          <div>
            <span className="eyebrow">CARRITO</span>
            <h2>Tu selección</h2>
            <p>Agrega videojuegos desde el catálogo y administra sus cantidades aquí.</p>
          </div>
          {items.length > 0 && (
            <button className="btn btn-outline-danger btn-sm" type="button" onClick={onVaciar}>
              <i className="bi bi-trash3 me-1" />
              Vaciar carrito
            </button>
          )}
        </div>

        {items.length === 0 ? (
          <div className="cart-empty text-center border rounded-4 bg-white">
            <i className="bi bi-cart3" />
            <h3 className="h5 mt-3">Tu carrito está vacío</h3>
            <p className="text-secondary mb-3">Agrega un videojuego desde el catálogo para comenzar.</p>
            <a className="btn btn-dark" href="#catalogo">Ver catálogo</a>
          </div>
        ) : (
          <div className="card border-0 shadow-sm cart-card">
            <div className="card-body p-0">
              {items.map((item) => (
                <div className="cart-item" key={item.id}>
                  <div className="cart-item-info">
                    <strong>{item.nombre}</strong>
                    <span>{formatearPrecio(item.precio)} c/u</span>
                  </div>

                  <div className="cart-actions">
                    <div className="btn-group btn-group-sm" role="group" aria-label={`Cantidad de ${item.nombre}`}>
                      <button className="btn btn-outline-secondary" type="button" onClick={() => onRestar(item.id)} aria-label="Disminuir cantidad">
                        <i className="bi bi-dash" />
                      </button>
                      <span className="btn btn-light disabled cart-quantity">{item.cantidad}</span>
                      <button className="btn btn-outline-secondary" type="button" onClick={() => onSumar(item.id)} aria-label="Aumentar cantidad">
                        <i className="bi bi-plus" />
                      </button>
                    </div>

                    <strong className="cart-subtotal">{formatearPrecio(item.precio * item.cantidad)}</strong>
                    <button className="btn btn-outline-danger btn-sm" type="button" onClick={() => onQuitar(item.id)} aria-label={`Quitar ${item.nombre} del carrito`}>
                      <i className="bi bi-x-lg" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="card-footer bg-white d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-2 p-4">
              <span className="text-secondary">Total de la compra</span>
              <strong className="cart-total">{formatearPrecio(total)}</strong>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Carrito;
