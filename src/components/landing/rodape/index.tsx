import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandYoutube,
  IconBrandLinkedin,
} from "@tabler/icons";
import Logo from "../comum/Logo";
import Area from "../comum/Area";
import Links from "./Links";
import LinkExterno from "./LinkExterno";
import RedesSociais from "./RedesSociais";

export default function Rodape() {
  return (
    <Area className="bg-black text-white py-10">
      <div className="flex flex-col gap-8">
        {/* Seção Principal */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Coluna 1 - Logo e Descrição */}
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="text-zinc-400 text-sm">
              Simplifique suas finanças com a Bitcent. Uma plataforma moderna e
              segura para gerenciar seu dinheiro.
            </p>
          </div>

          {/* Coluna 2 - Produtos e Serviços */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold">Produtos e Serviços</h3>
            <div className="flex flex-col gap-2">
              <LinkExterno texto="Conta Digital" url="#" />
              <LinkExterno texto="Cartão de Crédito" url="#" />
              <LinkExterno texto="Investimentos" url="#" />
              <LinkExterno texto="Seguros" url="#" />
            </div>
          </div>

          {/* Coluna 3 - Institucional */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold">Institucional</h3>
            <div className="flex flex-col gap-2">
              <LinkExterno texto="Sobre Nós" url="#" />
              <LinkExterno texto="Carreiras" url="#" />
              <LinkExterno texto="Imprensa" url="#" />
              <LinkExterno texto="Sustentabilidade" url="#" />
            </div>
          </div>

          {/* Coluna 4 - Ajuda e Contato */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold">Ajuda e Contato</h3>
            <div className="flex flex-col gap-2">
              <LinkExterno texto="Central de Ajuda" url="#" />
              <LinkExterno texto="Segurança" url="#" />
              <LinkExterno texto="Termos de Uso" url="#" />
              <LinkExterno texto="Política de Privacidade" url="#" />
            </div>
          </div>
        </div>

        {/* Linha Divisória */}
        <div className="border-t border-zinc-800"></div>

        {/* Seção Inferior */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright e Links Legais */}
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-zinc-400">
            <span>© 2024 Bitcent. Todos os direitos reservados.</span>
            <span className="hidden md:inline">|</span>
            <LinkExterno texto="Termos de Uso" url="#" />
            <span className="hidden md:inline">|</span>
            <LinkExterno texto="Política de Privacidade" url="#" />
          </div>

          {/* Contato do Desenvolvedor */}
          <div className="flex items-center gap-4">
            <LinkExterno
              texto="contatomarllonramos@gmail.com"
              url="mailto:contatomarllonramos@gmail.com"
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            />
            <div className="flex gap-2">
              <LinkExterno
                texto={<IconBrandGithub size={20} />}
                url="https://github.com/marllonramos"
                className="text-zinc-400 hover:text-white transition-colors"
              />
              <LinkExterno
                texto={<IconBrandLinkedin size={20} />}
                url="https://linkedin.com/in/marllonramos"
                className="text-zinc-400 hover:text-white transition-colors"
              />
            </div>
          </div>
        </div>
      </div>
    </Area>
  );
}
