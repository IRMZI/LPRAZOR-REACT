import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWraper, SidebarMenu, SidebarLink } from './SidebarElements'
const Sidebar = () => {
  return (
    <SidebarContainer>
        <Icon>
            <CloseIcon/>
                
        </Icon>
        <SidebarWraper>
            <SidebarMenu>
            <SidebarLink to="inicio">Inicio</SidebarLink>
            <SidebarLink to="razor">Quem é a razor</SidebarLink>
            <SidebarLink to="criadores">Criadores</SidebarLink>
            </SidebarMenu>
        </SidebarWraper>
    </SidebarContainer>
  )
}

export default Sidebar