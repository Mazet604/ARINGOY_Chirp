<div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
    <NavLink href={route('dashboard')} active={route().current('dashboard')}>
        Dashboard
    </NavLink>
    <NavLink href={route('chirps.index')} active={route().current('chirps.index')}>
        Chirps
    </NavLink>
</div>