/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { memo } from "react";
import { useForm } from "react-final-form-hooks";
import {
  AppState,
  FormState,
  CategorieSocioPro,
  TranchesAges,
  GroupTranchesAgesEffectif,
  ActionEffectifData
} from "../../globals.d";

import { parseIntFormValue, parseIntStateValue } from "../../utils/formHelpers";
import { displayInt } from "../../utils/helpers";

import BlocForm from "../../components/BlocForm";
import FieldInputsMenWomen from "../../components/FieldInputsMenWomen";
import ActionBar from "../../components/ActionBar";
import FormSubmit from "../../components/FormSubmit";
import { Cell, Cell2 } from "../../components/Cell";
import { ButtonSimulatorLink } from "../../components/SimulatorLink";

import {
  displayNameCategorieSocioPro,
  displayNameTranchesAges
} from "../../utils/helpers";

interface Props {
  effectif: AppState["effectif"];
  readOnly: boolean;
  updateEffectif: (data: ActionEffectifData) => void;
  validateEffectif: (valid: FormState) => void;
}

const getFieldName = (
  categorieSocioPro: CategorieSocioPro,
  trancheAge: TranchesAges,
  genre: "Hommes" | "Femmes"
): string => "nombreSalaries" + categorieSocioPro + genre + trancheAge;

