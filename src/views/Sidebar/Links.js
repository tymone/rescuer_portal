export const links = [
  { href: '/', icon: 'fas fa-home', title: 'Strona główna', exact: true },
  {
    href: '/harmonogram',
    icon: 'far fa-calendar-alt',
    title: 'Harmonogram',
    sublinks: [
      {
        href: 'dodaj',
        icon: 'far fa-calendar-plus',
        title: 'dodaj',
      },
      { href: 'edytuj', icon: 'fas fa-edit', title: 'edytuj' },
    ],
  },
  {
    href: '/druzyna',
    icon: 'fas fa-users',
    title: 'Drużyna KSRG',
    sublinks: [{ href: 'dodaj', icon: 'fas fa-user-plus', title: 'dodaj' }],
  },
  {
    href: '/cwiczenia',
    icon: 'fas fa-graduation-cap',
    title: 'Ćwiczenia',
    sublinks: [
      { href: 'dodaj', icon: 'far fa-calendar-plus', title: 'dodaj' },
      { href: 'edytuj', icon: 'fas fa-edit', title: 'edytuj' },
    ],
  },
  {
    href: '/zadania',
    icon: 'fas fa-tasks',
    title: 'Zadania',
    sublinks: [{ href: 'dodaj', icon: 'fas fa-folder-plus', title: 'dodaj' }],
  },
];
