import React from "react";
import {
  DataList,
  DataListItem,
  DataListCell,
  DataListItemRow,
  DataListItemCells,
  DataListAction,
  Flex,
  FlexItem,
  Label,
  LabelGroup,
} from "@patternfly/react-core";
import PlusCircleIcon from "@patternfly/react-icons/dist/esm/icons/plus-circle-icon";
import OutlinedQuestionCircleIcon from "@patternfly/react-icons/dist/esm/icons/outlined-question-circle-icon";
import { useTranslation } from "react-i18next";

export const ConnectorTypeListItem: React.FunctionComponent = () => {
  const [selectedDataListItemId, setSelectedDataListItemId] =
    React.useState("");

  const onSelectDataListItem = (id) => {
    setSelectedDataListItemId(id);
  };

  const handleInputChange = (
    id: string,
    _event: React.FormEvent<HTMLInputElement>
  ) => {
    setSelectedDataListItemId(id);
  };

  const { t } = useTranslation();

  return (
    <DataList
      aria-label="selectable data list example"
      selectedDataListItemId={selectedDataListItemId}
      onSelectDataListItem={onSelectDataListItem}
      selectableRow={{ onChange: handleInputChange }}
    >
      <DataListItem aria-labelledby="selectable-action-item1" id="item1">
        <DataListItemRow>
          <Flex justifyContent={{ default: "justifyContentFlexStart" }}>
            <FlexItem>
              <PlusCircleIcon size="md" color="blue" />
            </FlexItem>
            <FlexItem>
              <DataListItemCells
                dataListCells={[
                  <DataListCell key="primary content">
                    <Flex direction={{ default: "column" }}>
                      <FlexItem>
                        <Flex>
                          <FlexItem>
                            <strong
                              className="pf-u-font-weight-bold"
                              id="selectable-action-item1"
                            >
                              {t("common:connectors.amazon_queue_service")}
                            </strong>
                          </FlexItem>
                          <FlexItem>
                            <OutlinedQuestionCircleIcon
                              href="#filled"
                              color="grey"
                            />
                          </FlexItem>
                          <FlexItem>
                            <span className="pf-u-font-size-sm pf-u-color-400">
                              {t("common:connectors.version")}
                            </span>
                          </FlexItem>
                        </Flex>
                      </FlexItem>
                      <FlexItem>
                        <LabelGroup numLabels="10">
                          <Label color="blue">
                            {t("common:connectors.source_label")}
                          </Label>
                          <Label>{t("common:connectors.amazon_label")}</Label>
                          <Label>
                            {t("common:connectors.streaming_messaging_label")}
                          </Label>
                        </LabelGroup>
                      </FlexItem>
                    </Flex>
                  </DataListCell>,
                ]}
              />
            </FlexItem>
          </Flex>
          <DataListAction
            aria-labelledby="selectable-action-item1 selectable-action-action1"
            id="selectable-action-action1"
            aria-label="Actions"
            isPlainButtonAction
          ></DataListAction>
        </DataListItemRow>
      </DataListItem>

      <DataListItem aria-labelledby="selectable-actions-item2" id="item2">
        <DataListItemRow>
          <Flex justifyContent={{ default: "justifyContentFlexStart" }}>
            <FlexItem>
              <PlusCircleIcon size="md" color="green" />
            </FlexItem>
            <FlexItem>
              <DataListItemCells
                dataListCells={[
                  <DataListCell key="primary content">
                    <Flex direction={{ default: "column" }}>
                      <FlexItem>
                        <Flex>
                          <FlexItem>
                            <strong
                              className="pf-u-font-weight-bold"
                              id="selectable-action-item1"
                            >
                              {t("common:connectors.amazon_queue_service")}
                            </strong>
                          </FlexItem>
                          <FlexItem>
                            <OutlinedQuestionCircleIcon color="grey" />
                          </FlexItem>
                          <FlexItem>
                            <span className="pf-u-font-size-sm pf-u-color-400">
                              {t("common:connectors.version")}
                            </span>
                          </FlexItem>
                        </Flex>
                      </FlexItem>
                      <FlexItem>
                        <LabelGroup numLabels="10">
                          <Label color="green">
                            {t("common:connectors.sink_label")}
                          </Label>
                          <Label>{t("common:connectors.amazon_label")}</Label>
                          <Label>
                            {t("common:connectors.streaming_messaging_label")}
                          </Label>
                        </LabelGroup>
                      </FlexItem>
                    </Flex>
                  </DataListCell>,
                ]}
              />
            </FlexItem>
          </Flex>
          <DataListAction
            aria-labelledby="selectable-actions-item2 selectable-actions-action2"
            id="selectable-actions-action2"
            aria-label="Actions"
            isPlainButtonAction
          ></DataListAction>
        </DataListItemRow>
      </DataListItem>

      <DataListItem aria-labelledby="selectable-actions-item3" id="item3">
        <DataListItemRow>
          <Flex justifyContent={{ default: "justifyContentFlexStart" }}>
            <FlexItem>
              <PlusCircleIcon size="md" color="green" />
            </FlexItem>
            <FlexItem>
              <DataListItemCells
                dataListCells={[
                  <DataListCell key="primary content">
                    <Flex direction={{ default: "column" }}>
                      <FlexItem>
                        <Flex>
                          <FlexItem>
                            <strong
                              className="pf-u-font-weight-bold"
                              id="selectable-action-item1"
                            >
                              {t("common:connectors.slack")}
                            </strong>
                          </FlexItem>
                          <FlexItem>
                            <OutlinedQuestionCircleIcon color="grey" />
                          </FlexItem>
                          <FlexItem>
                            <span className="pf-u-font-size-sm pf-u-color-400">
                              {t("common:connectors.version")}
                            </span>
                          </FlexItem>
                        </Flex>
                      </FlexItem>
                      <FlexItem>
                        <LabelGroup numLabels="10">
                          <Label color="green">
                            {t("common:connectors.sink_label")}
                          </Label>
                          <Label>
                            {t("common:connectors.streaming_messaging_label")}
                          </Label>
                        </LabelGroup>
                      </FlexItem>
                    </Flex>
                  </DataListCell>,
                ]}
              />
            </FlexItem>
          </Flex>
          <DataListAction
            aria-labelledby="selectable-actions-item3 selectable-actions-action3"
            id="selectable-actions-action3"
            aria-label="Actions"
            isPlainButtonAction
          ></DataListAction>
        </DataListItemRow>
      </DataListItem>

      <DataListItem aria-labelledby="selectable-actions-item4" id="item4">
        <DataListItemRow>
          <Flex justifyContent={{ default: "justifyContentFlexStart" }}>
            <FlexItem>
              <PlusCircleIcon size="md" color="blue" />
            </FlexItem>
            <FlexItem>
              <DataListItemCells
                dataListCells={[
                  <DataListCell key="primary content">
                    <Flex direction={{ default: "column" }}>
                      <FlexItem>
                        <Flex>
                          <FlexItem>
                            <strong
                              className="pf-u-font-weight-bold"
                              id="selectable-action-item1"
                            >
                              {t("common:connectors.postgresDB")}
                            </strong>
                          </FlexItem>
                          <FlexItem>
                            <OutlinedQuestionCircleIcon color="grey" />
                          </FlexItem>
                          <FlexItem>
                            <span className="pf-u-font-size-sm pf-u-color-400">
                              {t("common:connectors.version")}
                            </span>
                          </FlexItem>
                        </Flex>
                      </FlexItem>
                      <FlexItem>
                        <LabelGroup numLabels="10">
                          <Label color="blue">
                            {t("common:connectors.source_label")}
                          </Label>
                          <Label>
                            {t("common:connectors.change_data_capture_label")}
                          </Label>
                        </LabelGroup>
                      </FlexItem>
                    </Flex>
                  </DataListCell>,
                ]}
              />
            </FlexItem>
          </Flex>
          <DataListAction
            aria-labelledby="selectable-actions-item4 selectable-actions-action4"
            id="selectable-actions-action4"
            aria-label="Actions"
            isPlainButtonAction
          ></DataListAction>
        </DataListItemRow>
      </DataListItem>

      <DataListItem aria-labelledby="selectable-actions-item5" id="item5">
        <DataListItemRow>
          <Flex justifyContent={{ default: "justifyContentFlexStart" }}>
            <FlexItem>
              <PlusCircleIcon size="md" color="blue" />
            </FlexItem>
            <FlexItem>
              <DataListItemCells
                dataListCells={[
                  <DataListCell key="primary content">
                    <Flex direction={{ default: "column" }}>
                      <FlexItem>
                        <Flex>
                          <FlexItem>
                            <strong
                              className="pf-u-font-weight-bold"
                              id="selectable-action-item1"
                            >
                              {t("common:connectors.amazon_redshift")}
                            </strong>
                          </FlexItem>
                          <FlexItem>
                            <OutlinedQuestionCircleIcon color="grey" />
                          </FlexItem>
                          <FlexItem>
                            <span className="pf-u-font-size-sm pf-u-color-400">
                              {t("common:connectors.version")}
                            </span>
                          </FlexItem>
                        </Flex>
                      </FlexItem>
                      <FlexItem>
                        <LabelGroup numLabels="10">
                          <Label color="blue">
                            {t("common:connectors.source_label")}
                          </Label>
                          <Label>{t("common:connectors.amazon_label")}</Label>
                          <Label>{t("common:connectors.big_data_label")}</Label>
                          <Label>
                            {t("common:connectors.streaming_messaging_label")}
                          </Label>
                        </LabelGroup>
                      </FlexItem>
                    </Flex>
                  </DataListCell>,
                ]}
              />
            </FlexItem>
          </Flex>
          <DataListAction
            aria-labelledby="selectable-actions-item5 selectable-actions-action5"
            id="selectable-actions-action5"
            aria-label="Actions"
            isPlainButtonAction
          ></DataListAction>
        </DataListItemRow>
      </DataListItem>

      <DataListItem aria-labelledby="selectable-actions-item6" id="item6">
        <DataListItemRow>
          <Flex justifyContent={{ default: "justifyContentFlexStart" }}>
            <FlexItem>
              <PlusCircleIcon size="md" color="green" />
            </FlexItem>
            <FlexItem>
              <DataListItemCells
                dataListCells={[
                  <DataListCell key="primary content">
                    <Flex direction={{ default: "column" }}>
                      <FlexItem>
                        <Flex>
                          <FlexItem>
                            <strong
                              className="pf-u-font-weight-bold"
                              id="selectable-action-item1"
                            >
                              {t("common:connectors.amazon_redshift")}
                            </strong>
                          </FlexItem>
                          <FlexItem>
                            <OutlinedQuestionCircleIcon color="grey" />
                          </FlexItem>
                          <FlexItem>
                            <span className="pf-u-font-size-sm pf-u-color-400">
                              {t("common:connectors.version")}
                            </span>
                          </FlexItem>
                        </Flex>
                      </FlexItem>
                      <FlexItem>
                        <LabelGroup numLabels="10">
                          <Label color="green">
                            {t("common:connectors.sink_label")}
                          </Label>
                          <Label>{t("common:connectors.amazon_label")}</Label>
                          <Label>{t("common:connectors.big_data_label")}</Label>
                          <Label>
                            {t("common:connectors.streaming_messaging_label")}
                          </Label>
                        </LabelGroup>
                      </FlexItem>
                    </Flex>
                  </DataListCell>,
                ]}
              />
            </FlexItem>
          </Flex>
          <DataListAction
            aria-labelledby="selectable-actions-item6 selectable-actions-action6"
            id="selectable-actions-action6"
            aria-label="Actions"
            isPlainButtonAction
          ></DataListAction>
        </DataListItemRow>
      </DataListItem>
    </DataList>
  );
};
