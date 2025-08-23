import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Beranda', href: '/' },
  {
    name: 'Profil',
    href: '#',
    submenu: [
      { name: 'Sejarah', href: '/profil/sejarah' },
      { name: 'Sambutan Pimpinan', href: '/profil/sambutan-pimpinan' },
    ],
  },
  {
    name: 'Lembaga',
    href: '#',
    submenu: [
      { name: 'TK IT Fathatul Hidayah', href: '/lembaga/tk-it' },
      { name: 'SD IT Fathatul Hidayah', href: '/lembaga/sd-it' },
      { name: 'SMP IT Fathatul Hidayah', href: '/lembaga/smp-it' },
    ],
  },
  {
    name: 'Informasi',
    href: '#',
    submenu: [
      { name: 'Berita', href: '/informasi/berita' },
      { name: 'Pengumuman', href: '/informasi/pengumuman' },
      { name: 'Kalender Akademik', href: '/informasi/kalender-akademik' },
    ],
  },
  { name: 'Saran', href: '/saran' },
  { name: 'Kontak', href: '/kontak' },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-gray-900/95 dark:supports-[backdrop-filter]:bg-gray-900/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="http://fathatulhidayah.sch.id/wp-content/uploads/2025/08/299778918_436318328519035_319590353865817870_n-removebg-preview.png"
            alt="Pondok Pesantren Al-Fattah Logo"
            className="h-8 w-auto"
          />
          <span className="font-bold text-lg text-primary-foreground">PONDOK PESANTREN AL-FATTAH</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) =>
            link.submenu ? (
              <DropdownMenu key={link.name}>
                <DropdownMenuTrigger className="text-sm font-medium transition-colors hover:text-primary-foreground focus:outline-none data-[state=open]:text-primary-foreground">
                  {link.name}
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48">
                  {link.submenu.map((subLink) => (
                    <DropdownMenuItem key={subLink.name} asChild>
                      <Link to={subLink.href}>{subLink.name}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-medium transition-colors hover:text-primary-foreground"
              >
                {link.name}
              </Link>
            )
          )}
          <Button asChild className="bg-[#fda00f] hover:bg-[#e08c00] text-white rounded-full px-6 py-2">
            <a href="https://app.fathatulhidayah.sch.id" target="_blank" rel="noopener noreferrer">
              Login
            </a>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 pt-8">
              {navLinks.map((link) =>
                link.submenu ? (
                  <div key={link.name}>
                    <span className="font-semibold text-lg text-gray-700 dark:text-gray-200">{link.name}</span>
                    <div className="ml-4 flex flex-col gap-2 mt-2">
                      {link.submenu.map((subLink) => (
                        <Link
                          key={subLink.name}
                          to={subLink.href}
                          className="text-sm text-gray-600 hover:text-primary-foreground dark:text-gray-300 dark:hover:text-primary-foreground"
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="font-semibold text-lg text-gray-700 hover:text-primary-foreground dark:text-gray-200 dark:hover:text-primary-foreground"
                  >
                    {link.name}
                  </Link>
                )
              )}
              <Button asChild className="mt-4 bg-[#fda00f] hover:bg-[#e08c00] text-white rounded-full px-6 py-2">
                <a href="https://app.fathatulhidayah.sch.id" target="_blank" rel="noopener noreferrer">
                  Login
                </a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;