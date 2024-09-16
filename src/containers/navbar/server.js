"use server";

import { NavbarClient } from './client';
import { handleRequest } from '@/utils';
import { ENDPOINTS } from '@/const/endpoints';

export const Navbar = async () => {
    const { data } = await handleRequest({
        url: ENDPOINTS.CATEGORIES_MCO
    });
    return (
        <NavbarClient data={data}/>
    )
}