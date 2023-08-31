import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { Home as HomeIcon, Info as InfoIcon, ContactMail as ContactIcon } from '@mui/icons-material';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
  const [currentPage, setCurrentPage] = useState<string>('Home'); 

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    onClose(); 
  };

  const sidebarPages = [
    { label: 'Dashboard', link: '/', icon: <HomeIcon /> },
    { label: 'About', link: '/about', icon: <InfoIcon /> },
    { label: 'Contact', link: '/contact', icon: <ContactIcon /> },
  ];

  return (
    <Drawer open={open} onClose={onClose}>
      <List>
        {sidebarPages.map((page) => (
          <ListItem
            key={page.label}
            button
            selected={currentPage === page.label}
            onClick={() => handlePageChange(page.label)}
          >
            <ListItemIcon>{page.icon}</ListItemIcon>
            <ListItemText primary={page.label} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
