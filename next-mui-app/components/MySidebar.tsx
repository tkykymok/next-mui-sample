'use client';

import React, { ReactNode, useEffect, useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';
import { ListItemButton } from '@mui/material';
import { AdminPanelSettings, Person } from '@mui/icons-material';
import MenuGroup from '@/components/MenuGroup';

export type SubItem = {
  name: string;
  icon: ReactNode;
  url: string;
};

export type MenuItem = {
  name: string;
  icon: ReactNode;
  url: string;
  subItems: SubItem[];
};

function MySidebar() {
  // サイドバー開閉フラグ
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  // 一般メニュー定義一覧
  const commonMenuItems: MenuItem[] = [
    {
      name: 'モーダルサンプル',
      icon: <MailIcon color="inherit" />,
      url: '/modal-sample',
      subItems: [],
    },
    {
      name: 'フォームサンプル',
      icon: <MailIcon color="inherit" />,
      url: '/form-sample',
      subItems: [],
    },
    {
      name: 'テーブルサンプル',
      icon: <MailIcon color="inherit" />,
      url: '/table-sample',
      subItems: [],
    },
    {
      name: 'レイアウトサンプル1',
      icon: <MailIcon color="inherit" />,
      url: '/layout-sample1',
      subItems: [],
    },
    {
      name: 'Item 1',
      icon: <InboxIcon />,
      url: '',
      subItems: [
        {
          name: 'Sub item 1',
          icon: <MailIcon color="inherit" />,
          url: '/form-sample',
        },
        {
          name: 'Sub item 2',
          icon: <MailIcon color="inherit" />,
          url: '/item1/subitem2',
        },
      ],
    },
    {
      name: 'Item 2',
      icon: <MailIcon color="inherit" />,
      url: '',
      subItems: [
        {
          name: 'Sub item 3',
          icon: <MailIcon color="inherit" />,
          url: '/item2/subitem3',
        },
      ],
    },
    {
      name: 'Item 3',
      icon: <MailIcon color="inherit" />,
      url: '/item3',
      subItems: [],
    },
  ];

  // 管理者メニュー定義一覧
  const adminMenuItems: MenuItem[] = [
    {
      name: 'ユーザー登録',
      icon: <InboxIcon />,
      url: '',
      subItems: [
        { name: 'Sub item 3', icon: <MailIcon />, url: '/item2/subitem3' },
      ],
    },
    {
      name: 'メニュー権限設定',
      icon: <MailIcon />,
      url: '',
      subItems: [],
    },
  ];

  /**
   * サイドバー開閉
   */
  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Drawer
      className="flex-shrink-0 h-screen"
      PaperProps={{
        className: `${isSidebarOpen ? 'w-64' : 'w-14'} bg-green-500 relative`,
        sx: {
          transition: 'width 0.3s',
          overflowY: 'scroll',
          '&::-webkit-scrollbar': {
            width: '0px',
            background: 'transparent',
          },
        },
      }}
      variant="permanent"
      open
    >
      <List>
        {/* サイドバー開閉ボタン */}
        <ListItemButton onClick={handleSidebarToggle}>
          {isSidebarOpen ? (
            <ExpandLess
              sx={{ transform: 'rotate(-90deg)', marginLeft: 'auto' }}
            />
          ) : (
            <ExpandMore
              sx={{ transform: 'rotate(-90deg)', marginLeft: 'auto' }}
            />
          )}
        </ListItemButton>

        {/* 一般メニュー */}
        <MenuGroup
          title="一般メニュー"
          icon={<Person color="inherit" sx={{ mr: 1 }} />}
          menuItems={commonMenuItems}
          isSidebarOpen={isSidebarOpen}
        />
      </List>

      <List>
        {/* 管理者メニュー */}
        <MenuGroup
          title="管理者メニュー"
          icon={<AdminPanelSettings color="inherit" sx={{ mr: 1 }} />}
          menuItems={adminMenuItems}
          isSidebarOpen={isSidebarOpen}
        />
      </List>
    </Drawer>
  );
}

export default MySidebar;
