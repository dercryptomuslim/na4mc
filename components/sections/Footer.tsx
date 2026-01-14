import { Mail, Calendar, Instagram, Linkedin, Music2 } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-secondary/30 pt-20 pb-10 border-t border-border">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-6">NA4MC</h3>
            <p className="text-muted-foreground max-w-sm mb-6">
              Nomad Agency for Marketing & Consulting LLC.<br/>
              Social Media, KI & Prozesse – für messbare Ergebnisse.
            </p>
            <div className="flex gap-4">
              <Link 
                href="https://www.instagram.com/dercryptomuslim" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background rounded-full flex items-center justify-center border border-border hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link 
                href="https://www.tiktok.com/@dercryptomuslim" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background rounded-full flex items-center justify-center border border-border hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 transition-colors"
                aria-label="TikTok"
              >
                <Music2 className="w-5 h-5" />
              </Link>
              <Link 
                href="https://www.linkedin.com/in/mustafa-ali-10b83a182" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background rounded-full flex items-center justify-center border border-border hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Leistungen</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Social Media Betreuung</li>
              <li>Werbeanzeigen</li>
              <li>Prozesse & Automatisierung</li>
              <li>KPI-Auswertung</li>
              <li>Content-Produktion</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Kontakt</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />{" "}
                <a className="hover:text-orange-600 transition-colors" href="mailto:mustafa.ali@na4mc.de">
                  mustafa.ali@na4mc.de
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />{" "}
                <Link className="hover:text-orange-600 transition-colors" href="/bewerbung">
                  Potenzialanalyse starten
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Nomad Agency for Marketing & Consulting LLC. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <Link className="hover:text-orange-600 transition-colors" href="/impressum">Impressum</Link>
            <Link className="hover:text-orange-600 transition-colors" href="/datenschutz">Datenschutz</Link>
            <Link className="hover:text-orange-600 transition-colors" href="/agb">AGB</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