function EffectifForm({
  effectif,
  readOnly,
  updateEffectif,
  validateEffectif
}: Props) {
  const infoFields = effectif.nombreSalaries.map(
    ({ categorieSocioPro, tranchesAges }) => {
      return {
        categorieSocioPro,
        tranchesAges: tranchesAges.map(
          ({
            trancheAge,
            nombreSalariesFemmes,
            nombreSalariesHommes
          }: GroupTranchesAgesEffectif) => {
            return {
              trancheAge,
              nbSalarieFemmeName: getFieldName(
                categorieSocioPro,
                trancheAge,
                "Femmes"
              ),
              nbSalarieFemmeValue: parseIntStateValue(nombreSalariesFemmes),
              nbSalarieHommeName: getFieldName(
                categorieSocioPro,
                trancheAge,
                "Hommes"
              ),
              nbSalarieHommeValue: parseIntStateValue(nombreSalariesHommes)
            };
          }
        )
      };
    }
  );

  const initialValues = infoFields.reduce((acc1, { tranchesAges }) => {
    return tranchesAges.reduce(
      (
        acc2,
        {
          nbSalarieFemmeName,
          nbSalarieFemmeValue,
          nbSalarieHommeName,
          nbSalarieHommeValue
        }
      ) => {
        return {
          ...acc2,
          [nbSalarieFemmeName]: nbSalarieFemmeValue,
          [nbSalarieHommeName]: nbSalarieHommeValue
        };
      },
      acc1
    );
  }, {});

  const saveForm = (formData: any) => {
    const nombreSalaries = infoFields.map(
      ({ categorieSocioPro, tranchesAges }) => ({
        categorieSocioPro,
        tranchesAges: tranchesAges.map(
          ({ trancheAge, nbSalarieFemmeName, nbSalarieHommeName }) => ({
            trancheAge,
            nombreSalariesFemmes: parseIntFormValue(
              formData[nbSalarieFemmeName]
            ),
            nombreSalariesHommes: parseIntFormValue(
              formData[nbSalarieHommeName]
            )
          })
        )
      })
    );
    updateEffectif({ nombreSalaries });
  };

  const onSubmit = (formData: any) => {
    saveForm(formData);
    validateEffectif("Valid");
  };

  const {
    form,
    handleSubmit,
    values,
    hasValidationErrors,
    submitFailed
  } = useForm({
    initialValues,
    onSubmit
  });

  form.subscribe(
    ({ values, dirty }) => {
      if (dirty) {
        saveForm(values);
      }
    },
    { values: true, dirty: true }
  );

  const { totalNbSalarieHomme, totalNbSalarieFemme } = infoFields.reduce(
    (acc, { tranchesAges }) => {
      const {
        totalGroupNbSalarieHomme,
        totalGroupNbSalarieFemme
      } = tranchesAges.reduce(
        (accGroup, { nbSalarieHommeName, nbSalarieFemmeName }) => {
          return {
            totalGroupNbSalarieHomme:
              accGroup.totalGroupNbSalarieHomme +
              parseIntFormValue(values[nbSalarieHommeName], 0),
            totalGroupNbSalarieFemme:
              accGroup.totalGroupNbSalarieFemme +
              parseIntFormValue(values[nbSalarieFemmeName], 0)
          };
        },
        { totalGroupNbSalarieHomme: 0, totalGroupNbSalarieFemme: 0 }
      );

      return {
        totalNbSalarieHomme: acc.totalNbSalarieHomme + totalGroupNbSalarieHomme,
        totalNbSalarieFemme: acc.totalNbSalarieFemme + totalGroupNbSalarieFemme
      };
    },
    { totalNbSalarieHomme: 0, totalNbSalarieFemme: 0 }
  );

  return (
    <form onSubmit={handleSubmit} css={styles.container}>
      {infoFields.map(({ categorieSocioPro, tranchesAges }) => {
        const {
          totalGroupNbSalarieHomme,
          totalGroupNbSalarieFemme
        } = tranchesAges.reduce(
          (accGroup, { nbSalarieHommeName, nbSalarieFemmeName }) => {
            return {
              totalGroupNbSalarieHomme:
                accGroup.totalGroupNbSalarieHomme +
                parseIntFormValue(values[nbSalarieHommeName], 0),
              totalGroupNbSalarieFemme:
                accGroup.totalGroupNbSalarieFemme +
                parseIntFormValue(values[nbSalarieFemmeName], 0)
            };
          },
          { totalGroupNbSalarieHomme: 0, totalGroupNbSalarieFemme: 0 }
        );
        return (
          <BlocForm
            key={categorieSocioPro}
            title={displayNameCategorieSocioPro(categorieSocioPro)}
            label="nombre de salariés"
            footer={[
              displayInt(totalGroupNbSalarieFemme),
              displayInt(totalGroupNbSalarieHomme)
            ]}
          >
            {tranchesAges.map(
              ({ trancheAge, nbSalarieFemmeName, nbSalarieHommeName }) => {
                return (
                  <FieldInputsMenWomen
                    key={trancheAge}
                    readOnly={readOnly}
                    form={form}
                    name={displayNameTranchesAges(trancheAge)}
                    calculable={true}
                    calculableNumber={0}
                    mask="number"
                    femmeFieldName={nbSalarieFemmeName}
                    hommeFieldName={nbSalarieHommeName}
                  />
                );
              }
            )}
          </BlocForm>
        );
      })}

      <div css={styles.rowFoot}>
        <div css={styles.rowFootText}>total des effectifs</div>
        <Cell style={styles.rowFootCell}>
          {displayInt(totalNbSalarieFemme)}
        </Cell>
        <Cell style={styles.rowFootCell}>
          {displayInt(totalNbSalarieHomme)}
        </Cell>
      </div>

      <div css={styles.rowFoot}>
        <div css={styles.rowFootText}>soit</div>
        <Cell2 style={styles.rowFootCell}>
          {displayInt(totalNbSalarieHomme + totalNbSalarieFemme)}
        </Cell2>
      </div>

      {readOnly ? (
        <ActionBar>
          <ButtonSimulatorLink to="/indicateur1" label="suivant" />
        </ActionBar>
      ) : (
        <ActionBar>
          <FormSubmit
            hasValidationErrors={hasValidationErrors}
            submitFailed={submitFailed}
            errorMessage="vous ne pouvez pas valider les effectifs
              tant que vous n’avez pas rempli tous les champs"
          />
        </ActionBar>
      )}
    </form>
  );
}

const styles = {
  container: css({
    display: "flex",
    flexDirection: "column"
  }),

  rowFoot: css({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 16,
    marginTop: 10,
    paddingRight: 20
  }),
  rowFootCell: css({
    fontSize: 14,
    textAlign: "center"
  }),
  rowFootText: css({
    fontStyle: "italic",
    fontSize: 14,
    marginLeft: "auto"
  })
};

export default memo(
  EffectifForm,
  (prevProps, nextProps) => prevProps.readOnly === nextProps.readOnly
);
