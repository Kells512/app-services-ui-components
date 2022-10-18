import React from "react";
import { ToolbarItem } from "@patternfly/react-core";
import type { VoidFunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { RefreshButton } from "../../shared/RefreshButton/RefreshButton";
import { formatDistanceToNow } from "date-fns";

export type RefreshButtonProps = {
  isRefreshing: boolean;
  lastUpdated: Date | undefined;
  ariaLabel: string;
  onRefresh: () => void;
};

export const POCRefreshButton: VoidFunctionComponent<RefreshButtonProps> = ({
  isRefreshing,
  lastUpdated = new Date(),
  ariaLabel,
  onRefresh,
}) => {
  const { t } = useTranslation(["common"]);

  return (
    <>
      <ToolbarItem>
        <RefreshButton
          tooltip={
            isRefreshing
              ? t("common:refresh")
              : t("common:refresh_description") +
                ":" +
                "\n" +
                t("common:last-refresh") +
                " " +
                formatDistanceToNow(lastUpdated) +
                " " +
                t("common:last-refresh-distance")
          }
          ariaLabel={ariaLabel}
          onClick={onRefresh}
          isRefreshing={isRefreshing}
        />
      </ToolbarItem>
    </>
  );
};
