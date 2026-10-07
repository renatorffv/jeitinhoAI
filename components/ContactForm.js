"use client";

import { useState } from "react";
import { services, whatsappLink } from "./site";

// Monta a mensagem e abre o WhatsApp — sem backend, funciona direto no Vercel.
export default function ContactForm() {
  const [form, setForm] = useState({ nome: "", negocio: "", servico: "", mensagem: "" });

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    const lines = [
      `Olá! Meu nome é ${form.nome.trim()}.`,
      form.negocio.trim() && `Negócio: ${form.negocio.trim()}`,
      form.servico && `Interesse: ${form.servico}`,
      form.mensagem.trim() && `\n${form.mensagem.trim()}`,
    ].filter(Boolean);
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form__row">
        <label>
          <span>Seu nome</span>
          <input required value={form.nome} onChange={update("nome")} placeholder="Como podemos te chamar?" />
        </label>
        <label>
          <span>Seu negócio</span>
          <input value={form.negocio} onChange={update("negocio")} placeholder="Ex.: Padaria do Zé" />
        </label>
      </div>
      <label>
        <span>O que você procura?</span>
        <select value={form.servico} onChange={update("servico")}>
          <option value="">Ainda não sei, quero conversar</option>
          {services.map((s) => (
            <option key={s.id} value={s.title}>
              {s.title}
            </option>
          ))}
        </select>
      </label>
      <label>
        <span>Conte um pouco</span>
        <textarea
          rows={4}
          value={form.mensagem}
          onChange={update("mensagem")}
          placeholder="Qual problema você quer resolver?"
        />
      </label>
      <button type="submit" className="btn btn--primary btn--lg">
        Enviar pelo WhatsApp
      </button>
    </form>
  );
}
