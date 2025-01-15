"use client"
import React, { useState } from 'react';
import Link from 'next/link';

function useBotSimulation() {
  const [isConnected, setIsConnected] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [internalThoughts, setInternalThoughts] = useState("");

  function toggleConnection() {
    setIsConnected(!isConnected);
    if (!isConnected) {
      addMessage("Bot: ¡Conectado! Listo para recibir comandos.");
      updateInternalThoughts("Inicializando sistemas...");
    } else {
      addMessage("Bot: Desconectado.");
      updateInternalThoughts("Sistemas apagados.");
    }
  }

  function addMessage(newMessage: string) {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  }

  function updateInternalThoughts(thought: React.SetStateAction<string>) {
    setInternalThoughts(thought);
  }

  return { isConnected, toggleConnection, messages, addMessage, internalThoughts, updateInternalThoughts };
}

export default function AIPage() {
  const { isConnected, toggleConnection, messages, addMessage, internalThoughts, updateInternalThoughts } = useBotSimulation();
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = (sender: string, message: string) => {
    addMessage(`${sender}: ${message}`);
    updateInternalThoughts(`Procesando: "${message}"...`);
    setTimeout(() => {
      addMessage(`Bot: He recibido tu mensaje: "${message}".`);
      updateInternalThoughts("Esperando más instrucciones...");
    }, 2000); // Simula un retraso en la respuesta del bot
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-start p-8 relative bg-gray-900 text-white">
      <h1 className="text-6xl font-extrabold mb-12 mt-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
        AI UglySoul
      </h1>
      <h2 className="text-4xl font-bold mb-8 text-center">Visualizador de la mente</h2>

      {/* Estado de conexión con luz */}
      <div className="flex items-center mb-6">
        <div
          className={`w-4 h-4 rounded-full mr-2 ${
            isConnected ? 'bg-green-500 shadow-green-glow' : 'bg-red-500'
          }`}
        ></div>
        <p className="text-lg">Estado: {isConnected ? 'Conectado' : 'Desconectado'}</p>
      </div>

      {/* Botón de conexión */}
      <button
        onClick={toggleConnection}
        className="mb-6 p-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        {isConnected ? 'Desconectar' : 'Conectar'} al bot
      </button>

      {/* Sección de pensamientos internos */}
      <div className="w-full max-w-2xl bg-gray-800 p-6 rounded-lg mb-6">
        <h3 className="text-xl font-medium mb-4">Pensamientos Internos:</h3>
        <div className="bg-gray-700 p-4 rounded-lg">
          <p className="text-gray-300 italic">{internalThoughts}</p>
        </div>
      </div>

      {/* Sección de mensajes y respuestas */}
      <div className="w-full max-w-2xl bg-gray-800 p-6 rounded-lg mb-6">
        <h3 className="text-xl font-medium mb-4">Mensajes y Respuestas:</h3>
        <div className="bg-gray-700 p-4 rounded-lg max-h-64 overflow-y-auto">
          <ul className="space-y-2">
            {messages.map((msg, index) => (
              <li key={index} className="text-gray-300">
                {msg}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Entrada de mensajes */}
      <input
        type="text"
        placeholder="Escribe un mensaje para el bot..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && inputValue.trim()) {
            handleSendMessage('Usuario', inputValue);
            setInputValue('');
          }
        }}
        className="mb-4 p-2 w-full max-w-2xl border rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Botón para ir a inicio */}
      <Link
        href="/"
        className="inline-block px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors duration-300"
      >
        Home
      </Link>
    </main>
  );
}