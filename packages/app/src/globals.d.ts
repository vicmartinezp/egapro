export type AppState = {
  effectif: {
    formValidated: FormState;
    nombreSalaries: Array<GroupeEffectif>;
  };
  indicateurUn: {
    formValidated: FormState;
    remunerationAnnuelle: Array<GroupeIndicateurUn>;
  };
  indicateurDeux: {
    formValidated: FormState;
    presenceAugmentation: boolean;
    tauxAugmentation: Array<GroupeIndicateurDeux>;
  };
  indicateurTrois: {
    formValidated: FormState;
    presencePromotion: boolean;
    tauxPromotion: Array<GroupeIndicateurTrois>;
  };
  indicateurQuatre: {
    formValidated: FormState;
    presenceAugmentation: boolean;
    presenceCongeMat: boolean;
    nombreSalarieesPeriodeAugmentation: number | undefined;
    nombreSalarieesAugmentees: number | undefined;
  };
  indicateurCinq: {
    formValidated: FormState;
    nombreSalariesHommes: number | undefined;
    nombreSalariesFemmes: number | undefined;
  };
};

export type FormState = "None" | "Valid" | "Invalid";

export type ActionType =
  | {
      type: "initiateState";
      data: any;
    }
  | {
      type: "updateEffectif";
      data: ActionEffectifData;
    }
  | {
      type: "validateEffectif";
      valid: FormState;
    }
  | {
      type: "updateIndicateurUn";
      data: ActionIndicateurUnData;
    }
  | {
      type: "validateIndicateurUn";
      valid: FormState;
    }
  | {
      type: "updateIndicateurDeux";
      data: ActionIndicateurDeuxData;
    }
  | {
      type: "validateIndicateurDeux";
      valid: FormState;
    }
  | {
      type: "updateIndicateurTrois";
      data: ActionIndicateurTroisData;
    }
  | {
      type: "validateIndicateurTrois";
      valid: FormState;
    }
  | {
      type: "updateIndicateurQuatre";
      data: ActionIndicateurQuatreData;
    }
  | {
      type: "validateIndicateurQuatre";
      valid: FormState;
    }
  | {
      type: "updateIndicateurCinq";
      data: ActionIndicateurCinqData;
    }
  | {
      type: "validateIndicateurCinq";
      valid: FormState;
    };

export type ActionEffectifData = {
  nombreSalaries: Array<GroupeEffectif>;
};

export type ActionIndicateurUnData = {
  remunerationAnnuelle: Array<GroupeIndicateurUn>;
};

export type ActionIndicateurDeuxData = {
  presenceAugmentation: boolean;
  tauxAugmentation: Array<GroupeIndicateurDeux>;
};

export type ActionIndicateurTroisData = {
  presencePromotion: boolean;
  tauxPromotion: Array<GroupeIndicateurTrois>;
};

export type ActionIndicateurQuatreData = {
  presenceAugmentation: boolean;
  presenceCongeMat: boolean;
  nombreSalarieesPeriodeAugmentation: number | undefined;
  nombreSalarieesAugmentees: number | undefined;
};

export type ActionIndicateurCinqData = {
  nombreSalariesHommes: number | undefined;
  nombreSalariesFemmes: number | undefined;
};

////

export enum TranchesAges {
  MoinsDe30ans,
  De30a39ans,
  De40a49ans,
  PlusDe50ans
}

export enum CategorieSocioPro {
  Ouvriers,
  Employes,
  Techniciens,
  Cadres
}

export interface GroupTranchesAgesEffectif {
  trancheAge: TranchesAges;
  nombreSalariesFemmes: number | undefined;
  nombreSalariesHommes: number | undefined;
}

export interface GroupeEffectif {
  categorieSocioPro: CategorieSocioPro;
  tranchesAges: Array<GroupTranchesAgesEffectif>;
}

export interface GroupTranchesAgesIndicateurUn {
  trancheAge: TranchesAges;
  remunerationAnnuelleBrutFemmes: number | undefined;
  remunerationAnnuelleBrutHommes: number | undefined;
}

export interface GroupeIndicateurUn {
  categorieSocioPro: CategorieSocioPro;
  tranchesAges: Array<GroupTranchesAgesIndicateurUn>;
}

export interface GroupeIndicateurDeux {
  categorieSocioPro: CategorieSocioPro;
  tauxAugmentationFemmes: number | undefined;
  tauxAugmentationHommes: number | undefined;
}

export interface GroupeIndicateurTrois {
  categorieSocioPro: CategorieSocioPro;
  tauxPromotionFemmes: number | undefined;
  tauxPromotionHommes: number | undefined;
}

////////////

export type FAQPartType =
  | "champApplication"
  | "periodeReference"
  | "effectifs"
  | "remuneration"
  | "indicateur1"
  | "indicateur2et3"
  | "indicateur2"
  | "indicateur3"
  | "indicateur4"
  | "publication";

export type FAQPart = {
  [key in FAQPartType]: {
    title: string;
    qr: Array<{ question: string; reponse: Array<string> }>;
  }
};

export type FAQSectionType =
  | "champApplication"
  | "effectifs"
  | "indicateur1"
  | "indicateur2"
  | "indicateur3"
  | "indicateur4"
  | "indicateur5"
  | "resultat";

export type FAQSection = {
  [key in FAQSectionType]: {
    title: string;
    parts: Array<FAQPartType>;
  }
};

////////////

export type FAQContactLink = {
  type: "email" | "link";
  data: string;
};

export type FAQContactPerson = {
  title?: string;
  name: string;
  links: Array<FAQContactLink>;
};

export type FAQContact = Array<{
  title: string;
  people: Array<FAQContactPerson>;
}>;
