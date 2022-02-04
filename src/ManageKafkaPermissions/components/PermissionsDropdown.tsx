import {
  Divider,
  Dropdown,
  DropdownToggle,
  DropdownToggleAction,
  Menu,
  MenuContent,
  MenuGroup,
  MenuItem,
  MenuList,
  MenuProps,
  Popper,
} from "@patternfly/react-core";
import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  VoidFunctionComponent,
} from "react";
import { useTranslation } from "react-i18next";

export type PermissionsDropdownProps = {
  onAddPermission: () => void;
  onShortcutConsumeTopic: () => void;
  onShortcutProduceTopic: () => void;
  onShortcutManageAccess: () => void;
};

export const PermissionsDropdown: VoidFunctionComponent<PermissionsDropdownProps> =
  ({
    onAddPermission,
    onShortcutConsumeTopic,
    onShortcutProduceTopic,
    onShortcutManageAccess,
  }) => {
    const { t } = useTranslation(["manage-kafka-permissions"]);

    const [isOpen, setIsOpen] = useState(false);
    useState<string | number | undefined>(0);

    const toggleRef = useRef<HTMLButtonElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    const handleMenuKeys = useCallback(
      (event: KeyboardEvent) => {
        if (
          isOpen &&
          menuRef.current &&
          toggleRef.current &&
          event.target &&
          menuRef.current.contains(event.target as Node)
        ) {
          if (event.key === "Escape" || event.key === "Tab") {
            setIsOpen(!isOpen);
            toggleRef.current.focus();
          }
        }
      },
      [isOpen]
    );

    const handleClickOutside = useCallback(
      (event: MouseEvent) => {
        if (
          isOpen &&
          menuRef.current &&
          !menuRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      },
      [isOpen]
    );

    useEffect(() => {
      window.addEventListener("keydown", handleMenuKeys);
      window.addEventListener("click", handleClickOutside);

      return () => {
        window.removeEventListener("keydown", handleMenuKeys);
        window.removeEventListener("click", handleClickOutside);
      };
    }, [handleClickOutside, handleMenuKeys, isOpen, menuRef]);

    const onToggleClick = useCallback((open: boolean, ev: React.MouseEvent) => {
      ev.stopPropagation(); // Stop handleClickOutside from handling
      setTimeout(() => {
        if (menuRef.current) {
          const firstElement = menuRef.current.querySelector(
            "li > button,input:not(:disabled)"
          ) as HTMLElement | null;
          firstElement && firstElement.focus();
        }
      }, 0);
      setIsOpen(open);
    }, []);

    const handleSelect: MenuProps["onSelect"] = useCallback(
      (_event, itemId) => {
        setIsOpen(false);
        switch (itemId) {
          case "add_permission":
            onAddPermission();
            break;
          case "shortcut_consume_topic":
            onShortcutConsumeTopic();
            break;
          case "shortcut_produce_topic":
            onShortcutProduceTopic();
            break;
          case "shortcut_manage_access":
            onShortcutManageAccess();
            break;
        }
      },
      [
        onAddPermission,
        onShortcutConsumeTopic,
        onShortcutManageAccess,
        onShortcutProduceTopic,
      ]
    );

    const menu = (
      <Menu onSelect={handleSelect} key="acls-menu" ref={menuRef}>
        <MenuContent>
          <MenuList>
            <MenuGroup>
              <MenuList>
                <MenuItem itemId={"add_permission"}>
                  {t(
                    "manage_permissions_dialog.assign_permissions.add_permission"
                  )}
                </MenuItem>
              </MenuList>
            </MenuGroup>

            <Divider />
            <MenuGroup
              label={t(
                "manage_permissions_dialog.assign_permissions.task_based_permission"
              )}
            >
              <MenuList>
                <MenuItem
                  itemId={"shortcut_consume_topic"}
                  description={t(
                    "manage_permissions_dialog.assign_permissions.shortcut_consume_topic_description"
                  )}
                >
                  {t(
                    "manage_permissions_dialog.assign_permissions.shortcut_consume_topic"
                  )}
                </MenuItem>
                <MenuItem
                  itemId={"shortcut_produce_topic"}
                  description={t(
                    "manage_permissions_dialog.assign_permissions.shortcut_produce_topic_description"
                  )}
                >
                  {t(
                    "manage_permissions_dialog.assign_permissions.shortcut_produce_topic"
                  )}
                </MenuItem>
                <MenuItem
                  itemId={"shortcut_manage_access"}
                  description={t(
                    "manage_permissions_dialog.assign_permissions.shortcut_manage_access_description"
                  )}
                >
                  {t(
                    "manage_permissions_dialog.assign_permissions.shortcut_manage_access"
                  )}
                </MenuItem>
              </MenuList>
            </MenuGroup>
          </MenuList>
        </MenuContent>
      </Menu>
    );

    const toggle = (
      <Dropdown
        toggle={
          <DropdownToggle
            ref={toggleRef}
            splitButtonItems={[
              <DropdownToggleAction
                key="cog-action"
                aria-label="Action"
                onClick={onAddPermission}
              >
                {t(
                  "manage_permissions_dialog.assign_permissions.add_permission"
                )}
              </DropdownToggleAction>,
            ]}
            splitButtonVariant="action"
            onToggle={onToggleClick}
          />
        }
      />
    );

    return (
      <Popper
        trigger={toggle}
        popper={menu}
        isVisible={isOpen}
        popperMatchesTriggerWidth={false}
      />
    );
  };