'use client';

import React, { FC, ReactNode, useEffect, useState } from 'react';
import { MenuItem, SubItem } from '@/components/MySidebar';
import ListItemIcon from '@mui/material/ListItemIcon';
import CircleIcon from '@mui/icons-material/Circle';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Box, ListItemButton, Popover } from '@mui/material';
import Link from 'next/link';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import { usePathname } from 'next/navigation';

type MenuGroupProps = {
  title: string;
  icon: ReactNode;
  menuItems: MenuItem[];
  isSidebarOpen: boolean;
};

const MenuGroup: FC<MenuGroupProps> = ({
  title,
  icon,
  menuItems,
  isSidebarOpen,
}) => {
  // サブメニューポップアップの基準要素
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  // 選択されているメニュー
  const [selectedMenu, setSelectedMenu] = useState<null | MenuItem>(null);
  // メニューのテキスト表示フラグ
  const [showText, setShowText] = useState<boolean>(isSidebarOpen);
  // サブメニュー開閉フラグ一覧
  const [openSubMenu, setOpenSubMenu] = useState<boolean[]>(
    Array(menuItems.length).fill(false)
  );
  // 現在のパス
  const currentPath = usePathname();

  useEffect(() => {
    if (isSidebarOpen) {
      // isSidebarOpenがtrueに変更されたときのみ、表示遅延を追加します
      const timer = setTimeout(() => {
        setShowText(true);
      }, 200);
      return () => clearTimeout(timer);
    } else {
      // サイドバーを閉じるときにすべてのサブメニューを閉じます
      setOpenSubMenu((prev) => prev.map(() => false));
      setShowText(false);
    }
  }, [isSidebarOpen]);

  /**
   * サブメニュー開閉ハンドリング
   * @param index
   */
  const handleToggleSubMenu = (index: number) => {
    const newOpenSubMenu = [...openSubMenu];
    newOpenSubMenu[index] = !newOpenSubMenu[index];
    setOpenSubMenu(newOpenSubMenu);
  };

  /**
   * サブメニューポップアップOpen(サイドバーが閉じている場合)
   * @param event
   * @param menuItem
   */
  const handlePopoverOpen = (
    event: React.MouseEvent<HTMLElement>,
    menuItem: MenuItem
  ) => {
    setSelectedMenu(menuItem);
    setAnchorEl(event.currentTarget.nextElementSibling as HTMLElement);
  };

  /**
   * サブメニューポップアップClose(サイドバーが閉じている場合)
   */
  const handlePopoverClose = () => {
    setAnchorEl(null);
    setSelectedMenu(null);
  };

  /**
   * 背景色
   * @param isSelected
   * @param isSubItem
   * @returns
   */
  const getButtonStyles = (isSelected: boolean, isSubItem = false) => {
    if (isSelected) {
      return 'bg-neutral-200';
    }
    return isSubItem ? 'bg-green-400' : 'bg-green-500';
  };

  /**
   * テキスト色
   * @param isSelected
   * @returns
   */
  const getTextColor = (isSelected: boolean) => {
    return isSelected ? 'text-green-500' : 'text-neutral-200';
  };

  /**
   * メニューコンポーネント
   * サブメニューの存在有無に応じてコンポーネントの出し分けを行う
   * @param menuItem
   * @param isOpen
   * @param index
   * @constructor
   */
  const MenuItemContent = ({
    menuItem,
    isOpen,
    index,
    selected,
  }: {
    menuItem: MenuItem;
    isOpen: boolean;
    index: number;
    selected: boolean;
  }) => {
    // サブメニューが定義されているか
    const hasSubItems = menuItem.subItems?.length > 0;
    const content = (
      <>
        <ListItemIcon
          sx={{ marginTop: 1, marginBottom: 1 }}
          className={getTextColor(selected)}
        >
          {menuItem.icon}
          {!isSidebarOpen && hasSubItems && (
            <CircleIcon sx={{ fontSize: '0.4rem', my: 'auto', ml: 0.5 }} />
          )}
        </ListItemIcon>
        {showText && (
          <>
            <ListItemText
              primary={menuItem.name}
              className={getTextColor(selected)}
              sx={{ height: '20px' }}
            />
            {hasSubItems && (isOpen ? <ExpandLess /> : <ExpandMore />)}
          </>
        )}
      </>
    );

    return hasSubItems ? (
      // サブメニューが存在する場合
      <ListItemButton
        className={`${getButtonStyles(
          currentPath === menuItem.url
        )} ${getTextColor(currentPath === menuItem.url)}`}
        onClick={(event) =>
          isSidebarOpen
            ? handleToggleSubMenu(index)
            : handlePopoverOpen(event, menuItem)
        }
      >
        {content}
      </ListItemButton>
    ) : (
      // サブメニューが存在しない場合
      <Link href={menuItem.url} passHref className="no-underline">
        <ListItemButton
          className={getButtonStyles(currentPath === menuItem.url)}
        >
          {content}
        </ListItemButton>
      </Link>
    );
  };

  return (
    <>
      <Box
        display="flex"
        justifyItems="center"
        className="p-4 text-neutral-200"
        sx={{ borderBottom: '1px solid #e0e0e0' }}
      >
        {icon}
        {showText && <Box component="span">{title}</Box>}
      </Box>
      {menuItems.map((menuItem, index) => (
        <React.Fragment key={index}>
          <MenuItemContent
            menuItem={menuItem}
            isOpen={openSubMenu[index]}
            index={index}
            selected={currentPath === menuItem.url}
          />
          {menuItem.subItems?.length > 0 && (
            <Collapse in={openSubMenu[index]} timeout="auto">
              <List component="div" disablePadding>
                {menuItem.subItems.map((subItem, subIndex) => (
                  <Link
                    href={subItem.url}
                    passHref
                    key={subIndex}
                    className="no-underline"
                  >
                    <ListItemButton
                      className={`pl-8 ${getButtonStyles(
                        currentPath === subItem.url,
                        true
                      )} ${getTextColor(currentPath === subItem.url)}`}
                    >
                      <ListItemIcon
                        className={getTextColor(currentPath === subItem.url)}
                      >
                        {subItem.icon}
                      </ListItemIcon>
                      {showText && (
                        <ListItemText
                          primary={subItem.name}
                          sx={{ height: '20px' }}
                        />
                      )}
                    </ListItemButton>
                  </Link>
                ))}
              </List>
            </Collapse>
          )}
        </React.Fragment>
      ))}

      {/* ポップアップとしてのサブメニュー */}
      <Popover
        open={Boolean(anchorEl)}
        hidden={!Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
      >
        <List component="div" disablePadding className="bg-green-400">
          {selectedMenu?.subItems.map((subItem: SubItem, subIndex: number) => (
            <Link
              href={subItem.url}
              passHref
              key={subIndex}
              className="no-underline"
            >
              <ListItemButton
                className={`pl-8 ${getButtonStyles(
                  currentPath === subItem.url,
                  true
                )} ${getTextColor(currentPath === subItem.url)}`}
              >
                <ListItemIcon
                  className={getTextColor(currentPath === subItem.url)}
                >
                  {subItem.icon}
                </ListItemIcon>
                <ListItemText primary={subItem.name} />
              </ListItemButton>
            </Link>
          ))}
        </List>
      </Popover>
    </>
  );
};

export default MenuGroup;
