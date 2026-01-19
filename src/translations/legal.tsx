import React from 'react';
import { Download, ExternalLink } from 'lucide-react';

export const legalContent: Record<string, { title: string; lastUpdate: string; content: React.ReactNode }> = {
  'privacy-policy': {
    title: 'Privacy Policy',
    lastUpdate: '08.07.2025',
    content: (
      <div className="legal-content">
        <p>La società Tinvention S.r.l., con sede legale in Via Giovanni Pacini n. 93, 20131 Milano (MI), Italia (di seguito "Tinvention" o la "Società"), in qualità di titolare del trattamento, ai sensi del Regolamento UE n. 2016/679 (di seguito "GDPR"), si impegna a tutelare e rispettare la Sua privacy.</p>
        
        <h3>Oggetto del trattamento</h3>
        <p>La presente informativa (insieme ad altri documenti in essa citati) descrive i dati personali ("Dati Personali") che la Società raccoglie dall’utente del sito web e come vengono trattati.</p>
        <ol type="a">
          <li>La Società raccoglie informazioni personali sulle visite al sito web, fra cui, a titolo meramente esemplificativo, dati sul traffico, dati sulla posizione, weblog e moduli di contatto, nonché altri dati di comunicazione e le risorse a cui l’utente accede. La raccolta di queste informazioni personali renderà la visita al sito web più facile in futuro, poiché la Società sarà in grado di suggerire contenuti pertinenti sulla base della posizione da cui si accede al sito.</li>
          <li>La Società raccoglie tutte le informazioni fornite dall’utente nell’invio dei moduli di contatto (ad esempio "Contatti") e in particolare nome, cognome, indirizzo e-mail, Codice Fiscale, numero di telefono, provincia, Partita Iva, Ragione Sociale. Fornire informazioni personali tramite i moduli di contatto non è un requisito legale o contrattuale; tuttavia, si noti che i campi contrassegnati con un asterisco (*) sono campi obbligatori, poiché la Società necessita di queste informazioni per adempiere o rispondere alla richiesta dell’utente. Altre informazioni o informazioni personali vengono condivise al momento della compilazione dei moduli di contatto a discrezione dell’utente. In caso di contatto con la Società, verrà tenuta traccia di tale corrispondenza.</li>
          <li>Vengono utilizzate le informazioni personali per l'invio diretto di marketing via e-mail se questa opzione è stata accettata nel relativo modulo di contatto. È possibile decidere di non ricevere più comunicazioni di marketing in qualsiasi momento.</li>
          <li>La società inoltre può salvare cookies, come descritto più dettagliatamente nella Cookie Policy.</li>
        </ol>

        <h3>Finalità del trattamento</h3>
        <p>I Dati Personali sono raccolti e trattati dalla Società al fine di:</p>
        <ol type="a">
          <li>adattare i contenuti e le risorse alle preferenze dell’utente;</li>
          <li>rispondere alle richieste o alle domande dell’utente o e-mail o telefonicamente;</li>
          <li>inviare altre informazioni e comunicazioni via e-mail che potrebbero essere di interesse dell’utente;</li>
          <li>creare, pubblicare e migliorare i contenuti più pertinenti per l’utenza;</li>
          <li>garantire che i contenuti forniti tramite il sito siano presentati nel modo più efficace per l’utente in base al loro dispositivo;</li>
          <li>consentire di partecipare a funzionalità interattive del sito, se lo si desidera;</li>
          <li>sviluppare e migliorare ulteriormente il sito e i sistemi per servire meglio l’utenza.</li>
        </ol>
        <p>L’uso delle informazioni sopra descritto è ammesso dalla legge applicabile in materia di protezione dei Dati Personali, in quanto:</p>
        <ol type="a">
          <li>necessario per i legittimi interessi della Società nel perseguire le finalità di cui sopra; tali interessi in ogni caso non sono in conflitto con il diritto alla privacy degli utenti;</li>
          <li>in alcuni casi, necessario per adempiere alle responsabilità legali o regolamentari della Società, ad esempio in caso di comunicazione alle autorità, enti governativi o di regolamentazione; o</li>
          <li>in alcuni casi, necessario per il compimento di un’azione di pubblico interesse e, nel caso in cui la Società utilizzi particolari categorie di Dati Personali, necessario per avviare, portare avanti o difendersi in azioni legali, o quando il trattamento riguarda informazioni personali manifestamente di pubblico dominio;</li>
          <li>in circostanze limitate, con il consenso prestato di volta in volta dall’utente, quando si accetta di ricevere notizie e comunicazioni di marketing via e-mail.</li>
        </ol>
        <p>La Società non prende decisioni automatizzate esclusivamente in base all’elaborazione automatica, fra cui la profilatura, che produce effetti legali sull’utente o ha altre conseguenze analoghe.</p>
        <p>La Società conserva le informazioni per il periodo necessario ad adempiere agli obblighi legali. Il periodo di conservazione delle informazioni personali dipende dallo scopo per cui vengono trattati i dati e dagli strumenti con cui tali informazioni personali sono trattate. Non è tuttavia possibile indicare il periodo di conservazione in maniera ragionevolmente comprensibile nella presente Informativa. I criteri utilizzati per determinare il periodo di conservazione applicabile sono strettamente correlati al tempo (i) necessario al relativo scopo, (ii) necessario all’espletamento del rapporto commerciale con l’utente, (iii) accettato dall’utente e/o (iv) richiesto dalle leggi applicabili in materia.</p>

        <h3>Condivisione dei Dati Personali con terzi</h3>
        <p>Per facilitare un uso efficiente delle informazioni e per fornire all’ utente contenuti e/o risorse, le informazioni sono divulgate a terzi. Tuttavia, tale divulgazione si verificherà solamente nelle seguenti circostanze:</p>
        <ol type="a">
          <li>a fornitori, appaltatori e agenti: la Società potrebbe coinvolgere o avvalersi di altre società e persone fisiche per svolgere alcune funzioni per suo conto, ad esempio l'hosting e/o la manutenance dei contenuti del sito web o la fornitura di determinate funzioni in esso contenute, oppure la fornitura di servizi di marketing o di aggiornamenti economici su richiesta dell’utente. I destinatari avranno accesso alle informazioni personali solamente nella misura richiesta dallo svolgimento delle proprie funzioni, e non potranno utilizzarle per altri fini. I destinatari saranno tenuti agli obblighi contrattuali di riservatezza;</li>
          <li>alle autorità governative o giudiziarie se la Società ritiene che quest’ultime siano legalmente tenute a richiederla.</li>
        </ol>

        <h3>Indirizzi IP e cookie</h3>
        <p>La Società raccoglie informazioni su computer o altri dispositivi informatici. Tali informazioni comprendono (ove disponibile) l’indirizzo IP, il sistema operativo e la versione di browser, per l'amministrazione di sistema. Si tratta di dati statistici sulle azioni e i comportamenti di navigazione degli utenti, che non identificano la persona. Per lo stesso motivo, la Società può ottenere informazioni sull’uso che l’utente fa di internet in generale, mediante un file cookie che viene memorizzato nel dispositivo. I cookie aiutano a migliorare il sito e a fornire contenuti migliori, più mirati. Per ulteriori informazioni sull’uso dei cookie sul sito, si veda la Cookie Policy.</p>

        <h3>Trasferimento dei Dati Personali</h3>
        <p>I Dati Personali raccolti possono essere trasferiti e trattati in una o più nazioni all’interno o al di fuori dell’Unione Europea. Vengono trasferiti i dati al di fuori dell'UE solo ai paesi che la Commissione Europea ritiene offrire un adeguato livello di protezione, o dove la Società ha attuato garanzie appropriate per preservare la riservatezza di tali informazioni.</p>

        <h3>Sicurezza dei dati</h3>
        <p>Sebbene la Società si impegna a fare tutto il possibile per tutelare le informazioni personali, si comunica che la cessione di informazioni via internet non è completamente sicura e non si può garantire la sicurezza dei Dati Personali trasmessi al sito web o a verze parti; per questo motivo, qualsiasi trasmissione di dati avviene a rischio e pericolo dell’utente. Vengono tuttavia applicate procedure operative rigorose e misure di sicurezza tecniche e organizzative adeguate al fine di prevenire qualsiasi accesso, modifica, eliminazione o trasmissione non autorizzati di tali informazioni personali.</p>

        <h3>Diritti dell’utente</h3>
        <p>Gli Articoli da 15 a 22 GDPR conferiscono all’utente, in qualità di interessato, l’esercizio di specifici diritti che si espongono qui di seguito:</p>
        <ol type="a">
          <li><strong>Diritto di accedere e ottenere una copia dei Suoi Dati Personali:</strong> l’utente ha il diritto di richiedere la conferma del fatto che la Società stia trattando qualsivoglia Suo dato personale. In tal caso, potrà avere accesso ai propri Dati Personali e ad alcune informazioni in merito al trattamento. In alcuni casi può richiedere alla Società di fornire una copia elettronica dei propri dati;</li>
          <li><strong>Diritto di rettifica dei Dati Personali:</strong> laddove sia in grado di dimostrare la non correttezza dei propri Dati Personali in possesso della Società, l’utente ha la possibilità di richiedere l’aggiornamento o la rettifica di tali dati;</li>
          <li><strong>Diritto all’oblio/alla cancellazione dei dati:</strong> in determinate circostanze, l’utente ha diritto a far cancellare i propri Dati Personali. La richiesta può essere presentata in qualsiasi momento e la Società valuterà la possibilità di accogliere tale richiesta. Tuttavia, tale diritto è soggetto a diritti o obblighi legali che potrebbero imporre alla Società la conservazione dei dati. Qualora si accerti che, ai sensi di legge, la richiesta di cancellazione dei Dati Personali possa essere accolta, la Società provvederà immediatamente a farlo senza ritardi ingiustificati;</li>
          <li><strong>Diritto di sollevare obiezioni:</strong> sebbene il trattamento dei dati dell’utente da parte della Società si basi sul legittimo interesse di quest’ultima (e su nessun’altra motivazione di trattamento), l’utente ha il diritto a obiettare alla modalità di trattamento dei propri Dati Personali messa in atto dalla Società in riferimento alla sua particolare situazione;</li>
          <li><strong>Diritto di ritirare il consenso:</strong> nella misura in cui il trattamento dei Dati Personali si basa sul Suo consenso, l’utente ha altresì il diritto di ritirare il consenso in qualsiasi momento. Il ritiro del consenso non pregiudica la legittimità di qualsiasi trattamento basata sul consenso dato prima di tale recesso.</li>
        </ol>

        <h3>Modalità di esercizio dei diritti</h3>
        <p>Al fine di esercitare i propri diritti, l’utente può scrivere al seguente indirizzo e-mail: <strong>privacy@tinvention.net</strong>. È altresì possibile presentare un reclamo riguardo il trattamento dei Dati Personali presso il Garante della Privacy locale.</p>

        <h3>Comunicazioni di marketing</h3>
        <p>La Società invia comunicazioni di marketing via e-mail soltanto se l’utente ha acconsentito a questa operazione. Di norma i moduli che la Società usa per raccogliere i Dati Personali contengono una casella da selezionare nel caso in cui si desideri ricevere comunicazioni di marketing. Quando vengono inviate comunicazioni di marketing via e-mail, l’utente può decidere di non ricevere ulteriori comunicazioni facendo clic su "cancella iscrizione" o sulla funzione di rinuncia nell'email. Inoltre, è possibile esercitare il diritto di recesso in qualsiasi momento contattando la Società all’indirizzo e-mail: <strong>privacy@tinvention.net</strong> e fornendo le seguenti informazioni: nome, indirizzo e-mail, numero di telefono e le comunicazioni di marketing che non si desiderano più ricevere.</p>

        <h3>Modifiche alla presente Privacy Policy</h3>
        <p>Le condizioni della presente Informativa possono cambiare di volta in volta. La Società pubblicherà eventuali modifiche sostanziali alla presente Informativa mediante debita comunicazione su questo sito web o contattando l’utente tramite altri canali.</p>

        <h3>Contatti</h3>
        <p>Vi informiamo che domande, commenti e richieste relativi alla presente Informativa potranno essere rivolti al Responsabile della Protezione dei dati (DPO) della Società al seguente indirizzo e-mail: <strong>privacy@tinvention.net</strong>.</p>
      </div>
    )
  },
  'privacy-candidates': {
    title: 'Informativa Privacy Candidati',
    lastUpdate: '08.07.2025',
    content: (
      <div className="legal-content">
        <p>La società Tinvention S.r.l., con sede legale in Via Giovanni Pacini n. 93, 20131 Milano (MI), Italia, in qualità di Titolare del trattamento, ai sensi del Regolamento UE n. 2016/679 (di seguito “GDPR”), si impegna a tutelare e rispettare la Sua privacy.</p>
        
        <h3>FINALITÀ DEL TRATTAMENTO PER RICERCA E SELEZIONE DI CANDIDATI E BASI GIURIDICHE DEL TRATTAMENTO</h3>
        <ol type="I">
          <li>
            <strong>Categorie di dati trattati</strong>
            <p>I Dati Personali che riguardano lei ed eventuali altri soggetti costituenti il suo nucleo familiare, ivi inclusi anche minori (collettivamente gli “Interessati”). In particolare, i dati appartengono alle seguenti categorie:</p>
            <ul>
              <li>Informazioni anagrafiche e di genere;</li>
              <li>Dati di contatto (indirizzo e-mail, numero di telefono);</li>
              <li>Dati relativi al suo attuale indirizzo di residenza e/o domicilio;</li>
              <li>Dati relativi alla formazione e condizione occupazionale;</li>
              <li>Dati relativi alle esperienze lavorative ed eventualmente ulteriori dati da lei inseriti nel curriculum vitae e/o forniti in sede di colloquio;</li>
              <li>Categorie particolari di dati ex art. 9 GDPR (es. informazioni idonee a rivelare lo stato di salute, l’orientamento sessuale o gli orientamenti politici/religiosi o le origini etniche).</li>
            </ul>
          </li>
          <li>
            <strong>Finalità e base giuridica dei trattamenti</strong>
            <p>I suoi dati sono trattati sia in caso di candidatura in risposta ad uno specifico annuncio sia in caso di candidatura volontaria per il perseguimento della finalità di ricerca e selezione di candidati, in particolare per l’inserimento diretto presso Tinvention S.r.l.</p>
            <p>Al fine di garantirle un inserimento lavorativo i Suoi dati possono essere trattati per tutte le ricerche e selezioni del personale in linea con il suo profilo, se Lei non si oppone a tale trattamento al momento del conferimento dei dati o successivamente. Qualora Lei si opponga a tale trattamento, i Suoi dati saranno trattati esclusivamente nell’ambito della specifica selezione per la quale lei si è candidato.</p>
            <p>La base giuridica applicabile al trattamento dei suoi dati personali per le finalità di cui al punto sopra riportato, è l’esecuzione di misure precontrattuali adottate su sua richiesta ex art. 6 paragrafo 1 lett. a) e b) del GDPR ed il legittimo interesse della Società ex art. 6 paragrafo 1 lett. f) del GDPR.</p>
          </li>
          <li>
            <strong>Periodo di conservazione dei dati</strong>
            <p>I suoi dati personali per le finalità sopra riportate sono inseriti nel database aziendale e saranno conservati per mesi 12 dal loro inserimento o per minor tempo in caso di revoca del suo consenso.</p>
            <p>Nel caso di trattamento dei dati per le finalità legate all’accertamento, all’esercizio o alla difesa di un diritto in sede giudiziaria, i dati saranno inseriti in un archivio storico e conservati per tutta la durata del contenzioso, fino all’esaurimento dei termini di esperibilità delle azioni di impugnazione.</p>
          </li>
        </ol>

        <h3>MODALITÀ DEL TRATTAMENTO</h3>
        <p>Il trattamento dei dati è improntato ai principi di correttezza, liceità e trasparenza e minimizzazione dei dati (privacy by design); potrà essere effettuato sia manualmente che attraverso modalità automatizzate atte a memorizzarli, elaborarli e trasmetterli ed avverrà mediante misure tecniche e organizzative adeguate a garantire la sicurezza, la riservatezza, l’integrità, la disponibilità e la resilienza dei sistemi e dei servizi, evitando il rischio di perdita, distruzione, accesso o divulgazione non autorizzati o, comunque, uso illecito, nonché mediante misure ragionevoli per cancellare o rettificare tempestivamente i dati inesatti rispetto alle finalità per le quali sono trattati.</p>

        <h3>A CHI POSSONO ESSERE COMUNICATI I SUOI DATI PERSONALI</h3>
        <p>I Suoi dati possono essere trattati esclusivamente dai dipendenti delle funzioni aziendali autorizzate al trattamento in quanto deputate al perseguimento delle finalità sopraindicate. Tali dipendenti hanno ricevuto, al riguardo, adeguate istruzioni operative.</p>
        <p>I Suoi dati personali possono essere altresì trattati da soggetti esterni, espressamente nominati Responsabili del trattamento, che forniscono a Tinvention S.r.l.:</p>
        <ul>
          <li>Servizi di gestione e manutenzione del database dei candidati;</li>
          <li>Servizi di archiviazione;</li>
          <li>Servizi di postalizzazione delle comunicazioni.</li>
        </ul>

        <h3>DIRITTI DELL’INTERESSATO</h3>
        <p>Agli interessati sono riconosciuti i diritti di cui agli artt. Dal 15 al 22 del GDPR, laddove applicabili. In particolare, gli interessati possono chiedere ai titolari l’accesso ai dati, la loro cancellazione, la rettifica dei dati inesatti, l’integrazione dei dati incompleti, nonché la limitazione del trattamento nei casi previsti dall’art. 18 del GDPR.</p>
        <p>Gli interessati hanno il diritto di opporsi in qualsiasi momento, in tutto o in parte, al trattamento dei dati necessario per il perseguimento legittimo dell’interesse del Titolare.</p>
        <p>Tali diritti possono essere esercitati scrivendo a mezzo posta all’indirizzo: <strong>privacy@tinvention.net</strong>.</p>
        <p>Resta inteso che, laddove la richiesta sia presentata mediante mezzi elettronici, le informazioni saranno fornite in un formato elettronico di uso comune. Gli interessati hanno il diritto di proporre reclamo all’Autorità di controllo competente.</p>

        <h3>REVOCA DEL CONSENSO</h3>
        <p>Gli interessati hanno il diritto di revocare i consensi prestati in qualsiasi momento inviando una comunicazione e-mail a: <strong>privacy@tinvention.net</strong>. La revoca del consenso non pregiudica la liceità dei trattamenti basati sul consenso che l’interessato ha prestato prima della revoca.</p>

        <h3>DATI DI CONTATTO DEL TITOLARE DEL TRATTAMENTO</h3>
        <p>Titolare del trattamento dei dati personali è Tinvention S.r.l., con sede in Milano via Giovanni Pacini 93, nella persona del suo Legale Rappresentante.</p>
      </div>
    )
  },
  'model-231': {
    title: 'Modello Organizzativo 231',
    lastUpdate: '02.01.2024',
    content: (
      <div className="legal-content">
        <p>Durante il 2023 abbiamo adottato il Modello di Organizzazione e Gestione ex d.lgs. 231/2001.</p>
        <p>Il Modello, ai sensi del Decreto Legislativo 231/2001, si riferisce a un insieme di protocolli utili a regolare e definire la struttura aziendale e la gestione dei suoi processi sensibili.</p>
        <p>Il Modello Organizzativo 231 di prevenzione dei rischi è, per noi, uno strumento fondamentale a livello gestionale e organizzativo.</p>
        
        <div style={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <a href="/legal/MOG_parte_generale.pdf" className="legal-doc-link" download="MOG Parte Generale">
            <Download size={18} /> MOG PARTE GENERALE
          </a>
          <a href="/legal/politica_anti_corruzione.pdf" className="legal-doc-link" download="Politica Anti Corruzione">
            <Download size={18} /> POLITICA ANTI CORRUZIONE
          </a>
          <a href="/legal/politica_di_whistleblowing.pdf" className="legal-doc-link" download="Politica di Whistleblowing">
            <Download size={18} /> POLITICA DI WHISTLEBLOWING
          </a>
          <a href="/legal/codice_etico.pdf" className="legal-doc-link" download="Codice Etico">
            <Download size={18} /> CODICE ETICO
          </a>
        </div>
      </div>
    )
  },
  'whistleblowing': {
    title: 'Whistleblowing',
    lastUpdate: '02.01.2024',
    content: (
      <div className="legal-content">
        <p>Tinvention S.r.l. si impegna ad operare in modo etico e responsabile e chiede alle persone che ne fanno parte come gli Amministratori, i Dirigenti, gli Organi di controllo, i Manager, i Dipendenti ed altri Collaboratori - ed ai suoi business partner di operare di conseguenza e nel rispetto di:</p>
        <ul>
          <li>Codice Etico di Tinvention S.r.l. e dei suoi valori fondanti;</li>
          <li>Leggi e regolamenti;</li>
          <li>Provvedimenti delle Autorità;</li>
          <li>Modello 231 e/o procedure aziendali;</li>
          <li>Diritti Umani.</li>
        </ul>

        <h3>COSA SEGNALARE</h3>
        <p>Tinvention S.r.l. incoraggia fortemente i propri stakeholder a segnalare qualsiasi attività scorretta, disonesta o potenzialmente illegale – potenziale, altamente probabile o già commessa - oltre a comportamenti che possano causare danno o pregiudizio, anche di immagine, a Tinvention S.r.l.</p>
        <p>A tal fine, Tinvention ha implementato regole specifiche e un processo di whistleblowing per fornire ai potenziali segnalanti dei canali sicuri che garantiscano la riservatezza della loro identità e delle informazioni contenute nella segnalazione e la loro protezione da eventuali ritorsioni.</p>
        <p style={{ marginTop: '1rem' }}>
          Per l’informativa Privacy Whisteblowing <a href="/legal/whistleblowing_informativa_privacy_segnalazione.pdf" download="Whistleblowing_Informativa Privacy per segnalazione" className="inline-link">clicca qui</a>
        </p>

        <h3>COME SEGNALARE</h3>
        <p>Tinvention S.r.l. ha messo a disposizione una piattaforma digitale esterna, gestita da una terza parte specializzata, al fine di garantire l'efficacia e la riservatezza del processo di segnalazione e fornire un accesso ampio ed indiscriminato a tutti coloro che desiderano effettuare una segnalazione. La piattaforma è accessibile dal sito <strong>www.tinvention.net</strong>. Anche se le segnalazioni anonime sono contemplate nella normativa di riferimento, Tinvention incoraggia i whistleblower a privilegiare quelle identificate, al fine di snellire e rendere più efficaci le indagini.</p>

        <div style={{ textAlign: 'center', margin: '3rem 0' }}>
          <a href="https://tinvention.wbisweb.it" target="_blank" rel="noopener noreferrer" className="premium-button">
             FAI UNA SEGNALAZIONE <ExternalLink size={18} />
          </a>
        </div>

        <h3>COSA FA TINVENTION DOPO AVER RICEVUTO LA SEGNALAZIONE?</h3>
        <p>Il processo di Whistleblowing si articola nelle seguenti fasi:</p>
        <ul>
          <li>Ricezione delle segnalazioni;</li>
          <li>Valutazione preliminare;</li>
          <li>Indagine;</li>
          <li>Chiusura delle segnalazioni.</li>
        </ul>
        <p>Le segnalazioni ricevute vengono analizzate per accertare i fatti descritti. I risultati dell'indagine e la proposta delle misure di prevenzione/mitigazione/penalizzazione da adottare vengono poi sottoposti all'OdV che ne valuta l'adeguatezza e, se necessario, richiede ulteriori approfondimenti.</p>

        <h3>COSA NON SEGNALARE</h3>
        <p>Non saranno trattate le segnalazioni diverse da quelle sopra descritte, in particolare quelle riferite a richieste e reclami di natura commerciale. In caso di segnalazioni infondate, fatte in malafede o con grave negligenza, Tinvention S.r.l. si riserva di agire in difesa dei propri interessi o dei soggetti danneggiati.</p>

        <h3>ALTRI CANALI DI COMUNICAZIONE</h3>
        <p>Le segnalazioni di whistleblowing possono essere inviate anche all'indirizzo: <strong>whistleblowing@tinvention.net</strong> o per posta ordinaria all'indirizzo: <strong>Tinvention S.r.l., Via Giovanni Pacini 93, 20131 Milano, Italia</strong>.</p>
        <p>Qualora attraverso i suddetti canali, coloro che segnalano richiedano un incontro, il Comitato Etico sarà a disposizione per raccogliere tale segnalazione e registrarla.</p>

        <h3>PROCEDURA GESTIONE SEGNALAZIONI – WHISTLEBLOWING</h3>
        <div style={{ marginTop: '1rem' }}>
          <a href="/legal/politica_di_whistleblowing.pdf" className="legal-doc-link" download="Politica di Whistleblowing">
            <Download size={18} /> DOWNLOAD PROCEDURA
          </a>
        </div>
      </div>
    )
  },
  'quality-policy': {
    title: 'Politica della Qualità',
    lastUpdate: '08.07.2025',
    content: (
      <div className="legal-content">
        <p>Tinvention S.r.l. è certificata ISO 9001:2015. La nostra Politica della Qualità riflette il nostro impegno costante verso l'eccellenza, la soddisfazione del cliente e il miglioramento continuo dei nostri processi produttivi e organizzativi.</p>
        <p>Attraverso l'adozione di standard internazionali, garantiamo che ogni prodotto e servizio fornito rispetti rigorosi criteri di qualità, affidabilità e sicurezza.</p>
        <div style={{ marginTop: '2rem' }}>
          <a href="/legal/politica_qualita.pdf" className="legal-doc-link" target="_blank" rel="noopener noreferrer">
            <Download size={18} /> SCARICA POLITICA DELLA QUALITÀ (PDF)
          </a>
        </div>
      </div>
    )
  }
};
