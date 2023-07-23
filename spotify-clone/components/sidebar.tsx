"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";

import Box from "./Box";
import SidebarItem from "./SidebarItem";

interface SidebarProps {
    children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
    const pathname = usePathname();

    const routes = useMemo(() => [ // function routes has strings that has the an array with data for the component "SidebbarItem"
        {
            icon: HiHome, // sends the home icon
            label: 'Home', // the string value
            active: pathname !== '/search', //everytime we are not in /search from the url on our page. That means the first item is active
            href: '/', //redirects to homepage
        },
        {
            icon: BiSearch, // sends the search icon
            label: 'Search', // the string value
            active: pathname === '/search', 
            href: '/search',
        }
    ], [pathname]);

    return (
        <div className="flex h-full">
            <div className="
            hidden
            md:flex
            flex-col
            gap-y-2
            bg-black
            h-full
            w-[300px]
            p-2
            ">
                <Box>
                    <div
                    className="
                        flex
                        flex-col
                        gap-y-4
                        px-5
                        py-4
                    ">
                        {routes.map((item) => (
                            <SidebarItem key={item.label} //this iterates thru const routes function and prints our the "SidebarItem component twice"
                            {...item}
                            />
                        ))}
                    </div>
                </Box>
                <Box className="overflow-y-auto h-full">
                    Song Library
                </Box>
            </div>
            <main className="h-full flex-1 overflow-y-auto py-2">
                {children}
            </main>
        </div>
    );
}

export default Sidebar;