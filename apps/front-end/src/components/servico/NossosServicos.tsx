"use client";

import { useServicos } from "@barba/ui";
import { useRouter } from "next/navigation";
import Titulo from "../shared/Titulo";
import { Servico } from "@barba/core";
import ServicoItem from "./ServicoItem";

export default function NossosServicos() {
  const router = useRouter();
  const { servicos } = useServicos();

  function iniciarAgendamento() {
    router.push("/agendamento");
  }

  return (
    <div className="flex flex-col gap-16">
      <Titulo
        tag="Serviços"
        principal="Do Classico do Rock"
        secundario="Cabelo afiado, barba de lenhador e mãos de motoqueiro, tudo ao som de rock pesado !"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {servicos.map((servico: Servico) => (
          <ServicoItem
            key={servico.id}
            servico={servico}
            onClick={iniciarAgendamento}
          />
        ))}
      </div>
    </div>
  );
}
