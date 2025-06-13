import { Instagram, MessageCircle, Github } from "lucide-react";

export function MyFooter() {
  return (
    <footer className="footer">
      <div className="info">
        <p>IFRN - Campus Macau<br />Curso Técnico em Informática<br />Programação para Internet 2025</p>
        <p className="author">Francirleide Trajano Da Silva</p>
      </div>
      <div className="icons">
        <Github />
        <Instagram />
        <MessageCircle />
      </div>
    </footer>
  );
}
