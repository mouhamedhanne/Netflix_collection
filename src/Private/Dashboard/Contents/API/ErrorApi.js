import React from "react";

export default function ErrorApi({ message, onReload }) {
  return (
    <div>
      <p className="font-semibold ">Message Erreur</p>
      {onReload && (
        <button className="text-white bg-mauve_primary">
          Actualiser La Page
        </button>
      )}
    </div>
  );
}
