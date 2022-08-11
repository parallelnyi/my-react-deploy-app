import React, { useState } from "react";

export default function Main({ clicks }) {
  return (
    <main>
      <button onClick={clicks.nurbaHandler}>Нурбо</button>
      <button onClick={clicks.nestanaHandler}>Нестана</button>
      <button onClick={clicks.saidaHandler}>Саида</button>
      <button onClick={clicks.argenHandler}>Арген</button>
      <button onClick={clicks.nursHandler}>Нурсултан</button>
      <button onClick={clicks.vovaHandler}>Вова</button>
      <button onClick={clicks.erbolHandler}>Эрбол</button>
    </main>
  );
}
