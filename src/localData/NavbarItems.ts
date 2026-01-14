import React from 'react'
import { House, User, FolderGit2, Contact } from 'lucide-react'
import { NavbarItemTypes } from '@/types/NavbarItemTypes'

export const NavbarItems: NavbarItemTypes[] = [
    {
        title: 'Home',
        icon: House,
        href:'/'
    },
    {
        title: 'About Me',
        icon: User,
         href:'/about'
    },
    {
        title: 'Projects',
        icon: FolderGit2,
        href:'/projects'
    },
    {
        title: 'Contact Me',
        icon: Contact,
        href:'/contact'
    }
]
