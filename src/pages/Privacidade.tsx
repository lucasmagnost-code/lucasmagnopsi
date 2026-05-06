import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const Privacidade = () => (
  <main className="bg-off-white min-h-screen py-20 md:py-28">
    <article className="container max-w-3xl">

      <Link
        to="/"
        className="inline-flex items-center gap-1.5 font-body text-[13px] text-slate hover:text-gold transition-colors mb-10"
      >
        <ChevronLeft size={16} strokeWidth={1.8} />
        Voltar à página inicial
      </Link>

      <span className="section-label">Documento</span>
      <h1 className="font-display text-[40px] md:text-[52px] font-light text-navy leading-[1.1] mb-3">
        Política de Privacidade
      </h1>
      <p className="font-body text-[14px] text-slate/70 mb-12">
        Última atualização: 06 de maio de 2026
      </p>

      <div className="prose prose-slate max-w-none font-body text-[15px] text-slate leading-[1.85]">

        <p>
          Este documento descreve como Lucas Magno dos Santos Teixeira (CRP 01/24403), referido aqui como "Lucas Magno Psi",
          coleta, utiliza e protege os dados pessoais de pacientes e visitantes deste site, em conformidade com a
          Lei Geral de Proteção de Dados (LGPD, Lei nº 13.709/2018) e o Código de Ética Profissional do Psicólogo (CFP).
        </p>

        <h2 className="font-display text-[22px] font-medium text-navy mt-10 mb-4">1. Quem somos</h2>
        <p>
          Lucas Magno é Neuropsicólogo e Psicólogo Clínico devidamente registrado no Conselho Regional de Psicologia
          (CRP 01/24403), com atendimento presencial em Brasília (DF) e online para todo o Brasil.
        </p>

        <h2 className="font-display text-[22px] font-medium text-navy mt-10 mb-4">2. Quais dados coletamos</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-navy">Visitantes do site:</strong> nenhum dado pessoal é coletado
            automaticamente. Não utilizamos cookies de rastreamento ou ferramentas de analytics
            que identifiquem usuários individualmente.
          </li>
          <li>
            <strong className="text-navy">Contato via WhatsApp:</strong> ao clicar em qualquer botão de
            agendamento, você é direcionado para conversa direta com Lucas. Os dados que você
            compartilhar voluntariamente nessa conversa (nome, telefone, contexto da demanda)
            serão tratados sob sigilo profissional.
          </li>
          <li>
            <strong className="text-navy">Pacientes em atendimento:</strong> dados clínicos são tratados conforme
            o Código de Ética do CFP e a Resolução nº 001/2009 (registro documental).
          </li>
        </ul>

        <h2 className="font-display text-[22px] font-medium text-navy mt-10 mb-4">3. Finalidade do uso</h2>
        <p>Os dados que você nos confia são utilizados exclusivamente para:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Resposta a contatos de agendamento e dúvidas profissionais.</li>
          <li>Condução do processo terapêutico ou de avaliação neuropsicológica.</li>
          <li>Emissão de laudos, recibos e documentos formais quando aplicável.</li>
          <li>Cumprimento de obrigações legais e éticas do CFP.</li>
        </ul>
        <p className="mt-4">
          Nenhum dado é compartilhado com terceiros, utilizado para marketing,
          vendido ou cedido a qualquer título.
        </p>

        <h2 className="font-display text-[22px] font-medium text-navy mt-10 mb-4">4. Sigilo e segurança</h2>
        <p>
          O sigilo profissional é base inegociável do meu trabalho. Atendimentos online são
          conduzidos em plataformas com criptografia ponta-a-ponta. Registros clínicos são
          armazenados em ambiente seguro e acessíveis apenas pelo próprio profissional.
        </p>

        <h2 className="font-display text-[22px] font-medium text-navy mt-10 mb-4">5. Seus direitos (LGPD)</h2>
        <p>Você tem direito a, a qualquer momento:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Confirmar a existência de tratamento dos seus dados.</li>
          <li>Acessar, corrigir ou solicitar a exclusão dos dados que você compartilhou
              (respeitadas as obrigações legais de guarda de prontuário do CFP).</li>
          <li>Revogar consentimento dado para finalidades específicas.</li>
          <li>Solicitar informações sobre uso e compartilhamento dos dados.</li>
        </ul>

        <h2 className="font-display text-[22px] font-medium text-navy mt-10 mb-4">6. Contato</h2>
        <p>
          Para qualquer dúvida sobre esta política ou exercer um dos direitos acima,
          entre em contato pelo WhatsApp ou Instagram informados no rodapé do site.
        </p>

        <h2 className="font-display text-[22px] font-medium text-navy mt-10 mb-4">7. Atendimento de emergência</h2>
        <p>
          Este site <strong>não oferece atendimento de emergência</strong>. Em situações de crise
          ou pensamentos de autoextermínio, ligue imediatamente para o
          {" "}<a href="tel:188" className="text-gold underline underline-offset-4 font-semibold">CVV · 188</a>
          {" "}(24h, gratuito) ou procure a emergência mais próxima.
        </p>

        <p className="mt-12 pt-8 border-t border-slate/15 text-[13px] text-slate/65">
          Lucas Magno dos Santos Teixeira · CRP 01/24403 · Brasília, DF
        </p>
      </div>
    </article>
  </main>
);

export default Privacidade;
