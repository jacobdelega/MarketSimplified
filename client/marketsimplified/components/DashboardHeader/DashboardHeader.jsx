import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Home, ShoppingCart, Package, Users2, LineChart, Search, PanelLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import LogoutButton from "@/components/LogoutButton/LogoutButton";
const DashboardHeader = ({ path }) => {
    const userData = "test";
    return (
        <header className='sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6'>
            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        size='icon'
                        variant='outline'
                        className='sm:hidden'>
                        <PanelLeft className='h-5 w-5' />
                        <span className='sr-only'>Toggle Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent
                    side='left'
                    className='sm:max-w-xs'>
                    <nav className='grid gap-6 text-lg font-medium'>
                        <Link
                            href='/dashboard'
                            className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'>
                            <Home className='h-5 w-5' />
                            Dashboard
                        </Link>
                        <Link
                            href='#'
                            className='flex items-center gap-4 px-2.5 text-foreground'>
                            <ShoppingCart className='h-5 w-5' />
                            Orders
                        </Link>
                        <Link
                            href='#'
                            className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'>
                            <Package className='h-5 w-5' />
                            Products
                        </Link>
                        <Link
                            href='#'
                            className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'>
                            <Users2 className='h-5 w-5' />
                            Customers
                        </Link>
                        <Link
                            href='/dashboard/settings'
                            className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'>
                            <LineChart className='h-5 w-5' />
                            Settings
                        </Link>
                    </nav>
                </SheetContent>
            </Sheet>
            <Breadcrumb className='hidden md:flex'>
                <BreadcrumbList>
                    {path.map((item, index) => {
                        return (
                            <>
                                <BreadcrumbItem key={index}>
                                    <BreadcrumbLink asChild>
                                        <Link href={`/` + item.toLowerCase()}>{item}</Link>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                            </>
                        );
                    })}
                </BreadcrumbList>
            </Breadcrumb>
            <div className='relative ml-auto flex-1 md:grow-0'>
                <Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
                <Input
                    type='search'
                    placeholder='Search...'
                    className='w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]'
                />
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant='outline'
                        size='icon'
                        className='overflow-hidden rounded-full'>
                        <Image
                            src='/avatar.png'
                            width={36}
                            height={36}
                            alt='Avatar'
                            className='overflow-hidden rounded-full'
                        />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end'>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <Link href='/dashboard/settings'>
                        <DropdownMenuItem>Settings</DropdownMenuItem>
                    </Link>
                    <DropdownMenuItem>Support</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    {/* Make Server-Side Logout */}
                    <DropdownMenuItem>
                        <LogoutButton session={userData} />
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </header>
    );
};

export default DashboardHeader;
