import React, { useState } from "react";

function TareasHabitos() {
  const [tareas, setTareas] = useState([
    { id: 1, descripcion: "Hacer ejercicio", completada: false, tipo: "tarea" },
    { id: 2, descripcion: "Leer un libro", completada: true, tipo: "tarea" },
    { id: 3, descripcion: "Meditar", completada: false, tipo: "hábito" },
  ]);

  const [nuevaTarea, setNuevaTarea] = useState("");
  const [tipoSeleccionado, setTipoSeleccionado] = useState("tarea"); // Tipo de tarea (tarea o hábito)
  const [editandoTareaId, setEditandoTareaId] = useState(null); // ID de la tarea que se está editando

  const manejarTarea = (e) => {
    e.preventDefault();

    if (nuevaTarea.trim()) {
      if (editandoTareaId !== null) {
        setTareas(
          tareas.map((tarea) =>
            tarea.id === editandoTareaId
              ? { ...tarea, descripcion: nuevaTarea }
              : tarea
          )
        );
        setEditandoTareaId(null); 
      } else {
        const tarea = {
          id: tareas.length + 1,
          descripcion: nuevaTarea,
          completada: false,
          tipo: tipoSeleccionado, // Establecer el tipo de tarea
        };
        setTareas([...tareas, tarea]);
      }
      setNuevaTarea(""); 
    }
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };

  const toggleCompletada = (id) => {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
      )
    );
  };

  const editarTarea = (id) => {
    const tareaAEditar = tareas.find((tarea) => tarea.id === id);
    setNuevaTarea(tareaAEditar.descripcion);
    setTipoSeleccionado(tareaAEditar.tipo); // Establecer el tipo de tarea para la edición
    setEditandoTareaId(id); 
  };

  return (
    <div className="tareas-habitos-board">
      <h1>Gestión de Tareas y Hábitos</h1>

      <div className="tipo-tarea">
        <label>Selecciona el tipo:</label>
        <select
          value={tipoSeleccionado}
          onChange={(e) => setTipoSeleccionado(e.target.value)}
        >
          <option value="tarea">Tarea</option>
          <option value="hábito">Hábito</option>
        </select>
      </div>

      <div className="tareas-lista">
        <h3>Lista de Tareas</h3>
        <ul>
          {tareas
            .filter((tarea) => tarea.tipo === "tarea") // Filtra solo las tareas
            .map((tarea) => (
              <li
                key={tarea.id}
                className={`tarea-item ${tarea.completada ? "completada" : ""}`}
              >
                <span>{tarea.descripcion}</span>
                <div className="tarea-actions">
                  <button onClick={() => toggleCompletada(tarea.id)}>
                    {tarea.completada ? "Desmarcar" : "Completar"}
                  </button>
                  <button onClick={() => editarTarea(tarea.id)}>Editar</button>
                  <button onClick={() => eliminarTarea(tarea.id)}>
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
        </ul>
      </div>

      <div className="habitos-lista">
        <h3>Lista de Hábitos</h3>
        <ul>
          {tareas
            .filter((tarea) => tarea.tipo === "hábito") // Filtra solo los hábitos
            .map((tarea) => (
              <li
                key={tarea.id}
                className={`tarea-item ${tarea.completada ? "completada" : ""}`}
              >
                <span>{tarea.descripcion}</span>
                <div className="tarea-actions">
                  <button onClick={() => toggleCompletada(tarea.id)}>
                    {tarea.completada ? "Desmarcar" : "Completar"}
                  </button>
                  <button onClick={() => editarTarea(tarea.id)}>Editar</button>
                  <button onClick={() => eliminarTarea(tarea.id)}>
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
        </ul>
      </div>

      <div className="agregar-tarea">
        <h3>{editandoTareaId ? "Editar Tarea" : "Agregar Nueva Tarea"}</h3>
        <form onSubmit={manejarTarea}>
          <input
            type="text"
            placeholder="Descripción de la tarea"
            value={nuevaTarea}
            onChange={(e) => setNuevaTarea(e.target.value)}
            required
          />
          <button type="submit">
            {editandoTareaId ? "Guardar Cambios" : "Agregar"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default TareasHabitos;
