import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWraper, SidebarMenu, SidebarLink } from './SidebarElements'
const Sidebar = ({ isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
                
        </Icon>
        <SidebarWraper>
            <SidebarMenu>
            <SidebarLink to="inicio" onClick={toggle}>Inicio</SidebarLink>
            <SidebarLink to="razor" onClick={toggle}>Quem é a razor</SidebarLink>
            <SidebarLink to="criadores" onClick={toggle}>Criadores</SidebarLink>
            </SidebarMenu>
        </SidebarWraper>
    </SidebarContainer>
  )
}

export default Sidebar