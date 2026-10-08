function CatalogoAdmin({ videojuegos, onEliminar }) {
  return (
    <div className="card border-0 shadow-sm management-list mt-4">
      <div className="card-body p-4">
        <div className="d-flex justify-content-between align-items-center gap-3 mb-3">
          <h3 className="h5 mb-0">Administrar catálogo</h3>
          <span className="badge text-bg-light">{videojuegos.length} juegos</span>
        </div>

        <div className="admin-game-list">
          {videojuegos.map((videojuego) => (
            <div className="admin-game-item" key={videojuego.id}>
              <div>
                <strong>{videojuego.nombre}</strong>
                <small>{videojuego.categoria}</small>
              </div>
              <button
                type="button"
                className="btn btn-outline-danger btn-sm"
                onClick={() => onEliminar(videojuego.id)}
                aria-label={`Eliminar ${videojuego.nombre} del catálogo`}
              >
                <i className="bi bi-trash3 me-1" />
                Eliminar
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CatalogoAdmin;
