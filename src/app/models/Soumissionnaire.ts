import { Etat } from "./Etat";
import { Fonction } from "./Fonction";
import { formeJuridique } from "./Formejuridique";
import { gouvernorat } from "./Gouvernerat";
import { Pays } from "./Pays";
import { TypeMarche } from "./TypeMarche";
import { Ville } from "./Ville";

export class Soumissionnaire {
    soumissionnaireReference?:number;

      soumissionnaireRaisonSociale?:String;
      soumissionnaireCapital?:number;
      soumissionnaireMatriculeFiscal?:String;
      soumissionnaireAdresseSiegeSocial?:String;
      soumissionnaireAffiliationCnss?:String;
      soumissionnaireNumeroRib?:String;
      soumissionnaireLieuOuvertureCompte?:String;
      soumissionnaireAnneeCreation?:Date;
      soumissionnaireIdentifiant?:String;
      soumissionnaireNom?:String;
      soumissionnairePrenom?:String;
      soumissionnaireTel?:String;
      soumissionnaireFax?:String;
      soumissionnaireMailEntreprise?:String;
      soumissionnaireSiteWeb?:String;
      soumissionnaireTitreRep?:String;
      soumissionnaireMailRep?:String;
      soumissionnaireTelRep?:String;
    
     soumissionnaireNumeroRegistreCommerce?:String;
     codePostaleId?:number; 
     
      soumissionnaireAutreAdresse?:String;

      fonction: Fonction = new Fonction;
      formejuridique: formeJuridique = new formeJuridique;
      gouvernorat: gouvernorat = new gouvernorat;
      pays: Pays = new Pays;
      ville: Ville = new Ville;
      typeMarche: TypeMarche = new TypeMarche;
      etat: Etat = new Etat;
      soumissionnaireEtatCompte: Etat = new Etat;
    
    
  }